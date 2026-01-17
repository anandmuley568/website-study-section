import { motion } from 'framer-motion';
import TechCard from './TechCard';

const techStack = [
  { name: 'React', icon: '⚛️', color: 'hsl(195, 100%, 50%)' },
  { name: 'TypeScript', icon: '📘', color: 'hsl(210, 100%, 50%)' },
  { name: 'Node.js', icon: '🟢', color: 'hsl(120, 60%, 45%)' },
  { name: 'Python', icon: '🐍', color: 'hsl(55, 80%, 50%)' },
  { name: 'MongoDB', icon: '🍃', color: 'hsl(120, 50%, 40%)' },
  { name: 'PostgreSQL', icon: '🐘', color: 'hsl(210, 60%, 50%)' },
  { name: 'Docker', icon: '🐳', color: 'hsl(200, 80%, 50%)' },
  { name: 'AWS', icon: '☁️', color: 'hsl(35, 100%, 50%)' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-primary font-mono text-sm tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {"// WHAT I WORK WITH"}
          </motion.span>
          <h2 className="section-title mt-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Click and hover on the cards to see interactive effects
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Additional skills text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Also experienced with:{' '}
            <span className="text-foreground">
              Git, GraphQL, Redis, Tailwind CSS, Next.js, Firebase, and more...
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;