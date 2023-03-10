import { Button, Card, Col, Row, Typography, Tooltip } from "antd";
import { MehOutlined, CloseOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import axios from "axios";
import './RecipeById.css'


function RecipeList({recipes, navigate, isSmallScreen, data}) {
  

    const filteredRecipesById = recipes.filter(recipe => recipe.user?.id === data.user.id);
    
    const handleDelete = (itemId) => {
      axios.delete(`http://localhost:8080/api/recipes/${itemId}`)
        .then(() => {
          
          window.location.reload();
        })
        .catch(error => {
          console.error(error);
        });
    };
    
  
    return (
      <div className='recipes-by-id'>
        <Typography.Title level={1}>Mes Recettes</Typography.Title>
        {filteredRecipesById.length > 0 ? (
        <Row gutter={[24,24]} justify="center">
        {filteredRecipesById.map((recipe) => (
            <Col lg={6} xs={12} key={recipe.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card
                style={isSmallScreen ? { minWidth: '150px', height: '150px', maxWidth:'150px' } : { minWidth: '200px', maxHeight: '250px', maxWidth:'200px' }}
                hoverable
                cover={<img alt={recipe.name} src={`http://localhost:8080/${recipe.nameImage}`} style={isSmallScreen ? { height: '100px' } : { height: '150px' }} />}
                onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
                <Meta title={recipe.name} />
            </Card>
            <Tooltip title="Supprimer la recette">
              <Button danger 
              itemId={recipe.id} 
              onClick={() => handleDelete(recipe.id)} 
              type="primary" 
              size="small"
              style={isSmallScreen ? { position:'absolute', top:'0', right:'5px', borderRadius:'10px' } : { position:'relative', bottom:'0', right: '30px' }}
              >
                <CloseOutlined />
              </Button>
            </Tooltip>
            </Col>
        ))}
        </Row>
        ) : (
            <div style={{ textAlign: 'center' }}>
              <p> Vous n'avez pas encore de recette <MehOutlined/>, mais ce n'est pas grave ! 
              Créez en une maintenant <Button type="primary" onClick={() => navigate("/recipe/add")}>ici</Button>!
            </p>
            </div>
          )}
          </div>
        );
  }
export default RecipeList;