import React, { Component } from 'react';
import { Form, Input, Radio, Select, Button } from 'antd';

import styles from './personalInfo.less';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class PersonalInfo extends Component {
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
    const submitLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 14, offset: 10 },
      },
    };
    const prefixSelect = getFieldDecorator('prifix', {
      initialValue: '86',
    })(
      <Select style={{ width: 60 }}>
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="87">+87</Select.Option>
      </Select>);

    return (
      <div className={styles.form}>
        <Form>
          <FormItem {...formItemLayout} label="头像">
            {
              getFieldDecorator('avatar')(<span>img</span>)
            }
          </FormItem>
          <FormItem {...formItemLayout} label="Email">
            {
              getFieldDecorator('email', {
                rules: [{
                  required: true, message: 'Please input Email',
                }, {
                  type: 'email', message: 'The input is not valid E-mail',
                }],
              })(<Input />)
            }
          </FormItem>
          <FormItem {...formItemLayout} label="手机号码">
            {
              getFieldDecorator('phone', {
                rules: [{
                  required: true, message: 'Please input phone No',
                }],
              })(<Input addonBefore={prefixSelect} />)
            }
          </FormItem>
          <FormItem {...formItemLayout} label="姓名">
            {
              getFieldDecorator('name', {
                rules: [{ required: true, message: 'please input name' }],
              })(<Input />)
            }
          </FormItem>
          <FormItem {...formItemLayout} label="性别">
            {
              getFieldDecorator('sex', {
                initialValue: 0,
              })(
                <RadioGroup>
                  <Radio value={0}>Male</Radio>
                  <Radio valu={1}>Female</Radio>
                </RadioGroup>)
            }
          </FormItem>
          <FormItem {...formItemLayout} label="个人简介">
            {
              getFieldDecorator('introduction')(<Input type="textarea" />)
            }
          </FormItem>
          <FormItem {...submitLayout}>
            <Button type="primary" htmlType="submit">提交</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(PersonalInfo);
