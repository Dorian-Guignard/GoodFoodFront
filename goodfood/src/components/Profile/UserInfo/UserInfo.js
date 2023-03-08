import { Avatar, Button, Typography } from "antd";
import { UserOutlined, EditOutlined } from "@ant-design/icons";

function UserInformation({data}) {
    return (
      <>
        <Typography.Title level={1}>Bienvenue : {data ? data.user.nameUser : ''} </Typography.Title>
        <Avatar size={64} icon={<UserOutlined />} /> 
        <Button 
          shape="circle" 
          icon={<EditOutlined />} 
          style={{position:'absolute', marginTop:'30px'}}
        />
      </>
    );
  }
export default UserInformation;