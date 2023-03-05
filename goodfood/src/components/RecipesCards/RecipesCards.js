import { Col, Row, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from "react-router-dom";

import './RecipesCards.css'

function RecipesCards({recipe}){
    
  const isSmallScreen=useMediaQuery({ maxWidth: 450 })
  const navigate = useNavigate();
    
    
    return(
      <div className='recipes-cards'>
        <Row gutter={[24,24]} justify="center" >
        {recipe.map((recipe) => (
            <Col lg={6} xs={12} key={recipe.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              style={isSmallScreen ? { width: '200px', height: '150px' } : { width: '200px', maxHeight: '250px' }}
              hoverable
              cover={<img alt={recipe.name} src={'/' + recipe.picture} className="recipe-card-image" />}
              onClick={() => navigate(`/recipe/${recipe.id}`
              )}
            >
              <Meta title={recipe.name} />
            </Card>
            </Col>   
          ))}
          
        </Row>
      </div>
        )

    }

export default RecipesCards;
