import { useBookingStore } from '../../store/bookingStore';
import { useThemeStore } from '../../store/themeStore';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const categories = [
  { id: 'all', name: 'All Activities' },
  { id: 'winter', name: 'Winter Sports' },
  { id: 'summer', name: 'Summer Activities' },
  { id: 'spring', name: 'Spring Adventures' }
];

export default function ServiceList() {
  const { filteredServices, currentFilter, setFilter } = useBookingStore();
  const { currentSeason } = useThemeStore();

  return (
    <div className="py-8">
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={clsx(
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              currentFilter === category.id
                ? {
                    'bg-blue-600 text-white': currentSeason === 'winter',
                    'bg-yellow-600 text-white': currentSeason === 'summer',
                    'bg-green-600 text-white': currentSeason === 'spring',
                  }
                : 'bg-white text-gray-700 hover:bg-gray-50'
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Service grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No activities available for the selected filter.</p>
        </div>
      )}
    </div>
  );
}