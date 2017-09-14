import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import PersonalInfo from './components/personalInfo';
import Security from './components/security';

import styles from './index.less';

const { Sider, Content } = Layout;
const MenuItem = Menu.Item;

class Setting extends Component {
  state ={
    content: <PersonalInfo />,
  }

  onSelect = ({ item, key, selectedKeys }) => {
    console.log('item', item);
    console.log('key', key);
    console.log('select', selectedKeys);
    this.renderContent(key);
  }

  renderContent = (key) => {
    switch (key) {
      case '1':
        this.setState({ content: <PersonalInfo /> });
        break;
      case '2':
        this.setState({ content: <Security /> });
        break;
      default:
        this.setState({ content: <PersonalInfo /> });
        break;
    }
  }

  render() {
    const { content } = this.state;
    return (
      <Layout>
        <Sider className={styles.sider}>
          <Menu className={styles.settingMenu} onSelect={this.onSelect} defaultSelectedKeys={['1']}>
            <MenuItem key="1">
              个人资料
            </MenuItem>
            <MenuItem key="2">
              安全设置
            </MenuItem>
          </Menu>
        </Sider>
        <Content className={styles.content}>
          { content }
        </Content>
      </Layout>
    );
  }
}

export default Setting;
