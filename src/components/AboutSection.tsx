import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative frame */}
              <motion.div
                className="absolute inset-4 border-2 border-primary/30 rounded-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              />
              
              {/* Main content area */}
              <motion.div
                className="absolute inset-0 glass-card rounded-2xl overflow-hidden flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-8xl">👨‍💻</div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 glass-card rounded-xl flex items-center justify-center text-3xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🚀
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-xl flex items-center justify-center text-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                💡
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-primary font-mono text-sm tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {"// GET TO KNOW ME"}
            </motion.span>
            
            <h2 className="section-title mt-4 mb-6">
              About <span className="text-gradient">Me</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                I'm a passionate developer with a love for creating beautiful, 
                functional web applications. With expertise in modern frontend 
                and backend technologies, I bring ideas to life through clean code.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source, or sharing knowledge with the community.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                { number: '3+', label: 'Years Exp.' },
                { number: '50+', label: 'Projects' },
                { number: '100%', label: 'Passion' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-gradient"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;