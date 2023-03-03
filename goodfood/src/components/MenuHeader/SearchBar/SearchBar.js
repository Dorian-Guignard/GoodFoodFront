import { Col, Input } from "antd";
import './SearchBar.css'
function SearchBar() {
    return (
      <Col className="middle-components" span={8} xs={20} lg={8} xl={8}>
        <Input.Search placeholder="Rechercher une recette, aliment..." />
      </Col>
    );
  }
export default SearchBar;