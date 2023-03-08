import { Button, Card } from 'antd';
import { Carousel } from 'antd'
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { useRecipesContext } from '../../../Utils/providers/RecipesProvider';
import { useNavigate } from 'react-router-dom';
import './HomeCarousel.css';



function MenuCarousel() {

    const navigate = useNavigate();
    const isSmallScreen=useMediaQuery({ maxWidth: 450 })
    const ref = useRef()

    const {recipes} = useRecipesContext();
    const shuffledRecipes = recipes.sort(() => 0.5 - Math.random());
    const randomRecipes = shuffledRecipes.slice(0,4);

    return (
      
      <div className="carousel">
        
          <Carousel 
              autoplay
              slidesToShow={1}
              pauseOnHover={true}
              ref={ref}
          > 
            {randomRecipes.map(recipe => (
                    <div key={recipe.id}>
                      <Card 
                        className='carousel-card' 
                        cover={<img src={`http://localhost:8080/${recipe.nameImage}`} alt={recipe.name} className="card-images" />}
                        onClick={() => navigate(`/recipe/${recipe.id}`)}
                        hoverable
                      >
                        <Card.Meta title={recipe.name} />
                      </Card>
                    </div>
                ))} 
          </Carousel>
          <div className='carousel-btn'>
            <Button
              size={isSmallScreen ? 'small' :'middle'}
              style={{border:"none"}}
              ghost
              onClick={()=>{
                  ref.current.prev()
              }}>
              <LeftOutlined style={{fontSize: isSmallScreen ? "20px" : "20px", color:"white"}}/>
              </Button>
            
            <Button 
              size={isSmallScreen ? 'small' :'middle'}
              style={{border:"none"}}
              ghost
              onClick={()=>{
                  ref.current.next()
              }}>
              <RightOutlined style={{fontSize: isSmallScreen ? "20px" : "20px", color:"white"}}/>
              </Button>
      </div>
  </div>
  
      
    
)};

export default MenuCarousel;