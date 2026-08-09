export type PageTab = 'home' | 'services' | 'prep' | 'about' | 'contact';

export type DemographicGroup = 'pregnant_women' | 'men' | 'children' | 'youth' | 'seniors';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: string;
  demographics: DemographicGroup[];
  durationMinutes: number;
  startingPrice?: string;
  prepTitle: string;
  prepSummary: string;
  features: string[];
  keyBenefits: string[];
  clinicalIndications: string[];
  imageUrl: string;
  isPopular?: boolean;
}

export interface AppointmentData {
  id: string;
  serviceId: string;
  serviceName: string;
  patientName: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  demographic: string;
  dob: string;
  hasReferral: boolean;
  referralDoctorName?: string;
  notes?: string;
  status: 'confirmed' | 'pending' | 'completed';
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  suggestions?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  location: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'preparation' | 'services' | 'insurance' | 'emergency';
}

export interface ScanPrepGuide {
  id: string;
  serviceId: string;
  title: string;
  hydrationRule: string;
  dietRule: string;
  clothingRule: string;
  checkInNotice: string;
  whatToBring: string[];
  faqs: { q: string; a: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  experienceYears: number;
  photo: string;
  bio: string;
  specialties: string[];
  socialLinks?: {
    email?: string;
    linkedin?: string;
  };
}

