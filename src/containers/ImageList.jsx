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
`;

const ItemButton = styled.button`
  background: none;
  border: none;
  width: 100%;
  height: 2rem;
`;

const exportResults = files => {
  FileSaver.saveAs(
    new Blob(
      [
        JSON.stringify(
          files.map(({ name, boxes }) => ({
            filename: name,
            boxes: boxes.map(({ x, y, height, width }) => ({
              label: 'key',
              coordinates: {
                x: Math.round(x + width / 2),
                y: Math.round(y + height / 2),
                height,
                width,
              },
            })),
          }))
        ),
      ],
      { type: 'application/json;charset=utf-8' }
    ),
    'boxes.json'
  );
};

class ImageList extends Component {
  render() {
    const { files, setFiles, selectFile, selectedFilename } = this.props;

    return (
      <Outer>
        <Header>
          Images
          <br />
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={event => {
              if (!event.target.files || event.target.files.length < 1) {
                return;
              }

              setFiles(event.target.files);
            }}
          />
          <br />
          <button
            type="button"
            onClick={() => {
              exportResults(files);
            }}
          >
            Export
          </button>
        </Header>
        <Container>
          <List>
            {files.map(({ name, boxes }) => {
              let background = 'transparent';
              if (name === selectedFilename) {
                background = 'lightblue';
              } else if (boxes.length > 0) {
                background = 'lightgreen';
              }

              return (
                <ListItem key={name}>
                  <ItemButton
                    type="button"
                    onClick={() => selectFile(name)}
                    style={{ background }}
                  >
                    {name} ({boxes.length})
                  </ItemButton>
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
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      boxes: PropTypes.arrayOf(PropTypes.shape({})),
    })
  ).isRequired,
  setFiles: PropTypes.func.isRequired,
  selectFile: PropTypes.func.isRequired,
  selectedFilename: PropTypes.string,
};
ImageList.defaultProps = {
  selectedFilename: null,
};

const mapStateToProps = state => ({
  files: filesSelector(state),
  selectedFilename: selectedFilenameSelector(state),
});

const mapDispatchToProps = {
  setFiles: actions.setFiles,
  selectFile: actions.selectFile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageList);
