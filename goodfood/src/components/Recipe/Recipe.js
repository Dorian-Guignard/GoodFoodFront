import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import Loader from '../Loader/Loader';
import { Avatar, Col, Row, Typography } from 'antd';
import './Recipe.css';

const { Text } = Typography;
 


function Recipe(){

    const {id} = useParams(); 

    const [recipe, setRecipe] = useState([{recipe: {name:""}}]);
    const [loading, setLoading] = useState(false);
    

    const fetchResults = () => {
        setLoading(true);
        axios.get(`http://0.0.0.0:8080/api/recipes/${id}`)
          .then((response) => {
            
            setRecipe(response.data.recipe);
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            setLoading(false);
          });
      };
    
      useEffect(() => {
        fetchResults();
      }, []);  
        

      if (loading) {
        return (<Loader active />)
      }     
    
    return(
    
    <div className="recipe">
        {<img alt={recipe[0]?.recipe.name} src={`http://localhost:8080/${recipe[0]?.recipe.nameImage}`} className="card-image" />}
        <h2>{recipe[0]?.recipe.name}</h2>

        <div className="recipe-infos">
          <span>Portion : {recipe[0]?.recipe.portion} personnes</span> 
          <span>Préparation : {recipe[0]?.recipe.prepTime} min </span> 
          <span> Cuisson : {recipe[0]?.recipe.heatTime ? recipe[0]?.recipe.heatTime + " min" : "aucune"} </span>
        </div>   
                
        <div className='recipe-ingredients'>  
              <Row gutter={[24,24]} justify="center" 
              style={{marginTop:'10px', marginBottom:'10px', justifyContent:'space-around', marginLeft:'15px'}}
             >
                {recipe[0]?.recipe.compositions?.map(foods => (
                   <Col span={8} xs={24} lg={8} key={foods.food.id}>
                    <div className='meta-card'>
                     <Avatar size={64} src={`http://localhost:8080/${foods.food.nameImage}`} style={{marginRight:5}}/>
                     <Text strong>{foods.quantity} {foods.unity} {foods.food.name}</Text>
                   </div>
                    </Col>
                  ))}
              </Row> 
        </div>
  
                <div className="recipe-instructions">
                    <ul>
                    {recipe[0]?.recipe.steps?.map(step => (
                        <li key={step.id} className="steps-list">
                          {step.content}
                        </li> ))}
                    </ul>
                </div>         
    </div>             
    )
}      
 
export default Recipe;