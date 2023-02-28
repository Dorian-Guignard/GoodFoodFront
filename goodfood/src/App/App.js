
import { ConfigProvider } from "antd";
import MenuHeader from "../MenuHeader/MenuHeader";
import Footer from "../Footer/Footer";
import './App.css'; 
import { Routes ,Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Recipe from "../Recipe/Recipe"
import CategoryList from "../RecipeCategory/RecipeCategory";
import LegalNotice from "../LegalNotice/LegalNotice";
import Contact from "../Contact/Contact";
import AddRecipe from "../AddRecipe/AddRecipe";
import LoginPage from "../LoginPage/LoginPage";
import Virtue from "../RecipeVirtue/RecipeVirtue"
import { VirtuesContextProvider } from '../Utils/providers/VirtuesProvider';
import { RecipesContextProvider } from "../Utils/providers/RecipesProvider";
import { hasConnected } from "../Utils/services/AuthApi";
import { useState } from "react";
import Auth from "../Utils/providers/Auth";


function App() { 
  const [isConnected, setIsConnected] = useState(hasConnected());
  return (
    <Auth.Provider value={{isConnected, setIsConnected}}>
    <div className="App">
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
        <Route path="/categorie" element={<CategoryList/>}></Route>
        <Route path="/vertue/:virtuename" element={<Virtue/>}></Route>
        <Route path="/recipe/add" element={<AddRecipe/>}></Route>
        <Route path="/mentionslegales" element={<LegalNotice/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </ConfigProvider>
    </RecipesContextProvider>
    </VirtuesContextProvider>
    
    </div>
    </Auth.Provider>
    
  );
}

export default App;
