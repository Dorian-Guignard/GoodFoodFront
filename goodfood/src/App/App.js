
import { ConfigProvider } from "antd";
import MenuHeader from "../MenuHeader/MenuHeader";
import Footer from "../Footer/Footer";
import './App.css'; 
import { Routes ,Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";



function App() { 
  
  return (
    <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#d48806',
            },
          }}
        >
    <MenuHeader/>
    <div className="content">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>
    </div>
    <Footer/>

    </ConfigProvider>
  );
}

export default App;
