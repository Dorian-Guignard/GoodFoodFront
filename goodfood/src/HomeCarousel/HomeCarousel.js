import { Button } from 'antd';
import { Carousel } from 'antd'
import { useRef } from 'react';
import './HomeCarousel.css';

function MenuCarousel() {
    
    const ref = useRef()

    return (
    <div className="carousel">
    <Carousel 
        autoplay
        slidesToShow={2}
        pauseOnHover={true}
        ref={ref}
    >
      
      <div>
        <h1 className='carousel-card'>Slide 1</h1>
      </div>
      <div>
        <h1 className='carousel-card'>Slide 2</h1>
      </div>
      <div>
        <h1 className='carousel-card'>Slide 3</h1>
      </div>
      <div>
        <h1 className='carousel-card'>Slide 4</h1>
      </div>
    </Carousel>
    <div>
        <Button onClick={()=>{
            ref.current.prev()
        }}>Précédent</Button>
    
        <Button onClick={()=>{
            ref.current.next()
        }}>Suivant</Button>
    </div>
    </div>
)};

export default MenuCarousel