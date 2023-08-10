import {React, useState, useEffect} from 'react';
import mouse from '../assets/mice.png'

const MouseCursorAnimation = () => {

  //Ensure that the animation plays at least once to avoid glitching
  //ALternatively you could just create a "display property to a className and call it with an interval function?"
  const [keyframeCounter, setKeyframeCounter] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setKeyframeCounter((prevCounter) => (prevCounter + 1) % 100);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="mouse-animation">
      
      <p className="instruction">Move your mouse to sway away the foliage!</p>


      <div 
        className="cursor"
        style={{
          animation: `cursorMovement 2s infinite ease-in-out`,
          animationDelay: `-${(keyframeCounter * 2)}s`,
        }}
      >
        <img src={mouse} alt='mouse' className='mouse' />
      </div>

      <style jsx>{`
        .mouse-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 2000px;
          height: 100vh;
          pointer-events: none;
          background-color: rgba(255, 255, 255, .95);
          z-index: 9999;
          pointer-events: all;
        }

        .instruction {
          position: absolute;
          top: 50%;
          left: 40%;
          transform: translate(-50%, -50%);
          color: black;
          font-size: 50px;
          font-weight: 800;
          text-align: center;
        }

        .cursor {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 30px;
          height: 30px;
          animation: cursorMovement 1s infinite ease-in-out;

        }

        .cursor > img {
          max-width: 30px 
        }

        @keyframes cursorMovement {
          0% {
            transform: translate(-300%, -300%);
          }
          50% {
            transform: translate(300%, 300%);
          }
          100% {
            transform: translate(-300%, -300%);
          }
        }
      `}</style>
    </div>
  );
};

export default MouseCursorAnimation;