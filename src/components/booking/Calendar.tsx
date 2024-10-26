import { useState } from 'react';
import { useThemeStore } from '../../store/themeStore';
import { useBookingStore } from '../../store/bookingStore';
import clsx from 'clsx';

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', 
  '13:00', '14:00', '15:00', '16:00'
];

export default function Calendar() {
  const { currentSeason } = useThemeStore();
  const { bookingDetails, updateBookingDetails } = useBookingStore();
  const [selectedDate, setSelectedDate] = useState<Date | null>(bookingDetails.date);
  const [selectedTime, setSelectedTime] = useState<string | null>(bookingDetails.time);

  // Generate dates for the next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    updateBookingDetails({ date });
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    updateBookingDetails({ time });
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Select Date & Time</h3>
      
      {/* Date selection */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {dates.map((date) => (
          <button
            key={date.toISOString()}
            onClick={() => handleDateSelect(date)}
            className={clsx(
              'p-2 rounded-md text-sm text-center transition-colors',
              selectedDate?.toDateString() === date.toDateString()
                ? {
                    'bg-blue-600 text-white': currentSeason === 'winter',
                    'bg-yellow-600 text-white': currentSeason === 'summer',
                    'bg-green-600 text-white': currentSeason === 'spring',
                  }
                : 'hover:bg-gray-100'
            )}
          >
            <div className="font-medium">
              {date.toLocaleDateString('en-US', { weekday: 'short' })}
            </div>
            <div>
              {date.getDate()}
            </div>
          </button>
        ))}
      </div>

      {/* Time selection */}
      {selectedDate && (
        <div className="grid grid-cols-4 gap-2">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeSelect(time)}
              className={clsx(
                'p-2 rounded-md text-sm transition-colors',
                selectedTime === time
                  ? {
                      'bg-blue-600 text-white': currentSeason === 'winter',
                      'bg-yellow-600 text-white': currentSeason === 'summer',
                      'bg-green-600 text-white': currentSeason === 'spring',
                    }
                  : 'hover:bg-gray-100'
              )}
            >
              {time}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}