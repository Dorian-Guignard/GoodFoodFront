import React from "react";
import { Row, Typography } from "antd";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import './LoginPage.css'
import { useMediaQuery } from "react-responsive";

function LoginPage(){
    const isSmallScreen = useMediaQuery({ maxWidth: 450 });
  return (
    <div className="login-page">
    <Typography.Title level={2}>Connexion</Typography.Title>
    <Row gutter={isSmallScreen ? [20] : [20]}>
      <LoginForm />
    </Row>

    <Typography.Title level={2}>Inscription</Typography.Title>
    <Row gutter={isSmallScreen ? [20] : [20]}>
      <RegisterForm />
    </Row>
  </div>
  );
};

export default LoginPage;
