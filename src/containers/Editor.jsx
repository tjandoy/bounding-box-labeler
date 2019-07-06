import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  ShapeEditor,
  ImageLayer,
  DrawLayer,
  wrapShape,
} from 'react-shape-editor';
import { connect } from 'react-redux';
import { selectedFileSelector } from '../selectors';
import * as actions from '../actions';

const RectShape = wrapShape(({ width, height, scale }) => {
  const strokeWidth = 2 / scale;
  return (
    <rect
      width={Math.max(0, width - strokeWidth)}
      height={Math.max(0, height - strokeWidth)}
      x={strokeWidth / 2}
      y={strokeWidth / 2}
      fill="rgba(100,100,255,0.3)"
      stroke="rgba(100,100,255,1)"
      strokeWidth={strokeWidth}
    />
  );
});

const MAX_FIT_SIZE = 500;
const MIN_SCALE = 0.05;
const MAX_SCALE = 4;

function arrayReplace(arr, index, item) {
  return [
    ...arr.slice(0, index),
    ...(Array.isArray(item) ? item : [item]),
    ...arr.slice(index + 1),
  ];
}
const to5 = n => Math.round(n);

const Outer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const Toolbar = styled.div`
  flex: 0 1 auto;
  border-bottom: solid gray 2px;
  padding: 5px 10px;
  background: #eaeaea;
`;

const Container = styled.div`
  text-align: center;
  flex: 1 1 auto;
  width: 100%;
  overflow: auto;
  background: #ffeaff;
`;

const InnerContainer = styled.div`
  position: relative;
  margin: auto;
`;

const Overlay = styled.svg`
  width: 100%;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 0;
  height: 100%;
`;

const OverlayLine = styled.line`
  stroke: rgba(0, 0, 0, 0.5);
  stroke-width: 0.5px;
  stroke-dasharray: 5, 15;
`;

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scale: 0.75,
      vectorWidth: 0,
      vectorHeight: 0,
    };

    this.constrainMove = this.constrainMove.bind(this);
    this.constrainResize = this.constrainResize.bind(this);
    this.onShapeChange = this.onShapeChange.bind(this);
    this.onShapeDelete = this.onShapeDelete.bind(this);
  }

  onShapeChange(newRect, shapeProps) {
    const {
      setImageBoxes,
      selectedFile: { name, boxes },
    } = this.props;
    const box = boxes[shapeProps.shapeIndex];

    setImageBoxes(
      name,
      arrayReplace(boxes, shapeProps.shapeIndex, {
        ...box,
        ...newRect,
      })
    );
  }

  onShapeDelete(event, shapeProps) {
    const {
      setImageBoxes,
      selectedFile: { name, boxes },
    } = this.props;

    setImageBoxes(name, arrayReplace(boxes, shapeProps.shapeIndex, []));
  }

  constrainMove({ x, y, width, height }) {
    const { vectorWidth, vectorHeight } = this.state;
    return {
      x: to5(Math.min(vectorWidth - width, Math.max(0, x))),
      y: to5(Math.min(vectorHeight - height, Math.max(0, y))),
    };
  }

  constrainResize({ movingCorner: { x: movingX, y: movingY } }) {
    const { vectorWidth, vectorHeight } = this.state;
    return {
      x: to5(Math.min(vectorWidth, Math.max(0, movingX))),
      y: to5(Math.min(vectorHeight, Math.max(0, movingY))),
    };
  }

  render() {
    const changeScale = ratio =>
      this.setState(state => ({
        scale: Math.max(MIN_SCALE, Math.min(MAX_SCALE, state.scale * ratio)),
      }));
    const { scale, vectorWidth, vectorHeight, mouseX, mouseY } = this.state;

    if (!this.props.selectedFile) {
      return <span>Needs a file</span>;
    }

    const {
      selectedFile: { boxes, name: filename, objectURL: imageSrc },
      setImageBoxes,
    } = this.props;

    const shapes = boxes.map((box, index) => {
      const { width, height, x, y } = box;
      return (
        <RectShape
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          constrainMove={this.constrainMove}
          constrainResize={this.constrainResize}
          height={height}
          keyboardTransformMultiplier={5}
          onChange={this.onShapeChange}
          onDelete={this.onShapeDelete}
          shapeId={String(index)}
          shapeIndex={index}
          width={width}
          x={x}
          y={y}
        />
      );
    });

    return (
      <Outer>
        <Toolbar>
          <button type="button" onClick={() => changeScale(1 / Math.sqrt(2))}>
            -
          </button>
          <button type="button" onClick={() => changeScale(Math.sqrt(2))}>
            +
          </button>
        </Toolbar>
        <Container
          onMouseMove={event => {
            cancelAnimationFrame(this.overlayRequest);
            const { clientX, clientY } = event;
            const { top, left } = this.overlayEl.getBoundingClientRect();
            this.overlayRequest = requestAnimationFrame(() => {
              this.setState({ mouseX: clientX - left, mouseY: clientY - top });
            });
          }}
        >
          <InnerContainer style={{ width: vectorWidth * scale }}>
            <ShapeEditor
              scale={scale}
              vectorWidth={vectorWidth}
              vectorHeight={vectorHeight}
              style={{ display: 'block' }}
            >
              <ImageLayer
                src={imageSrc}
                onLoad={({ naturalWidth, naturalHeight }) => {
                  this.setState({
                    vectorWidth: naturalWidth,
                    vectorHeight: naturalHeight,
                    scale: MAX_FIT_SIZE / Math.max(naturalWidth, naturalHeight),
                  });
                }}
              />

              <DrawLayer
                constrainMove={this.constrainMove}
                constrainResize={this.constrainResize}
                DrawPreviewComponent={RectShape}
                onAddShape={({ x, y, width, height }) => {
                  setImageBoxes(filename, [...boxes, { x, y, width, height }]);
                }}
              />
              {shapes}
            </ShapeEditor>

            <Overlay
              ref={el => {
                this.overlayEl = el;
              }}
            >
              <OverlayLine x1={mouseX} y1={0} x2={mouseX} y2={10000} />
              <OverlayLine x1={0} y1={mouseY} x2={10000} y2={mouseY} />
            </Overlay>
          </InnerContainer>
        </Container>
      </Outer>
    );
  }
}

Editor.propTypes = {
  selectedFile: PropTypes.shape({
    boxes: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  setImageBoxes: PropTypes.func.isRequired,
};

Editor.defaultProps = {
  selectedFile: null,
};

const mapStateToProps = state => ({
  selectedFile: selectedFileSelector(state),
});

const mapDispatchToProps = {
  setImageBoxes: actions.setImageBoxes,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
