import React, { useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Zap,
  Globe,
  Users,
  Star,
  TrendingUp,
  Briefcase,
  MapPin,
  Award,
  Rocket
} from 'lucide-react';
import AnimatedCounter from '../components/Animatecounter';
import { motion } from 'framer-motion';

const PartnersSection = () => {
  const scrollContainerRef = useRef(null);
  const marqueeContainerRef = useRef(null);
  const marqueeContainerRef2 = useRef(null);

  // Top company logos with real brand colors
  const topCompanies = [
    { 
      name: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      color: 'bg-gradient-to-br from-orange-400 to-yellow-300',
      industry: 'E-commerce & Cloud'
    },
    { 
      name: 'Netflix', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      color: 'bg-gradient-to-br from-red-600 to-red-800',
      industry: 'Entertainment'
    },
    { 
      name: 'Meta', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
      color: 'bg-gradient-to-br from-blue-600 to-purple-600',
      industry: 'Social Media'
    },
    { 
      name: 'Google', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      color: 'bg-gradient-to-br from-blue-500 to-green-500',
      industry: 'Technology'
    },
    { 
      name: 'Microsoft', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
      color: 'bg-gradient-to-br from-blue-700 to-gray-700',
      industry: 'Software'
    },
    { 
      name: 'Apple', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      color: 'bg-gradient-to-br from-gray-800 to-gray-900',
      industry: 'Technology'
    },
    { 
      name: 'Tesla', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
      color: 'bg-gradient-to-br from-red-500 to-red-700',
      industry: 'Automotive'
    },
    { 
      name: 'Spotify', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
      color: 'bg-gradient-to-br from-green-500 to-green-700',
      industry: 'Music Streaming'
    },
    { 
      name: 'Adobe', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Adobe_Corporate_logo.svg',
      color: 'bg-gradient-to-br from-red-600 to-purple-600',
      industry: 'Creative Software'
    },
    { 
      name: 'Slack', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      industry: 'Communication'
    },
  ];

  // Circular marquee - create a seamless loop by doubling and adding offset
  const scrollingCompanies = [...topCompanies, ...topCompanies, ...topCompanies];

  // Manual scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const CompanyCard = ({ company, index }) => (
    <motion.div
      className="flex-shrink-0 w-48"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <motion.div 
        className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#F97316]/30 hover:shadow-2xl transition-all duration-500 group cursor-pointer"
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex flex-col items-center text-center">
          {/* Logo Container */}
          <motion.div 
            className="h-20 w-20 rounded-2xl bg-gray-50 p-4 mb-4 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={company.logo} 
              alt={`${company.name} logo`}
              className="h-full w-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23334155'%3E%3Ctext x='12' y='16' text-anchor='middle' font-size='8' fill='white'%3E${company.name.charAt(0)}%3C/text%3E%3C/svg%3E`;
              }}
            />
          </motion.div>
          
          {/* Company Name */}
          <motion.h3 
            className="font-bold text-lg text-[#0F172A] mb-1"
            whileHover={{ color: '#F97316' }}
          >
            {company.name}
          </motion.h3>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7ED] border border-orange-100 mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Zap className="h-4 w-4 text-[#F97316]" />
            <span className="text-sm font-medium text-[#F97316]">
              Our Global Partners
            </span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p 
            className="text-lg text-[#334155] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We collaborate with the world's most innovative companies to deliver exceptional results
          </motion.p>
        </motion.div>

        {/* Scroll Container with Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <motion.button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-[#F97316] hover:shadow-xl transition-all group hidden md:flex"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-[#F97316]" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-[#F97316] hover:shadow-xl transition-all group hidden md:flex"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-[#F97316]" />
          </motion.button>

          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>

          {/* Circular Auto-scrolling Marquee */}
          <div className="relative overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex py-4 overflow-x-auto scrollbar-hide"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {/* Single continuous marquee with triple repetition for seamless circular effect */}
              <motion.div 
                ref={marqueeContainerRef}
                className="flex gap-8"
                animate={{ 
                  x: [0, -1 * topCompanies.length * 192] // Calculate based on card width + gap
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30, // Slower for better visibility
                    ease: "linear"
                  }
                }}
                whileHover={{ animationPlayState: "paused" }}
              >
                {scrollingCompanies.map((company, index) => (
                  <CompanyCard key={`marquee-${index}`} company={company} index={index % topCompanies.length} />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <motion.button
              onClick={scrollLeft}
              className="h-10 w-10 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-[#F97316] group"
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="h-5 w-5 text-gray-600 group-hover:text-[#F97316]" />
            </motion.button>
            <motion.button
              onClick={scrollRight}
              className="h-10 w-10 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-[#F97316] group"
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-[#F97316]" />
            </motion.button>
          </div>
        </div>

        {/* Stats Section with Lucide Icons */}
        {/* Replace the entire stats section with this minimal version */}
<motion.div 
  className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.3 }}
>
  {[
    { 
      number: 500, 
      suffix: '+', 
      label: 'Global Partners',
      Icon: Users 
    },
    { 
      number: 15, 
      suffix: '+', 
      label: 'Countries',
      Icon: Globe 
    },
    { 
      number: 98, 
      suffix: '%', 
      label: 'Satisfaction Rate',
      Icon: Star 
    },
    { 
      number: 1000, 
      suffix: '+', 
      label: 'Projects',
      Icon: TrendingUp 
    }
  ].map((stat, index) => {
    const Icon = stat.Icon;
    return (
      <div key={index} className="text-center">
        {/* Icon above the number */}
        <motion.div 
          className="flex justify-center mb-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            delay: 0.4 + index * 0.1,
            type: "spring" 
          }}
        >
          <Icon className="h-8 w-8 text-[#F97316]" />
        </motion.div>
        
        {/* Animated number */}
        <div className="flex items-baseline justify-center mb-2">
          <AnimatedCounter value={stat.number} />
          <span className="text-2xl font-bold text-[#F97316] ml-1">
            {stat.suffix}
          </span>
        </div>
        
        {/* Label */}
        <div className="text-sm text-[#334155] font-medium tracking-wide uppercase">
          {stat.label}
        </div>
      </div>
    );
  })}
</motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-[#334155] mb-6">
            Want to join our network of elite partners?
          </p>
          <motion.button 
            className="px-8 py-3 bg-[#F97316] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#EA580C',
              boxShadow: '0 20px 25px -5px rgba(249, 115, 22, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Partner
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnersSection;