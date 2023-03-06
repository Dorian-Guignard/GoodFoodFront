import { ConfigProvider } from "antd";
import UserContextProvider  from "../Utils/providers/UserContext";
import { VirtuesContextProvider } from '../Utils/providers/VirtuesProvider';
import { RecipesContextProvider } from "../Utils/providers/RecipesProvider";

import { Routes ,Route } from "react-router-dom";

import MenuHeader from "../components/MenuHeader/MenuHeader";
import HomePage from "../components/HomePage/HomePage";
import Recipe from "../components/Recipe/Recipe"
import LegalNotice from "../components/LegalNotice/LegalNotice";
import SearchResult from "../components/MenuHeader/SearchBar/SearchResult/SearchResult";
import Contact from "../components/Contact/Contact";
import AddRecipe from "../components/AddRecipe/AddRecipe";
import Profile from "../components/Profile/Profile"
import Virtue from "../components/RecipeVirtue/RecipeVirtue"
import RecipeCategory from "../components/RecipeCategory/RecipeCategory";
import RegisterPage from "../components/RegisterPage/RegisterPage";
import LoginPage from '../components/LoginPage/LoginPage'
import Footer from "../components/Footer/Footer";


import RequireAuth from "../Utils/ProtectedRoutes/RequireAuth";
import RequireGuest from "../Utils/ProtectedRoutes/RequireGuest";

import './App.css';

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
              <Route path="/" element={<HomePage/>}/>
              <Route path="/recipe/:id" element={<Recipe/>}/>
              <Route path="/categorie/:categoryname" element={<RecipeCategory/>}/>
              <Route path="/vertue/:virtuename" element={<Virtue/>}/>
              <Route path="/mentionslegales" element={<LegalNotice/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/search" component={<SearchResult/>} />
              <Route element={<RequireGuest/>}>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
              </Route>
              <Route element={<RequireAuth/>}>
                <Route exact path='/profile' element={<Profile/>} />
                <Route path="/recipe/add" element={<AddRecipe/>}/>
              </Route>
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
