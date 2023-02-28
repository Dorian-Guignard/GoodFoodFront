import { UserOutlined, HomeOutlined} from "@ant-design/icons";
import { Button, Col, Switch } from "antd";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Auth from "../../Utils/providers/Auth";
import './RightComponents.css'


function RightComponents( ) {
  const {isConnected, setIsConnected}= useContext(Auth);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = ()=>{
   setIsConnected(false)
  }

    return (
      <Col className="right-components" span={8} xs={4} lg={8} xl={8}>
        <Switch />
        {(!isConnected && (
          <>
        <Button
          onClick={() => navigate('/login')}
          type="primary"
        ><UserOutlined /> Connexion</Button>
        </> )) || 
        ( 
          <>
          <Button
          onClick={handleLogOut}
          type="primary"

        ><UserOutlined /> Déconnexion</Button>
        </>
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