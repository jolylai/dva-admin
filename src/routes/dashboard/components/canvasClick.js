import React, { Component } from 'react';

class Clock extends Component {
  componentDidMount() {
    const ctx = this.clickCanvas.getContext('2d');
    ctx.beginPath();
    // 外圆
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 6;
    ctx.arc(100, 100, 97, 0, Math.PI * 2, false);
    // 秒针
    ctx.moveTo(100, 100);
    ctx.strokeStyle = 'red';
    ctx.lineTo(100, 10);
    ctx.stroke();
    // 分针
    ctx.lineWidth = 2;
    // ctx.strokeStyle = '#eee';
    ctx.moveTo(100, 100);
    ctx.lineTo(10, 100);
    ctx.stroke();
  }

  render() {
    return (
      <div>
        <canvas width="200" height="200" ref={(canvas) => { this.clickCanvas = canvas; }}>Clock canvas</canvas>
      </div>
    );
  }
}

export default Clock;
