import React, {useState } from "react";
import { useMediaQuery } from "react-responsive";
import {Typography, Row } from 'antd'
import LeftComponents from "./LeftComponents/LeftComponents"
import MiddleComponents from "./MiddleComponents/MiddleComponents";
import RightComponents from "./RightComponents/RightComponents";
import './MenuHeader.css'
import { useLocation, useNavigate } from "react-router-dom";
const{Title} = Typography;

function MenuHeader() {

  const [menuOpen, setMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 450 });
  const navigate = useNavigate();
  const location = useLocation();


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Row className="menu-header">
    <LeftComponents 
    toggleMenu={toggleMenu} 
    menuOpen={menuOpen} 
    isSmallScreen={isSmallScreen}
    navigate={navigate}
    location={location} 
    />
     <MiddleComponents />
     <RightComponents  />
    <Title level={isSmallScreen ? 5 : 1} className='title-responisve'>
        <span className='Good'>Good</span> 
        <span className='Food'>Food</span>
    </Title>
  </Row>
 
  );
}

export default MenuHeader;
