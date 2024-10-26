import Hero from '../components/Hero';
import Activities from '../components/Activities';
import BestSellers from '../components/marketing/BestSellers';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Activities />
      <BestSellers />
    </motion.div>
  );
}