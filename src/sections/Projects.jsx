import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Database, Brain, Globe, ExternalLink, Github, Play, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  const projects = [
    {
      title: 'IdeaForge AI',
      category: 'AI & Full Stack',
      date: 'Dec 2025',
      description: 'Full-stack multi-LLM ideation system with AI agents and a Referee Agent to generate and refine startup ideas into pitch-ready outputs.',
      highlights: [
        'Multi-Agency AI architecture with competing LLMs',
        'Referee system for idea evaluation',
        'Entrepreneur to Investor Matching',
        'Real-time pitch generation'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Multi-LLM', 'AI Agents', 'MongoDB'],
      image: '/assets/projects/ideaforge.png',
      demoLink: '#',
      githubLink: 'https://github.com/jyolicious',
      gradient: 'from-purple-600 via-blue-600 to-cyan-600',
      icon: Brain
    },
    {
      title: 'Curely - Healthcare System',
      category: 'Full Stack',
      date: 'July 2025',
      description: 'Full-stack healthcare platform with BBN-based AI chatbot for assistance, featuring doctor appointments, reports management, and unified patient information system.',
      highlights: [
        'Bayesian Belief Network AI chatbot',
        'Doctor appointment booking system',
        'Medical reports management',
        'DigiLocker-style accessibility'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'BBN', 'AI Chatbot'],
      image: '/assets/projects/curely.png',
      demoLink: '#',
      githubLink: 'https://github.com/jyolicious',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      icon: Database
    },
    {
      title: 'ZenFlow - Yoga Platform',
      category: 'Full Stack',
      date: 'Dec 2025',
      description: 'Full-stack wellness platform enabling users to explore asanas, access tutorial videos, and receive real-time yoga updates with newsletter integration.',
      highlights: [
        'Comprehensive asana library',
        'Video tutorial integration',
        'Real-time wellness updates',
        'Newsletter subscription system'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'REST API'],
      image: '/assets/projects/zenflow.png',
      demoLink: '#',
      githubLink: 'https://github.com/jyolicious',
      gradient: 'from-pink-600 via-purple-600 to-indigo-600',
      icon: Globe
    },
    {
      title: 'Fake Job Posting Detector',
      category: 'Machine Learning',
      date: 'Nov 2025',
      description: 'ML classifier to detect fraudulent job listings using advanced text preprocessing, feature extraction, and supervised learning algorithms.',
      highlights: [
        'NLP-based text preprocessing',
        'Advanced feature extraction',
        'Supervised learning models',
        'High accuracy fraud detection'
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'NLP', 'ML'],
      image: '/assets/projects/job-detector.png',
      demoLink: '#',
      githubLink: 'https://github.com/jyolicious',
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      icon: Brain
    },
    {
      title: 'LangSQL',
      category: 'AI & Full Stack',
      date: 'March 2025',
      description: 'Novel solution integrating natural language and database interaction to simplify query execution and enhance accessibility for non-technical users.',
      highlights: [
        'Natural language to SQL conversion',
        'Intuitive query interface',
        'Enhanced database accessibility',
        'Simplified workflow automation'
      ],
      technologies: ['Python', 'NLP', 'SQL', 'React', 'Node.js', 'PostgreSQL'],
      image: '/assets/projects/langsql.png',
      demoLink: '#',
      githubLink: 'https://github.com/jyolicious',
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      icon: Database
    },
    {
      title: 'ECOSORT',
      category: 'Machine Learning',
      date: 'Jan 2025',
      description: 'Innovative waste segregation and management system with smart tracking and reward mechanisms for environmental sustainability.',
      highlights: [
        'Smart waste segregation system',
        'Cost reduction tracking',
        'Gamified reward mechanism',
        'Real-time analytics dashboard'
      ],
      technologies: ['React', 'Node.js', 'Machine Learning', 'MongoDB'],
      image: '/assets/projects/ecosort.png',
      demoLink: '#',
      githubLink: 'https://github.com/jyolicious',
      gradient: 'from-green-600 via-emerald-600 to-teal-600',
      icon: Code
    }
  ];

  const categories = ['All', 'Full Stack', 'Machine Learning', 'AI & Full Stack'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{ top: '10%', right: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{ bottom: '10%', left: '10%' }}
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
            className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Innovative solutions combining AI, Full Stack Development, and Data Science
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={itemVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white border border-slate-700/50 hover:border-purple-500/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeCategory}-${project.title}`}
                className="relative group"
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000
                }}
                layout
              >
                {/* 3D Card Glow */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity`}
                  animate={hoveredProject === index ? {
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Main Card */}
                <motion.div
                  className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-2xl overflow-hidden hover:border-slate-700/50 transition-all"
                  whileHover={{
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.02,
                    z: 50
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-800/50">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${project.gradient} opacity-20`}>
                        <project.icon className="text-white/30" size={64} />
                      </div>
                    </motion.div>
                    
                    {/* Overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center gap-3`}
                    >
                      <motion.a
                        href={project.demoLink}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="text-white" size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="text-white" size={20} />
                      </motion.a>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-full text-xs text-slate-300 flex items-center gap-1">
                        <Tag size={12} />
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title & Date */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-slate-500 text-xs flex-shrink-0">
                        <Calendar size={12} />
                        <span>{project.date}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4 space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-500 text-xs">
                          <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded text-slate-400 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-slate-500 text-xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.demoLink}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white font-medium text-sm`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play size={16} />
                        View Demo
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <p className="text-slate-400 mb-6">
            Want to see more projects or collaborate?
          </p>
          <motion.a
            href="https://github.com/jyolicious"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All on GitHub
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;