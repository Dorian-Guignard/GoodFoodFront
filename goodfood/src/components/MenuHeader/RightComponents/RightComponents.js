import { LoginOutlined, HomeOutlined, LogoutOutlined, UserOutlined} from "@ant-design/icons";
import { Button, Col, message, Switch } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../../Utils/UseAuth";

import './RightComponents.css'


function RightComponents( ) {
  
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, logOut } = UseAuth();

  const handleLogOut = ()=>{
    message.success("Vous êtes déconnecté");
    logOut()
  }

    return (
      <Col className="right-components" span={8} xs={4} lg={8} xl={8}>
        <Switch /> 
          {isLoggedIn 
          ? 
          (
            <div className="btns-user">
              <Button type="primary" onClick={handleLogOut}>
                <LogoutOutlined /> Déconnexion
              </Button>
              
              <Button type="primary" onClick={() => navigate("/profile")}>
                <UserOutlined /> Mon Profil
              </Button>
            </div>
          ) 
          : 
          (
            <Button type="primary" onClick={() => navigate("/login")}>
              <LoginOutlined /> Connexion
            </Button>
          )}
          
          {location.pathname !== '/' && (
            <Button
              type="primary"
              onClick={() => navigate('/')}
            > <HomeOutlined/> Accueil
            </Button>
          )}  
      </Col>
    );
  }
export default RightComponents;