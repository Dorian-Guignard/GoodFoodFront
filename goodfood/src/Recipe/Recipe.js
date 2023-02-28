import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import Loader from '../Loader/Loader';


function Recipe(){

    const {recipeId}=useParams();

    console.log(recipeId);
    

    const [recipe, setRecipe] = useState([{recipe: {name:""}}]);
    const [loading, setLoading] = useState(false);
    

    const fetchResults = () => {
        setLoading(true);
        axios.get(`http://0.0.0.0:8080/api/recipes/2`)
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
    
        
        console.log(recipe)
        


      if (loading) {
        return (<Loader active />)
      }
            
    
    return(
    
    <div className="recipe">
        {<img alt={recipe[0]?.recipe.name} src={recipe[0]?.recipe.picture} className="card-image" />}
        <h2>{recipe[0]?.recipe.name}</h2>

        <div className="recipe-infos">
        <span>Portion : {recipe[0]?.recipe.portion} personnes</span> <span>Préparation : {recipe[0]?.recipe.prepTime} min </span> <span> Cuisson : {recipe[0]?.recipe.heatTime} min </span>
        </div>   
                <div className="recipe-ingredients">
                    <ul>
                        <li> Liste des ingrédients </li>
                        <li> Liste des ingrédients </li>
                        <li> Liste des ingrédients </li>
                    </ul>
                </div>
                <div className="recipe-instructions">
                    <ul>
                        <li> Liste des étapes</li>
                        <li> Liste des étapes</li>
                        <li> Liste des étapes</li>
                    </ul>
                </div>
    </div>             
    )
}      
 
export default Recipe;