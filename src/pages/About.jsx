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
      <motion.div
       variants={{
            hidden: {opacity: 0, y: -200},
            visible: {opacity: 1, y: 0},
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7}}
          >
      <div className='Top-container-a'>
        <div className='Top-a'>
          ABOUT
        </div>
      </div>
      <div ref={ref} className='Text-container-a'>
        <motion.div
          className='Text-box-a'
        >
          <div className='about'>
            <motion.p
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3}}
            >
            My name in Het, I'm a web developer based in Chennai,India. I'm a passionate software engineering student with a keen interest in <em>Web development</em> and <em>UI/UX design</em>.
            </motion.p>
            <motion.p
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4}}
            >
              I'm currently pursuing my studies in software engineering, where I've delved into various aspects of the field. 
              My coursework has equipped me with a strong foundation in programming, algorithms, and software design. 
              I'm constantly seeking opportunities to apply my knowledge in real-world scenarios.
            </motion.p>
            <motion.p
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5}}
            >
              When I'm not coding, you can find me exploring enjoying <a href='https://open.spotify.com/user/hgajera?si=0e03b2013e8140bc' target='_blank'>music</a>, reading books and watching movies.
            </motion.p>
          </div>
        </motion.div>
      </div>
      </motion.div>
    </>
  );
};

export default About;
