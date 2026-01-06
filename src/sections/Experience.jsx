import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Award, TrendingUp, Database, BarChart3, ExternalLink } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  const experiences = [
    {
      role: 'Data Analytics Associate',
      company: 'Excelerate',
      period: 'Oct 2025 - Nov 2025',
      location: 'Remote',
      description: 'Worked on data analytics projects focusing on SQL operations, data cleaning, and creating impactful visualizations.',
      responsibilities: [
        'Performed SQL joins, data cleaning, and exploratory analysis to prepare high-quality datasets for insights',
        'Built interactive visualizations and dashboards on Looker Studio, enabling clear data storytelling and decision-making',
        'Collaborated with cross-functional teams to understand business requirements and translate them into analytical solutions',
        'Conducted data quality assessments and implemented data validation processes'
      ],
      skills: ['SQL', 'Looker Studio', 'Data Cleaning', 'EDA', 'Data Visualization', 'PostgreSQL'],
      icon: Database,
      color: 'from-purple-600 to-blue-600',
      certificateLink: 'YOUR_EXCELERATE_CERTIFICATE_LINK' // Replace with actual link
    }
  ];

  const certifications = [
    {
      title: 'Data Science',
      issuer: 'Infosys Springboard',
      date: 'Oct 2025',
      description: 'Gained hands-on understanding of data preprocessing, statistical analysis, and applying data science workflows for real-world problem-solving.',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      certificateLink: 'YOUR_GOOGLE_DRIVE_LINK_1' // Replace with actual link
    },
    {
      title: 'Multidimensional Data Modeling',
      issuer: 'Infosys Springboard',
      date: 'Oct 2025',
      description: 'Learnt to design multidimensional schemas (star/snowflake), build OLAP-ready data models, and structure data for efficient analytics.',
      icon: Database,
      color: 'from-blue-500 to-blue-600',
      certificateLink: 'YOUR_GOOGLE_DRIVE_LINK_2' // Replace with actual link
    },
    {
      title: 'Introduction to Business Intelligence',
      issuer: 'Infosys Springboard',
      date: 'Sept 2025',
      description: 'Developed foundational BI skills including dashboarding concepts, KPI tracking, and transforming raw data into business insights.',
      icon: BarChart3,
      color: 'from-cyan-500 to-cyan-600',
      certificateLink: 'YOUR_GOOGLE_DRIVE_LINK_3' // Replace with actual link
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          style={{ top: '10%', left: '10%' }}
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
          style={{ bottom: '10%', right: '10%' }}
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
            Experience
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Professional journey in data analytics and technology
          </motion.p>
        </motion.div>

        {/* Professional Experience */}
        <motion.div className="mb-20" variants={itemVariants}>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase className="text-purple-400" size={28} />
            Professional Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glowing Border Effect */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${exp.color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity`}
                />

                {/* Card Content */}
                <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-slate-700/50 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Left Content */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className={`w-14 h-14 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <exp.icon className="text-white" size={28} />
                        </motion.div>

                        <div>
                          <h4 className="text-2xl font-bold text-white mb-1">
                            {exp.role}
                          </h4>
                          <p className="text-xl text-purple-400 font-semibold mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
                            <span className="flex items-center gap-1">
                              <Calendar size={16} />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={16} />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="space-y-3 mb-6">
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3 text-slate-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.1 * idx }}
                          >
                            <ChevronRight className="text-purple-400 flex-shrink-0 mt-1" size={18} />
                            <span className="leading-relaxed">{resp}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-1.5 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 text-sm hover:border-purple-500/50 transition-colors"
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* View Certificate Button - Right Side */}
                    <div className="lg:flex lg:items-start">
                      <motion.a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${exp.color} rounded-lg text-white font-semibold text-sm group/btn overflow-hidden relative whitespace-nowrap`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.5 }}
                        />
                        <Award className="relative z-10" size={18} />
                        <span className="relative z-10">View Certificate</span>
                        <ExternalLink className="relative z-10 group-hover/btn:translate-x-1 transition-transform" size={16} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Award className="text-blue-400" size={28} />
            Certifications
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Glow Effect */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity`}
                />

                {/* Card Content */}
                <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 h-full hover:border-slate-700/50 transition-colors">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <cert.icon className="text-white" size={24} />
                  </motion.div>

                  <h4 className="text-xl font-bold text-white mb-2">
                    {cert.title}
                  </h4>

                  <p className="text-purple-400 font-semibold mb-1">
                    {cert.issuer}
                  </p>

                  <p className="text-slate-500 text-sm mb-4 flex items-center gap-1">
                    <Calendar size={14} />
                    {cert.date}
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* View Certificate Button */}
                  <motion.a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${cert.color} rounded-lg text-white font-semibold text-sm group/btn overflow-hidden relative`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10">View Certificate</span>
                    <ExternalLink className="relative z-10 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </motion.div>
    </section>
  );
};

export default Experience;