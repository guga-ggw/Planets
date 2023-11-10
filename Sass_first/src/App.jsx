import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import background from './assets/Background.jpg';
import celestialBodiesData from './data/data';
import {motion, useAnimate, useScroll, useTransform} from 'framer-motion'
import rocket from './assets/rocket.svg'



function App() {
 const dl = useRef();
  const { scrollYProgress } = useScroll({ target: dl});
  const earth = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const text = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const toRight = useTransform(scrollYProgress, [0, 1], [-800, 400])
  const toLeft = useTransform(scrollYProgress, [0, 1], [800, -400])

  console.log(scrollYProgress)
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


  useEffect(() => {
    console.log(earth)
  }, [200])


  return (
    <div className="Container" ref={dl}>
      <img id="back_photo" src={background} alt="" />
      <div className="changer_buttons">
        <motion.i initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 1, delay : 2}}  onClick={() => handleScroll(2450)} id="left_slide" className="fa-solid fa-angle-left"></motion.i>
        <motion.i initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 1, delay : 2}} onClick={() => handleScroll(-2450)} id="right_slide" className="fa-solid fa-angle-right"></motion.i>
      </div>
      <div className="planet_info" style={{ transform: `translateX(${translateX}px)` }}>
        {celestialBodiesData.map((body) => (
          <motion.div key={body} id="planet">
           <motion.h1
              style={{opacity : text}}
              key={translateX}
              initial={{ opacity: 0, y: -460 }}
              animate={{ opacity: 1,y: 0,
              transition: {y: { duration: .5, type : "spring", stiffness : 80, delay : 1.4}, opacity : {duration : 2, delay : .9 }},}}transition={{ duration: 2.5, delay: .9 }}
            >
              {body.Name}
            </motion.h1>
            <motion.div id='info_box'>
              <motion.div style={{x : toRight}}  initial={{x : -800, opacity : 0}}  whileInView={{opacity : 1}} transition={{duration : 1.4}} className="info_rocket">
                <h2>Mass {body.Mass_kg}</h2>
                <img src={rocket} alt="" />
              </motion.div>
              <motion.div style={{x : toLeft}} initial={{x : 800, opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 1.4}} className="left_rock">
                <h2>Solar System {body.Number_in_Solar_System}</h2>
                <img src={rocket} alt="" />
              </motion.div>
              <motion.div style={{x : toRight}}  initial={{x : -800, opacity : 0}}  whileInView={{opacity : 1}} transition={{duration : 1.4}} className="info_rocket">
              <h2>Temperature {body.Average_Temperature_C} C</h2>
                <img src={rocket} alt="" />
              </motion.div>
              <motion.div style={{x : toLeft}} initial={{x : 800, opacity : 0}}  transition={{duration : 1.4}}  whileInView={{opacity : 1}} className="left_rock">
                <h2>Days :  {body.Orbital_Period_days}</h2>
                <img src={rocket} alt="" />
              </motion.div>
            </motion.div>
            <motion.p whileInView={{opacity : 1}} key={translateX - 2} initial={{opacity : 0, x : -400} } transition={{duration : 2, delay : .4}} id='description'>{body.Description}</motion.p>
            <motion.img style={{y : earth, rotate : earth}} key={translateX + 2} ref={op} initial={{scale : 0}} animate={{scale :1}} transition={{delay : .7, duration : 1, stiffness: 100, type : "spring"}} src={body.img} alt={body.Name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;




