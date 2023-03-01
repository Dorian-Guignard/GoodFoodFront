import { UserOutlined, HomeOutlined} from "@ant-design/icons";
import { Button, Col, message, Switch } from "antd";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Utils/providers/UserContext";


import './RightComponents.css'


function RightComponents( ) {
  
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const handleLogOut = ()=>{
    message.success("Vous êtes déconnecté");
    setIsLoggedIn(false);
  }

    return (
      <Col className="right-components" span={8} xs={4} lg={8} xl={8}>
        <Switch /> 
        {isLoggedIn ? (
        <Button type="primary" onClick={handleLogOut}>
          <UserOutlined /> Déconnexion
        </Button>
      ) : (
        <Button type="primary" onClick={() => navigate("/login")}>
          <UserOutlined /> Connexion
        </Button>
      )}
     
        
        {location.pathname !== '/' && (
        <Button
          type="primary"
          onClick={() => navigate('/')}
        > <HomeOutlined/> Retour à l'accueil
        </Button>
      )}  
      </Col>
    );
  }
export default RightComponents;