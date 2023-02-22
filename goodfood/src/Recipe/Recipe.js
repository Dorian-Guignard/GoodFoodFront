function Recipe(){
    return(
    <div className="recipe">
        <div className="recipe-header">
            <image>#</image>
            <h2>Titre de la recette</h2>
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