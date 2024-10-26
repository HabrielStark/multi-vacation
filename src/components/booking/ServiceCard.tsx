import { Service } from '../../types/booking';
import { useThemeStore } from '../../store/themeStore';
import { useBookingStore } from '../../store/bookingStore';
import clsx from 'clsx';
import { UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { currentSeason } = useThemeStore();
  const { selectedService, setSelectedService } = useBookingStore();

  const isSelected = selectedService?.id === service.id;

  return (
    <div
      onClick={() => setSelectedService(isSelected ? null : service)}
      className={clsx(
        'cursor-pointer rounded-lg p-6 transition-all',
        isSelected ? {
          'ring-2 bg-white shadow-lg': true,
          'ring-blue-500': currentSeason === 'winter',
          'ring-yellow-500': currentSeason === 'summer',
          'ring-green-500': currentSeason === 'spring',
        } : 'bg-white hover:shadow-md'
      )}
    >
      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
      <p className="mt-2 text-sm text-gray-500">{service.description}</p>
      
      <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <ClockIcon className="h-4 w-4" />
          <span>{service.duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <UserGroupIcon className="h-4 w-4" />
          <span>Max {service.maxParticipants}</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className={clsx(
          "text-lg font-semibold",
          {
            'text-blue-600': currentSeason === 'winter',
            'text-yellow-600': currentSeason === 'summer',
            'text-green-600': currentSeason === 'spring',
          }
        )}>
          ${service.price}
        </p>
        <button
          className={clsx(
            'px-4 py-2 rounded-md text-sm font-medium text-white',
            {
              'bg-blue-600 hover:bg-blue-500': currentSeason === 'winter',
              'bg-yellow-600 hover:bg-yellow-500': currentSeason === 'summer',
              'bg-green-600 hover:bg-green-500': currentSeason === 'spring',
            }
          )}
        >
          {isSelected ? 'Selected' : 'Select'}
        </button>
      </div>
    </div>
  );
}