import { Col, Row } from 'antd';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";
import RecipeCard from '../RecipeCard/RecipeCard';



function Virtue(){
    
    const location = useLocation();
    const virtueSelected = location.pathname;
    const virtueToShow = virtueSelected.split("/")[2];
    /*console.log(virtueSelected);
    console.log(virtueToShow);*/
    
    const [recipes, setRecipes] = useState([]);
    /*const [loading, setLoading] = useState(false);*/
    
    const fetchResults = () => {
        /*setLoading(true);*/
        axios.get('http://0.0.0.0:8080/api/recipes')
            .then((response) => {
            setRecipes(response.data[0].recipes);
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
    
    const mappedRecipes = recipes.map((recipe) => ({
    id: recipe.id,
    name: recipe.name,
    category: recipe.category.name,
    virtue: recipe.virtue.name,
    }));

    console.log(recipes);
    console.log(mappedRecipes);
      return (
        <div>
            <h2>{virtueToShow}</h2>     
                <RecipeCard recipe={mappedRecipes}/>
        </div>       
        );
        
        
}

export default Virtue ;