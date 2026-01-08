import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus({
            type: 'success',
            message: 'Thank you! Your message has been sent successfully.'
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          console.error(error);
          setStatus({
            type: 'error',
            message: 'Something went wrong. Please try again later.'
          });
          setIsSubmitting(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jyotsnaaa04@gmail.com',
      link: 'mailto:jyotsnaaa04@gmail.com',
      color: 'from-pink-600 to-purple-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Jyotsna Kasibhotla',
      link: 'https://www.linkedin.com/in/jyotsna-kasibhotla-598b89313',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@jyolicious',
      link: 'https://github.com/jyolicious',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, Maharashtra, IN',
      link: null,
      color: 'from-green-600 to-emerald-600'
    }
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ top: '20%', right: '5%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ bottom: '20%', left: '5%' }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
            Let&apos;s Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white">Get in Touch</h3>

            {contactInfo.map((info, index) => (
              <div key={index} className="bg-slate-900/90 border border-slate-800 rounded-xl p-6">
                <div className="flex gap-4 items-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center`}
                  >
                    <info.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="text-white font-medium hover:text-purple-400"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {['name', 'email', 'subject'].map((field) => (
                  <input
                    key={field}
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white"
                  />
                ))}

                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white resize-none"
                />

                {status.message && (
                  <div
                    className={`flex items-center gap-2 p-3 rounded-lg text-sm ${
                      status.type === 'success'
                        ? 'bg-green-500/10 text-green-400'
                        : 'bg-red-500/10 text-red-400'
                    }`}
                  >
                    {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
