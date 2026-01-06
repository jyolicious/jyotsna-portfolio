import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Brain, Zap, Award, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  const highlights = [
    {
      icon: Brain,
      title: 'Data Science',
      description: 'Machine Learning, NLP, statistical analysis, and predictive modeling',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Code,
      title: 'Full Stack Dev',
      description: 'MERN stack, React.js, Node.js, and scalable web applications',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'SQL, MongoDB, PostgreSQL, data modeling and ETL pipelines',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Multi-LLM systems, AI agents, and intelligent applications',
      color: 'from-purple-400 to-blue-500'
    }
  ];

  const achievements = [
    { icon: Award, label: 'CGPA 9.89', sublabel: 'BTech Computer Eng.' },
    { icon: Code, label: '10+ Projects', sublabel: 'Full Stack & ML' },
    { icon: Users, label: 'Active Member', sublabel: 'CSI & GDG' },
    { icon: Zap, label: 'Top 500', sublabel: 'NELTAS Olympiad' }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{ top: '20%', right: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{ bottom: '20%', left: '10%' }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Image Card */}
          <motion.div
            className="relative group"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Glowing Border Effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              
              {/* Image Container */}
              <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 overflow-hidden">
                <motion.div
                  className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Placeholder for profile image - you can replace with actual image */}
                 
                  <img 
                    src="/assets/profile/jyotsna-formal.jpeg" 
                    alt="Jyotsna Kasibhotla"
                    className="w-full h-full object-cover"
                  />
                  
                </motion.div>

                {/* Quick Stats Overlay */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {achievements.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50 hover:border-purple-500/50 transition-colors"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className="text-purple-400 mb-2" size={20} />
                      <div className="text-white font-bold text-lg">{item.label}</div>
                      <div className="text-slate-400 text-sm">{item.sublabel}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate <span className="text-purple-400 font-semibold">Data Science enthusiast</span> and <span className="text-blue-400 font-semibold">Full Stack Developer</span> currently pursuing my BTech in Computer Engineering at Vidyalankar Institute of Technology with a stellar CGPA of 9.89.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                My journey in tech is driven by curiosity and the desire to create meaningful impact. I specialize in transforming complex data into actionable insights while building scalable, user-centric applications that solve real-world problems.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                From developing <span className="text-cyan-400 font-semibold">multi-LLM AI systems</span> to building comprehensive healthcare platforms, I thrive at the intersection of artificial intelligence, data analytics, and modern web technologies. My experience spans machine learning model development, full-stack application architecture, and data visualization.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding or analyzing data, you'll find me contributing to <span className="text-purple-400 font-semibold">Computer Society of India</span> and <span className="text-blue-400 font-semibold">Google Developer Groups</span>, participating in hackathons, and continuously learning cutting-edge technologies.
              </p>
            </div>

            {/* Languages */}
            <div className="pt-4">
              <h3 className="text-slate-400 font-semibold mb-3">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['English', 'Hindi', 'Marathi', 'Telugu'].map((lang) => (
                  <motion.span
                    key={lang}
                    className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 text-sm"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expertise Highlights */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Card Glow Effect */}
              <motion.div
                className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity`}
              />
              
              {/* Card Content */}
              <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 h-full hover:border-slate-700/50 transition-colors">
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="text-white" size={24} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;