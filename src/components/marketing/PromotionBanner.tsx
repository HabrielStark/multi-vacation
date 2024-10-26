import { useThemeStore } from '../../store/themeStore';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const seasonalPromotions = {
  winter: {
    title: "Winter Adventure Sale",
    description: "Get up to 30% off on all skiing and snowboarding equipment!",
    code: "WINTER30"
  },
  summer: {
    title: "Summer Fun Deals",
    description: "Save big on surfboards, kayaks, and beach gear!",
    code: "SUMMER25"
  },
  spring: {
    title: "Spring Into Action",
    description: "Special discounts on hiking and camping equipment!",
    code: "SPRING20"
  }
};

export default function PromotionBanner() {
  const { currentSeason } = useThemeStore();
  const promotion = seasonalPromotions[currentSeason];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        "relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5",
        {
          'bg-blue-900': currentSeason === 'winter',
          'bg-yellow-900': currentSeason === 'summer',
          'bg-green-900': currentSeason === 'spring',
        }
      )}
    >
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className={clsx(
            "aspect-[577/310] w-[36.0625rem] opacity-30",
            {
              'bg-gradient-to-r from-[#ff80b5] to-[#9089fc]': currentSeason === 'winter',
              'bg-gradient-to-r from-[#ffd280] to-[#ff8080]': currentSeason === 'summer',
              'bg-gradient-to-r from-[#80ff80] to-[#80ffb5]': currentSeason === 'spring',
            }
          )}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className={clsx(
            "aspect-[577/310] w-[36.0625rem] opacity-30",
            {
              'bg-gradient-to-r from-[#ff80b5] to-[#9089fc]': currentSeason === 'winter',
              'bg-gradient-to-r from-[#ffd280] to-[#ff8080]': currentSeason === 'summer',
              'bg-gradient-to-r from-[#80ff80] to-[#80ffb5]': currentSeason === 'spring',
            }
          )}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-white">
          <strong className="font-semibold">{promotion.title}</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          {promotion.description}
        </p>
        <p className="flex-none rounded-full bg-white px-3.5 py-1 text-sm font-semibold shadow-sm">
          Use code: <span className="text-gray-900 font-bold">{promotion.code}</span>
        </p>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="text-white hover:opacity-80 transition-opacity"
        >
          <span className="sr-only">Dismiss</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}