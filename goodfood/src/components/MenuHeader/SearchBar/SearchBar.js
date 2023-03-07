import { Col, Input } from "antd";
import './SearchBar.css'

function SearchBar() {

  const handleSearch = async (value) => {
    const encodedValue = encodeURIComponent(value);
    window.location.href = `/search?q=${encodedValue}`; 
  };

    return (
      <Col className="middle-components" span={8} xs={20} lg={8} xl={8}>
        <Input.Search 
        onSearch={handleSearch}
        placeholder="Rechercher une recette, aliment..." 
        />
      </Col>
    );
  }
export default SearchBar;