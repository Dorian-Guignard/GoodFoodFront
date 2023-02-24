import axios from 'axios';
import { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";

function Recipe(){

    const location = useLocation();
    const recipeSelected = location.pathname;
    const recipeToShow = recipeSelected.split("/")[2];

    /*console.log(recipeToShow);*/

    const [recipe, setRecipe] = useState([]);
    
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
        <div className="recipe-header">
            {/*<image>#</image>
            <h2>{recipe.recipe.name}</h2>*/}
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