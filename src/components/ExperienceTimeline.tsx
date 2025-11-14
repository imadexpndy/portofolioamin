import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

export function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: 'Freelance',
      company: 'Expndy',
      period: 'novembre 2025 - Present',
      description: "Réalisation de projets web variés pour différents clients, incluant le développement de sites et d'applications web. Gestion complète des projets de la conception à la mise en production, en assurant la qualité du code et le respect des délais.",
      achievements: [],
    },
    {
      title: 'Web Developer',
      company: 'Rimas Digital',
      period: '15/07/2024 - 07/11/2025',
      description: "Conduite de diverses missions en SEO, incluant la création de backlinks, la rédaction de contenu optimisé, l'analyse du trafic, et l'amélioration du référencement des mots-clés. Conception et développement de sites web sous WordPress, avec un focus sur l'ergonomie et la performance.",
      achievements: [],
    },
    {
      title: 'Full Stack Developer',
      company: 'Success Line Agency',
      period: '11/06/2024 - 30/06/2024',
      description: "Conception et développement d'une landing page en utilisant Vue.js, Nuxt.js, et Tailwind CSS, axée sur l'optimisation de l'expérience utilisateur. Collaboration à la création d'une interface utilisateur intuitive et réactive. Implémentation de fonctionnalités interactives pour accroître l'engagement et l'interaction des utilisateurs.",
      achievements: [],
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 px-4 md:px-6 lg:px-8 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            My Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A journey through my professional career, highlighting key roles and achievements 
            that have shaped my expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              experience={exp} 
              index={index} 
              isInView={isInView}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience, index, isInView, isLast }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative flex gap-8 pb-12"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.3 }}
          className="relative z-10 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50"
        >
          <Briefcase className="text-white" size={20} />
        </motion.div>
        
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
            className="w-0.5 flex-1 bg-gradient-to-b from-cyan-500 to-blue-500 mt-2"
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        whileHover={{ x: 10 }}
        className="flex-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative z-10">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
            <div>
              <h3 className="mb-1">{experience.title}</h3>
              <p className="text-cyan-400">{experience.company}</p>
            </div>
            <span className="px-4 py-2 bg-slate-700/50 rounded-full text-sm text-slate-300">
              {experience.period}
            </span>
          </div>
          
          <p className="text-slate-400 mb-4">{experience.description}</p>
          
          <div className="space-y-2">
            {experience.achievements.map((achievement: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 + 0.6 + i * 0.1 }}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                {achievement}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}