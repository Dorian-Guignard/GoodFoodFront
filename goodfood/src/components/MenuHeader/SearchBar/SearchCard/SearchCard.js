import { Col, Row, Card } from 'antd';
import Meta from 'antd/es/card/Meta';

function SearchCard() {
  return (
    <div className='search-cards'>
    <Row gutter={[24,24]} justify="center" >
        <Col lg={6} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          hoverable  
        />
          <Meta title="test" />     
        </Col>   
    </Row>
  </div>
  );
}


export default SearchCard;