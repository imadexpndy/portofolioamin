import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Blocks, Code2, TrendingUp, Star } from 'lucide-react';
import { Button } from './ui/button';

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Blocks,
      title: 'WordPress & CMS',
      description: 'Custom WordPress development with theme customization, plugin integration, and WooCommerce setup. I build user-friendly CMS solutions tailored to your needs.',
      rating: 5,
    },
    {
      icon: Code2,
      title: 'Front-End Dev',
      description: 'Responsive, modern interfaces built with the latest web technologies. Clean, maintainable code that brings designs to life across all devices and browsers.',
      rating: 5,
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & SEO',
      description: 'Technical SEO optimization, content strategy, and performance analysis. I help your website rank higher and convert better through data-driven strategies.',
      rating: 5,
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 px-4 md:px-6 lg:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            What <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">I Offer</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I provide a wide range of services to help bring your digital ideas to life. 
            From concept to deployment, I'm here to help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, isInView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
      
      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="w-16 h-16 mb-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30"
          >
            <service.icon className="text-white" size={32} />
          </motion.div>
          
          {/* Title */}
          <h3 className="mb-4">{service.title}</h3>
          
          {/* Description */}
          <p className="text-slate-400 mb-6 flex-grow">{service.description}</p>
          
          {/* Rating Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(service.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.3 + i * 0.1 }}
              >
                <Star className="text-yellow-400 fill-yellow-400" size={18} />
              </motion.div>
            ))}
          </div>
          
          {/* Order Now Button */}
          <Button 
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all"
          >
            Order Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}