import { Product } from '../../types/product';
import { useThemeStore } from '../../store/themeStore';
import clsx from 'clsx';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { currentSeason } = useThemeStore();

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <div className="h-full w-full bg-gray-200 flex items-center justify-center">
          {/* Placeholder for product image */}
          <span className="text-gray-400">Product Image</span>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className={clsx(
          "text-sm font-medium",
          {
            'text-blue-600': currentSeason === 'winter',
            'text-yellow-600': currentSeason === 'summer',
            'text-green-600': currentSeason === 'spring',
          }
        )}>
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}