import { React,useState, useEffect } from 'react'
import { Navbar, CityCard, Footer } from '../components'
import MouseCursorAnimation from '../components/MouseCursorAnimation.jsx'


function Home() {

    function handleMouseEnter(event) {
        event.target.classList.add('hovered'); // Add the 'hovered' class on mouse enter when hovering leaves
      
        setTimeout(() => {handleMouseLeave(event); }, 6000);
    }
      
    function handleMouseLeave(event) {
        event.target.classList.remove('hovered'); // Remove the 'hovered' class on mouse leave for the opposite purpose
    }

    //this is for the animation
    const [firstLoad, setFirstLoad] = useState(true);
    useEffect(() => {
        // When the component mounts, set firstLoad to false after a delay
        setTimeout(() => {
          setFirstLoad(false);
        }, 5000);
    }, []);

    return (
        <div className='wrapper'>
            <Navbar />

            {firstLoad && <MouseCursorAnimation />}

            <div className='maincontainer'>

                <div className='animleft'>
                    <img onMouseEnter={handleMouseEnter}  alt='left-folliage-1' src='./src/assets/izq-pieces/1-de-4-izq.png'/>
                    <img onMouseEnter={handleMouseEnter}  alt='left-folliage-2' src='./src/assets/izq-pieces/2-de-4-izq.png'/>
                    <img onMouseEnter={handleMouseEnter}  alt='left-folliage-3' src='./src/assets/izq-pieces/3-de-4-izq.png'/>
                    <img onMouseEnter={handleMouseEnter}  alt='left-folliage-4' src='./src/assets/izq-pieces/4-de-4-izq.png'/>
                </div>
              
                <div className='animright'>
                    <img onMouseEnter={handleMouseEnter}  alt='right-folliage-2' src='./src/assets/dere-pieces/2-de-5-der.png'/> 
                    <img onMouseEnter={handleMouseEnter}  alt='right-folliage-1' src='./src/assets/dere-pieces/1-de-5-der.png'/>
                    <img onMouseEnter={handleMouseEnter}  alt='right-folliage-3' src='./src/assets/dere-pieces/4-de-5-der.png'/>
                    <img onMouseEnter={handleMouseEnter}  alt='right-folliage-4' src='./src/assets/dere-pieces/5-de-5-der.png'/>
                    
                </div>
            </div>
        </div>
    );
}
  
  export default Home;