import { ReactNode } from 'react';
import clsx from 'clsx';
import { useThemeStore } from '../store/themeStore';

interface ActivityCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ActivityCard({ title, description, icon }: ActivityCardProps) {
  const { currentSeason } = useThemeStore();
  
  return (
    <div className="relative p-6 bg-white rounded-xl shadow-md">
      <div className={clsx(
        "inline-flex rounded-xl p-3",
        {
          'bg-blue-100': currentSeason === 'winter',
          'bg-yellow-100': currentSeason === 'summer',
          'bg-green-100': currentSeason === 'spring',
        }
      )}>
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}