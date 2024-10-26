import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SeasonalEffects from './components/animations/SeasonalEffects';
import { useThemeStore } from './store/themeStore';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Booking from './pages/Booking';
import PromotionBanner from './components/marketing/PromotionBanner';
import clsx from 'clsx';

function App() {
  const { currentSeason } = useThemeStore();

  return (
    <Router>
      <div className={clsx(
        'min-h-screen transition-colors duration-500',
        {
          'bg-blue-50': currentSeason === 'winter',
          'bg-yellow-50': currentSeason === 'summer',
          'bg-green-50': currentSeason === 'spring',
        }
      )}>
        <SeasonalEffects />
        <PromotionBanner />
        <Header />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;