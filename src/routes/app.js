import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon, Dropdown } from 'antd';
// import config from '../utils/config';
import styles from './app.less';

const { Header, Content, Footer, Sider } = Layout;
const MenuItem = Menu.Item;

class App extends Component {
  state = {
    collapsed: false,
  }

  oncollapse = (collapsed) => {
    console.log('collapsed', collapsed);
    this.setState({ collapsed });
  }

  render() {
    const { location } = this.props;
    const { pathname } = location;
    const { collapsed } = this.state;

    const siderProps = {
      collapsible: true,
      collapsed,
      onCollapse: this.oncollapse,
    };

    const menu = (
      <Menu>
        <MenuItem key="1">
          Logout
        </MenuItem>
      </Menu>
    );

    if (pathname === '/login') {
      return (
        <div className={styles.app}>
          { this.props.children }
        </div>
      );
    }
    return (
      <Layout>
        <Sider {...siderProps}>
          <div className={styles.logo} />
          <Menu defaultSelectedKeys={['1']}>
            <MenuItem key="1">
              dashboard
            </MenuItem>
            <MenuItem key="2">
              Item2
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <div className={styles.setting}>
              <Dropdown overlay={menu}>
                <span>setting</span>
              </Dropdown>
            </div>
          </Header>
          <Content className={styles.content}>Content</Content>
          <Footer className={styles.footer}>
            dva admin ©2017 Created by Jolylai
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

App.propTypes = {

};

export default connect()(App);
