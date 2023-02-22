import { UserOutlined } from "@ant-design/icons";
import { Button, Col, Switch } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import './RightComponents.css'

function RightComponents() {
  const navigate = useNavigate();
  const location = useLocation();

    return (
      <Col className="right-components" span={8} xs={4} lg={8} xl={8}>
        <Switch />
        <Button
          onClick={() => navigate('/login')}
          type="primary"
        ><UserOutlined /> Connexion</Button>
        {location.pathname !== '/' && (
        <Button
          type="primary"
          onClick={() => navigate('/')}
        >
          Retour à l'accueil
        </Button>
      )}
        
      </Col>
    );
  }
export default RightComponents;