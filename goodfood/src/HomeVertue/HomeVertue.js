import './HomeVertue.css';
import { Col, Row } from 'antd';

function HomeVertue() {
    return (
        <div className='block-vertue'>
            <h2>Les vertues</h2>
            <Row gutter={24}>
                <Col lg={6}>
                    <div className='vertue'>
                        <div className='vertue-image'>
                            <h3 className='vertue-title'>Vertue 1</h3>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='vertue'>
                        <div className='vertue-image'>
                            <h3 className='vertue-title'>Vertue 2</h3>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='vertue'>
                        <div className='vertue-image'>
                            <h3 className='vertue-title'>Vertue 3</h3>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default HomeVertue;