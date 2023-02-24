import { Col, Row, Card } from 'antd';
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";

function RecipeCard({recipe}){
    const navigate = useNavigate();
    
    return(
      <div>
        <Row gutter={24}>
        {recipe.map((recipe) => (
            <Col lg={6} key={recipe.id}>
            <Card
              title={recipe.name}
              hoverable
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
              <p>{recipe.category}</p>
              <p>{recipe.virtue}</p>
            </Card>
            </Col>   
          ))}
          
        </Row>
          </div>
        )

    }

RecipeCard.propTypes = {
    recipe: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            virtue: PropTypes.string.isRequired,
        })
    ).isRequired,
};


export default RecipeCard;