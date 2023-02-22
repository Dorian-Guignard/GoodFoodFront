
import { ConfigProvider } from "antd";
import MenuHeader from "../MenuHeader/MenuHeader";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import Footer from "../Footer/Footer";
import HomeVertue from "../HomeVertue/HomeVertue";
import './App.css'; 


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
    <HomeCarousel/>
    <HomeVertue/>
    </div>
    <Footer/>

    </ConfigProvider>
  );
}

export default App;
