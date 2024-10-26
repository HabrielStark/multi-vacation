export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  maxParticipants: number;
  season: 'winter' | 'summer' | 'spring' | 'all';
  category: string;
}

export interface BookingDetails {
  participants: number;
  date: Date | null;
  time: string | null;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  specialRequests: string;
}

export interface BookingState {
  services: Service[];
  filteredServices: Service[];
  selectedService: Service | null;
  bookingDetails: BookingDetails;
  setSelectedService: (service: Service | null) => void;
  setFilter: (category: string) => void;
  currentFilter: string;
  updateBookingDetails: (details: Partial<BookingDetails>) => void;
  resetBooking: () => void;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface BookingDate {
  date: Date;
  slots: TimeSlot[];
}