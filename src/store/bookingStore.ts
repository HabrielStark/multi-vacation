import { create } from 'zustand';
import { BookingState, Service, BookingDetails } from '../types/booking';

const initialBookingDetails: BookingDetails = {
  participants: 1,
  date: null,
  time: null,
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  specialRequests: ''
};

const services: Service[] = [
  {
    id: '1',
    name: 'Ski Lessons',
    description: 'Private ski lessons for beginners to advanced skiers',
    price: 99.99,
    duration: '2 hours',
    maxParticipants: 1,
    category: 'Skiing',
    season: 'winter'
  },
  {
    id: '2',
    name: 'Snowboard Group Class',
    description: 'Group snowboarding lessons for beginners',
    price: 79.99,
    duration: '3 hours',
    maxParticipants: 6,
    category: 'Snowboarding',
    season: 'winter'
  },
  {
    id: '3',
    name: 'Surf Lessons',
    description: 'Learn to surf with experienced instructors',
    price: 89.99,
    duration: '2 hours',
    maxParticipants: 4,
    category: 'Surfing',
    season: 'summer'
  },
  {
    id: '4',
    name: 'Kayak Tour',
    description: 'Guided kayaking tour along scenic routes',
    price: 69.99,
    duration: '3 hours',
    maxParticipants: 8,
    category: 'Kayaking',
    season: 'summer'
  },
  {
    id: '5',
    name: 'Guided Hiking',
    description: 'Guided hiking tours with experienced mountaineers',
    price: 49.99,
    duration: '4 hours',
    maxParticipants: 10,
    category: 'Hiking',
    season: 'spring'
  },
  {
    id: '6',
    name: 'Mountain Biking Tour',
    description: 'Guided mountain biking tours for all skill levels',
    price: 79.99,
    duration: '3 hours',
    maxParticipants: 6,
    category: 'Biking',
    season: 'spring'
  }
];

export const useBookingStore = create<BookingState>((set) => ({
  services,
  filteredServices: services,
  selectedService: null,
  bookingDetails: initialBookingDetails,
  currentFilter: 'all',
  setSelectedService: (service: Service | null) => set({ selectedService: service }),
  setFilter: (category: string) => 
    set((state) => ({
      currentFilter: category,
      filteredServices: category === 'all' 
        ? state.services 
        : state.services.filter(service => service.category === category)
    })),
  updateBookingDetails: (details: Partial<BookingDetails>) =>
    set((state) => ({
      bookingDetails: { ...state.bookingDetails, ...details }
    })),
  resetBooking: () => set({
    selectedService: null,
    bookingDetails: initialBookingDetails
  })
}));