import React, { Component } from 'react';
import moment from 'moment';
import styles from './cssClock.less';

class Clock extends Component {
  componentDidMount() {
    const { top, btm } = this;
    let hours = 0;
    let minute = 0;
    let second = 0;
    let timer1 = setInterval(() => {
      const now = new Date();
      hours = now.getHours();
      minute = now.getMinutes();
      second = now.getSeconds();
    }, 1000);

    let topDeg = 0;
    let btmDeg = 90;
    let timer2 = setInterval(() => {
      this.transform(top, topDeg);
      topDeg -= 10;
      if (topDeg <= -90) {
        this.transform(top, -90);
        // top.innerHTML = `<span>${second}</span>`;
        this.transform(btm, 90);
        // btm.innerHTML = `<span>${second}</span>`;
        let timer3 = setInterval(() => {
          this.transform(btm, btmDeg);
          btmDeg -= 10;
          if (btmDeg <= 0) {
            clearInterval(timer3);
            this.reset(second);
          }
        }, 30);
        // clearInterval(timer2);
      }
    }, 27);
  }

  reset = (num) => {
    const { top, topback, btm, btmback } = this;
    this.transform(btm, '');
    this.transform(btmback, '');
    top.innerHTML = `<span>${num}</span>`;
    topback.innerHTML = `<span>${num}</span>`;
    btm.innerHTML = `<span>${num}</span>`;
    btmback.innerHTML = `<span>${num}</span>`;
    this.transform(top, '');
    this.transform(topback, '');
  }

  transform = (obj, deg) => {
    obj.style.transform = `rotateX(${deg}deg)`;
  }

  render() {
    return (
      <div className={styles.clock}>
        <div className={styles.unit}>
          <div ref={(topback) => { this.topback = topback; }} className={styles.top} />
          <div ref={(top) => { this.top = top; }} className={styles.top} />
          <div ref={(btmback) => { this.btmback = btmback; }} className={styles.btm} />
          <div ref={(btm) => { this.btm = btm; }} className={styles.btm} />
        </div>
      </div>
    );
  }
}

export default Clock;
