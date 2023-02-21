
import { ConfigProvider } from "antd";
import MenuHeader from "../MenuHeader/MenuHeader";


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
    </ConfigProvider>
  );
}

export default App;
