import { motion } from 'framer-motion'; 
const AnimatedArrow = ({ className, id, style, ...props }) => {
  const pathData = "M 20 950 C 150 980, 300 950, 400 700 C 480 500, 520 300, 480 200 C 450 120, 380 80, 320 100 C 260 120, 220 180, 240 240 C 260 300, 320 340, 400 340 C 550 340, 700 250, 720 50";

  return (
    <div 
      id={id} 
      className={`animated-arrow ${className || ''}`} 
      style={style}
      {...props}    
    >
      <svg viewBox="0 0 800 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d={pathData}
          stroke="#000"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <motion.path
          d="M 660 110 L 720 50 L 780 110"
          stroke="#000"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ delay: 2.3, duration: 0.4 }}
        />
      </svg>
    </div>
  );
};

export default AnimatedArrow;