import React, { Component } from 'react';
import { connect } from 'dva';
import Clock from './components/cssClock';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

Dashboard.propTypes = {

};

export default connect()(Dashboard);
