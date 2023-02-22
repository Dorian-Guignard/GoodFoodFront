import { Col, Input } from "antd";
import './MiddleComponents.css'
function MiddleComponents() {
    return (
      <Col className="middle-components" span={8} xs={20} lg={8} xl={8}>
        <Input.Search placeholder="Rechercher une recette, aliment..." />
      </Col>
    );
  }
export default MiddleComponents;