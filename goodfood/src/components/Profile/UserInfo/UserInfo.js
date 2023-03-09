import { Avatar, Button, Typography } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function UserInformation({data}) {
    return (
      <>
        <Typography.Title level={1}>Bienvenue : {data ? data.user.nameUser : ''} </Typography.Title>
        <Avatar size={64} src={`http://localhost:8080/${data.user.nameImage}`} /> 
        <Button 
          shape="circle" 
          icon={<EditOutlined />} 
          style={{position:'absolute', marginTop:'30px'}}
        />
      </>
    );
  }
export default UserInformation;