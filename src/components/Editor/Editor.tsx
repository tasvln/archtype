"use client";

import React from 'react';
import styles from './index.module.scss';
import { Circle, Layer, Line, Rect, Stage, Text } from 'react-konva';
import Box from '../common/Box';
import Konva from 'konva';

type EditorProps = {};

/*
  An Editor is a component that allows the user to edit the content of a file.
  It should be scrollable, fit the screen, and have zooming capabilities and pan capabilities.
  Konva is a good library for this. so use that.
*/

const Editor = ({}: EditorProps) => {
  const stageRef = React.useRef<Konva.Stage>(null);

  // screen constants
  const scale = 1;
  const width = window.innerWidth * scale;
  const height = window.innerHeight * scale;

  // center of screen
  const centerX = width * scale / 2;
  const centerY = height * scale / 2;
  
  return (
    <Box css={styles.wrapper}>
      <Stage
        ref={stageRef}
        width={width}
        height={height}
        scaleX={scale}
        scaleY={scale}
        x={centerX}
        y={centerY}
        draggable={true}
        onDragEnd={(e) => {
          console.log(e.target.x(), e.target.y());
        }}
        style={{
          backgroundColor: 'grey',
        }}
      >
        <Layer>
          <Circle radius={50} fill="green" />
        </Layer>
      </Stage>
    </Box>
  )
};

export default Editor;