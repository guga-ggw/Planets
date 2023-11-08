import React, { useState } from 'react';
import './App.css';
import background from './assets/Background.jpg';
import celestialBodiesData from './data/data';
import {motion, useAnimate} from 'framer-motion'



function App() {
  const [translateX, setTranslateX] = useState(0);
  const [op, setop] = useAnimate()

  const animate = () => {
    setop(op.current, {opacity : 0})
  }

  const handleScroll = (offset) => {
    console.log(translateX)
    if(translateX == 0 && offset > -1) {
      setTranslateX(0)
    }
    else if(translateX < -13000) {
      setTranslateX(0)
      console.log('dl')
    }
    else{
      setTranslateX(translateX + offset)
      console.log('helo')
    }
  };



  return (
    <div className="Container">
      <img id="back_photo" src={background} alt="" />
      <div className="changer_buttons">
        <motion.i initial onClick={() => handleScroll(2450)} id="left_slide" className="fa-solid fa-angle-left"></motion.i>
        <motion.i onClick={() => handleScroll(-2450)} id="right_slide" className="fa-solid fa-angle-right"></motion.i>
      </div>
      <div className="planet_info" style={{ transform: `translateX(${translateX}px)` }}>
        {celestialBodiesData.map((body) => (
          <div key={body.Name} id="planet">
           <motion.h1
              initial={{ opacity: 0, y: -460 }}
              animate={{ opacity: 1,y: 0,
              transition: {y: { duration: .5, type : "spring", stiffness : 80, delay : 1.4}, opacity : {duration : 2, delay : .9 }},}}transition={{ duration: 2.5, delay: .9 }}
            >
              {body.Name}
            </motion.h1>
            <motion.img ref={op} initial={{scale : 0}} animate={{scale :1}} transition={{delay : .7, duration : 1, stiffness: 100, type : "spring"}} src={body.img} alt={body.Name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;




