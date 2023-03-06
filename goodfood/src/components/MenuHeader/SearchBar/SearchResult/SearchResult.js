import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Card } from 'antd';


function SearchResult() {

  const { q } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch('http://0.0.0.0:8080/api/recipes');
        const data = await response.json();
        const filteredData = data.filter(recipe => recipe.name.toLowerCase().includes(q.toLowerCase()));
        setSearchResults(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSearchResults();
  }, [q]);

  return (
    <div className='search-cards'>
    <Row gutter={[24,24]} justify="center" >
        <Col lg={6} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
        {searchResults.map((result) => (
        <Card key={result.id} title={result.name}>
          <p>{result.description}</p>
        </Card>
      ))}  
        </Col>   
    </Row>
  </div>
  );
}


export default SearchResult;