import { useProductStore } from '../../store/productStore';
import { useThemeStore } from '../../store/themeStore';
import clsx from 'clsx';

const categories = [
  { name: 'All', value: 'all' },
  { name: 'Skiing', value: 'Skiing' },
  { name: 'Snowboarding', value: 'Snowboarding' },
  { name: 'Surfing', value: 'Surfing' },
  { name: 'Kayaking', value: 'Kayaking' },
  { name: 'Hiking', value: 'Hiking' },
  { name: 'Biking', value: 'Biking' },
];

export default function CategoryFilter() {
  const { setFilter, currentFilter } = useProductStore();
  const { currentSeason } = useThemeStore();

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => setFilter(category.value)}
          className={clsx(
            'px-4 py-2 rounded-full text-sm font-medium transition-colors',
            currentFilter === category.value
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
  );
}