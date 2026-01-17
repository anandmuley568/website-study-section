import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: 'hsl(185, 100%, 50%)',
  },
  {
    title: 'AI Dashboard',
    description: 'Real-time analytics dashboard with machine learning insights',
    tags: ['Python', 'TensorFlow', 'React'],
    color: 'hsl(280, 100%, 65%)',
  },
  {
    title: 'Social Media App',
    description: 'Mobile-first social platform with real-time messaging',
    tags: ['React Native', 'Firebase', 'Redux'],
    color: 'hsl(45, 100%, 50%)',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
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
            {"// MY WORK"}
          </motion.span>
          <h2 className="section-title mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="glass-card rounded-2xl overflow-hidden h-full"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image Placeholder */}
                <div 
                  className="h-48 relative overflow-hidden"
                  style={{ 
                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)` 
                  }}
                >
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-6xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    🖥️
                  </motion.div>
                  
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: `${project.color}90` }}
                  >
                    <motion.button
                      className="px-6 py-2 rounded-full bg-background text-foreground font-semibold"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                    </motion.button>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;