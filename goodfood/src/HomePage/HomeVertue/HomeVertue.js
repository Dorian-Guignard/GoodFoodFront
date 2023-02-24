import './HomeVertue.css';
import { Col, Row,Card, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
const {Meta}=Card;
const{Title}=Typography


function HomeVertue() {
    const [virtues, setVirtues] = useState([]);
    const isSmallScreen=useMediaQuery({ maxWidth: 450 })
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://0.0.0.0:8080/api/virtues')
          .then(response => {
            setVirtues(response.data[0].virtues);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
        
    return (
        
      <div className='block-vertue'>
      <Row gutter={[0, 24]} justify="center">
        <Col span={24}>
          <Title level={isSmallScreen ? 3 : 1}>Les Vertus</Title>
        </Col>
        {virtues.map(virtue => (
          <Col xs={12} lg={6} key={virtue.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              style={isSmallScreen ? { width: '100px', height: '100px' } : { width: '200px', height: '250px' }}
              onClick={() => navigate(`/vertue/${virtue.name}`)}
              hoverable
              cover={<img alt={virtue.name} src={virtue.picture} className="card-image" />}
            >
              <Meta title={virtue.name} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeVertue;