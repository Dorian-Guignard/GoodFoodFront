import { CloseOutlined, MenuOutlined, UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Switch, Image, Typography } from "antd"
import MenuBurger from "../MenuBurger/MenuBurger";
import Logo from '../../Logo.png'
import './LeftComponents.css'
const {Title} = Typography;


function LeftComponents({ toggleMenu, menuOpen, isSmallScreen, navigate, location }) {
  
    return (
      <Col className="left-components" span={8} xs={4} lg={8} xl={8}>
        <Button
          type="primary"
          size={isSmallScreen ? "small" : "large"}
          onClick={toggleMenu}
          icon={menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        ></Button>
        <Drawer
          closable={isSmallScreen}
          onClose={() => {
            toggleMenu();
          }}
          open={menuOpen}
          placement="left"
         
        >
          <MenuBurger />
          <div className="login-switch">
            <Button 
            onClick={() => navigate('/login')}
            type="primary">
              <UserOutlined/>Connexion
            </Button>
            {location.pathname !== '/' && (
              <Button
                type="primary"
                onClick={() => navigate('/')}
              >
                <HomeOutlined/>Retour à l'accueil
              </Button>
            )}
            <Switch />
</div>
        </Drawer>
        <Image style={isSmallScreen ? { width: "30px" } : { width: "60px" }} src={Logo} />
        <Title level={isSmallScreen ? 5 : 1} className="title">
          <span className="Good">Good</span>
          <span className="Food">Food</span>
        </Title>
      </Col>
    );
  }
export default LeftComponents;