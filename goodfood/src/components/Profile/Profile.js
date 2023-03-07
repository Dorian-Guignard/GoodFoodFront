import {Avatar, Typography} from 'antd';
import { UserOutlined} from "@ant-design/icons";
import './Profile.css'
import { useContext } from 'react';
import { UserContext } from '../../Utils/providers/UserContext';
const{Title} = Typography;

function Profile(){

    const { user } = useContext(UserContext);
    console.log(user)
    return(
    <div className='profile'>  
        <Title level={1}>Mon Profil</Title>
        <Avatar size={64} icon={<UserOutlined />}> User </Avatar>
    </div> 
    )
}

export default Profile;