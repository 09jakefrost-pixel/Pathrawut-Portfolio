export type RoleType = 'network' | 'pm';

export interface ContactInfo {
  name: string;
  location: string;
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  email: string;
  linkedin: string;
  education: {
    degree: string;
    institution: string;
    graduationYear: string;
    gpa: string;
  };
  languages: { language: string; level: string }[];
  avatarUrl: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface ExpertiseCard {
  id: string;
  title: string;
  description: string;
  tags: string[];
  iconName: string;
  size?: 'normal' | 'wide' | 'tall';
}

export interface ExperienceRole {
  title: string;
  company: string;
  companyType: string;
  location: string;
  period: string;
  badge?: string;
  highlights: string[];
}

export interface ProjectShowcase {
  id: string;
  title: string;
  category: string;
  scope: string;
  budgetScope: string;
  networkAngle: {
    description: string;
    keyDeliverables: string[];
    techStack: string[];
  };
  pmAngle: {
    description: string;
    keyDeliverables: string[];
    pmSkills: string[];
  };
  impact: string;
  iconName: string;
}

export interface RoleData {
  roleId: RoleType;
  tabLabel: string;
  headline: string;
  subHeadline: string;
  summary: string;
  cvFilePath: string;
  cvFileName: string;
  expertiseList: ExpertiseCard[];
  currentRole: ExperienceRole;
}

export const personalInfo: ContactInfo = {
  name: "Pathrawut Wannachai",
  location: "Bekasi, West Java, Indonesia",
  phone: "+62 811 145 597",
  phoneDisplay: "+62 811-145-597",
  whatsappUrl: "https://wa.me/62811145597",
  email: "wannachaiprem@gmail.com",
  linkedin: "https://linkedin.com/in/pathrawut-wannachai-516037128",
  education: {
    degree: "Bachelor of Business Information Technology",
    institution: "Binus University, Bekasi",
    graduationYear: "Graduated 2025",
    gpa: "GPA: 3.11/4.00"
  },
  languages: [
    { language: "English", level: "Proficient" },
    { language: "Bahasa Indonesia", level: "Native" }
  ],
  avatarUrl: "/images/Avatar.webp"
};

export const keyImpactMetrics: MetricItem[] = [
  {
    id: "projects",
    value: "12+",
    label: "B2B Enterprise Projects",
    description: "Delivered across Jakarta, West Java & Central Java",
    iconName: "ShieldCheck"
  },
  {
    id: "budget",
    value: "IDR 500M – 2B",
    label: "Project Valuation Scope",
    description: "Technical BoQ preparation, costing & budget control",
    iconName: "TrendingUp"
  },
  {
    id: "team",
    value: "5 – 10",
    label: "Field Technical Team",
    description: "Engineers & technicians led from survey to handover",
    iconName: "Users"
  },
  {
    id: "scale",
    value: "500 / 250+",
    label: "CCTV & Endpoints / Site",
    description: "Up to 500 IP cameras & 250+ network endpoints per site",
    iconName: "Layers"
  }
];

export const roleData: Record<RoleType, RoleData> = {
  network: {
    roleId: 'network',
    tabLabel: 'Network Engineer',
    headline: 'Network Engineer',
    subHeadline: 'Fortinet | Palo Alto | Aruba | Enterprise Infrastructure & Security',
    summary: 'Network Engineer with 2+ years of hands-on experience designing, deploying, and securing enterprise networks for B2B clients across Jakarta, West Java, and Central Java. Skilled in firewall management (Fortinet FortiGate, Palo Alto), enterprise wireless and switching (Aruba, Huawei), VLAN segmentation, and site-to-site VPN. Experienced in leading a 5–10 person field team, preparing technical specifications and Bill of Quantities (BoQ), and presenting solutions to client stakeholders.',
    cvFilePath: '/cv/Pathrawut_CV_Network_Engineer_ATS.pdf',
    cvFileName: 'Pathrawut_CV_Network_Engineer_ATS.pdf',
    expertiseList: [
      {
        id: "net-sec",
        title: "Network Security & Firewall Administration",
        description: "Fortinet FortiGate & Palo Alto Networks enterprise firewalls, granular security policies, NAT rules, IPS/IDS integration, SSL inspection, and secure site-to-site / remote-access IPsec & SSL VPN tunnels.",
        tags: ["Fortinet FortiGate", "Palo Alto", "IPsec / SSL VPN", "Firewall Policy & NAT", "Threat Prevention"],
        iconName: "Shield",
        size: "wide"
      },
      {
        id: "routing-switching",
        title: "Routing, Switching & Enterprise Wireless",
        description: "Layer 2/Layer 3 VLAN segmentation, inter-VLAN routing, static & dynamic routing protocols, Huawei and Aruba managed enterprise switching, heat-mapped wireless site surveys, and Aruba & Huawei AP controller deployments.",
        tags: ["Aruba Switching", "Huawei L2/L3", "VLAN Segmentation", "Aruba Instant APs", "802.1X Auth"],
        iconName: "Network",
        size: "normal"
      },
      {
        id: "backbone",
        title: "Network Performance & Backbone Infrastructure",
        description: "1 Gbps, 2.5 Gbps, and 10 Gbps SFP+/Fiber backbone link deployment, bandwidth aggregation, QoS traffic prioritization, link failover redundancy, and end-to-end latency optimization.",
        tags: ["10 Gbps SFP+", "Fiber Backbone", "QoS Prioritization", "LACP Link Aggregation", "Throughput Tuning"],
        iconName: "Cpu",
        size: "normal"
      },
      {
        id: "virtualization",
        title: "Server, Virtualization & Enterprise Storage",
        description: "Proxmox VE multi-node clustering, containerized services with Docker, Ubuntu Server administration, and Synology RackStation NAS deployments configured with RAID 5/6/10 for resilient enterprise data redundancy.",
        tags: ["Proxmox VE", "Docker", "Ubuntu Server", "Synology RackStation", "RAID 5/6/10"],
        iconName: "Server",
        size: "normal"
      },
      {
        id: "surveillance",
        title: "Surveillance Networking & Technical Documentation",
        description: "Hikvision enterprise IP camera ecosystems (up to 500 nodes), high-throughput Video Management Software (VMS), thermal imaging cameras, high-retention NAS storage, comprehensive BoQs, and formal L1/L2/L3 network topology diagrams.",
        tags: ["Hikvision VMS", "500+ IP Cameras", "Network Topology Diagrams", "Technical BoQ", "Client Presentations"],
        iconName: "Video",
        size: "wide"
      }
    ],
    currentRole: {
      title: "IT Infrastructure / Network Engineer",
      company: "Pathra Raya Sejahtera (IT Consultant)",
      companyType: "IT Consultant & System Integrator",
      location: "Bekasi, West Java",
      period: "Aug 2024 – Present",
      badge: "Current Role",
      highlights: [
        "Design and deploy enterprise network and security infrastructure (firewall, switching, wireless, VPN) for 12 B2B client projects across Jakarta, West Java, and Central Java.",
        "Configure and maintain FortiGate and Palo Alto firewalls, including security policies, VLAN segmentation, and VPN tunnels for 5 client sites.",
        "Deploy 1/2.5/10 Gbps network backbones and Aruba/Huawei switching and wireless for sites of up to 250 users/devices.",
        "Build and manage a Proxmox VE cluster and Synology RackStation storage with RAID for client data redundancy.",
        "Deliver end-to-end Hikvision IP surveillance projects of up to 500 cameras, including VMS setup and high-retention NAS storage.",
        "Prepare technical specifications and BoQ for projects valued at IDR 500 Million – 2 Billion Rupiah.",
        "Lead a field technical team of 5–10 people and coordinate directly with client stakeholders from survey to handover."
      ]
    }
  },
  pm: {
    roleId: 'pm',
    tabLabel: 'IT Project Manager',
    headline: 'IT Project Manager',
    subHeadline: 'Infrastructure & Security Projects | Technical Project Delivery & Stakeholder Management',
    summary: 'IT Project Manager with 2+ years of experience delivering B2B network, security, and infrastructure projects across Jakarta, West Java, and Central Java. Leads technical teams of 5–10 people, manages project scope, budget, and schedule, and acts as the main point of contact for client stakeholders. Combines a Business Information Technology degree with hands-on technical depth in networking, firewalls, virtualization, and surveillance systems, enabling clear translation of business needs into technical plans and Bill of Quantities (BoQ).',
    cvFilePath: '/cv/Pathrawut_CV_IT_Project_Manager_ATS.pdf',
    cvFileName: 'Pathrawut_CV_IT_Project_Manager_ATS.pdf',
    expertiseList: [
      {
        id: "pm-delivery",
        title: "Project Management & End-to-End Delivery",
        description: "Full project lifecycle governance: project charter, scope baseline definition, critical path scheduling, budget and cash flow monitoring, proactive risk mitigation, resource scheduling, and formal client acceptance handover.",
        tags: ["Scope Management", "Timeline Scheduling", "Budget Control", "Risk Register", "Client Handover"],
        iconName: "Briefcase",
        size: "wide"
      },
      {
        id: "stakeholder-presales",
        title: "Stakeholder Management & Presales",
        description: "C-level and IT director client communication, business requirement elicitation, technical solution architecture presentations, presales technical consultation, and bridging business strategy with engineering execution.",
        tags: ["Client Stakeholders", "Requirement Gathering", "Technical Pitching", "Presales Consulting", "Executive Reporting"],
        iconName: "UserCheck",
        size: "normal"
      },
      {
        id: "planning-costing",
        title: "Planning, Costing & Vendor Coordination",
        description: "Detailed technical specification authoring, competitive Bill of Quantities (BoQ) generation for IDR 500M – 2B deals, hardware vendor RFP negotiations, procurement scheduling, and supply chain logistics management.",
        tags: ["Bill of Quantities (BoQ)", "Cost Estimation", "Vendor RFP", "Hardware Procurement", "SLA Negotiation"],
        iconName: "Calculator",
        size: "normal"
      },
      {
        id: "team-tools",
        title: "Team Leadership & Project Management Tools",
        description: "Daily sprint & site coordination for 5–10 field engineers and certified cabling technicians, resource allocation, milestone tracking, and documentation using MS Project, JIRA, and digital Gantt charts.",
        tags: ["Team Leadership (5-10 pax)", "MS Project", "JIRA", "Milestone Tracking", "Quality Assurance"],
        iconName: "Compass",
        size: "normal"
      },
      {
        id: "tech-background",
        title: "Technical Infrastructure & Security Background",
        description: "Hands-on foundation across enterprise network infrastructure: Fortinet & Palo Alto firewalls, Aruba and Huawei switching/wireless, Proxmox VE virtualization, Synology storage, and Hikvision enterprise CCTV systems to accurately validate technical feasibility and spot risks early.",
        tags: ["Network & Firewall Savvy", "Proxmox Virtualization", "Synology Storage", "Surveillance Rollouts", "Technical Risk Spotting"],
        iconName: "FolderKanban",
        size: "wide"
      }
    ],
    currentRole: {
      title: "IT Infrastructure / Project Lead",
      company: "Pathra Raya Sejahtera (IT Consultant)",
      companyType: "IT Consultant & System Integrator",
      location: "Bekasi, West Java",
      period: "Aug 2024 – Present",
      badge: "Current Role",
      highlights: [
        "Lead and deliver 12 B2B IT infrastructure and security projects across Jakarta, West Java, and Central Java, with budgets of IDR 500 Million – 2 Billion Rupiah.",
        "Manage a technical team of 5–10 people: task assignment, site scheduling, quality checks, and progress reporting.",
        "Prepare technical specifications and BoQ, and present solutions to client stakeholders to secure project approval.",
        "Control project budget and scope, with 8 completed projects delivered 100% on timeline and within budget, and remaining active deployments managed on track.",
        "Coordinate vendors, suppliers, and client IT teams from survey and design through installation, testing, and handover.",
        "Deliver network, firewall, wireless, virtualization, storage, and CCTV projects end to end, with a hands-on understanding of technical risks."
      ]
    }
  }
};

export const sharedExperiences: ExperienceRole[] = [
  {
    title: "Social Media Officer",
    company: "Metamorphosys (Creative & Digital Agency)",
    companyType: "Creative & Digital Agency",
    location: "BSD, Tangerang",
    period: "Feb 2024 – Jul 2024",
    highlights: [
      "Planned and executed data-driven content strategies and monthly editorial schedules across client digital channels, achieving a 44% increase in follower growth against business KPIs.",
      "Tracked audience engagement, reach, and campaign performance metrics using platform analytics tools to compile periodic insight reports and optimization recommendations for clients.",
      "Coordinated daily content production timelines and deliverable reviews across design, copywriting, and account teams to ensure on-schedule campaign publishing aligned with client briefs."
    ]
  },
  {
    title: "Business Development",
    company: "Alifindo Mitra Bersama (General Trading Company)",
    companyType: "General Trading Company",
    location: "Bekasi, West Java",
    period: "Jan 2023 – Jan 2024",
    highlights: [
      "Conducted B2B market research, competitor benchmarking, and industry demand analysis to map prospective corporate clients and identify new business opportunities.",
      "Prepared commercial proposals, product quotations, and client presentation materials in collaboration with procurement and operations teams to align pricing and delivery timelines.",
      "Maintained B2B prospect pipeline databases and coordinated follow-up communications from initial inquiry through quotation handover to support client acquisition and retention."
    ]
  }
];

export const featuredProjects: ProjectShowcase[] = [
  {
    id: "firewall-vpn",
    title: "Multi-Site Enterprise Firewall & Site-to-Site VPN Deployment",
    category: "Network Security & Multi-Site Connectivity",
    scope: "5 Connected Enterprise Branch Offices",
    budgetScope: "IDR 650M Scope",
    iconName: "ShieldAlert",
    networkAngle: {
      description: "Architected high-availability Fortinet FortiGate and Palo Alto firewall perimeters. Implemented route-based IPsec VPN mesh interconnecting HQ and regional branches with automated failover.",
      keyDeliverables: [
        "FortiGate & Palo Alto dual-vendor firewall hardening and NAT policy formulation",
        "Encrypted IPsec tunnels with dead-peer detection and dynamic route failover",
        "VLAN segmentation isolating corporate, guest, and management subnets",
        "Centralized SSL-VPN portal for 70+ secure remote workforce users"
      ],
      techStack: ["Fortinet FortiGate", "Palo Alto Networks", "IPsec Mesh", "BGP / OSPF", "VLAN / NAT"]
    },
    pmAngle: {
      description: "Spearheaded end-to-end delivery across 5 geographic sites with zero unplanned downtime during transition windows. Managed vendor lead times, cutover schedules, and stakeholder alignment.",
      keyDeliverables: [
        "Synchronized cutover schedule executed during off-peak hours with 100% SLA adherence",
        "BoQ budgeting and multi-distributor hardware procurement delivered 8% under ceiling",
        "Managed 6 field engineers conducting simultaneous on-site rack-and-stack deployments",
        "Comprehensive user acceptance testing (UAT) signoff and admin SOP documentation"
      ],
      pmSkills: ["Multi-Site Scheduling", "Downtime Risk Management", "BoQ Cost Optimization", "UAT Signoff"]
    },
    impact: "Secured enterprise traffic across 5 sites with zero breach incidents and eliminated cross-branch WAN latency bottlenecks."
  },
  {
    id: "campus-backbone",
    title: "10 Gbps Campus Backbone & High-Density Enterprise Wi-Fi",
    category: "High-Throughput Campus Infrastructure",
    scope: "250+ Concurrent Endpoints & 3 Commercial Floors",
    budgetScope: "IDR 1.2B Scope",
    iconName: "Wifi",
    networkAngle: {
      description: "Engineered a redundant 10 Gbps optical fiber backbone with Aruba and Huawei enterprise switches. Deployed predictive heat-mapped Wi-Fi coverage with 802.1X enterprise authentication.",
      keyDeliverables: [
        "10 Gbps SFP+ multi-mode fiber trunk links with LACP port channeling",
        "Aruba Instant Access Points with seamless fast-roaming (802.11r/k/v)",
        "RADIUS 802.1X network access control with role-based bandwidth throttling",
        "Structured horizontal cabling and patch panel certification (Cat6A / OM3)"
      ],
      techStack: ["Aruba Enterprise Switches", "Huawei S-Series", "10Gbps SFP+", "RADIUS 802.1X", "Fluke Testing"]
    },
    pmAngle: {
      description: "Directed technical implementation across 3 commercial facility floors under tight fit-out timelines. Managed sub-contractors, MEP civil coordination, and executive steering meetings.",
      keyDeliverables: [
        "Coordinated with interior design and civil MEP contractors to protect cable pathway integrity",
        "Led 8 technicians in structured cabling, core switch stacking, and AP bracket mounting",
        "Delivered project 4 days ahead of scheduled tenant move-in date",
        "Conducted Wi-Fi coverage walkthrough validation with client facilities team"
      ],
      pmSkills: ["Civil MEP Coordination", "Critical Path Management", "Vendor & Subcontractor Oversight", "Fast-Track Delivery"]
    },
    impact: "Upgraded campus throughput by 10x, supporting 250+ concurrent users with sub-5ms internal latency and zero dead zones."
  },
  {
    id: "proxmox-storage",
    title: "High-Availability Proxmox VE Cluster & Synology RAID Redundancy",
    category: "Virtualization & Enterprise Storage",
    scope: "Multi-Node Compute & 8-Bay Synology RackStation",
    budgetScope: "IDR 750M Scope",
    iconName: "Database",
    networkAngle: {
      description: "Built a high-availability Proxmox VE hypervisor cluster backed by dedicated 10G iSCSI / NFS storage networks and automated snapshots to Synology RackStation with enterprise RAID redundancy.",
      keyDeliverables: [
        "Proxmox VE 3-node cluster with Ceph/NFS shared storage interconnects",
        "Synology 8-bay RackStation NAS configured in RAID 6 with hot-spare disk",
        "Segregated storage VLAN network with 9000 MTU Jumbo Frames for iSCSI throughput",
        "Automated Proxmox Backup Server (PBS) nightly differential deduplicated backups"
      ],
      techStack: ["Proxmox VE Cluster", "Synology RackStation", "RAID 6 + Hot Spare", "10G iSCSI / NFS", "Docker / Ubuntu"]
    },
    pmAngle: {
      description: "Planned and orchestrated seamless physical-to-virtual (P2V) workload migrations. Established clear RTO (<1 hour) and RPO (<15 minutes) criteria aligned with client executive disaster recovery mandates.",
      keyDeliverables: [
        "Authored disaster recovery runbook and trained client internal sysadmins",
        "Managed hardware procurement warranty SLAs with local enterprise authorized distributors",
        "Supervised step-by-step phased VM data migration with rollback safety gates",
        "Final delivery completed on-budget with formal sign-off from IT leadership"
      ],
      pmSkills: ["Disaster Recovery Mandates", "P2V Migration Governance", "RTO / RPO Planning", "Client Admin Training"]
    },
    impact: "Achieved 99.95% compute availability and safeguarded 40TB+ critical enterprise assets with instant VM failover capabilities."
  },
  {
    id: "surveillance-rollout",
    title: "500-Camera Enterprise IP Surveillance & VMS Storage Rollout",
    category: "Physical Security & Video Networking",
    scope: "500 IP Cameras, Multi-Building Campus & Control Room",
    budgetScope: "IDR 1.85B Scope",
    iconName: "Camera",
    networkAngle: {
      description: "Designed a dedicated high-capacity surveillance network handling continuous H.265+ RTSP video streams from 500 Hikvision IP cameras, thermal imaging perimeter sensors, and central VMS.",
      keyDeliverables: [
        "Dedicated isolated CCTV VLAN with IGMP snooping to eliminate broadcast storm risks",
        "Industrial PoE+ edge switches with power budget headroom calculations",
        "Centralized Video Management System (VMS) with video wall matrix decoder outputs",
        "High-density NAS storage arrays configured for 60-day continuous loop retention"
      ],
      techStack: ["Hikvision IP Cameras", "Enterprise VMS", "PoE+ Managed Switches", "Thermal Sensors", "NAS High-Retention"]
    },
    pmAngle: {
      description: "Managed the largest capital equipment project in company portfolio (IDR 1.85B). Supervised a 10-person installation crew, site safety compliances, outdoor trenching, and command center setup.",
      keyDeliverables: [
        "Detailed work breakdown structure (WBS) spanning 45 installation calendar days",
        "Led daily safety tool-box meetings and site compliance for elevated cherry-picker mounting",
        "Controlled BoQ budget across cameras, NVRs, server racks, fiber transceivers, and civil conduit",
        "Commissioned 24/7 client security operations center (SOC) command center on schedule"
      ],
      pmSkills: ["WBS Project Scheduling", "EHS / Site Safety Protocol", "Large-scale BoQ Governance", "SOC Command Handover"]
    },
    impact: "Delivered 100% campus visual coverage with 60-day forensic retention and AI intrusion alerts, passing client audit with zero punch-list defects."
  }
];
