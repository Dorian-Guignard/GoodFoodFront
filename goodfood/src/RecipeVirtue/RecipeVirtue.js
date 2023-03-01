import { useRecipesContext } from '../Utils/providers/RecipesProvider';
import {useParams} from "react-router-dom";
import RecipesCards from '../RecipesCards/RecipesCards';






function Virtue(){
    const {virtuename}=useParams();
    const {recipes} = useRecipesContext(); 
    console.log(recipes)
    console.log()
    

    const filteredRecipes = recipes.filter(recipe => recipe.virtue.name === virtuename)

    console.log(filteredRecipes)

      return (
        <div>
            <h2>{virtuename}</h2> 
                    
               <RecipesCards recipe={filteredRecipes}/>
               
        </div>       
        );
        
        
}

export default Virtue ;