import { useNavigate, useSearchParams } from 'react-router-dom';
import { Col, Row, Card } from 'antd';
import { useRecipesContext } from '../../../../Utils/providers/RecipesProvider';
import Meta from 'antd/es/card/Meta';
import { useMediaQuery } from 'react-responsive';
import Loader from '../../../Loader/Loader';
import './SearchResult.css'
import { useState } from 'react';


function SearchResult() {
  let [searchParams] = useSearchParams();
  const {recipes} = useRecipesContext();
  const isSmallScreen=useMediaQuery({ maxWidth: 450 })
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  
  const searchResults = recipes.filter(recipe => {
    const filteredFood = recipe.compositions.filter(composition => composition.food.name.toLowerCase().includes(searchParams.get("q").toLowerCase()))
    return filteredFood.length
  });

  if (isLoading && searchResults.length > 0) {
    setIsLoading(false);
  }

  return (
    <div className='search-cards'>
      {isLoading ? (
        <Loader />
      ) : (
    <Row gutter={[0,24]} justify="center" >
    <Row gutter={[24,24]} justify="center" >
        {searchResults.map((recipe) => (
            <Col lg={8} xs={24} key={recipe.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              style={isSmallScreen ? { width: '200px', height: '150px' } : { width: '200px', maxHeight: '250px' }}
              hoverable
              cover={<img alt={recipe.name} src={'/' + recipe.nameImage} className="result-card-image" />}
              onClick={() => navigate(`/recipe/${recipe.id}`
              )}
            >
              <Meta title={recipe.name} />
            </Card>
            </Col>   
          ))}
          
        </Row>   
    </Row>
     )}
  </div>
  );
}


export default SearchResult;