import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Code, Briefcase, Users, Award } from "lucide-react";

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: Code,
      label: "Projects Completed",
      value: 60,
      suffix: "+",
    },
    {
      icon: Award,
      label: "Years Experience",
      value: 2,
      suffix: "+",
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: 40,
      suffix: "+",
    },
  ];

  return (
<section id="about" ref={ref} className="py-20 px-4">
  <div className="container mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="mb-4">
        Ready to Work on{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Your Next Project
        </span>
      </h2>
      <p className="text-slate-400 max-w-2xl mx-auto">
        I combine creativity with technical expertise to
        deliver exceptional digital solutions that help
        businesses grow and succeed in the digital world.
      </p>
    </motion.div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
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
  isInView,
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
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />

      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-colors">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center"
        >
          <Icon className="text-white" size={24} />
        </motion.div>

        <div className="mb-2">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {count}
            {suffix}
          </span>
        </div>

        <p className="text-slate-400 text-sm">{label}</p>
      </div>
    </motion.div>
  );
}