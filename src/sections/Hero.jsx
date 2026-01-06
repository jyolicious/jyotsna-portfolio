import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Download, FileText } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  const [showResumeMenu, setShowResumeMenu] = useState(false);
  
  const roles = ['Data Science Enthusiast', 'Full Stack Developer', 'Problem Solver'];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(roleInterval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = (type) => {
    const link = document.createElement('a');
    if (type === 'fullstack') {
      link.href = '/Jyotsna_FullStack_Resume.pdf';
      link.download = 'Jyotsna_Kasibhotla_FullStack_Resume.pdf';
    } else {
      link.href = '/Jyotsna_DataScience_Resume.pdf';
      link.download = 'Jyotsna_Kasibhotla_DataScience_Resume.pdf';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowResumeMenu(false);
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
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
          style={{
            top: '10%',
            left: '10%'
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
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
          style={{
            bottom: '10%',
            right: '10%'
          }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            top: '50%',
            right: '20%'
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image with 3D Effect */}
        <motion.div
          className="relative w-40 h-40 mx-auto mb-8"
          variants={itemVariants}
          animate={{
            rotateX: mousePosition.y * 0.5,
            rotateY: mousePosition.x * 0.5,
          }}
          style={{
            transformStyle: 'preserve-3d',
            perspective: 1000
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse" />
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-cyan-400">
              JK
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400"
          variants={itemVariants}
        >
          Jyotsna Kasibhotla
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          className="h-12 mb-8 flex items-center justify-center"
          variants={itemVariants}
        >
          <motion.h2
            key={currentRole}
            className="text-2xl md:text-3xl font-semibold text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {roles[currentRole]}
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Passionate about transforming data into insights and ideas into scalable applications. 
          Building intelligent solutions at the intersection of{' '}
          <span className="text-purple-400 font-semibold">Machine Learning</span>,{' '}
          <span className="text-blue-400 font-semibold">Full Stack Development</span>, and{' '}
          <span className="text-cyan-400 font-semibold">Data Science</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-6 justify-center mb-16"
          variants={itemVariants}
        >
          <motion.button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">View Projects</span>
          </motion.button>

          {/* Resume Download with Dropdown */}
          <div className="relative">
            <motion.button
              onClick={() => setShowResumeMenu(!showResumeMenu)}
              className="px-8 py-4 border-2 border-slate-600 rounded-full font-semibold text-slate-300 hover:border-purple-500 hover:text-purple-400 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.button>

            {/* Dropdown Menu */}
            {showResumeMenu && (
              <motion.div
                className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-64 bg-slate-800/95 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <motion.button
                  onClick={() => handleResumeDownload('fullstack')}
                  className="w-full px-6 py-4 text-left text-slate-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 hover:text-white transition-all flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                    <FileText size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Full Stack Developer</div>
                    <div className="text-xs text-slate-500">Web Development Focus</div>
                  </div>
                </motion.button>

                <div className="h-px bg-slate-700/50" />

                <motion.button
                  onClick={() => handleResumeDownload('datascience')}
                  className="w-full px-6 py-4 text-left text-slate-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:text-white transition-all flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                    <FileText size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Data Science</div>
                    <div className="text-xs text-slate-500">ML & Analytics Focus</div>
                  </div>
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-6 justify-center mb-12"
          variants={itemVariants}
        >
          {[
            { Icon: Github, href: 'https://github.com/jyolicious', color: 'hover:text-purple-400' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/jyotsna-kasibhotla-598b89313', color: 'hover:text-blue-400' },
            { Icon: Mail, href: 'mailto:jyotsnaaa04@gmail.com', color: 'hover:text-cyan-400' }
          ].map(({ Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-slate-800/50 backdrop-blur-sm rounded-full text-slate-400 ${color} transition-colors border border-slate-700/50`}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)'
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          variants={floatingVariants}
          animate="animate"
          onClick={scrollToProjects}
        >
          <ChevronDown className="text-slate-500 hover:text-purple-400 transition-colors" size={32} />
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
          animate={{
            x: [
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)
            ],
            y: [
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
            ],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}

      {/* Click outside to close resume menu */}
      {showResumeMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowResumeMenu(false)}
        />
      )}
    </section>
  );
};

export default Hero;