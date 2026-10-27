export type Role = 'super_admin' | 'team_lead' | 'editor';

export type ProjectType = 'regular' | 'yearly';

export interface Project {
  id: string;
  slug: string;
  title: string;
  type: ProjectType;
  shortDesc: string;
  content: string;
  coverImage: string;
  timing?: string;
  location?: string;
  admissionNote?: string;
  admissionsOpen: boolean;
  isActive: boolean;
  sortOrder: number;
  highlights?: string[];
  features?: string[];
}

export interface DriveEdition {
  id: string;
  projectId: string;
  projectSlug: string;
  year: number;
  phase?: string;
  title: string;
  summary: string;
  beneficiariesCount: number;
  itemsCount: number;
  amountSpent: number;
  eventDate: string;
  reportUrl?: string;
  coverImage: string;
  photos: string[];
}

export interface Batch {
  id: string;
  projectId: string;
  name: string;
  genderGroup: 'boys' | 'girls' | 'women' | 'mixed';
  startDate: string;
  endDate: string;
  seats: number;
  status: 'upcoming' | 'running' | 'completed';
}

export interface Certificate {
  id: string;
  certificateNo: string;
  holderName: string;
  projectId: string;
  projectName: string;
  batchName: string;
  issueDate: string;
  isValid: boolean;
  grade?: string;
  skillsAcquired: string[];
}

export interface Story {
  id: string;
  projectId: string;
  projectName: string;
  personName: string;
  role: string;
  quote: string;
  content: string;
  photo: string;
  year: number;
  isFeatured: boolean;
  consentGiven: boolean;
}

export interface StudentResult {
  id: string;
  year: number;
  classLevel: string;
  studentName: string;
  marks: string;
  position: string;
  photo: string;
  consentGiven: boolean;
}

export interface HistoryEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  photo?: string;
  sortOrder: number;
}

export interface Session {
  id: string;
  label: string; // e.g. "2025-26"
  startYear: number;
  endYear: number;
  isCurrent: boolean;
  groupPhoto: string;
  theme?: string;
}

export type CabinetLevel = 1 | 2 | 3 | 4 | 5;
export type CabinetBody = 'cabinet' | 'junior_cabinet';

export interface CabinetMember {
  id: string;
  sessionId: string;
  name: string;
  photo: string;
  department: string;
  regNo?: string; // admin only
  phone?: string; // admin only
  email?: string; // admin only
  designation: string;
  teamId: string;
  teamName: string;
  level: CabinetLevel; // 1: Cabinet & Heads, 2: Co-Heads, 3: Members, 4: Exec, 5: General
  body: CabinetBody;
  isLead: boolean;
}

export interface Team {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  responsibilities: string[];
  sortOrder: number;
  iconName: string;
  leadName?: string;
}

export interface ImpactStat {
  id: string;
  key: string;
  label: string;
  value: string;
  numberValue: number;
  suffix?: string;
  icon: string;
  sortOrder: number;
}

export type VolunteerStatus = 'pending' | 'interview' | 'accepted' | 'rejected';

export interface VolunteerApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  regNo: string;
  department: string;
  semester: string;
  teamId: string;
  teamName: string;
  skills: string;
  portfolioUrl?: string;
  reason: string;
  status: VolunteerStatus;
  reviewNotes?: string;
  createdAt: string;
}

export type DonationType = 'one_time' | 'monthly_sponsor' | 'zakat' | 'sadqah';
export type DonationStatus = 'pending' | 'verified' | 'rejected';

export interface Donation {
  id: string;
  donorName: string;
  email: string;
  phone: string;
  amount: number;
  type: DonationType;
  purpose: string;
  method: 'Easypaisa' | 'JazzCash' | 'Bank Transfer';
  proofUrl: string;
  status: DonationStatus;
  isAnonymous: boolean;
  createdAt: string;
  verifiedBy?: string;
  verifiedAt?: string;
  rejectReason?: string;
}

export interface Sponsorship {
  id: string;
  donorName: string;
  email: string;
  phone: string;
  monthlyAmount: number;
  tierName: string;
  childProfileNote: string;
  startDate: string;
  status: 'active' | 'paused' | 'ended';
  lastPaidMonth: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  category: string;
  status: 'published' | 'draft';
}

export interface GalleryAlbum {
  id: string;
  title: string;
  eventDate: string;
  category: string;
  coverImage: string;
  images: { url: string; caption: string }[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}
