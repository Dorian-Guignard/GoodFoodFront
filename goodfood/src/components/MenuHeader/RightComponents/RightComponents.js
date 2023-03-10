import { LoginOutlined, HomeOutlined, LogoutOutlined} from "@ant-design/icons";
import {  Button, Col, message, Image } from "antd";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Utils/providers/UserContext";
import UseAuth from "../../../Utils/UseAuth";
import Loader from "../../Loader/Loader";

import './RightComponents.css'


function RightComponents( ) {
  
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, logOut  } = UseAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [picture, setPicture] = useState(null)
  const { user } = useContext(UserContext);
  
    
  const fetchUserProfilePic  = async () => {
            if (user) {
                try {
                    const response = await axios.get('http://0.0.0.0:8080/api/usersconnect', {
                        headers: {
                            Authorization: `Bearer ${user}`
                        }
                    });
                    setPicture(response.data.user.nameImage);
                    setIsLoading(false);
                    
                } catch (error) {
                    console.error(error);
                }
            }
        }

  useEffect(() => {
    if (isLoggedIn) {
        fetchUserProfilePic();
          }
    }, [isLoggedIn]);
  

  const handleLogOut = ()=>{
    message.success("Vous êtes déconnecté");
    logOut()
  }

 

    return (
      <Col className="right-components" span={8} xs={4} lg={8} xl={8}>
       
          {isLoggedIn 
          ? 
          (
            <Button type="primary" onClick={handleLogOut} style={{marginRight:"10px"}}>
              <LogoutOutlined /> Déconnexion
            </Button>   
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
          {isLoggedIn &&
          <>
            <a href="/profile">
              <Image
              preview={false} 
              style={{ width: "60px", height:"60px"}}
              className='profile-image' 
              src={`http://localhost:8080/${picture}`} />
            </a>
          </>       
          }
      </Col>
    );
  }
export default RightComponents;