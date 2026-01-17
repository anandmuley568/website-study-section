import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
}

interface MagneticTextProps {
  children: string;
  className?: string;
}

const MagneticText = ({ children, className = '' }: MagneticTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  const rotateX = useTransform(springY, [-50, 50], [10, -10]);
  const rotateY = useTransform(springX, [-50, 50], [-10, 10]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }, [x, y]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    
    const colors = ['hsl(185, 100%, 50%)', 'hsl(280, 100%, 65%)', 'hsl(320, 100%, 60%)', 'hsl(45, 100%, 60%)'];
    
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: clickX,
      y: clickY,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    
    setParticles(prev => [...prev, ...newParticles]);
    
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1000);
  }, []);

  return (
    <div className="relative perspective-1000">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          x: springX,
          y: springY,
          rotateX,
          rotateY,
        }}
        className={`magnetic-text preserve-3d ${className}`}
        whileTap={{ scale: 0.95 }}
      >
        {children.split('').map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              color: isHovered ? 'hsl(185, 100%, 50%)' : 'hsl(210, 40%, 98%)',
            }}
            transition={{
              delay: index * 0.05,
              duration: 0.5,
              color: { duration: 0.3 },
            }}
            whileHover={{
              scale: 1.2,
              color: 'hsl(280, 100%, 65%)',
              transition: { duration: 0.1 },
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
      
      {/* Particle explosion effect */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor: particle.color,
            boxShadow: `0 0 10px ${particle.color}`,
          }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        />
      ))}
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-lg blur-3xl"
        style={{
          background: 'linear-gradient(135deg, hsl(185 100% 50% / 0.3), hsl(280 100% 65% / 0.3))',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 0.6 : 0, 
          scale: isHovered ? 1.2 : 0.8 
        }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
};

export default MagneticText;