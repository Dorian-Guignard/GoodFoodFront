import { Col, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import './SearchBar.css'

function SearchBar() {


  const handleSearch = async (value) => {
    axios.get('http://0.0.0.0:8080/api/recipes')
          .then(response => {
            const filteredData = response.data.filter(recipe => recipe.name === {value});
            console.log(filteredData);
        })
          .catch(error => {
            console.error(error);
          })
  }

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