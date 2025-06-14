import React from "react";
import { Form, Input, Divider } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { formRules } from '../../data/authData';
import '../../styles/signin.css';
import GoogleLoginBtn from "../GoogleLoginBtn";
import MyButton from "../../../../components/Button/Button";

const SignUpForm = ({ handleSignUp, handleSignInToggle }) => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = await form.validateFields();
    const { email, password, name } = values;
    handleSignUp(email, password, name);
  };

  return (
    <Form form={form} name="signupForm" className="signin-form" layout="vertical">
      <h2 className="form-title">Welcome, create your account!</h2>

      <Form.Item hasFeedback label="Name" name="name" rules={formRules.name} className="form-item">
        <Input placeholder="Enter your name" className="input-field" prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item hasFeedback label="Email" name="email" rules={formRules.email} className="form-item">
        <Input placeholder="Enter your email" className="input-field" prefix={<MailOutlined />} />
      </Form.Item>

      <Form.Item hasFeedback label="Password" name="password" rules={formRules.password} className="form-item">
        <Input.Password placeholder="Enter your password" className="input-field" prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item 
        label="Confirm Password" 
        name="confirmPassword" 
        dependencies={['password']} 
        hasFeedback 
        rules={formRules.confirmPassword} 
        className="form-item"
      >
        <Input.Password placeholder="Confirm your password" className="input-field" prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item>
        <MyButton variant="filled" text={'SIGN UP'} onClick={onSubmit} w="100%" h="40px" m="0px"/>
      </Form.Item>

      <Divider>or</Divider>
      <div className="google-btn"><GoogleLoginBtn /></div>

      <p className="toggle-bar">
        <span className="dont-have-account">Already have an account?</span>
        <span className="signup-toggle" onClick={handleSignInToggle}> Sign in</span>
      </p>
    </Form>
  );
};

export default SignUpForm; 