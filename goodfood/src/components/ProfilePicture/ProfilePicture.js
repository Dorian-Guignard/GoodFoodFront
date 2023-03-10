import React, { useState, useContext, useEffect } from "react";
import { Upload, message, Button } from "antd";
import axios from "axios";
import { UserContext } from "../../Utils/providers/UserContext";
import { UploadOutlined } from '@ant-design/icons';

const ProfilePicture = () => {

  const [image, setImage] = useState('')
  const { user, updateUser } = useContext(UserContext);
  const [data, setData] = useState(null);

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
}, [user]);

const handleSubmit = async (event) => {

    event.preventDefault();
    if (!image) {
      message.error("Please select a file to upload");
      return;
    }
    const formData = new FormData();
    formData.append("imageFile", image);
    try {
      const response = await axios.patch(
        `http://0.0.0.0:8080/api/users/${data.user.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${user}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      message.success("Image uploaded successfully");
      console.log(response)
      // Mettre à jour l'utilisateur avec la nouvelle image
      setData({user: { ...data.user, nameImage: image.name}});
     
    } catch (error) {
      message.error("Image upload failed");
      console.log(data.user)
  };
}
    const handleImage=(e)=>{        
        setImage(e.target.files[0])
}
  return (
    <div>
      <input type='file' name='image'  onChange={handleImage}></input>
      <button onClick={handleSubmit}>Envoyer</button>
    </div>
  );
};

export default ProfilePicture;
