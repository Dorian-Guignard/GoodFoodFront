import { useNavigate, useSearchParams } from 'react-router-dom';
import { Col, Row, Card, Typography } from 'antd';
import { useRecipesContext } from '../../../../Utils/providers/RecipesProvider';
import Meta from 'antd/es/card/Meta';
import { useMediaQuery } from 'react-responsive';
import Loader from '../../../Loader/Loader';
import './SearchResult.css'
import { useEffect, useState } from 'react';
const { Title } = Typography;


function SearchResult() {
  let [searchParams] = useSearchParams();
  const {recipes} = useRecipesContext();
  const isSmallScreen=useMediaQuery({ maxWidth: 450 })
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);

  
  useEffect(() => {
    if (isLoading && recipes.length > 0) {
      setIsLoading(false);
    }
    if (!isLoading && recipes.length === 0) {
      setNoResults(true);
    }
  }, [isLoading, recipes]);

  const searchResults = recipes.filter(recipe => {
    const filteredFood = recipe.compositions.filter(composition => composition.food.name.toLowerCase().includes(searchParams.get("q").toLowerCase()))
    return filteredFood.length
  });

  return (
    <div className='search-cards'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {searchResults.length > 0 ? (
            <Row gutter={[0,24]} justify="center" >
              <Row gutter={[24,24]} justify="center" >
                {searchResults.map((recipe) => (
                  <Col lg={8} xs={24} key={recipe.id} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card
                      style={isSmallScreen ? { width: '200px', height: '150px' } : { minWidth: '200px', maxHeight: '250px', maxWidth:'200px' }}
                      hoverable
                      cover={<img alt={recipe.name} src={`http://localhost:8080/${recipe.nameImage}`} className="result-card-image" />}
                      onClick={() => navigate(`/recipe/${recipe.id}`
                      )}
                    >
                      <Meta title={recipe.name} />
                    </Card>
                  </Col>   
                ))}
              </Row>   
            </Row>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Title level={4}>Aucun résultat trouvé pour "{searchParams.get("q")}"</Title>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default SearchResult;