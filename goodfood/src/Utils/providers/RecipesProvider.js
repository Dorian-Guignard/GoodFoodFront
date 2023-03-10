import { createContext, useEffect, useState,  useContext } from "react"
import { getRecipes } from "../api"

export const RecipesContext = createContext({recipes: []})

export const RecipesContextProvider = ({children}) => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchRecipes = async () => {
          const recipes = await getRecipes()
          setRecipes(recipes)
        }
          if(!recipes?.length) fetchRecipes()
        }, [recipes]);
    
    return <RecipesContext.Provider value={{recipes}}>
        {children}
    </RecipesContext.Provider>
}

export const useRecipesContext = () => useContext(RecipesContext)