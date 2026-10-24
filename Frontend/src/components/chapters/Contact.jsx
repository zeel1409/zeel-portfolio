import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { ChapterLabel, FadeUp } from '../ui/AnimatedSection';
import { Send, CheckCircle, AlertCircle, Mail, User, FileText, MessageSquare } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

const SUDO_SUBJECTS = ['sudo', 'rm -rf', 'chmod 777', 'git push --force'];

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [isSudoMode, setIsSudoMode] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  // const nameValue = watch('name', '');

  // Easter egg: sudo mode
  const handleNameChange = (e) => {
    const val = e.target.value.toLowerCase();
    setIsSudoMode(SUDO_SUBJECTS.some((s) => val.includes(s)));
  };

  const onSubmit = async (data) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`, data);
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus(null), 6000);
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const socialLinks = [
    { label: 'GitHub', icon: '🐙', href: 'https://github.com/zeel1409', handle: '@zeel1409' },
    { label: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/zeel-kadiya-5733a7349/', handle: 'in/zeel' },
    { label: 'Email', icon: '📧', href: 'mailto:kadiyazeel209@gmail.com', handle: 'kadiyazeel209@gmail.com' },
  ];

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-80 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(99,102,241,0.08), transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <FadeUp>
              <ChapterLabel number="07" label="Open Channel" />
              <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Let's build{' '}
                <span className="gradient-text">something great.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-4">
                Whether you have a project in mind, an opportunity to share, or just want to say hi —
                my inbox is always open.
              </p>
              <p className="text-slate-500 leading-relaxed mb-10">
                I typically respond within 24 hours.
              </p>
            </FadeUp>

            {/* Social links */}
            <FadeUp delay={0.2}>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass-card glass-card-hover rounded-xl group"
                  >
                    <span className="text-xl w-10 text-center">{link.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-neon-indigo transition-colors">
                        {link.label}
                      </div>
                      <div className="text-xs font-mono text-slate-500">{link.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </FadeUp>

            {/* Fun note */}
            <FadeUp delay={0.3}>
              <div className="mt-8 p-4 rounded-xl border border-white/5 bg-white/2">
                <div className="font-mono text-xs text-slate-600">
                  // If you made it this far and haven't tried<br />
                  // the Konami code yet... you're missing out. 🎮
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right: form */}
          <FadeUp delay={0.15}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display font-bold text-white mb-6">Send a Message</h3>

              <AnimatePresence mode="wait">
                {submitStatus === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 mb-6"
                  >
                    <CheckCircle size={18} className="text-green-400 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-green-400">Message sent!</p>
                      <p className="text-xs text-slate-400 mt-0.5">I'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 mb-6"
                  >
                    <AlertCircle size={18} className="text-red-400 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-red-400">Something went wrong</p>
                      <p className="text-xs text-slate-400 mt-0.5">Please try again or email me directly.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-500 mb-1.5">
                    <User size={12} className="inline mr-1" />name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    className={`form-input ${errors.name ? 'border-red-500/50' : ''}`}
                    {...register('name')}
                    onChange={(e) => { register('name').onChange(e); handleNameChange(e); }}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-500 mb-1.5">
                    <Mail size={12} className="inline mr-1" />email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    className={`form-input ${errors.email ? 'border-red-500/50' : ''}`}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-500 mb-1.5">
                    <FileText size={12} className="inline mr-1" />subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="What's this about?"
                    className={`form-input ${errors.subject ? 'border-red-500/50' : ''}`}
                    {...register('subject')}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-500 mb-1.5">
                    <MessageSquare size={12} className="inline mr-1" />message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or just say hi..."
                    className={`form-input resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center mt-2"
                  id="contact-submit"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : isSudoMode ? (
                    <>
                      <Send size={14} />
                      Execute Message
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
