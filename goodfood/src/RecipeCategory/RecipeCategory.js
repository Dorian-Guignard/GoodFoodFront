import { Col, Row } from 'antd';

function RecipeCategory(){
    return(
    <div className="recipeList">
        <div className="categorie-header">
            
            <h2>Catégorie ou vertue</h2>
        </div>
        <div className="recipe-grid">
        <Row gutter={24}>
                <Col lg={6}>
                    <div className='recipe'>
                        <div className='recipe-image'>
                            <h3 className='recipe-title'>Recette 1</h3>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='recipe'>
                        <div className='recipe-image'>
                            <h3 className='recipe-title'>Recette 2</h3>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='recipe'>
                        <div className='recipe-image'>
                            <h3 className='recipe-title'>Recette 3</h3>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

    </div>
    )
}  
export default RecipeCategory;