import {
  Monitor,
  Palette,
  Code2,
  Globe,
  Megaphone,
  CreditCard,
  Receipt,
  Router,
} from "lucide-react";

export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  images?: string[];
  price?: string;
  description: string;
  features: string[];
};

export const services = [
  {
    slug: "ui-ux-design",
    number: "01",
    icon: Monitor,
    title: "UI and UX Design",
    tagline: "Interfaces people actually enjoy using.",
    shortDesc:
      "Human-centered design that improves engagement, conversion, and satisfaction — turning visitor frustration into loyalty.",
    description:
      "Great interfaces don't happen by accident. We research your users, map their journeys, and design every screen with intention. From wireframes to interactive prototypes, we make sure your product feels intuitive before a single line of code is written.",
    descriptionExtra:
      "Our design process is grounded in real user behaviour, not guesswork. We run usability tests, iterate on feedback, and deliver design systems that keep your product consistent as it grows. Whether it's a mobile app, a web dashboard, or a marketing site, the result is an experience your users don't have to think about.",
    image: "https://images.pexels.com/photos/6578413/pexels-photo-6578413.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefitsImage: "https://images.pexels.com/photos/7971550/pexels-photo-7971550.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefits: [
      "Improved user satisfaction",
      "Higher conversion rates",
      "Reduced development rework",
      "Clear design systems & consistency",
      "Accessibility built in from the start",
      "Prototypes you can test before building",
    ],
    items: [
      "User research & journey mapping",
      "Wireframes & interactive prototypes",
      "UI design for web, mobile, and dashboards",
      "Design systems & component libraries",
      "Usability testing & UX audits",
      "Interaction & micro-animation design",
    ],
    process: [
      {
        title: "Research",
        desc: "We define your goals, users, and competition to guide the project's creative direction.",
      },
      {
        title: "Design & Prototype",
        desc: "Wireframes, mockups, and clickable prototypes are crafted and tested with real users.",
      },
      {
        title: "Handoff & Iteration",
        desc: "We deliver design files, a component library, and iterate based on developer feedback.",
      },
    ],
    faqs: [
      {
        q: "Do you design for mobile and web?",
        a: "Yes — we design responsive interfaces for web apps, mobile apps, dashboards, and marketing sites.",
      },
      {
        q: "Can you work with our existing design system?",
        a: "Absolutely. We can extend your current system or build a new one from scratch.",
      },
      {
        q: "Do you do usability testing?",
        a: "Yes, we run moderated and unmoderated usability tests and iterate based on findings.",
      },
      {
        q: "What tools do you use?",
        a: "Figma for design and prototyping, FigJam for workshops, and Lottie for micro-animations.",
      },
    ],
    result: "Average 45% increase in user engagement after redesign",
  },
  {
    slug: "web-design-development",
    number: "02",
    icon: Globe,
    title: "Web Design and Development",
    tagline: "Websites that work as hard as you do.",
    shortDesc:
      "Dynamic, responsive, high-performing websites — from corporate landing pages to complex web apps, built to reflect your brand and drive measurable results.",
    description:
      "We design and build websites that deliver speed, beauty, and functionality. From corporate landing pages to complex web apps, we create sites that reflect your brand while driving engagement and measurable results.",
    descriptionExtra:
      "We develop websites using modern techniques and platforms including React, Next.js, WordPress, Webflow, and custom stacks. Whether it's a sleek corporate site, a high-converting landing page, or a complex web app, we ensure your online presence is secure, scalable, and optimized for performance and SEO.",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefitsImage: "https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefits: [
      "Automatic compatibility and reach",
      "Seamless mobile responsiveness",
      "Secure platforms and data protection",
      "Optimized speed and performance",
      "Higher search engine & web visibility",
      "Ongoing maintenance available",
    ],
    items: [
      "Custom responsive website design & development",
      "E-commerce platforms with checkout optimization",
      "Landing pages built for lead generation",
      "CMS integration (WordPress, Webflow, custom)",
      "Payment gateway & third-party API integration",
      "Website maintenance & security updates",
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
    number: "03",
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
    products: [
      {
        slug: "custom-printed-t-shirt",
        name: "Custom Printed T-Shirt",
        category: "T-Shirts",
        image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        images: [
          "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        ],
        price: "From KES 800",
        description:
          "High-quality cotton t-shirts with your logo, artwork, or message printed in full colour. Perfect for staff uniforms, events, promotions, and merch drops. Available in a range of sizes from S to XXL.",
        features: [
          "100% cotton, breathable fabric",
          "Full-colour print (DTG or screen print)",
          "Sizes: S, M, L, XL, XXL",
          "Multiple colour options",
          "Bulk discount available",
          "Turnaround: 3–5 working days",
        ],
      },
      {
        slug: "branded-polo-t-shirt",
        name: "Branded Polo T-Shirt",
        category: "T-Shirts",
        image: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        images: [
          "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/1666071/pexels-photo-1666071.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        ],
        price: "From KES 1,200",
        description:
          "Premium polo shirts embroidered or printed with your brand logo. A step up from t-shirts for front-desk staff, sales teams, and corporate events. Comfortable, durable, and professional.",
        features: [
          "Poly-cotton blend, wrinkle-resistant",
          "Embroidery or heat-transfer logo",
          "Sizes: S, M, L, XL, XXL",
          "Classic fit with 3-button placket",
          "Bulk discount available",
          "Turnaround: 5–7 working days",
        ],
      },
      {
        slug: "custom-hoodie",
        name: "Custom Hoodie",
        category: "Hoodies",
        image: "https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        images: [
          "https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/8217427/pexels-photo-8217427.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        ],
        price: "From KES 2,500",
        description:
          "Warm, comfortable hoodies with your design printed or embroidered. Great for team wear, giveaways, and merchandise. Heavyweight fabric that holds up wash after wash.",
        features: [
          "Heavyweight fleece interior",
          "Full-colour print or embroidery",
          "Sizes: S, M, L, XL, XXL",
          "Kangaroo pocket & drawstring hood",
          "Bulk discount available",
          "Turnaround: 5–7 working days",
        ],
      },
      {
        slug: "printed-ceramic-mug",
        name: "Printed Ceramic Mug",
        category: "Mugs",
        image: "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        images: [
          "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/3735137/pexels-photo-3735137.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/4207791/pexels-photo-4207791.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        ],
        price: "From KES 500",
        description:
          "Durable ceramic mugs printed with your logo or artwork. A practical, long-lasting promotional item that keeps your brand on your client's desk every day. Dishwasher and microwave safe.",
        features: [
          "11oz standard ceramic",
          "Full-colour wrap-around print",
          "Dishwasher & microwave safe",
          "Ideal for corporate gifts",
          "Bulk discount available",
          "Turnaround: 3–5 working days",
        ],
      },
      {
        slug: "branded-cap",
        name: "Branded Cap",
        category: "Caps",
        image: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        images: [
          "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        ],
        price: "From KES 700",
        description:
          "Adjustable caps with your logo embroidered or printed. Great for outdoor events, sports teams, and brand visibility. One-size-fits-all with an adjustable strap.",
        features: [
          "Adjustable strap, one size fits all",
          "Embroidery or print logo",
          "Multiple colour options",
          "Durable curved brim",
          "Bulk discount available",
          "Turnaround: 5–7 working days",
        ],
      },
      {
        slug: "outdoor-banner",
        name: "Outdoor Banner",
        category: "Banners",
        image: "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        images: [
          "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/7414288/pexels-photo-7414288.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/5749152/pexels-photo-5749152.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        ],
        price: "From KES 1,500",
        description:
          "Weather-resistant outdoor banners printed in full colour. Perfect for events, promotions, building signage, and roadshows. Printed on durable vinyl with eyelets for easy hanging.",
        features: [
          "Full-colour vinyl print",
          "Weather & UV resistant",
          "Metal eyelets for hanging",
          "Custom sizes available",
          "Bulk discount available",
          "Turnaround: 2–4 working days",
        ],
      },
      {
        slug: "roll-up-banner-stand",
        name: "Roll-Up Banner Stand",
        category: "Banners",
        image: "https://images.pexels.com/photos/7414288/pexels-photo-7414288.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        images: [
          "https://images.pexels.com/photos/7414288/pexels-photo-7414288.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/5749152/pexels-photo-5749152.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        ],
        price: "From KES 3,500",
        description:
          "Portable roll-up banner stands with your full-colour design. Ideal for trade shows, conferences, receptions, and presentations. Comes with a carrying bag for easy transport.",
        features: [
          "Standard size: 85cm x 200cm",
          "Full-colour print on premium vinyl",
          "Aluminium retractable stand",
          "Carrying bag included",
          "Custom sizes available",
          "Turnaround: 3–5 working days",
        ],
      },
      {
        slug: "custom-sticker-pack",
        name: "Custom Sticker Pack",
        category: "Stickers",
        image: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        images: [
          "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        ],
        price: "From KES 300",
        description:
          "Custom-cut stickers printed in full colour. Great for product packaging, giveaways, laptop branding, and promotional campaigns. Available in die-cut, kiss-cut, or sheet formats.",
        features: [
          "Full-colour print on vinyl",
          "Waterproof & scratch-resistant",
          "Die-cut, kiss-cut, or sheet format",
          "Custom shapes and sizes",
          "Bulk discount available",
          "Turnaround: 2–4 working days",
        ],
      },
    ] as Product[],
  },
  {
    slug: "software-development",
    number: "04",
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
    slug: "pos-systems",
    number: "05",
    icon: CreditCard,
    title: "POS Systems",
    tagline: "Point-of-sale hardware built for busy tills.",
    shortDesc:
      "POS machines and till systems that speed up checkout, track stock, and give you clean daily sales reports — no more guesswork.",
    description:
      "We supply, set up, and support point-of-sale systems for retail shops, restaurants, and service businesses. From single-till setups to multi-branch systems, we match the right hardware and software to how you actually sell.",
    descriptionExtra:
      "Every POS system we deliver is configured before it reaches you — products loaded, receipt printer paired, and staff trained on day one. We also handle ongoing support so a jammed printer or frozen till never costs you a sale.",
    image: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefitsImage: "https://images.pexels.com/photos/6169660/pexels-photo-6169660.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefits: [
      "Faster checkout, shorter queues",
      "Real-time stock & sales tracking",
      "Reduced till errors & cash leaks",
      "Multi-branch reporting in one place",
      "Staff training & onboarding included",
      "Local support when hardware fails",
    ],
    items: [
      "POS terminals & till machines",
      "Barcode scanners & receipt printers",
      "Cash drawers & card payment integration",
      "Inventory & sales reporting software",
      "Multi-branch & multi-user setup",
      "Staff training and after-sales support",
    ],
    process: [
      {
        title: "Needs Assessment",
        desc: "We look at how you sell today and recommend the right hardware and software combo.",
      },
      {
        title: "Setup & Configuration",
        desc: "Products, pricing, and users are loaded before the system reaches your counter.",
      },
      {
        title: "Training & Go-Live",
        desc: "Your staff get hands-on training, then we stay on call for the first weeks of use.",
      },
    ],
    faqs: [
      {
        q: "Do you supply the physical POS machines?",
        a: "Yes. We supply, configure, and deliver POS terminals, printers, and scanners as part of the package.",
      },
      {
        q: "Can it work across multiple branches?",
        a: "Yes — we set up multi-branch systems that report into one central dashboard.",
      },
      {
        q: "What happens if hardware breaks down?",
        a: "We offer support plans that cover troubleshooting, repairs, and replacements.",
      },
      {
        q: "Can it integrate with M-Pesa or card payments?",
        a: "Yes, we integrate mobile money and card payment options into your checkout flow.",
      },
    ],
    result: "Checkout time cut by up to 40% for retail clients",
    products: [
      {
        slug: "countertop-pos-terminal",
        name: "Countertop POS Terminal",
        category: "Terminals",
        image: "/images/Countertop_ POS_Terminal.jpg",
        images: [
          "/images/Countertop_ POS_Terminal.jpg",
          "/images/portable_handheld.webp",
          "/images/Thermal_receipt_printer.webp",
          "/images/bar_code_scanner.webp",
          "/images/cash_drawer.jpg",
        ],
        price: "From KES 35,000",
        description:
          "A robust countertop POS terminal with a touchscreen display, built-in receipt printer port, and connectivity for barcode scanners and cash drawers. Ideal for retail shops, pharmacies, and restaurants with a fixed counter.",
        features: [
          "15-inch touchscreen display",
          "Dual-band WiFi & Ethernet",
          "4GB RAM, 64GB storage",
          "USB ports for scanner & printer",
          "Pre-loaded POS software",
          "1-year hardware warranty",
        ],
      },
      {
        slug: "portable-handheld-pos",
        name: "Portable Handheld POS",
        category: "Terminals",
        image: "/images/portable_handheld.webp",
        images: [
          "/images/portable_handheld.webp",
          "/images/Countertop_ POS_Terminal.jpg",
          "/images/Thermal_receipt_printer.webp",
          "/images/bar_code_scanner.webp",
          "/images/cash_drawer.jpg",
        ],
        price: "From KES 28,000",
        description:
          "A compact handheld POS device for mobile businesses, waitstaff, and pop-up shops. Take orders and payments tableside or on the go, with all sales syncing back to your main system in real time.",
        features: [
          "5-inch touchscreen",
          "WiFi & 4G connectivity",
          "Built-in battery (8-hour life)",
          "Integrated card reader",
          "Lightweight & portable",
          "1-year hardware warranty",
        ],
      },
      {
        slug: "thermal-receipt-printer",
        name: "Thermal Receipt Printer",
        category: "Printers",
        image: "/images/Thermal_receipt_printer.webp",
        images: [
          "/images/Thermal_receipt_printer.webp",
          "/images/Countertop_ POS_Terminal.jpg",
          "/images/portable_handheld.webp",
          "/images/bar_code_scanner.webp",
          "/images/cash_drawer.jpg",
        ],
        price: "From KES 9,500",
        description:
          "High-speed thermal receipt printer compatible with most POS systems. Reliable, quiet, and fast — prints receipts in under a second. Connects via USB, Ethernet, or Bluetooth.",
        features: [
          "80mm thermal paper support",
          "Print speed: 250mm/sec",
          "USB, Ethernet & Bluetooth",
          "Auto-cutter included",
          "Low-noise operation",
          "1-year warranty",
        ],
      },
      {
        slug: "barcode-scanner",
        name: "Barcode Scanner",
        category: "Scanners",
        image: "/images/bar_code_scanner.webp",
        images: [
          "/images/bar_code_scanner.webp",
          "/images/Countertop_ POS_Terminal.jpg",
          "/images/portable_handheld.webp",
          "/images/Thermal_receipt_printer.webp",
          "/images/cash_drawer.jpg",
        ],
        price: "From KES 6,000",
        description:
          "Fast, accurate barcode scanner for retail and inventory management. Reads 1D and 2D barcodes including QR codes. Plug-and-play with most POS systems via USB.",
        features: [
          "1D & 2D barcode support",
          "USB plug-and-play",
          "Hands-free stand included",
          "Durable, drop-resistant design",
          "Fast scanning speed",
          "1-year warranty",
        ],
      },
      {
        slug: "cash-drawer",
        name: "Cash Drawer",
        category: "Accessories",
        image: "/images/cash_drawer.jpg",
        images: [
          "/images/cash_drawer.jpg",
          "/images/Countertop_ POS_Terminal.jpg",
          "/images/portable_handheld.webp",
          "/images/Thermal_receipt_printer.webp",
          "/images/bar_code_scanner.webp",
        ],
        price: "From KES 8,000",
        description:
          "Heavy-duty cash drawer with multiple compartments for notes and coins. Opens automatically via POS software or manually with a key. Compatible with all major POS terminals.",
        features: [
          "5 note compartments, 8 coin slots",
          "Auto-open via POS software",
          "Manual key override",
          "Durable steel construction",
          "Removable coin tray",
          "1-year warranty",
        ],
      },
    ] as Product[],
  },
  {
    slug: "etims-machines",
    number: "06",
    icon: Receipt,
    title: "eTIMS Machines",
    tagline: "KRA-compliant invoicing, made simple.",
    shortDesc:
      "eTIMS-ready devices and setup so every sale is invoiced, compliant, and submitted to KRA automatically — no manual filing headaches.",
    description:
      "We supply and configure eTIMS-compliant devices so your business meets KRA's electronic tax invoicing requirements without disrupting how you sell. From single-shop setups to multi-till businesses, we handle the technical setup end-to-end.",
    descriptionExtra:
      "Beyond the hardware, we register your device with KRA, connect it to your existing POS or till where possible, and train your staff so every receipt issued is automatically compliant — no year-end surprises.",
    image: "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefitsImage: "https://images.pexels.com/photos/6693662/pexels-photo-6693662.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefits: [
      "Full KRA eTIMS compliance",
      "Automatic tax invoice submission",
      "Reduced risk of penalties",
      "Works alongside your existing POS",
      "Fast device registration support",
      "Staff trained on correct usage",
    ],
    items: [
      "eTIMS-compliant device supply",
      "KRA registration & device setup",
      "Integration with existing POS/till",
      "Staff training on compliant invoicing",
      "Ongoing device support & troubleshooting",
      "Multi-branch eTIMS rollout",
    ],
    process: [
      {
        title: "Compliance Check",
        desc: "We review your current invoicing setup and identify what's needed for eTIMS compliance.",
      },
      {
        title: "Device Setup & Registration",
        desc: "We configure your device and complete KRA registration on your behalf.",
      },
      {
        title: "Training & Handover",
        desc: "Your team is trained on issuing compliant invoices from day one.",
      },
    ],
    faqs: [
      {
        q: "Is eTIMS mandatory for my business?",
        a: "KRA requires most VAT-registered businesses to issue electronic tax invoices via eTIMS. We can confirm your specific obligation.",
      },
      {
        q: "Can eTIMS work with my current till or POS?",
        a: "In most cases, yes — we assess your existing setup and integrate where possible.",
      },
      {
        q: "Do you handle the KRA registration?",
        a: "Yes, we handle device registration and compliance setup with KRA on your behalf.",
      },
      {
        q: "What if the device has issues later?",
        a: "We offer ongoing support plans to troubleshoot and resolve device or connectivity issues.",
      },
    ],
    result: "100% compliant invoicing for all onboarded clients",
    products: [
      {
        slug: "etims-desktop-device",
        name: "eTIMS Desktop Device",
        category: "Devices",
        image: "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        images: [
          "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/6693662/pexels-photo-6693662.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/6169645/pexels-photo-6169645.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        ],
        price: "From KES 25,000",
        description:
          "A KRA-approved eTIMS desktop device for fixed-location businesses. Issues compliant electronic tax invoices and submits them to KRA automatically. Includes setup and registration.",
        features: [
          "KRA-approved eTIMS compliance",
          "Automatic invoice submission to KRA",
          "Ethernet & WiFi connectivity",
          "Receipt printer compatible",
          "Free KRA registration included",
          "1-year hardware warranty",
        ],
      },
      {
        slug: "etims-portable-device",
        name: "eTIMS Portable Device",
        category: "Devices",
        image: "https://images.pexels.com/photos/6693662/pexels-photo-6693662.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        images: [
          "https://images.pexels.com/photos/6693662/pexels-photo-6693662.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/6169645/pexels-photo-6169645.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        ],
        price: "From KES 20,000",
        description:
          "A portable eTIMS device for businesses on the move — delivery vans, market traders, and pop-up shops. Battery-powered with mobile data connectivity for compliant invoicing anywhere.",
        features: [
          "KRA-approved eTIMS compliance",
          "Built-in battery (10-hour life)",
          "4G + WiFi connectivity",
          "Compact & lightweight",
          "Free KRA registration included",
          "1-year hardware warranty",
        ],
      },
      {
        slug: "etims-receipt-printer",
        name: "eTIMS Receipt Printer",
        category: "Printers",
        image: "https://images.pexels.com/photos/6169645/pexels-photo-6169645.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        images: [
          "https://images.pexels.com/photos/6169645/pexels-photo-6169645.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/6693662/pexels-photo-6693662.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        ],
        price: "From KES 9,500",
        description:
          "Thermal receipt printer compatible with eTIMS devices. Prints compliant tax invoices with all required KRA fields. Fast, reliable, and quiet operation.",
        features: [
          "80mm thermal paper support",
          "KRA-compliant invoice format",
          "USB & Bluetooth connectivity",
          "Auto-cutter included",
          "Compatible with all eTIMS devices",
          "1-year warranty",
        ],
      },
    ] as Product[],
  },
  {
    slug: "networking-equipment",
    number: "07",
    icon: Router,
    title: "Networking Equipment",
    tagline: "Reliable connectivity, built to spec.",
    shortDesc:
      "Routers, switches, access points and cabling — supplied and installed so your office network just works, every day.",
    description:
      "We supply and install the networking hardware behind reliable offices: routers, switches, wireless access points, and structured cabling. Whether it's a single-room setup or a multi-floor office, we size the equipment to your actual usage.",
    descriptionExtra:
      "We don't just sell boxes — we design the layout, run the cabling, configure the equipment, and test coverage before we call it done. Every install comes with documentation so any technician can support it later.",
    image: "https://images.pexels.com/photos/2881233/pexels-photo-2881233.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefitsImage: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1",
    benefits: [
      "Reliable, drop-free connectivity",
      "Equipment sized to your actual load",
      "Full coverage — no dead WiFi zones",
      "Professional cabling & installation",
      "Documentation for future support",
      "Scalable as your team grows",
    ],
    items: [
      "Routers & firewalls",
      "Network switches (managed & unmanaged)",
      "Wireless access points",
      "Structured cabling & patch panels",
      "Network design & site surveys",
      "Installation, testing & documentation",
    ],
    process: [
      {
        title: "Site Survey",
        desc: "We assess your space, usage, and pain points to plan the right equipment layout.",
      },
      {
        title: "Supply & Installation",
        desc: "Equipment is supplied, cabling run, and hardware configured on site.",
      },
      {
        title: "Testing & Handover",
        desc: "We test coverage and performance, then hand over documentation for your records.",
      },
    ],
    faqs: [
      {
        q: "Do you supply the equipment or just install?",
        a: "Both — we can supply the hardware, install equipment you already own, or a mix of both.",
      },
      {
        q: "Can you fix WiFi dead zones?",
        a: "Yes, we run a site survey and add access points where coverage is weak.",
      },
      {
        q: "Do you handle structured cabling?",
        a: "Yes, including new cabling runs, patch panels, and cable management.",
      },
      {
        q: "What brands do you work with?",
        a: "We work with a range of trusted brands and recommend based on budget and requirements.",
      },
    ],
    result: "Zero-downtime installs across all networking clients",
    products: [
      {
        slug: "business-router",
        name: "Business Router",
        category: "Routers",
        image: "https://images.pexels.com/photos/2881233/pexels-photo-2881233.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        images: [
          "https://images.pexels.com/photos/2881233/pexels-photo-2881233.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/2881230/pexels-photo-2881230.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        ],
        price: "From KES 12,000",
        description:
          "Enterprise-grade router designed for small to medium offices. Supports multiple VLANs, VPN, and QoS for reliable, secure connectivity. Includes configuration and setup.",
        features: [
          "Dual-band WiFi 6",
          "Gigabit Ethernet ports",
          "VPN & firewall support",
          "Up to 100 concurrent users",
          "VLAN & QoS configuration",
          "1-year warranty",
        ],
      },
      {
        slug: "network-switch",
        name: "Network Switch",
        category: "Switches",
        image: "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        images: [
          "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/2881233/pexels-photo-2881233.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/2881230/pexels-photo-2881230.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        ],
        price: "From KES 8,000",
        description:
          "Managed network switch for connecting multiple devices in your office. Supports VLAN segmentation, port prioritization, and remote management. Available in 8, 16, and 24-port configurations.",
        features: [
          "8/16/24 port options",
          "Gigabit Ethernet",
          "VLAN support",
          "Web-based management",
          "Fanless, silent operation",
          "1-year warranty",
        ],
      },
      {
        slug: "wireless-access-point",
        name: "Wireless Access Point",
        category: "Access Points",
        image: "https://images.pexels.com/photos/2881230/pexels-photo-2881230.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        images: [
          "https://images.pexels.com/photos/2881230/pexels-photo-2881230.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/2881233/pexels-photo-2881233.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        ],
        price: "From KES 10,000",
        description:
          "High-performance wireless access point for extending WiFi coverage across your office. Supports seamless roaming and can handle 50+ concurrent devices. Ceiling or wall mountable.",
        features: [
          "WiFi 6 support",
          "Up to 50+ concurrent devices",
          "Seamless roaming",
          "PoE (Power over Ethernet)",
          "Ceiling & wall mount",
          "1-year warranty",
        ],
      },
      {
        slug: "network-cabling",
        name: "Network Cabling (per point)",
        category: "Cabling",
        image: "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        images: [
          "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/2881233/pexels-photo-2881233.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
          "https://images.pexels.com/photos/2881230/pexels-photo-2881230.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
        ],
        price: "From KES 1,500",
        description:
          "Professional structured cabling installation per network point. Includes CAT6 cable, faceplate, keystone jack, and testing. Certified and labeled for easy future maintenance.",
        features: [
          "CAT6 cable standard",
          "Faceplate & keystone jack included",
          "Cable tested & certified",
          "Labeled for easy identification",
          "Up to 90m per run",
          "Installation included",
        ],
      },
    ] as Product[],
  },
  {
    slug: "digital-marketing-seo",
    number: "08",
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
];

export type Service = (typeof services)[number];
