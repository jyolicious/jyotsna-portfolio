import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
  Award,
  TrendingUp,
  Database,
  BarChart3,
  ExternalLink,
  Code
} from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    // ✅ DreamVentz FIRST
    {
      role: 'Web Development Intern',
      company: 'DreamVentz (EpicGenz Ventures Pvt. Ltd.)',
      period: 'Present',
      location: 'Remote',
      description:
        'Worked on live event-tech web projects under the DreamVentz platform, gaining hands-on experience in modern web development and collaborative product building.',
      responsibilities: [
        'Developed and enhanced frontend components for live event-tech applications using modern web technologies',
        'Collaborated with designers and backend developers to implement responsive and user-friendly interfaces',
        'Worked on real-world features across DreamVentz and its associated ventures, following structured development workflows',
        'Participated in debugging, testing, and improving application performance and usability'
      ],
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Frontend Development',
        'Team Collaboration'
      ],
      icon: Code,
      color: 'from-pink-600 to-purple-600',
      certificateLink:
        '#'
    },

    // ✅ Excelerate SECOND
    {
      role: 'Data Analytics Associate',
      company: 'Excelerate',
      period: 'Oct 2025 - Nov 2025',
      location: 'Remote',
      description:
        'Worked on data analytics projects focusing on SQL operations, data cleaning, and creating impactful visualizations.',
      responsibilities: [
        'Performed SQL joins, data cleaning, and exploratory analysis to prepare high-quality datasets for insights',
        'Built interactive visualizations and dashboards on Looker Studio, enabling clear data storytelling and decision-making',
        'Collaborated with cross-functional teams to understand business requirements and translate them into analytical solutions',
        'Conducted data quality assessments and implemented data validation processes'
      ],
      skills: [
        'SQL',
        'Looker Studio',
        'Data Cleaning',
        'EDA',
        'Data Visualization',
        'PostgreSQL'
      ],
      icon: Database,
      color: 'from-purple-600 to-blue-600',
      certificateLink:
        'https://drive.google.com/file/d/1Q8Bk1IlJUXKNqz0akpQ8pFqRC4YeAKDq/view?usp=sharing'
    }
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 overflow-hidden"
    >
      <motion.div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
          Experience
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center`}
                >
                  <exp.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-purple-400 font-semibold">{exp.company}</p>
                  <p className="text-slate-400 text-sm">
                    {exp.period} · {exp.location}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 mb-5">{exp.description}</p>

              <ul className="space-y-2 mb-5">
                {exp.responsibilities.map((r, i) => (
                  <li key={i} className="flex gap-2 text-slate-300">
                    <ChevronRight size={18} className="text-purple-400 mt-1" />
                    {r}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-5">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={exp.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
              >
                <Award size={18} />
                View Certificate
                <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
