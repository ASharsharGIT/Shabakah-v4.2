/**
 * COMPLETE BILINGUAL LANGUAGE SYSTEM
 * Full Arabic/English Content Translation for SHABAKAH Website
 * All pages have COMPLETE translations - not just alignment changes
 */

const translations = {
    en: {
        // ============ NAVIGATION ============
        nav: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            solutions: 'Solutions',
            partners: 'Partners',
            contact: 'Contact',
            serviceDropdown: 'Services',
            megaMenu: {
                infrastructure: {
                    title: 'IT Infrastructure',
                    description: 'Enterprise-grade infrastructure solutions',
                    link: 'Learn More →'
                },
                datacenter: {
                    title: 'Data Center Solutions',
                    description: 'Private cloud and certified data center build-out',
                    link: 'Learn More →'
                },
                physicalSecurity: {
                    title: 'Physical Security Systems',
                    description: 'CCTV, access control, and perimeter protection',
                    link: 'Learn More →'
                },
                communications: {
                    title: 'Unified Communications & Collaboration',
                    description: 'Voice, video, messaging, and meeting platforms',
                    link: 'Learn More →'
                },
                licensing: {
                    title: 'Software Licensing',
                    description: 'Cloud and enterprise licensing solutions',
                    link: 'Learn More →'
                },
                enduser: {
                    title: 'End-User Devices',
                    description: 'Device supply and unified endpoint management',
                    link: 'Learn More →'
                },
                cybersecurity: {
                    title: 'Integrated Security & Business Continuity',
                    description: 'NGFW, EDR, IAM/PAM, and backup resilience',
                    link: 'Learn More →'
                },
                managed: {
                    title: 'Managed Services',
                    description: '24/7 operations, monitoring, and technical support',
                    link: 'Learn More →'
                },
                isp: {
                    title: 'ISP Services',
                    description: 'DIA, hosting, and mission-critical connectivity',
                    link: 'Learn More →'
                }
            }
        },

        // ============ COMMON ELEMENTS ============
        common: {
            search: {
                placeholder: 'Search services, solutions, insights...',
                button: 'Search'
            },
            cookie: {
                message: 'We use cookies to enhance your browsing experience and analyze our traffic. By continuing to use this site, you consent to our use of cookies.',
                learnMore: 'Learn More',
                accept: 'Accept'
            }
        },

        // ============ HOME PAGE ============
        home: {
            hero: {
                title: 'Saudi Vision.',
                subtitle: 'Enterprise-Grade ICT Excellence',
                since: 'Since 1997',
                description: 'Empowering mission-critical operations with world-class technology infrastructure, cybersecurity, and managed services across Saudi Arabia and beyond.',
                cta1: 'Explore Services',
                cta2: 'Get In Touch',
                scroll: 'Scroll to explore',
                stats: {
                    years: 'Years of Excellence',
                    projects: 'Projects Delivered',
                    clients: 'Trusted Clients'
                }
            },
            heroBold: {
                line1: 'We Build the',
                line2: 'IT Foundation',
                line3: 'for Saudi Businesses',
                description: '50,000+ successfully delivered IT projects, certified with 6 international ISO standards, and a CST-certified ISP data center.',
                stats: {
                    established: 'Established',
                    projects: 'Successful projects',
                    branches: 'Branches in KSA & Egypt',
                    experience: 'Years experience',
                    cstDataCenter: 'Licensed data center',
                    localHosting: 'Hosting data center',
                    localDia: 'Local DIA service provider',
                    isoCerts: 'ISO certifications'
                }
            },
            heroOrbLabels: ['DIA', 'Cloud services', 'Smart infrastructure', 'VSAT', 'Outsource'],
            why: {
                tag: 'Why Choose Us',
                title: 'The SHABAKAH Advantage',
                description: 'Nearly three decades of unwavering commitment to excellence, innovation, and customer success',
                cards: {
                    security: {
                        title: 'Security-By-Design',
                        description: 'Enterprise-grade security architecture with ISO 27001 and ISO 22301 certification, ensuring your data and operations remain protected.'
                    },
                    support: {
                        title: '24/7 Operations',
                        description: 'Round-the-clock monitoring, support, and maintenance with clear operational separation for uninterrupted service delivery.'
                    },
                    certified: {
                        title: 'Certified Excellence',
                        description: 'NCA compliant with multiple international certifications, demonstrating our commitment to industry best practices.'
                    },
                    vendor: {
                        title: 'Vendor-Agnostic',
                        description: 'Independent architecture approach ensures the best technology solutions tailored to your specific needs.'
                    },
                    track: {
                        title: 'Proven Track Record',
                        description: '28+ years serving government and enterprise sectors with consistently high customer satisfaction and project success rates.'
                    }
                }
            },
            services: {
                tag: 'Our Expertise',
                title: 'Provide ICT Solutions & ISP Services',
                description: 'End-to-end technology services designed for mission-critical enterprise operations'
            },
            // Home page service cards (bullets + goal; goalLabel optional, default "Goal")
            serviceCards: [
                {
                    title: 'IT Infrastructure',
                    bullets: [
                        'Copper & fiber cabling infrastructure',
                        'Network active solutions (LAN/WLAN)',
                        'SD-WAN for branch connectivity and performance optimization',
                        'Network monitoring & management systems'
                    ],
                    goal: 'Deliver next-generation IT network infrastructure with secure, high-speed performance across your business.',
                    link: 'Learn More'
                },
                {
                    title: 'Data Center Solutions',
                    bullets: [
                        'Building data centers to certified standards',
                        'Server, storage & backup design and implementation',
                        'Deploying virtualization solutions'
                    ],
                    goal: 'Provide a fully integrated, optimized environment to run business systems.',
                    link: 'Learn More'
                },
                {
                    title: 'Physical Security Systems',
                    bullets: [
                        'CCTV surveillance systems',
                        'Access control systems',
                        'Barrier gates for people and vehicle access control'
                    ],
                    goal: 'Ensure full control and monitoring for your business environment.',
                    link: 'Learn More'
                },
                {
                    title: 'Unified Communications & Collaboration',
                    bullets: [
                        'Advanced IP telephony with centralized call management',
                        'Centralized secure cloud VoIP for branches',
                        'Fully integrated solutions for voice, video, messaging, and meetings'
                    ],
                    goal: 'Enable efficient communication across teams and branches at minimal cost while improving productivity.',
                    link: 'Learn More'
                },
                {
                    title: 'Software Licensing',
                    bullets: [
                        'Supply & install original licenses: Microsoft, Adobe, and others',
                        'Supply & activate cloud licenses: Microsoft 365, Azure, and others'
                    ],
                    goal: 'Deliver genuine licenses with a fast, reliable activation process.',
                    link: 'Learn More'
                },
                {
                    title: 'End-User Devices',
                    bullets: [
                        'Supply & install devices from Dell, HP, Lenovo with vendor warranty & support',
                        'Centralized endpoint management with Intune, VMware Workspace ONE, ManageEngine, and modern tools'
                    ],
                    goal: 'Provide end-user devices tailored to your business with unified management.',
                    link: 'Learn More'
                },
                {
                    title: 'Integrated Security & Business Continuity',
                    bullets: [
                        'Next-generation firewalls & IDS/IPS',
                        'Endpoint protection & EDR',
                        'Identity & access management (IAM / PAM)',
                        'Backup and recovery systems'
                    ],
                    goal: 'Protect core systems and data by securing your IT environment and ensuring business continuity.',
                    link: 'Learn More'
                },
                {
                    title: 'Managed Services',
                    bullets: [
                        'Remote and on-site operation & support with rapid response',
                        'Flexible engagement models (part-time, full-time, seasonal)',
                        'Skilled staff: network engineers, IT support, cybersecurity specialists',
                        'Preventive and corrective maintenance for infrastructure and systems',
                        'Reporting to measure service levels and SLA compliance'
                    ],
                    goal: 'Reduce workload and operating costs while maintaining the highest technical efficiency.',
                    link: 'Learn More'
                },
                {
                    title: 'ISP Services',
                    bullets: [
                        'Dedicated Internet Access (DIA), enterprise connectivity, hosting, and 24/7 technical support for mission-critical operations'
                    ],
                    goal: 'Deliver reliable, high-performance connectivity and hosting that supports continuity and digital growth.',
                    link: 'Learn More'
                }
            ],
            horizontalProjects: {
                tag: 'SCROLL HORIZONTALLY →',
                title: 'Mission-Critical',
                titleHighlight: 'Deployments',
                projects: [
                    {
                        number: '01',
                        badge: 'FINANCIAL SECTOR',
                        title: 'Saudi Bank Core<br>Banking Migration',
                        description: 'Migrated entire core banking infrastructure (5,000+ transactions/second) from legacy mainframe to modern HPE SimpliVity hyperconverged platform. <strong style="color: #FFB800;">Zero transaction loss</strong> during 96-hour migration window.',
                        metrics: [
                            { value: '96h', label: 'Migration Window' },
                            { value: '5K+', label: 'Trans/Second' },
                            { value: '0%', label: 'Data Loss' }
                        ],
                        tech: ['HPE SimpliVity', 'VMware vSphere', 'Veeam Backup', 'SAMA Compliant']
                    },
                    {
                        number: '02',
                        badge: 'GOVERNMENT',
                        title: 'National Agency<br>SOC Deployment',
                        description: 'Built <strong style="color: #00C4E6;">NCA-certified</strong> Security Operations Center for critical government infrastructure. 24/7 monitoring of 50+ government entities with AI-powered threat detection. <strong style="color: #FFB800;">Not a single breach in 6 years.</strong>',
                        metrics: [
                            { value: '50+', label: 'Gov Entities' },
                            { value: '24/7', label: 'Monitoring' },
                            { value: '6yr', label: 'Zero Breaches' }
                        ],
                        tech: ['Fortinet FortiGate', 'Palo Alto NGFW', 'Splunk SIEM', 'NCA Certified']
                    },
                    {
                        number: '03',
                        badge: 'TELECOM',
                        title: 'Carrier-Grade<br>Datacenter Build',
                        description: 'Designed and deployed Tier III datacenter for major Saudi telecom operator. Supports <strong style="color: #00C4E6;">10 million subscribers</strong> with 99.99% uptime SLA. Full redundancy (N+1) across power, cooling, and network.',
                        metrics: [
                            { value: '10M', label: 'Subscribers' },
                            { value: 'Tier 3', label: 'Datacenter' },
                            { value: '99.99%', label: 'Uptime SLA' }
                        ],
                        tech: ['HPE 3PAR', 'Cisco UCS', 'Nutanix AHV', 'N+1 Redundancy']
                    }
                ]
            },
            stats: {
                title: 'Delivering Excellence at Scale',
                projects: 'Projects Delivered',
                clients: 'Trusted Clients',
                years: 'Years of Excellence',
                support: '24/7 Operations Support'
            },
            testimonials: {
                title: 'Shabakah Certifications'
            },
            // Featured Projects Carousel
            projectsCarousel: {
                tag: 'FEATURED PROJECTS',
                title: '',
                titleHighlight: 'Success stories',
                slides: [
                    {
                        badge: 'FINANCIAL SECTOR',
                        title: '1,300 Network Points &amp;<br>NTP Servers Installation',
                        description: 'Implementation of a structured cabling system consisting of <strong class="text-gold">1,300 network points</strong>, including termination, testing, and labeling, and deployment of centralized <strong class="text-teal">NTP servers</strong> to ensure accurate time synchronization across all network devices.',
                        metrics: { m1: '1,300', m1Label: 'Network points', m2: '3', m2Label: 'NTP servers', m3: 'SCS', m3Label: 'Delivery' },
                        tags: ['Structured cabling', 'Testing & labeling', 'Time sync', 'NTP rollout']
                    },
                    {
                        badge: 'GOVERNMENT',
                        title: 'Operation &amp; Maintenance<br>for GIS System',
                        description: 'Operation and maintenance of the GIS system, including monitoring, updates, troubleshooting, and technical support to ensure <strong class="text-teal">stable performance</strong> and <strong class="text-gold">continuous availability</strong> of geographic information services.',
                        metrics: { m1: '3yr', m1Label: 'Operations', m2: 'Esri', m2Label: 'GIS', m3: 'Oracle', m3Label: 'Database' },
                        tags: ['Esri GIS', 'Oracle DB', 'O&M', 'GIS support']
                    },
                    {
                        badge: 'SEMI-GOVERNMENT',
                        title: 'Enterprise IP Telephony<br>Upgrade &amp; Migration',
                        description: 'Upgrade and replacement of the existing IP telephony system with a modern enterprise <strong class="text-teal">Yeastar</strong> communications platform—including system design, deployment of IP PBX servers, configuration of IP phones, network integration, call routing configuration, and migration of existing services.',
                        metrics: { m1: 'Yeastar', m1Label: 'Platform', m2: 'IP PBX', m2Label: 'Deployment', m3: 'Full', m3Label: 'Migration' },
                        tags: ['Yeastar', 'IP telephony', 'Call routing', 'Migration services']
                    }
                ]
            },
            // Proof of Work Section
            proofSection: {
                title: "Trusted By Saudi Arabia's",
                titleHighlight: 'Most Critical Infrastructure',
                description: 'Real results from real projects',
                cards: [
                    {
                        badge: 'CONSTRUCTION',
                        title: '450 Mbps DIA — Diriyah Projects',
                        description:
                            'Deployment and provision of a 450 Mbps Dedicated Internet Access (DIA) service, ensuring secure connectivity to enterprise systems, cloud services, and project-management platforms.',
                        tags: ['DIA', '450 Mbps', 'ISO 27001']
                    },
                    {
                        badge: 'OIL & GAS',
                        title: '100 Mbps DIA — Major Oil & Gas Client',
                        description:
                            'Deployment and provision of a 100 Mbps Dedicated Internet Access (DIA) service to support the day-to-day operational requirements of one of the top oil and gas companies in KSA.',
                        tags: ['DIA', '100 Mbps', 'ISO 20000']
                    },
                    {
                        badge: 'GOV SECTOR',
                        title: 'VSAT Internet Service',
                        description:
                            'Deployment and provision of dedicated VSAT satellite Internet access to support mission-critical operations for this government entity.',
                        tags: ['VSAT', 'Satellite', 'ISO 22301']
                    }
                ]
            },
            // Trust Band
            trustBand: {
                html: 'Partnering with <strong style="color: var(--cyan-electric); font-weight: 700;">Leading</strong> Technology Vendors'
            },
            // Technology Section
            techSection: {
                title: 'Enterprise Technology',
                titleHighlight: 'We Master',
                description: 'Expertise across the entire IT solutions stack',
                categories: [
                    {
                        title: 'Physical security Systems',
                        items: ['Hikvision', 'Dahua', 'Bosch', 'Milestone', 'Hanwa', 'Honeywell', 'ZKT', 'suprema']
                    },
                    {
                        title: 'Integrated Security systems',
                        items: ['Fortinet', 'Sophos', 'Kaspersky', 'Trend micro', 'Palo alto']
                    },
                    { title: 'Network solutions', items: ['Cisco', 'Aruba', 'Huawei', 'Netgear'] },
                    { title: 'Data center Solutions', items: ['Dell', 'Huawei', 'HPE', 'Lenovo'] },
                    {
                        title: 'Unified communication',
                        items: ['3CX', 'Yeaster', 'Yealink', 'Avaya', 'Cisco', 'grandstream']
                    },
                    { title: 'Software License', items: ['Microsoft', 'Adobe', 'Esri', 'Autocad'] },
                    {
                        title: 'ISP services',
                        items: ['DIA', 'Colocation', 'VPS', 'Cloud services', 'Web hosting', 'Email hosting']
                    }
                ],
                ctaButton: 'View All Services →'
            },
            cta: {
                title: 'Ready to Transform Your Technology Infrastructure?',
                description: "Let's discuss how SHABAKAH can empower your organization with enterprise-grade ICT solutions",
                btn1: 'Start a Conversation',
                btn2: 'View All Services'
            },
            // Modern footer translations
            footerModern: {
                tagline: 'Enterprise-Grade ICT Excellence Since 1997. Transforming businesses across Saudi Arabia with innovative technology solutions.',
                columns: {
                    services: 'Services',
                    company: 'Company',
                    solutions: 'Solutions',
                    connect: 'Connect'
                },
                links: {
                    infrastructure: 'IT Infrastructure',
                    datacenter: 'Data Center Solutions',
                    physicalSecurity: 'Physical Security Systems',
                    communications: 'Unified Communications & Collaboration',
                    licensing: 'Software Licensing',
                    enduser: 'End-User Devices',
                    cybersecurity: 'Integrated Security & Business Continuity',
                    managed: 'Managed Services',
                    isp: 'ISP Services',
                    about: 'About Us',
                    journey: 'Our Journey',
                    partners: 'Partners',
                    solutions: 'Solutions',
                    contact: 'Contact',
                    government: 'Government',
                    healthcare: 'Healthcare',
                    finance: 'Finance',
                    education: 'Education',
                    iot: 'IoT Tracking'
                },
                contactInfo: {
                    location: 'Riyadh, Saudi Arabia',
                    phone: '+966 11 234 5678',
                    email: 'info@shabakah.sa',
                    support: '24/7 Support'
                },
                copyright: '© 2024 SHABAKAH Integrated Technology. All rights reserved.',
                certs: {
                    iso27001: 'ISO 27001',
                    iso22301: 'ISO 22301'
                }
            }
        },

        // ============ ABOUT PAGE ============
        about: {
            hero: {
                breadcrumb: 'About Us',
                title: 'About SHABAKAH',
                subtitle: '28 Years of ICT Excellence, Innovation, and Trust'
            },
            // Modern hero for about page
            heroModern: {
                titleLine1: 'About',
                titleLine2: 'SHABAKAH',
                subtitle: '28 Years of ICT Excellence, Innovation, and Trust — Pioneering digital transformation across Saudi Arabia.',
                stats: {
                    stat1: { number: '28+', label: 'Years Experience' },
                    stat2: { number: '3,500+', label: 'Projects Delivered' },
                    stat3: { number: '2,500+', label: 'Satisfied Clients' }
                }
            },
            overview: {
                tag: 'Our Story',
                title: 'Pioneering ICT Excellence Since 1997',
                p1: 'SHABAKAH Integrated Technology began its journey in 1997 as one of Saudi Arabia\'s pioneering Internet Service Providers. Over nearly three decades, we have evolved into a comprehensive ICT solutions provider, serving mission-critical infrastructure needs across government and enterprise sectors.',
                p2: 'Today, SHABAKAH stands as a trusted partner for organizations seeking enterprise-grade technology solutions. Our expertise spans IT infrastructure, Integrated Security solutions & Business Continuity, data centers, unified communications, and managed services, all delivered with unwavering commitment to security, reliability, and innovation.',
                p3: 'With over 3,500 projects delivered and 2,500+ satisfied clients, we continue to drive digital transformation across the Kingdom, aligned with Saudi Vision 2030\'s technology advancement goals.'
            },
            timeline: {
                tag: 'Our Journey',
                title: 'Milestones of Excellence',
                description: 'A timeline of innovation, growth, and unwavering commitment to technology excellence',
                milestones: {
                    1997: {
                        title: 'Foundation & ISP Launch',
                        description: 'SHABAKAH founded as one of Saudi Arabia\'s pioneering Internet Service Providers, bringing connectivity to businesses across the Kingdom.'
                    },
                    2005: {
                        title: 'Enterprise Solutions Expansion',
                        description: 'Expanded service portfolio to include enterprise IT infrastructure, networking, and systems integration services.'
                    },
                    2010: {
                        title: 'Hosting Data Center Establishment',
                        description: 'Established state-of-the-art local hosting data center facilities, offering private cloud and colocation services with Tier II standards.'
                    },
                    2015: {
                        title: 'ISO Certifications Achieved',
                        description: 'Attained ISO 27001 (Information Security) and ISO 22301 (Business Continuity) certifications, reinforcing our commitment to excellence. ISO certificates: ISO 27001 / ISO 20000 / ISO 9001.'
                    },
                    2020: {
                        title: 'Digital Transformation Partner',
                        description: 'Became a key technology partner supporting Saudi Vision 2030\'s digital transformation initiatives across government and enterprise sectors.'
                    },
                    2024: {
                        title: 'Expanding Our Services',
                        description: 'Expanding our services to include Smart systems, tracking systems, ISO consultation services, and managed services.'
                    }
                }
            },
            visionMission: {
                vision: {
                    title: 'Our Vision',
                    description: 'To be the most trusted and innovative ICT and ISP partner in the Middle East, empowering organizations with secure, resilient, and future-ready technology infrastructure that drives sustainable growth and digital transformation.'
                },
                mission: {
                    title: 'Our Mission',
                    description: 'To deliver enterprise-grade ICT and ISP solutions with unwavering commitment to security, reliability, and operational excellence. We partner with our clients to design, implement, and manage mission-critical technology infrastructure that exceeds expectations and drives business value.'
                }
            },
            philosophy: {
                tag: 'How We Work',
                title: 'Engineering Philosophy',
                description: 'Guiding principles that define every solution we deliver',
                items: [
                    {
                        number: '01',
                        title: 'Business-Driven Design',
                        description: 'Every solution starts with understanding the client\'s business goals. We design technology that directly supports operational efficiency, growth, and long-term continuity.',
                        features: []
                    },
                    {
                        number: '02',
                        title: 'Multi-Vendor Expertise',
                        description: 'Our team works across leading global technology vendors, enabling us to select the most suitable technologies for each environment.',
                        features: []
                    },
                    {
                        number: '03',
                        title: 'Security & Compliance First',
                        description: 'Security and compliance standards are embedded into every layer of the solution design and implementation process, following ISO standards 27001, 20000, 22301, 9001, and 45001.',
                        features: []
                    },
                    {
                        number: '04',
                        title: 'End-to-End Integration',
                        description: 'From infrastructure and connectivity to security and managed services, we ensure seamless integration across the entire IT ecosystem.',
                        features: []
                    },
                    {
                        number: '05',
                        title: '24/7 Help Desk Support',
                        description: 'Dedicated support team available 24/7 to assist with ISP connectivity and hosting services, troubleshooting, and guarantee service continuity.',
                        features: []
                    }
                ]
            },
            values: {
                tag: 'Our Values',
                title: 'What Drives Us',
                items: [
                    { title: 'Excellence', description: 'Pursuing the highest standards in everything we do' },
                    { title: 'Integrity', description: 'Operating with transparency, honesty, and ethical principles' },
                    { title: 'Innovation', description: 'Embracing cutting-edge technologies and creative solutions' },
                    { title: 'Partnership', description: 'Building long-term relationships based on mutual success' }
                ]
            }
        },

        // ============ SERVICES PAGE ============
        services: {
            hero: {
                breadcrumb: 'Services',
                title: 'Provide ICT Solutions & ISP Services',
                subtitle: 'Enterprise-Grade Technology Services Designed for Mission-Critical Operations'
            },
            // Modern hero for services page
            heroModern: {
                titleLine1: 'Provide ICT Solutions',
                titleLine2: '& ISP Services',
                subtitle: 'Enterprise-Grade Technology Services Designed for Mission-Critical Operations',
                stats: {
                    stat1: { number: 'SLA', label: 'contracts' },
                    stat2: { number: '24/7', label: 'support' },
                    stat3: { number: '99.75%', label: '\u00A0' }
                }
            },
            infrastructure: {
                tag: 'IT Infrastructure',
                title: 'Enterprise IT Infrastructure Solutions',
                description: 'Build resilient, scalable, and high-performance infrastructure that powers your digital transformation. Our comprehensive IT infrastructure services ensure your technology foundation is robust, secure, and future-ready.',
                features: [
                    { title: 'Network Infrastructure Design & Implementation', description: 'Enterprise-grade networking solutions with redundancy and high availability' },
                    { title: 'Server & Storage Solutions', description: 'Scalable compute and storage infrastructure tailored to your workloads' },
                    { title: 'Virtualization & Hyperconverged Infrastructure', description: 'Modern infrastructure platforms maximizing efficiency and agility' },
                    { title: 'Infrastructure Monitoring & Management', description: 'Proactive monitoring and optimization for peak performance' }
                ]
            },
            datacenter: {
                tag: 'Data Center Solutions',
                title: 'Private Cloud & Data Center Services',
                description: 'Deploy enterprise-class data centers and private cloud infrastructure that deliver exceptional performance, reliability, and security for your mission-critical applications and data.',
                features: [
                    { title: 'Private Cloud Architecture & Deployment', description: 'Secure, compliant cloud infrastructure with full control' },
                    { title: 'Data Center Design & Build', description: 'Tier III/IV data center facilities with redundant systems' },
                    { title: 'Hybrid Cloud Integration', description: 'Seamless integration between on-premises and cloud environments' },
                    { title: 'Disaster Recovery & Business Continuity', description: 'Comprehensive DR solutions ensuring business resilience' }
                ]
            },
            physicalsecurity: {
                tag: 'Physical Security Systems',
                title: 'CCTV, Access Control & Perimeter Protection',
                description: 'Design and deploy physical security that gives you full visibility and control across sites, branches, and critical facilities—from surveillance to access policies and vehicle or pedestrian flow.',
                features: [
                    { title: 'CCTV & Video Surveillance', description: 'Design, deployment, and integration of enterprise-grade camera systems and monitoring' },
                    { title: 'Access Control Systems', description: 'Card, biometric, and policy-based entry for staff, visitors, and restricted zones' },
                    { title: 'Barrier Gates & Vehicle Control', description: 'Gates, barriers, and integrations for people and vehicle access where throughput matters' },
                    { title: 'Centralized Monitoring', description: 'Unified monitoring workflows, alerts, and reporting aligned with your operations' }
                ]
            },
            communications: {
                tag: 'Unified Communications & Collaboration',
                title: 'Integrated Communication Platforms',
                description: 'Modernize your communication infrastructure with unified platforms that integrate voice, video, messaging, and collaboration tools for enhanced productivity and seamless collaboration.',
                features: [
                    { title: 'Enterprise Voice Solutions', description: 'VoIP, IP telephony, and contact center platforms' },
                    { title: 'Video Conferencing Systems', description: 'High-quality video collaboration for remote teams' },
                    { title: 'Collaboration Tools Integration', description: 'Unified messaging, presence, and collaboration platforms' },
                    { title: 'Mobile & Remote Workforce Solutions', description: 'Secure communications for distributed teams' }
                ]
            },
            enduser: {
                tag: 'End-User Devices',
                title: 'Device Supply, Lifecycle & Unified Endpoint Management',
                description: 'Equip teams with the right hardware and manage endpoints consistently—from procurement and imaging to modern management with Intune, Workspace ONE, ManageEngine, and related platforms.',
                features: [
                    { title: 'Enterprise Device Supply', description: 'Dell, HP, Lenovo and other tier-one vendors with warranty-aligned rollout and support' },
                    { title: 'Centralized Endpoint Management', description: 'Microsoft Intune, VMware Workspace ONE, ManageEngine, and modern UEM toolchains' },
                    { title: 'Virtual Desktop & DaaS', description: 'VDI and cloud desktop patterns where security and mobility are priorities' },
                    { title: 'Application Delivery', description: 'Application virtualization and streamlined delivery for distributed users' }
                ]
            },
            licensing: {
                tag: 'Software Licensing',
                title: 'Cloud & Enterprise Licensing Solutions',
                description: 'Optimize your software investments with expert licensing management, compliance oversight, and strategic guidance for cloud and enterprise software portfolios.',
                features: [
                    { title: 'Enterprise Licensing Programs', description: 'Microsoft, Oracle, VMware, and other enterprise agreements' },
                    { title: 'Cloud Subscription Management', description: 'Azure, AWS, Google Cloud licensing and optimization' },
                    { title: 'License Compliance & Auditing', description: 'Ensure compliance and optimize licensing costs' },
                    { title: 'Software Asset Management (SAM)', description: 'Comprehensive tracking and optimization of software assets' }
                ]
            },
            cybersecurity: {
                tag: 'Integrated Security & Business Continuity',
                title: 'Protect Critical Systems, Identity & Data',
                description: 'Layered IT security and resilience aligned with NCA expectations and international practice—covering network edge, endpoints, identity, and backup so your organization can detect, respond, and recover with confidence.',
                features: [
                    { title: 'Next-Generation Firewalls & IDS/IPS', description: 'Modern perimeter controls, segmentation, and threat-aware policy design' },
                    { title: 'Endpoint Protection & EDR', description: 'Advanced endpoint defenses, monitoring, and response workflows' },
                    { title: 'Identity & Access (IAM / PAM)', description: 'Privileged access, least-privilege design, and identity lifecycle controls' },
                    { title: 'Backup, Recovery & Continuity', description: 'Resilient backup architectures and recovery aligned with ISO 22301 practices' }
                ]
            },
            managed: {
                tag: 'Managed Services',
                title: '24/7 Operations & Support Services',
                description: 'Focus on your core business while we manage your IT infrastructure. Our managed services deliver proactive monitoring, maintenance, and optimization ensuring peak performance and minimal downtime.',
                features: [
                    { title: '24/7 Infrastructure Monitoring', description: 'Continuous monitoring and alerting for all systems' },
                    { title: 'Proactive Maintenance & Patching', description: 'Regular updates and maintenance during off-peak hours' },
                    { title: 'Help Desk & Technical Support', description: 'Multi-tier support with guaranteed response times' },
                    { title: 'Performance Optimization', description: 'Continuous tuning and capacity planning' }
                ]
            },
            isp: {
                tag: 'ISP Services',
                title: 'Dedicated Internet, Hosting & Mission-Critical Support',
                description: 'As a long-established provider, we deliver enterprise-grade connectivity and hosting with clear SLAs—supporting continuity, cloud adoption, and digital growth across the Kingdom.',
                features: [
                    { title: 'Dedicated Internet Access (DIA)', description: 'High-performance enterprise connectivity with committed bandwidth and paths' },
                    { title: 'Hosting & Colocation', description: 'Secure hosting options aligned to workload, compliance, and availability targets' },
                    { title: '24/7 Technical Support', description: 'Round-the-clock engineering support for mission-critical operations' },
                    { title: 'Connectivity Consulting', description: 'Architecture for branches, SD-WAN integration, and performance optimization' }
                ]
            },
            sectorSolutions: {
                tag: 'Industry Solutions',
                title: 'Sector-Specific Technology Solutions',
                description: 'Comprehensive ICT solutions designed for the unique challenges and requirements of different industries',
                cards: [
                    {
                        title: 'Government & Public Sector',
                        description: 'Digital transformation solutions aligned with Vision 2030 objectives, enabling smart government initiatives and citizen services.',
                        features: ['E-Government platforms', 'Smart city infrastructure', 'Digital identity solutions', 'NCA compliance frameworks']
                    },
                    {
                        title: 'Financial Services',
                        description: 'Secure, compliant technology infrastructure for banking and financial institutions with robust security and high availability.',
                        features: ['Core banking infrastructure', 'Payment gateway systems', 'Fraud detection & prevention', 'Regulatory compliance']
                    },
                    {
                        title: 'Healthcare',
                        description: 'Integrated healthcare IT systems supporting patient care, medical records management, and healthcare analytics.',
                        features: ['Electronic health records', 'Hospital information systems', 'Telemedicine platforms', 'Medical data security']
                    },
                    {
                        title: 'Education',
                        description: 'Modern educational technology infrastructure enabling digital learning and administrative efficiency for institutions.',
                        features: ['Learning management systems', 'Virtual classroom platforms', 'Student information systems', 'Campus network infrastructure']
                    },
                    {
                        title: 'Energy & Utilities',
                        description: 'Industrial-grade IT infrastructure for energy sector operations, SCADA systems, and resource management.',
                        features: ['SCADA & control systems', 'Asset management platforms', 'Smart grid technologies', 'Operational technology security']
                    },
                    {
                        title: 'Manufacturing',
                        description: 'Industry 4.0 solutions integrating IoT, automation, and data analytics for smart manufacturing operations.',
                        features: ['Industrial IoT platforms', 'Manufacturing execution systems', 'Supply chain integration', 'Predictive maintenance']
                    }
                ]
            }
        },

        // ============ SOLUTIONS PAGE ============
        solutions: {
            hero: {
                breadcrumb: 'Solutions',
                title: 'Our Technology Solutions',
                subtitle: 'Tailored ICT Solutions for Your Sector'
            },
            // Modern hero for solutions page
            heroModern: {
                titleLine1: 'Our Technology',
                titleLine2: 'Solutions',
                subtitle: 'Tailored Technology Solutions for Government and Enterprise Sectors',
                stats: [
                    { number: '', label: 'Active Networking.' },
                    { number: '', label: 'Passive infrastructure.' },
                    { number: '', label: 'Servers and Storage.' },
                    { number: '', label: 'Unified Communication.' },
                    { number: '', label: 'Information Security.' },
                    { number: '', label: 'Data Center Infrastructure.' },
                    { number: '', label: 'Physical Security & CCTV.' },
                    { number: '', label: 'Backup & Virtualization.' }
                ]
            },
            overview: {
                tag: 'Our Solutions',
                title: 'Wide range of Technology Solutions',
                description: 'Comprehensive ICT solutions designed for the unique challenges and requirements of different industries'
            },
            softwareLicensing: {
                title: 'Software Licensing',
                features: [
                    'Supply and install original software licenses: Microsoft, Adobe, and others.',
                    'Supply and activate cloud licenses: O365, Azure, and others.'
                ],
                goal: 'Deliver the original software licenses with a fast and reliable activation process.'
            },
            integratedSecurityBc: {
                title: 'Integrated Security solutions & Business Continuity',
                features: [
                    'Next-Generation Firewalls & Intrusion IDS/IPS',
                    'Endpoint protection & EDR',
                    'Identity & Access Management IAM / PAM',
                    'Backup and recovery systems'
                ],
                goal: 'To protect your core systems and data by securing your IT environment and ensuring business continuity.'
            },
            endUserDevices: {
                title: 'End-User Devices',
                features: [
                    'Supply & install end-user devices from leading brands: Dell, HP, Lenovo including vendor warranty & support.',
                    'Deploy centralized endpoint management using up-to-date tools such as Intune, VMware Workspace ONE, ManageEngine.'
                ],
                goal: 'Provide end-user devices tailored to your business needs with unified management.'
            },
            approach: {
                tag: 'Our Approach',
                title: 'How We Deliver Solutions',
                steps: [
                    { number: '01', title: 'Discovery & Assessment', description: 'Comprehensive analysis of your business requirements, existing infrastructure, and strategic objectives.' },
                    { number: '02', title: 'Solution Design', description: 'Custom architecture and design aligned with industry best practices and your specific needs.' },
                    { number: '03', title: 'Implementation', description: 'Phased deployment with minimal disruption, following proven project management methodologies.' },
                    { number: '04', title: 'Optimization & Support', description: 'Continuous monitoring, optimization, and 24/7 support ensuring peak performance.' }
                ]
            },
            differentiators: {
                tag: 'What Sets Us Apart',
                title: 'The SHABAKAH Difference',
                cards: [
                    { title: 'Local Expertise', description: '28+ years serving Saudi market with deep understanding of regional requirements and regulations' },
                    { title: 'Certified Excellence', description: 'ISO 27001, ISO 22301, and NCA certified ensuring highest standards of quality and security' },
                    { title: 'Vendor Agnostic', description: 'Independent consultancy approach selecting best-fit technologies for your needs' },
                    { title: 'Vision 2030 Aligned', description: "Solutions supporting Saudi Arabia's digital transformation and economic diversification goals" }
                ]
            }
        },

        // ============ PARTNERS PAGE ============
        partners: {
            hero: {
                breadcrumb: 'Partners',
                title: 'Technology Partners',
                subtitle: 'Collaborating with Global Technology Leaders'
            },
            // Modern hero for partners page
            heroModern: {
                titleLine1: 'Strategic Technology',
                titleLine2: 'Partners',
                subtitle: 'SHABAKAH\'s wide range product portfolio is full of perfect choices that can enable us to select the best product for any specific need for every single project.'
            },
            intro: {
                tag: 'Strategic Partnerships',
                title: 'Best-of-Breed Technology Solutions',
                description: 'Our vendor-agnostic approach allows us to partner with the world\'s leading technology providers, ensuring you receive the best solutions for your specific needs.'
            },
            clients: {
                tag: 'Clients',
                title: 'Organizations we work with'
            },
            categories: {
                infrastructure: {
                    tag: 'Infrastructure',
                    title: 'Infrastructure & Computing Partners'
                },
                security: {
                    tag: 'Security',
                    title: 'Security & Protection Partners'
                },
                dataProtection: {
                    tag: 'Data Protection',
                    title: 'Backup & Recovery Partners'
                },
                cctv: {
                    tag: 'CCTV',
                    title: 'CCTV & Video Management Partners'
                },
                cabling: {
                    tag: 'Cabling',
                    title: 'Structured Cabling Partners'
                },
                accessControl: {
                    tag: 'Access Control',
                    title: 'Physical Access Partners'
                },
                network: {
                    tag: 'Networking',
                    title: 'Network Infrastructure Partners'
                },
                softwarePlatforms: {
                    tag: 'Software',
                    title: 'Software & Platform Partners'
                },
                unifiedComms: {
                    tag: 'Unified Communications',
                    title: 'Unified Communications Partners'
                }
            },
            partnerCards: {
                hpe: { name: 'Hewlett Packard Enterprise', description: 'Enterprise servers, storage solutions, and hybrid cloud infrastructure' },
                huawei: { name: 'Huawei', description: 'Next-generation data center and cloud infrastructure solutions' },
                lenovo: { name: 'Lenovo', description: 'Enterprise computing, servers, and end-user devices' },
                fortinet: { name: 'Fortinet', description: 'Advanced firewall, network security, and threat protection' },
                paloAlto: { name: 'Palo Alto Networks', description: 'Next-generation firewalls and cloud security platforms' },
                sophos: { name: 'Sophos', description: 'Endpoint protection and network security solutions' },
                kaspersky: { name: 'Kaspersky', description: 'Anti-malware, endpoint security, and threat intelligence' },
                veeam: { name: 'Veeam', description: 'Backup, disaster recovery, and data management solutions' },
                veritas: { name: 'Veritas', description: 'Enterprise backup, archiving, and business continuity' },
                cctvHikvision: { name: 'Hikvision', description: 'Video surveillance, NVRs, and integrated security platforms' },
                cctvDahua: { name: 'Dahua', description: 'CCTV, access control, and intelligent building solutions' },
                cctvHanwha: { name: 'Hanwha', description: 'Wisenet video security and analytics' },
                cctvBosch: { name: 'Bosch', description: 'Security, safety, and communications systems' },
                cctvHoneywell: { name: 'Honeywell', description: 'Building technologies and security solutions' },
                cctvAxis: { name: 'Axis', description: 'Network video, audio, and analytics' },
                cctvMilestone: { name: 'Milestone', description: 'Video management software (VMS)' },
                cablingCommScope: { name: 'CommScope', description: 'Structured cabling and connectivity infrastructure' },
                cablingPanduit: { name: 'Panduit', description: 'Physical infrastructure and network cabling systems' },
                cablingNexans: { name: 'Nexans', description: 'Copper and fiber cable solutions' },
                cablingCorning: { name: 'Corning', description: 'Optical fiber and connectivity' },
                cablingBelden: { name: 'Belden', description: 'Signal transmission and industrial networking' },
                accessZKTeco: { name: 'ZKTeco', description: 'Biometric and access control terminals' },
                accessSuprema: { name: 'Suprema', description: 'Biometrics and physical access solutions' },
                accessHikvision: { name: 'Hikvision', description: 'Access control integrated with video security' },
                accessDahua: { name: 'Dahua', description: 'Access and entrance management systems' },
                networkCisco: { name: 'Cisco', description: 'Enterprise switching, routing, and wireless' },
                networkAruba: { name: 'Aruba', description: 'Campus and branch networking (HPE Aruba)' },
                networkNetgear: { name: 'Netgear', description: 'Business networking and Wi-Fi' },
                networkHuawei: { name: 'Huawei', description: 'Network switches, WLAN, and data center networking' },
                softwareMicrosoft: { name: 'Microsoft', description: 'Cloud, productivity, and enterprise platforms' },
                softwareAdobe: { name: 'Adobe', description: 'Creative and document experience software' },
                softwareAutoCAD: { name: 'AutoCAD', description: 'Design and drafting software (Autodesk)' },
                softwareEsri: { name: 'Esri', description: 'GIS and location intelligence' },
                ucYealink: { name: 'Yealink', description: 'IP phones, video conferencing, and collaboration devices' },
                ucYeastar: { name: 'Yeastar', description: 'PBX and unified communications systems' },
                ucGrandstream: { name: 'Grandstream', description: 'UC endpoints, Wi-Fi, and networking' },
                ucAvaya: { name: 'Avaya', description: 'Contact center and enterprise communications' },
                ucCisco: { name: 'Cisco', description: 'Webex and collaboration infrastructure' }
            },
            benefits: {
                tag: 'Why It Matters',
                title: 'Partnership Advantages',
                items: [
                    { title: 'Certified Expertise', description: 'Our engineers hold advanced certifications from all major partners, ensuring expert implementation and support' },
                    { title: 'Priority Support', description: 'As authorized partners, we provide expedited vendor support channels and direct escalation paths' },
                    { title: 'Early Access', description: 'Access to latest technologies, beta programs, and product roadmaps from our partners' },
                    { title: 'Extended Warranties', description: 'Comprehensive warranty coverage and maintenance agreements through official channels' },
                    { title: 'Training Programs', description: 'Access to vendor training, workshops, and knowledge transfer programs for your team' },
                    { title: 'Genuine Products', description: '100% authentic products with full manufacturer warranties and support' }
                ]
            }
        },

        // ============ CONTACT PAGE ============
        contact: {
            hero: {
                breadcrumb: 'Contact',
                title: 'Get In Touch',
                subtitle: 'Let\'s Discuss How SHABAKAH Can Empower Your Organization'
            },
            // Modern hero for contact page
            heroModern: {
                titleLine1: 'Get In',
                titleLine2: 'Touch',
                subtitle: "Let's Discuss How SHABAKAH Can Empower Your Organization",
                stats: {
                    stat1: { number: '24h', label: 'Response Time' },
                    stat2: { number: 'Free', label: 'Consultation' },
                    stat3: { number: 'Expert', label: 'ICT Advisors' }
                }
            },
            form: {
                title: 'Send Us a Message',
                description: 'Fill out the form below and our team will get back to you within 24 hours',
                fields: {
                    name: 'Full Name *',
                    namePlaceholder: 'Your Name',
                    email: 'Email Address *',
                    emailPlaceholder: 'your.email@company.com',
                    phone: 'Phone Number',
                    phonePlaceholder: '+966 XX XXX XXXX',
                    company: 'Company',
                    companyPlaceholder: 'Company Name',
                    service: 'Service Interest',
                    servicePlaceholder: 'Select a service...',
                    message: 'Message *',
                    messagePlaceholder: 'Tell us about your project or requirements...',
                    submit: 'Send Message'
                },
                serviceOptions: {
                    infrastructure: 'IT Infrastructure',
                    datacenter: 'Data Center Solutions',
                    physicalsecurity: 'Physical Security Systems',
                    communications: 'Unified Communications & Collaboration',
                    licensing: 'Software Licensing',
                    enduser: 'End-User Devices',
                    cybersecurity: 'Integrated Security & Business Continuity',
                    managed: 'Managed Services',
                    isp: 'ISP Services',
                    other: 'Other'
                }
            },
            infoCards: {
                office: {
                    title: 'Our Office',
                    line1: 'Located in: Andalus Mall',
                    line2: 'Al Wurud, Olaya Street',
                    line3: 'Riyadh 12215, Saudi Arabia'
                },
                phone: {
                    title: 'Phone',
                    number: '(+966) 920033465',
                    note: '24/7 Support Available'
                },
                email: {
                    title: 'Email',
                    address: 'info@shabakah.sa',
                    note: 'We\'ll respond within 24 hours'
                },
                hours: {
                    title: 'Business Hours',
                    days: 'Sunday - Thursday',
                    time: '8:00 AM - 5:00 PM (GMT+3)'
                },
                social: {
                    title: 'Follow Us'
                }
            },
            info: {
                title: 'Contact Information',
                headquarters: {
                    title: 'Headquarters',
                    address: 'Riyadh, Saudi Arabia'
                },
                phone: {
                    title: 'Phone',
                    number: '+966 11 XXX XXXX'
                },
                email: {
                    title: 'Email',
                    address: 'info@shabakah.sa'
                },
                hours: {
                    title: 'Business Hours',
                    time: 'Sunday - Thursday: 8:00 AM - 5:00 PM'
                }
            }
        },

        // ============ RASED + ELM SERVICES + ISO PAGE ============
        iotTracking: {
            meta: {
                title: 'Rased Vehicle Tracking, Elm Services & ISO Certifications | SHABAKAH',
                description: 'Authorized Elm partner in Saudi Arabia delivering Muqeem, Tamm, Rased fleet tracking, and Smart Gate services, plus end-to-end ISO 9001, 14001, 27001 and 45001 certification consultancy.'
            },
            hero: {
                badge: 'Authorized Elm Partner · 20+ Years',
                title: 'Elm e-Services, Rased Fleet Tracking & ISO Consultancy',
                subtitle: 'Authorized Elm partner · 20+ years in Riyadh — Muqeem, Tamm, Rased, Smart Gate, and ISO consultancy with same-day activation, training, and renewal alerts before your subscription expires.',
                pillars: [
                    { title: 'Elm e-Services', description: 'Muqeem · Tamm · Rased · Smart Gate', anchor: '#elm-hub' },
                    { title: 'Rased Fleet Tracking', description: 'Live tracking, geofencing, driver behavior, web + mobile apps', anchor: '#rased' },
                    { title: 'ISO Certifications', description: '15+ international standards with hands-on audit readiness', anchor: '#iso' }
                ],
                buttons: {
                    demo: 'Talk to an Expert',
                    whatsapp: 'WhatsApp',
                    features: 'Explore Services'
                },
                stats: {
                    vehicles: { number: '5000', label: 'Vehicles Tracked' },
                    realtime: { number: '1', suffix: 's', label: 'Real-Time Updates' },
                    uptime: { number: '99', suffix: '.9%', label: 'Uptime SLA' },
                    platforms: { number: '2', label: 'Platforms (iOS & Android)' }
                }
            },
            trustStrip: {
                line1: 'Authorized reseller and after-sales partner of',
                elmLabel: 'Elm (علم) Information Security',
                line2: 'Listed on the Elm Partners directory · Riyadh, Saudi Arabia'
            },
            activationJourney: {
                tag: 'How it works',
                title: 'From request to live service — without interruption',
                steps: [
                    { title: 'Choose your service', description: 'Muqeem, Tamm, Rased, Smart Gate, or ISO — one form, one partner.' },
                    { title: 'We activate with Elm', description: 'Same-business-day activation after document verification.' },
                    { title: 'Training & onboarding', description: 'Hands-on training for your HR, fleet, or quality teams in Riyadh.' },
                    { title: 'Renewal alerts', description: 'We remind you before subscriptions expire — zero surprise downtime.' }
                ]
            },
            clients: {
                tag: 'Trusted by organizations',
                title: 'Organizations that rely on SHABAKAH',
                description: 'Elm e-services, fleet operations, and enterprise ICT delivered with local accountability.'
            },
            whyShabakah: {
                tag: 'Why SHABAKAH',
                title: 'Activate through us — not alone',
                items: [
                    { title: 'Riyadh support team', description: 'Local specialists in Arabic and English.' },
                    { title: 'Same-day activation', description: 'We handle Elm paperwork and onboarding fast.' },
                    { title: 'One partner, four Elm platforms', description: 'Muqeem, Tamm, Rased, and Smart Gate together.' },
                    { title: 'Published Tamm pricing', description: 'Transparent 8-tier fleet pricing on this page.' },
                    { title: 'ISO consultancy', description: 'Quality and compliance alongside Elm operations.' },
                    { title: 'Renewal reminders', description: 'Alerts before subscriptions expire.' }
                ]
            },
            elmHub: {
                tag: 'Elm Services Hub',
                title: 'Four Elm platforms, one accountable partner',
                description: 'SHABAKAH is a leading reseller and strategic partner of Elm (علم) for over twenty years, with a complete after-sales practice — onboarding, training, data updates, renewal alerts and rapid request handling — to guarantee zero service interruption.',
                cardCta: 'Explore details',
                cards: [
                    { id: 'muqeem', name: 'Muqeem', arabic: 'مقيم', icon: 'id-card', tagline: 'Residency & Passports', description: 'Manage residency, visa and exit/re-entry transactions for expatriate staff fully online.' },
                    { id: 'tamm', name: 'Tamm', arabic: 'تم', icon: 'car-front', tagline: 'Vehicles & Traffic', description: 'A direct e-channel to the General Directorate of Traffic for fleets, transport and leasing companies.' },
                    { id: 'rased', name: 'Rased', arabic: 'راصد', icon: 'satellite', tagline: 'Fleet Tracking', description: 'Cloud-based live tracking and operations management, accredited by the Saudi Transport General Authority.' },
                    { id: 'smart-gate', name: 'Smart Gate', arabic: 'البوابة الذكية', icon: 'shield-check', tagline: 'Permits & Verification', description: 'Issue digital visitor permits and verify person + vehicle data against official records in real time.' }
                ]
            },
            muqeem: {
                tag: 'Elm Service · Companies Only',
                title: 'Muqeem — Residency & Passport e-Services',
                arabic: 'خدمة مقيم',
                description: 'Muqeem lets establishments view their resident employees\' data and complete passport-directorate transactions online — instantly, anywhere, anytime — without visiting the General Directorate of Passports.',
                featuresLabel: 'What you can do',
                features: [
                    'Issue a new residency (Iqama) online',
                    'Renew Iqama before expiry — zero in-person visits',
                    'Issue exit & re-entry visas in minutes',
                    'Receive proactive alerts for visa and residency expiry',
                    'Pre-filled forms — no manual data entry',
                    'Reports on residents, visas, medical insurance and operations'
                ],
                callout: 'Available to registered establishments only — individuals cannot subscribe.',
                ctaLabel: 'Activate Muqeem subscription'
            },
            tamm: {
                tag: 'Elm Service · Fleets, Transport & Leasing',
                title: 'Tamm — Vehicle & Traffic e-Services',
                arabic: 'خدمة تم',
                description: 'Tamm helps organize the transport and vehicle sector in Saudi Arabia with advanced e-services that let clients complete their traffic-related transactions directly with the General Directorate of Traffic.',
                featuresLabel: 'Key transactions',
                features: [
                    'Add and cancel the actual driver',
                    'Driving licenses inquiry',
                    'Vehicle insurance inquiry',
                    'Issue and cancel local authorizations',
                    'Issue and cancel international authorizations',
                    'Vehicle ownership transfer',
                    'Issue and renew vehicle licenses (Istimara)',
                    'Vehicle information inquiry'
                ],
                pricingTag: 'Transparent Pricing',
                pricingTitle: 'Annual subscription — 8 tiers by fleet size',
                pricingNote: 'All prices are in SAR and exclude VAT.',
                pricingTierLabel: 'Tier',
                pricingRangeLabel: 'Vehicles',
                pricingPriceLabel: 'Annual price',
                pricingTiers: [
                    { tier: 1, range: '0 – 9 vehicles', short: '0–9', price: 1800 },
                    { tier: 2, range: '10 – 49 vehicles', short: '10–49', price: 3300 },
                    { tier: 3, range: '50 – 99 vehicles', short: '50–99', price: 4800 },
                    { tier: 4, range: '100 – 249 vehicles', short: '100–249', price: 7300 },
                    { tier: 5, range: '250 – 499 vehicles', short: '250–499', price: 9800 },
                    { tier: 6, range: '500 – 999 vehicles', short: '500–999', price: 12300 },
                    { tier: 7, range: '1,000 – 4,999 vehicles', short: '1k–5k', price: 16300 },
                    { tier: 8, range: '5,000 – 9,999 vehicles', short: '5k–10k', price: 20300 }
                ],
                currency: 'SAR',
                perYear: '/ year',
                ctaLabel: 'Subscribe to Tamm'
            },
            rasedSubnav: {
                platforms: 'Platforms',
                capabilities: 'Capabilities',
                outcomes: 'Outcomes',
                preview: 'Preview'
            },
            rasedModules: {
                tag: 'Rased · Service modules',
                title: 'Four modules for every fleet operation',
                description: 'Choose the Rased capabilities your organization needs — tracking, maintenance, operations, or rental.',
                items: [
                    { title: 'Vehicle tracking', description: 'Live GPS, geofencing, trip history, and instant alerts on web and mobile.', link: 'View capabilities' },
                    { title: 'Maintenance & operations', description: 'Work orders, preventive maintenance schedules, and technician workflows.', link: 'View capabilities' },
                    { title: 'Fleet operations', description: 'Dispatch, driver scoring, fuel analytics, and compliance reporting.', link: 'View capabilities' },
                    { title: 'Rental management', description: 'Contract tracking, handover/return checks, and rental fleet utilization.', link: 'Talk to sales' }
                ]
            },
            platformShowcase: {
                tag: 'Rased · Dual Platform',
                title: 'Rased — Complete Fleet Visibility, Anywhere',
                description: 'A powerful Web command center for administrators and a native Mobile application for on-the-go monitoring — both fully integrated with the Rased cloud.',
                webDashboard: {
                    title: 'Rased Web Dashboard',
                    subtitle: 'Enterprise Command Center',
                    features: [
                        'Comprehensive fleet overview',
                        'Advanced analytics & reporting',
                        'Multi-user role management',
                        'Bulk device registration',
                        'Custom alert configuration'
                    ],
                    mockupText: 'Dashboard Preview',
                    ctaLabel: 'Open web dashboard',
                    url: 'https://raqeeb.tracking.me'
                },
                mobileApp: {
                    title: 'Rased Mobile App',
                    subtitle: 'Fleet Management On-the-Go',
                    features: [
                        'Real-time location tracking',
                        'Instant push notifications',
                        'Trip history & playback',
                        'Driver behavior insights',
                        'Quick asset status checks'
                    ],
                    mockupText: 'Mobile App Preview',
                    iosLabel: 'Download on iOS',
                    iosUrl: 'https://apps.apple.com/pk/app/tracking-iot/id6755716190',
                    androidLabel: 'Get on Android',
                    androidUrl: 'https://play.google.com/store/apps/details?id=com.tracking.iot.app'
                },
                platformAccess: {
                    tag: 'Tracking IoT · Access',
                    title: 'Use Rased on any device',
                    description: 'Open the web command center or install the native mobile app.',
                    items: [
                        { label: 'Computer', hint: 'raqeeb.tracking.me', url: 'https://raqeeb.tracking.me', icon: 'monitor' },
                        { label: 'iOS', hint: 'App Store', url: 'https://apps.apple.com/pk/app/tracking-iot/id6755716190', icon: 'smartphone' },
                        { label: 'Android', hint: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.tracking.iot.app', icon: 'smartphone' }
                    ]
                }
            },
            features: {
                tag: 'Rased · Core Capabilities',
                title: 'Enterprise-Grade Fleet Functionalities',
                items: [
                    {
                        title: 'Real-Time Monitoring',
                        features: [
                            'Live location updates on interactive maps',
                            'Asset status: Moving, Idling, Disconnected',
                            'Heat maps for asset density visualization'
                        ]
                    },
                    {
                        title: 'Fleet & Asset Management',
                        features: [
                            'Asset categorization and grouping',
                            'Device registration & configuration',
                            'SIM management & connectivity tracking'
                        ]
                    },
                    {
                        title: 'Safety & Driver Behavior',
                        features: [
                            'Automated behavior scoring system',
                            'Real-time alerts: speeding, harsh events',
                            'Fatigue monitoring & break tracking'
                        ]
                    },
                    {
                        title: 'Operational Efficiency',
                        features: [
                            'Fuel consumption & mileage reports',
                            'Complete trip history with playback',
                            'Geofencing with entry/exit alerts'
                        ]
                    },
                    {
                        title: 'Administration & Maintenance',
                        features: [
                            'Custom alert rule configuration',
                            'Technician management tools',
                            'Comprehensive compliance reporting'
                        ]
                    }
                ]
            },
            value: {
                tag: 'Rased · Core Value',
                title: 'Your Fleet Command Center',
                description: 'More than just location tracking — actionable insights for safety, cost control and operational excellence.',
                items: [
                    { title: 'Reduce Accidents', description: 'Monitor harsh events and driver behavior to improve safety and reduce incident rates.' },
                    { title: 'Lower Fuel Costs', description: 'Track fuel efficiency and identify wasteful driving patterns to cut operational expenses.' },
                    { title: 'Extend Vehicle Lifespan', description: 'Proactive maintenance alerts and reduced harsh driving protect your fleet investment.' }
                ]
            },
            gallery: {
                tag: 'Rased · Platform Preview',
                title: 'See Rased in Action',
                items: [
                    'Live Tracking Dashboard',
                    'Analytics & Reports',
                    'Mobile Application',
                    'Safety Monitoring'
                ]
            },
            smartGate: {
                tag: 'Elm Service · Security & Permits',
                title: 'Smart Gate (Tasreeh) — Digital Permits & Verification',
                arabic: 'البوابة الذكية',
                description: 'Smart Gate is a fully digital window into trusted security services. It verifies the status of individuals and vehicles in real time with one clear goal: strengthen security and raise the level of safety required for vital facilities.',
                paragraph: 'Because the workflow is 100% electronic from the first step to the last, it is completely free of human errors during data verification and dramatically reduces fraud and forgery attempts.',
                benefitsLabel: 'Why it matters',
                benefits: [
                    { title: '100% Digital', description: 'End-to-end electronic workflow from request to permit issuance.', icon: 'monitor-smartphone' },
                    { title: 'Anti-Fraud', description: 'Live verification against official records prevents tampered or forged data.', icon: 'shield-alert' },
                    { title: 'Person + Vehicle', description: 'Validate both visitor identity and vehicle plates in a single transaction.', icon: 'scan-face' },
                    { title: 'Facility-Owner Rules', description: 'Custom permit policies, working hours and approval flows per facility.', icon: 'building-2' }
                ],
                actionsLabel: 'Available transactions',
                actions: [
                    'Issue visitor entry permit',
                    'Verify individual against official records',
                    'Verify vehicle and plate data',
                    'Facility-owner rules and approvals'
                ],
                ctaLabel: 'Activate Smart Gate'
            },
            guides: {
                tag: 'How-to guides',
                title: 'Step-by-step guides for Elm platforms',
                description: 'Practical walkthroughs for HR, fleet, and operations teams — activation support included.',
                readLink: 'Read guide',
                items: [
                    { title: 'Log in to Muqeem', excerpt: 'Access your establishment portal and verify user permissions before starting transactions.', url: '#support' },
                    { title: 'Issue or renew Iqama', excerpt: 'Complete residency issuance and renewal online with pre-filled employee data.', url: '#support' },
                    { title: 'Subscribe to Muqeem', excerpt: 'Documents required for establishment registration and SHABAKAH-assisted activation.', url: '#support' },
                    { title: 'Register or migrate to Tamm', excerpt: 'Onboard your fleet to Tamm and link vehicles to the General Directorate of Traffic.', url: '#support' },
                    { title: 'Add the actual driver in Tamm', excerpt: 'Assign or remove the actual driver for fleet vehicles in a few guided steps.', url: '#support' },
                    { title: 'Rased mobile app overview', excerpt: 'Install the app, enable alerts, and monitor live fleet status from your phone.', url: 'https://apps.apple.com/pk/app/tracking-iot/id6755716190' }
                ]
            },
            officialLinks: {
                tag: 'Official portals',
                title: 'Use the official Elm platforms',
                description: 'We handle activation and training — you operate on the official Muqeem, Tamm, Rased, and Smart Gate portals.',
                portals: [
                    { name: 'Muqeem portal', url: 'https://muqeem.sa/' },
                    { name: 'Tamm portal', url: 'https://tamm.sa/' },
                    { name: 'Rased portal', url: 'https://rased.sa/' },
                    { name: 'Smart Gate (Elm)', url: 'https://www.elm.sa/en/services/smart-gate' }
                ]
            },
            iso: {
                tag: 'ISO Certification Consultancy',
                title: 'From gap analysis to certificate — handled end-to-end',
                description: 'SHABAKAH is a leading specialist in integrated quality and management-systems solutions, with deep experience qualifying and developing organizations of every size and sector. Our methodology centers on understanding each business\'s nature and operational needs so we can design and apply systems that genuinely raise institutional performance and sustainability.',
                paragraphs: [
                    'We deliver complete advisory services: current-state assessment, gap analysis, policy & procedure authoring, forms & records, supporting org structures, plus training programs that elevate your teams and embed a culture of quality.',
                    'Quality management systems improve operational efficiency, reduce errors and waste, sharpen risk management, raise customer satisfaction, ensure regulatory compliance inside the Kingdom, and boost the competitive standing and reputation of your institution.',
                    'SHABAKAH commits to a long-term strategic-partner role — from planning and qualification through monitoring and continuous improvement — so the system stays sustainable and keeps pace with growth ambitions.'
                ],
                methodologyTag: 'Our 4-step methodology',
                methodologyTitle: 'How we deliver certification',
                methodology: [
                    { step: '01', title: 'Gap Analysis', description: 'Diagnose the current state, map it against the target standard and define the certification roadmap.', icon: 'search' },
                    { step: '02', title: 'Policies & Procedures', description: 'Author policies, procedures, forms and records tailored to your operations and structure.', icon: 'file-text' },
                    { step: '03', title: 'Training & Awareness', description: 'Train your teams, embed the quality culture and run internal-audit simulations.', icon: 'graduation-cap' },
                    { step: '04', title: 'Certification Audit', description: 'Walk you through the external audit, close findings and secure the international certificate.', icon: 'award' }
                ],
                standardsTag: '15+ Standards Available',
                standardsTitle: 'International standards we deliver',
                standardsDescription: 'Filter by domain to find the standard matching your sector.',
                standards: [
                    { code: 'ISO 9001:2015', name: 'Quality Management System', description: 'Improve product and service quality through effective process management and continuous improvement.', category: 'quality', icon: 'badge-check' },
                    { code: 'ISO 14001:2015', name: 'Environmental Management System', description: 'Manage environmental impacts efficiently, reduce risk and comply with environmental regulations.', category: 'environment', icon: 'leaf' },
                    { code: 'ISO 45001:2018', name: 'Occupational Health & Safety', description: 'Provide a safer, healthier workplace by identifying hazards and reducing incidents.', category: 'safety', icon: 'hard-hat' },
                    { code: 'ISO 22000:2018', name: 'Food Safety Management', description: 'Control hazards across the food supply chain and meet regulatory requirements.', category: 'food', icon: 'utensils' },
                    { code: 'HACCP', name: 'Hazard Analysis Critical Control Point', description: 'Preventive methodology that identifies and controls hazards through critical control points.', category: 'food', icon: 'list-checks' },
                    { code: 'ISO 13485:2016', name: 'Medical Device Quality', description: 'Specialized QMS for medical devices and supplies, ensuring compliance and patient safety.', category: 'health', icon: 'heart-pulse' },
                    { code: 'ISO 20000-1:2018', name: 'IT Service Management', description: 'Deliver stable, reliable IT services that meet client needs and business requirements.', category: 'it', icon: 'server' },
                    { code: 'ISO 27001:2022', name: 'Information Security Management', description: 'Protect sensitive information and data through effective security controls.', category: 'security', icon: 'shield-check' },
                    { code: 'ISO 18788:2015', name: 'Private Security Operations', description: 'Manage private security operations with legal compliance and respect for human rights.', category: 'security', icon: 'shield' },
                    { code: 'ISO 41001:2018', name: 'Facility Management', description: 'Improve facility and support-services management to sustain business and resource efficiency.', category: 'assets', icon: 'building' },
                    { code: 'ISO 21001:2018', name: 'Educational Organizations', description: 'Improve the quality of educational services and raise learner satisfaction.', category: 'education', icon: 'graduation-cap' },
                    { code: 'ISO 22301:2019', name: 'Business Continuity', description: 'Prepare for crises and ensure continuity of operations during disruption.', category: 'continuity', icon: 'life-buoy' },
                    { code: 'ISO 44001:2017', name: 'Collaborative Business Relations', description: 'Structured framework for managing partnerships and collaborative relationships.', category: 'compliance', icon: 'handshake' },
                    { code: 'ISO 55001:2014', name: 'Asset Management', description: 'Manage physical and intangible assets throughout their lifecycle to maximize value.', category: 'assets', icon: 'recycle' },
                    { code: 'ISO 37301:2021', name: 'Compliance Management', description: 'Help institutions comply with legal and regulatory requirements and embed strong governance.', category: 'compliance', icon: 'gavel' },
                    { code: 'More on request', name: 'Sector-specific standards', description: 'We also deliver other domain-specific standards on request — talk to our consultants for a custom roadmap.', category: 'compliance', icon: 'sparkles' }
                ],
                ctaLabel: 'Request ISO consultation'
            },
            isoCategories: {
                all: 'All standards',
                quality: 'Quality',
                environment: 'Environment',
                safety: 'Health & Safety',
                food: 'Food',
                health: 'Healthcare',
                it: 'IT',
                security: 'Security',
                education: 'Education',
                continuity: 'Continuity',
                assets: 'Assets',
                compliance: 'Compliance'
            },
            support: {
                tag: 'Support · Available All Week',
                title: 'Talk to a SHABAKAH specialist',
                description: 'Activation, technical support, subscription renewal alerts and operational training — handled directly by our team in Riyadh.',
                channels: {
                    phone: { label: 'Direct line', value: '+966 920033465', href: 'tel:+966920033465', icon: 'phone' },
                    whatsapp: { label: 'WhatsApp', value: '+966 920033465', href: '#', icon: 'message-circle' },
                    email: { label: 'Email', value: 'info@shabakah.sa', href: 'mailto:info@shabakah.sa', icon: 'mail' },
                    location: { label: 'Office', value: 'Andalus Mall, Riyadh', icon: 'map-pin' }
                },
                form: {
                    title: 'Request activation or a callback',
                    name: 'Full name',
                    company: 'Company / Establishment',
                    phone: 'Phone',
                    service: 'Interested in',
                    serviceOptions: ['Muqeem', 'Tamm', 'Rased', 'Smart Gate', 'ISO Consultancy', 'Other'],
                    message: 'How can we help?',
                    submit: 'Send Request',
                    note: 'We typically respond within one business hour.'
                }
            },
            faq: {
                tag: 'FAQ',
                title: 'Frequently asked questions',
                categories: {
                    all: 'All',
                    muqeem: 'Muqeem',
                    tamm: 'Tamm',
                    rased: 'Rased',
                    'smart-gate': 'Smart Gate',
                    iso: 'ISO'
                },
                items: [
                    { category: 'muqeem', q: 'What is Muqeem and who can use it?', a: 'Muqeem is an Elm-powered platform that lets companies handle passport and residency transactions for their resident staff online. The service is available to registered establishments only, not individuals.' },
                    { category: 'muqeem', q: 'How does Muqeem subscription pricing work?', a: 'Muqeem is billed per establishment based on active residents and selected service bundle. SHABAKAH quotes the exact annual fee after reviewing your workforce size — no hidden charges.' },
                    { category: 'tamm', q: 'How is Tamm priced for fleets?', a: 'Tamm is priced in 8 tiers based on fleet size, starting at 1,800 SAR for 0-9 vehicles and going up to 20,300 SAR for 5,000-9,999 vehicles. All prices exclude VAT.' },
                    { category: 'tamm', q: 'How do I add or remove the actual driver in Tamm?', a: 'From the Tamm fleet portal, open the vehicle record, choose Actual Driver, then add or cancel the driver linked to the plate. SHABAKAH provides hands-on training for your transport team.' },
                    { category: 'tamm', q: 'How do I register or migrate my fleet to Tamm?', a: 'Submit your commercial registration, fleet list, and authorized signatory details. We register your establishment with Elm and migrate existing vehicles within the same business day when documents are complete.' },
                    { category: 'rased', q: 'Is Rased the same as Raqeeb?', a: 'Yes. Rased is the official Elm vehicle-tracking cloud service. SHABAKAH delivers it with full activation, training and 24/7 support, accredited by the Saudi Transport General Authority.' },
                    { category: 'rased', q: 'Does Rased include a mobile app?', a: 'Yes. Rased ships with a web command-center dashboard and a native mobile app for iOS and Android, covering live tracking, trip history, geofencing and driver scoring.' },
                    { category: 'rased', q: 'How long is trip history stored in Rased?', a: 'Trip archives are available for playback and export based on your subscription tier — typically 90 days to 12 months. Contact us for archive retention that matches your compliance needs.' },
                    { category: 'smart-gate', q: 'What does Smart Gate do?', a: 'Smart Gate issues digital visitor permits for vital facilities and verifies person + vehicle data against official records — eliminating manual paperwork and fraud risk.' },
                    { category: 'iso', q: 'Which ISO standards does SHABAKAH cover?', a: 'We deliver end-to-end consultancy for ISO 9001, 14001, 45001, 22000, HACCP, 13485, 20000-1, 27001, 18788, 41001, 21001, 22301, 44001, 55001 and 37301, plus other sector standards on request.' },
                    { category: 'general', q: 'How fast can a new Elm subscription be activated?', a: 'Most subscriptions activate within the same business day once documents are verified. Our after-sales team also tracks renewal dates so your service never lapses.' },
                    { category: 'general', q: 'Why activate Elm services through SHABAKAH?', a: 'You get Riyadh-based support in Arabic and English, same-day activation, training for your teams, renewal reminders, published Tamm pricing, and one partner for Muqeem, Tamm, Rased, Smart Gate, and ISO consultancy.' }
                ]
            },
            mobileContact: {
                call: 'Call',
                whatsapp: 'WhatsApp'
            }
        },

        // ============ FOOTER ============
        footer: {
            tagline: 'Enterprise-Grade ICT Excellence Since 1997',
            newsletter: {
                title: 'Stay Updated',
                description: 'Subscribe to our newsletter for the latest ICT insights and updates',
                placeholder: 'Enter your email',
                button: 'Subscribe'
            },
            sections: {
                services: 'Services',
                company: 'Company',
                resources: 'Resources',
                connect: 'Connect'
            },
            links: {
                infrastructure: 'IT Infrastructure',
                datacenter: 'Data Center Solutions',
                physicalSecurity: 'Physical Security Systems',
                communications: 'Unified Communications & Collaboration',
                licensing: 'Software Licensing',
                enduser: 'End-User Devices',
                cybersecurity: 'Integrated Security & Business Continuity',
                managed: 'Managed Services',
                isp: 'ISP Services',
                about: 'About Us',
                careers: 'Careers',
                partners: 'Partners',
                contact: 'Contact Us',
                blog: 'Blog',
                caseStudies: 'Case Studies',
                whitepapers: 'Whitepapers',
                support: 'Support'
            },
            copyright: '© 2024 SHABAKAH Integrated Technology. All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            certified: 'ISO 27001 | ISO 22301 Certified'
        }
    },

    ar: {
        // ============ التنقل ============
        nav: {
            home: 'الرئيسية',
            about: 'من نحن',
            services: 'الخدمات',
            solutions: 'الحلول',
            partners: 'الشركاء',
            contact: 'تواصل معنا',
            serviceDropdown: 'الخدمات',
            megaMenu: {
                infrastructure: {
                    title: 'البنية التحتية لتقنية المعلومات',
                    description: 'حلول بنية تحتية على مستوى المؤسسات',
                    link: 'اعرف المزيد ←'
                },
                datacenter: {
                    title: 'حلول مراكز البيانات',
                    description: 'سحابة خاصة وبناء مراكز بيانات معتمدة',
                    link: 'اعرف المزيد ←'
                },
                physicalSecurity: {
                    title: 'أنظمة الأمن المادي',
                    description: 'CCTV والتحكم بالدخول وحماية المحيط',
                    link: 'اعرف المزيد ←'
                },
                communications: {
                    title: 'الاتصالات الموحدة والتعاون',
                    description: 'صوت وفيديو ورسائل واجتماعات',
                    link: 'اعرف المزيد ←'
                },
                licensing: {
                    title: 'ترخيص البرمجيات',
                    description: 'حلول الترخيص السحابي والمؤسسي',
                    link: 'اعرف المزيد ←'
                },
                enduser: {
                    title: 'أجهزة المستخدم النهائي',
                    description: 'توريد أجهزة وإدارة موحدة لنقاط النهاية',
                    link: 'اعرف المزيد ←'
                },
                cybersecurity: {
                    title: 'الأمن المتكامل واستمرارية الأعمال',
                    description: 'جدران حماية وEDR وهوية ونسخ احتياطي',
                    link: 'اعرف المزيد ←'
                },
                managed: {
                    title: 'الخدمات المُدارة',
                    description: 'تشغيل على مدار الساعة ومراقبة ودعم فني',
                    link: 'اعرف المزيد ←'
                },
                isp: {
                    title: 'خدمات مزود خدمة الإنترنت (ISP)',
                    description: 'DIA واستضافة واتصال للمهام الحيوية',
                    link: 'اعرف المزيد ←'
                }
            }
        },

        // ============ عناصر مشتركة ============
        common: {
            search: {
                placeholder: 'ابحث في الخدمات، الحلول، المعلومات...',
                button: 'بحث'
            },
            cookie: {
                message: 'نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل حركة المرور. باستمرارك في استخدام هذا الموقع، فإنك توافق على استخدامنا لملفات تعريف الارتباط.',
                learnMore: 'اعرف المزيد',
                accept: 'قبول'
            }
        },

        // ============ الصفحة الرئيسية ============
        home: {
            hero: {
                title: 'رؤية سعودية.',
                subtitle: 'تميّز تقني على مستوى المؤسسات',
                since: 'منذ عام 1997',
                description: 'تمكين العمليات الحيوية من خلال بنية تحتية تقنية عالمية المستوى، والأمن السيبراني، والخدمات المُدارة في جميع أنحاء المملكة العربية السعودية وما بعدها.',
                cta1: 'استكشف الخدمات',
                cta2: 'تواصل معنا',
                scroll: 'تصفح للاستكشاف',
                stats: {
                    years: 'عاماً من التميز',
                    projects: 'مشروع منجز',
                    clients: 'عميل موثوق'
                }
            },
            heroBold: {
                line1: 'نبني',
                line2: 'أساس تقنية المعلومات',
                line3: 'لمؤسسات الأعمال السعودية',
                description: 'أكثر من 50,000 مشروع تقنية معلومات تم تنفيذه بنجاح، مع الاعتماد على ست معايير ISO دولية، ومركز بيانات لمزود خدمة إنترنت معتمد من CST.',
                stats: {
                    established: 'تأسست',
                    projects: 'مشاريع ناجحة',
                    branches: 'فروع في السعودية ومصر',
                    experience: 'سنوات خبرة',
                    cstDataCenter: 'مركز بيانات مرخّص (CST)',
                    localHosting: 'مركز بيانات استضافة محلي',
                    localDia: 'مزود خدمة DIA محلي',
                    isoCerts: 'شهادات ISO'
                }
            },
            heroOrbLabels: ['DIA', 'خدمات السحابة', 'البنية التحتية الذكية', 'VSAT', 'التعهيد الخارجي'],
            why: {
                tag: 'لماذا تختارنا',
                title: 'ميزة شبكة',
                description: 'ما يقارب ثلاثة عقود من الالتزام الثابت بالتميز والابتكار ونجاح العملاء',
                cards: {
                    security: {
                        title: 'الأمن بالتصميم',
                        description: 'بنية أمنية على مستوى المؤسسات مع شهادات ISO 27001 و ISO 22301، لضمان حماية بياناتك وعملياتك.'
                    },
                    support: {
                        title: 'عمليات على مدار الساعة',
                        description: 'مراقبة ودعم وصيانة على مدار الساعة طوال أيام الأسبوع مع فصل تشغيلي واضح لتقديم خدمة مستمرة دون انقطاع.'
                    },
                    certified: {
                        title: 'تميز معتمد',
                        description: 'متوافق مع الهيئة الوطنية للأمن السيبراني مع شهادات دولية متعددة، تُثبت التزامنا بأفضل الممارسات في الصناعة.'
                    },
                    vendor: {
                        title: 'مستقل عن الموردين',
                        description: 'نهج معماري مستقل يضمن أفضل الحلول التقنية المصممة خصيصاً لاحتياجاتك المحددة.'
                    },
                    track: {
                        title: 'سجل حافل مُثبت',
                        description: '28+ عاماً في خدمة القطاعين الحكومي والمؤسسي مع معدلات عالية باستمرار من رضا العملاء ونجاح المشاريع.'
                    }
                }
            },
            services: {
                tag: 'خبرتنا',
                title: 'تقديم حلول تقنية المعلومات وخدمات الـ ISP',
                description: 'خدمات تقنية شاملة من البداية إلى النهاية مصممة للعمليات الحيوية على مستوى المؤسسات'
            },
            // Home page service cards - Arabic
            serviceCards: [
                {
                    title: 'البنية التحتية لتقنية المعلومات',
                    bullets: [
                        'بنية كابلات نحاسية وألياف بصرية',
                        'حلول شبكات نشطة (LAN/WLAN)',
                        'SD-WAN لربط الفروع وتحسين الأداء',
                        'أنظمة مراقبة وإدارة الشبكات'
                    ],
                    goal: 'تقديم بنية شبكات حديثة بأداء عالٍ وآمن عبر كامل المؤسسة.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                },
                {
                    title: 'حلول مراكز البيانات',
                    bullets: [
                        'بناء مراكز بيانات وفق معايير معتمدة',
                        'تصميم وتنفيذ الخوادم والتخزين والنسخ الاحتياطي',
                        'نشر حلول افتراضية'
                    ],
                    goal: 'توفير بيئة متكاملة ومحسّنة لتشغيل أنظمة الأعمال.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                },
                {
                    title: 'أنظمة الأمن المادي',
                    bullets: [
                        'أنظمة مراقبة بالفيديو (CCTV)',
                        'أنظمة التحكم في الدخول',
                        'بوابات وحواجز لمرور الأشخاص والمركبات'
                    ],
                    goal: 'ضمان التحكم والمراقبة الكاملة لبيئة أعمالك.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                },
                {
                    title: 'الاتصالات الموحدة والتعاون',
                    bullets: [
                        'هاتف IP متقدم مع إدارة مركزية للمكالمات',
                        'صوت عبر IP سحابي آمن ومركزي للفروع',
                        'حلول متكاملة للصوت والفيديو والمراسلة والاجتماعات'
                    ],
                    goal: 'تمكين تواصل فعّال بين الفروع والفرق بتكلفة منخفضة وزيادة الإنتاجية.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                },
                {
                    title: 'ترخيص البرمجيات',
                    bullets: [
                        'توريد وتركيب تراخيص أصلية: Microsoft وAdobe وغيرها',
                        'توريد وتفعيل تراخيص سحابية: Microsoft 365 وAzure وغيرها'
                    ],
                    goal: 'تقديم تراخيص أصلية مع تفعيل سريع وموثوق.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                },
                {
                    title: 'أجهزة المستخدم النهائي',
                    bullets: [
                        'توريد وتركيب أجهزة من Dell وHP وLenovo مع ضمان ودعم المورّد',
                        'إدارة مركزية للنقاط الطرفية عبر Intune وWorkspace ONE وManageEngine'
                    ],
                    goal: 'توفير أجهزة ملائمة لاحتياجات أعمالك مع إدارة موحدة.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                },
                {
                    title: 'الأمن المتكامل واستمرارية الأعمال',
                    bullets: [
                        'جدران نارية من الجيل التالي وأنظمة كشف/منع التسلل',
                        'حماية نقاط النهاية وEDR',
                        'إدارة الهوية والصلاحيات (IAM / PAM)',
                        'أنظمة النسخ الاحتياطي والاستعادة'
                    ],
                    goal: 'حماية الأنظمة والبيانات الأساسية وضمان استمرارية الأعمال.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                },
                {
                    title: 'الخدمات المُدارة',
                    bullets: [
                        'تشغيل ودعم عن بُعد وفي الموقع مع استجابة فورية',
                        'نماذج عمل مرنة (دوام جزئي أو كامل أو موسمي)',
                        'كوادر فنية: مهندسو شبكات ودعم تقني وأمن سيبراني',
                        'صيانة وقائية وتصحيحية للبنية والأنظمة',
                        'تقارير لمستوى الخدمة والتزام اتفاقيات SLA'
                    ],
                    goal: 'تخفيف عبء التشغيل والتكاليف مع أعلى كفاءة تقنية.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                },
                {
                    title: 'خدمات مزود خدمة الإنترنت (ISP)',
                    bullets: [
                        'وصول إنترنت مخصص (DIA)، اتصالات مؤسسية، استضافة، ودعم فني على مدار الساعة للعمليات الحيوية'
                    ],
                    goal: 'توفير اتصال واستضافة عالية الأداء وموثوقية تدعم النمو الرقمي واستمرارية الأعمال.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                }
            ],
            horizontalProjects: {
                tag: '→ تصفح أفقياً',
                title: 'مشاريع حيوية',
                titleHighlight: 'ومهمة',
                projects: [
                    {
                        number: '01',
                        badge: 'القطاع المالي',
                        title: 'ترحيل الخدمات المصرفية<br>الأساسية لبنك سعودي',
                        description: 'قمنا بترحيل البنية التحتية المصرفية بالكامل (5000+ معاملة/ثانية) من نظام قديم إلى منصة HPE SimpliVity الحديثة. <strong style="color: #FFB800;">صفر خسارة في المعاملات</strong> خلال فترة الترحيل 96 ساعة.',
                        metrics: [
                            { value: '96 ساعة', label: 'فترة الترحيل' },
                            { value: '5000+', label: 'معاملة/ثانية' },
                            { value: '0%', label: 'خسارة البيانات' }
                        ],
                        tech: ['HPE SimpliVity', 'VMware vSphere', 'Veeam Backup', 'متوافق مع SAMA']
                    },
                    {
                        number: '02',
                        badge: 'القطاع الحكومي',
                        title: 'نشر مركز عمليات<br>الأمن الوطني',
                        description: 'أنشأنا مركز عمليات أمنية <strong style="color: #00C4E6;">معتمد من NCA</strong> للبنية التحتية الحكومية الحيوية. مراقبة 24/7 لأكثر من 50 جهة حكومية مع كشف التهديدات بالذكاء الاصطناعي. <strong style="color: #FFB800;">لا اختراقات منذ 6 سنوات.</strong>',
                        metrics: [
                            { value: '50+', label: 'جهة حكومية' },
                            { value: '24/7', label: 'المراقبة' },
                            { value: '6 سنوات', label: 'صفر اختراقات' }
                        ],
                        tech: ['Fortinet FortiGate', 'Palo Alto NGFW', 'Splunk SIEM', 'معتمد NCA']
                    },
                    {
                        number: '03',
                        badge: 'قطاع الاتصالات',
                        title: 'بناء مركز بيانات<br>على مستوى الناقل',
                        description: 'صممنا ونشرنا مركز بيانات Tier III لمشغل اتصالات سعودي كبير. يدعم <strong style="color: #00C4E6;">10 ملايين مشترك</strong> مع SLA بنسبة توفر 99.99%. تكرار كامل (N+1) عبر الطاقة والتبريد والشبكة.',
                        metrics: [
                            { value: '10 مليون', label: 'مشترك' },
                            { value: 'Tier 3', label: 'مركز البيانات' },
                            { value: '99.99%', label: 'SLA التوفر' }
                        ],
                        tech: ['HPE 3PAR', 'Cisco UCS', 'Nutanix AHV', 'تكرار N+1']
                    }
                ]
            },
            stats: {
                title: 'تقديم التميز على نطاق واسع',
                projects: 'مشروع منجز',
                clients: 'عميل موثوق',
                years: 'عاماً من التميز',
                support: 'دعم العمليات على مدار الساعة'
            },
            testimonials: {
                title: 'شهادات شبكة'
            },
            // كاروسيل المشاريع المميزة
            projectsCarousel: {
                tag: 'المشاريع المميزة',
                title: '',
                titleHighlight: 'قصص النجاح',
                slides: [
                    {
                        badge: 'القطاع المالي',
                        title: 'تنفيذ 1,300 نقطة شبكة<br>وتثبيت خوادم NTP',
                        description: 'تنفيذ نظام كابلات منظم يتكون من <strong class="text-gold">1,300 نقطة شبكة</strong> شاملة الإنهاء والاختبار والتسمية، ونشر خوادم <strong class="text-teal">NTP</strong> مركزية لضمان مزامنة دقيقة للوقت عبر جميع أجهزة الشبكة.',
                        metrics: { m1: '1,300', m1Label: 'نقطة شبكة', m2: '3', m2Label: 'خادم NTP', m3: 'SCS', m3Label: 'التسليم' },
                        tags: ['كابلات منظمة', 'اختبار وتسمية', 'مزامنة الوقت', 'نشر NTP']
                    },
                    {
                        badge: 'القطاع الحكومي',
                        title: 'تشغيل وصيانة<br>نظام GIS',
                        description: 'تشغيل وصيانة نظام المعلومات الجغرافية (GIS) بما في ذلك المراقبة والتحديثات واستكشاف الأخطاء والدعم الفني لضمان <strong class="text-teal">أداء مستقر</strong> و<strong class="text-gold">توافر مستمر</strong> لخدمات المعلومات الجغرافية.',
                        metrics: { m1: '3 سنوات', m1Label: 'تشغيل', m2: 'Esri', m2Label: 'GIS', m3: 'Oracle', m3Label: 'قاعدة البيانات' },
                        tags: ['Esri GIS', 'Oracle DB', 'تشغيل وصيانة', 'دعم GIS']
                    },
                    {
                        badge: 'شبه حكومي',
                        title: 'ترقية وهجرة نظام<br>الهاتف IP المؤسسي',
                        description: 'ترقية واستبدال نظام الهاتف IP الحالي بمنصة اتصالات <strong class="text-teal">Yeastar</strong> حديثة على مستوى المؤسسات، شاملة تصميم النظام ونشر خوادم IP PBX وتهيئة هواتف IP وتكامل الشبكة وتهيئة توجيه المكالمات وترحيل الخدمات الحالية.',
                        metrics: { m1: 'Yeastar', m1Label: 'المنصة', m2: 'IP PBX', m2Label: 'النشر', m3: 'كامل', m3Label: 'الهجرة' },
                        tags: ['Yeastar', 'هاتف IP', 'توجيه المكالمات', 'خدمات الهجرة']
                    }
                ]
            },
            // قسم إثبات العمل
            proofSection: {
                title: 'موثوق من قبل البنية التحتية',
                titleHighlight: 'الأكثر أهمية في السعودية',
                description: 'نتائج حقيقية من مشاريع حقيقية',
                cards: [
                    {
                        badge: 'قطاع الإنشاءات',
                        title: 'DIA سعة 450 ميجابت/ث — مشاريع الدرعية',
                        description:
                            'نشر وتوفير خدمة وصول إنترنت مخصص (DIA) بسعة 450 ميجابت/ث، بما يضمن اتصالاً آمناً بأنظمة المؤسسة وخدمات السحابة ومنصات إدارة المشاريع.',
                        tags: ['DIA', '450 Mbps', 'ISO 27001']
                    },
                    {
                        badge: 'النفط والغاز',
                        title: 'DIA سعة 100 ميجابت/ث — شركة نفط وغاز رائدة',
                        description:
                            'نشر وتوفير خدمة وصول إنترنت مخصص (DIA) بسعة 100 ميجابت/ث لدعم المتطلبات التشغيلية اليومية لإحدى كبرى شركات النفط والغاز في المملكة.',
                        tags: ['DIA', '100 Mbps', 'ISO 20000']
                    },
                    {
                        badge: 'قطاع حكومي',
                        title: 'خدمة إنترنت VSAT',
                        description:
                            'نشر وتوفير وصول إنترنت VSAT عبر الأقمار الصناعية المخصصة لدعم العمليات الحيوية لهذه الجهة الحكومية.',
                        tags: ['VSAT', 'قمر صناعي', 'ISO 22301']
                    }
                ]
            },
            // شريط الثقة
            trustBand: {
                html: 'بالشراكة مع <strong style="color: var(--cyan-electric); font-weight: 700;">الشركات الرائدة</strong> في التقنية من المزوّدين'
            },
            // قسم التقنية
            techSection: {
                title: 'تقنية المؤسسات',
                titleHighlight: 'التي نتقنها',
                description: 'خبرة تمتد عبر كامل مجموعة حلول تقنية المعلومات',
                categories: [
                    {
                        title: 'الأمن الفيزيائي والأنظمة',
                        items: ['Hikvision', 'Dahua', 'Bosch', 'Milestone', 'Hanwa', 'Honeywell', 'ZKT', 'suprema']
                    },
                    {
                        title: 'أنظمة الأمن المتكامل',
                        items: ['Fortinet', 'Sophos', 'Kaspersky', 'Trend micro', 'Palo alto']
                    },
                    { title: 'حلول الشبكات', items: ['Cisco', 'Aruba', 'Huawei', 'Netgear'] },
                    { title: 'حلول مراكز البيانات', items: ['Dell', 'Huawei', 'HPE', 'Lenovo'] },
                    {
                        title: 'الاتصالات الموحدة',
                        items: ['3CX', 'Yeaster', 'Yealink', 'Avaya', 'Cisco', 'grandstream']
                    },
                    { title: 'تراخيص البرمجيات', items: ['Microsoft', 'Adobe', 'Esri', 'Autocad'] },
                    {
                        title: 'خدمات مزوّدي الإنترنت',
                        items: ['DIA', 'Colocation', 'VPS', 'Cloud services', 'Web hosting', 'Email hosting']
                    }
                ],
                ctaButton: 'عرض جميع الخدمات ←'
            },
            cta: {
                title: 'هل أنت مستعد لتحويل بنيتك التحتية التقنية؟',
                description: 'دعنا نناقش كيف يمكن لشبكة تمكين مؤسستك بحلول تقنية معلومات واتصالات على مستوى المؤسسات',
                btn1: 'ابدأ محادثة',
                btn2: 'عرض جميع الخدمات'
            },
            // ترجمات التذييل الحديث
            footerModern: {
                tagline: 'تميّز تقني على مستوى المؤسسات منذ عام 1997. تحويل الأعمال في جميع أنحاء المملكة العربية السعودية بحلول تقنية مبتكرة.',
                columns: {
                    services: 'الخدمات',
                    company: 'الشركة',
                    solutions: 'الحلول',
                    connect: 'التواصل'
                },
                links: {
                    infrastructure: 'البنية التحتية لتقنية المعلومات',
                    datacenter: 'حلول مراكز البيانات',
                    physicalSecurity: 'أنظمة الأمن المادي',
                    communications: 'الاتصالات الموحدة والتعاون',
                    licensing: 'ترخيص البرمجيات',
                    enduser: 'أجهزة المستخدم النهائي',
                    cybersecurity: 'الأمن المتكامل واستمرارية الأعمال',
                    managed: 'الخدمات المُدارة',
                    isp: 'خدمات مزود خدمة الإنترنت (ISP)',
                    about: 'من نحن',
                    journey: 'رحلتنا',
                    partners: 'الشركاء',
                    solutions: 'الحلول',
                    contact: 'تواصل معنا',
                    government: 'الحكومة',
                    healthcare: 'الرعاية الصحية',
                    finance: 'المالية',
                    education: 'التعليم',
                    iot: 'تتبع إنترنت الأشياء'
                },
                contactInfo: {
                    location: 'الرياض، المملكة العربية السعودية',
                    phone: '+966 11 234 5678',
                    email: 'info@shabakah.sa',
                    support: 'دعم على مدار الساعة'
                },
                copyright: '© 2024 شبكة التقنية المتكاملة. جميع الحقوق محفوظة.',
                certs: {
                    iso27001: 'ISO 27001',
                    iso22301: 'ISO 22301'
                }
            }
        },

        // ============ صفحة من نحن ============
        about: {
            hero: {
                breadcrumb: 'من نحن',
                title: 'عن شبكة',
                subtitle: '28 عاماً من التميز والابتكار والثقة في مجال تقنية المعلومات'
            },
            // ترجمات البطل الحديث لصفحة من نحن
            heroModern: {
                titleLine1: 'عن',
                titleLine2: 'شبكة',
                subtitle: '28 عاماً من التميز والابتكار والثقة في مجال تقنية المعلومات — رواد التحول الرقمي في المملكة العربية السعودية.',
                stats: {
                    stat1: { number: '+28', label: 'سنوات الخبرة' },
                    stat2: { number: '+3,500', label: 'مشروع منجز' },
                    stat3: { number: '+2,500', label: 'عميل راضٍ' }
                }
            },
            overview: {
                tag: 'قصتنا',
                title: 'رواد التميز التقني منذ عام 1997',
                p1: 'بدأت شركة شبكة للتقنية المتكاملة رحلتها في عام 1997 كواحدة من الشركات الرائدة في مجال توفير خدمات الإنترنت في المملكة العربية السعودية. على مدى ما يقارب ثلاثة عقود، تطورنا لنصبح مزود حلول تقنية معلومات واتصالات شامل، نخدم احتياجات البنية التحتية الحيوية عبر القطاعين الحكومي والمؤسسي.',
                p2: 'اليوم، تُعد شبكة شريكاً موثوقاً للمؤسسات التي تسعى للحصول على حلول تقنية على مستوى المؤسسات. تمتد خبرتنا لتشمل البنية التحتية لتقنية المعلومات، وحلول الأمن المتكامل واستمرارية الأعمال، ومراكز البيانات، والاتصالات الموحدة، والخدمات المُدارة، وكلها مُقدمة بالتزام ثابت بالأمان والموثوقية والابتكار.',
                p3: 'مع أكثر من 3,500 مشروع منجز و 2,500 عميل راضٍ، نواصل قيادة التحول الرقمي في جميع أنحاء المملكة، متوافقين مع أهداف رؤية السعودية 2030 للتقدم التقني.'
            },
            timeline: {
                tag: 'رحلتنا',
                title: 'معالم التميز',
                description: 'جدول زمني للابتكار والنمو والالتزام الثابت بالتميز التقني',
                milestones: {
                    1997: {
                        title: 'التأسيس وإطلاق خدمات الإنترنت',
                        description: 'تأسست شبكة كواحدة من الشركات الرائدة في توفير خدمات الإنترنت في المملكة العربية السعودية، مُوفرة الاتصال للشركات في جميع أنحاء المملكة.'
                    },
                    2005: {
                        title: 'توسع حلول المؤسسات',
                        description: 'توسعت محفظة الخدمات لتشمل البنية التحتية لتقنية المعلومات للمؤسسات، والشبكات، وخدمات تكامل الأنظمة.'
                    },
                    2010: {
                        title: 'تأسيس مركز بيانات للاستضافة',
                        description: 'أنشأنا مرافق استضافة محلية متطورة لمراكز البيانات، تقدم خدمات السحابة الخاصة والاستضافة المشتركة وفق معايير Tier II.'
                    },
                    2015: {
                        title: 'الحصول على شهادات ISO',
                        description: 'حصلنا على شهادات ISO 27001 (أمن المعلومات) و ISO 22301 (استمرارية الأعمال)، مما يعزز التزامنا بالتميز. الشهادات: ISO 27001 / ISO 20000 / ISO 9001.'
                    },
                    2020: {
                        title: 'شريك التحول الرقمي',
                        description: 'أصبحنا شريكاً تقنياً رئيساً يدعم مبادرات التحول الرقمي لرؤية السعودية 2030 عبر القطاعين الحكومي والمؤسسي.'
                    },
                    2024: {
                        title: 'توسيع نطاق خدماتنا',
                        description: 'نوسع خدماتنا لتشمل الأنظمة الذكية وأنظمة التتبع وخدمات استشارات ISO والخدمات المُدارة.'
                    }
                }
            },
            visionMission: {
                vision: {
                    title: 'رؤيتنا',
                    description: 'أن نكون الشريك الأكثر موثوقية وابتكاراً في تقنية المعلومات والاتصالات وخدمات الإنترنت (ISP) في الشرق الأوسط، نمكّن المؤسسات ببنية تحتية تقنية آمنة ومرنة وجاهزة للمستقبل تدفع النمو المستدام والتحول الرقمي.'
                },
                mission: {
                    title: 'مهمتنا',
                    description: 'تقديم حلول تقنية معلومات واتصالات وخدمات إنترنت (ISP) على مستوى المؤسسات بالتزام ثابت بالأمان والموثوقية والتميز التشغيلي. نشارك عملاءنا في تصميم وتنفيذ وإدارة البنية التحتية التقنية الحيوية التي تتجاوز التوقعات وتحقق قيمة الأعمال.'
                }
            },
            philosophy: {
                tag: 'كيف نعمل',
                title: 'فلسفة الهندسة',
                description: 'المبادئ التوجيهية التي تحدد كل حل نقدمه',
                items: [
                    {
                        number: '01',
                        title: 'تصميم مدفوع بالأعمال',
                        description: 'كل حل يبدأ بفهم أهداف عمل العميل. نصمم تقنية تدعم مباشرة الكفاءة التشغيلية والنمو واستمرارية العمل على المدى الطويل.',
                        features: []
                    },
                    {
                        number: '02',
                        title: 'خبرة متعددة الموردين',
                        description: 'يعمل فريقنا مع كبار موردي التكنولوجيا العالميين، مما يمكّننا من اختيار الأنسب من التقنيات لكل بيئة.',
                        features: []
                    },
                    {
                        number: '03',
                        title: 'الأمان والامتثال أولاً',
                        description: 'تُدمج معايير الأمان والامتثال في كل طبقة من تصميم الحل وتنفيذه، وفق معايير ISO 27001 و20000 و22301 و9001 و45001.',
                        features: []
                    },
                    {
                        number: '04',
                        title: 'تكامل شامل من البداية للنهاية',
                        description: 'من البنية التحتية والاتصال إلى الأمان والخدمات المُدارة، نضمن تكاملاً سلساً عبر النظام التقني بأكمله.',
                        features: []
                    },
                    {
                        number: '05',
                        title: 'دعم مكتب المساعدة على مدار الساعة',
                        description: 'فريق دعم مكرّس متاح على مدار الساعة لمساعدتكم في اتصال الـISP والاستضافة واستكشاف الأخطاء وضمان استمرارية الخدمة.',
                        features: []
                    }
                ]
            },
            values: {
                tag: 'قيمنا',
                title: 'ما يحركنا',
                items: [
                    { title: 'التميز', description: 'السعي لأعلى المعايير في كل ما نفعله' },
                    { title: 'النزاهة', description: 'العمل بشفافية وصدق ومبادئ أخلاقية' },
                    { title: 'الابتكار', description: 'تبني التقنيات المتطورة والحلول الإبداعية' },
                    { title: 'الشراكة', description: 'بناء علاقات طويلة الأمد قائمة على النجاح المتبادل' }
                ]
            }
        },

        // ============ صفحة الخدمات ============
        services: {
            hero: {
                breadcrumb: 'الخدمات',
                title: 'تقديم حلول تقنية المعلومات وخدمات الـ ISP',
                subtitle: 'خدمات تقنية على مستوى المؤسسات مصممة للعمليات الحيوية'
            },
            // ترجمات البطل الحديث لصفحة الخدمات
            heroModern: {
                titleLine1: 'تقديم حلول تقنية المعلومات',
                titleLine2: 'وخدمات الـ ISP',
                subtitle: 'خدمات تقنية على مستوى المؤسسات مصممة للعمليات الحيوية',
                stats: {
                    stat1: { number: 'SLA', label: 'عقود اتفاقية الخدمة' },
                    stat2: { number: '24/7', label: 'دعم فني' },
                    stat3: { number: '99.75%', label: '\u00A0' }
                }
            },
            infrastructure: {
                tag: 'البنية التحتية لتقنية المعلومات',
                title: 'حلول البنية التحتية لتقنية المعلومات للمؤسسات',
                description: 'بناء بنية تحتية مرنة وقابلة للتوسع وعالية الأداء تدعم تحولك الرقمي. تضمن خدماتنا الشاملة للبنية التحتية لتقنية المعلومات أن يكون أساسك التقني قوياً وآمناً وجاهزاً للمستقبل.',
                features: [
                    { title: 'تصميم وتنفيذ البنية التحتية للشبكات', description: 'حلول شبكات على مستوى المؤسسات مع التكرار والتوافر العالي' },
                    { title: 'حلول الخوادم والتخزين', description: 'بنية تحتية للحوسبة والتخزين قابلة للتوسع ومصممة لأحمال العمل الخاصة بك' },
                    { title: 'البنية التحتية الافتراضية والمتقاربة', description: 'منصات بنية تحتية حديثة تزيد من الكفاءة والمرونة' },
                    { title: 'مراقبة وإدارة البنية التحتية', description: 'مراقبة استباقية وتحسين للأداء الأمثل' }
                ]
            },
            datacenter: {
                tag: 'حلول مراكز البيانات',
                title: 'خدمات السحابة الخاصة ومركز البيانات',
                description: 'نشر مراكز بيانات وبنية تحتية سحابية خاصة على مستوى المؤسسات توفر أداءً استثنائياً وموثوقية وأماناً لتطبيقاتك وبياناتك الحيوية.',
                features: [
                    { title: 'هندسة ونشر السحابة الخاصة', description: 'بنية تحتية سحابية آمنة ومتوافقة مع السيطرة الكاملة' },
                    { title: 'تصميم وبناء مركز البيانات', description: 'مرافق مراكز بيانات Tier III/IV مع أنظمة متكررة' },
                    { title: 'تكامل السحابة الهجينة', description: 'تكامل سلس بين البيئات المحلية والسحابية' },
                    { title: 'التعافي من الكوارث واستمرارية الأعمال', description: 'حلول DR شاملة تضمن مرونة الأعمال' }
                ]
            },
            physicalsecurity: {
                tag: 'أنظمة الأمن المادي',
                title: 'كاميرات المراقبة والتحكم بالدخول وحماية المحيط',
                description: 'تصميم ونشر أمن مادي يمنحك رؤية وتحكماً كاملين عبر المواقع والفروع والمرافق الحيوية—من المراقبة إلى سياسات الدخول وتدفق المركبات أو المشاة.',
                features: [
                    { title: 'المراقبة بالفيديو (CCTV)', description: 'تصميم ونشر وتكامل أنظمة كاميرات على مستوى المؤسسة والمراقبة' },
                    { title: 'أنظمة التحكم بالدخول', description: 'دخول بالبطاقة والبيومترية والسياسات للموظفين والزوار والمناطق المحظورة' },
                    { title: 'البوابات وحواجز المركبات', description: 'بوابات وحواجز وتكاملات لدخول الأشخاص والمركبات حيث يهم معدل المرور' },
                    { title: 'مراقبة مركزية', description: 'سير عمل موحد للمراقبة والتنبيهات والتقارير بما يتوافق مع عملياتك' }
                ]
            },
            communications: {
                tag: 'الاتصالات الموحدة والتعاون',
                title: 'منصات الاتصال المتكاملة',
                description: 'حدّث بنية الاتصالات التحتية الخاصة بك مع منصات موحدة تدمج الصوت والفيديو والرسائل وأدوات التعاون لتعزيز الإنتاجية والتعاون السلس.',
                features: [
                    { title: 'حلول الصوت للمؤسسات', description: 'VoIP وهاتف IP ومنصات مركز الاتصال' },
                    { title: 'أنظمة مؤتمرات الفيديو', description: 'تعاون فيديو عالي الجودة للفرق عن بُعد' },
                    { title: 'تكامل أدوات التعاون', description: 'منصات الرسائل الموحدة والتواجد والتعاون' },
                    { title: 'حلول القوى العاملة المتنقلة والبعيدة', description: 'اتصالات آمنة للفرق الموزعة' }
                ]
            },
            enduser: {
                tag: 'أجهزة المستخدم النهائي',
                title: 'توريد الأجهزة ودورة الحياة وإدارة موحدة لنقاط النهاية',
                description: 'جهّز الفرق بالأجهزة المناسبة وأدر نقاط النهاية باتساق—من التوريد والصور إلى الإدارة الحديثة عبر Intune وWorkspace ONE وManageEngine والمنصات ذات الصلة.',
                features: [
                    { title: 'توريد أجهزة للمؤسسات', description: 'Dell و HP و Lenovo وغيرها من المورّدين المعتمدين مع طرح ودعم متوافق مع الضمان' },
                    { title: 'إدارة مركزية لنقاط النهاية', description: 'Microsoft Intune و VMware Workspace ONE و ManageEngine وأدوات UEM الحديثة' },
                    { title: 'سطح مكتب افتراضي و DaaS', description: 'أنماط VDI وسطح مكتب سحابي حيث تكون الأمان والتنقل أولوية' },
                    { title: 'تسليم التطبيقات', description: 'افتراضية التطبيقات وتسليم مبسط للمستخدمين الموزعين' }
                ]
            },
            licensing: {
                tag: 'ترخيص البرمجيات',
                title: 'حلول الترخيص السحابي والمؤسسي',
                description: 'حسّن استثماراتك في البرمجيات مع إدارة ترخيص خبيرة وإشراف على الامتثال وتوجيه استراتيجي لمحافظ البرمجيات السحابية والمؤسسية.',
                features: [
                    { title: 'برامج الترخيص المؤسسي', description: 'اتفاقيات Microsoft و Oracle و VMware والمؤسسات الأخرى' },
                    { title: 'إدارة الاشتراكات السحابية', description: 'ترخيص وتحسين Azure و AWS و Google Cloud' },
                    { title: 'الامتثال والتدقيق على التراخيص', description: 'ضمان الامتثال وتحسين تكاليف الترخيص' },
                    { title: 'إدارة أصول البرمجيات (SAM)', description: 'تتبع وتحسين شامل لأصول البرمجيات' }
                ]
            },
            cybersecurity: {
                tag: 'الأمن المتكامل واستمرارية الأعمال',
                title: 'حماية الأنظمة الحيوية والهوية والبيانات',
                description: 'أمن ومرونة تقنية متعددة الطبقات بما يتوافق مع توقعات الهيئة الوطنية للأمن السيبراني والممارسات الدولية—يشمل حافة الشبكة ونقاط النهاية والهوية والنسخ الاحتياطي لتمكين الاكتشاف والاستجابة والتعافي بثقة.',
                features: [
                    { title: 'جدران حماية الجيل التالي و IDS/IPS', description: 'ضوابط محيطية حديثة وتجزئة الشبكة وتصميم سياسات واعية بالتهديدات' },
                    { title: 'حماية نقاط النهاية و EDR', description: 'دفاعات متقدمة لنقاط النهاية والمراقبة وسير عمل الاستجابة' },
                    { title: 'الهوية والصلاحيات (IAM / PAM)', description: 'الوصول المميز وتصميم أقل امتيازاً ودورة حياة الهوية' },
                    { title: 'النسخ الاحتياطي والاستعادة والاستمرارية', description: 'بنى نسخ احتياطي مرنة واستعادة بما يتوافق مع ممارسات ISO 22301' }
                ]
            },
            managed: {
                tag: 'الخدمات المُدارة',
                title: 'خدمات التشغيل والدعم على مدار الساعة',
                description: 'ركز على عملك الأساسي بينما نتولى إدارة بنيتك التحتية لتقنية المعلومات. تقدم خدماتنا المُدارة مراقبة استباقية وصيانة وتحسين لضمان الأداء الأمثل والحد الأدنى من التوقف.',
                features: [
                    { title: 'مراقبة البنية التحتية على مدار الساعة', description: 'مراقبة مستمرة وتنبيه لجميع الأنظمة' },
                    { title: 'الصيانة والتحديث الاستباقي', description: 'تحديثات وصيانة منتظمة خلال ساعات خارج الذروة' },
                    { title: 'مكتب المساعدة والدعم الفني', description: 'دعم متعدد المستويات مع أوقات استجابة مضمونة' },
                    { title: 'تحسين الأداء', description: 'ضبط مستمر وتخطيط السعة' }
                ]
            },
            isp: {
                tag: 'خدمات مزود خدمة الإنترنت (ISP)',
                title: 'إنترنت مخصص واستضافة ودعم للمهام الحيوية',
                description: 'كمزود راسخ نقدم اتصالاً واستضافة على مستوى المؤسسات مع اتفاقيات توفر واضحة—ندعم الاستمرارية واعتماد السحابة والنمو الرقمي في أنحاء المملكة.',
                features: [
                    { title: 'وصول إنترنت مخصص (DIA)', description: 'اتصال مؤسسي عالي الأداء مع نطاق ترددي ملتزم ومسارات محددة' },
                    { title: 'الاستضافة والاستضافة المشتركة', description: 'خيارات استضافة آمنة بما يتوافق مع عبء العمل والامتثال وأهداف التوفر' },
                    { title: 'دعم فني على مدار الساعة', description: 'دعم هندسي مستمر للعمليات الحيوية' },
                    { title: 'استشارات الاتصال', description: 'هندسة للفروع وتكامل SD-WAN وتحسين الأداء' }
                ]
            },
            sectorSolutions: {
                tag: 'حلول القطاعات',
                title: 'حلول تقنية خاصة بالقطاعات',
                description: 'حلول تقنية معلومات واتصالات شاملة مصممة للتحديات والمتطلبات الفريدة للصناعات المختلفة',
                cards: [
                    {
                        title: 'الحكومة والقطاع العام',
                        description: 'حلول التحول الرقمي المتوافقة مع أهداف رؤية 2030، لتمكين مبادرات الحكومة الذكية وخدمات المواطنين.',
                        features: ['منصات الحكومة الإلكترونية', 'البنية التحتية للمدن الذكية', 'حلول الهوية الرقمية', 'أطر الامتثال للهيئة الوطنية للأمن السيبراني']
                    },
                    {
                        title: 'الخدمات المالية',
                        description: 'بنية تحتية تقنية آمنة ومتوافقة للبنوك والمؤسسات المالية مع أمان قوي وتوافر عالٍ.',
                        features: ['البنية التحتية للخدمات المصرفية الأساسية', 'أنظمة بوابات الدفع', 'كشف ومنع الاحتيال', 'الامتثال التنظيمي']
                    },
                    {
                        title: 'الرعاية الصحية',
                        description: 'أنظمة تقنية صحية متكاملة تدعم رعاية المرضى وإدارة السجلات الطبية وتحليلات الرعاية الصحية.',
                        features: ['السجلات الصحية الإلكترونية', 'أنظمة معلومات المستشفيات', 'منصات الطب عن بُعد', 'أمن البيانات الطبية']
                    },
                    {
                        title: 'التعليم',
                        description: 'بنية تحتية تقنية تعليمية حديثة تمكّن التعلم الرقمي والكفاءة الإدارية للمؤسسات.',
                        features: ['أنظمة إدارة التعلم', 'منصات الفصول الدراسية الافتراضية', 'أنظمة معلومات الطلاب', 'البنية التحتية لشبكة الحرم الجامعي']
                    },
                    {
                        title: 'الطاقة والمرافق',
                        description: 'بنية تحتية لتقنية المعلومات على مستوى صناعي لعمليات قطاع الطاقة وأنظمة SCADA وإدارة الموارد.',
                        features: ['أنظمة SCADA والتحكم', 'منصات إدارة الأصول', 'تقنيات الشبكة الذكية', 'أمن التكنولوجيا التشغيلية']
                    },
                    {
                        title: 'التصنيع',
                        description: 'حلول الصناعة 4.0 التي تدمج إنترنت الأشياء والأتمتة وتحليلات البيانات لعمليات التصنيع الذكية.',
                        features: ['منصات إنترنت الأشياء الصناعية', 'أنظمة تنفيذ التصنيع', 'تكامل سلسلة التوريد', 'الصيانة التنبؤية']
                    }
                ]
            }
        },

        // ============ صفحة الحلول ============
        solutions: {
            hero: {
                breadcrumb: 'الحلول',
                title: 'حلولنا التقنية',
                subtitle: 'حلول تقنية مخصصة لقطاعك'
            },
            // ترجمات البطل الحديث لصفحة الحلول
            heroModern: {
                titleLine1: 'حلولنا',
                titleLine2: 'التقنية',
                subtitle: 'حلول تقنية مخصصة للقطاعين الحكومي والمؤسسي',
                stats: [
                    { number: '', label: 'شبكات نشطة.' },
                    { number: '', label: 'بنية تحتية سلبية.' },
                    { number: '', label: 'الخوادم والتخزين.' },
                    { number: '', label: 'الاتصالات الموحدة.' },
                    { number: '', label: 'أمن المعلومات.' },
                    { number: '', label: 'بنية تحتية لمراكز البيانات.' },
                    { number: '', label: 'الأمن المادي وكاميرات المراقبة.' },
                    { number: '', label: 'النسخ الاحتياطي والافتراضية.' }
                ]
            },
            overview: {
                tag: 'حلولنا',
                title: 'مجموعة واسعة من الحلول التقنية',
                description: 'حلول تقنية معلومات واتصالات شاملة مصممة للتحديات والمتطلبات الفريدة للصناعات المختلفة'
            },
            softwareLicensing: {
                title: 'ترخيص البرمجيات',
                features: [
                    'توريد وتركيب تراخيص برمجيات أصلية: Microsoft و Adobe وغيرها.',
                    'توريد وتفعيل تراخيص سحابية: O365 و Azure وغيرها.'
                ],
                goal: 'تقديم تراخيص برمجيات أصلية مع عملية تفعيل سريعة وموثوقة.'
            },
            integratedSecurityBc: {
                title: 'حلول الأمن المتكامل واستمرارية الأعمال',
                features: [
                    'جدران حماية الجيل التالي وأنظمة كشف/منع التسلل IDS/IPS',
                    'حماية نقاط النهاية و EDR',
                    'إدارة الهوية والصلاحيات IAM / PAM',
                    'أنظمة النسخ الاحتياطي والاستعادة'
                ],
                goal: 'حماية أنظمتك وبياناتك الحيوية بتأمين بيئتك التقنية وضمان استمرارية الأعمال.'
            },
            endUserDevices: {
                title: 'أجهزة المستخدم النهائي',
                features: [
                    'توريد وتركيب أجهزة المستخدم النهائي من علامات رائدة: Dell و HP و Lenovo مع ضمان ودعم المورّد.',
                    'نشر إدارة مركزية لنقاط النهاية باستخدام أدوات حديثة مثل Intune و VMware Workspace ONE و ManageEngine.'
                ],
                goal: 'توفير أجهزة مناسبة لاحتياجات عملك مع إدارة موحدة.'
            },
            approach: {
                tag: 'نهجنا',
                title: 'كيف نقدم الحلول',
                steps: [
                    { number: '01', title: 'الاكتشاف والتقييم', description: 'تحليل شامل لمتطلبات عملك والبنية التحتية الحالية والأهداف الاستراتيجية.' },
                    { number: '02', title: 'تصميم الحل', description: 'هندسة وتصميم مخصص يتوافق مع أفضل الممارسات الصناعية واحتياجاتك المحددة.' },
                    { number: '03', title: 'التنفيذ', description: 'نشر مرحلي مع الحد الأدنى من الاضطراب، باتباع منهجيات إدارة المشاريع المثبتة.' },
                    { number: '04', title: 'التحسين والدعم', description: 'مراقبة وتحسين مستمر ودعم على مدار الساعة يضمن الأداء الأمثل.' }
                ]
            },
            differentiators: {
                tag: 'ما يميزنا',
                title: 'فرق شبكة',
                cards: [
                    { title: 'خبرة محلية', description: '+28 عاماً في خدمة السوق السعودي مع فهم عميق للمتطلبات واللوائح الإقليمية' },
                    { title: 'تميز معتمد', description: 'معتمدون بشهادات ISO 27001 و ISO 22301 والهيئة الوطنية للأمن السيبراني لضمان أعلى معايير الجودة والأمان' },
                    { title: 'مستقلون عن الموردين', description: 'نهج استشاري مستقل لاختيار أفضل التقنيات المناسبة لاحتياجاتك' },
                    { title: 'متوافقون مع رؤية 2030', description: 'حلول تدعم التحول الرقمي في المملكة العربية السعودية وأهداف التنويع الاقتصادي' }
                ]
            }
        },

        // ============ صفحة الشركاء ============
        partners: {
            hero: {
                breadcrumb: 'الشركاء',
                title: 'شركاء التكنولوجيا',
                subtitle: 'التعاون مع قادة التكنولوجيا العالميين'
            },
            // ترجمات البطل الحديث لصفحة الشركاء
            heroModern: {
                titleLine1: 'شركاء التقنية',
                titleLine2: 'الاستراتيجيون',
                subtitle: 'محفظة منتجات شبكة الواسعة مليئة بخيارات مثالية تمكّننا من اختيار أفضل منتج لكل احتياج محدد في كل مشروع على حدة.'
            },
            intro: {
                tag: 'شراكات استراتيجية',
                title: 'حلول تقنية من أفضل الفئات',
                description: 'يسمح لنا نهجنا المستقل عن الموردين بالشراكة مع كبار مزودي التكنولوجيا في العالم، مما يضمن حصولك على أفضل الحلول لاحتياجاتك المحددة.'
            },
            clients: {
                tag: 'العملاء',
                title: 'مؤسسات نعمل معها'
            },
            categories: {
                infrastructure: {
                    tag: 'البنية التحتية',
                    title: 'شركاء البنية التحتية والحوسبة'
                },
                security: {
                    tag: 'الأمن',
                    title: 'شركاء الأمن والحماية'
                },
                dataProtection: {
                    tag: 'حماية البيانات',
                    title: 'شركاء النسخ الاحتياطي والاستعادة'
                },
                cctv: {
                    tag: 'CCTV',
                    title: 'شركاء CCTV وإدارة الفيديو'
                },
                cabling: {
                    tag: 'الكابلات',
                    title: 'شركاء الكابلات المنظمة'
                },
                accessControl: {
                    tag: 'التحكم بالوصول',
                    title: 'شركاء التحكم بالدخول'
                },
                network: {
                    tag: 'الشبكات',
                    title: 'شركاء البنية التحتية للشبكات'
                },
                softwarePlatforms: {
                    tag: 'البرمجيات',
                    title: 'شركاء البرمجيات والمنصات'
                },
                unifiedComms: {
                    tag: 'الاتصالات الموحدة',
                    title: 'شركاء الاتصالات الموحدة'
                }
            },
            partnerCards: {
                hpe: { name: 'هيوليت باكارد إنتربرايز', description: 'خوادم المؤسسات وحلول التخزين والبنية التحتية السحابية الهجينة' },
                huawei: { name: 'هواوي', description: 'حلول مراكز البيانات والبنية التحتية السحابية من الجيل التالي' },
                lenovo: { name: 'لينوفو', description: 'حوسبة المؤسسات والخوادم وأجهزة المستخدم النهائي' },
                fortinet: { name: 'فورتينت', description: 'جدار حماية متقدم وأمن الشبكات والحماية من التهديدات' },
                paloAlto: { name: 'بالو ألتو نتوركس', description: 'جدران الحماية من الجيل التالي ومنصات الأمان السحابي' },
                sophos: { name: 'سوفوس', description: 'حماية نقاط النهاية وحلول أمان الشبكات' },
                kaspersky: { name: 'كاسبرسكي', description: 'مكافحة البرامج الضارة وأمان نقاط النهاية واستخبارات التهديدات' },
                veeam: { name: 'فيم', description: 'حلول النسخ الاحتياطي والتعافي من الكوارث وإدارة البيانات' },
                veritas: { name: 'فيريتاس', description: 'النسخ الاحتياطي للمؤسسات والأرشفة واستمرارية الأعمال' },
                cctvHikvision: { name: 'Hikvision', description: 'مراقبة بالفيديو وأنظمة التسجيل والأمن المتكاملة' },
                cctvDahua: { name: 'Dahua', description: 'CCTV والتحكم بالوصول وحلول المباني الذكية' },
                cctvHanwha: { name: 'Hanwha', description: 'أمن الفيديو Wisenet والتحليلات' },
                cctvBosch: { name: 'Bosch', description: 'أنظمة الأمان والسلامة والاتصالات' },
                cctvHoneywell: { name: 'Honeywell', description: 'تقنيات المباني والحلول الأمنية' },
                cctvAxis: { name: 'Axis', description: 'فيديو وصوت وتحليلات عبر الشبكة' },
                cctvMilestone: { name: 'Milestone', description: 'برمجيات إدارة الفيديو (VMS)' },
                cablingCommScope: { name: 'CommScope', description: 'كابلات منظمة وبنية تحتية للاتصال' },
                cablingPanduit: { name: 'Panduit', description: 'بنية تحتية مادية وأنظمة كابلات الشبكات' },
                cablingNexans: { name: 'Nexans', description: 'حلول كابلات النحاس والألياف الضوئية' },
                cablingCorning: { name: 'Corning', description: 'ألياف ضوئية واتصال' },
                cablingBelden: { name: 'Belden', description: 'نقل الإشارات وشبكات صناعية' },
                accessZKTeco: { name: 'ZKTeco', description: 'أجهزة بيومترية والتحكم بالدخول' },
                accessSuprema: { name: 'Suprema', description: 'بيومترية والتحكم بالوصول المادي' },
                accessHikvision: { name: 'Hikvision', description: 'التحكم بالوصول المتكامل مع أمن الفيديو' },
                accessDahua: { name: 'Dahua', description: 'أنظمة الوصول وإدارة المداخل' },
                networkCisco: { name: 'Cisco', description: 'تبديل وتوجيه وشبكات لاسلكية للمؤسسات' },
                networkAruba: { name: 'Aruba', description: 'شبكات الفروع والحرم (HPE Aruba)' },
                networkNetgear: { name: 'Netgear', description: 'شبكات أعمال وواي فاي' },
                networkHuawei: { name: 'هواوي', description: 'مفاتيح شبكة وWLAN وشبكات مراكز البيانات' },
                softwareMicrosoft: { name: 'Microsoft', description: 'سحابة وإنتاجية ومنصات مؤسسية' },
                softwareAdobe: { name: 'Adobe', description: 'برمجيات إبداعية ووثائق' },
                softwareAutoCAD: { name: 'AutoCAD', description: 'تصميم ومسودات (Autodesk)' },
                softwareEsri: { name: 'Esri', description: 'GIS وذكاء الموقع' },
                ucYealink: { name: 'Yealink', description: 'هواتف IP ومؤتمرات فيديو وأجهزة تعاون' },
                ucYeastar: { name: 'Yeastar', description: 'PBX وأنظمة اتصالات موحدة' },
                ucGrandstream: { name: 'Grandstream', description: 'نقاط نهاية UC وواي فاي وشبكات' },
                ucAvaya: { name: 'Avaya', description: 'مراكز اتصال واتصالات مؤسسية' },
                ucCisco: { name: 'Cisco', description: 'Webex وبنية تعاون' }
            },
            benefits: {
                tag: 'لماذا يهم',
                title: 'مزايا الشراكة',
                items: [
                    { title: 'خبرة معتمدة', description: 'يحمل مهندسونا شهادات متقدمة من جميع الشركاء الرئيسيين، مما يضمن التنفيذ والدعم الاحترافي' },
                    { title: 'دعم ذو أولوية', description: 'كشركاء معتمدين، نوفر قنوات دعم سريعة من الموردين ومسارات تصعيد مباشرة' },
                    { title: 'وصول مبكر', description: 'الوصول إلى أحدث التقنيات والبرامج التجريبية وخرائط طريق المنتجات من شركائنا' },
                    { title: 'ضمانات ممتدة', description: 'تغطية ضمان شاملة واتفاقيات صيانة من خلال القنوات الرسمية' },
                    { title: 'برامج تدريبية', description: 'الوصول إلى تدريب الموردين وورش العمل وبرامج نقل المعرفة لفريقك' },
                    { title: 'منتجات أصلية', description: 'منتجات أصلية 100% مع ضمانات الشركة المصنعة الكاملة والدعم' }
                ]
            }
        },

        // ============ صفحة التواصل ============
        contact: {
            hero: {
                breadcrumb: 'تواصل معنا',
                title: 'تواصل معنا',
                subtitle: 'دعنا نناقش كيف يمكن لشبكة تمكين مؤسستك'
            },
            // ترجمات البطل الحديث لصفحة التواصل
            heroModern: {
                titleLine1: 'تواصل',
                titleLine2: 'معنا',
                subtitle: 'دعنا نناقش كيف يمكن لشبكة تمكين مؤسستك',
                stats: {
                    stat1: { number: '24 ساعة', label: 'وقت الاستجابة' },
                    stat2: { number: 'مجاني', label: 'استشارة' },
                    stat3: { number: 'خبراء', label: 'مستشارون تقنيون' }
                }
            },
            form: {
                title: 'أرسل لنا رسالة',
                description: 'املأ النموذج أدناه وسيتواصل معك فريقنا خلال 24 ساعة',
                fields: {
                    name: 'الاسم الكامل *',
                    namePlaceholder: 'اسمك',
                    email: 'البريد الإلكتروني *',
                    emailPlaceholder: 'your.email@company.com',
                    phone: 'رقم الهاتف',
                    phonePlaceholder: '+966 XX XXX XXXX',
                    company: 'الشركة',
                    companyPlaceholder: 'اسم الشركة',
                    service: 'الخدمة المطلوبة',
                    servicePlaceholder: 'اختر خدمة...',
                    message: 'الرسالة *',
                    messagePlaceholder: 'أخبرنا عن مشروعك أو متطلباتك...',
                    submit: 'إرسال الرسالة'
                },
                serviceOptions: {
                    infrastructure: 'البنية التحتية لتقنية المعلومات',
                    datacenter: 'حلول مراكز البيانات',
                    physicalsecurity: 'أنظمة الأمن المادي',
                    communications: 'الاتصالات الموحدة والتعاون',
                    licensing: 'ترخيص البرمجيات',
                    enduser: 'أجهزة المستخدم النهائي',
                    cybersecurity: 'الأمن المتكامل واستمرارية الأعمال',
                    managed: 'الخدمات المُدارة',
                    isp: 'خدمات مزود خدمة الإنترنت (ISP)',
                    other: 'أخرى'
                }
            },
            infoCards: {
                office: {
                    title: 'مكتبنا',
                    line1: 'الموقع: الأندلس مول',
                    line2: 'الورود، شارع العليا',
                    line3: 'الرياض 12215، المملكة العربية السعودية'
                },
                phone: {
                    title: 'الهاتف',
                    number: '(+966) 920033465',
                    note: 'دعم متاح على مدار الساعة'
                },
                email: {
                    title: 'البريد الإلكتروني',
                    address: 'info@shabakah.sa',
                    note: 'سنرد خلال 24 ساعة'
                },
                hours: {
                    title: 'ساعات العمل',
                    days: 'الأحد - الخميس',
                    time: '8:00 صباحاً - 5:00 مساءً (GMT+3)'
                },
                social: {
                    title: 'تابعنا'
                }
            },
            info: {
                title: 'معلومات التواصل',
                headquarters: {
                    title: 'المقر الرئيسي',
                    address: 'الرياض، المملكة العربية السعودية'
                },
                phone: {
                    title: 'الهاتف',
                    number: '+966 11 XXX XXXX'
                },
                email: {
                    title: 'البريد الإلكتروني',
                    address: 'info@shabakah.sa'
                },
                hours: {
                    title: 'ساعات العمل',
                    time: 'الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً'
                }
            }
        },

        // ============ صفحة راصد وخدمات علم والأيزو ============
        iotTracking: {
            meta: {
                title: 'راصد لتتبع المركبات، خدمات علم، وشهادات الأيزو | شبكة التقنية المتكاملة',
                description: 'شريك علم المعتمد في المملكة العربية السعودية لخدمات مقيم، تم، راصد، والبوابة الذكية، إضافة إلى استشارات شهادات الأيزو 9001 و14001 و27001 و45001 من البداية للنهاية.'
            },
            hero: {
                badge: 'شريك علم المعتمد · أكثر من 20 عاماً',
                title: 'خدمات علم، راصد لتتبع المركبات، واستشارات الأيزو',
                subtitle: 'شريك علم المعتمد · أكثر من 20 عاماً في الرياض — مقيم، تم، راصد، البوابة الذكية، واستشارات الأيزو مع تفعيل في نفس اليوم، تدريب، وتنبيهات التجديد قبل انتهاء الاشتراك.',
                pillars: [
                    { title: 'خدمات علم الإلكترونية', description: 'مقيم · تم · راصد · البوابة الذكية', anchor: '#elm-hub' },
                    { title: 'راصد لتتبع الأساطيل', description: 'تتبع مباشر، سياج جغرافي، سلوك السائق، تطبيق ويب وجوال', anchor: '#rased' },
                    { title: 'شهادات الأيزو', description: 'أكثر من 15 معيار دولي مع تأهيل عملي للتدقيق', anchor: '#iso' }
                ],
                buttons: {
                    demo: 'تحدث مع مختص',
                    whatsapp: 'واتساب',
                    features: 'استكشف الخدمات'
                },
                stats: {
                    vehicles: { number: '5000', label: 'مركبة متتبعة' },
                    realtime: { number: '1', suffix: 'ث', label: 'تحديثات فورية' },
                    uptime: { number: '99', suffix: '.9%', label: 'اتفاقية مستوى الخدمة' },
                    platforms: { number: '2', label: 'منصتين (iOS و Android)' }
                }
            },
            trustStrip: {
                line1: 'موزع ومركز خدمة ما بعد البيع المعتمد لشركة',
                elmLabel: 'علم لأمن المعلومات',
                line2: 'مدرجون على دليل شركاء علم · الرياض، المملكة العربية السعودية'
            },
            activationJourney: {
                tag: 'كيف يعمل',
                title: 'من الطلب إلى الخدمة الفعّالة — دون انقطاع',
                steps: [
                    { title: 'اختر خدمتك', description: 'مقيم، تم، راصد، البوابة الذكية، أو الأيزو — نموذج واحد وشريك واحد.' },
                    { title: 'نفعّل مع علم', description: 'تفعيل في نفس يوم العمل بعد التحقق من الوثائق.' },
                    { title: 'تدريب وتهيئة', description: 'تدريب عملي لفرق الموارد البشرية أو الأسطول أو الجودة في الرياض.' },
                    { title: 'تنبيهات التجديد', description: 'نذكّرك قبل انتهاء الاشتراكات — دون مفاجآت أو توقف.' }
                ]
            },
            clients: {
                tag: 'موثوق من منشآت',
                title: 'منشآت تعتمد على شبكة التقنية',
                description: 'خدمات علم، عمليات الأساطيل، وحلول تقنية مؤسسية مع مساءلة محلية.'
            },
            whyShabakah: {
                tag: 'لماذا شبكة التقنية',
                title: 'فعّل عبرنا — لا بمفردك',
                items: [
                    { title: 'فريق دعم في الرياض', description: 'مختصون محليون بالعربية والإنجليزية.' },
                    { title: 'تفعيل في نفس اليوم', description: 'نتولى معاملات علم والتهيئة بسرعة.' },
                    { title: 'شريك واحد لأربع منصات', description: 'مقيم، تم، راصد، والبوابة الذكية معاً.' },
                    { title: 'تسعير تم منشور', description: '8 شرائح أسطول شفافة على هذه الصفحة.' },
                    { title: 'استشارات الأيزو', description: 'جودة وامتثال إلى جانب عمليات علم.' },
                    { title: 'تذكير بالتجديد', description: 'تنبيهات قبل انتهاء الاشتراكات.' }
                ]
            },
            elmHub: {
                tag: 'مركز خدمات علم',
                title: 'أربع منصات من علم بشريك واحد مسؤول',
                description: 'شبكة التقنية المتكاملة شريك ومزود رائد لخدمات شركة علم لأمن المعلومات منذ أكثر من عشرين عاماً، مع منظومة متكاملة من خدمات ما بعد البيع تشمل الشرح والتدريب على الأنظمة، الاستجابة السريعة للطلبات، تحديث البيانات، ومتابعة الاشتراكات والتنبيه بتجديدها قبل انتهائها لضمان استمرارية الخدمة دون أي انقطاع.',
                cardCta: 'عرض التفاصيل',
                cards: [
                    { id: 'muqeem', name: 'مقيم', arabic: 'Muqeem', icon: 'id-card', tagline: 'إقامات وجوازات', description: 'إدارة معاملات الإقامة والتأشيرات والخروج والعودة للموظفين المقيمين إلكترونياً وفوراً.' },
                    { id: 'tamm', name: 'تم', arabic: 'Tamm', icon: 'car-front', tagline: 'مركبات ومرور', description: 'قناة إلكترونية مباشرة مع الإدارة العامة للمرور للأساطيل وشركات النقل والتأجير.' },
                    { id: 'rased', name: 'راصد', arabic: 'Rased', icon: 'satellite', tagline: 'تتبع الأسطول', description: 'خدمة سحابية للتتبع المباشر وإدارة العمليات، معتمدة من هيئة النقل في المملكة.' },
                    { id: 'smart-gate', name: 'البوابة الذكية', arabic: 'Smart Gate', icon: 'shield-check', tagline: 'تصاريح وتحقق', description: 'إصدار تصاريح زوار رقمية والتحقق من بيانات الأشخاص والمركبات وفق السجلات الرسمية لحظياً.' }
                ]
            },
            muqeem: {
                tag: 'خدمة من علم · للمنشآت فقط',
                title: 'مقيم — الإقامات وخدمات الجوازات',
                arabic: 'Muqeem',
                description: 'تتيح خدمة مقيم للمنشآت الاطلاع على بيانات موظفيها المقيمين وإتمام معاملات الجوازات الخاصة بهم إلكترونياً وبشكل فوري في أي وقت ومن أي مكان، دون الحاجة إلى مراجعة المديرية العامة للجوازات.',
                featuresLabel: 'ما يمكنك القيام به',
                features: [
                    'إصدار إقامة جديدة عبر الإنترنت',
                    'تجديد الإقامة قبل انتهاء الصلاحية — بدون مراجعات',
                    'إصدار تأشيرات الخروج والعودة في دقائق',
                    'تنبيهات استباقية لانتهاء التأشيرات والإقامات',
                    'نماذج معبأة مسبقاً — بدون إدخال يدوي',
                    'تقارير عن المقيمين، التأشيرات، التأمين الطبي والعمليات'
                ],
                callout: 'متاحة للمنشآت المسجلة فقط — لا يمكن للأفراد الاشتراك.',
                ctaLabel: 'تفعيل اشتراك مقيم'
            },
            tamm: {
                tag: 'خدمة من علم · للأساطيل والنقل والتأجير',
                title: 'تم — معاملات المركبات والمرور إلكترونياً',
                arabic: 'Tamm',
                description: 'تساهم بوابة تم في تنظيم قطاع النقل والمركبات في المملكة العربية السعودية من خلال إتاحة خدمات إلكترونية متطورة لتمكين العملاء من إجراء معاملاتهم المرورية الخاصة بالمركبات والمرتبطة بالإدارة العامة للمرور.',
                featuresLabel: 'أبرز المعاملات',
                features: [
                    'إضافة وإلغاء القائد الفعلي',
                    'الاستعلام عن رخص القيادة',
                    'الاستعلام عن تأمين المركبة',
                    'إصدار وإلغاء التفويض',
                    'إصدار وإلغاء التفويض الدولي',
                    'خدمة نقل الملكية',
                    'إصدار وتجديد رخص السير (الاستمارة)',
                    'الاستعلام عن معلومات المركبات'
                ],
                pricingTag: 'تسعير شفاف',
                pricingTitle: 'الاشتراك السنوي — 8 شرائح حسب حجم الأسطول',
                pricingNote: 'جميع الأسعار بالريال السعودي وغير شاملة ضريبة القيمة المضافة.',
                pricingTierLabel: 'الشريحة',
                pricingRangeLabel: 'عدد المركبات',
                pricingPriceLabel: 'السعر السنوي',
                pricingTiers: [
                    { tier: 1, range: 'من 0 إلى 9 مركبات', short: '0–9', price: 1800 },
                    { tier: 2, range: 'من 10 إلى 49 مركبة', short: '10–49', price: 3300 },
                    { tier: 3, range: 'من 50 إلى 99 مركبة', short: '50–99', price: 4800 },
                    { tier: 4, range: 'من 100 إلى 249 مركبة', short: '100–249', price: 7300 },
                    { tier: 5, range: 'من 250 إلى 499 مركبة', short: '250–499', price: 9800 },
                    { tier: 6, range: 'من 500 إلى 999 مركبة', short: '500–999', price: 12300 },
                    { tier: 7, range: 'من 1,000 إلى 4,999 مركبة', short: '١ك–٥ك', price: 16300 },
                    { tier: 8, range: 'من 5,000 إلى 9,999 مركبة', short: '٥ك–١٠ك', price: 20300 }
                ],
                currency: 'ر.س',
                perYear: '/ سنوياً',
                ctaLabel: 'اشترك في تم'
            },
            rasedSubnav: {
                platforms: 'المنصات',
                capabilities: 'الإمكانات',
                outcomes: 'النتائج',
                preview: 'معاينة'
            },
            rasedModules: {
                tag: 'راصد · وحدات الخدمة',
                title: 'أربع وحدات لكل عملية أسطول',
                description: 'اختر قدرات راصد التي تحتاجها منشأتك — تتبع، صيانة، عمليات، أو تأجير.',
                items: [
                    { title: 'تتبع المركبات', description: 'GPS مباشر، سياج جغرافي، سجل الرحلات، وتنبيهات فورية على الويب والجوال.', link: 'عرض الإمكانات' },
                    { title: 'الصيانة والتشغيل', description: 'أوامر عمل، جداول صيانة وقائية، وسير عمل الفنيين.', link: 'عرض الإمكانات' },
                    { title: 'عمليات الأسطول', description: 'إرسال المهام، تقييم السائق، تحليلات الوقود، وتقارير الامتثال.', link: 'عرض الإمكانات' },
                    { title: 'إدارة التأجير', description: 'تتبع العقود، فحوصات التسليم والاستلام، واستغلال أسطول التأجير.', link: 'تحدث مع المبيعات' }
                ]
            },
            platformShowcase: {
                tag: 'راصد · منصة مزدوجة',
                title: 'راصد — رؤية كاملة لأسطولك في أي مكان',
                description: 'لوحة تحكم ويب قوية لمدراء الأسطول وتطبيق جوال أصلي للمراقبة أثناء التنقل — كلاهما مدمج بالكامل مع سحابة راصد.',
                webDashboard: {
                    title: 'لوحة راصد على الويب',
                    subtitle: 'مركز قيادة المؤسسة',
                    features: [
                        'نظرة شاملة على الأسطول',
                        'تحليلات وتقارير متقدمة',
                        'إدارة أدوار متعددة المستخدمين',
                        'تسجيل الأجهزة بالجملة',
                        'تكوين التنبيهات المخصصة'
                    ],
                    mockupText: 'معاينة لوحة التحكم',
                    ctaLabel: 'فتح لوحة الويب',
                    url: 'https://raqeeb.tracking.me'
                },
                mobileApp: {
                    title: 'تطبيق راصد للجوال',
                    subtitle: 'إدارة الأسطول أثناء التنقل',
                    features: [
                        'تتبع الموقع في الوقت الفعلي',
                        'إشعارات فورية',
                        'سجل الرحلات مع إعادة التشغيل',
                        'رؤى سلوك السائق',
                        'فحص سريع لحالة الأصول'
                    ],
                    mockupText: 'معاينة تطبيق الجوال',
                    iosLabel: 'تحميل لنظام iOS',
                    iosUrl: 'https://apps.apple.com/pk/app/tracking-iot/id6755716190',
                    androidLabel: 'تحميل لنظام Android',
                    androidUrl: 'https://play.google.com/store/apps/details?id=com.tracking.iot.app'
                },
                platformAccess: {
                    tag: 'تتبع IoT · الوصول',
                    title: 'استخدم راصد على أي جهاز',
                    description: 'افتح لوحة الويب أو ثبّت تطبيق الجوال الأصلي.',
                    items: [
                        { label: 'كمبيوتر', hint: 'raqeeb.tracking.me', url: 'https://raqeeb.tracking.me', icon: 'monitor' },
                        { label: 'iOS', hint: 'App Store', url: 'https://apps.apple.com/pk/app/tracking-iot/id6755716190', icon: 'smartphone' },
                        { label: 'Android', hint: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.tracking.iot.app', icon: 'smartphone' }
                    ]
                }
            },
            features: {
                tag: 'راصد · القدرات الأساسية',
                title: 'وظائف على مستوى المؤسسات لإدارة الأسطول',
                items: [
                    {
                        title: 'المراقبة في الوقت الفعلي',
                        features: [
                            'تحديثات الموقع المباشر على خرائط تفاعلية',
                            'حالة الأصول: متحركة، خاملة، غير متصلة',
                            'خرائط حرارية لتصور كثافة الأصول'
                        ]
                    },
                    {
                        title: 'إدارة الأسطول والأصول',
                        features: [
                            'تصنيف وتجميع الأصول',
                            'تسجيل وتكوين الأجهزة',
                            'إدارة بطاقات SIM وتتبع الاتصال'
                        ]
                    },
                    {
                        title: 'السلامة وسلوك السائق',
                        features: [
                            'نظام تقييم السلوك الآلي',
                            'تنبيهات فورية للسرعة والأحداث القاسية',
                            'مراقبة الإرهاق وتتبع الاستراحات'
                        ]
                    },
                    {
                        title: 'الكفاءة التشغيلية',
                        features: [
                            'تقارير استهلاك الوقود والمسافة',
                            'سجل الرحلات الكامل مع إعادة التشغيل',
                            'السياج الجغرافي مع تنبيهات الدخول والخروج'
                        ]
                    },
                    {
                        title: 'الإدارة والصيانة',
                        features: [
                            'تكوين قواعد التنبيه المخصصة',
                            'أدوات إدارة الفنيين',
                            'تقارير الامتثال الشاملة'
                        ]
                    }
                ]
            },
            value: {
                tag: 'راصد · القيمة الأساسية',
                title: 'مركز قيادة أسطولك',
                description: 'أكثر من مجرد تتبع للموقع — رؤى قابلة للتنفيذ للسلامة والتحكم في التكاليف والتميز التشغيلي.',
                items: [
                    { title: 'تقليل الحوادث', description: 'مراقبة الأحداث القاسية وسلوك السائق لتحسين السلامة وتقليل معدلات الحوادث.' },
                    { title: 'خفض تكاليف الوقود', description: 'تتبع كفاءة الوقود وتحديد أنماط القيادة المهدرة لتقليل النفقات التشغيلية.' },
                    { title: 'إطالة عمر المركبة', description: 'تنبيهات الصيانة الاستباقية وتقليل القيادة القاسية تحمي استثمارك في الأسطول.' }
                ]
            },
            gallery: {
                tag: 'راصد · معاينة المنصة',
                title: 'شاهد راصد أثناء العمل',
                items: [
                    'لوحة التتبع المباشر',
                    'التحليلات والتقارير',
                    'تطبيق الجوال',
                    'مراقبة السلامة'
                ]
            },
            smartGate: {
                tag: 'خدمة من علم · أمن وتصاريح',
                title: 'البوابة الذكية (تصريح) — تصاريح رقمية وتحقق',
                arabic: 'Smart Gate',
                description: 'توفر البوابة الذكية تجربة إلكترونية متكاملة، فهي نافذة متطورة للحصول على جميع الخدمات الأمنية الموثوقة التي تساهم بالتحقق من حالة الأفراد والمركبات بآليات عمل سريعة ومباشرة، وتركز هذه الخدمات على هدف واحد فقط وهو تعزيز الأمن ورفع مستوى السلامة الضرورية.',
                paragraph: 'وتسهم خدمات البوابة الذكية في سهولة الوصول إلى الإجراءات الأمنية الضرورية التي توفر الأمان والموثوقية الكاملة للجهات المستفيدة، والتي تساعد في الحدّ من عمليات التحايل والتزوير في البيانات. ونظراً لكونها خدمات إلكترونية 100% من الخطوة الأولى وحتى الخطوة الأخيرة، فهي بعيدة تمامًا عن حدوث الأخطاء البشرية خلال عمليات التحقق من البيانات.',
                benefitsLabel: 'لماذا تهم',
                benefits: [
                    { title: 'رقمية 100%', description: 'سير عمل إلكتروني كامل من الطلب حتى إصدار التصريح.', icon: 'monitor-smartphone' },
                    { title: 'مقاومة للتحايل', description: 'التحقق الحي من السجلات الرسمية يمنع البيانات المعدلة أو المزورة.', icon: 'shield-alert' },
                    { title: 'الأشخاص والمركبات', description: 'التحقق من هوية الزائر ولوحة المركبة في معاملة واحدة.', icon: 'scan-face' },
                    { title: 'قواعد مالك المنشأة', description: 'سياسات تصاريح مخصصة وساعات عمل وتدفقات اعتماد لكل منشأة.', icon: 'building-2' }
                ],
                actionsLabel: 'المعاملات المتاحة',
                actions: [
                    'إصدار تصريح دخول زائر',
                    'التحقق من الفرد مقابل السجلات الرسمية',
                    'التحقق من بيانات المركبة واللوحة',
                    'قواعد واعتمادات مالك المنشأة'
                ],
                ctaLabel: 'تفعيل البوابة الذكية'
            },
            guides: {
                tag: 'الشروحات',
                title: 'أدلة خطوة بخطوة لمنصات علم',
                description: 'شروحات عملية لفرق الموارد البشرية والأسطول والعمليات — مع دعم التفعيل.',
                readLink: 'اقرأ الدليل',
                items: [
                    { title: 'تسجيل الدخول إلى مقيم', excerpt: 'الوصول إلى بوابة المنشأة والتحقق من صلاحيات المستخدمين قبل بدء المعاملات.', url: '#support' },
                    { title: 'إصدار أو تجديد الإقامة', excerpt: 'إتمام إصدار الإقامة وتجديدها إلكترونياً ببيانات موظفين معبأة مسبقاً.', url: '#support' },
                    { title: 'الاشتراك في مقيم', excerpt: 'الوثائق المطلوبة لتسجيل المنشأة والتفعيل بمساعدة شبكة التقنية.', url: '#support' },
                    { title: 'التسجيل أو الانتقال إلى تم', excerpt: 'تهيئة أسطولك على تم وربط المركبات بالإدارة العامة للمرور.', url: '#support' },
                    { title: 'إضافة القائد الفعلي في تم', excerpt: 'تعيين أو إلغاء القائد الفعلي لمركبات الأسطول في خطوات موجّهة.', url: '#support' },
                    { title: 'نظرة على تطبيق راصد للجوال', excerpt: 'تثبيت التطبيق، تفعيل التنبيهات، ومراقبة الأسطول مباشرة من هاتفك.', url: 'https://apps.apple.com/pk/app/tracking-iot/id6755716190' }
                ]
            },
            officialLinks: {
                tag: 'البوابات الرسمية',
                title: 'استخدم منصات علم الرسمية',
                description: 'نتولى التفعيل والتدريب — وتعمل على بوابات مقيم وتم وراصد والبوابة الذكية الرسمية.',
                portals: [
                    { name: 'بوابة مقيم', url: 'https://muqeem.sa/' },
                    { name: 'بوابة تم', url: 'https://tamm.sa/' },
                    { name: 'بوابة راصد', url: 'https://rased.sa/' },
                    { name: 'البوابة الذكية (علم)', url: 'https://www.elm.sa/ar/services/smart-gate' }
                ]
            },
            iso: {
                tag: 'استشارات شهادات الأيزو',
                title: 'من تحليل الفجوات إلى الشهادة — تنفيذ كامل',
                description: 'تُعد شبكة التقنية من الشركات المتخصصة والرائدة في تقديم حلول وأنظمة الجودة المتكاملة، حيث تمتلك خبرة واسعة في تأهيل وتطوير المنشآت بمختلف أحجامها وقطاعاتها. وتعتمد الشركة على منهجية احترافية ترتكز على فهم طبيعة كل نشاط واحتياجاته التشغيلية والإدارية، بما يضمن تصميم وتطبيق أنظمة فعّالة تسهم في رفع مستوى الأداء المؤسسي وتحقيق الاستدامة.',
                paragraphs: [
                    'تقدم الشركة خدمات استشارية شاملة تشمل دراسة الوضع القائم، وتحليل الفجوات، وإعداد السياسات والإجراءات، وتطوير النماذج والسجلات، وبناء الهياكل التنظيمية الداعمة، إضافة إلى تنفيذ برامج تدريبية لرفع كفاءة فرق العمل وترسيخ ثقافة الجودة داخل المنشأة.',
                    'تسهم أنظمة الجودة في تعزيز كفاءة العمليات، وتقليل الأخطاء والهدر، وتحسين إدارة المخاطر، ورفع مستوى رضا العملاء، إلى جانب تحقيق الالتزام بالمتطلبات النظامية والتنظيمية داخل المملكة. كما تعزز هذه الأنظمة القدرة التنافسية للمنشآت وتدعم بناء سمعة مؤسسية قوية قائمة على الموثوقية والاحترافية.',
                    'وتلتزم شبكة التقنية بمرافقة عملائها كشريك استراتيجي طويل الأمد، من مرحلة التخطيط والتأهيل وحتى المتابعة والتطوير المستمر، لضمان استدامة النظام وتحقيق التحسين المستمر بما يتوافق مع تطلعات الإدارة وأهداف النمو المستقبلية.'
                ],
                methodologyTag: 'منهجيتنا في 4 خطوات',
                methodologyTitle: 'كيف نسلّم الشهادة',
                methodology: [
                    { step: '01', title: 'تحليل الفجوات', description: 'تشخيص الوضع الحالي ومطابقته مع المعيار المستهدف ووضع خارطة طريق الشهادة.', icon: 'search' },
                    { step: '02', title: 'السياسات والإجراءات', description: 'إعداد السياسات والإجراءات والنماذج والسجلات المخصصة لعملياتك وهيكلك.', icon: 'file-text' },
                    { step: '03', title: 'التدريب والتوعية', description: 'تدريب فرقك وترسيخ ثقافة الجودة وتنفيذ محاكاة للتدقيق الداخلي.', icon: 'graduation-cap' },
                    { step: '04', title: 'تدقيق الشهادة', description: 'مرافقتك خلال التدقيق الخارجي ومعالجة الملاحظات وضمان الحصول على الشهادة الدولية.', icon: 'award' }
                ],
                standardsTag: 'أكثر من 15 معياراً',
                standardsTitle: 'المعايير الدولية التي نقدمها',
                standardsDescription: 'فلتر حسب القطاع للوصول إلى المعيار المناسب لنشاطك.',
                standards: [
                    { code: 'ISO 9001:2015', name: 'نظام إدارة الجودة', description: 'تحسين جودة المنتجات والخدمات من خلال إدارة فعّالة للعمليات وتعزيز التحسين المستمر داخل المنشأة.', category: 'quality', icon: 'badge-check' },
                    { code: 'ISO 14001:2015', name: 'نظام الإدارة البيئية', description: 'إدارة التأثيرات البيئية بكفاءة، وتقليل المخاطر، والالتزام بالأنظمة والتشريعات ذات العلاقة.', category: 'environment', icon: 'leaf' },
                    { code: 'ISO 45001:2018', name: 'الصحة والسلامة المهنية', description: 'توفير بيئة عمل آمنة وصحية بتحديد المخاطر وتقليل الحوادث وتعزيز ثقافة السلامة.', category: 'safety', icon: 'hard-hat' },
                    { code: 'ISO 22000:2018', name: 'سلامة الغذاء', description: 'ضمان سلامة المنتجات الغذائية بالتحكم في المخاطر عبر سلسلة الإمداد.', category: 'food', icon: 'utensils' },
                    { code: 'HACCP', name: 'تحليل المخاطر ونقاط التحكم الحرجة', description: 'منهجية وقائية تعتمد على تحديد المخاطر والتحكم بها عبر نقاط رقابية حرجة لضمان السلامة.', category: 'food', icon: 'list-checks' },
                    { code: 'ISO 13485:2016', name: 'جودة الأجهزة الطبية', description: 'نظام متخصص يركز على ضمان جودة وسلامة الأجهزة والمستلزمات الطبية والامتثال للوائح.', category: 'health', icon: 'heart-pulse' },
                    { code: 'ISO 20000-1:2018', name: 'إدارة خدمات تقنية المعلومات', description: 'تقديم خدمات تقنية مستقرة وموثوقة تلبي احتياجات العملاء ومتطلبات الأعمال.', category: 'it', icon: 'server' },
                    { code: 'ISO 27001:2022', name: 'إدارة أمن المعلومات', description: 'حماية المعلومات والبيانات الحساسة بتطبيق ضوابط أمنية فعّالة للسرية والسلامة والتوافر.', category: 'security', icon: 'shield-check' },
                    { code: 'ISO 18788:2015', name: 'عمليات الأمن الخاص', description: 'إدارة عمليات الأمن الخاص باحترافية تراعي الامتثال القانوني واحترام حقوق الإنسان.', category: 'security', icon: 'shield' },
                    { code: 'ISO 41001:2018', name: 'إدارة المرافق', description: 'تحسين كفاءة إدارة المرافق والخدمات المساندة لدعم استمرارية الأعمال.', category: 'assets', icon: 'building' },
                    { code: 'ISO 21001:2018', name: 'المنظمات التعليمية', description: 'تحسين جودة الخدمات التعليمية ورفع مستوى رضا المستفيدين وفعالية العمليات.', category: 'education', icon: 'graduation-cap' },
                    { code: 'ISO 22301:2019', name: 'استمرارية الأعمال', description: 'الاستعداد للأزمات والطوارئ وضمان استمرارية الأعمال وتقليل آثار الانقطاعات.', category: 'continuity', icon: 'life-buoy' },
                    { code: 'ISO 44001:2017', name: 'علاقات الأعمال التعاونية', description: 'إطار لإدارة علاقات الشراكة والتعاون بطريقة منظمة تعزز الثقة والأهداف المشتركة.', category: 'compliance', icon: 'handshake' },
                    { code: 'ISO 55001:2014', name: 'إدارة الأصول', description: 'الإدارة الفعالة للأصول المادية وغير المادية طوال دورة حياتها لتحقيق أقصى قيمة.', category: 'assets', icon: 'recycle' },
                    { code: 'ISO 37301:2021', name: 'إدارة الامتثال', description: 'مساعدة المؤسسات على الالتزام بالمتطلبات القانونية وتعزيز ثقافة الحوكمة الرشيدة.', category: 'compliance', icon: 'gavel' },
                    { code: 'معايير أخرى عند الطلب', name: 'معايير قطاعية متخصصة', description: 'نقدم أيضاً معايير قطاعية متخصصة عند الطلب — تواصل مع مستشارينا لخارطة طريق مخصصة.', category: 'compliance', icon: 'sparkles' }
                ],
                ctaLabel: 'طلب استشارة الأيزو'
            },
            isoCategories: {
                all: 'كل المعايير',
                quality: 'الجودة',
                environment: 'البيئة',
                safety: 'الصحة والسلامة',
                food: 'الأغذية',
                health: 'الرعاية الصحية',
                it: 'تقنية المعلومات',
                security: 'الأمن',
                education: 'التعليم',
                continuity: 'الاستمرارية',
                assets: 'الأصول',
                compliance: 'الامتثال'
            },
            support: {
                tag: 'الدعم · متاح طوال الأسبوع',
                title: 'تحدّث مع مختص من شبكة التقنية',
                description: 'التفعيل، الدعم الفني، تنبيهات تجديد الاشتراك، والتدريب التشغيلي — يديرها فريقنا في الرياض مباشرة.',
                channels: {
                    phone: { label: 'الخط المباشر', value: '+966 920033465', href: 'tel:+966920033465', icon: 'phone' },
                    whatsapp: { label: 'واتساب', value: '+966 920033465', href: '#', icon: 'message-circle' },
                    email: { label: 'البريد الإلكتروني', value: 'info@shabakah.sa', href: 'mailto:info@shabakah.sa', icon: 'mail' },
                    location: { label: 'المكتب', value: 'الأندلس مول، الرياض', icon: 'map-pin' }
                },
                form: {
                    title: 'طلب تفعيل أو معاودة الاتصال',
                    name: 'الاسم الكامل',
                    company: 'الشركة / المنشأة',
                    phone: 'الجوال',
                    service: 'مهتم بـ',
                    serviceOptions: ['مقيم', 'تم', 'راصد', 'البوابة الذكية', 'استشارات الأيزو', 'أخرى'],
                    message: 'كيف يمكننا مساعدتك؟',
                    submit: 'إرسال الطلب',
                    note: 'نرد عادة خلال ساعة عمل واحدة.'
                }
            },
            faq: {
                tag: 'الأسئلة الشائعة',
                title: 'إجابات على أكثر الأسئلة شيوعاً',
                categories: {
                    all: 'الكل',
                    muqeem: 'مقيم',
                    tamm: 'تم',
                    rased: 'راصد',
                    'smart-gate': 'البوابة الذكية',
                    iso: 'الأيزو'
                },
                items: [
                    { category: 'muqeem', q: 'ما هي خدمة مقيم ومن يمكنه استخدامها؟', a: 'مقيم منصة من علم تتيح للمنشآت إدارة معاملات الجوازات والإقامات لموظفيها المقيمين إلكترونياً. الخدمة متاحة للمنشآت المسجلة فقط ولا تخدم الأفراد.' },
                    { category: 'muqeem', q: 'كيف يعمل تسعير اشتراك مقيم؟', a: 'يُفوتر مقيم لكل منشأة حسب عدد المقيمين النشطين وحزمة الخدمة. تقدم شبكة التقنية السعر السنوي الدقيق بعد مراجعة حجم القوى العاملة — دون رسوم مخفية.' },
                    { category: 'tamm', q: 'كيف يتم تسعير خدمة تم للأساطيل؟', a: 'تُسعّر تم في 8 شرائح حسب حجم الأسطول، تبدأ من 1,800 ر.س لـ 0-9 مركبات وتصل إلى 20,300 ر.س لـ 5,000-9,999 مركبة. جميع الأسعار غير شاملة الضريبة.' },
                    { category: 'tamm', q: 'كيف أضيف أو ألغي القائد الفعلي في تم؟', a: 'من بوابة تم، افتح سجل المركبة، اختر القائد الفعلي، ثم أضف أو ألغِ السائق المرتبط باللوحة. نوفر تدريباً عملياً لفريق النقل.' },
                    { category: 'tamm', q: 'كيف أسجل أسطولي أو أنقله إلى تم؟', a: 'قدّم السجل التجاري وقائمة المركبات وبيانات المفوض. نسجل منشأتك لدى علم وننقل المركبات في نفس يوم العمل عند اكتمال الوثائق.' },
                    { category: 'rased', q: 'هل راصد هو نفسه رقيب؟', a: 'نعم. راصد هو الاسم الرسمي لخدمة تتبع المركبات السحابية من علم. تقدمها شبكة التقنية مع التفعيل والتدريب والدعم على مدار الساعة، وهي معتمدة من هيئة النقل.' },
                    { category: 'rased', q: 'هل تتوفر لراصد تطبيق جوال؟', a: 'نعم. يأتي راصد مع لوحة تحكم ويب وتطبيق جوال أصلي لنظامي iOS و Android يشمل التتبع المباشر، سجل الرحلات، السياج الجغرافي وتقييم سلوك السائق.' },
                    { category: 'rased', q: 'كم مدة الاحتفاظ بسجل الرحلات في راصد؟', a: 'الأرشيف متاح للتشغيل والتصدير حسب شريحة الاشتراك — عادة من 90 يوماً إلى 12 شهراً. تواصل معنا لمدة أرشفة تناسب متطلبات الامتثال.' },
                    { category: 'smart-gate', q: 'ماذا تقدم البوابة الذكية؟', a: 'تصدر البوابة الذكية تصاريح زوار رقمية للمنشآت الحيوية وتتحقق من بيانات الأشخاص والمركبات مقابل السجلات الرسمية — لا أوراق ولا مخاطر تزوير.' },
                    { category: 'iso', q: 'ما هي معايير الأيزو التي تغطيها شبكة التقنية؟', a: 'نقدم استشارات شاملة لـ ISO 9001 و 14001 و 45001 و 22000 و HACCP و 13485 و 20000-1 و 27001 و 18788 و 41001 و 21001 و 22301 و 44001 و 55001 و 37301 إضافة إلى معايير قطاعية أخرى عند الطلب.' },
                    { category: 'general', q: 'كم يستغرق تفعيل اشتراك جديد لخدمات علم؟', a: 'في الغالب يتم التفعيل خلال نفس يوم العمل بعد التحقق من الوثائق. يتابع فريقنا أيضاً تواريخ التجديد لضمان عدم انقطاع الخدمة.' },
                    { category: 'general', q: 'لماذا أفعّل خدمات علم عبر شبكة التقنية؟', a: 'تحصل على دعم في الرياض بالعربية والإنجليزية، تفعيل في نفس اليوم، تدريب لفريقك، تذكير بالتجديد، تسعير تم منشور، وشريك واحد لمقيم وتم وراصد والبوابة الذكية واستشارات الأيزو.' }
                ]
            },
            mobileContact: {
                call: 'اتصال',
                whatsapp: 'واتساب'
            }
        },

        // ============ التذييل ============
        footer: {
            tagline: 'تميّز تقني على مستوى المؤسسات منذ عام 1997',
            newsletter: {
                title: 'ابق على اطلاع',
                description: 'اشترك في نشرتنا الإخبارية لآخر الأفكار والتحديثات التقنية',
                placeholder: 'أدخل بريدك الإلكتروني',
                button: 'اشتراك'
            },
            sections: {
                services: 'الخدمات',
                company: 'الشركة',
                resources: 'الموارد',
                connect: 'التواصل'
            },
            links: {
                infrastructure: 'البنية التحتية لتقنية المعلومات',
                datacenter: 'حلول مراكز البيانات',
                physicalSecurity: 'أنظمة الأمن المادي',
                communications: 'الاتصالات الموحدة والتعاون',
                licensing: 'ترخيص البرمجيات',
                enduser: 'أجهزة المستخدم النهائي',
                cybersecurity: 'الأمن المتكامل واستمرارية الأعمال',
                managed: 'الخدمات المُدارة',
                isp: 'خدمات مزود خدمة الإنترنت (ISP)',
                about: 'من نحن',
                careers: 'الوظائف',
                partners: 'الشركاء',
                contact: 'تواصل معنا',
                blog: 'المدونة',
                caseStudies: 'دراسات الحالة',
                whitepapers: 'الأوراق البيضاء',
                support: 'الدعم'
            },
            copyright: '© 2024 شبكة التقنية المتكاملة. جميع الحقوق محفوظة.',
            privacy: 'سياسة الخصوصية',
            terms: 'شروط الخدمة',
            certified: 'معتمد ISO 27001 | ISO 22301'
        }
    }
};

// ============ LANGUAGE MANAGEMENT SYSTEM ============
let currentLanguage = localStorage.getItem('language') || 'en';

// Initialize language system
function initLanguageSystem() {
    setLanguage(currentLanguage);
    
    // Multiple binding approaches for language toggle
    const languageToggle = document.getElementById('languageToggle');
    
    if (languageToggle) {
        languageToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleLanguage();
        }, true);
        
        languageToggle.querySelectorAll('*').forEach(child => {
            child.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleLanguage();
            }, true);
        });
    }
    
    document.addEventListener('click', function(e) {
        if (e.target.closest('#languageToggle')) {
            e.preventDefault();
            e.stopPropagation();
            toggleLanguage();
        }
    }, true);
    
    console.log('🌐 Language system initialized:', currentLanguage);
}

// Toggle between languages
function toggleLanguage() {
    console.log('Toggle clicked! Current language:', currentLanguage);
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    console.log('Switching to:', newLanguage);
    
    localStorage.setItem('language', newLanguage);
    location.reload();
}

window.toggleLanguage = toggleLanguage;

// Set language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'ar');
    document.body.classList.toggle('ltr', lang === 'en');
    
    // Update active language indicator
    const langEn = document.querySelector('.lang-en');
    const langAr = document.querySelector('.lang-ar');
    
    if (langEn && langAr) {
        if (lang === 'en') {
            langEn.classList.add('active');
            langAr.classList.remove('active');
        } else {
            langEn.classList.remove('active');
            langAr.classList.add('active');
        }
    }
    
    // Update all translatable elements
    updatePageContent(lang);
    
    console.log('✅ Language changed to:', lang);
}

// ============ PAGE CONTENT UPDATERS ============
function updatePageContent(lang) {
    const t = translations[lang];
    const currentPage = getCurrentPage();
    
    // Update navigation (common to all pages)
    updateNavigation(t.nav);
    updateFooter(t.footer);
    
    // Update breadcrumb "Home" link (common to all pages except index)
    updateBreadcrumbHome(t.nav.home);
    
    // Update common elements (search modal, cookie consent)
    if (t.common) {
        updateCommonElements(t.common);
    }
    
    // Update modern footer (common to all pages)
    if (t.home && t.home.footerModern) {
        updateModernFooter(t.home.footerModern);
    }
    
    // Page-specific updates
    switch(currentPage) {
        case 'index':
            updateHomePage(t.home);
            break;
        case 'about':
            updateAboutPage(t.about);
            break;
        case 'services':
            updateServicesPage(t.services);
            break;
        case 'solutions':
            updateSolutionsPage(t.solutions);
            break;
        case 'partners':
            updatePartnersPage(t.partners);
            break;
        case 'contact':
            updateContactPage(t.contact);
            break;
        case 'iot-tracking':
            updateIoTPage(t.iotTracking);
            break;
    }
}

// Determine current page
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('about')) return 'about';
    if (path.includes('services')) return 'services';
    if (path.includes('solutions')) return 'solutions';
    if (path.includes('partners')) return 'partners';
    if (path.includes('contact')) return 'contact';
    if (path.includes('iot-tracking')) return 'iot-tracking';
    return 'index';
}

// Update navigation
function updateNavigation(nav) {
    // Main nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes('index')) link.textContent = nav.home;
        if (href && href.includes('about')) link.textContent = nav.about;
        if (href && href.includes('services')) {
            const text = link.textContent.trim();
            if (text === 'Services' || text === 'الخدمات') link.textContent = nav.services;
        }
        if (href && href.includes('solutions')) link.textContent = nav.solutions;
        if (href && href.includes('partners')) link.textContent = nav.partners;
        if (href && href.includes('contact')) link.textContent = nav.contact;
    });
    
    // Mega menu items
    const megaItems = document.querySelectorAll('.mega-menu-item');
    if (megaItems.length > 0) {
        megaItems.forEach((item, index) => {
            const keys = ['infrastructure', 'datacenter', 'physicalSecurity', 'communications', 'licensing', 'enduser', 'cybersecurity', 'managed', 'isp'];
            if (keys[index] && nav.megaMenu[keys[index]]) {
                const h4 = item.querySelector('h4');
                const p = item.querySelector('p');
                const link = item.querySelector('.mega-link');
                if (h4) h4.textContent = nav.megaMenu[keys[index]].title;
                if (p) p.textContent = nav.megaMenu[keys[index]].description;
                if (link) link.textContent = nav.megaMenu[keys[index]].link;
            }
        });
    }
}

// Update Breadcrumb Home Link (common to all pages)
function updateBreadcrumbHome(homeText) {
    // Modern breadcrumb style
    const breadcrumbHomeModern = document.querySelector('.breadcrumb-modern a[href*="index"]');
    if (breadcrumbHomeModern) breadcrumbHomeModern.textContent = homeText;
    
    // Fallback for older breadcrumb style
    const breadcrumbHome = document.querySelector('.breadcrumb a[href*="index"]');
    if (breadcrumbHome) breadcrumbHome.textContent = homeText;
    
    // Also try matching just href="index.html"
    const breadcrumbHomeAlt = document.querySelector('a[href="index.html"]');
    if (breadcrumbHomeAlt && breadcrumbHomeAlt.closest('.breadcrumb-modern, .breadcrumb')) {
        breadcrumbHomeAlt.textContent = homeText;
    }
}

// Update Common Elements (search modal, cookie consent)
function updateCommonElements(common) {
    // Search modal
    if (common.search) {
        const searchInput = document.querySelector('.search-modal .search-input');
        if (searchInput) searchInput.placeholder = common.search.placeholder;
    }
    
    // Cookie consent
    if (common.cookie) {
        const cookieMessage = document.querySelector('.cookie-content p');
        const cookieLearnMore = document.querySelector('.cookie-link');
        const cookieAccept = document.querySelector('#acceptCookies');
        
        if (cookieMessage) {
            // Preserve the icon
            const icon = cookieMessage.querySelector('i, svg');
            cookieMessage.innerHTML = '';
            if (icon) {
                cookieMessage.appendChild(icon.cloneNode(true));
                cookieMessage.appendChild(document.createTextNode(' '));
            }
            cookieMessage.appendChild(document.createTextNode(common.cookie.message));
        }
        if (cookieLearnMore) cookieLearnMore.textContent = common.cookie.learnMore;
        if (cookieAccept) cookieAccept.textContent = common.cookie.accept;
    }
}

// Update Home Page
function escapeHtmlServiceText(text) {
    if (text == null) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function buildServiceCardBody(bullets, goal, goalLabel) {
    const label = goalLabel != null ? goalLabel : 'Goal';
    const lis = (bullets || []).map(b => `<li>${escapeHtmlServiceText(b)}</li>`).join('');
    return (
        `<ul class="service-bullets">${lis}</ul>` +
        `<p class="service-goal"><strong>${escapeHtmlServiceText(label)}:</strong> ${escapeHtmlServiceText(goal)}</p>`
    );
}

function updateHomePage(home) {
    // Hero section (old style)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `
            ${home.hero.title}<br>
            <span class="gradient-text">${home.hero.subtitle}</span><br>
            ${home.hero.since}
        `;
    }
    
    // Hero Bold section (new style)
    if (home.heroBold) {
        const heroBoldTitle = document.querySelector('.hero-title-bold');
        if (heroBoldTitle) {
            heroBoldTitle.innerHTML = `
                ${home.heroBold.line1}<br>
                <span class="gradient-text-brand">${home.heroBold.line2}</span> <br>
                ${home.heroBold.line3}
            `;
        }
        
        // Hero bold description
        const heroBoldSubtitle = document.querySelector('.hero-text-content .hero-subtitle');
        if (heroBoldSubtitle) heroBoldSubtitle.textContent = home.heroBold.description;
        
        // Hero bold stats
        const statCards = document.querySelectorAll('.hero-stats-unique .stat-card');
        const statKeys = [
            'established', 'projects', 'branches', 'experience',
            'cstDataCenter', 'localHosting', 'localDia', 'isoCerts'
        ];
        if (statCards.length && home.heroBold.stats) {
            statCards.forEach((card, index) => {
                const key = statKeys[index];
                const label = card.querySelector('.stat-label');
                if (label && key && home.heroBold.stats[key]) {
                    label.textContent = home.heroBold.stats[key];
                }
            });
        }
    }

    const orbLabelEls = document.querySelectorAll('.hero-tech-orb .data-label');
    if (orbLabelEls.length && Array.isArray(home.heroOrbLabels)) {
        home.heroOrbLabels.forEach((text, index) => {
            if (orbLabelEls[index]) orbLabelEls[index].textContent = text;
        });
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle && !home.heroBold) heroSubtitle.textContent = home.hero.description;
    
    // Hero CTAs
    const heroCTAs = document.querySelectorAll('.hero-cta .btn span');
    if (heroCTAs[0]) heroCTAs[0].textContent = home.hero.cta1;
    if (heroCTAs[1]) heroCTAs[1].textContent = home.hero.cta2;
    
    // Scroll indicator
    const scrollText = document.querySelector('.scroll-indicator span');
    if (scrollText) scrollText.textContent = home.hero.scroll;
    
    // Hero stats
    const heroStatLabels = document.querySelectorAll('.hero-stats .stat-label');
    if (heroStatLabels[0]) heroStatLabels[0].textContent = home.hero.stats.years;
    if (heroStatLabels[1]) heroStatLabels[1].textContent = home.hero.stats.projects;
    if (heroStatLabels[2]) heroStatLabels[2].textContent = home.hero.stats.clients;
    
    // Why section
    const whyTag = document.querySelector('.why-section .section-tag');
    const whyTitle = document.querySelector('.why-section .section-title');
    const whyDesc = document.querySelector('.why-section .section-description');
    if (whyTag) whyTag.textContent = home.why.tag;
    if (whyTitle) whyTitle.textContent = home.why.title;
    if (whyDesc) whyDesc.textContent = home.why.description;
    
    // Why cards
    const whyCards = document.querySelectorAll('.why-card');
    const cardKeys = ['security', 'support', 'certified', 'vendor', 'track'];
    whyCards.forEach((card, index) => {
        if (cardKeys[index] && home.why.cards[cardKeys[index]]) {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            if (h3) h3.textContent = home.why.cards[cardKeys[index]].title;
            if (p) p.textContent = home.why.cards[cardKeys[index]].description;
        }
    });
    
    // Services section
    const servicesTag = document.querySelector('.services-section .section-tag');
    const servicesTitle = document.querySelector('.services-section .section-title');
    const servicesDesc = document.querySelector('.services-section .section-description');
    if (servicesTag) servicesTag.textContent = home.services.tag;
    if (servicesTitle) servicesTitle.textContent = home.services.title;
    if (servicesDesc) servicesDesc.textContent = home.services.description;
    
    // Home page service cards
    if (home.serviceCards) {
        const serviceCards = document.querySelectorAll('.services-grid .service-card');
        serviceCards.forEach((card, index) => {
            const data = home.serviceCards[index];
            if (!data) return;
            const title = card.querySelector('h3');
            const body = card.querySelector('.service-card-body');
            const link = card.querySelector('.service-link');
            if (title) title.textContent = data.title;
            if (body) {
                if (data.bullets && data.goal != null) {
                    body.innerHTML = buildServiceCardBody(data.bullets, data.goal, data.goalLabel);
                } else if (data.description) {
                    body.innerHTML = `<p class="service-goal">${escapeHtmlServiceText(data.description)}</p>`;
                }
            }
            if (link) {
                const icon = link.querySelector('i, svg');
                link.innerHTML = data.link + ' ';
                if (icon) link.appendChild(icon.cloneNode(true));
            }
        });
    }
    
    // Stats section
    const statsTitle = document.querySelector('.stats-title');
    if (statsTitle) statsTitle.textContent = home.stats.title;
    
    const statLabels = document.querySelectorAll('.stats-section .stat-label');
    if (statLabels[0]) statLabels[0].textContent = home.stats.projects;
    if (statLabels[1]) statLabels[1].textContent = home.stats.clients;
    if (statLabels[2]) statLabels[2].textContent = home.stats.years;
    if (statLabels[3]) statLabels[3].textContent = home.stats.support;
    
    const testimonialsTitle = document.querySelector('.testimonials-modern .testimonials-title');
    if (testimonialsTitle && home.testimonials.title) {
        testimonialsTitle.textContent = home.testimonials.title;
    }

    // Fallback for old testimonials
    const oldTestimonialsTag = document.querySelector('.testimonials-section .section-tag');
    const oldTestimonialsTitle = document.querySelector('.testimonials-section .section-title');
    if (oldTestimonialsTag) oldTestimonialsTag.textContent = home.testimonials.tag || '';
    if (oldTestimonialsTitle) oldTestimonialsTitle.textContent = home.testimonials.title || '';
    
    // CTA section
    const ctaTitle = document.querySelector('.cta-title');
    const ctaDesc = document.querySelector('.cta-description');
    if (ctaTitle) ctaTitle.textContent = home.cta.title;
    if (ctaDesc) ctaDesc.textContent = home.cta.description;
    
    const ctaBtns = document.querySelectorAll('.cta-buttons .btn span');
    if (ctaBtns[0]) ctaBtns[0].textContent = home.cta.btn1;
    if (ctaBtns[1]) ctaBtns[1].textContent = home.cta.btn2;
    
    // Projects Carousel
    if (home.projectsCarousel) {
        const carouselTag = document.querySelector('.carousel-tag');
        const carouselHeader = document.querySelector('.carousel-header h2');
        
        if (carouselTag) carouselTag.textContent = home.projectsCarousel.tag;
        if (carouselHeader) {
            const pc = home.projectsCarousel;
            if (pc.title && pc.titleHighlight) {
                carouselHeader.innerHTML =
                    `${pc.title}<br><span class="gradient-text">${pc.titleHighlight}</span>`;
            } else if (pc.titleHighlight) {
                carouselHeader.innerHTML = `<span class="gradient-text">${pc.titleHighlight}</span>`;
            } else if (pc.title) {
                carouselHeader.innerHTML = pc.title;
            }
        }
        
        // Update carousel slides
        if (home.projectsCarousel.slides) {
            const slides = document.querySelectorAll('.carousel-slide');
            home.projectsCarousel.slides.forEach((slide, index) => {
                if (slides[index]) {
                    const badge = slides[index].querySelector('.slide-badge');
                    const title = slides[index].querySelector('.slide-content h3');
                    const desc = slides[index].querySelector('.slide-content p');
                    
                    if (badge) badge.textContent = slide.badge;
                    if (title) title.innerHTML = slide.title;
                    if (desc) desc.innerHTML = slide.description;
                    
                    // Update metrics
                    const metrics = slides[index].querySelectorAll('.metric');
                    if (metrics[0] && slide.metrics) {
                        const num1 = metrics[0].querySelector('.metric-num');
                        const txt1 = metrics[0].querySelector('.metric-txt');
                        if (num1) num1.textContent = slide.metrics.m1;
                        if (txt1) txt1.textContent = slide.metrics.m1Label;
                    }
                    if (metrics[1] && slide.metrics) {
                        const num2 = metrics[1].querySelector('.metric-num');
                        const txt2 = metrics[1].querySelector('.metric-txt');
                        if (num2) num2.textContent = slide.metrics.m2;
                        if (txt2) txt2.textContent = slide.metrics.m2Label;
                    }
                    if (metrics[2] && slide.metrics) {
                        const num3 = metrics[2].querySelector('.metric-num');
                        const txt3 = metrics[2].querySelector('.metric-txt');
                        if (num3) num3.textContent = slide.metrics.m3;
                        if (txt3) txt3.textContent = slide.metrics.m3Label;
                    }
                    
                    // Update tags
                    if (slide.tags) {
                        const tags = slides[index].querySelectorAll('.slide-tags span');
                        slide.tags.forEach((tag, i) => {
                            if (tags[i]) tags[i].textContent = tag;
                        });
                    }
                }
            });
        }
    }
    
    // Proof Section
    if (home.proofSection) {
        const proofTitle = document.querySelector('.proof-section .section-title');
        const proofDesc = document.querySelector('.proof-section .section-description');
        
        if (proofTitle) {
            proofTitle.innerHTML = `${home.proofSection.title}<br><span style="background: linear-gradient(135deg, #00C4E6, #FFB800); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${home.proofSection.titleHighlight}</span>`;
        }
        if (proofDesc) proofDesc.textContent = home.proofSection.description;
        
        // Proof cards - update badges, titles, descriptions
        const proofCards = document.querySelectorAll('.proof-section .project-card, .proof-card');
        home.proofSection.cards.forEach((card, index) => {
            if (proofCards[index]) {
                const badge = proofCards[index].querySelector('.proof-badge');
                const title = proofCards[index].querySelector('h3, .proof-title');
                const desc = proofCards[index].querySelector('p:not(.text-muted), .proof-desc');
                const tagSpans = proofCards[index].querySelectorAll('.proof-tags span');

                if (badge && card.badge) badge.textContent = card.badge;
                if (title) title.textContent = card.title;
                if (desc) desc.textContent = card.description;
                if (card.tags && tagSpans.length) {
                    card.tags.forEach((tagText, i) => {
                        if (tagSpans[i]) tagSpans[i].textContent = tagText;
                    });
                }
            }
        });
    }

    // Trust band (partner logos strip)
    if (home.trustBand?.html) {
        const trustLabel = document.querySelector('.trust-band .trust-band-label');
        if (trustLabel) trustLabel.innerHTML = home.trustBand.html;
    }
    
    // Tech Section
    if (home.techSection) {
        const techTitle = document.querySelector('.tech-section .section-title');
        const techDesc = document.querySelector('.tech-section .section-description');
        
        if (techTitle) {
            techTitle.innerHTML = `${home.techSection.title}<br><span style="background: linear-gradient(135deg, #00C4E6, #FFB800); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${home.techSection.titleHighlight}</span>`;
        }
        if (techDesc) techDesc.textContent = home.techSection.description;

        // Tech categories
        const techCategories = document.querySelectorAll('.tech-category');
        home.techSection.categories.forEach((category, index) => {
            if (techCategories[index]) {
                const catTitle = techCategories[index].querySelector('h3');
                if (catTitle) catTitle.textContent = category.title;

                const items = techCategories[index].querySelectorAll('span');
                category.items.forEach((item, i) => {
                    if (items[i]) items[i].textContent = '• ' + item;
                });
                for (let i = category.items.length; i < items.length; i++) {
                    if (items[i]) items[i].textContent = '';
                }
            }
        });
        
        // CTA button in tech section
        const techCta = document.querySelector('.tech-section .btn-primary');
        if (techCta) techCta.textContent = home.techSection.ctaButton;
    }
    
    // Update modern footer
    if (home.footerModern) {
        updateModernFooter(home.footerModern);
    }
}

// Update Modern Footer (for all pages)
function updateModernFooter(footerModern) {
    if (!footerModern) return;
    
    // Footer tagline
    const tagline = document.querySelector('.footer-tagline-modern');
    if (tagline) tagline.textContent = footerModern.tagline;
    
    // Get all footer columns (excluding the brand column)
    const footerCols = document.querySelectorAll('.footer-col-modern');
    
    // Footer column headings and links
    if (footerModern.columns) {
        // Services column (first .footer-col-modern)
        if (footerCols[0]) {
            const heading = footerCols[0].querySelector('h4');
            if (heading) heading.textContent = footerModern.columns.services;
            const links = footerCols[0].querySelectorAll('.footer-links-modern a');
            if (footerModern.links) {
                if (links[0]) links[0].textContent = footerModern.links.infrastructure;
                if (links[1]) links[1].textContent = footerModern.links.datacenter;
                if (links[2]) links[2].textContent = footerModern.links.physicalSecurity;
                if (links[3]) links[3].textContent = footerModern.links.communications;
                if (links[4]) links[4].textContent = footerModern.links.licensing;
                if (links[5]) links[5].textContent = footerModern.links.enduser;
                if (links[6]) links[6].textContent = footerModern.links.cybersecurity;
                if (links[7]) links[7].textContent = footerModern.links.managed;
                if (links[8]) links[8].textContent = footerModern.links.isp;
            }
        }
        
        // Company column (second .footer-col-modern)
        if (footerCols[1]) {
            const heading = footerCols[1].querySelector('h4');
            if (heading) heading.textContent = footerModern.columns.company;
            const links = footerCols[1].querySelectorAll('.footer-links-modern a');
            if (footerModern.links) {
                if (links[0]) links[0].textContent = footerModern.links.about;
                if (links[1]) links[1].textContent = footerModern.links.journey;
                if (links[2]) links[2].textContent = footerModern.links.partners;
                if (links[3]) links[3].textContent = footerModern.links.solutions;
                if (links[4]) links[4].textContent = footerModern.links.contact;
            }
        }
        
        // Solutions column (third .footer-col-modern)
        if (footerCols[2]) {
            const heading = footerCols[2].querySelector('h4');
            if (heading) heading.textContent = footerModern.columns.solutions;
            const links = footerCols[2].querySelectorAll('.footer-links-modern a');
            if (footerModern.links) {
                if (links[0]) links[0].textContent = footerModern.links.government;
                if (links[1]) links[1].textContent = footerModern.links.healthcare;
                if (links[2]) links[2].textContent = footerModern.links.finance;
                if (links[3]) links[3].textContent = footerModern.links.education;
                if (links[4]) links[4].textContent = footerModern.links.iot;
            }
        }
        
        // Connect column (fourth .footer-col-modern)
        if (footerCols[3]) {
            const heading = footerCols[3].querySelector('h4');
            if (heading) heading.textContent = footerModern.columns.connect;
        }
    }
    
    // Footer contact info
    if (footerModern.contactInfo) {
        const contactItems = document.querySelectorAll('.footer-contact-modern li');
        if (contactItems[0]) {
            // Location - first item
            const span = contactItems[0].querySelector('span:last-child');
            if (span) span.textContent = footerModern.contactInfo.location;
        }
        if (contactItems[1]) {
            // Phone - second item
            const link = contactItems[1].querySelector('a');
            if (link) link.textContent = footerModern.contactInfo.phone;
        }
        if (contactItems[2]) {
            // Email - third item
            const link = contactItems[2].querySelector('a');
            if (link) link.textContent = footerModern.contactInfo.email;
        }
        if (contactItems[3]) {
            // Support - fourth item
            const span = contactItems[3].querySelector('span:last-child');
            if (span) span.textContent = footerModern.contactInfo.support;
        }
    }
    
    // Copyright
    const copyright = document.querySelector('.footer-bottom-modern .footer-copyright');
    if (copyright && footerModern.copyright) copyright.textContent = footerModern.copyright;
    
    // Certifications
    if (footerModern.certs) {
        const certBadges = document.querySelectorAll('.cert-badge');
        certBadges.forEach(badge => {
            const text = badge.textContent;
            if (text.includes('27001') && footerModern.certs.iso27001) {
                badge.textContent = footerModern.certs.iso27001;
            }
            if (text.includes('22301') && footerModern.certs.iso22301) {
                badge.textContent = footerModern.certs.iso22301;
            }
        });
    }
}

// Update About Page
function updateAboutPage(about) {
    // Modern Hero - new selectors
    const heroTitleLines = document.querySelectorAll('.hero-title-modern .title-line');
    if (about.heroModern) {
        if (heroTitleLines[0]) heroTitleLines[0].textContent = about.heroModern.titleLine1;
        if (heroTitleLines[1]) heroTitleLines[1].textContent = about.heroModern.titleLine2;
        
        const heroSubtitle = document.querySelector('.hero-subtitle-modern');
        if (heroSubtitle) heroSubtitle.textContent = about.heroModern.subtitle;
        
        const breadcrumbCurrent = document.querySelector('.breadcrumb-modern .current');
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = about.hero.breadcrumb;
        
        // Hero stats
        const statNumbers = document.querySelectorAll('.hero-stat-number');
        const statLabels = document.querySelectorAll('.hero-stat-label');
        if (about.heroModern.stats) {
            if (statNumbers[0] && about.heroModern.stats.stat1) statNumbers[0].textContent = about.heroModern.stats.stat1.number;
            if (statLabels[0] && about.heroModern.stats.stat1) statLabels[0].textContent = about.heroModern.stats.stat1.label;
            if (statNumbers[1] && about.heroModern.stats.stat2) statNumbers[1].textContent = about.heroModern.stats.stat2.number;
            if (statLabels[1] && about.heroModern.stats.stat2) statLabels[1].textContent = about.heroModern.stats.stat2.label;
            if (statNumbers[2] && about.heroModern.stats.stat3) statNumbers[2].textContent = about.heroModern.stats.stat3.number;
            if (statLabels[2] && about.heroModern.stats.stat3) statLabels[2].textContent = about.heroModern.stats.stat3.label;
        }
    }
    
    // Fallback for old hero selectors
    const breadcrumb = document.querySelector('.breadcrumb span:last-child');
    if (breadcrumb) breadcrumb.textContent = about.hero.breadcrumb;
    
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    if (pageTitle) pageTitle.textContent = about.hero.title;
    if (pageSubtitle) pageSubtitle.textContent = about.hero.subtitle;
    
    // Overview section
    const overviewTag = document.querySelector('.overview-section .section-tag');
    const overviewTitle = document.querySelector('.overview-section h2');
    const overviewParas = document.querySelectorAll('.overview-content p');
    if (overviewTag) overviewTag.textContent = about.overview.tag;
    if (overviewTitle) overviewTitle.textContent = about.overview.title;
    if (overviewParas[0]) overviewParas[0].textContent = about.overview.p1;
    if (overviewParas[1]) overviewParas[1].textContent = about.overview.p2;
    if (overviewParas[2]) overviewParas[2].textContent = about.overview.p3;
    
    // Timeline
    const timelineTag = document.querySelector('.timeline-section .section-tag');
    const timelineTitle = document.querySelector('.timeline-section .section-title');
    const timelineDesc = document.querySelector('.timeline-section .section-description');
    if (timelineTag) timelineTag.textContent = about.timeline.tag;
    if (timelineTitle) timelineTitle.textContent = about.timeline.title;
    if (timelineDesc) timelineDesc.textContent = about.timeline.description;
    
    // Timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    const years = ['1997', '2005', '2010', '2015', '2020', '2024'];
    timelineItems.forEach((item, index) => {
        if (years[index] && about.timeline.milestones[years[index]]) {
            const h3 = item.querySelector('h3');
            const p = item.querySelector('.timeline-content p');
            if (h3) h3.textContent = about.timeline.milestones[years[index]].title;
            if (p) p.textContent = about.timeline.milestones[years[index]].description;
        }
    });
    
    // Vision & Mission section
    if (about.visionMission) {
        const vmCards = document.querySelectorAll('.vm-card');
        if (vmCards[0]) {
            const title = vmCards[0].querySelector('h3');
            const desc = vmCards[0].querySelector('p');
            if (title) title.textContent = about.visionMission.vision.title;
            if (desc) desc.textContent = about.visionMission.vision.description;
        }
        if (vmCards[1]) {
            const title = vmCards[1].querySelector('h3');
            const desc = vmCards[1].querySelector('p');
            if (title) title.textContent = about.visionMission.mission.title;
            if (desc) desc.textContent = about.visionMission.mission.description;
        }
    }
    
    // Philosophy section
    if (about.philosophy) {
        const philosophySection = document.querySelector('.philosophy-section');
        if (philosophySection) {
            const tag = philosophySection.querySelector('.section-tag');
            const title = philosophySection.querySelector('.section-title');
            const desc = philosophySection.querySelector('.section-description');
            
            if (tag) tag.textContent = about.philosophy.tag;
            if (title) title.textContent = about.philosophy.title;
            if (desc) desc.textContent = about.philosophy.description;
            
            // Philosophy cards
            const philosophyCards = philosophySection.querySelectorAll('.philosophy-card');
            about.philosophy.items.forEach((item, index) => {
                if (philosophyCards[index]) {
                    const cardTitle = philosophyCards[index].querySelector('h3');
                    const cardDesc = philosophyCards[index].querySelector('p');
                    if (cardTitle) cardTitle.textContent = item.title;
                    if (cardDesc) cardDesc.textContent = item.description;
                    
                    // Feature list items
                    const listItems = philosophyCards[index].querySelectorAll('.philosophy-list li');
                    const feats = item.features || [];
                    listItems.forEach((li, i) => {
                        li.textContent = feats[i] != null ? feats[i] : '';
                    });
                }
            });
        }
    }
    
    // Values section
    const valuesTag = document.querySelector('.values-section .section-tag');
    const valuesTitle = document.querySelector('.values-section .section-title');
    if (valuesTag) valuesTag.textContent = about.values.tag;
    if (valuesTitle) valuesTitle.textContent = about.values.title;
    
    // Values cards (updated structure)
    if (about.values.items) {
        const valueItems = document.querySelectorAll('.value-item');
        about.values.items.forEach((item, index) => {
            if (valueItems[index]) {
                const h4 = valueItems[index].querySelector('h4');
                const p = valueItems[index].querySelector('p');
                if (h4) h4.textContent = item.title;
                if (p) p.textContent = item.description;
            }
        });
    }
}

// Update Services Page
function updateServicesPage(services) {
    // Modern Hero - new selectors
    const heroTitleLines = document.querySelectorAll('.hero-title-modern .title-line');
    if (services.heroModern) {
        if (heroTitleLines[0]) heroTitleLines[0].textContent = services.heroModern.titleLine1;
        if (heroTitleLines[1]) heroTitleLines[1].textContent = services.heroModern.titleLine2;
        
        const heroSubtitle = document.querySelector('.hero-subtitle-modern');
        if (heroSubtitle) heroSubtitle.textContent = services.heroModern.subtitle;
        
        const breadcrumbCurrent = document.querySelector('.breadcrumb-modern .current');
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = services.hero.breadcrumb;
        
        // Hero stats
        const statNumbers = document.querySelectorAll('.hero-stat-number');
        const statLabels = document.querySelectorAll('.hero-stat-label');
        if (services.heroModern.stats) {
            if (statNumbers[0] && services.heroModern.stats.stat1) statNumbers[0].textContent = services.heroModern.stats.stat1.number;
            if (statLabels[0] && services.heroModern.stats.stat1) statLabels[0].textContent = services.heroModern.stats.stat1.label;
            if (statNumbers[1] && services.heroModern.stats.stat2) statNumbers[1].textContent = services.heroModern.stats.stat2.number;
            if (statLabels[1] && services.heroModern.stats.stat2) statLabels[1].textContent = services.heroModern.stats.stat2.label;
            if (statNumbers[2] && services.heroModern.stats.stat3) statNumbers[2].textContent = services.heroModern.stats.stat3.number;
            if (statLabels[2] && services.heroModern.stats.stat3) statLabels[2].textContent = services.heroModern.stats.stat3.label;
        }
    }
    
    // Industry sector cards (after hero)
    if (services.sectorSolutions) {
        const sectorSec = document.querySelector('.sector-solutions-section');
        if (sectorSec) {
            const tag = sectorSec.querySelector('.section-tag');
            const title = sectorSec.querySelector('.section-title');
            const desc = sectorSec.querySelector('.section-description');
            if (tag) tag.textContent = services.sectorSolutions.tag;
            if (title) title.textContent = services.sectorSolutions.title;
            if (desc) desc.textContent = services.sectorSolutions.description;
            const cards = sectorSec.querySelectorAll('.solution-card');
            if (services.sectorSolutions.cards && Array.isArray(services.sectorSolutions.cards)) {
                services.sectorSolutions.cards.forEach((data, index) => {
                    if (!cards[index]) return;
                    const h3 = cards[index].querySelector('h3');
                    const p = cards[index].querySelector('p');
                    if (h3) h3.textContent = data.title;
                    if (p) {
                        const gradientSpan = p.querySelector('span[style*="gradient"]');
                        if (gradientSpan && index === 0) {
                            const lang = localStorage.getItem('language') || 'en';
                            const d = data.description;
                            if (lang === 'ar') {
                                p.innerHTML = d.replace('رؤية 2030', '<span style="background: linear-gradient(135deg, #562E91 0%, #A9218E 50%, #EC008C 100%) !important; -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important; background-clip: text !important;">رؤية 2030</span>');
                            } else {
                                p.innerHTML = d.replace('Vision 2030', '<span style="background: linear-gradient(135deg, #562E91 0%, #A9218E 50%, #EC008C 100%) !important; -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important; background-clip: text !important;">Vision 2030</span>');
                            }
                        } else {
                            p.textContent = data.description;
                        }
                    }
                    if (data.features && Array.isArray(data.features)) {
                        const lis = cards[index].querySelectorAll('.solution-features li');
                        lis.forEach((li, fi) => {
                            if (!data.features[fi]) return;
                            const icon = li.querySelector('i, svg');
                            if (icon) {
                                li.innerHTML = '';
                                li.appendChild(icon.cloneNode(true));
                                li.appendChild(document.createTextNode(' ' + data.features[fi]));
                            } else {
                                li.textContent = data.features[fi];
                            }
                        });
                    }
                });
            }
        }
    }
    
    // Fallback for old hero selectors
    const breadcrumb = document.querySelector('.breadcrumb span:last-child');
    if (breadcrumb) breadcrumb.textContent = services.hero.breadcrumb;
    
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    if (pageTitle) pageTitle.textContent = services.hero.title;
    if (pageSubtitle) pageSubtitle.textContent = services.hero.subtitle;
    
    // Helper function to update service section
    function updateServiceSection(sectionId, sectionData) {
        if (!sectionData) return;
        
        const section = document.getElementById(sectionId);
        if (!section) return;
        
        const tag = section.querySelector('.section-tag');
        const title = section.querySelector('.section-title');
        const desc = section.querySelector('.service-description');
        
        if (tag) tag.textContent = sectionData.tag;
        if (title) title.textContent = sectionData.tag;
        if (desc) desc.textContent = sectionData.description;
        
        // Update feature items
        if (sectionData.features && Array.isArray(sectionData.features)) {
            const features = section.querySelectorAll('.feature-item');
            features.forEach((feature, index) => {
                if (sectionData.features[index]) {
                    const h4 = feature.querySelector('h4');
                    const p = feature.querySelector('p');
                    if (h4) h4.textContent = sectionData.features[index].title;
                    if (p) p.textContent = sectionData.features[index].description;
                }
            });
        }
    }
    
    // Update all service sections
    updateServiceSection('infrastructure', services.infrastructure);
    updateServiceSection('datacenter', services.datacenter);
    updateServiceSection('physicalsecurity', services.physicalsecurity);
    updateServiceSection('communications', services.communications);
    updateServiceSection('licensing', services.licensing);
    updateServiceSection('enduser', services.enduser);
    updateServiceSection('cybersecurity', services.cybersecurity);
    updateServiceSection('managed', services.managed);
    updateServiceSection('isp', services.isp);
}

// Update Solutions Page
function updateSolutionsPage(solutions) {
    // Modern Hero - new selectors
    const heroTitleLines = document.querySelectorAll('.hero-title-modern .title-line');
    if (solutions.heroModern) {
        if (heroTitleLines[0]) heroTitleLines[0].textContent = solutions.heroModern.titleLine1;
        if (heroTitleLines[1]) heroTitleLines[1].textContent = solutions.heroModern.titleLine2;
        
        const heroSubtitle = document.querySelector('.hero-subtitle-modern');
        if (heroSubtitle) heroSubtitle.textContent = solutions.heroModern.subtitle;
        
        const breadcrumbCurrent = document.querySelector('.breadcrumb-modern .current');
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = solutions.hero.breadcrumb;
        
        // Hero stats (array of { number, label } or legacy stat1/stat2/stat3)
        const heroStatsRow = document.querySelector('.page-hero-modern .hero-stats-row');
        if (heroStatsRow && solutions.heroModern.stats) {
            const statItems = heroStatsRow.querySelectorAll('.hero-stat-item');
            const stats = solutions.heroModern.stats;
            if (Array.isArray(stats)) {
                stats.forEach((s, i) => {
                    if (!statItems[i]) return;
                    const num = statItems[i].querySelector('.hero-stat-number');
                    const lab = statItems[i].querySelector('.hero-stat-label');
                    if (num) num.textContent = s.number != null ? s.number : '';
                    if (lab) lab.textContent = s.label != null ? s.label : '';
                });
            } else {
                const statNumbers = heroStatsRow.querySelectorAll('.hero-stat-number');
                const statLabels = heroStatsRow.querySelectorAll('.hero-stat-label');
                if (statNumbers[0] && stats.stat1) statNumbers[0].textContent = stats.stat1.number;
                if (statLabels[0] && stats.stat1) statLabels[0].textContent = stats.stat1.label;
                if (statNumbers[1] && stats.stat2) statNumbers[1].textContent = stats.stat2.number;
                if (statLabels[1] && stats.stat2) statLabels[1].textContent = stats.stat2.label;
                if (statNumbers[2] && stats.stat3) statNumbers[2].textContent = stats.stat3.number;
                if (statLabels[2] && stats.stat3) statLabels[2].textContent = stats.stat3.label;
            }
        }
    }
    
    // Fallback for old hero selectors
    const breadcrumb = document.querySelector('.breadcrumb span:last-child');
    if (breadcrumb) breadcrumb.textContent = solutions.hero.breadcrumb;
    
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    if (pageTitle) pageTitle.textContent = solutions.hero.title;
    if (pageSubtitle) pageSubtitle.textContent = solutions.hero.subtitle;
    
    // Solutions overview section
    if (solutions.overview) {
        const overviewTag = document.querySelector('.solutions-section:not(.sector-solutions-section) .section-tag');
        const overviewTitle = document.querySelector('.solutions-section:not(.sector-solutions-section) .section-title');
        const overviewDesc = document.querySelector('.solutions-section:not(.sector-solutions-section) .section-description');
        if (overviewTag) overviewTag.textContent = solutions.overview.tag;
        if (overviewTitle) {
            if (solutions.overview.titleHtml) overviewTitle.innerHTML = solutions.overview.titleHtml;
            else overviewTitle.textContent = solutions.overview.title || '';
        }
        if (overviewDesc) overviewDesc.textContent = solutions.overview.description;
    }
    
    // Solution cards (main solutions page only — not industry section on services)
    const solutionCards = document.querySelectorAll('.solutions-section:not(.sector-solutions-section) .solution-card');
    const solutionKeys = ['softwareLicensing', 'integratedSecurityBc', 'endUserDevices'];
    
    solutionCards.forEach((card, index) => {
        const key = solutionKeys[index];
        if (key && solutions[key]) {
            const h3 = card.querySelector('h3');
            const pIntro = card.querySelector('p:not(.solution-goal)');
            const goalEl = card.querySelector('.solution-goal');
            if (h3) h3.textContent = solutions[key].title;
            if (pIntro) {
                if (solutions[key].description) {
                    pIntro.style.display = '';
                    pIntro.textContent = solutions[key].description;
                } else {
                    pIntro.textContent = '';
                    pIntro.style.display = 'none';
                }
            }
            if (goalEl) {
                const g = solutions[key].goal;
                const lang = localStorage.getItem('language') || 'en';
                const goalLabel = lang === 'ar' ? 'الهدف:' : 'Goal:';
                goalEl.innerHTML = g ? '<strong>' + goalLabel + '</strong> ' + g : '';
            }
            
            if (solutions[key].features && Array.isArray(solutions[key].features)) {
                const features = card.querySelectorAll('.solution-features li');
                features.forEach((feature, fIndex) => {
                    if (solutions[key].features[fIndex]) {
                        const icon = feature.querySelector('i, svg');
                        if (icon) {
                            feature.innerHTML = '';
                            feature.appendChild(icon.cloneNode(true));
                            feature.appendChild(document.createTextNode(' ' + solutions[key].features[fIndex]));
                        } else {
                            feature.textContent = solutions[key].features[fIndex];
                        }
                    }
                });
            }
        }
    });
    
    // Approach section
    if (solutions.approach) {
        const approachTag = document.querySelector('.approach-section .section-tag');
        const approachTitle = document.querySelector('.approach-section .section-title');
        if (approachTag) approachTag.textContent = solutions.approach.tag;
        if (approachTitle) approachTitle.textContent = solutions.approach.title;
        
        // Approach steps
        if (solutions.approach.steps && Array.isArray(solutions.approach.steps)) {
            const steps = document.querySelectorAll('.approach-step');
            steps.forEach((step, index) => {
                if (solutions.approach.steps[index]) {
                    const h3 = step.querySelector('h3');
                    const p = step.querySelector('p');
                    if (h3) h3.textContent = solutions.approach.steps[index].title;
                    if (p) p.textContent = solutions.approach.steps[index].description;
                }
            });
        }
    }
    
    // Differentiators section
    if (solutions.differentiators) {
        const diffSection = document.querySelector('.differentiators-section');
        if (diffSection) {
            const tag = diffSection.querySelector('.section-tag');
            const title = diffSection.querySelector('.section-title');
            if (tag) tag.textContent = solutions.differentiators.tag;
            if (title) title.textContent = solutions.differentiators.title;
            
            // Differentiator cards
            const diffCards = diffSection.querySelectorAll('.diff-card');
            if (solutions.differentiators.cards && Array.isArray(solutions.differentiators.cards)) {
                diffCards.forEach((card, index) => {
                    if (solutions.differentiators.cards[index]) {
                        const h3 = card.querySelector('h3');
                        const p = card.querySelector('p');
                        if (h3) h3.textContent = solutions.differentiators.cards[index].title;
                        if (p) p.textContent = solutions.differentiators.cards[index].description;
                    }
                });
            }
        }
    }
}

// Update Partners Page
function updatePartnersPage(partners) {
    // Modern Hero - new selectors
    const heroTitleLines = document.querySelectorAll('.hero-title-modern .title-line');
    if (partners.heroModern) {
        if (heroTitleLines[0]) heroTitleLines[0].textContent = partners.heroModern.titleLine1;
        if (heroTitleLines[1]) heroTitleLines[1].textContent = partners.heroModern.titleLine2;
        
        const heroSubtitle = document.querySelector('.hero-subtitle-modern');
        if (heroSubtitle) heroSubtitle.textContent = partners.heroModern.subtitle;
        
        const breadcrumbCurrent = document.querySelector('.breadcrumb-modern .current');
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = partners.hero.breadcrumb;
        
        // Hero stats
        const statNumbers = document.querySelectorAll('.hero-stat-number');
        const statLabels = document.querySelectorAll('.hero-stat-label');
        if (partners.heroModern.stats) {
            if (statNumbers[0] && partners.heroModern.stats.stat1) statNumbers[0].textContent = partners.heroModern.stats.stat1.number;
            if (statLabels[0] && partners.heroModern.stats.stat1) statLabels[0].textContent = partners.heroModern.stats.stat1.label;
            if (statNumbers[1] && partners.heroModern.stats.stat2) statNumbers[1].textContent = partners.heroModern.stats.stat2.number;
            if (statLabels[1] && partners.heroModern.stats.stat2) statLabels[1].textContent = partners.heroModern.stats.stat2.label;
            if (statNumbers[2] && partners.heroModern.stats.stat3) statNumbers[2].textContent = partners.heroModern.stats.stat3.number;
            if (statLabels[2] && partners.heroModern.stats.stat3) statLabels[2].textContent = partners.heroModern.stats.stat3.label;
        }
    }
    
    // Fallback for old hero selectors
    const breadcrumb = document.querySelector('.breadcrumb span:last-child');
    if (breadcrumb) breadcrumb.textContent = partners.hero.breadcrumb;
    
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    if (pageTitle) pageTitle.textContent = partners.hero.title;
    if (pageSubtitle) pageSubtitle.textContent = partners.hero.subtitle;
    
    if (partners.clients) {
        const clientsSection = document.querySelector('.partners-clients');
        if (clientsSection) {
            const clientsTag = clientsSection.querySelector('.section-tag');
            const clientsTitle = clientsSection.querySelector('#partners-clients-heading');
            if (clientsTag) clientsTag.textContent = partners.clients.tag;
            if (clientsTitle) clientsTitle.textContent = partners.clients.title;
        }
    }

    // Partner categories - update headers
    if (partners.categories) {
        const categoryHeaders = document.querySelectorAll('.partner-category .category-header');
        const categoryKeys = ['infrastructure', 'security', 'dataProtection', 'cctv', 'cabling', 'accessControl', 'network', 'softwarePlatforms', 'unifiedComms'];
        
        categoryHeaders.forEach((header, index) => {
            const key = categoryKeys[index];
            if (partners.categories[key]) {
                const tag = header.querySelector('.section-tag');
                const title = header.querySelector('.section-title');
                if (tag) tag.textContent = partners.categories[key].tag;
                if (title) title.textContent = partners.categories[key].title;
            }
        });
    }
    
    // Partner cards - update content
    if (partners.partnerCards) {
        const partnerCards = document.querySelectorAll('.partner-card');
        const partnerKeys = ['hpe', 'huawei', 'lenovo', 'fortinet', 'paloAlto', 'sophos', 'kaspersky', 'veeam', 'veritas', 'cctvHikvision', 'cctvDahua', 'cctvHanwha', 'cctvBosch', 'cctvHoneywell', 'cctvAxis', 'cctvMilestone', 'cablingCommScope', 'cablingPanduit', 'cablingNexans', 'cablingCorning', 'cablingBelden', 'accessZKTeco', 'accessSuprema', 'accessHikvision', 'accessDahua', 'networkCisco', 'networkAruba', 'networkNetgear', 'networkHuawei', 'softwareMicrosoft', 'softwareAdobe', 'softwareAutoCAD', 'softwareEsri', 'ucYealink', 'ucYeastar', 'ucGrandstream', 'ucAvaya', 'ucCisco'];
        
        partnerCards.forEach((card, index) => {
            const key = partnerKeys[index];
            if (partners.partnerCards[key]) {
                const name = card.querySelector('h3');
                const desc = card.querySelector('p');
                if (name) name.textContent = partners.partnerCards[key].name;
                if (desc) desc.textContent = partners.partnerCards[key].description;
            }
        });
    }
    
    // Benefits section
    if (partners.benefits) {
        const benefitsHeader = document.querySelector('.benefits-section .section-header');
        if (benefitsHeader) {
            const tag = benefitsHeader.querySelector('.section-tag');
            const title = benefitsHeader.querySelector('.section-title');
            if (tag) tag.textContent = partners.benefits.tag;
            if (title) title.textContent = partners.benefits.title;
        }
        
        // Benefit cards
        if (partners.benefits.items) {
            const benefitCards = document.querySelectorAll('.benefit-card');
            partners.benefits.items.forEach((item, index) => {
                if (benefitCards[index]) {
                    const title = benefitCards[index].querySelector('h3');
                    const desc = benefitCards[index].querySelector('p');
                    if (title) title.textContent = item.title;
                    if (desc) desc.textContent = item.description;
                }
            });
        }
    }
    
    // Fallback intro section (if using old layout)
    const introTag = document.querySelector('.partners-intro .section-tag');
    const introTitle = document.querySelector('.partners-intro .section-title');
    const introDesc = document.querySelector('.partners-intro .section-description');
    if (introTag && partners.intro) introTag.textContent = partners.intro.tag;
    if (introTitle && partners.intro) introTitle.textContent = partners.intro.title;
    if (introDesc && partners.intro) introDesc.textContent = partners.intro.description;
}

// Update Contact Page
function updateContactPage(contact) {
    // Modern Hero - new selectors
    const heroTitleLines = document.querySelectorAll('.hero-title-modern .title-line');
    if (contact.heroModern) {
        if (heroTitleLines[0]) heroTitleLines[0].textContent = contact.heroModern.titleLine1;
        if (heroTitleLines[1]) heroTitleLines[1].textContent = contact.heroModern.titleLine2;
        
        const heroSubtitle = document.querySelector('.hero-subtitle-modern');
        if (heroSubtitle) heroSubtitle.textContent = contact.heroModern.subtitle;
        
        const breadcrumbCurrent = document.querySelector('.breadcrumb-modern .current');
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = contact.hero.breadcrumb;
        
        // Hero stats
        const statNumbers = document.querySelectorAll('.hero-stat-number');
        const statLabels = document.querySelectorAll('.hero-stat-label');
        if (contact.heroModern.stats) {
            if (statNumbers[0] && contact.heroModern.stats.stat1) statNumbers[0].textContent = contact.heroModern.stats.stat1.number;
            if (statLabels[0] && contact.heroModern.stats.stat1) statLabels[0].textContent = contact.heroModern.stats.stat1.label;
            if (statNumbers[1] && contact.heroModern.stats.stat2) statNumbers[1].textContent = contact.heroModern.stats.stat2.number;
            if (statLabels[1] && contact.heroModern.stats.stat2) statLabels[1].textContent = contact.heroModern.stats.stat2.label;
            if (statNumbers[2] && contact.heroModern.stats.stat3) statNumbers[2].textContent = contact.heroModern.stats.stat3.number;
            if (statLabels[2] && contact.heroModern.stats.stat3) statLabels[2].textContent = contact.heroModern.stats.stat3.label;
        }
    }
    
    // Fallback for old hero selectors
    const breadcrumb = document.querySelector('.breadcrumb span:last-child');
    if (breadcrumb) breadcrumb.textContent = contact.hero.breadcrumb;
    
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    if (pageTitle) pageTitle.textContent = contact.hero.title;
    if (pageSubtitle) pageSubtitle.textContent = contact.hero.subtitle;
    
    // Form
    const formTitle = document.querySelector('.contact-form-wrapper .section-title');
    const formDesc = document.querySelector('.contact-form-wrapper .section-description');
    if (formTitle) formTitle.textContent = contact.form.title;
    if (formDesc) formDesc.textContent = contact.form.description;
    
    // Form fields - labels
    const labels = document.querySelectorAll('.contact-form label');
    if (labels[0]) labels[0].textContent = contact.form.fields.name;
    if (labels[1]) labels[1].textContent = contact.form.fields.email;
    if (labels[2]) labels[2].textContent = contact.form.fields.phone;
    if (labels[3]) labels[3].textContent = contact.form.fields.company;
    if (labels[4]) labels[4].textContent = contact.form.fields.service;
    if (labels[5]) labels[5].textContent = contact.form.fields.message;
    
    // Form fields - placeholders
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');
    const companyInput = document.querySelector('#company');
    const messageInput = document.querySelector('#message');
    const serviceSelect = document.querySelector('#service');
    
    if (nameInput) nameInput.placeholder = contact.form.fields.namePlaceholder;
    if (emailInput) emailInput.placeholder = contact.form.fields.emailPlaceholder;
    if (phoneInput) phoneInput.placeholder = contact.form.fields.phonePlaceholder;
    if (companyInput) companyInput.placeholder = contact.form.fields.companyPlaceholder;
    if (messageInput) messageInput.placeholder = contact.form.fields.messagePlaceholder;
    
    // Service dropdown options (order matches contact.html <option> values)
    if (serviceSelect && contact.form.serviceOptions) {
        const options = serviceSelect.querySelectorAll('option');
        const serviceOptionKeys = [
            'infrastructure',
            'datacenter',
            'physicalsecurity',
            'communications',
            'licensing',
            'enduser',
            'cybersecurity',
            'managed',
            'isp',
            'other'
        ];
        if (options[0]) options[0].textContent = contact.form.fields.servicePlaceholder;
        serviceOptionKeys.forEach((key, i) => {
            const opt = options[i + 1];
            if (opt && contact.form.serviceOptions[key]) {
                opt.textContent = contact.form.serviceOptions[key];
            }
        });
    }
    
    // Submit button
    const submitBtn = document.querySelector('.contact-form button[type="submit"] span');
    if (submitBtn) submitBtn.textContent = contact.form.fields.submit;
    // Fallback for button without span
    const submitBtnAlt = document.querySelector('.contact-form button[type="submit"]');
    if (submitBtnAlt && !submitBtn) submitBtnAlt.textContent = contact.form.fields.submit;
    
    // Contact Info Cards
    if (contact.infoCards) {
        const infoCards = document.querySelectorAll('.contact-info-card');
        
        // Office card (index 0)
        if (infoCards[0] && contact.infoCards.office) {
            const title = infoCards[0].querySelector('h3');
            const paras = infoCards[0].querySelectorAll('p');
            if (title) title.textContent = contact.infoCards.office.title;
            if (paras[0]) paras[0].textContent = contact.infoCards.office.line1;
            if (paras[1]) paras[1].textContent = contact.infoCards.office.line2;
            if (paras[2]) paras[2].textContent = contact.infoCards.office.line3;
        }
        
        // Phone card (index 1)
        if (infoCards[1] && contact.infoCards.phone) {
            const title = infoCards[1].querySelector('h3');
            const paras = infoCards[1].querySelectorAll('p');
            if (title) title.textContent = contact.infoCards.phone.title;
            // Keep phone number as-is (link), just update the note
            if (paras[1]) paras[1].textContent = contact.infoCards.phone.note;
        }
        
        // Email card (index 2)
        if (infoCards[2] && contact.infoCards.email) {
            const title = infoCards[2].querySelector('h3');
            const paras = infoCards[2].querySelectorAll('p');
            if (title) title.textContent = contact.infoCards.email.title;
            // Keep email address as-is (link), just update the note
            if (paras[1]) paras[1].textContent = contact.infoCards.email.note;
        }
        
        // Hours card (index 3)
        if (infoCards[3] && contact.infoCards.hours) {
            const title = infoCards[3].querySelector('h3');
            const paras = infoCards[3].querySelectorAll('p');
            if (title) title.textContent = contact.infoCards.hours.title;
            if (paras[0]) paras[0].textContent = contact.infoCards.hours.days;
            if (paras[1]) paras[1].textContent = contact.infoCards.hours.time;
        }
        
        // Social card
        if (contact.infoCards.social) {
            const socialCard = document.querySelector('.contact-social h3');
            if (socialCard) socialCard.textContent = contact.infoCards.social.title;
        }
    }
}

// Update IoT Tracking Page
function updateIoTPage(iot) {
    if (!iot) return;

    // Document-level SEO (title + meta description swap per language)
    if (iot.meta) {
        if (iot.meta.title) document.title = iot.meta.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && iot.meta.description) metaDesc.setAttribute('content', iot.meta.description);
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && iot.meta.title) ogTitle.setAttribute('content', iot.meta.title);
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc && iot.meta.description) ogDesc.setAttribute('content', iot.meta.description);
        const twTitle = document.querySelector('meta[name="twitter:title"]');
        if (twTitle && iot.meta.title) twTitle.setAttribute('content', iot.meta.title);
        const twDesc = document.querySelector('meta[name="twitter:description"]');
        if (twDesc && iot.meta.description) twDesc.setAttribute('content', iot.meta.description);
    }

    // Hero Section
    if (iot.hero) {
        const heroBadge = document.querySelector('.iot-floating-badge');
        const heroTitle = document.querySelector('.iot-hero-title span');
        const heroSubtitle = document.querySelector('.iot-hero-subtitle');
        
        if (heroBadge) heroBadge.textContent = iot.hero.badge;
        if (heroTitle) heroTitle.textContent = iot.hero.title;
        if (heroSubtitle) heroSubtitle.textContent = iot.hero.subtitle;

        // Hero pillars (3 stacked service cards)
        if (Array.isArray(iot.hero.pillars)) {
            const pillarCards = document.querySelectorAll('.service-pillar-card');
            iot.hero.pillars.forEach((p, i) => {
                const card = pillarCards[i];
                if (!card) return;
                const t = card.querySelector('.service-pillar-title');
                const d = card.querySelector('.service-pillar-desc');
                if (t) t.textContent = p.title;
                if (d) d.textContent = p.description;
            });
        }

        // Hero stats (kept on Rased section, mirrored here)
        const statCards = document.querySelectorAll('.iot-stat-card');
        const statKeys = ['vehicles', 'realtime', 'uptime', 'platforms'];
        statCards.forEach((card, index) => {
            const key = statKeys[index];
            if (iot.hero.stats && iot.hero.stats[key]) {
                const label = card.querySelector('.iot-stat-label');
                if (label) label.textContent = iot.hero.stats[key].label;
            }
        });

        // Hero buttons
        if (iot.hero.buttons) {
            const demoBtn = document.querySelector('.hero-cta-primary');
            const waBtn = document.querySelector('.btn-whatsapp');
            const featuresBtn = document.querySelector('.btn-iot-secondary');
            if (demoBtn) demoBtn.textContent = iot.hero.buttons.demo;
            if (waBtn && iot.hero.buttons.whatsapp) waBtn.textContent = iot.hero.buttons.whatsapp;
            if (featuresBtn) featuresBtn.textContent = iot.hero.buttons.features;
        }
    }

    // Trust strip (Elm partnership)
    if (iot.trustStrip) {
        const t1 = document.querySelector('.elm-trust-strip .elm-trust-line-1');
        const tl = document.querySelector('.elm-trust-strip .elm-trust-label');
        const t2 = document.querySelector('.elm-trust-strip .elm-trust-line-2');
        if (t1) t1.textContent = iot.trustStrip.line1;
        if (tl) tl.textContent = iot.trustStrip.elmLabel;
        if (t2) t2.textContent = iot.trustStrip.line2;
    }

    // Activation journey
    if (iot.activationJourney) {
        const sec = document.querySelector('.activation-journey');
        if (sec) {
            const tag = sec.querySelector('.activation-journey-tag');
            const title = sec.querySelector('.activation-journey-title');
            if (tag) tag.textContent = iot.activationJourney.tag;
            if (title) title.textContent = iot.activationJourney.title;
            const steps = sec.querySelectorAll('.activation-step');
            (iot.activationJourney.steps || []).forEach((s, i) => {
                const el = steps[i];
                if (!el) return;
                const st = el.querySelector('.activation-step-title');
                const sd = el.querySelector('.activation-step-desc');
                if (st) st.textContent = s.title;
                if (sd) sd.textContent = s.description;
            });
        }
    }

    // Client proof strip
    if (iot.clients) {
        const sec = document.querySelector('.iot-clients');
        if (sec) {
            const tag = sec.querySelector('.iot-clients-tag');
            const title = sec.querySelector('#iot-clients-heading');
            const desc = sec.querySelector('.iot-clients-desc');
            if (tag) tag.textContent = iot.clients.tag;
            if (title) title.textContent = iot.clients.title;
            if (desc) desc.textContent = iot.clients.description;
        }
    }

    // Why SHABAKAH block (inside elm hub)
    if (iot.whyShabakah) {
        const block = document.querySelector('.why-shabakah');
        if (block) {
            const tag = block.querySelector('.why-shabakah-tag');
            const title = block.querySelector('.why-shabakah-title');
            if (tag) tag.textContent = iot.whyShabakah.tag;
            if (title) title.textContent = iot.whyShabakah.title;
            const items = block.querySelectorAll('.why-shabakah-item');
            (iot.whyShabakah.items || []).forEach((item, i) => {
                const el = items[i];
                if (!el) return;
                const t = el.querySelector('.why-shabakah-item-title');
                const d = el.querySelector('.why-shabakah-item-desc');
                if (t) t.textContent = item.title;
                if (d) d.textContent = item.description;
            });
        }
    }

    // Elm Services Hub
    if (iot.elmHub) {
        const sec = document.querySelector('.elm-hub');
        if (sec) {
            const tag = sec.querySelector('.section-tag');
            const title = sec.querySelector('.section-title');
            const desc = sec.querySelector('.section-description');
            if (tag) tag.textContent = iot.elmHub.tag;
            if (title) title.textContent = iot.elmHub.title;
            if (desc) desc.textContent = iot.elmHub.description;

            const cards = sec.querySelectorAll('.elm-product-card');
            (iot.elmHub.cards || []).forEach((c, i) => {
                const card = cards[i];
                if (!card) return;
                const name = card.querySelector('.elm-product-name');
                const arabic = card.querySelector('.elm-product-arabic');
                const tagline = card.querySelector('.elm-product-tagline');
                const d = card.querySelector('.elm-product-desc');
                const cta = card.querySelector('.elm-product-cta');
                if (name) name.textContent = c.name;
                if (arabic) arabic.textContent = c.arabic;
                if (tagline) tagline.textContent = c.tagline;
                if (d) d.textContent = c.description;
                if (cta) cta.textContent = iot.elmHub.cardCta;
            });
        }
    }

    // Muqeem
    if (iot.muqeem) updateServiceSection('.muqeem-section', iot.muqeem);

    // Tamm + pricing
    if (iot.tamm) {
        updateServiceSection('.tamm-section', iot.tamm);
        // Pricing table
        const pricing = document.querySelector('.tamm-pricing');
        if (pricing) {
            const pTag = pricing.querySelector('.section-tag');
            const pTitle = pricing.querySelector('.section-title');
            const pNote = pricing.querySelector('.tamm-pricing-note');
            if (pTag) pTag.textContent = iot.tamm.pricingTag;
            if (pTitle) pTitle.textContent = iot.tamm.pricingTitle;
            if (pNote) pNote.textContent = iot.tamm.pricingNote;
            // Table headers
            const colTier = pricing.querySelector('[data-col="tier"]');
            const colRange = pricing.querySelector('[data-col="range"]');
            const colPrice = pricing.querySelector('[data-col="price"]');
            if (colTier) colTier.textContent = iot.tamm.pricingTierLabel;
            if (colRange) colRange.textContent = iot.tamm.pricingRangeLabel;
            if (colPrice) colPrice.textContent = iot.tamm.pricingPriceLabel;
            // Notify the pricing slider JS to re-render rows in the current language
            window.__tammPricingData = iot.tamm;
            if (typeof window.renderTammPricing === 'function') {
                window.renderTammPricing();
            }
        }
    }
    
    // Rased Sub-Nav labels
    if (iot.rasedSubnav) {
        const subnavMap = [
            ['rased-platforms', iot.rasedSubnav.platforms],
            ['rased-capabilities', iot.rasedSubnav.capabilities],
            ['rased-outcomes', iot.rasedSubnav.outcomes],
            ['rased-preview', iot.rasedSubnav.preview]
        ];
        subnavMap.forEach(([target, label]) => {
            if (!label) return;
            const tab = document.querySelector('.rased-subnav-tab[data-target="' + target + '"]');
            if (!tab) return;
            const span = tab.querySelector('.rased-subnav-label');
            if (span) span.textContent = label;
        });
    }

    // Rased four-module row
    if (iot.rasedModules) {
        const block = document.getElementById('rased-modules');
        if (block) {
            const tag = block.querySelector('.rased-modules-tag');
            const title = block.querySelector('.rased-modules-title');
            const desc = block.querySelector('.rased-modules-desc');
            if (tag) tag.textContent = iot.rasedModules.tag;
            if (title) title.textContent = iot.rasedModules.title;
            if (desc) desc.textContent = iot.rasedModules.description;
            const cards = block.querySelectorAll('.rased-module-card');
            (iot.rasedModules.items || []).forEach((m, i) => {
                const card = cards[i];
                if (!card) return;
                const t = card.querySelector('.rased-module-title');
                const d = card.querySelector('.rased-module-desc');
                const l = card.querySelector('.rased-module-link');
                if (t) t.textContent = m.title;
                if (d) d.textContent = m.description;
                if (l) {
                    const icon = l.querySelector('i');
                    l.textContent = '';
                    l.appendChild(document.createTextNode(m.link + ' '));
                    if (icon) l.appendChild(icon);
                }
            });
        }
    }

    // Platform Showcase Section
    if (iot.platformShowcase) {
        const showcaseSection = document.querySelector('.iot-platform-showcase');
        if (showcaseSection) {
            const tag = showcaseSection.querySelector('.section-tag');
            const title = showcaseSection.querySelector('.section-title');
            const desc = showcaseSection.querySelector('.section-description');
            
            if (tag) tag.textContent = iot.platformShowcase.tag;
            if (title) title.textContent = iot.platformShowcase.title;
            if (desc) desc.textContent = iot.platformShowcase.description;
            
            // Platform cards
            const platformCards = showcaseSection.querySelectorAll('.platform-card');
            
            // Web Dashboard (first card)
            if (platformCards[0] && iot.platformShowcase.webDashboard) {
                const cardTitle = platformCards[0].querySelector('h3');
                const cardSubtitle = platformCards[0].querySelector('.platform-subtitle');
                const webImg = platformCards[0].querySelector('.elm-product-img');
                
                if (cardTitle) cardTitle.textContent = iot.platformShowcase.webDashboard.title;
                if (cardSubtitle) cardSubtitle.textContent = iot.platformShowcase.webDashboard.subtitle;
                if (webImg) webImg.setAttribute('alt', iot.platformShowcase.webDashboard.title);
                
                // Features list
                const featureItems = platformCards[0].querySelectorAll('.platform-features li');
                iot.platformShowcase.webDashboard.features.forEach((feature, i) => {
                    if (featureItems[i]) {
                        const icon = featureItems[i].querySelector('i');
                        featureItems[i].textContent = '';
                        if (icon) featureItems[i].appendChild(icon);
                        featureItems[i].appendChild(document.createTextNode(' ' + feature));
                    }
                });

                const webCta = platformCards[0].querySelector('.platform-card-cta--web');
                if (webCta && iot.platformShowcase.webDashboard.url) {
                    webCta.href = iot.platformShowcase.webDashboard.url;
                    if (iot.platformShowcase.webDashboard.ctaLabel) {
                        webCta.textContent = iot.platformShowcase.webDashboard.ctaLabel;
                    }
                }
            }
            
            // Mobile App (second card)
            if (platformCards[1] && iot.platformShowcase.mobileApp) {
                const cardTitle = platformCards[1].querySelector('h3');
                const cardSubtitle = platformCards[1].querySelector('.platform-subtitle');
                const mobImg = platformCards[1].querySelector('.elm-product-img');
                
                if (cardTitle) cardTitle.textContent = iot.platformShowcase.mobileApp.title;
                if (cardSubtitle) cardSubtitle.textContent = iot.platformShowcase.mobileApp.subtitle;
                if (mobImg) mobImg.setAttribute('alt', iot.platformShowcase.mobileApp.title);
                
                // Features list
                const featureItems = platformCards[1].querySelectorAll('.platform-features li');
                iot.platformShowcase.mobileApp.features.forEach((feature, i) => {
                    if (featureItems[i]) {
                        const icon = featureItems[i].querySelector('i');
                        featureItems[i].textContent = '';
                        if (icon) featureItems[i].appendChild(icon);
                        featureItems[i].appendChild(document.createTextNode(' ' + feature));
                    }
                });

                const iosCta = platformCards[1].querySelector('.platform-card-cta--ios');
                const androidCta = platformCards[1].querySelector('.platform-card-cta--android');
                if (iosCta && iot.platformShowcase.mobileApp.iosUrl) {
                    iosCta.href = iot.platformShowcase.mobileApp.iosUrl;
                    if (iot.platformShowcase.mobileApp.iosLabel) iosCta.textContent = iot.platformShowcase.mobileApp.iosLabel;
                }
                if (androidCta && iot.platformShowcase.mobileApp.androidUrl) {
                    androidCta.href = iot.platformShowcase.mobileApp.androidUrl;
                    if (iot.platformShowcase.mobileApp.androidLabel) androidCta.textContent = iot.platformShowcase.mobileApp.androidLabel;
                }
            }

            // Platform access strip (Computer / iOS / Android)
            const access = iot.platformShowcase.platformAccess;
            if (access) {
                const accessBlock = showcaseSection.querySelector('.platform-access');
                if (accessBlock) {
                    const accessTag = accessBlock.querySelector('.platform-access-tag');
                    const accessTitle = accessBlock.querySelector('.platform-access-title');
                    const accessDesc = accessBlock.querySelector('.platform-access-desc');
                    if (accessTag) accessTag.textContent = access.tag;
                    if (accessTitle) accessTitle.textContent = access.title;
                    if (accessDesc) accessDesc.textContent = access.description;

                    const accessCards = accessBlock.querySelectorAll('.platform-access-card');
                    (access.items || []).forEach((item, i) => {
                        const card = accessCards[i];
                        if (!card) return;
                        card.href = item.url;
                        const label = card.querySelector('.platform-access-label');
                        const hint = card.querySelector('.platform-access-hint');
                        if (label) label.textContent = item.label;
                        if (hint) hint.textContent = item.hint;
                    });
                }
            }
        }
    }
    
    // Features Section
    if (iot.features) {
        const featuresSection = document.querySelector('.iot-features');
        if (featuresSection) {
            const tag = featuresSection.querySelector('.section-tag');
            const title = featuresSection.querySelector('.section-title');
            
            if (tag) tag.textContent = iot.features.tag;
            if (title) title.textContent = iot.features.title;
            
            // Feature cards
            const featureCards = featuresSection.querySelectorAll('.feature-card-iot');
            iot.features.items.forEach((item, index) => {
                if (featureCards[index]) {
                    const cardTitle = featureCards[index].querySelector('h3');
                    if (cardTitle) cardTitle.textContent = item.title;
                    
                    // Feature list items
                    const listItems = featureCards[index].querySelectorAll('.feature-list-iot li');
                    item.features.forEach((feature, i) => {
                        if (listItems[i]) {
                            const icon = listItems[i].querySelector('i');
                            listItems[i].textContent = '';
                            if (icon) listItems[i].appendChild(icon);
                            listItems[i].appendChild(document.createTextNode(' ' + feature));
                        }
                    });
                }
            });
        }
    }
    
    // Value Section
    if (iot.value) {
        const valueSection = document.querySelector('.iot-value');
        if (valueSection) {
            const tag = valueSection.querySelector('.section-tag');
            const title = valueSection.querySelector('.section-title');
            const desc = valueSection.querySelector('.section-description');
            
            if (tag) tag.textContent = iot.value.tag;
            if (title) title.textContent = iot.value.title;
            if (desc) desc.textContent = iot.value.description;
            
            // Value cards
            const valueCards = valueSection.querySelectorAll('.value-card-iot');
            iot.value.items.forEach((item, index) => {
                if (valueCards[index]) {
                    const cardTitle = valueCards[index].querySelector('h3');
                    const cardDesc = valueCards[index].querySelector('p');
                    if (cardTitle) cardTitle.textContent = item.title;
                    if (cardDesc) cardDesc.textContent = item.description;
                }
            });
        }
    }
    
    // Gallery Section
    if (iot.gallery) {
        const gallerySection = document.querySelector('.iot-gallery');
        if (gallerySection) {
            const tag = gallerySection.querySelector('.section-tag');
            const title = gallerySection.querySelector('.section-title');
            
            if (tag) tag.textContent = iot.gallery.tag;
            if (title) title.textContent = iot.gallery.title;
            
            // Gallery image alt text
            const galleryImgs = gallerySection.querySelectorAll('.gallery-img');
            iot.gallery.items.forEach((item, index) => {
                if (galleryImgs[index]) galleryImgs[index].setAttribute('alt', item);
            });
        }
    }

    // Smart Gate
    if (iot.smartGate) {
        const sec = document.querySelector('.smart-gate-section');
        if (sec) {
            const tag = sec.querySelector('.section-tag');
            const title = sec.querySelector('.section-title');
            const desc = sec.querySelector('.smart-gate-desc');
            const para = sec.querySelector('.smart-gate-paragraph');
            const benefitsLabel = sec.querySelector('.smart-gate-benefits-label');
            if (tag) tag.textContent = iot.smartGate.tag;
            if (title) title.textContent = iot.smartGate.title;
            if (desc) desc.textContent = iot.smartGate.description;
            if (para) para.textContent = iot.smartGate.paragraph;
            if (benefitsLabel) benefitsLabel.textContent = iot.smartGate.benefitsLabel;

            const benefitCards = sec.querySelectorAll('.smart-gate-benefit');
            (iot.smartGate.benefits || []).forEach((b, i) => {
                const card = benefitCards[i];
                if (!card) return;
                const ct = card.querySelector('h3');
                const cd = card.querySelector('p');
                if (ct) ct.textContent = b.title;
                if (cd) cd.textContent = b.description;
            });

            const actionsLabel = sec.querySelector('.smart-gate-actions-label');
            if (actionsLabel && iot.smartGate.actionsLabel) actionsLabel.textContent = iot.smartGate.actionsLabel;
            const actionTexts = sec.querySelectorAll('.smart-gate-action-text');
            (iot.smartGate.actions || []).forEach((a, i) => {
                if (actionTexts[i]) actionTexts[i].textContent = a;
            });

            const cta = sec.querySelector('.smart-gate-cta');
            if (cta) cta.textContent = iot.smartGate.ctaLabel;
        }
    }

    // Guides hub
    if (iot.guides) {
        const sec = document.querySelector('.guides-section');
        if (sec) {
            const tag = sec.querySelector('.guides-tag');
            const title = sec.querySelector('#guides-heading');
            const desc = sec.querySelector('.guides-desc');
            if (tag) tag.textContent = iot.guides.tag;
            if (title) title.textContent = iot.guides.title;
            if (desc) desc.textContent = iot.guides.description;
            const cards = sec.querySelectorAll('.guide-card');
            (iot.guides.items || []).forEach((g, i) => {
                const card = cards[i];
                if (!card) return;
                const gt = card.querySelector('.guide-card-title');
                const ge = card.querySelector('.guide-card-excerpt');
                const gl = card.querySelector('.guide-card-link');
                if (gt) gt.textContent = g.title;
                if (ge) ge.textContent = g.excerpt;
                if (gl) {
                    gl.href = g.url || '#support';
                    const icon = gl.querySelector('i');
                    const label = iot.guides.readLink || 'Read guide';
                    gl.textContent = '';
                    gl.appendChild(document.createTextNode(label + ' '));
                    if (icon) gl.appendChild(icon);
                }
            });
        }
    }

    // Official portal links
    if (iot.officialLinks) {
        const sec = document.querySelector('.official-links-section');
        if (sec) {
            const tag = sec.querySelector('.official-links-tag');
            const title = sec.querySelector('#official-links-heading');
            const desc = sec.querySelector('.official-links-desc');
            if (tag) tag.textContent = iot.officialLinks.tag;
            if (title) title.textContent = iot.officialLinks.title;
            if (desc) desc.textContent = iot.officialLinks.description;
            const links = sec.querySelectorAll('.official-link-card');
            (iot.officialLinks.portals || []).forEach((p, i) => {
                const link = links[i];
                if (!link) return;
                link.href = p.url;
                const name = link.querySelector('.official-link-name');
                if (name) name.textContent = p.name;
            });
        }
    }

    // ISO
    if (iot.iso) {
        const sec = document.querySelector('.iso-section');
        if (sec) {
            const tag = sec.querySelector('.iso-intro .section-tag');
            const title = sec.querySelector('.iso-intro .section-title');
            const desc = sec.querySelector('.iso-intro .section-description');
            if (tag) tag.textContent = iot.iso.tag;
            if (title) title.textContent = iot.iso.title;
            if (desc) desc.textContent = iot.iso.description;

            // Paragraphs (3)
            const paragraphs = sec.querySelectorAll('.iso-paragraph');
            (iot.iso.paragraphs || []).forEach((p, i) => {
                if (paragraphs[i]) paragraphs[i].textContent = p;
            });

            // Methodology header + steps
            const methTag = sec.querySelector('.iso-methodology .section-tag');
            const methTitle = sec.querySelector('.iso-methodology .section-title');
            if (methTag) methTag.textContent = iot.iso.methodologyTag;
            if (methTitle) methTitle.textContent = iot.iso.methodologyTitle;

            const steps = sec.querySelectorAll('.iso-step');
            (iot.iso.methodology || []).forEach((m, i) => {
                const step = steps[i];
                if (!step) return;
                const t = step.querySelector('.iso-step-title');
                const d = step.querySelector('.iso-step-desc');
                if (t) t.textContent = m.title;
                if (d) d.textContent = m.description;
            });

            // Standards header
            const stdTag = sec.querySelector('.iso-standards .section-tag');
            const stdTitle = sec.querySelector('.iso-standards .section-title');
            const stdDesc = sec.querySelector('.iso-standards .section-description');
            if (stdTag) stdTag.textContent = iot.iso.standardsTag;
            if (stdTitle) stdTitle.textContent = iot.iso.standardsTitle;
            if (stdDesc) stdDesc.textContent = iot.iso.standardsDescription;

            // Standards cards (label + description only — keep codes language-neutral)
            const cards = sec.querySelectorAll('.iso-standard-card');
            (iot.iso.standards || []).forEach((s, i) => {
                const card = cards[i];
                if (!card) return;
                const code = card.querySelector('.iso-standard-code');
                const name = card.querySelector('.iso-standard-name');
                const desc = card.querySelector('.iso-standard-desc');
                if (code) code.textContent = s.code;
                if (name) name.textContent = s.name;
                if (desc) desc.textContent = s.description;
            });

            // Category filter chips
            if (iot.isoCategories) {
                const chips = sec.querySelectorAll('.iso-filter-chip');
                chips.forEach(chip => {
                    const key = chip.getAttribute('data-category');
                    if (key && iot.isoCategories[key]) {
                        chip.textContent = iot.isoCategories[key];
                    }
                });
            }

            const isoCta = sec.querySelector('.iso-cta');
            if (isoCta) isoCta.textContent = iot.iso.ctaLabel;
        }
    }

    // Support CTA
    if (iot.support) {
        const sec = document.querySelector('.support-cta');
        if (sec) {
            const tag = sec.querySelector('.section-tag');
            const title = sec.querySelector('.section-title');
            const desc = sec.querySelector('.section-description');
            if (tag) tag.textContent = iot.support.tag;
            if (title) title.textContent = iot.support.title;
            if (desc) desc.textContent = iot.support.description;

            // Channels
            const chanKeys = ['phone', 'whatsapp', 'email', 'location'];
            chanKeys.forEach(key => {
                const ch = iot.support.channels && iot.support.channels[key];
                if (!ch) return;
                const channel = sec.querySelector(`.support-channel[data-channel="${key}"]`);
                if (!channel) return;
                const label = channel.querySelector('.support-channel-label');
                const value = channel.querySelector('.support-channel-value');
                if (label) label.textContent = ch.label;
                if (value) value.textContent = ch.value;
            });

            // Form labels + options + submit + note
            if (iot.support.form) {
                const f = iot.support.form;
                const formTitle = sec.querySelector('.support-form-title');
                if (formTitle) formTitle.textContent = f.title;
                const setLabel = (sel, txt) => { const el = sec.querySelector(sel); if (el) el.textContent = txt; };
                setLabel('label[for="support-name"]', f.name);
                setLabel('label[for="support-company"]', f.company);
                setLabel('label[for="support-phone"]', f.phone);
                setLabel('label[for="support-service"]', f.service);
                setLabel('label[for="support-message"]', f.message);
                const submit = sec.querySelector('.support-form-submit');
                if (submit) submit.textContent = f.submit;
                const note = sec.querySelector('.support-form-note');
                if (note) note.textContent = f.note;
                // Service options
                const select = sec.querySelector('#support-service');
                if (select && Array.isArray(f.serviceOptions)) {
                    const placeholder = select.querySelector('option[value=""]');
                    select.innerHTML = '';
                    if (placeholder) select.appendChild(placeholder);
                    f.serviceOptions.forEach(opt => {
                        const o = document.createElement('option');
                        o.value = opt;
                        o.textContent = opt;
                        select.appendChild(o);
                    });
                }
            }
        }
    }

    // FAQ
    if (iot.faq) {
        const sec = document.querySelector('.faq-section');
        if (sec) {
            const tag = sec.querySelector('.section-tag');
            const title = sec.querySelector('.section-title');
            if (tag) tag.textContent = iot.faq.tag;
            if (title) title.textContent = iot.faq.title;

            if (iot.faq.categories) {
                sec.querySelectorAll('.faq-filter-chip').forEach(chip => {
                    const key = chip.getAttribute('data-category');
                    if (key && iot.faq.categories[key]) chip.textContent = iot.faq.categories[key];
                });
            }

            const items = sec.querySelectorAll('.faq-item');
            (iot.faq.items || []).forEach((qa, i) => {
                const item = items[i];
                if (!item) return;
                if (qa.category) item.setAttribute('data-faq-category', qa.category);
                const q = item.querySelector('.faq-question-text');
                const a = item.querySelector('.faq-answer');
                if (q) q.textContent = qa.q;
                if (a) a.textContent = qa.a;
            });
        }
    }

    // Mobile sticky contact bar
    if (iot.mobileContact) {
        const callLabel = document.querySelector('.mobile-contact-call-label');
        const waLabel = document.querySelector('.mobile-contact-whatsapp-label');
        if (callLabel) callLabel.textContent = iot.mobileContact.call;
        if (waLabel) waLabel.textContent = iot.mobileContact.whatsapp;
    }

    // Refresh WhatsApp deep links for current language
    if (typeof window.getShabakahWhatsAppUrl === 'function') {
        const waUrl = window.getShabakahWhatsAppUrl();
        document.querySelectorAll('[data-whatsapp], .js-whatsapp-link').forEach(el => {
            el.setAttribute('href', waUrl);
            el.setAttribute('target', '_blank');
            el.setAttribute('rel', 'noopener noreferrer');
        });
    }

    // Update IOT Page Footer (different structure than modern footer)
    updateIoTFooter();
}

// Small helper for service sections that share the same shape: tag, title, description, features list with featuresLabel, callout, ctaLabel
function updateServiceSection(rootSelector, data) {
    const sec = document.querySelector(rootSelector);
    if (!sec) return;
    const tag = sec.querySelector('.section-tag');
    const title = sec.querySelector('.section-title');
    const desc = sec.querySelector('.service-desc');
    if (tag) tag.textContent = data.tag;
    if (title) title.textContent = data.title;
    if (desc) desc.textContent = data.description;

    const featLabel = sec.querySelector('.service-features-label');
    if (featLabel && data.featuresLabel) featLabel.textContent = data.featuresLabel;

    const items = sec.querySelectorAll('.service-feature-item .service-feature-text');
    (data.features || []).forEach((f, i) => {
        if (items[i]) items[i].textContent = f;
    });

    const callout = sec.querySelector('.service-callout');
    if (callout && data.callout) callout.textContent = data.callout;

    const cta = sec.querySelector('.service-cta');
    if (cta && data.ctaLabel) cta.textContent = data.ctaLabel;
}

// Update IOT Page Footer
function updateIoTFooter() {
    const lang = localStorage.getItem('language') || 'en';
    const t = translations[lang];
    
    // Footer tagline
    const footerTagline = document.querySelector('.footer-tagline');
    if (footerTagline) footerTagline.textContent = t.footer.tagline;
    
    // Footer section titles
    const footerTitles = document.querySelectorAll('.footer-col .footer-title');
    if (footerTitles.length > 0) {
        if (footerTitles[0]) footerTitles[0].textContent = t.footer.sections.services;
        if (footerTitles[1]) footerTitles[1].textContent = t.footer.sections.company;
        if (footerTitles[2]) footerTitles[2].textContent = t.footer.sections.connect || 'Connect';
    }
    
    // Services links (order matches home services + footer HTML)
    const servicesLinks = document.querySelectorAll('.footer-col:nth-child(2) .footer-links a');
    if (servicesLinks.length > 0 && t.footer.links) {
        const serviceKeys = [
            'infrastructure',
            'datacenter',
            'physicalSecurity',
            'communications',
            'licensing',
            'enduser',
            'cybersecurity',
            'managed',
            'isp'
        ];
        servicesLinks.forEach((link, index) => {
            const key = serviceKeys[index];
            if (key && t.footer.links[key]) {
                link.textContent = t.footer.links[key];
            }
        });
    }
    
    // Company links
    const companyLinks = document.querySelectorAll('.footer-col:nth-child(3) .footer-links a');
    if (companyLinks.length > 0 && t.footer.links) {
        const companyKeys = ['about', 'solutions', 'partners', 'iotTracking', 'contact'];
        const companyTexts = [t.footer.links.about, 'Solutions', t.footer.links.partners, 'IOT Tracking', t.footer.links.contact];
        
        // Get the proper texts for Arabic
        if (lang === 'ar') {
            companyTexts[0] = 'من نحن';
            companyTexts[1] = 'الحلول';
            companyTexts[2] = 'الشركاء';
            companyTexts[3] = 'تتبع إنترنت الأشياء';
            companyTexts[4] = 'تواصل معنا';
        }
        
        companyLinks.forEach((link, index) => {
            if (companyTexts[index]) link.textContent = companyTexts[index];
        });
    }
    
    // Connect section - location text
    const connectSection = document.querySelector('.footer-col:nth-child(4)');
    if (connectSection) {
        const locationSpan = connectSection.querySelector('.footer-contact li:first-child span');
        if (locationSpan) {
            locationSpan.textContent = lang === 'ar' ? 'الأندلس مول، الرياض' : 'Andalus Mall, Riyadh';
        }
    }
    
    // Copyright
    const copyright = document.querySelector('.copyright');
    if (copyright) copyright.textContent = t.footer.copyright;
    
    // Certifications
    const certifications = document.querySelector('.certifications');
    if (certifications) certifications.textContent = t.footer.certified;
}

// Update Footer
function updateFooter(footer) {
    const footerTagline = document.querySelector('.footer-tagline');
    if (footerTagline) footerTagline.textContent = footer.tagline;
    
    const newsletterTitle = document.querySelector('.footer-newsletter h4');
    const newsletterDesc = document.querySelector('.footer-newsletter p');
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterBtn = document.querySelector('.newsletter-form .btn');
    
    if (newsletterTitle) newsletterTitle.textContent = footer.newsletter.title;
    if (newsletterDesc) newsletterDesc.textContent = footer.newsletter.description;
    if (newsletterInput) newsletterInput.placeholder = footer.newsletter.placeholder;
    if (newsletterBtn) newsletterBtn.textContent = footer.newsletter.button;
    
    const copyright = document.querySelector('.copyright');
    if (copyright) copyright.textContent = footer.copyright;
    
    const certifications = document.querySelector('.certifications');
    if (certifications) certifications.textContent = footer.certified;
    
    // Footer section headings
    const footerHeadings = document.querySelectorAll('.footer-section h4');
    if (footerHeadings[1]) footerHeadings[1].textContent = footer.sections.services;
    if (footerHeadings[2]) footerHeadings[2].textContent = footer.sections.company;
    if (footerHeadings[3]) footerHeadings[3].textContent = footer.sections.resources;
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initLanguageSystem);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setLanguage,
        toggleLanguage,
        getCurrentLanguage: () => currentLanguage,
        translations
    };
}
