import React from "react";
import { Row, Typography } from "antd";
import RegisterForm from "./RegisterForm/RegisterForm";
import { useMediaQuery } from "react-responsive";

function RegisterPage(){
    const isSmallScreen = useMediaQuery({ maxWidth: 450 });
  return (
    <div className="login-page">

    <Typography.Title level={2}>Inscription</Typography.Title>
    <Row gutter={isSmallScreen ? [20] : [20]}>
      <RegisterForm />
    </Row>
  </div>
  );
};

export default RegisterPage;
