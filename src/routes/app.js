import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import config from '../utils/config';
import styles from './app.less';

const { Sider, Header, Content, Footer } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: true,
  }

  oncollapse = (collapsed) => {
    // console.log('collapsed', collapsed);
    this.setState({ collapsed });
  }

  onSelect = ({ item, key, selectedKeys }) => {
    console.log('item', item);
    console.log('key', key);
    console.log('selectedKeys', selectedKeys);
  }

  clickItem = ({ item, key, keyPath }) => {
    console.log('item', item);
    console.log('key', key);
    console.log('keyPath', keyPath);
  }

  render() {
    const { location, app } = this.props;
    const { pathname } = location;
    const { user } = app;
    console.log('user', user);
    const { collapsed } = this.state;

    const siderProps = {
      collapsible: true,
      defaultCollapsed: true,
      collapsed,
      onCollapse: this.oncollapse,
    };

    const menuProps = {
      mode: 'inline',
      theme: 'dark',
      defaultSelectedKeys: ['1'],
      style: { height: '100%', borderRight: 0 },
      onSelect: this.onSelect,
      // onClick: this.clickItem,
    };

    const settingMemu = (
      <Menu theme="dark">
        <MenuItem>
          <Link to="/setting">
            <Icon type="setting" />
            <span>Setting</span>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/login">
            <Icon type="user" />
            <span>Logout</span>
          </Link>
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
        <Header className={styles.header}>
          <div className={styles.logo} />
          <span className={styles.name}>{config.name}</span>
          <Menu className={styles.headerMenu} theme="dark" mode="horizontal">
            <MenuItem key="1">
              <Dropdown overlay={settingMemu}>
                <div className={styles.user}>
                  <img src={user.avatar} />
                  <span>{user.name}</span>
                </div>
              </Dropdown>
            </MenuItem>
          </Menu>
        </Header>
        <Layout style={{ height: '93vh' }}>
          <Sider {...siderProps}>
            <Menu {...menuProps}>
              <MenuItem key="1">
                <Icon type="home" />
                <span>Home</span>
              </MenuItem>
              <MenuItem key="2">
                <Link to="/music">
                  <Icon type="pushpin-o" />
                  <span>Music</span>
                </Link>
              </MenuItem>
              <SubMenu
                key="demo"
                title={<span><Icon type="flag" /><span>Demo</span></span>}
              >
                <MenuItem key="demo-darrage">
                  <Link to="/demo/darrage">
                    <span>弹幕</span>
                  </Link>
                </MenuItem>
                <MenuItem key="demo-drag">
                  <Link to="/demo/drag">
                    拖拽
                  </Link>
                </MenuItem>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content className={styles.content}>
              { this.props.children }
            </Content>
            {/* <Footer>©2017 Created by Jolylai</Footer>*/}
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

App.propTypes = {

};

export default connect(({ app }) => ({ app }))(App);
