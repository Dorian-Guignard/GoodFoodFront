import { Button, message, Upload } from "antd"
import {UploadOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../../Utils/providers/UserContext";
import './AddRecipeFinish.css'; 

function AddRecipeFinish({infoDetails, foodsDetails, stepsDetails} ){

    const [imageFile, setImageFile] = useState({});
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    
    const foodsToSubmit = foodsDetails.compositions.map((compositions) => {
      return{   
        food: parseInt(compositions.food[0]),
        quantity: compositions.quantity,
        unity: compositions.unity
      }
    })

    const stepsToSubmit = {
      "steps":stepsDetails.steps.map((step,index) => ({
        "name": index +1,
        "content": step.steps
      }))
    }
    
    const infosToSubmit = {
      "name": infoDetails.name,
      "description": infoDetails.description,
      "duration": parseInt(infoDetails.duration),
      "heatTime": parseInt(infoDetails.heatTime),
      "prepTime": parseInt(infoDetails.prepTime),
      "portion": parseInt(infoDetails.portion),
      "category": parseInt(infoDetails.category),
      "virtue": parseInt(infoDetails.virtue),
      "compositions": foodsToSubmit,
      "steps": stepsToSubmit.steps
      
    }
    
    const handleAddRecipe = async (values) => {
      try {
        const response = await fetch("http://0.0.0.0:8080/api/recipes", {
          method: "POST",
          body: JSON.stringify(infosToSubmit),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user}`,
          },
        });
    
        if (!response.ok) {
          throw new Error("Echec de l'ajout de la recette");
        }
    
        // deuxième requete pour image ici
        const recipe = await response.json();

        const formData = new FormData();
        formData.append("imageFile", imageFile);

        const imageResponse = await fetch(`http://0.0.0.0:8080/api/recipes/${recipe.recipe.id}/add-image`, {
          method: "POST",
          body: formData,
          headers: {
          Authorization: `Bearer ${user}`,
          },
        });

        if (!imageResponse.ok) {
          throw new Error("Echec de l'ajout de l'image");
        }
        
        message.success("Ajout de recette réussie !");
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    };
      
      
    
    
    if(infoDetails && foodsDetails && stepsDetails  !== null)
    
    return(
        
        <div className="recipe">    
          <Upload
          name="imageFile"
            multiple={false}
            maxCount={1}
            accept="image/*"
            beforeUpload={(file) => {
              console.log("in beforeUplaod",file);
              setImageFile(file)
              console.log(imageFile)
              return false;
            }}
           >
            <Button icon={<UploadOutlined />}>Sélectionner une image</Button>
          </Upload>

        <h2>{infoDetails.name}</h2>

        <div className="recipe-infos">
            <span>Portion : {infoDetails.portion} personnes</span>
            <span>Préparation : {infoDetails.duration} min </span> 
            <span> Cuisson : {infoDetails.heatTime ? infoDetails.heatTime + " min" : "aucune"} </span>
        </div>   
                
        <ul className='foods'>                      
            {foodsDetails.compositions.map(foods => (
                <li key={foods.id} className="foods-list">
                    <span> {foods.quantity} {foods.unity} {foods.food} </span>
                </li> ))}
        </ul>
                       
        <ul className="steps">
            {stepsDetails.steps.map(step => (
                <li key={step.id} className="steps-list">
                    <span> {step.steps} </span>
                </li> ))}
        </ul>

        
        
        
        <Button type='primary' size="large" onClick={handleAddRecipe}>
            Valider ma recette
        </Button>
                    
        </div>    
           
    )    
}

export default AddRecipeFinish