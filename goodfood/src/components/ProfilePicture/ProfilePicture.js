import { Form, Input, Button, Col, message, Upload, Avatar, Typography } from "antd";
import { PlusOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../Utils/providers/UserContext";

function ProfilePicture(){

  const navigate = useNavigate()
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [data, setData] = useState(null)
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function fetchUserData() {
        if (user) {
            try {
                const response = await axios.get('http://0.0.0.0:8080/api/usersconnect', {
                    headers: {
                        Authorization: `Bearer ${user}`
                    }
                });
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    }
    fetchUserData();
}, [user]);;

  const handleRegister = async (values) => {
    try {
      console.log("Formulaire soumis avec les données suivantes : ", values);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const formData = new FormData();
      formData.append("imageFile", imageFile);    
  
      const response = await axios.post(`http://0.0.0.0:8080/api/users/${data.user.id}/add-image`, formData, config);
  
      if (response.status !== 200) {
        throw new Error("L'image n'a pas été ajouté");
      }
  
      message.success("L'image a bien été modifiée !")
      navigate('/profile')
      
    } catch (error) {
      message.error(error.message);
    }
  };
  
  const onFinishFailed = (errorInfo) => {
    message.error(errorInfo);
  };

  const beforeUploadHandler = (file) => {
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    const maxFileSize = 5 * 1024 * 1024; // 5 MB
  
    if (!allowedTypes.includes(file.type)) {
      message.error(`Le type de fichier ${file.type} n'est pas supporté`);
      return false;
    }
  
    if (file.size > maxFileSize) {
      message.error(`La taille de fichier doit être inférieure à 5MB`);
      return false;
    }
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    return false;
  }

  return (
    <>
    <Col span={12} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Typography.Title level={3} >Nouvelle photo de profil</Typography.Title>
      <Form
        name="register"
        onFinish={handleRegister}
        onFinishFailed={onFinishFailed}
        scrollToFirstError
      > 
        <Form.Item 
        style={{display:"flex", fontWeight:'bold'}}
        name="image">
          <Upload
            accept=".png, .jpeg, .jpg"
            listType="picture-card"
            showUploadList={false}
            beforeUpload={beforeUploadHandler}
          >
            {imagePreview ? (
              <Avatar src={imagePreview} size={64} />
            ) : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" >
            Modifier l'image
          </Button>
        </Form.Item>
        </Form>
      </Col>
  </>
);
}

export default ProfilePicture;