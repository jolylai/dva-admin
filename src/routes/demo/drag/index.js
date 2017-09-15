import React, { Component } from 'react';
import { Card } from 'antd';
import H5Drag from './components/h5Drag';

class Drag extends Component {
  render() {
    return (
      <div>
        <Card title={<a href="http://www.zhangxinxu.com/wordpress/2011/02/html5-drag-drop-%E6%8B%96%E6%8B%BD%E4%B8%8E%E6%8B%96%E6%94%BE%E7%AE%80%E4%BB%8B/" target="_blank">H5Drag</a>}>
          <H5Drag />
        </Card>
      </div>
    );
  }
}

export default Drag;
