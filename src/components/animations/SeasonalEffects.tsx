import { useThemeStore } from '../../store/themeStore';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CloudIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
}

export default function SeasonalEffects() {
  const { currentSeason } = useThemeStore();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const count = currentSeason === 'winter' ? 50 : currentSeason === 'summer' ? 30 : 40;
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        rotation: Math.random() * 360,
        duration: Math.random() * 3 + 2
      }));
    };

    setParticles(generateParticles());

    const interval = setInterval(() => {
      setParticles(generateParticles());
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSeason]);

  const renderWinterParticle = (particle: Particle) => (
    <motion.div
      key={particle.id}
      className="absolute"
      initial={{ 
        x: particle.x,
        y: -20,
        rotate: 0,
        scale: 0
      }}
      animate={{ 
        x: particle.x + Math.sin(particle.x) * 50,
        y: window.innerHeight + 20,
        rotate: 360,
        scale: 1
      }}
      transition={{
        duration: particle.duration * 2,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 animate-pulse-slow">
          <CloudIcon className="w-3 h-3 text-blue-200" />
        </div>
        <div className="transform rotate-45">
          <div className="w-2 h-2 bg-white rounded-full opacity-80" />
        </div>
      </div>
    </motion.div>
  );

  const renderSummerParticle = (particle: Particle) => (
    <motion.div
      key={particle.id}
      className="absolute"
      initial={{ 
        x: particle.x,
        y: window.innerHeight + 20,
        scale: 0
      }}
      animate={{ 
        x: particle.x + Math.sin(particle.y) * 100,
        y: -20,
        scale: [0, 1, 0]
      }}
      transition={{
        duration: particle.duration * 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="relative">
        <div className="w-1 h-1 bg-yellow-200 rounded-full shadow-lg shadow-yellow-100" />
        <div className="absolute inset-0 animate-pulse">
          <div className="w-2 h-2 bg-yellow-100 rounded-full opacity-30" />
        </div>
      </div>
    </motion.div>
  );

  const renderSpringParticle = (particle: Particle) => {
    const colors = [
      'text-pink-400',
      'text-rose-400',
      'text-purple-400',
      'text-violet-400'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
      <motion.div
        key={particle.id}
        className="absolute"
        initial={{ 
          x: particle.x,
          y: window.innerHeight + 20,
          rotate: 0,
          scale: 0
        }}
        animate={{ 
          x: particle.x + Math.sin(particle.y) * 150,
          y: -20,
          rotate: particle.rotation,
          scale: [0, 1, 0]
        }}
        transition={{
          duration: particle.duration * 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative">
          <SparklesIcon className={`w-4 h-4 ${color}`} />
          <div className="absolute inset-0 animate-pulse-slow">
            <div className="w-3 h-3 bg-pink-100 rounded-full opacity-30" />
          </div>
        </div>
      </motion.div>
    );
  };

  const renderSeasonalOverlay = () => {
    switch (currentSeason) {
      case 'winter':
        return (
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-blue-100/5 pointer-events-none" />
        );
      case 'summer':
        return (
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-orange-300/5 pointer-events-none" />
        );
      case 'spring':
        return (
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-pink-200/5 pointer-events-none" />
        );
      default:
        return null;
    }
  };

  const renderParticle = (particle: Particle) => {
    switch (currentSeason) {
      case 'winter':
        return renderWinterParticle(particle);
      case 'summer':
        return renderSummerParticle(particle);
      case 'spring':
        return renderSpringParticle(particle);
      default:
        return null;
    }
  };

  if (!currentSeason) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {renderSeasonalOverlay()}
      {particles.map(renderParticle)}
    </div>
  );
}