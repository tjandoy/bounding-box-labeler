import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FileSaver from 'file-saver';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { filesSelector, selectedFilenameSelector } from '../selectors';

const Outer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const Header = styled.div`
  flex: 0 1 auto;
  border-bottom: solid gray 2px;
  padding: 5px 10px;
`;

const Container = styled.div`
  text-align: center;
  flex: 1 1 auto;
  width: 100%;
  overflow: auto;
  background: #fff;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  text-align: center;
  border-bottom: solid black 1px;
  display: flex;
`;

const ItemButton = styled.button`
  background: none;
  border: none;
  height: 2rem;
  flex: 1 1 auto;
`;

const IgnoreButton = styled.button`
  background: none;
  border: none;
  height: 2rem;
  flex: 0 1 auto;
`;

const exportResults = files => {
  FileSaver.saveAs(
    new Blob(
      [
        JSON.stringify(
          files
            .filter(f => !f.ignore)
            .map(({ name, boxes }) => ({
              filename: name,
              boxes,
            }))
        ),
      ],
      { type: 'application/json;charset=utf-8' }
    ),
    'boxes.json'
  );
};

class ImageList extends Component {
  constructor(props) {
    super(props);

    this.keyHandler = this.keyHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyHandler);
  }

  keyHandler(event) {
    // If the keydown event has already been handled by some other custom
    // handler, we abort here.
    if (event.defaultPrevented) {
      return;
    }

    let handled = true;

    const advance = (n = 1) => {
      const { files, selectedFilename, selectFile } = this.props;
      const filenameList = files.map(f => f.name);
      const selectedIndex = filenameList.indexOf(selectedFilename);

      let nextSelectedFilename = filenameList[0] || null;
      if (selectedIndex >= 0) {
        nextSelectedFilename =
          filenameList[
            (filenameList.length + selectedIndex + n) % filenameList.length
          ];
      }

      selectFile(nextSelectedFilename);
    };

    switch (event.key) {
      case 'x':
      case 'ArrowRight':
      case 'ArrowDown':
        advance(1);
        break;
      case 'z':
      case 'ArrowLeft':
      case 'ArrowUp':
        advance(-1);
        break;
      default:
        handled = false;
    }

    if (handled) {
      event.preventDefault();
    }
  }

  render() {
    const {
      files,
      addFiles,
      removeAllFiles,
      selectFile,
      selectedFilename,
      toggleIgnoreFile,
    } = this.props;

    return (
      <Outer>
        <Header>
          Images
          <br />
          <input
            type="file"
            multiple
            accept="image/*"
            ref={el => {
              this.fileInput = el;
            }}
            onChange={event => {
              if (!event.target.files || event.target.files.length < 1) {
                return;
              }

              addFiles(event.target.files);
            }}
          />
          <br />
          <button
            type="button"
            disabled={files.length < 1}
            onClick={() => {
              exportResults(files);
            }}
          >
            Export
          </button>
          <button
            type="button"
            disabled={files.length < 1}
            onClick={() => {
              if (
                // eslint-disable-next-line no-alert
                window.confirm(
                  'Do you really want to delete all file metadata?'
                )
              ) {
                removeAllFiles();
                this.fileInput.value = '';
              }
            }}
          >
            Clear All
          </button>
        </Header>
        <Container>
          <List>
            {files.map(({ name, boxes, ignore }) => {
              let background = 'transparent';
              if (ignore) {
                background = 'gray';
              } else if (name === selectedFilename) {
                background = 'lightblue';
              } else if (boxes.length > 0) {
                background = 'lightgreen';
              }

              return (
                <ListItem key={name} style={{ background }}>
                  <ItemButton
                    type="button"
                    style={{
                      textDecoration: ignore ? 'line-through' : undefined,
                    }}
                    onClick={() => selectFile(name)}
                  >
                    {name}
                  </ItemButton>
                  <IgnoreButton
                    type="button"
                    onClick={() => toggleIgnoreFile(name)}
                  >
                    ×
                  </IgnoreButton>
                </ListItem>
              );
            })}
          </List>
        </Container>
      </Outer>
    );
  }
}

ImageList.propTypes = {
  addFiles: PropTypes.func.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      boxes: PropTypes.arrayOf(PropTypes.shape({})),
    })
  ).isRequired,
  removeAllFiles: PropTypes.func.isRequired,
  selectFile: PropTypes.func.isRequired,
  selectedFilename: PropTypes.string,
  toggleIgnoreFile: PropTypes.func.isRequired,
};
ImageList.defaultProps = {
  selectedFilename: null,
};

const mapStateToProps = state => ({
  files: filesSelector(state),
  selectedFilename: selectedFilenameSelector(state),
});

const mapDispatchToProps = {
  addFiles: actions.addFiles,
  removeAllFiles: actions.removeAllFiles,
  selectFile: actions.selectFile,
  toggleIgnoreFile: actions.toggleIgnoreFile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageList);
