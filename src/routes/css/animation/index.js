import React, { Component } from 'react';
import styles from './index.less';

class Animation extends Component {
  render() {
    return (
      <div>
        <h2>Transition</h2>
        <ul className={styles.transition}>
          <li>transition: 2s</li>
          <li>transition: 2s width;</li>
          <li>transition: 2s height, 2s 2s width;</li>
          <li>transition: 2s ease-in-out;</li>
        </ul>
        <h2>旋转</h2>
        <ul className={styles.rotate}>
          <li>rotate</li>
          <li>rotateX</li>
          <li>rotateY</li>
          <li>rotateZ</li>
        </ul>
        <h2>平移</h2>
        <ul className={styles.translate}>
          <li />
          <li>origin</li>
        </ul>
        <h2>缩放</h2>
        <ul className={styles.scale}>
          <li>scale</li>
        </ul>
        <h2>透视</h2>
        <ul className={styles.perspective}>
          <li></li>
        </ul>
        <h2>盒子阴影和文字阴影</h2>
        <ul className={styles.shadow}>
          <li>shadow</li>
        </ul>
        <h2>Animation</h2>
        <ul className={styles.animation}>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default Animation;
