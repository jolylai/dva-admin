import React, { Component } from 'react';
import styles from './index.less';

class Gradient extends Component {
  render() {
    return (
      <div>
        <ul className={styles.list}>
          <li className={styles.singleColor} />
          <li className={styles.percent} />
          <li className={styles.franchNationalFlag} />
          <li className={styles.repeating} />
          <li className={styles.square} />
        </ul>
        <ul className={styles.gradientAnimation}>
          <li>首页</li>
          <li>前端</li>
          <li>授人以鱼</li>
          <li>朝花夕拾</li>
          <li>技术发展</li>
        </ul>
      </div>
    );
  }
}

export default Gradient;
