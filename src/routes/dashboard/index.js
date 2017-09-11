import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
      </div>
    );
  }
}

Dashboard.propTypes = {

};

export default connect()(Dashboard);
