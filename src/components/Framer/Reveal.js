import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0, duration = 0.6, y = 30, x = 0, once = true }) => (
  <motion.div
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once, amount: 0.2 }}
    transition={{ duration, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default Reveal;
