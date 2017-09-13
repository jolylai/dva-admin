import React, { Component } from 'react';
import { Form, Layout, Menu, Input, Radio, Select } from 'antd';

import styles from './index.less';

const { Sider, Content } = Layout;
const MenuItem = Menu.Item;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Setting extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
    const prefixSelect = getFieldDecorator('prifix', {
      initialValue: '86',
    })(
      <Select style={{ width: 60 }}>
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="87">+87</Select.Option>
      </Select>
      );

    return (
      <Layout>
        <Sider className={styles.sider}>
          <Menu>
            <MenuItem>
              个人资料
            </MenuItem>
            <MenuItem>
              安全设置
            </MenuItem>
          </Menu>
        </Sider>
        <Content className={styles.content}>
          <Form>
            <FormItem {...formItemLayout} label="avatar">
              <span>avatar</span>
            </FormItem>
            <FormItem {...formItemLayout} label="Phone Number">
              {
                getFieldDecorator('phone', {
                  rules: [{ required: true, message: 'Please input phone No' }],
                })(<Input addonBefore={prefixSelect} />)
              }
            </FormItem>
            <FormItem {...formItemLayout} label="name">
              {
                getFieldDecorator('name', {
                  rules: [{ required: true, message: 'please input name' }],
                })(<Input />)
              }
            </FormItem>
            <FormItem {...formItemLayout} label="sex">
              {
                getFieldDecorator('sex', {
                  initialValue: 0,
                })(
                  <RadioGroup>
                    <Radio value={0}>Male</Radio>
                    <Radio valu={1}>Female</Radio>
                  </RadioGroup>
                  )
              }
            </FormItem>
          </Form>
        </Content>
      </Layout>
    );
  }
}

export default Form.create()(Setting);
