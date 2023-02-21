import React, { useState } from "react";
import {Button, Drawer, Image, Input, Switch, Typography} from 'antd'
import { CloseOutlined, MenuOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import MenuBurger from "./MenuBurger.js/MenuBurger";
import './MenuHeader.css'
import Logo from '../../src/Logo.png'
import Login from "./Login/Login";
const{Title} = Typography;

function MenuHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const togglelogin = () => {
    setLoginOpen(!loginOpen);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className="sidebar">
      <div className="sidebar-left">
          <Button type="primary" 
          style={{ width: '40px', height: '40px',fontSize:'20px'}}  
          onClick={toggleMenu} 
          icon={menuOpen ? <CloseOutlined/> : <MenuOutlined/>}>
          </Button>
          <Drawer 
          closable={false}
          onClose={()=>{setMenuOpen(false)}}
          open={menuOpen}
          placement='left'
          >
              <MenuBurger/>
          </Drawer>
        <Image 
         style={{ width: '60px'}} 
         src={Logo}/>
        <Title level={2} className='Title'>
          <span className='Good'>Good</span> 
          <span className='Food'>Food</span>
        </Title>
      </div>
      <div className="sidebar-right">
        <Button type="primary"
        onClick={togglelogin}  
        style={{ width: '40px', height: '40px', fontSize:'20px'}} 
        icon={<UserOutlined/>}>
        </Button>
        {loginOpen && (<div className="menu-login"><Login/></div>)}
        <Switch/>
        <span className="sidebar-right-input">
          <Input.Search type="primary" placeholder="Rechercher une recette, aliment..."/>
        </span>
      </div>
    </nav>
   
  );
}

export default MenuHeader;
