import React, { Component } from 'react';
import styles from './cssClock.less';

class Clock extends Component {
  render() {
    return (
      <div>
        <div className={styles.clockFace}>
          <div className="handle hour-handle" />
          <div className="handle min-handle" />
          <div className="handle second-handle" />
        </div>
      </div>
    );
  }
}

export default Clock;
