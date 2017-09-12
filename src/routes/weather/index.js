import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Icon } from 'react-fa';
import styles from './index.less';

class Weather extends Component {
  render() {
    return (
      <div>
        <Row gutter={24}>
          <Col lg={1} md={2} offset={22}>
            <Icon name="map-marker" />
            <span>厦门</span>
          </Col>
        </Row>
      </div>
    );
  }
}

Weather.propTypes = {

};

export default Weather;
