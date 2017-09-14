import React, { Component } from 'react';
import { Button, Progress, Modal, Form, Input } from 'antd';

import styles from './security.less';

const FormItem = Form.Item;

class Security extends Component {
  state = {
    isShowModal: false,
  }

  handleModal = () => {
    const { isShowModal } = this.state;
    this.setState({ isShowModal: !isShowModal });
  }

  handlePassword = () => {
    const { getFieldsValue } = this.props.form;
    const fields = getFieldsValue();
    console.log('fields', fields);
    this.handleModal();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isShowModal } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const progressProps = {
      percent: 33,
      format(percent) {
        if (percent < 34) {
          return '底';
        } else if (percent < 67) {
          return '中';
        } else {
          return '高';
        }
      },
    };
    const modalProps = {
      title: '修改密码',
      visible: isShowModal,
      onCancel: this.handleModal,
      onOk: this.handlePassword,
    };

    return (
      <div className={styles.content}>
        <span>密码安级别:</span>
        <span className={styles.progress}>
          <Progress {...progressProps} />
        </span>
        <Button type="primary" onClick={this.handleModal}>修改密码</Button>
        <Modal {...modalProps}>
          <Form>
            <FormItem {...formItemLayout} label="旧密码">
              {
                getFieldDecorator('oldPassword')(
                  <Input placeholder="请输入原始密码" />)
              }
            </FormItem>
            <FormItem {...formItemLayout} label="新密码">
              {
                getFieldDecorator('newPassward')(
                  <Input placeholder="请输入新密码" />)
              }
            </FormItem>
            <FormItem {...formItemLayout} label="确认新密码">
              {
                getFieldDecorator('confirmPassword')(<Input placeholder="确认新密码" />)
              }
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(Security);
