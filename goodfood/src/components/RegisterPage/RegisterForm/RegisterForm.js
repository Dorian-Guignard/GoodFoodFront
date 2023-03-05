import { Form, Input, Button, Col, message } from "antd";
import { MailOutlined, LockOutlined, UserOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function RegisterForm(){

  const navigate = useNavigate()
  const handleRegister = async (values) => {
    try {
      const response = await fetch("http://0.0.0.0:8080/api/users", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          nameUser:values.pseudo
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        throw new Error("Email déjà utilisé");
      }
  
      const data = await response.json();
      console.log(data);
      message.success("Compte créé, vous pouvez vous connectez !")
      navigate('/login')
      
    } catch (error) {
      console.error(error);
      message.error(error.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Col span={12}>
      <Form
        name="register"
        onFinish={handleRegister}
        onFinishFailed={onFinishFailed}
        scrollToFirstError
      >
        <Form.Item
          
          name="pseudo"
          rules={[
            {
              required: true,
              message: "Entrez votre pseudo",
            },
          ]}
        >
          <Input 
            prefix={<UserOutlined />}
            placeholder="Pseudo*" 
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
          placeholder="Confirmez votre Mot de passe*"
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
