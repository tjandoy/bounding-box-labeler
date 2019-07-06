import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { saveBrowserLocale } from '../utils/I18N';
import { switchLanguage as switchLanguageAction } from '../actions';
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
  // locale: PropTypes.oneOf(['en', 'ja']).isRequired,
  // switchLanguage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  locale: state.locale,
});

const mapDispatchToProps = dispatch => ({
  switchLanguage: lang => {
    saveBrowserLocale(lang);
    dispatch(switchLanguageAction(lang));
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  switchLanguage: () => {
    dispatchProps.switchLanguage(stateProps.locale === 'en' ? 'ja' : 'en');
  },
});

export default hot(module)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(View)
);
