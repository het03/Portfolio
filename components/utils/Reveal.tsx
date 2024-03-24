import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
}

export default function Reveal({ children, width = 'fit-content' }: Props) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const mainControls = useAnimation();



useEffect(() => {
  if (inView) {
    mainControls.start('visible');
  } else {
    mainControls.start('hidden');
  }
}, [inView, mainControls]);

  return (
    <div style={{ position: 'relative', width }}>
      <div ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}