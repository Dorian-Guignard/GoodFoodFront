import { Col, Row, Card } from 'antd';
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";

function RecipesCards({recipe}){
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
              <p>{recipe.heatTime}</p>
              <p>{recipe.virtue}</p>
            </Card>
            </Col>   
          ))}
          
        </Row>
          </div>
        )

    }

export default RecipesCards;