import {
  Project,
  DriveEdition,
  Certificate,
  Story,
  StudentResult,
  HistoryEvent,
  Session,
  CabinetMember,
  Team,
  ImpactStat,
  VolunteerApplication,
  Donation,
  Sponsorship,
  BlogPost,
  GalleryAlbum,
  ContactMessage,
} from './types';

export const TEAMS_DATA: Team[] = [
  {
    id: 'team-1',
    slug: 'pehla-qadam',
    name: 'Pehla Qadam Team',
    tagline: 'Teaching 70+ underprivileged children daily near Gate 2, UET Taxila',
    description: 'Manages the day-to-day operations of Pehla Qadam School, including volunteer teaching schedules, student admissions, attendance, exams, and curriculum development from nursery to matriculation.',
    responsibilities: [
      'Coordinate daily evening school classes (nursery to matric)',
      'Organize volunteer teachers from UET student body',
      'Manage midterm, final exams and result declarations',
      'Oversee student welfare, health checkups, and stationery',
    ],
    sortOrder: 1,
    iconName: 'GraduationCap',
    leadName: 'Engr. Haris Tariq',
  },
  {
    id: 'team-2',
    slug: 'it-box',
    name: 'IT Box Team',
    tagline: 'Empowering youth with free computer literacy & freelancing skills',
    description: 'Runs certified computer training batches for boys and girls in dedicated evening sessions. Covers basic IT, graphic design, web basics, and freelancing on international platforms.',
    responsibilities: [
      'Operate 4 batches per year (2 boys, 2 girls in separate sessions)',
      'Deliver practical computer lab courses (25-30 students/batch)',
      'Mentor students on Upwork/Fiverr freelancing',
      'Issue and verify completion certificates',
    ],
    sortOrder: 2,
    iconName: 'Laptop',
    leadName: 'Hamza Naveed',
  },
  {
    id: 'team-3',
    slug: 'chaddar',
    name: 'Chaddar Team',
    tagline: 'Stitching school empowering needy women towards financial independence',
    description: 'Coordinates the daily morning vocational stitching classes for underprivileged women in Taxila. Equips mothers and young women with cutting, sewing, and tailoring expertise.',
    responsibilities: [
      'Conduct daily sessions from 9:00 AM to 12:00 PM',
      'Provide sewing machines, raw fabric, and stitching tools',
      'Assess craftsmanship and grant formal skill certificates',
      'Assist graduates in taking paid commercial tailoring orders',
    ],
    sortOrder: 3,
    iconName: 'Scissors',
    leadName: 'Syeda Maryam Zahra',
  },
  {
    id: 'team-4',
    slug: 'csp',
    name: 'Child Sponsorship Program (CSP)',
    tagline: 'Connecting benevolent donors with children needing monthly educational support',
    description: 'Manages monthly child sponsorships that sustain Pehla Qadam School, IT Box and Chaddar operations. Ensures transparent donor reporting, fee stipends, and sponsor communication.',
    responsibilities: [
      'Track and verify recurring monthly donor contributions',
      'Maintain sponsor-child accountability ledgers',
      'Dispatch quarterly general progress digests to patrons',
      'Bridge urgent educational funding gaps',
    ],
    sortOrder: 4,
    iconName: 'HeartHandshake',
    leadName: 'Abdullah Khan',
  },
  {
    id: 'team-5',
    slug: 'survey',
    name: 'Survey Team',
    tagline: 'Meticulous on-ground verification ensuring aid reaches the truly deserving',
    description: 'Conducts confidential door-to-door field verification across Taxila, Wah Cantt, and surrounding suburbs prior to every ration distribution, lihaf drive, and school fee assistance case.',
    responsibilities: [
      'Conduct thorough on-ground physical eligibility checks',
      'Ensure zero discrimination and utmost beneficiary dignity',
      'Maintain secure, anonymous survey registries',
      'Audit family economic vulnerability metrics',
    ],
    sortOrder: 5,
    iconName: 'ClipboardCheck',
    leadName: 'Bilal Mustafa',
  },
  {
    id: 'team-6',
    slug: 'distribution',
    name: 'Distribution Team',
    tagline: 'Logistical execution of rations, uniforms, stationery, and winter warmers',
    description: 'Oversees procurement, packing, warehouse storage, and orderly distribution during Ramadan Ration drives, winter Lihaf campaigns, and school kit handouts.',
    responsibilities: [
      'Procure food staples in bulk with strict quality control',
      'Package 500+ food parcels and winter kits',
      'Manage distribution tokens and respectful handovers',
      'Coordinate transport logistics across Taxila region',
    ],
    sortOrder: 6,
    iconName: 'Truck',
    leadName: 'Osama Bin Tariq',
  },
  {
    id: 'team-7',
    slug: 'media-coverage',
    name: 'Media & Coverage Team',
    tagline: 'Visual storytelling, photography, videography and social presence',
    description: 'Captures ground activities, drives, and classroom moments while strictly maintaining beneficiary dignity and child protection consent protocols. Manages official media channels.',
    responsibilities: [
      'Document on-ground distributions and school activities',
      'Produce video documentaries and recap reels',
      'Manage social media broadcasts (Facebook, Instagram, LinkedIn)',
      'Enforce strict guardian consent and child privacy guidelines',
    ],
    sortOrder: 7,
    iconName: 'Camera',
    leadName: 'Zain Ul Abideen',
  },
  {
    id: 'team-8',
    slug: 'graphics',
    name: 'Graphics Team',
    tagline: 'Visual identity, campaign banners, branding and certificates',
    description: 'Designs evocative flyers, drive awareness posters, social media banners, annual report layouts, and authentic certificate designs for IT Box and Chaddar.',
    responsibilities: [
      'Design campaign artwork for Ramadan, Lihaf, and Uniform drives',
      'Develop official verifiable certificate templates',
      'Maintain brand consistency across all digital & physical collateral',
      'Craft infographical impact reports',
    ],
    sortOrder: 8,
    iconName: 'Palette',
    leadName: 'Ayesha Siddiqua',
  },
  {
    id: 'team-9',
    slug: 'project-management',
    name: 'Project Management Team',
    tagline: 'Operational backbone, volunteer onboarding, scheduling & execution',
    description: 'Coordinates cross-team synchronization, schedules major campaigns, reviews volunteer applications, conducts interviews, and ensures seamless execution of society milestones.',
    responsibilities: [
      'Process and interview volunteer applicants from UET Taxila',
      'Track project timelines and resource allocations',
      'Liaise with UET Administration and Faculty Advisor',
      'Organize society orientations and capacity building workshops',
    ],
    sortOrder: 9,
    iconName: 'KanbanSquare',
    leadName: 'Saad Ur Rehman',
  },
  {
    id: 'team-10',
    slug: 'documentation',
    name: 'Documentation Team',
    tagline: 'Preserving 10+ years of institutional memory, records and audit reports',
    description: 'Drafts comprehensive drive reports, maintains official meeting minutes, archives cabinet session rosters, chronicles success stories, and produces annual audit documentation.',
    responsibilities: [
      'Compile transparent post-drive financial and impact reports',
      'Maintain historical cabinet archives since 2014 founding',
      'Document inspiring student pass-out and graduate success stories',
      'Prepare society portfolio and accreditation dossiers',
    ],
    sortOrder: 10,
    iconName: 'FileText',
    leadName: 'Fatima Tu Zahra',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    slug: 'pehla-qadam',
    title: 'Pehla Qadam School',
    type: 'regular',
    shortDesc: 'Free evening school providing quality nursery to matric education to 70+ underprivileged children, run by passionate UET Taxila students.',
    content: `Founded in 2015, Pehla Qadam School is the flagship educational initiative of UMEED E SUBH. Located just outside Gate 2 of UET Taxila, the school opens its doors every evening to children from impoverished families who would otherwise be deprived of schooling or forced into child labor.

The school covers classes from Nursery through Class 10 (Matriculation). Every single student attends 100% free of charge—no admission fee, no monthly tuition, and no hidden costs. All books, uniforms, stationery, bags, and daily refreshments are provided entirely through our Child Sponsorship Program (CSP).

Our teaching faculty consists exclusively of dedicated engineering and computer science students from UET Taxila who volunteer their evenings. With a structured academic syllabus, periodic evaluations, and personalized mentorship, our children have consistently achieved outstanding marks in Rawalpindi Board examinations.`,
    coverImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    timing: 'Monday to Friday: 3:30 PM - 6:30 PM',
    location: 'Near Gate 2, UET Taxila Campus, Taxila, Punjab',
    admissionNote: 'Admissions are handled exclusively IN PERSON. Parents/guardians must visit the school premises near Gate 2 with the child\'s B-Form and parent CNIC copy. No online application is accepted.',
    admissionsOpen: true,
    isActive: true,
    sortOrder: 1,
    highlights: [
      '70+ Enrolled Children in Regular Classes',
      'Nursery to Matriculation Curriculum',
      '100% Free Tuition, Books, Uniforms & Bags',
      '10+ Years of Ground Operational History',
      'Taught by UET Taxila Engineering Undergraduates',
    ],
    features: [
      'Formal evaluation system with mid-terms and finals',
      'Character building and Islamic etiquette sessions',
      'Annual science exhibition and sports gala',
      'Free medical & dental health camps biannually',
    ],
  },
  {
    id: 'proj-2',
    slug: 'it-box',
    title: 'IT Box Computer Training Center',
    type: 'regular',
    shortDesc: 'Free computer lab training center offering 2 batches for boys & 2 for girls annually, teaching digital literacy, design, and freelancing.',
    content: `Launched over 7 years ago, IT Box bridges the acute digital divide for youth in Taxila. In today's digital era, computer literacy is no longer a luxury—it is an economic lifeline.

IT Box runs four structured cohorts per year: two dedicated batches for boys and two separate, culturally comfortable batches for girls. Each batch hosts 25 to 30 students in our computer lab equipped with high-speed internet and modern workstations.

The curriculum starts with foundational digital skills, MS Office, and internet security, before branching into Graphic Design (Photoshop & Illustrator), Web Development fundamentals, and practical Freelancing guidance (Upwork, Fiverr, local client acquisition). Graduates receive verifiable digital certificates upon passing rigorous final project submissions.`,
    coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    timing: 'Boys: 4:00 PM - 5:30 PM | Girls: 2:00 PM - 3:30 PM (Evening)',
    location: 'IT Lab Facility near Gate 2, UET Taxila',
    admissionNote: 'Admissions open twice a year. Prospective candidates must visit in-person for basic screening and interview. Seats are limited to 30 per cohort to ensure individualized workstations.',
    admissionsOpen: true,
    isActive: true,
    sortOrder: 2,
    highlights: [
      '7+ Years of Operations',
      '25-30 Students per Cohort',
      'Separate Batches for Boys & Girls',
      'Verifiable QR-enabled Digital Certificates',
      'Freelancing & Digital Independence Focus',
    ],
    features: [
      'Hands-on lab work with 1-on-1 machine allocation',
      'Guidance on Fiverr, Upwork and freelancing portfolio creation',
      'Practical software modules: Canva, Photoshop, Web Basics',
      'Lifetime alumni mentorship network',
    ],
  },
  {
    id: 'proj-3',
    slug: 'chaddar',
    title: 'Chaddar Stitching School',
    type: 'regular',
    shortDesc: 'Vocational stitching, cutting, and tailoring academy empowering underprivileged women with financial self-reliance.',
    content: `Chaddar is our dedicated vocational training initiative tailored for widowed, underprivileged, and deserving women of the Taxila community. 

Operating daily from 9:00 AM to 12:00 PM, Chaddar provides a safe, dignified, and encouraging environment where women master the art of drafting, cutting, sewing, embroidery, and dress finishing under the guidance of veteran female instructors.

Every tool—from heavy-duty industrial sewing machines, scissors, pattern papers to test fabrics—is provided free of cost. Upon graduation, trainees receive certified diplomas and assistance in establishing home-based boutique businesses or securing bulk stitching contracts.`,
    coverImage: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80',
    timing: 'Monday to Saturday: 9:00 AM - 12:00 PM',
    location: 'Vocational Wing near Gate 2, UET Taxila',
    admissionNote: 'Admissions for new stitching batches are handled in person. Female applicants may visit our center during morning hours (9am - 12pm) with CNIC copy.',
    admissionsOpen: false,
    isActive: true,
    sortOrder: 3,
    highlights: [
      'Daily 3-Hour Intensive Morning Training',
      '100% Free Industrial Sewing Machines & Consumables',
      'Vocational Tailoring & Drafting Certification',
      'Dignified Economic Independence for Mothers',
    ],
    features: [
      'Professional cutting master and seamstress instructors',
      'Pattern making for shirts, trousers, traditional wear and children clothes',
      'Machine maintenance and troubleshooting training',
      'Micro-entrepreneurship coaching for home-based stitching orders',
    ],
  },
  {
    id: 'proj-4',
    slug: 'csp',
    title: 'Child Sponsorship Program (CSP)',
    type: 'regular',
    shortDesc: 'Sustain a child\'s education with a recurring monthly contribution covering tuition, uniform, books, and nutrition.',
    content: `The Child Sponsorship Program (CSP) is the beating heart of UMEED E SUBH. It allows generous individuals, overseas Pakistanis, and alumni to directly sponsor the monthly educational expenses of children studying at Pehla Qadam School.

For just PKR 3,500 per month, a sponsor completely takes care of a child's:
1. School supplies, books, notebooks, and stationery
2. Tailored school uniform, sweater, and sturdy shoes
3. Daily nutritious milk/juice refreshments
4. Medical screenings and basic healthcare
5. Classroom infrastructure and volunteer teaching stipends

Sponsors receive periodic general digest updates detailing school examination results, sports days, and health checkup logs. In accordance with strict child safeguarding policies, no vulnerable child is exploited or exposed without guardian consent.`,
    coverImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    timing: 'Ongoing Year-Round Program',
    location: 'Administered at UET Taxila',
    admissionNote: 'Donors may register online. Monthly contributions can be sent via Easypaisa, JazzCash, or Direct Bank Transfer.',
    admissionsOpen: true,
    isActive: true,
    sortOrder: 4,
    highlights: [
      'PKR 3,500/Month Full Child Sponsorship',
      'Covers Uniform, Books, Shoes & Refreshments',
      'Quarterly Accountability & Progress Updates',
      '100% Transparent Financial Records',
    ],
    features: [
      'Direct correlation to keeping a child out of brick kilns & workshops',
      'Zakat and Sadqah eligible program',
      'Digital proof upload with immediate acknowledgment receipt',
      'Dedicated sponsor support team',
    ],
  },
  {
    id: 'proj-5',
    slug: 'ramadan-ration-drive',
    title: 'Ramadan Ration Drive',
    type: 'yearly',
    shortDesc: 'Providing comprehensive food rations in 2 phases during holy Ramadan to 500+ needy families verified by our Survey Team.',
    content: `Each year during the holy month of Ramadan, UMEED E SUBH conducts its flagship Ramadan Ration Drive in two distinct phases: Phase 1 prior to the 1st of Ramadan, and Phase 2 at mid-Ramadan to ensure families have ample provisions for Eid-ul-Fitr.

Every ration pack is carefully assembled with 20kg flour (atta), 5kg basmati rice, 5kg sugar, 5L cooking oil, pulses (daal chana, daal moong, daal masoor), tea, dry milk, spices, dates (khajoor), and sherbet.

Recipients are identified through rigorous, confidential on-ground surveys by our Survey Team. Distribution takes place with maximum dignity through pre-assigned confidential tokens to avoid queues and overcrowding.`,
    coverImage: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
    timing: 'Annual Ramadan Campaign (Phase 1 & Phase 2)',
    location: 'Taxila, Wah Cantt, and surrounding villages',
    admissionNote: 'Beneficiary data collection is handled offline by our independent Survey Team. This main website displays transparent post-drive impact reports and financial summaries.',
    admissionsOpen: false,
    isActive: true,
    sortOrder: 5,
    highlights: [
      '2 Dedicated Phases per Ramadan',
      'Full Month Food Pack for a Family of 6-8',
      'Rigorous Door-to-Door Survey Verification',
      'Dignified Tokenized Handover with Zero Chaos',
    ],
    features: [
      'Strict quality check on all staple grocery items',
      'Doorstep delivery for elderly and disabled heads of household',
      'Detailed itemized cost audits published after every drive',
    ],
  },
  {
    id: 'proj-6',
    slug: 'uniform-distribution-drive',
    title: 'Uniform Distribution Drive',
    type: 'yearly',
    shortDesc: 'Distributing warm sweaters, tailored shirts, trousers, and quality shoes to students across 6 underprivileged government schools.',
    content: `In the biting winter of northern Punjab, hundreds of children in rural government primary schools attend classes in torn sandals without warm sweaters.

Our annual Uniform Distribution Drive targets six identified public primary schools around Taxila. Every child is measured individually, and receives:
- Warm knit woolen sweater
- High-grade school shirt and trousers/shalwar
- Durable leather school shoes and warm socks

This drive has demonstrated a measurable boost in school attendance during winter months and prevents dropout rates caused by economic hardship.`,
    coverImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    timing: 'Annual November - December Campaign',
    location: '6 Partner Government Primary Schools in Taxila Tehsil',
    admissionNote: 'Coordinated directly through school headmasters and on-ground school inspections.',
    admissionsOpen: false,
    isActive: true,
    sortOrder: 6,
    highlights: [
      '6 Identified Government Schools Covered',
      'Complete Winter Uniform Kit (Sweater, Clothes, Shoes, Socks)',
      'Individual Child Sizing for Perfect Fit',
      'Proven 40% Increase in Winter Class Attendance',
    ],
  },
  {
    id: 'proj-7',
    slug: 'stationery-distribution-drive',
    title: 'Stationery Distribution Drive',
    type: 'yearly',
    shortDesc: 'Equipping primary school students with bags, notebooks, geometry boxes, and writing instruments at the onset of the academic year.',
    content: `Lack of a simple notebook or pen often forces underprivileged children into shame and absenteeism. Our Stationery Distribution Drive equips every child with a complete back-to-school package.

Packages include waterproof backpacks, notebooks for all subjects, geometry sets, ballpoints, pencils, erasers, sharpeners, and coloring supplies. We coordinate with local teachers to ensure every child starts the academic session on an equal footing.`,
    coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    timing: 'Annual April Campaign (New Academic Session)',
    location: 'Government & Partner Primary Schools in Taxila',
    admissionsOpen: false,
    isActive: true,
    sortOrder: 7,
    highlights: [
      'Comprehensive School Bags with Full Stationery Kits',
      'Zero Cost to Needy Parents',
      'Directly Reduces Early School Dropout Rates',
    ],
  },
  {
    id: 'proj-8',
    slug: 'lihaf-drive',
    title: 'Winter Lihaf & Warmth Drive',
    type: 'yearly',
    shortDesc: 'Distributing thick quilts (lihaf), blankets, and warm winter garments across 2 phases to protect vulnerable families against freezing cold.',
    content: `Winter in Taxila and the surrounding Potohar region brings freezing night temperatures. Thousands of laborers, brick-kiln workers, and destitute widows live in mud and corrugated tin shelters without adequate bedding.

The Lihaf Drive operates in two phases each winter. High-quality, double-stitched cotton-filled quilts (Lihaf) and heavy fleece blankets are distributed directly to households verified by our field survey teams.`,
    coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    timing: 'Annual December - January Campaign (Phase 1 & 2)',
    location: 'Taxila, Hassan Abdal outskirts, and Khanpur border',
    admissionsOpen: false,
    isActive: true,
    sortOrder: 8,
    highlights: [
      'Double-stitched High Quality Cotton Quilts',
      'Two Phases per Winter Season',
      'Over 2,400+ Quilts Distributed Since Inception',
    ],
  },
  {
    id: 'proj-9',
    slug: 'fee-cases',
    title: 'Emergency Fee Cases & Family Support',
    type: 'yearly',
    shortDesc: 'Discreet, case-by-case financial support for students facing imminent dropout due to sudden family tragedy or disability.',
    content: `When a breadwinner falls chronically ill or passes away, children\'s education is often the first casualty. UMEED E SUBH provides discreet, strictly audited emergency educational fee grants.

To preserve the sanctity and dignity of beneficiaries, no personal names, photos, or identifying family details are ever published publicly. The society verifies hospital reports, death certificates, and fee vouchers before approving emergency assistance.`,
    coverImage: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80',
    timing: 'Emergency Need-Based Throughout the Year',
    location: 'Taxila & Surrounding Regions',
    admissionsOpen: false,
    isActive: true,
    sortOrder: 9,
    highlights: [
      'Strictly Confidential & Dignified Process',
      'Direct Verification with Educational Institutions',
      'Immediate Intervention Preventing Permanent Dropouts',
    ],
  },
];

export const DRIVE_EDITIONS_DATA: DriveEdition[] = [
  {
    id: 'drive-ramadan-2026-p1',
    projectId: 'proj-5',
    projectSlug: 'ramadan-ration-drive',
    year: 2026,
    phase: 'Phase 1',
    title: 'Ramadan Ration Drive 2026 - Phase 1 Pre-Ramadan Relief',
    summary: 'Distributed comprehensive 1-month grocery rations to 310 verified deserving families across Taxila, Faisal Colony, and Sarai Khola before the start of Ramadan.',
    beneficiariesCount: 310,
    itemsCount: 310,
    amountSpent: 2790000,
    eventDate: 'February 2026',
    reportUrl: '/reports/ramadan-2026-phase-1.pdf',
    coverImage: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'drive-lihaf-2025-p2',
    projectId: 'proj-8',
    projectSlug: 'lihaf-drive',
    year: 2025,
    phase: 'Phase 2',
    title: 'Winter Lihaf Drive 2025 - Phase 2 Severe Winter Outreach',
    summary: 'Delivered 350 warm cotton quilts and wool blankets to impoverished labor colonies and brick-kiln families during sub-zero temperatures.',
    beneficiariesCount: 350,
    itemsCount: 350,
    amountSpent: 1225000,
    eventDate: 'January 2025',
    reportUrl: '/reports/lihaf-drive-2025-p2.pdf',
    coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'drive-uniform-2025',
    projectId: 'proj-6',
    projectSlug: 'uniform-distribution-drive',
    year: 2025,
    phase: 'Complete',
    title: 'Uniform & Warm Shoes Drive 2025',
    summary: 'Fitted 420 boys and girls across 6 public primary schools with brand new winter sweaters, tailored shirts, trousers, and leather boots.',
    beneficiariesCount: 420,
    itemsCount: 840,
    amountSpent: 1680000,
    eventDate: 'November 2025',
    reportUrl: '/reports/uniform-drive-2025.pdf',
    coverImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'drive-ramadan-2025-p2',
    projectId: 'proj-5',
    projectSlug: 'ramadan-ration-drive',
    year: 2025,
    phase: 'Phase 2',
    title: 'Ramadan Ration Drive 2025 - Mid-Month & Eid Packs',
    summary: 'Supplied 280 family packages with Eid sweets, cooking oil, rice and staples to ensure joyous Eid celebrations for all.',
    beneficiariesCount: 280,
    itemsCount: 280,
    amountSpent: 2380000,
    eventDate: 'April 2025',
    reportUrl: '/reports/ramadan-2025-p2.pdf',
    coverImage: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    photos: [],
  },
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'cert-1',
    certificateNo: 'UES-ITB-2024-B1-042',
    holderName: 'Muhammad Hamza',
    projectId: 'proj-2',
    projectName: 'IT Box Computer Training Center',
    batchName: 'Batch 6 (Boys) - Digital Skills & Freelancing',
    issueDate: 'December 20, 2024',
    isValid: true,
    grade: 'A+ (Distinction)',
    skillsAcquired: ['Computer Fundamentals', 'Graphic Design & Canva', 'Web Development Essentials', 'Fiverr & Upwork Freelancing'],
  },
  {
    id: 'cert-2',
    certificateNo: 'UES-CHD-2024-019',
    holderName: 'Fatima Bibi',
    projectId: 'proj-3',
    projectName: 'Chaddar Stitching School',
    batchName: 'Vocational Stitching Batch 2024-B',
    issueDate: 'November 15, 2024',
    isValid: true,
    grade: 'A (Excellent)',
    skillsAcquired: ['Pattern Cutting', 'Industrial Sewing Machine Operation', 'Traditional Dress Drafting', 'Quality Finishing'],
  },
  {
    id: 'cert-3',
    certificateNo: 'UES-ITB-2023-B2-118',
    holderName: 'Ayesha Malik',
    projectId: 'proj-2',
    projectName: 'IT Box Computer Training Center',
    batchName: 'Batch 5 (Girls) - Graphic Design Track',
    issueDate: 'August 10, 2023',
    isValid: true,
    grade: 'A+ (Distinction)',
    skillsAcquired: ['Adobe Photoshop', 'Social Media Branding', 'Vector Art', 'Client Communication'],
  },
  {
    id: 'cert-4',
    certificateNo: 'UES-ITB-2025-B1-005',
    holderName: 'Bilal Ahmed',
    projectId: 'proj-2',
    projectName: 'IT Box Computer Training Center',
    batchName: 'Batch 7 (Boys) - Applied Digital Literacy',
    issueDate: 'January 18, 2025',
    isValid: true,
    grade: 'A',
    skillsAcquired: ['Office Automation', 'Data Management', 'Intro to Programming', 'Online Workflows'],
  },
];

export const STORIES_DATA: Story[] = [
  {
    id: 'story-1',
    projectId: 'proj-1',
    projectName: 'Pehla Qadam School',
    personName: 'Tariq Mehmood',
    role: 'Former Student, Now College Scholar',
    quote: 'Without Pehla Qadam, I would be working at an auto mechanic shop today. They gave me books, belief, and a future.',
    content: 'Tariq joined Pehla Qadam School in Class 4 after his father, a daily-wage laborer, could no longer afford school fees. Supported by a CSP sponsor, Tariq received daily evening tutoring from UET engineering students. In 2024, Tariq cleared his Matric Board examinations with 92% marks and secured a scholarship at a renowned government college in Taxila.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    year: 2024,
    isFeatured: true,
    consentGiven: true,
  },
  {
    id: 'story-2',
    projectId: 'proj-3',
    projectName: 'Chaddar Stitching School',
    personName: 'Kulsoom Akhtar',
    role: 'Chaddar Graduate & Home Boutique Owner',
    quote: 'Chaddar taught me how to hold scissors with dignity. Today I pay my children\'s school fees with my own earnings.',
    content: 'After losing her husband, Kulsoom struggled to feed her three young children. She enrolled in Chaddar\'s 6-month stitching diploma. Upon graduation, the society helped her acquire a sewing machine. She now runs a thriving home boutique in Sarai Khola, stitching bridal suits and children\'s dresses.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    year: 2024,
    isFeatured: true,
    consentGiven: true,
  },
  {
    id: 'story-3',
    projectId: 'proj-2',
    projectName: 'IT Box',
    personName: 'Usman Raza',
    role: 'IT Box Batch 4 Alumnus & Freelancer',
    quote: 'The mentors at IT Box stayed with us after hours to teach us how to write our first Upwork proposal.',
    content: 'Usman had never touched a computer until joining IT Box in 2022. Under the mentorship of UET Computer Engineering volunteers, he learned graphic design and portfolio presentation. Today, Usman earns over $500 monthly on international freelance platforms, completely transforming his family\'s economic standing.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    year: 2023,
    isFeatured: true,
    consentGiven: true,
  },
];

export const RESULTS_DATA: StudentResult[] = [
  {
    id: 'res-1',
    year: 2025,
    classLevel: 'Class 8 (Middle Board)',
    studentName: 'Zainab Bibi',
    marks: '94.2%',
    position: '1st in Pehla Qadam',
    photo: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
    consentGiven: true,
  },
  {
    id: 'res-2',
    year: 2025,
    classLevel: 'Class 8 (Middle Board)',
    studentName: 'Ali Raza',
    marks: '91.8%',
    position: '2nd in Pehla Qadam',
    photo: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80',
    consentGiven: true,
  },
  {
    id: 'res-3',
    year: 2024,
    classLevel: 'Matric (Rawalpindi Board)',
    studentName: 'Tariq Mehmood',
    marks: '1012 / 1100 (92.0%)',
    position: 'Grade A1 (Top Honor)',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    consentGiven: true,
  },
  {
    id: 'res-4',
    year: 2024,
    classLevel: 'Class 5 Primary Board',
    studentName: 'Sanaullah',
    marks: '89.5%',
    position: '3rd in Pehla Qadam',
    photo: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80',
    consentGiven: true,
  },
];

export const HISTORY_EVENTS_DATA: HistoryEvent[] = [
  {
    id: 'hist-1',
    year: 2014,
    title: 'The Spark: Inception at UET Taxila',
    description: 'A cohort of compassionate engineering undergraduates at University of Engineering and Technology, Taxila, noticed underprivileged children wandering near Gate 2. United by the vision of "A Struggle for Literate Pakistan", UMEED E SUBH was formally established.',
    photo: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    sortOrder: 1,
  },
  {
    id: 'hist-2',
    year: 2015,
    title: 'Foundation of Pehla Qadam School',
    description: 'Pehla Qadam opens its very first makeshift classroom near Gate 2 with 15 children sitting on mats. UET students take turns teaching evening classes after completing their own university engineering lectures.',
    photo: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    sortOrder: 2,
  },
  {
    id: 'hist-3',
    year: 2017,
    title: 'Launch of Ramadan Ration & Lihaf Campaigns',
    description: 'Expanding beyond education to community welfare, the society launches its first structured door-to-door food relief drive for 100 families and winter quilt distributions.',
    photo: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    sortOrder: 3,
  },
  {
    id: 'hist-4',
    year: 2019,
    title: 'IT Box Computer Lab Inauguration',
    description: 'Recognizing that computer skills are essential for true youth empowerment, the IT Box laboratory is established with generous donor support, offering free digital literacy and freelancing tracks.',
    photo: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    sortOrder: 4,
  },
  {
    id: 'hist-5',
    year: 2021,
    title: 'Chaddar Stitching School Established',
    description: 'To empower mothers and financially vulnerable women, the Chaddar vocational sewing center is founded, providing daily morning cutting and tailoring instruction with formal certification.',
    photo: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80',
    sortOrder: 5,
  },
  {
    id: 'hist-6',
    year: 2022,
    title: 'Child Sponsorship Program (CSP) Formalized',
    description: 'Transitioned student sponsorships into an institutionalized, transparent recurring framework, enabling alumni and donors across Pakistan and abroad to sustain enrolled children seamlessly.',
    photo: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    sortOrder: 6,
  },
  {
    id: 'hist-7',
    year: 2024,
    title: 'A Decade of Service (10-Year Milestone)',
    description: 'Celebrating 10 uninterrupted years of grassroots impact with over 70 regular school students, 400+ vocational graduates, and thousands of families fed across Taxila.',
    photo: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    sortOrder: 7,
  },
  {
    id: 'hist-8',
    year: 2026,
    title: 'Digital Innovation & QR Verification Launch',
    description: 'Launch of the modern UMEED E SUBH digital portal, verified online certificate validation, and digital sponsor tracking for institutional scalability.',
    photo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    sortOrder: 8,
  },
];

export const SESSIONS_DATA: Session[] = [
  {
    id: 'session-2025-26',
    label: '2025-26',
    startYear: 2025,
    endYear: 2026,
    isCurrent: true,
    groupPhoto: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    theme: 'Dedication, Dignity & Digital Empowerment',
  },
  {
    id: 'session-2024-25',
    label: '2024-25',
    startYear: 2024,
    endYear: 2025,
    isCurrent: false,
    groupPhoto: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    theme: '10 Years of Unbroken Hope',
  },
  {
    id: 'session-2023-24',
    label: '2023-24',
    startYear: 2023,
    endYear: 2024,
    isCurrent: false,
    groupPhoto: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
    theme: 'Building Sustainable Foundations',
  },
];

export const CABINET_MEMBERS_DATA: CabinetMember[] = [
  // 2025-26 Cabinet & Heads (Level 1)
  {
    id: 'mem-1',
    sessionId: 'session-2025-26',
    name: 'Muhammad Daniyal',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    department: 'Civil Engineering, Session 22',
    designation: 'President',
    teamId: 'team-9',
    teamName: 'Project Management',
    level: 1,
    body: 'cabinet',
    isLead: true,
  },
  {
    id: 'mem-2',
    sessionId: 'session-2025-26',
    name: 'Zaryab Hassan',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    department: 'Mechanical Engineering, Session 22',
    designation: 'General Secretary',
    teamId: 'team-9',
    teamName: 'Project Management',
    level: 1,
    body: 'cabinet',
    isLead: true,
  },
  {
    id: 'mem-3',
    sessionId: 'session-2025-26',
    name: 'Areeba Nadeem',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    department: 'Software Engineering, Session 22',
    designation: 'Vice President',
    teamId: 'team-9',
    teamName: 'Project Management',
    level: 1,
    body: 'cabinet',
    isLead: true,
  },
  {
    id: 'mem-4',
    sessionId: 'session-2025-26',
    name: 'Haris Tariq',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    department: 'Electrical Engineering, Session 22',
    designation: 'Head of Pehla Qadam School',
    teamId: 'team-1',
    teamName: 'Pehla Qadam Team',
    level: 1,
    body: 'cabinet',
    isLead: true,
  },
  {
    id: 'mem-5',
    sessionId: 'session-2025-26',
    name: 'Hamza Naveed',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    department: 'Computer Science, Session 22',
    designation: 'Head of IT Box',
    teamId: 'team-2',
    teamName: 'IT Box Team',
    level: 1,
    body: 'cabinet',
    isLead: true,
  },
  {
    id: 'mem-6',
    sessionId: 'session-2025-26',
    name: 'Syeda Maryam Zahra',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    department: 'Telecom Engineering, Session 22',
    designation: 'Head of Chaddar School',
    teamId: 'team-3',
    teamName: 'Chaddar Team',
    level: 1,
    body: 'cabinet',
    isLead: true,
  },

  // 2025-26 Co-Heads (Level 2)
  {
    id: 'mem-7',
    sessionId: 'session-2025-26',
    name: 'Bilal Mustafa',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    department: 'Civil Engineering, Session 23',
    designation: 'Co-Head Survey & Verification',
    teamId: 'team-5',
    teamName: 'Survey Team',
    level: 2,
    body: 'cabinet',
    isLead: false,
  },
  {
    id: 'mem-8',
    sessionId: 'session-2025-26',
    name: 'Ayesha Siddiqua',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    department: 'Software Engineering, Session 23',
    designation: 'Co-Head Graphics & Branding',
    teamId: 'team-8',
    teamName: 'Graphics Team',
    level: 2,
    body: 'cabinet',
    isLead: false,
  },

  // Level 3 Members
  {
    id: 'mem-9',
    sessionId: 'session-2025-26',
    name: 'Saad Ahmed',
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    department: 'Mechanical Engineering, Session 23',
    designation: 'Senior Volunteer Teacher',
    teamId: 'team-1',
    teamName: 'Pehla Qadam Team',
    level: 3,
    body: 'cabinet',
    isLead: false,
  },
  {
    id: 'mem-10',
    sessionId: 'session-2025-26',
    name: 'Fatima Tu Zahra',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    department: 'Computer Science, Session 23',
    designation: 'Senior Documentation Lead',
    teamId: 'team-10',
    teamName: 'Documentation Team',
    level: 3,
    body: 'cabinet',
    isLead: false,
  },

  // Level 4 Executive Members (Junior Cabinet)
  {
    id: 'mem-11',
    sessionId: 'session-2025-26',
    name: 'Muhammad Rehan',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    department: 'Electronics Engineering, Session 24',
    designation: 'Executive Member - Media',
    teamId: 'team-7',
    teamName: 'Media and Coverage Team',
    level: 4,
    body: 'junior_cabinet',
    isLead: false,
  },
  {
    id: 'mem-12',
    sessionId: 'session-2025-26',
    name: 'Khadija Tul Kubra',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    department: 'Industrial Engineering, Session 24',
    designation: 'Executive Member - Pehla Qadam',
    teamId: 'team-1',
    teamName: 'Pehla Qadam Team',
    level: 4,
    body: 'junior_cabinet',
    isLead: false,
  },

  // Level 5 General Members
  {
    id: 'mem-13',
    sessionId: 'session-2025-26',
    name: 'Shahzaib Ali',
    photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80',
    department: 'Civil Engineering, Session 24',
    designation: 'General Member - Distribution',
    teamId: 'team-6',
    teamName: 'Distribution Team',
    level: 5,
    body: 'junior_cabinet',
    isLead: false,
  },
];

export const IMPACT_STATS_DATA: ImpactStat[] = [
  {
    id: 'stat-1',
    key: 'children_enrolled',
    label: 'School Students Daily (Pehla Qadam)',
    value: '70+',
    numberValue: 70,
    suffix: '+',
    icon: 'GraduationCap',
    sortOrder: 1,
  },
  {
    id: 'stat-2',
    key: 'it_students',
    label: 'IT Students (Certified IT Box Graduates)',
    value: '200+',
    numberValue: 200,
    suffix: '+',
    icon: 'Award',
    sortOrder: 2,
  },
  {
    id: 'stat-3',
    key: 'years_service',
    label: 'Years of Success (On-Ground Service)',
    value: '11+',
    numberValue: 11,
    suffix: '+',
    icon: 'Calendar',
    sortOrder: 3,
  },
  {
    id: 'stat-4',
    key: 'families_ration',
    label: 'Families Supported (Rations & Drives)',
    value: '1,100+',
    numberValue: 1100,
    suffix: '+',
    icon: 'Users',
    sortOrder: 4,
  },
  {
    id: 'stat-5',
    key: 'active_volunteers',
    label: 'Active Dedicated Student Volunteers',
    value: '120+',
    numberValue: 120,
    suffix: '+',
    icon: 'Sparkles',
    sortOrder: 5,
  },
];

export const DONATIONS_DATA: Donation[] = [
  {
    id: 'don-101',
    donorName: 'Engr. Shahbaz Ahmed (Alumnus)',
    email: 'shahbaz.uet@example.com',
    phone: '+92 300 1234567',
    amount: 15000,
    type: 'one_time',
    purpose: 'Pehla Qadam School Supplies & Books',
    method: 'Bank Transfer',
    proofUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80',
    status: 'verified',
    isAnonymous: false,
    createdAt: '2026-02-14T10:30:00Z',
    verifiedBy: 'Super Admin',
    verifiedAt: '2026-02-14T12:00:00Z',
  },
  {
    id: 'don-102',
    donorName: 'Anonymous Donor',
    email: 'supporter@gmail.com',
    phone: '+92 312 9876543',
    amount: 10500,
    type: 'monthly_sponsor',
    purpose: 'Sponsorship for 3 Pehla Qadam Children',
    method: 'Easypaisa',
    proofUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80',
    status: 'verified',
    isAnonymous: true,
    createdAt: '2026-02-16T15:20:00Z',
    verifiedBy: 'Super Admin',
    verifiedAt: '2026-02-16T16:10:00Z',
  },
  {
    id: 'don-103',
    donorName: 'Kashif Mehmood',
    email: 'kashif.m@outlook.com',
    phone: '+92 333 5551234',
    amount: 25000,
    type: 'zakat',
    purpose: 'Ramadan Ration Pack Preparation',
    method: 'JazzCash',
    proofUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80',
    status: 'pending',
    isAnonymous: false,
    createdAt: '2026-02-20T08:45:00Z',
  },
];

export const SPONSORSHIPS_DATA: Sponsorship[] = [
  {
    id: 'spon-1',
    donorName: 'Dr. Nadeem Akhtar',
    email: 'dr.nadeem@example.com',
    phone: '+92 301 4443322',
    monthlyAmount: 3500,
    tierName: 'Single Child Full Monthly Sponsor',
    childProfileNote: 'Student in Class 4, Pehla Qadam School',
    startDate: '2024-03-01',
    status: 'active',
    lastPaidMonth: 'February 2026',
  },
  {
    id: 'spon-2',
    donorName: 'Mrs. Saima Tariq',
    email: 'saima.tariq@gmail.com',
    phone: '+92 321 7778899',
    monthlyAmount: 7000,
    tierName: 'Two Children Full Sponsorship',
    childProfileNote: 'Siblings in Class 2 & Class 6, Pehla Qadam',
    startDate: '2024-09-01',
    status: 'active',
    lastPaidMonth: 'February 2026',
  },
];

export const VOLUNTEER_APPLICATIONS_DATA: VolunteerApplication[] = [
  {
    id: 'vol-201',
    name: 'Muhammad Daniyal Aslam',
    email: 'daniyal.23se@students.uettaxila.edu.pk',
    phone: '+92 315 1234567',
    regNo: '23-SE-44',
    department: 'Software Engineering',
    semester: '4th Semester',
    teamId: 'team-2',
    teamName: 'IT Box Team',
    skills: 'Web Development (React, Next.js, HTML/CSS), Python, Git',
    portfolioUrl: 'https://github.com/daniyal-dev',
    reason: 'I want to teach underprivileged kids how to code and earn online so they can break generational poverty.',
    status: 'interview',
    reviewNotes: 'Scheduled for interview this Thursday with Hamza Naveed.',
    createdAt: '2026-02-18T11:00:00Z',
  },
  {
    id: 'vol-202',
    name: 'Zahra Batool',
    email: 'zahra.24ce@students.uettaxila.edu.pk',
    phone: '+92 304 9871234',
    regNo: '24-CE-19',
    department: 'Civil Engineering',
    semester: '2nd Semester',
    teamId: 'team-1',
    teamName: 'Pehla Qadam Team',
    skills: 'Mathematics, Science, Urdu Literature, Public Speaking',
    portfolioUrl: '',
    reason: 'I have always loved teaching younger children and want to give back to the Taxila community while studying at UET.',
    status: 'accepted',
    reviewNotes: 'Accepted as primary school evening teacher for Math & Science.',
    createdAt: '2026-02-15T09:30:00Z',
  },
  {
    id: 'vol-203',
    name: 'Arham Qureshi',
    email: 'arham.23me@students.uettaxila.edu.pk',
    phone: '+92 345 6667788',
    regNo: '23-ME-88',
    department: 'Mechanical Engineering',
    semester: '4th Semester',
    teamId: 'team-7',
    teamName: 'Media and Coverage Team',
    skills: 'Videography, DSLR Photography, Adobe Premiere Pro, Drone Handling',
    portfolioUrl: 'https://instagram.com/arham_visuals',
    reason: 'Passionate about humanitarian documentary filmmaking and social media coverage.',
    status: 'pending',
    createdAt: '2026-02-22T14:15:00Z',
  },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'annual-result-day-pehla-qadam-2025',
    title: 'Pehla Qadam Annual Result Day 2025: Celebrating 100% Pass Rate',
    excerpt: 'Our students delivered an astounding 100% pass percentage in Rawalpindi Board and local examinations, bringing tears of joy to parents.',
    content: `The courtyard near Gate 2 buzzed with emotion and pride on Saturday as Pehla Qadam School held its Annual Result and Prize Distribution Ceremony for Session 2024-25.

Faculty Advisor Prof. Dr. Shahid welcomed parents, students, and UET Taxila faculty members. Every child was awarded customized report cards, storybooks, and medals. Special shields were presented to position holders who overcame extreme domestic hardships to achieve top grades.

"Pehla Qadam proves that intelligence and brilliance are evenly distributed among all human beings—it is only opportunity that is unequal," remarked the General Secretary during his address.`,
    coverImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    author: 'Documentation Team',
    authorRole: 'Official Society Correspondent',
    publishedAt: '2025-04-12',
    category: 'Pehla Qadam',
    status: 'published',
  },
  {
    id: 'post-2',
    slug: 'it-box-batch-7-graduation-freelancers',
    title: 'IT Box Cohort 7 Concludes: 28 Students Receive Verifiable Certificates',
    excerpt: 'Another batch of hardworking boys and girls completed intensive training in computer fundamentals and digital freelancing.',
    content: `Over three intensive months, 28 students from Taxila masterminded graphic design, office tools, and online client communication.

During the graduation showcase, students demonstrated real logos, flyers, and web pages designed by them. All certificates issued carry unique verification IDs now verifiable directly on our official portal.`,
    coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    author: 'Hamza Naveed',
    authorRole: 'Head of IT Box',
    publishedAt: '2025-01-25',
    category: 'IT Box',
    status: 'published',
  },
  {
    id: 'post-3',
    slug: 'ramadan-ration-drive-2026-launch-notice',
    title: 'Ramadan 2026 Food Relief Campaign: Phase 1 Preparations Underway',
    excerpt: 'Survey verification of 300+ destitute families is complete; packaging commences at the UET campus warehouse.',
    content: `As the holy month of Ramadan draws near, UMEED E SUBH has initiated procurement for Phase 1 of the 2026 Ramadan Ration Drive.

Our field teams spent three weeks surveying impoverished settlements across Taxila, verifying widow-led households, daily wage laborers, and families with disabled members. Donations are now actively being received.`,
    coverImage: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
    author: 'Project Management Team',
    authorRole: 'Operations Wing',
    publishedAt: '2026-02-10',
    category: 'Yearly Drives',
    status: 'published',
  },
];

export const GALLERY_ALBUMS_DATA: GalleryAlbum[] = [
  {
    id: 'album-1',
    title: 'Pehla Qadam Classroom Daily Life & Learning',
    eventDate: 'Ongoing 2025-2026',
    category: 'Pehla Qadam',
    coverImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
        caption: 'UET student volunteer explaining mathematics equations on the whiteboard.',
      },
      {
        url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80',
        caption: 'Young students practicing handwriting and reading during evening study circle.',
      },
      {
        url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
        caption: 'Distributing new notebooks and school bags sponsored through CSP.',
      },
    ],
  },
  {
    id: 'album-2',
    title: 'IT Box Practical Lab Training & Project Reviews',
    eventDate: 'Winter 2025',
    category: 'IT Box',
    coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
        caption: 'Students practicing graphic design layouts and web fundamentals.',
      },
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
        caption: 'Peer learning and collaborative project review in the computer lab.',
      },
    ],
  },
  {
    id: 'album-3',
    title: 'Chaddar Vocational Sewing School Daily Work',
    eventDate: 'Autumn 2025',
    category: 'Chaddar',
    coverImage: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1000&q=80',
        caption: 'Trainees learning intricate dress pattern drafting and tailoring.',
      },
    ],
  },
  {
    id: 'album-4',
    title: 'Ramadan Ration Packing & Distribution Ops',
    eventDate: 'Ramadan 2025',
    category: 'Drives',
    coverImage: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80',
        caption: 'Volunteer students assembling 500+ food parcels with strict hygiene standards.',
      },
      {
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
        caption: 'Orderly tokenized distribution ensuring privacy and honor of each family.',
      },
    ],
  },
];

export const CONTACT_MESSAGES_DATA: ContactMessage[] = [
  {
    id: 'msg-1',
    name: 'Dr. Faisal Farooq',
    email: 'faisal.farooq@alumni.uet.edu.pk',
    subject: 'Sponsoring 5 children from overseas',
    message: 'Assalam o Alaikum, I am a 2012 graduate living in Manchester. I would like to setup an annual bank transfer to sponsor 5 children at Pehla Qadam School. Please share swift codes.',
    isRead: false,
    createdAt: '2026-02-21T18:20:00Z',
  },
  {
    id: 'msg-2',
    name: 'Mrs. Shabana Parveen',
    email: 'shabana.p@gmail.com',
    subject: 'Inquiry regarding Chaddar school admissions',
    message: 'Hello, my sister lives near Taxila station and wants to learn sewing in the morning session. Can she join next Monday?',
    isRead: true,
    createdAt: '2026-02-17T11:40:00Z',
  },
];

// Helper methods & Mock store (client/server in-memory store with local persistence simulation)
class DataStore {
  projects: Project[] = [...PROJECTS_DATA];
  driveEditions: DriveEdition[] = [...DRIVE_EDITIONS_DATA];
  certificates: Certificate[] = [...CERTIFICATES_DATA];
  stories: Story[] = [...STORIES_DATA];
  results: StudentResult[] = [...RESULTS_DATA];
  historyEvents: HistoryEvent[] = [...HISTORY_EVENTS_DATA];
  sessions: Session[] = [...SESSIONS_DATA];
  cabinetMembers: CabinetMember[] = [...CABINET_MEMBERS_DATA];
  teams: Team[] = [...TEAMS_DATA];
  impactStats: ImpactStat[] = [...IMPACT_STATS_DATA];
  volunteers: VolunteerApplication[] = [...VOLUNTEER_APPLICATIONS_DATA];
  donations: Donation[] = [...DONATIONS_DATA];
  sponsorships: Sponsorship[] = [...SPONSORSHIPS_DATA];
  posts: BlogPost[] = [...BLOG_POSTS_DATA];
  galleryAlbums: GalleryAlbum[] = [...GALLERY_ALBUMS_DATA];
  messages: ContactMessage[] = [...CONTACT_MESSAGES_DATA];

  // Projects
  getProjects() {
    return this.projects;
  }
  getProjectBySlug(slug: string) {
    return this.projects.find((p) => p.slug === slug);
  }
  toggleAdmissions(slug: string, isOpen: boolean) {
    const proj = this.projects.find((p) => p.slug === slug);
    if (proj) {
      proj.admissionsOpen = isOpen;
    }
    return proj;
  }

  // Drive Editions
  getDriveEditions(projectId?: string) {
    if (projectId) {
      return this.driveEditions.filter((d) => d.projectId === projectId);
    }
    return this.driveEditions;
  }
  addDriveEdition(edition: Omit<DriveEdition, 'id'>) {
    const newEdition: DriveEdition = {
      ...edition,
      id: `drive-${Date.now()}`,
    };
    this.driveEditions.unshift(newEdition);
    return newEdition;
  }

  // Certificates
  verifyCertificate(certNo: string) {
    const cleanNo = certNo.trim().toUpperCase();
    return this.certificates.find((c) => c.certificateNo.toUpperCase() === cleanNo);
  }
  getCertificates() {
    return this.certificates;
  }
  addCertificate(cert: Omit<Certificate, 'id'>) {
    const newCert: Certificate = {
      ...cert,
      id: `cert-${Date.now()}`,
    };
    this.certificates.unshift(newCert);
    return newCert;
  }

  // Volunteers
  getVolunteers() {
    return this.volunteers;
  }
  addVolunteer(app: Omit<VolunteerApplication, 'id' | 'status' | 'createdAt'>) {
    const newApp: VolunteerApplication = {
      ...app,
      id: `vol-${Date.now()}`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    this.volunteers.unshift(newApp);
    return newApp;
  }
  updateVolunteerStatus(id: string, status: VolunteerApplication['status'], reviewNotes?: string) {
    const app = this.volunteers.find((v) => v.id === id);
    if (app) {
      app.status = status;
      if (reviewNotes !== undefined) app.reviewNotes = reviewNotes;
    }
    return app;
  }

  // Donations
  getDonations() {
    return this.donations;
  }
  addDonation(don: Omit<Donation, 'id' | 'status' | 'createdAt'>) {
    const newDon: Donation = {
      ...don,
      id: `don-${Math.floor(100000 + Math.random() * 900000)}`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    this.donations.unshift(newDon);
    return newDon;
  }
  verifyDonation(id: string, isVerified: boolean, notes?: string) {
    const don = this.donations.find((d) => d.id === id);
    if (don) {
      don.status = isVerified ? 'verified' : 'rejected';
      don.verifiedBy = 'Admin';
      don.verifiedAt = new Date().toISOString();
      if (notes) don.rejectReason = notes;
    }
    return don;
  }

  // Messages
  getMessages() {
    return this.messages;
  }
  addMessage(msg: Omit<ContactMessage, 'id' | 'isRead' | 'createdAt'>) {
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      isRead: false,
      createdAt: new Date().toISOString(),
    };
    this.messages.unshift(newMsg);
    return newMsg;
  }
  markMessageRead(id: string) {
    const msg = this.messages.find((m) => m.id === id);
    if (msg) msg.isRead = true;
    return msg;
  }

  // Cabinet & Sessions
  getSessions() {
    return this.sessions;
  }
  getCurrentSession() {
    return this.sessions.find((s) => s.isCurrent) || this.sessions[0];
  }
  getCabinetMembers(sessionId?: string) {
    if (sessionId) {
      return this.cabinetMembers.filter((m) => m.sessionId === sessionId);
    }
    return this.cabinetMembers;
  }
  addCabinetMember(member: Omit<CabinetMember, 'id'>) {
    const newMember: CabinetMember = {
      ...member,
      id: `mem-${Date.now()}`,
    };
    this.cabinetMembers.push(newMember);
    return newMember;
  }
}

// Global singleton instance
export const store = new DataStore();
