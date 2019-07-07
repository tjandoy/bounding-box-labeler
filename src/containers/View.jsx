import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { filesSelector } from '../selectors';
import Editor from './Editor';
import ImageList from './ImageList';

const Container = styled.div`
  display: relative;
  min-height: 100vh;
`;
const LeftChild = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
`;
const RightChild = styled.div`
  padding-left: 200px;
`;

class View extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.warnBeforeNavigate = this.warnBeforeNavigate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.warnBeforeNavigate);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.warnBeforeNavigate);
  }

  warnBeforeNavigate(e) {
    const { files } = this.props;

    // Warn before navigation if any boxes have been set
    if (files.some(f => f.boxes && f.boxes.length > 0)) {
      e.preventDefault();
      e.returnValue = 'stop';
    }
  }

  render() {
    return (
      <Container>
        <LeftChild>
          <ImageList />
        </LeftChild>
        <RightChild>
          <Editor />
        </RightChild>
      </Container>
    );
  }
}

View.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  files: filesSelector(state),
});

export default hot(module)(connect(mapStateToProps)(View));
