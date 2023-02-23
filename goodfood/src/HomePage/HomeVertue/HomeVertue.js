import './HomeVertue.css';
import { Col, Row, Image } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';


function HomeVertue() {
    const [virtues, setVirtues] = useState([]);
    const smallScreen=useMediaQuery({ maxWidth: 450 })
    
    
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
        <h2>Les vertues</h2>
        <Row gutter={24}>
        {virtues.map(virtue => (
          <Col lg={6} key={virtue.id}>
            <div className='vertue'>       
            <Image src={virtue.picture} alt='image des vertues' width={smallScreen ? 50 : 200} height={smallScreen ? 50 : 200}/>
            <h3 className='vertue-title'>{virtue.name}</h3>
            </div>
          </Col>
        ))}
        </Row>
      </div>
    );
  }

export default HomeVertue;