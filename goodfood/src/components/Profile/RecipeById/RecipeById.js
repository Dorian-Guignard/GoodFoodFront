import { Button, Card, Col, Row, Typography } from "antd";
import { MehOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import './RecipeById.css'


function RecipeList({recipes, navigate, isSmallScreen, data}) {
    

    const filteredRecipesById = recipes.filter(recipe => recipe.user.id === data.user.id );
  
    return (
      <div className='recipes-by-id'>
        <Typography.Title level={1}>Mes Recettes</Typography.Title>
        {filteredRecipesById.length > 0 ? (
            <Row gutter={[24,24]} justify="center">
            {filteredRecipesById.map((recipe) => (
                <Col lg={6} xs={12} key={recipe.id} style={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                    style={isSmallScreen ? { width: '200px', height: '150px' } : { width: '200px', maxHeight: '250px' }}
                    hoverable
                    cover={<img alt={recipe.name} src={'/' + recipe.picture} style={isSmallScreen ? { height: '100px' } : { height: '150px' }} />}
                    onClick={() => navigate(`/recipe/${recipe.id}`)}
                >
                    <Meta title={recipe.name} />
                </Card>
                </Col>
            ))}
            </Row>
            ) : (
                <div style={{ textAlign: 'center' }}>
                  <p> Vous n'avez pas encore de recette <MehOutlined/>, mais ce n'est pas grave ! Créez en une maintenant <Button type="primary" onClick={() => navigate("/recipe/add")}>
                ici
          </Button> !</p>
                </div>
              )}
      </div>
    );
  }
export default RecipeList;