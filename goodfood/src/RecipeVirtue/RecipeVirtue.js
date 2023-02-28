import { useRecipesContext } from '../Utils/providers/RecipesProvider';
import {useParams} from "react-router-dom";
import RecipesCards from '../RecipesCards/RecipesCards';



function Virtue(){
    const {virtuename}=useParams();
    const {recipes} = useRecipesContext(); 
    console.log(recipes)
      return (
        <div>
            <h2>{virtuename}</h2> 
                    
               <RecipesCards recipe={recipes}/>
               
        </div>       
        );
        
        
}

export default Virtue ;