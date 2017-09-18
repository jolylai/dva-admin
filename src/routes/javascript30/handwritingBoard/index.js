import React, { Component } from 'react';
import { Button } from 'antd';

class HandwritingBoard extends Component {
  componentDidMount() {
    const board = this.board;
    const ctx = board.getContext('2d');
    ctx.strokeStyle = '#BADA55';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 100;
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;
    const draw = (e) => {
      if (!isDrawing) return;
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];
      if (hue >= 360) {
        hue = 0;
      } else {
        hue++;
      }
      if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
      }
      if (direction) {
        ctx.lineWidth++;
      } else {
        ctx.lineWidth--;
      }
    };
    board.addEventListener('mousedown', (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    board.addEventListener('mousemove', draw);
    board.addEventListener('mouseup', () => {
      isDrawing = false;
    });
    board.addEventListener('mouseout', () => {
      isDrawing = false;
    });
  }

  clear = () => {
    const board = this.board;
    const ctx = board.getContext('2d');
    ctx.clearRect(0, 0, board.width, board.height);
  }

  render() {
    return (
      <div>
        <canvas style={{ border: 'tomato solid 2px' }} height="400" width="1200" ref={(board) => { this.board = board; }}>HandwritingBoard</canvas>
        <Button type="primary" onClick={this.clear}>Clear</Button>
      </div>
    );
  }
}

export default HandwritingBoard;
