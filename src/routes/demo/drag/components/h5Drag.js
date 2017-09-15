import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './h5Drag.less';

class H5Drag extends Component {
  componentDidMount() {
    const eleDusbin = document.querySelectorAll('.dusbin')[0];
    const eleDrags = document.querySelectorAll('.draglist');
    const lDrags = eleDrags.length;
    const eleRemind = document.querySelector('.dragRemind');
    let eleDrag = null;
    for (let i = 0; i < lDrags; i++) {
      eleDrags[i].onselectstart = () => false;
      // 开始拖拽 拖拽效果
      eleDrags[i].ondragstart = (ev) => {
        ev.dataTransfer.effectAllowed = 'move';
        ev.dataTransfer.setData('text', ev.target.innerHTML);
        ev.dataTransfer.setDragImage(ev.target, 0, 0);
        eleDrag = ev.target;
        return true;
      };
      eleDrags[i].ondragend = (ev) => {
        // 拖拽结束
        ev.dataTransfer.clearData('text');
        eleDrag = null;
        return false;
      };
    }
    eleDusbin.ondragover = (ev) => {
      // 拖拽元素在目标元素上移动时
      ev.preventDefault();
      return true;
    };
    eleDusbin.ondragenter = () => {
      // 拖拽元素进入目标元素上的时候
      eleDusbin.style.color = '#ffffff';
      return true;
    };
    eleDusbin.ondrop = () => {
      // 拖拽元素进入目标元素头上，同时鼠标松开的时候
      if (eleDrag) {
        eleRemind.innerHTML = `<strong>${eleDrag.innerHTML}</strong>被扔进了垃圾桶`;
        eleDrag.parentNode.removeChild(eleDrag);
      }
      eleDusbin.style.color = '#000000';
      return false;
    };
  }

  renderDragbox = () => {
    const draglist = [];
    const draglistName = classNames(styles.draglist, 'draglist');
    for (let i = 0; i < 6; i++) {
      draglist.push(<div className={draglistName} title="拽我啊" key={i} draggable="true">列表{i}</div>);
    }
    return draglist;
  }
  render() {
    const dusbin = classNames(styles.dusbin, 'dusbin');
    return (
      <div className={styles.H5Drag}>
        <div className={styles.code}>
          <div className={styles.drag}>
            <div className={dusbin}>垃圾桶</div>
            <div className={styles.dragbox}>
              { this.renderDragbox() }
            </div>
          </div>
          <div className="dragRemind" />
        </div>
        <div className={styles.note}>
          <p>作用于被拖拽的元素上</p>
          <code>
            ondragstart
            ondragend
          </code>
          <p>作用于目标元素上</p>
        </div>
      </div>
    );
  }
}

export default H5Drag;
