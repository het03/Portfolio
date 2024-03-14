import React, {useEffect, useRef} from 'react';
import { motion, useInView, useAnimation} from 'framer-motion';
import './About.css';

const About = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControls.start('visible');
    }
  }, [isInView]);


  return (
    <>
      <div className='Top-container'>
        <div className='Top'>
          ABOUT
        </div>
      </div>
      <div ref={ref} className='Text-container'>
        <motion.div
          className='Text-box'

          variants={{
            hidden: {opacity: 0, y: 75},
            visible: {opacity: 1, y: 0},
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec auctor, purus eget sollicitudin aliquam, nunc ex 
            luctus odio, nec tincidunt nunc nunc nec ipsum. 
            Suspendisse potenti
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec auctor, purus eget sollicitudin aliquam, nunc ex 
            luctus odio, nec tincidunt nunc nunc nec ipsum. 
            Suspendisse potenti
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec auctor, purus eget sollicitudin aliquam, nunc ex 
            luctus odio, nec tincidunt nunc nunc nec ipsum. 
            Suspendisse potenti
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec auctor, purus eget sollicitudin aliquam, nunc ex 
            luctus odio, nec tincidunt nunc nunc nec ipsum. 
            Suspendisse potenti
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec auctor, purus eget sollicitudin aliquam, nunc ex 
            luctus odio, nec tincidunt nunc nunc nec ipsum. 
            Suspendisse potenti
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default About;
