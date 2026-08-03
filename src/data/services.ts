import {
  Monitor,
  Palette,
  Code2,
  Cloud,
  Shield,
  Megaphone,
  Headphones,
} from "lucide-react";

export const services = [
  {
    slug: "ui-ux-web-design",
    number: "01",
    icon: Monitor,
    title: "UI/UX & Web Design",
    tagline: "Websites that work as hard as you do.",
    shortDesc:
      "Seamless, human-centered designs that improve engagement, conversion, and user satisfaction — turning visitors into loyal customers.",
    description:
      "Our web development services are designed to create dynamic, responsive, and high-performing websites that deliver speed, beauty, and functionality. From corporate landing pages to complex web apps, we design and build sites that reflect your brand while driving engagement and measurable results.",
    descriptionExtra:
      "We develop websites using modern techniques and platforms including React, Next.js, WordPress, Webflow, and custom stacks. Whether it's a sleek corporate site, a high-converting landing page, or a complex web app, we ensure your online presence is secure, scalable, and optimized for performance and SEO.",
    image: "https://images.pexels.com/photos/6578413/pexels-photo-6578413.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefitsImage: "https://images.pexels.com/photos/7971550/pexels-photo-7971550.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefits: [
      "Automatic compatibility and reach",
      "Seamless mobile responsiveness",
      "Secure platforms and data protection",
      "Improved user experience (UX)",
      "Optimized speed and performance",
      "Higher search engine & web visibility",
    ],
    items: [
      "Custom responsive website design & development",
      "Wireframes & interactive prototypes",
      "E-commerce platforms with checkout optimization",
      "Landing pages built for lead generation",
      "Design systems & component libraries",
      "UX audits with actionable improvement plans",
    ],
    process: [
      {
        title: "Research",
        desc: "We define your goals, audience, and competition to guide the project's overall creative direction.",
      },
      {
        title: "Design & Planning",
        desc: "Wireframes and mockups are crafted to visualize the final product before coding begins.",
      },
      {
        title: "Development & Testing",
        desc: "We build, test, and refine your site's interactions and functionality to ensure success.",
      },
    ],
    faqs: [
      {
        q: "What platforms do you build on?",
        a: "We develop on WordPress, Webflow, Shopify, and fully custom stacks depending on your needs.",
      },
      {
        q: "Can you provide website maintenance?",
        a: "Yes, we offer ongoing maintenance packages including updates, backups, security monitoring, and content changes.",
      },
      {
        q: "Can you integrate third-party tools?",
        a: "Absolutely. We integrate payment gateways, CRMs, analytics tools, email platforms, and any API-based service.",
      },
      {
        q: "How long does a project take?",
        a: "Typical websites take 3–6 weeks. Complex web apps may take 2–4 months depending on scope.",
      },
    ],
    result: "Average 45% increase in enquiries after redesign",
  },
  {
    slug: "graphic-design",
    number: "02",
    icon: Palette,
    title: "Graphic Design",
    tagline: "Visuals that make people remember you.",
    shortDesc:
      "A powerful, consistent visual identity that connects emotionally with your audience and leaves a lasting impression across every touchpoint.",
    description:
      "From logos to social media posts, from packaging to annual reports — we create visual assets that tell your story consistently across every medium. Whether it's digital or print, we make sure your brand looks professional, polished, and unmistakably yours.",
    descriptionExtra:
      "Our design team combines creativity with strategy to deliver visuals that not only look stunning but also communicate your brand message effectively. Every color, typeface, and layout choice is intentional and aligned with your business goals.",
    image: "https://images.pexels.com/photos/5749152/pexels-photo-5749152.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefitsImage: "https://images.pexels.com/photos/6621022/pexels-photo-6621022.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefits: [
      "Consistent brand recognition",
      "Professional visual identity",
      "Memorable marketing materials",
      "Increased audience engagement",
      "Print-ready & digital-ready assets",
      "Stronger emotional brand connection",
    ],
    items: [
      "Logo design & full brand identity",
      "Business cards, letterheads & stationery",
      "Social media graphics & templates",
      "Brochures, flyers & marketing collateral",
      "Packaging design & product labels",
      "Presentation decks & pitch materials",
    ],
    process: [
      {
        title: "Brief & Moodboard",
        desc: "We understand your vision, audience, and competitors to establish creative direction.",
      },
      {
        title: "Concept Design",
        desc: "Multiple design directions are explored and presented for your feedback.",
      },
      {
        title: "Revisions & Delivery",
        desc: "We refine the chosen concept until it's perfect, then deliver all final files.",
      },
    ],
    faqs: [
      {
        q: "How many revisions do I get?",
        a: "Most packages include 2–3 revision rounds. We work until you're happy with the result.",
      },
      {
        q: "Do you handle printing?",
        a: "Yes, we manage the full print process — from design to production — so you get a seamless result.",
      },
      {
        q: "What file formats do you deliver?",
        a: "We deliver AI, EPS, PDF, PNG, JPG, and SVG files depending on usage — print-ready and web-ready.",
      },
      {
        q: "Can you create a full brand guideline?",
        a: "Absolutely. We deliver comprehensive brand books including logo usage, colors, typography, and more.",
      },
    ],
    result: "Clients report 40%+ brand recall improvement",
  },
  {
    slug: "software-development",
    number: "03",
    icon: Code2,
    title: "Software Development",
    tagline: "Custom tools built for how your business actually runs.",
    shortDesc:
      "From concept to launch, we build custom applications that work flawlessly across all devices and scale with your business.",
    description:
      "Off-the-shelf software rarely fits. We build custom web and mobile applications, internal tools, and automation systems that match your workflows exactly. Scoped clearly, documented properly, and handed over so you're never locked in.",
    descriptionExtra:
      "Our development process is agile and transparent. You see progress weekly, give feedback early, and never get surprised by the final product. We use modern stacks (React, Next.js, Node.js, Python) and prioritize clean code, performance, and security.",
    image: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefitsImage: "https://images.pexels.com/photos/7988113/pexels-photo-7988113.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefits: [
      "Custom-fit to your workflows",
      "Scalable & future-proof architecture",
      "Full documentation & handover",
      "Agile development with weekly demos",
      "Third-party API integrations",
      "Ongoing support & maintenance",
    ],
    items: [
      "Custom web applications (React, Next.js, Vue)",
      "Mobile apps (iOS & Android, cross-platform)",
      "Internal tools & admin dashboards",
      "Workflow automation & integrations",
      "API development & third-party connections",
      "Legacy system modernization & migration",
    ],
    process: [
      {
        title: "Requirements",
        desc: "We map your processes, define features, and create a detailed project scope.",
      },
      {
        title: "Sprint Planning",
        desc: "Work is broken into 1–2 week sprints with clear deliverables and checkpoints.",
      },
      {
        title: "Build & Launch",
        desc: "Development, testing, deployment, and handover with full documentation.",
      },
    ],
    faqs: [
      {
        q: "What technologies do you use?",
        a: "React, Next.js, Node.js, Python, Flutter, PostgreSQL, MongoDB — we choose the best fit for your project.",
      },
      {
        q: "Do you provide ongoing support?",
        a: "Yes. We offer maintenance plans, bug fixes, feature additions, and performance monitoring.",
      },
      {
        q: "How do you handle project changes?",
        a: "Through our agile process — changes are scoped, estimated, and integrated into the next sprint.",
      },
      {
        q: "Can you modernize our existing system?",
        a: "Absolutely. We specialize in migrating legacy systems to modern, maintainable architectures.",
      },
    ],
    result: "Average 15+ hours saved per week for clients",
  },
  {
    slug: "cloud-networking",
    number: "04",
    icon: Cloud,
    title: "Cloud & Networking",
    tagline: "Infrastructure that just works — everywhere.",
    shortDesc:
      "Infrastructure that just works — cloud migration, office networking, and reliable connectivity for your team, wherever they are.",
    description:
      "Whether you're moving to the cloud, setting up a new office, or connecting remote teams — we design, deploy, and manage infrastructure that stays reliable. No more downtime excuses, no more 'the internet is slow' mornings.",
    descriptionExtra:
      "We work with AWS, Azure, and Google Cloud to build infrastructure that's secure, scalable, and cost-effective. From simple office networks to multi-site enterprise setups, we handle everything from planning to ongoing monitoring.",
    image: "https://images.pexels.com/photos/38246354/pexels-photo-38246354.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefitsImage: "https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefits: [
      "99.9% uptime guarantee",
      "Secure remote access (VPN)",
      "Scalable cloud infrastructure",
      "Automated backup & recovery",
      "Cost-optimized solutions",
      "24/7 monitoring available",
    ],
    items: [
      "Cloud migration (AWS, Azure, Google Cloud)",
      "Office & enterprise network setup",
      "VPN & secure remote access",
      "Server provisioning & administration",
      "Backup systems & disaster recovery",
      "Email hosting & collaboration tools",
    ],
    process: [
      {
        title: "Infrastructure Audit",
        desc: "We assess your current setup, identify gaps, and plan the optimal architecture.",
      },
      {
        title: "Architecture Plan",
        desc: "A detailed migration or setup plan with timelines, costs, and risk mitigation.",
      },
      {
        title: "Deploy & Monitor",
        desc: "Implementation, testing, go-live, and ongoing monitoring setup.",
      },
    ],
    faqs: [
      {
        q: "Which cloud platforms do you support?",
        a: "AWS, Microsoft Azure, and Google Cloud Platform — we recommend based on your needs and budget.",
      },
      {
        q: "Can you set up our office network?",
        a: "Yes — from single offices to multi-site enterprises, including WiFi, cabling, and security.",
      },
      {
        q: "Do you provide 24/7 monitoring?",
        a: "Yes, we offer proactive monitoring packages that alert us before issues affect your team.",
      },
      {
        q: "How do you handle data migration?",
        a: "Carefully. We plan, test, and execute migrations with zero or minimal downtime.",
      },
    ],
    result: "99.9% uptime for all managed clients",
  },
  {
    slug: "cybersecurity",
    number: "05",
    icon: Shield,
    title: "Cybersecurity",
    tagline: "Protection before you need it, not after.",
    shortDesc:
      "Protection before you need it. Security audits, staff training, and layered protection that keeps your data safe.",
    description:
      "Most businesses only think about security after something goes wrong. We help you get ahead of threats with assessments, staff training, and layered protection that keeps your data and your clients' data safe. Compliance-ready, audit-ready.",
    descriptionExtra:
      "Our cybersecurity services cover everything from vulnerability scanning and penetration testing to staff awareness programs and incident response planning. We help you meet compliance requirements (GDPR, ISO 27001) and build a security culture.",
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefitsImage: "https://images.pexels.com/photos/5935789/pexels-photo-5935789.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefits: [
      "Proactive threat detection",
      "Staff security awareness",
      "Compliance-ready (GDPR, ISO)",
      "Incident response planning",
      "Data encryption & access control",
      "Regular vulnerability scanning",
    ],
    items: [
      "Security audits & penetration testing",
      "Staff cybersecurity awareness training",
      "Firewall & endpoint protection setup",
      "Data encryption & access controls",
      "Incident response & recovery planning",
      "Compliance consulting (GDPR, ISO 27001)",
    ],
    process: [
      {
        title: "Risk Assessment",
        desc: "We identify vulnerabilities, threats, and gaps in your current security posture.",
      },
      {
        title: "Gap Analysis",
        desc: "A prioritized action plan to address the most critical risks first.",
      },
      {
        title: "Implementation",
        desc: "We deploy solutions, train your team, and set up ongoing monitoring.",
      },
    ],
    faqs: [
      {
        q: "Do we really need cybersecurity?",
        a: "Yes. 43% of cyberattacks target small businesses. Prevention is far cheaper than recovery.",
      },
      {
        q: "What does a security audit involve?",
        a: "We test your systems, networks, and processes for vulnerabilities and provide a detailed report with fixes.",
      },
      {
        q: "Can you train our staff?",
        a: "Absolutely. We run interactive workshops on phishing, password hygiene, and data handling.",
      },
      {
        q: "Do you help with compliance?",
        a: "Yes — we help you meet GDPR, ISO 27001, and other regulatory requirements.",
      },
    ],
    result: "Zero breaches across all managed clients",
  },
  {
    slug: "digital-marketing-seo",
    number: "06",
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    tagline: "Get found by the right people, not just anyone.",
    shortDesc:
      "Boost your reach, generate quality leads, and increase ROI through strategic digital marketing that blends creativity with measurable results.",
    description:
      "We don't just drive traffic — we drive the right traffic. Through search optimization, social media strategy, and targeted campaigns, we make sure your ideal customers find you first. Everything measurable, everything optimized monthly.",
    descriptionExtra:
      "Our marketing approach is data-driven. We set up proper analytics, track every conversion, and optimize campaigns monthly. No vanity metrics — just real leads, real growth, and real ROI you can measure.",
    image: "https://images.pexels.com/photos/6893916/pexels-photo-6893916.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefitsImage: "https://images.pexels.com/photos/5668778/pexels-photo-5668778.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefits: [
      "Targeted audience reach",
      "Measurable ROI on every campaign",
      "Higher search engine rankings",
      "Consistent brand visibility",
      "Quality lead generation",
      "Data-driven decision making",
    ],
    items: [
      "Search engine optimization (SEO)",
      "Google Ads & paid campaign management",
      "Social media strategy & content",
      "Email marketing & automation",
      "Analytics setup & monthly reporting",
      "Content writing & blog management",
    ],
    process: [
      {
        title: "Audit & Strategy",
        desc: "We analyze your current presence, competitors, and opportunities to build a winning plan.",
      },
      {
        title: "Content & Execution",
        desc: "We create and publish content, launch campaigns, and drive targeted traffic.",
      },
      {
        title: "Optimize & Report",
        desc: "Monthly performance reviews, A/B testing, and continuous optimization.",
      },
    ],
    faqs: [
      {
        q: "How long until I see results?",
        a: "SEO typically takes 3–6 months. Paid campaigns can generate leads within the first week.",
      },
      {
        q: "Do you manage social media?",
        a: "Yes — strategy, content creation, scheduling, community management, and reporting.",
      },
      {
        q: "What's your reporting like?",
        a: "Monthly reports with clear metrics: traffic, leads, conversions, and ROI — no jargon.",
      },
      {
        q: "Can you run Google Ads?",
        a: "Yes. We set up, manage, and optimize Google Ads campaigns for maximum return on ad spend.",
      },
    ],
    result: "Average 3x organic traffic within 6 months",
  },
  {
    slug: "managed-it-support",
    number: "07",
    icon: Headphones,
    title: "Managed IT Support",
    tagline: "Your tech team, without the full-time cost.",
    shortDesc:
      "Your tech team without the full-time cost. Help desk, hardware, software, and maintenance — so small problems stay small.",
    description:
      "A dedicated help desk for when things break, slow down, or confuse your team. We handle hardware, software, troubleshooting, and maintenance so your staff can focus on their actual jobs. Think of us as your outsourced IT department.",
    descriptionExtra:
      "We provide tiered support plans that scale with your business. From basic remote troubleshooting to full on-site support with proactive monitoring, we keep your systems running smoothly so you never lose a productive hour.",
    image: "https://images.pexels.com/photos/5467562/pexels-photo-5467562.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefitsImage: "https://images.pexels.com/photos/19805877/pexels-photo-19805877.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefits: [
      "Fast response times (4-hour SLA)",
      "Reduced IT downtime",
      "Predictable monthly costs",
      "Proactive system monitoring",
      "Expert support on demand",
      "No need for full-time IT staff",
    ],
    items: [
      "Help desk & remote troubleshooting",
      "On-site support when needed",
      "Hardware procurement & setup",
      "Software licensing & management",
      "Network monitoring & maintenance",
      "Regular health checks & updates",
    ],
    process: [
      {
        title: "Onboarding",
        desc: "We audit your current systems, document everything, and set up our support tools.",
      },
      {
        title: "Ticket System",
        desc: "A clear ticketing system so your team can report issues and track resolutions.",
      },
      {
        title: "Proactive Care",
        desc: "Monitoring, updates, and regular health checks to prevent issues before they happen.",
      },
    ],
    faqs: [
      {
        q: "What's your response time?",
        a: "Our standard SLA is 4 hours for critical issues, with most resolved within the same business day.",
      },
      {
        q: "Do you offer on-site support?",
        a: "Yes. For issues that can't be resolved remotely, we dispatch a technician to your location.",
      },
      {
        q: "Can you help us buy hardware?",
        a: "Absolutely. We procure, configure, and deploy laptops, servers, networking gear, and peripherals.",
      },
      {
        q: "How does pricing work?",
        a: "We offer monthly retainer plans based on the number of users/devices — predictable and transparent.",
      },
    ],
    result: "4-hour average response time, 95% first-call resolution",
  },
];

export type Service = (typeof services)[number];
