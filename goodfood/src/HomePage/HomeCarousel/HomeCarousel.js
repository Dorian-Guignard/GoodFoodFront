import { Button } from 'antd';
import { Carousel } from 'antd'
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import RecipeCard from '../../RecipeCard/RecipeCard';

import './HomeCarousel.css';

function MenuCarousel() {
    const smallScreen=useMediaQuery({ maxWidth: 450 })
  
    const ref = useRef()

    return (
    
      <div className="carousel">
      <Carousel 
          autoplay
          slidesToShow={1}
          pauseOnHover={true}
          ref={ref}
      > 
        <div>
          <h1 className='carousel-card'style={smallScreen ? { height: "100px" } : { height: "200px" }} >Slide 1</h1>
        </div>
        <div>
          <h1 className='carousel-card'>Slide2</h1>
        </div>
        <div>
          <h1 className='carousel-card'>Slide 3</h1>
        </div>
        <div>
          <h1 className='carousel-card'>Slide 4</h1>
        </div>     
      </Carousel>
      <div className='carousel-btn'>
        <Button
          size={smallScreen ? 'small' :'middle'}
          ghost
          onClick={()=>{
              ref.current.prev()
          }}>
          <LeftOutlined/>
          </Button>
        
        <Button 
          size={smallScreen ? 'small' :'middle'}
          ghost
          onClick={()=>{
              ref.current.next()
          }}>
          <RightOutlined/>
          </Button>
      </div>
  </div>
      
    
)};

export default MenuCarousel;