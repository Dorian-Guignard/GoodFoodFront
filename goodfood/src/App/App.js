
import { ConfigProvider } from "antd";
import MenuHeader from "../MenuHeader/MenuHeader";
import Footer from "../Footer/Footer";
import './App.css'; 
import { Routes ,Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Recipe from "../Recipe/Recipe"
import LegalNotice from "../LegalNotice/LegalNotice";
import Contact from "../Contact/Contact";
import AddRecipe from "../AddRecipe/AddRecipe";
import LoginPage from "../LoginPage/LoginPage";
import Virtue from "../RecipeVirtue/RecipeVirtue"
import { VirtuesContextProvider } from '../Utils/providers/VirtuesProvider';
import { RecipesContextProvider } from "../Utils/providers/RecipesProvider";
import UserContextProvider  from "../Utils/providers/UserContext";
import RecipeCategory from "../RecipeCategory/RecipeCategory";
import RegisterPage from "../RegisterPage/RegisterPage";


function App() { 
  
  return (
    
    <div className="App">
    <UserContextProvider>
    <VirtuesContextProvider>
    <RecipesContextProvider>
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
        <Route path="/recipe/*" element={<Recipe/>}></Route>
        <Route path="/categorie/:categoryname" element={<RecipeCategory/>}></Route>
        <Route path="/vertue/:virtuename" element={<Virtue/>}></Route>
        <Route path="/recipe/add" element={<AddRecipe/>}></Route>
        <Route path="/mentionslegales" element={<LegalNotice/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </ConfigProvider>
    </RecipesContextProvider>
    </VirtuesContextProvider>
    </UserContextProvider>
    </div>
    
    
  );
}

export default App;
