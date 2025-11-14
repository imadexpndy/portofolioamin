import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Award, Users, Sparkles } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Code, label: 'Projects Completed', value: 60, suffix: '+' },
    { icon: Award, label: 'Years Experience', value: 2, suffix: '+' },
    { icon: Users, label: 'Happy Clients', value: 40, suffix: '+' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-4 md:px-6 lg:px-8 md:py-28 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full mb-6"
          >
            <Sparkles className="text-cyan-400" size={16} />
            <span className="text-sm text-cyan-400 uppercase tracking-wider">About Me</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            Passionate About <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Creating Digital Experiences</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-slate-400 max-w-3xl mx-auto"
          >
            I'm a full-stack developer with a passion for building beautiful, functional web applications 
            that make a difference. With expertise in WordPress development, front-end engineering, and SEO optimization, 
            I combine technical excellence with creative problem-solving to deliver exceptional results. 
            Let me bring your vision to life with clean code and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Stats Grid - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ 
  icon: Icon, 
  label, 
  value, 
  suffix, 
  index, 
  isInView 
}: { 
  icon: any; 
  label: string; 
  value: number; 
  suffix: string; 
  index: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(value * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
      
      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="relative w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30"
        >
          <Icon className="text-white" size={28} />
        </motion.div>
        
        <div className="relative mb-3">
          <span className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {count}{suffix}
          </span>
        </div>
        
        <p className="text-slate-400 relative">{label}</p>
      </div>
    </motion.div>
  );
}
