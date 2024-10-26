import { useProductStore } from '../../store/productStore';
import { useCartStore } from '../../store/cartStore';
import { useThemeStore } from '../../store/themeStore';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function ProductGrid() {
  const { filteredProducts } = useProductStore();
  const { addItem } = useCartStore();
  const { currentSeason } = useThemeStore();

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {filteredProducts.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="group relative"
        >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Product Image</span>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-700">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">${product.price}</p>
          </div>
          <button
            onClick={() => addItem(product)}
            className={clsx(
              'mt-4 w-full rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm',
              {
                'bg-blue-600 hover:bg-blue-500': currentSeason === 'winter',
                'bg-yellow-600 hover:bg-yellow-500': currentSeason === 'summer',
                'bg-green-600 hover:bg-green-500': currentSeason === 'spring',
              }
            )}
          >
            Add to Cart
          </button>
        </motion.div>
      ))}
    </div>
  );
}