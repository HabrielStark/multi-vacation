import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useThemeStore } from '../../store/themeStore';
import { useBookingStore } from '../../store/bookingStore';
import clsx from 'clsx';

interface BookingConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: 'success' | 'error';
  error?: string;
}

export default function BookingConfirmationModal({ 
  isOpen, 
  onClose, 
  status,
  error 
}: BookingConfirmationModalProps) {
  const { currentSeason } = useThemeStore();
  const { selectedService, bookingDetails, resetBooking } = useBookingStore();

  const handleClose = () => {
    onClose();
    if (status === 'success') {
      resetBooking();
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="text-center">
                  {status === 'success' ? (
                    <CheckCircleIcon className={clsx(
                      "mx-auto h-12 w-12",
                      {
                        'text-blue-600': currentSeason === 'winter',
                        'text-yellow-600': currentSeason === 'summer',
                        'text-green-600': currentSeason === 'spring',
                      }
                    )} />
                  ) : (
                    <XCircleIcon className="mx-auto h-12 w-12 text-red-600" />
                  )}

                  <Dialog.Title
                    as="h3"
                    className="mt-4 text-lg font-medium leading-6 text-gray-900"
                  >
                    {status === 'success' ? 'Booking Confirmed!' : 'Booking Failed'}
                  </Dialog.Title>

                  <div className="mt-2">
                    {status === 'success' ? (
                      <div className="text-sm text-gray-500">
                        <p className="mb-2">
                          Thank you for booking {selectedService?.name}!
                        </p>
                        <p className="mb-2">
                          Date: {bookingDetails.date?.toLocaleDateString()}
                        </p>
                        <p className="mb-2">
                          Time: {bookingDetails.time}
                        </p>
                        <p>
                          We've sent a confirmation email to {bookingDetails.contactEmail}
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm text-red-500">
                        {error || 'An error occurred while processing your booking. Please try again.'}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className={clsx(
                      'w-full rounded-md px-4 py-2 text-sm font-medium text-white',
                      status === 'success' ? {
                        'bg-blue-600 hover:bg-blue-500': currentSeason === 'winter',
                        'bg-yellow-600 hover:bg-yellow-500': currentSeason === 'summer',
                        'bg-green-600 hover:bg-green-500': currentSeason === 'spring',
                      } : 'bg-gray-600 hover:bg-gray-500'
                    )}
                    onClick={handleClose}
                  >
                    {status === 'success' ? 'Done' : 'Close'}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}