import { 
  CloudIcon, 
  SunIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';
import ActivityCard from './ActivityCard';
import { useThemeStore } from '../store/themeStore';
import clsx from 'clsx';

const seasonalActivities = {
  winter: [
    {
      title: 'Skiing',
      description: 'Experience the thrill of downhill skiing on perfectly groomed slopes.',
      icon: <CloudIcon className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Snowboarding',
      description: 'Carve through fresh powder and master the art of snowboarding.',
      icon: <CloudIcon className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Ice Skating',
      description: 'Glide gracefully across pristine ice in scenic winter settings.',
      icon: <CloudIcon className="h-6 w-6 text-blue-600" />
    }
  ],
  summer: [
    {
      title: 'Surfing',
      description: 'Catch the perfect wave and experience the ultimate summer thrill.',
      icon: <SunIcon className="h-6 w-6 text-yellow-600" />
    },
    {
      title: 'Kayaking',
      description: 'Paddle through crystal clear waters and explore hidden coves.',
      icon: <SunIcon className="h-6 w-6 text-yellow-600" />
    },
    {
      title: 'Beach Volleyball',
      description: 'Join exciting matches on sun-kissed beaches with fellow enthusiasts.',
      icon: <SunIcon className="h-6 w-6 text-yellow-600" />
    }
  ],
  spring: [
    {
      title: 'Hiking',
      description: 'Explore scenic trails and discover breathtaking mountain views.',
      icon: <SparklesIcon className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Mountain Biking',
      description: 'Navigate challenging trails through beautiful spring landscapes.',
      icon: <SparklesIcon className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Rock Climbing',
      description: 'Scale natural rock faces with expert guidance and safety equipment.',
      icon: <SparklesIcon className="h-6 w-6 text-green-600" />
    }
  ]
};

export default function Activities() {
  const { currentSeason } = useThemeStore();
  const activities = seasonalActivities[currentSeason];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className={clsx(
          "text-3xl font-bold text-center mb-12",
          {
            'text-blue-900': currentSeason === 'winter',
            'text-yellow-900': currentSeason === 'summer',
            'text-green-900': currentSeason === 'spring',
          }
        )}>
          Popular Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              title={activity.title}
              description={activity.description}
              icon={activity.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}