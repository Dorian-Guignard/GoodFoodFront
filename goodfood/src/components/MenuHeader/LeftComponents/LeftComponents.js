import { CloseOutlined, MenuOutlined, UserOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Switch, Image, Typography, message } from "antd"
import MenuBurger from "../MenuBurger/MenuBurger";
import Logo from '../../../Logo.png'
import './LeftComponents.css'
import UseAuth from "../../../Utils/UseAuth";
const {Title} = Typography;


function LeftComponents({ toggleMenu, menuOpen, isSmallScreen, navigate }) {

  const { isLoggedIn, logOut } = UseAuth();

  const handleLogOut = ()=>{
    toggleMenu(); 
    navigate('/')
    message.success("Vous êtes déconnecté");
    logOut();
    window.location.reload();
  }
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
          <MenuBurger onClose={toggleMenu}/>
          <div className="login-switch">  
            {isLoggedIn 
            ? 
            (
              <div>
                <Button type="primary" onClick={handleLogOut} style={{marginRight:"10px"}}>
                  <LogoutOutlined /> Déconnexion
                </Button>
                
                <Button type="primary" onClick={() => {toggleMenu(); navigate('/profile')}}>
                  <UserOutlined /> Mon Profil
                </Button>
              </div>
             ) 
             : 
             (
              <Button type="primary" onClick={() => {toggleMenu(); navigate('/login')}}>
                <LoginOutlined /> Connexion
              </Button>
              )}      
          </div>
        </Drawer>
          <a href="/">
            <Image 
            preview={false} 
            style={isSmallScreen ? { width: "30px" } : { width: "60px" }} 
            src={Logo} />
          </a>
        <Title level={isSmallScreen ? 5 : 1} className="title">
          <span className="Good">Good</span>
          <span className="Food">Food</span>
        </Title>
      </Col>
    );
  }
export default LeftComponents;