import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Trophy, Users, Calendar, MapPin, ChevronRight, ExternalLink, Linkedin } from 'lucide-react';

const Hackathons = () => {
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

  const hackathons = [
    {
      name: 'Error 404 Hackathon',
      organizer: 'Jai Hind College, Mumbai',
      date: '2025',
      duration: '24 hours',
      location: 'Mumbai, Maharashtra',
      project: 'IdeaForge AI',
      description: 'Emerged as finalists with IdeaForge AI - an innovative AI tool that quantifies Start-Up Concepts using Multi-Agency AI architecture.',
      highlights: [
        'Developed Multi-Agency AI with competing LLM components',
        'Built Referee system to evaluate ideas on innovation and consumer need',
        'Implemented Entrepreneur to Investor Matching feature',
        'Successfully deployed Multi-Modal Architecture in real-time'
      ],
      technologies: ['Python', 'Multi-LLM', 'AI Agents', 'React', 'Node.js', 'API Integration'],
      achievement: 'Finalist',
      icon: Code,
      color: 'from-purple-600 to-blue-600',
      linkedinPost: 'YOUR_LINKEDIN_POST_LINK_2' // Replace with actual LinkedIn post link
    },
    {
      name: 'INSPIRON 4.0',
      organizer: 'COEP, Pune',
      date: 'March 2025',
      location: 'Pune, Maharashtra',
      project: 'LangSQL',
      description: 'Developed LangSQL, a novel solution integrating language and database interaction to simplify query execution and enhance accessibility.',
      highlights: [
        'Built natural language to SQL query converter',
        'Implemented intuitive interface for non-technical users',
        'Enhanced database accessibility through language processing',
        'Simplified complex query execution workflows'
      ],
      technologies: ['Python', 'NLP', 'SQL', 'React', 'Node.js'],
      achievement: 'Innovative Solution',
      icon: Code,
      color: 'from-blue-600 to-cyan-600',
      linkedinPost: 'YOUR_LINKEDIN_POST_LINK_3' // Replace with actual LinkedIn post link
    },
    {
      name: 'Nirman 2025',
      organizer: 'Amity University Mumbai',
      sponsor: 'Sponsored by Odoo',
      date: 'Jan 28-30, 2025',
      duration: '48 hours',
      location: 'Mumbai, Maharashtra',
      project: 'ECOSORT',
      description: 'Built ECOSORT, an innovative solution for efficient waste segregation & management. Selected as finalists from 550+ teams, only 75 made it to the finals.',
      highlights: [
        'Developed efficient waste segregation and management system',
        'Reduced landfill segregation costs with smart tracking',
        'Implemented reward system for proper segregation practices',
        'Presented to industry experts Prof. (Dr.) Shrikant Charhate and Prof. Dr. A.W Santhosh Kumar'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'IoT', 'Machine Learning'],
      achievement: 'Finalist (Top 75 out of 550+ teams)',
      icon: Trophy,
      color: 'from-green-600 to-emerald-600',
      linkedinPost: 'YOUR_LINKEDIN_POST_LINK_1' // Replace with actual LinkedIn post link
    },
    {
      name: 'TYNET 2.0',
      organizer: 'International Women Hackathon, RAIT',
      date: 'Jan 2025',
      location: 'Mumbai, Maharashtra',
      project: 'Emotion-Based Educational Platform',
      description: 'Gamified web app that offers emotion-based education, bilingual support, and cultural gamification, which increases self-assurance and fosters connections.',
      highlights: [
        'Developed emotion recognition system for personalized learning',
        'Implemented bilingual support for wider accessibility',
        'Created cultural gamification elements',
        'Built engagement features to boost confidence'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Machine Learning', 'Express.js'],
      achievement: 'Women-Led Innovation',
      icon: Users,
      color: 'from-pink-600 to-purple-600',
      linkedinPost: 'YOUR_LINKEDIN_POST_LINK_4' // Replace with actual LinkedIn post link
    }
  ];

  const stats = [
    { label: 'Hackathons', value: '4', icon: Trophy },
    { label: 'Finalist', value: '3x', icon: Code },
    { label: 'Hours Coded', value: '100+', icon: Users }
  ];

  return (
    <section id="hackathons" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"
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
            className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            Hackathons
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Competitive coding experiences and innovative solutions
          </motion.p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-16"
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ y: -5 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity" />
              <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 text-center hover:border-slate-700/50 transition-colors">
                <stat.icon className="mx-auto mb-3 text-purple-400" size={32} />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hackathon Cards */}
        <div className="space-y-8">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glowing Border Effect */}
              <motion.div
                className={`absolute -inset-0.5 bg-gradient-to-r ${hackathon.color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity`}
              />

              {/* Card Content */}
              <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-slate-700/50 transition-colors">
                <div className="grid lg:grid-cols-12 gap-8">
                  {/* Left Side - Icon and Meta */}
                  <div className="lg:col-span-3">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-r ${hackathon.color} rounded-2xl flex items-center justify-center mb-6`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <hackathon.icon className="text-white" size={40} />
                    </motion.div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2 text-slate-400 text-sm">
                        <Calendar size={16} className="mt-0.5 flex-shrink-0" />
                        <span>{hackathon.date}</span>
                      </div>
                      <div className="flex items-start gap-2 text-slate-400 text-sm">
                        <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                        <span>{hackathon.location}</span>
                      </div>
                      {hackathon.achievement && (
                        <div className="flex items-start gap-2 text-purple-400 text-sm font-semibold">
                          <Trophy size={16} className="mt-0.5 flex-shrink-0" />
                          <span>{hackathon.achievement}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="lg:col-span-9">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {hackathon.name}
                      </h3>
                      <p className="text-xl text-purple-400 font-semibold mb-1">
                        {hackathon.organizer}
                      </p>
                      {hackathon.sponsor && (
                        <p className="text-sm text-slate-400 mb-1">
                          {hackathon.sponsor}
                        </p>
                      )}
                      <p className="text-lg text-blue-400 font-medium">
                        Project: {hackathon.project}
                      </p>
                      {hackathon.duration && (
                        <p className="text-sm text-slate-400 mt-1">
                          Duration: {hackathon.duration}
                        </p>
                      )}
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {hackathon.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <ChevronRight className="text-purple-400" size={20} />
                        Key Highlights
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {hackathon.highlights.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-2 text-slate-300 text-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.1 * idx }}
                          >
                            <ChevronRight className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                            <span>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {hackathon.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-1.5 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 text-sm hover:border-purple-500/50 transition-colors"
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* View LinkedIn Post Button */}
                    <motion.a
                      href={hackathon.linkedinPost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${hackathon.color} rounded-lg text-white font-semibold text-sm group/btn overflow-hidden relative`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                      <Linkedin className="relative z-10" size={18} />
                      <span className="relative z-10">View LinkedIn Post</span>
                      <ExternalLink className="relative z-10 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <p className="text-slate-400 mb-6">
            Interested in collaborating on a hackathon?
          </p>
          <motion.a
            href="mailto:jyotsnaaa04@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hackathons;