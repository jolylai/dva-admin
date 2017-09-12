import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Menu, Icon } from 'antd';
import styles from './app.less';

const { Sider } = Layout;
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
    switch (key) {
      case '3':
        
        break;
    
      default:
        break;
    }
  }

  clickItem = ({ item, key, keyPath }) => {
    console.log('item', item);
    console.log('key', key);
    console.log('keyPath', keyPath);
  }

  render() {
    const { location } = this.props;
    const { pathname } = location;
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
      onSelect: this.onSelect,
      // onClick: this.clickItem,
    };

    if (pathname === '/login') {
      return (
        <div className={styles.app}>
          { this.props.children }
        </div>
      );
    }
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider {...siderProps}>
          <div className={styles.logo} />
          <Menu {...menuProps}>
            <MenuItem key="1">
              <Icon type="flag" />
              <span>Dashboard</span>
            </MenuItem>
            <MenuItem key="2">
              <Icon type="pushpin-o" />
              <span>Item</span>
            </MenuItem>
            <SubMenu
              key="setting"
              title={<span><Icon type="setting" /><span>Setting</span></span>}
            >
              <MenuItem key="3">
                <Link to="/login">
                  <Icon type="user" />
                  <span>Logout</span>
                </Link>
              </MenuItem>
            </SubMenu>
          </Menu>
          <div className={styles.copyRight}>
            ©2017 Created by Jolylai
          </div>
        </Sider>
        <Layout>
          { this.props.children }
        </Layout>
      </Layout>
    );
  }
}

App.propTypes = {

};

export default connect()(App);
