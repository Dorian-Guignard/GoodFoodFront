import { useRecipesContext } from '../Utils/providers/RecipesProvider';
import {useParams} from "react-router-dom";
import RecipesCards from '../RecipesCards/RecipesCards';
import './RecipeVirtue.css'
import {Typography} from 'antd';
const {Title}=Typography;


function Virtue(){
    const {virtuename}=useParams();
    const {recipes} = useRecipesContext(); 
    console.log(recipes)
    console.log()
    

    const filteredRecipes = recipes.filter(recipe => recipe.virtue.name === virtuename)

    console.log(filteredRecipes)

      return (
        <div>
                    
        <div className='recipe-virtue'>

          <Title level={2} className='recipe-title'>{virtuename}</Title>
              
               <RecipesCards recipe={filteredRecipes}/>
               
        </div> 
        </div>      
        );
        
        
}

export default Virtue ;

