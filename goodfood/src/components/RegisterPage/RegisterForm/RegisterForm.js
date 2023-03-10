import { Form, Input, Button, Col, message, Upload, Avatar } from "antd";
import { MailOutlined, LockOutlined, UserOutlined, PlusOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function RegisterForm(){

  const navigate = useNavigate()
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleRegister = async (values) => {
    try {
      console.log("Formulaire soumis avec les données suivantes : ", values);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("nameUser", values.pseudo);
      formData.append("imageFile", imageFile);    
  
      const response = await axios.post("http://0.0.0.0:8080/api/users", formData, config);
  
      if (response.status !== 201) {
        throw new Error("Email déjà utilisé");
      }
  
      message.success("Compte créé, vous pouvez vous connectez !")
      navigate('/login')
      
    } catch (error) {
      console.error(error);
      message.error(error.message);
    }
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
    <Col span={12}>
      <Form
        name="register"
        onFinish={handleRegister}
        onFinishFailed={onFinishFailed}
        scrollToFirstError
      > 
        <Form.Item 
        style={{display:"flex", fontWeight:'bold'}}
        label='Photo de Profil'
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
        <Form.Item
          
          name="pseudo"
          rules={[
            {
              required: true,
              message: "Entrez votre pseudo",
            },
          ]}
        >
          <Input 
            prefix={<UserOutlined />}
            placeholder="Pseudo*" 
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "Entrez un e-mail valide",
            },
            {
              required: true,
              message: "Entrez votre e-mail",
            },
          ]}
        >
          <Input
          prefix={<MailOutlined />}
          placeholder="E-mail*"
        />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Entrez un mot de passe",
            },
            {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial."
            }
          ]}
          hasFeedback
        >
            <Input.Password
          prefix={<LockOutlined/>}
          type="password"
          placeholder="Mot de passe*"
        />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Confirmez votre Mot de passe",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("Les Mots de passe ne sont pas identiques")
                );
              },
            }),
          ]}
        >
            <Input.Password
          prefix={<LockOutlined/>}
          type="password"
          placeholder="Confirmez votre Mot de passe*"
        />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            S'inscrire
          </Button>
        </Form.Item>
      </Form>
      
    </Col>
  );
};

export default RegisterForm;
