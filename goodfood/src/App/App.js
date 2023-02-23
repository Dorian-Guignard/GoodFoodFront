
import { ConfigProvider } from "antd";
import MenuHeader from "../MenuHeader/MenuHeader";
import Footer from "../Footer/Footer";
import './App.css'; 
import { Routes ,Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Recipe from "../Recipe/Recipe"
import CategoryList from "../CategoryList/CategoryList";
import LegalNotice from "../LegalNotice/LegalNotice";
import Contact from "../Contact/Contact";
import AddRecipe from "../AddRecipe/AddRecipe";
import LoginPage from "../LoginPage/LoginPage";
import Virtue from "../Virtue/Virtue"


function App() { 
  
  return (
    <div className="App">
    <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#faad14',
            },
          }}
        >
          
    <MenuHeader/>
    <div className="content">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/recipe" element={<Recipe/>}></Route>
        <Route path="/categorie" element={<CategoryList/>}></Route>
        <Route path="/vertue/*" element={<Virtue/>}></Route>
        <Route path="/recipe/add" element={<AddRecipe/>}></Route>
        <Route path="/mentionslegales" element={<LegalNotice/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </ConfigProvider>
    </div>
  );
}

export default App;
