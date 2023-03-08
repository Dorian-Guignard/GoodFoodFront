import './HomeVirtue.css';
import { Col, Row,Card, Typography } from 'antd';
import { useNavigate } from "react-router-dom";
import { useVirtuesContext } from '../../../Utils/providers/VirtuesProvider';
import { useMediaQuery } from 'react-responsive';
const {Meta}=Card;
const{Title}=Typography


function HomeVirtue() {
    const {virtues} = useVirtuesContext();
    const isSmallScreen=useMediaQuery({ maxWidth: 450 })
    const navigate = useNavigate();
    
    

    return (
        
      <div className='block-vertue'>
        {/* {loading && <Loader active />} */}
        {/* {!loading && */}
      <Row gutter={[0, 24]} justify="center">
        <Col span={24}>
          <Title level={isSmallScreen ? 3 : 1}>Les Vertus</Title>
        </Col>
        {virtues?.map(virtue => (
          <Col xs={12} lg={6} key={virtue.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              style={isSmallScreen ? { width: '100px', height: '100px' } : { width: '200px', height: '250px' }}
              onClick={() => navigate(`/vertue/${virtue.name}`)}
              hoverable
              cover={<img alt={virtue.name} src={'/'+virtue.nameImage} className="card-image" />}
            >
              <Meta title={virtue.name} />
            </Card>
          </Col>
        ))}
      </Row>
      {/* } */}
    </div>
  );
}

export default HomeVirtue;