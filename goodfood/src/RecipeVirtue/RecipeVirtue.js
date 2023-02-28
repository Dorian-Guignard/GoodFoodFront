import { useRecipesContext } from '../Utils/providers/RecipesProvider';
import {useParams, useNavigate} from "react-router-dom";
import RecipesCards from '../RecipesCards/RecipesCards';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';




function Virtue(){
    const {virtuename}=useParams();
    const {recipes} = useRecipesContext(); 
    console.log(recipes)
    console.log()
    

    const filteredRecipes = recipes.filter(recipe => recipe.virtue === {virtuename})

    console.log(filteredRecipes)

      return (
        <div>
            <h2>{virtuename}</h2> 
                    
               <RecipesCards recipe={recipes}/>
               
        </div>       
        );
        
        
}

export default Virtue ;