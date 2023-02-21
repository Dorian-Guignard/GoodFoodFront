
import { ConfigProvider } from "antd";
import MenuHeader from "../MenuHeader/MenuHeader";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import Footer from "../Footer/Footer";


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
    <HomeCarousel/>
    <Footer/>

    </ConfigProvider>
  );
}

export default App;
