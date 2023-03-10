import HomeVirtue from "./HomeVirtue/HomeVirtue";
import HomeCarousel from "./HomeCarousel/HomeCarousel"
import {Typography} from 'antd';
import './HomePage.css'
const {Paragraph, Title}=Typography;




function HomePage(){
    return(
    <div className="home-content">
        <Title level={3}>Bienvenue sur "Good Food" ! </Title>
        <Paragraph style={{marginRight:'50px', marginLeft:'50px', fontWeight:'bold'}}>Nous sommes là pour vous aider à manger sainement tout en vous faisant plaisir avec notre livre de recettes saines. Nous découvrirons une variété de recettes délicieuses pour vous aider à améliorer votre équilibre alimentaire, développer vos connaissances en nutrition et découvrir les bienfaits sur votre santé. Que vous cherchiez des recettes vitaminées pour commencer la journée, des plats détox pour nettoyer votre organisme, des boosters pour donner un coup de fouet à votre énergie, ou des recettes pour améliorer votre sommeil, nous avons tout ce qu'il vous faut ! Avec notre livre de recettes saines, vous n'aurez plus à sacrifier le goût pour une alimentation équilibrée. Alors rejoignez-nous !    
        </Paragraph>
           
        <HomeCarousel/>
        <HomeVirtue/>
    </div>
    )
}  
export default HomePage;