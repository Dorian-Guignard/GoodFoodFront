import { useRecipesContext } from '../../Utils/providers/RecipesProvider';
import {useParams} from "react-router-dom";
import RecipesCards from '../RecipesCards/RecipesCards';
import {Typography} from 'antd';
const {Title}=Typography;



function RecipeCategory(){
    const {categoryname}=useParams();
    const {recipes} = useRecipesContext(); 
    console.log(recipes)
    console.log()
    

    const filteredRecipes = recipes.filter(recipe => recipe.category.name === categoryname)

    console.log(filteredRecipes)

      return (
        <div>
            <Title level={2} className='category-title'>{categoryname}</Title>
                    
               <RecipesCards recipe={filteredRecipes}/>
               
        </div>       
        );
        
        
}

export default RecipeCategory ;