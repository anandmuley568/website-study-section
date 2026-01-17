import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface TechCardProps {
  name: string;
  icon: string;
  color: string;
  delay?: number;
}

const TechCard = ({ name, icon, color, delay = 0 }: TechCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 200 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
        }}
        className="tech-card preserve-3d cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Icon */}
        <motion.div
          className="text-5xl mb-4"
          style={{ color }}
          animate={{ 
            textShadow: `0 0 20px ${color}`,
          }}
        >
          {icon}
        </motion.div>
        
        {/* Name */}
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        
        {/* Decorative line */}
        <motion.div
          className="mt-4 h-0.5 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
          viewport={{ once: true }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{ backgroundColor: color }}
        />
        
        {/* Corner accents */}
        <div 
          className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ borderColor: color }}
        />
        <div 
          className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ borderColor: color }}
        />
      </motion.div>
    </motion.div>
  );
};

export default TechCard;