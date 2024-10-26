import { useState } from 'react';
import { useThemeStore } from '../../store/themeStore';
import { useBookingStore } from '../../store/bookingStore';
import BookingConfirmationModal from './BookingConfirmationModal';
import clsx from 'clsx';

export default function BookingForm() {
  const { currentSeason } = useThemeStore();
  const { selectedService, bookingDetails, updateBookingDetails } = useBookingStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<'success' | 'error'>('success');
  const [errorMessage, setErrorMessage] = useState<string>('');

  if (!selectedService) return null;

  const validateForm = () => {
    if (!bookingDetails.date || !bookingDetails.time) {
      return 'Please select a date and time';
    }
    if (!bookingDetails.contactName.trim()) {
      return 'Please enter your name';
    }
    if (!bookingDetails.contactEmail.trim()) {
      return 'Please enter your email';
    }
    if (!bookingDetails.contactPhone.trim()) {
      return 'Please enter your phone number';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setBookingStatus('error');
      setErrorMessage(error);
      setIsModalOpen(true);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setBookingStatus('success');
      setIsModalOpen(true);
    } catch (error) {
      setBookingStatus('error');
      setErrorMessage('An error occurred while processing your booking');
      setIsModalOpen(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="participants" className="block text-sm font-medium text-gray-700">
            Number of Participants
          </label>
          <select
            id="participants"
            value={bookingDetails.participants}
            onChange={(e) => updateBookingDetails({ participants: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
          >
            {Array.from({ length: selectedService.maxParticipants }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Person' : 'People'}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={bookingDetails.contactName}
            onChange={(e) => updateBookingDetails({ contactName: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={bookingDetails.contactEmail}
            onChange={(e) => updateBookingDetails({ contactEmail: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={bookingDetails.contactPhone}
            onChange={(e) => updateBookingDetails({ contactPhone: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            required
          />
        </div>

        <div>
          <label htmlFor="requests" className="block text-sm font-medium text-gray-700">
            Special Requests
          </label>
          <textarea
            id="requests"
            rows={3}
            value={bookingDetails.specialRequests}
            onChange={(e) => updateBookingDetails({ specialRequests: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
          />
        </div>

        <button
          type="submit"
          className={clsx(
            'w-full px-4 py-2 rounded-md text-sm font-medium text-white transition-colors',
            {
              'bg-blue-600 hover:bg-blue-500': currentSeason === 'winter',
              'bg-yellow-600 hover:bg-yellow-500': currentSeason === 'summer',
              'bg-green-600 hover:bg-green-500': currentSeason === 'spring',
            }
          )}
        >
          Confirm Booking
        </button>
      </div>

      <BookingConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        status={bookingStatus}
        error={errorMessage}
      />
    </form>
  );
}