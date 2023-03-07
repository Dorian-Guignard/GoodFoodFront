import {Avatar, Typography} from 'antd';
import { UserOutlined} from "@ant-design/icons";
import './Profile.css'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Utils/providers/UserContext';
const{Title} = Typography;

function Profile(){

    const { user } = useContext(UserContext);
    const [data, setData] = useState(null)

        useEffect(() => {
            async function fetchUserData() {
            if (user) {
                try {
                const response = await fetch('http://0.0.0.0:8080/api/users', {
                    headers: {
                    Authorization: `Bearer ${user}`
                    }
                });
                const userData = await response.json();
                setData(userData);
                } catch (error) {
                console.error(error);
                }
            }
            }
            fetchUserData();
        }, []);
        console.log(data)
    return(
    <div className='profile'>
        <Title level={1}>Mon Profil</Title>
        <Avatar size={64} icon={<UserOutlined />}> User </Avatar>
    </div> 
    )
}

export default Profile;