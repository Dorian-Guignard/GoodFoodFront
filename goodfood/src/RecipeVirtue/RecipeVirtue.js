import { Col, Row } from 'antd';
import { useRecipesContext } from '../Utils/providers/RecipesProvider';
import {useParams, useNavigate} from "react-router-dom";
import RecipeCard from '../RecipeCard/RecipeCard';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import RecipeCard from '../RecipesCards/RecipesCards';
import Loader from '../Loader/Loader';



function Virtue(){
    const {virtuename}=useParams();
    const {recipes} = useRecipesContext();
 
    
  
    console.log(recipes)
    
    

      return (
        <div>
            <h2>{virtuename}</h2> 
                    
               <RecipeCard recipe={recipes}/>
               
        </div>       
        );
        
        
}

export default Virtue ;