import React from "react";
import { Form, Input } from "antd";
import { MailOutlined } from '@ant-design/icons';
import { formRules } from '../../data/authData';
import '../../styles/signin.css';
import MyButton from "../../../../components/Button/Button";

const ForgotPasswordForm = ({ onSubmitEmail }) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSubmitEmail(values.email);
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  return (
    <Form form={form} name="forgotPasswordForm" className="signin-form" layout="vertical">
      <h2 className="form-title">Reset your password</h2>

      <Form.Item hasFeedback label="Email" name="email" rules={formRules.email} className="form-item">
        <Input placeholder="Enter your email" className="input-field" prefix={<MailOutlined />} />
      </Form.Item>

      <Form.Item>
        <MyButton variant="filled" text={'Send Code'} onClick={handleSubmit} w="100%" h="40px" m="0px"/>
      </Form.Item>
    </Form>
  );
};

export default ForgotPasswordForm; 