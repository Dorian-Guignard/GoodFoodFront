import './Footer.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Utils/providers/UserContext';
import axios from 'axios';
import { Button } from 'antd';

const Footer = () => {

    const [data, setData] = useState(null)
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        async function fetchUserData() {
            if (user) {
                try {
                    const response = await axios.get('http://0.0.0.0:8080/api/usersconnect', {
                        headers: {
                            Authorization: `Bearer ${user}`
                        }
                    });
                    setData(response.data.user); 
                } catch (error) {
                    console.error(error);
                }
            }
        }
        fetchUserData();
    }, [user]);

    const handleClick = () => {
        window.location.assign('http://0.0.0.0:8080/backhome');
      }


    return(

    <div className='footer'>
        <Link to={`/mentionslegales`} className="footer-element">Mention Légales</Link>
        <Link to={`/contact`} className="footer-element">Contactez-nous</Link>
        {data && data.roles.includes("ROLE_ADMIN") ? (
            <Button onClick={handleClick}>Admin</Button>
          ) : null}
    </div>
    )

    }
export default Footer ;