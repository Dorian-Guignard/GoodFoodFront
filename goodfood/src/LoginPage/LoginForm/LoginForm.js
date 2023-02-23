import React from "react";
import { Form, Input, Button, Col } from "antd";
import { MailOutlined, LockOutlined} from "@ant-design/icons";
import './LoginForm.css'

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (

    <Col span={12} >
      
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Entrez votre e-mail ",
            },
          ]}
        >
          <Input
          prefix={<MailOutlined />}
          placeholder="E-mail*"
        />
        </Form.Item>

        <Form.Item 
          name="password"
          rules={[
            {
              required: true,
              message: "Entrez votre Mot de passe",
            },
          ]}
        >
          <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Mot de passe*"
        />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Connexion
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};

export default LoginForm;
