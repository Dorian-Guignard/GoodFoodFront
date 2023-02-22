import HomeVertue from "./HomeVertue/HomeVertue";
import HomeCarousel from "./HomeCarousel/HomeCarousel"
import {Typography} from 'antd';
import './HomePage.css'
const {Paragraph}=Typography;



function HomePage(){
    return(
    <div className="home-content">

        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum       
        </Paragraph>
           
        <HomeCarousel/>
        <HomeVertue/>
    </div>
    )
}  
export default HomePage;