import { UserOutlined } from "@ant-design/icons";
import { Button, Col, Switch } from "antd";
import './RightComponents.css'

function RightComponents() {
    return (
      <Col className="right-components" span={8} xs={4} lg={8} xl={8}>
        <Switch />
        <Button
          type="primary"
        ><UserOutlined /> Connexion</Button>
        
      </Col>
    );
  }
export default RightComponents;