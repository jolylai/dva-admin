import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Form, Input, Checkbox, Button } from 'antd';
import config from '../../utils/config';
import logo from '../../../public/logo.png';
import styles from './index.less';

const FormItem = Form.Item;

const Login = ({
  dispatch,
  form: {
    getFieldDecorator,
    validateFields,
  },
}) => {
  const handleLogin = (e) => {
    e.preventDefault();
    validateFields((err, fields) => {
      if (!err) {
        dispatch({
          type: 'login/query',
          payload: fields,
        });
      }
    });
  };

  return (
    <div className={styles.background}>
      <Form className={styles.form}>
        <FormItem>
          <img className={styles.logo} src={logo} alt="logo" />
          <span>{config.name}</span>
        </FormItem>
        <FormItem>
          {
            getFieldDecorator('username', {
              rules: [{ required: true, message: 'please input username' }],
            })(<Input placeholder="Username" />)
          }
        </FormItem>
        <FormItem>
          {
            getFieldDecorator('password', {
              rules: [{ required: true, message: 'please input password' }],
            })(<Input placeholder="Password" />)
          }
        </FormItem>
        <FormItem>
          {
            getFieldDecorator('rememberMe')(<Checkbox>Remember me</Checkbox>)
          }
          <a className={styles.forgot} href="">Forgot password</a>
          <Button className={styles.loginBtn} type="primary" htmlType="submit" onClick={handleLogin}>Login</Button>
          or <a href="">Register now</a>
        </FormItem>
      </Form>
    </div>
  );
};

Login.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect(({ login }) => ({ login }))(Form.create()(Login));
