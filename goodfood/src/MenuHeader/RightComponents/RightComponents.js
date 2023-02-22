import { UserOutlined } from "@ant-design/icons";
import { Button, Col, Switch } from "antd";
import Login from "../Login/Login";
import './RightComponents.css'

function RightComponents({ togglelogin, loginOpen }) {
    return (
      <Col className="right-components" span={8} xs={4} lg={8} xl={8}>
        <Switch />
        <Button
          type="primary"
          onClick={togglelogin}
          style={{ width: "40px", height: "40px", fontSize: "20px" }}
          icon={<UserOutlined />}
        ></Button>
        {loginOpen && <div className="menu-login"><Login /></div>}
      </Col>
    );
  }
export default RightComponents;