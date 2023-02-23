import { Form, Input, Button, Col } from "antd";
import { MailOutlined, UserOutlined, LockOutlined} from "@ant-design/icons";
import './RegisterForm.css'

function RegisterForm(){

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Col span={12}>
      <Form
        name="register"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        scrollToFirstError
      >
        <Form.Item
          name="username"  
          rules={[
            {
              required: true,
              message: "Entrez votre Pseudo",
            },
          ]}
        >
          <Input
          prefix={<UserOutlined />}
          placeholder="Nom d'utilisateur*"
        />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "Entrez un e-mail valide",
            },
            {
              required: true,
              message: "Entrez votre e-mail",
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
              message: "Entre un Mot de passe",
            },
          ]}
          hasFeedback
        >
            <Input.Password
          prefix={<LockOutlined/>}
          type="password"
          placeholder="Mot de passe*"
        />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Confirmez votre Mot de passe",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("Les Mots de passe ne sont pas identiques")
                );
              },
            }),
          ]}
        >
            <Input.Password
          prefix={<LockOutlined/>}
          type="password"
          placeholder="Confirez votre Mot de passe*"
        />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            S'inscrire
          </Button>
        </Form.Item>
      </Form>
      
    </Col>
  );
};

export default RegisterForm;
