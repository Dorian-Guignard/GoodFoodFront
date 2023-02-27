import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import Loader from '../Loader/Loader';

function Recipe(){

    const {recipeToShow}=useParams();

    console.log(recipeToShow);

    const [recipe, setRecipe] = useState([]);
    /*const [loading, setLoading] = useState(false);*/

    const fetchResults = () => {
        /*setLoading(true);*/
        axios.get(`http://0.0.0.0:8080/api/recipes/${recipeToShow}`)
            .then((response) => {
            setRecipe(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
        /*.finally(() => {
            setLoading(false);
          });*/
        }

        useEffect(() => {
            fetchResults();
            }, []);

        console.log(recipe)
        



            
    
    return(
    <div className="recipe">
        {/*</div>{loading && <Loader active />} */}
        
            {/*<div className="recipe-header">
                    <image>#</image>
                </div>
                <h2>{recipe.name}</h2>*/}
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