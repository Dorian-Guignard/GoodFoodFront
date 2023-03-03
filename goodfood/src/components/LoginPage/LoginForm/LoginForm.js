import { Form, Input, Button, Col, message } from "antd";
import { MailOutlined, LockOutlined} from "@ant-design/icons";
import './LoginForm.css'
import { useContext } from "react";
import { UserContext } from "../../../Utils/providers/UserContext";
import { useNavigate } from "react-router-dom";


function LoginForm(){

  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);
  const {  setIsLoggedIn } = useContext(UserContext);

  const handleLogin = async (values) => {
    try {
      const response = await fetch("http://0.0.0.0:8080/api/login_check", {
        method: "POST",
        body: JSON.stringify({
          username: values.email,
          password: values.password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        throw new Error("Email ou mot de passe incorrect");
      }
  
      const data = await response.json();
      updateUser(data.token);
      message.success("Connexion réussie !");
      setIsLoggedIn(true);
      navigate('/')
      
    } catch (error) {
      console.error(error);
      message.error(error.message);
    }
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
        onFinish={handleLogin}
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
          prefix={<LockOutlined/>}
          type="password"
          placeholder="Mot de passe*"
        />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" >
            Se connecter
          </Button>
          Pas encore de compte ? <a href="/register">Inscrivez-vous !</a>
        </Form.Item>
      </Form>
    </Col>
  );
};

export default LoginForm;

