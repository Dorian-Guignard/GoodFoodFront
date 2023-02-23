import { Col, Row } from 'antd';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";



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
    
    /*const mappedRecipes = recipes.map((recipe) => ({
    name: recipe.name
    }));*/

    console.log(recipes)
      return (
        <div>
            <h2>{virtueToShow}</h2>
            <Row gutter={24}>
            {recipes.map((recipe) => (
            <Col lg={6} key={recipe.id}>
                <div className='recipe'>       
                <h3 className='recipe-title'>
                {recipe.name}
                </h3>
                </div>
            </Col>
            ))}
            </Row>
        </div>
        
        );
        
        
}

export default Virtue ;