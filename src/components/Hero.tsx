import { useThemeStore } from '../store/themeStore';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

const seasonalContent = {
  winter: {
    title: 'Embrace the Winter Magic',
    subtitle: 'Discover Premium Winter Sports Equipment',
    description: 'Experience the thrill of pristine slopes with our top-tier ski and snowboard gear.',
    cta: 'Explore Winter Collection',
    bgClass: 'from-blue-900 to-blue-600',
    accentClass: 'bg-blue-400',
  },
  summer: {
    title: 'Dive into Summer Adventures',
    subtitle: 'Premium Water Sports Gear',
    description: 'Ride the perfect wave with our professional surfing and water sports equipment.',
    cta: 'Shop Summer Essentials',
    bgClass: 'from-yellow-600 to-orange-500',
    accentClass: 'bg-yellow-400',
  },
  spring: {
    title: 'Spring Into Action',
    subtitle: 'Professional Hiking & Camping Gear',
    description: 'Conquer new heights with our carefully curated outdoor adventure equipment.',
    cta: 'Discover Spring Gear',
    bgClass: 'from-green-700 to-emerald-500',
    accentClass: 'bg-green-400',
  },
};

export default function Hero() {
  const { currentSeason } = useThemeStore();
  const content = seasonalContent[currentSeason];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className={clsx(
      'relative min-h-[80vh] overflow-hidden theme-transition',
      'bg-gradient-to-br',
      content.bgClass
    )}>
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={clsx(
          'absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 theme-transition',
          content.accentClass
        )} />
        <div className={clsx(
          'absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 theme-transition',
          content.accentClass
        )} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center text-white"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg font-medium tracking-wider uppercase"
          >
            {content.subtitle}
          </motion.p>
          
          <motion.h1
            variants={itemVariants}
            className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            {content.title}
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl sm:text-2xl max-w-2xl mx-auto"
          >
            {content.description}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="mt-10"
          >
            <button className={clsx(
              'btn btn-primary text-lg px-8 py-4',
              'bg-white text-gray-900 hover:bg-gray-50',
              'transform transition-all duration-300 hover:scale-105'
            )}>
              {content.cta}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 fill-current text-white"
          viewBox="0 0 1440 74"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,37 C240,74 480,74 720,37 C960,0 1200,0 1440,37 L1440,74 L0,74 Z" />
        </svg>
      </div>
    </div>
  );
}