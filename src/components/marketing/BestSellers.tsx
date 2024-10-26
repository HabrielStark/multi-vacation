import { useThemeStore } from '../../store/themeStore';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const bestSellers = {
  winter: [
    { id: 1, name: 'Premium Ski Set', price: 899.99, sales: 150 },
    { id: 2, name: 'Snowboard Pro', price: 549.99, sales: 120 },
    { id: 3, name: 'Winter Gear Bundle', price: 299.99, sales: 200 }
  ],
  summer: [
    { id: 4, name: 'Premium Surfboard', price: 699.99, sales: 180 },
    { id: 5, name: 'Kayak Explorer', price: 799.99, sales: 90 },
    { id: 6, name: 'Beach Sports Kit', price: 199.99, sales: 250 }
  ],
  spring: [
    { id: 7, name: 'Mountain Bike Elite', price: 1299.99, sales: 75 },
    { id: 8, name: 'Hiking Boots Pro', price: 199.99, sales: 300 },
    { id: 9, name: 'Camping Essentials', price: 399.99, sales: 150 }
  ]
};

export default function BestSellers() {
  const { currentSeason } = useThemeStore();

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={clsx(
              "text-3xl font-bold",
              {
                'text-blue-900': currentSeason === 'winter',
                'text-yellow-900': currentSeason === 'summer',
                'text-green-900': currentSeason === 'spring',
              }
            )}
          >
            Best Sellers
          </motion.h2>
          <p className="mt-4 text-lg text-gray-600">
            Our most popular items this {currentSeason}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers[currentSeason].map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={clsx(
                "relative rounded-lg p-6 shadow-md transition-shadow hover:shadow-lg",
                {
                  'bg-blue-50': currentSeason === 'winter',
                  'bg-yellow-50': currentSeason === 'summer',
                  'bg-green-50': currentSeason === 'spring',
                }
              )}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4">
                <div className={clsx(
                  "rounded-full p-2 text-white text-sm font-bold",
                  {
                    'bg-blue-600': currentSeason === 'winter',
                    'bg-yellow-600': currentSeason === 'summer',
                    'bg-green-600': currentSeason === 'spring',
                  }
                )}>
                  Best Seller
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
              <p className="mt-2 text-gray-600">${item.price}</p>
              <p className="mt-2 text-sm text-gray-500">{item.sales} sold this season</p>

              <button
                className={clsx(
                  "mt-4 w-full rounded-md px-4 py-2 text-white transition-colors",
                  {
                    'bg-blue-600 hover:bg-blue-700': currentSeason === 'winter',
                    'bg-yellow-600 hover:bg-yellow-700': currentSeason === 'summer',
                    'bg-green-600 hover:bg-green-700': currentSeason === 'spring',
                  }
                )}
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}