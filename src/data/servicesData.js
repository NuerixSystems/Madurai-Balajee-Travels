// src/data/servicesData.js
//
// Single source of truth for the Services Mega Menu AND every dynamic
// service detail page (/services/:category/:service).
//
// Structure:
// serviceCategories = [
//   {
//     slug, title, icon, blurb,
//     items: [
//       { slug, title, icon, tagline, heroDesc, about, features[], whyChooseUs[], faqs[] }
//     ]
//   }
// ]

import {
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaHashtag,
  FaBriefcase,
  FaBuilding,
  FaShoppingCart,
  FaUserTie,
  FaBullseye,
  FaCogs,
  FaSyncAlt,
  FaTools,
  FaAndroid,
  FaSearchDollar,
  FaGoogle,
  FaFacebookF,
  FaEnvelopeOpenText,
  FaChartLine,
  FaInstagram,
} from 'react-icons/fa'

export const serviceCategories = [
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: FaLaptopCode,
    blurb: 'Fast, modern, SEO-ready websites built to convert visitors into customers.',
    items: [
      {
        slug: 'business-website',
        title: 'Business Website Development',
        h1: 'Business Website Development',
        seoTitle: 'Business Website Development in Chennai | NuerixDigital',
        metaDescription:
          'Business website development in Chennai. Fast, mobile-friendly, professional business websites built by NuerixDigital to turn visitors into enquiries.',
        icon: FaBriefcase,
        tagline: 'A professional business website that builds trust from the first click.',
        heroDesc:
          'A clean, fast, mobile-friendly business website that showcases what you do, builds credibility, and turns visitors into enquiries.',
        about:
          'Your website is often the first interaction a potential customer has with your business. As a business website development company, we design and build responsive business websites that load fast, look professional on every device, and clearly communicate what you offer. Every page is structured around a simple goal: helping visitors find what they need and take action, whether that\'s calling you, filling a form, or messaging on WhatsApp. We build business websites for companies in Chennai and across India.',
        features: [
          'Custom design matched to your brand',
          'Mobile-first, fully responsive layout',
          'Fast loading, optimized performance',
          'Contact & enquiry forms built in',
          'Google Maps & business details integration',
          'Basic on-page SEO setup included',
        ],
        whyChooseUs: [
          'Delivered in as little as 5–7 working days',
          'Transparent, fixed-price packages',
          'Easy to update content after launch',
          'Ongoing support after your site goes live',
        ],
        faqs: [
          { q: 'How many pages are included?', a: 'Standard business websites include Home, About, Services, and Contact pages. Need more pages? We can scale the package up to fit your needs.' },
          { q: 'Will my website work on mobile?', a: 'Yes. Every website we build is fully responsive and tested across phones, tablets, and desktops before launch.' },
          { q: 'Do you provide the domain and hosting?', a: 'Yes, domain registration and hosting setup are included so your site goes live without any extra hassle.' },
          { q: 'Can I edit the content myself later?', a: 'Absolutely. We can hand over an easily editable site, or you can reach out to us anytime for content updates.' },
          { q: 'How much does a business website cost?', a: 'Pricing depends on your requirements. See our Packages page for transparent, fixed-price options, or contact us for a quote.' },
        ],
        related: ['web-development/website-redesign', 'web-development/website-maintenance', 'digital-marketing/seo'],
      },
      {
        slug: 'corporate-website',
        title: 'Corporate Website',
        h1: 'Corporate Website Development',
        seoTitle: 'Corporate Website Development in Chennai | NuerixDigital',
        metaDescription:
          'Corporate website development for established organizations. Multi-page, brand-aligned corporate websites built by NuerixDigital in Chennai.',
        icon: FaBuilding,
        tagline: 'A polished digital presence for established organizations.',
        heroDesc:
          'A structured, professional corporate website that reflects your company\'s scale, credibility, and long-term vision.',
        about:
          'Corporate websites need to do more than look good — they need to represent leadership, culture, services, and investor or partner information in an organized way. This makes sense once a business grows beyond a single-page pitch and needs a more comprehensive presence for its structure, departments, and stakeholders — where a standard business website usually isn\'t enough. Our corporate website development process builds multi-section sites with clear information architecture, consistent branding, and a design that scales as your organization grows, so every department and stakeholder has a home on your site.',
        features: [
          'Multi-page structure (Leadership, Careers, Services, News)',
          'Consistent, brand-aligned design system',
          'Scalable page templates for future growth',
          'Investor / partner information sections',
          'Careers & job listing page option',
          'Enterprise-grade performance & security',
        ],
        whyChooseUs: [
          'Experience structuring complex, multi-department sites',
          'Design that reflects credibility and scale',
          'Built to grow with new pages and sections over time',
          'Dedicated support for larger organizations',
        ],
        faqs: [
          { q: 'Can the site support multiple departments or brands?', a: 'Yes, we structure the information architecture around your departments, brands, or business units from the start.' },
          { q: 'Do you handle content writing too?', a: 'We can assist with structuring and polishing your content, or work with content you already have.' },
          { q: 'Is the site scalable for future pages?', a: 'Yes, our component-based approach makes it easy to add new pages and sections later without redesigning the site.' },
          { q: 'Can you match our existing brand guidelines?', a: 'Yes, we work closely with your brand guidelines for colors, typography, and tone.' },
        ],
        related: ['digital-marketing/seo', 'web-development/website-maintenance', 'web-development/website-redesign'],
      },
      {
        slug: 'e-commerce-website',
        title: 'E-Commerce Website',
        h1: 'E-Commerce Website Development',
        seoTitle: 'E-Commerce Website Development in Chennai | NuerixDigital',
        metaDescription:
          'E-commerce website development in Chennai. Secure checkout, product catalogs, and mobile-optimized online stores built by NuerixDigital.',
        icon: FaShoppingCart,
        tagline: 'Online stores built for smooth browsing and easy checkout.',
        heroDesc:
          'A complete online store with product catalogs, secure checkout, and a shopping experience that keeps customers coming back.',
        about:
          'If you\'re selling products online, a confusing checkout or a slow-loading catalog can cost you sales before a customer ever reaches payment. We provide end-to-end e-commerce website development for retailers and growing brands, making it easy for customers to browse, choose, and buy — with clean product pages, a smooth cart and checkout flow, and secure payment integration. Whether you\'re selling a handful of products or a full catalog, we structure your online store for clarity and speed on every device.',
        features: [
          'Product catalog with categories & filters',
          'Secure payment gateway integration',
          'Cart, checkout & order management',
          'Inventory & product management dashboard',
          'Mobile-optimized shopping experience',
          'SEO-friendly product page structure',
        ],
        whyChooseUs: [
          'End-to-end store setup, from catalog to checkout',
          'Secure, reliable payment integrations',
          'Optimized for conversions, not just aesthetics',
          'Post-launch support for adding products & updates',
        ],
        faqs: [
          { q: 'Which payment gateways do you support?', a: 'We integrate popular gateways like Razorpay, Stripe, and PayPal depending on your region and preference.' },
          { q: 'Can I manage products myself after launch?', a: 'Yes, you get access to a simple product management dashboard to add, edit, or remove products anytime.' },
          { q: 'Is the checkout process mobile-friendly?', a: 'Yes, the entire shopping experience, including checkout, is optimized for mobile devices.' },
          { q: 'Do you support shipping & tax calculations?', a: 'Yes, we configure shipping rules and tax calculations based on your business requirements.' },
        ],
        related: ['digital-marketing/seo', 'digital-marketing/google-ads-ppc', 'digital-marketing/meta-ads'],
      },
      {
        slug: 'portfolio-website',
        title: 'Portfolio Website',
        h1: 'Portfolio Website Development',
        seoTitle: 'Portfolio Website Development in Chennai | NuerixDigital',
        metaDescription:
          'Portfolio website development for designers, photographers, and freelancers. Fast, image-optimized portfolio websites built by NuerixDigital in Chennai.',
        icon: FaUserTie,
        tagline: 'Showcase your work in a design that reflects your craft.',
        heroDesc:
          'A visually striking portfolio website that puts your best work front and center for clients and employers to see.',
        about:
          'A weak or missing portfolio makes it harder for freelancers and creative professionals to showcase their work and earn a potential client\'s trust. Your portfolio should feel like an extension of your work — clean, focused, and memorable. We design portfolio websites for designers, photographers, freelancers, and creative professionals, built around your projects with galleries, case studies, and a personal brand that stands out.',
        features: [
          'Gallery & case-study style project pages',
          'Custom layouts to match your creative style',
          'Fast image loading & optimization',
          'About & resume/CV section',
          'Social & contact links integration',
          'SEO setup to help clients find you',
        ],
        whyChooseUs: [
          'Design-led approach tailored to creative work',
          'Fast, image-heavy pages that still load quickly',
          'Simple to update as you add new projects',
          'Affordable for freelancers & individuals',
        ],
        faqs: [
          { q: 'Can I add new projects myself later?', a: 'Yes, we set up an easy structure so you can add or update projects without needing to touch code.' },
          { q: 'Do you support image-heavy galleries?', a: 'Yes, we optimize all images so your gallery stays fast without losing visual quality.' },
          { q: 'Can the design match my personal brand?', a: 'Absolutely, we tailor colors, typography and layout to reflect your personal or studio brand.' },
          { q: 'Is it suitable for photographers too?', a: 'Yes, the same approach works great for photographers, designers, writers, and other creatives.' },
        ],
        related: ['web-development/business-website', 'web-development/website-redesign', 'digital-marketing/seo'],
      },
      {
        slug: 'landing-page',
        title: 'Landing Page',
        h1: 'Landing Page Development',
        seoTitle: 'Landing Page Development in Chennai | NuerixDigital',
        metaDescription:
          'Landing page development in Chennai. Fast, high-converting landing pages built for Google Ads, Meta Ads, and lead generation campaigns.',
        icon: FaBullseye,
        tagline: 'High-converting landing pages built for a single, focused goal.',
        heroDesc:
          'A focused, high-converting landing page designed to drive sign-ups, sales, or leads for a specific campaign.',
        about:
          'Sending ad traffic to a general homepage often means visitors get distracted and leave before converting. Landing pages solve this by keeping every element focused on one goal. We provide landing page development and design for product launches, ad campaigns, and lead generation — with clear messaging, fast load times, and a call-to-action that\'s impossible to miss, so your marketing spend converts.',
        features: [
          'Single-goal, conversion-focused layout',
          'Fast load speed for ad traffic',
          'Lead capture form or CTA integration',
          'A/B-ready structure for testing',
          'Mobile-optimized for social & ad traffic',
          'Analytics & conversion tracking setup',
        ],
        whyChooseUs: [
          'Built specifically to convert campaign traffic',
          'Quick turnaround for time-sensitive launches',
          'Optimized for Google & Meta ad quality scores',
          'Simple to duplicate for future campaigns',
        ],
        faqs: [
          { q: 'How fast can a landing page be delivered?', a: 'Most landing pages are delivered within 2–4 working days, depending on content readiness.' },
          { q: 'Can this connect to my ad campaigns?', a: 'Yes, we set up tracking so you can measure performance directly from your Google or Meta ad campaigns.' },
          { q: 'Can I reuse the design for future campaigns?', a: 'Yes, we build a reusable template so future campaign pages can be launched faster.' },
          { q: 'Do you write the landing page copy?', a: 'We can help refine your messaging, or work with copy you already have ready.' },
        ],
        related: ['digital-marketing/google-ads-ppc', 'digital-marketing/meta-ads', 'digital-marketing/seo'],
      },
      {
        slug: 'custom-web-application',
        title: 'Custom Web Application',
        h1: 'Custom Web Application Development',
        seoTitle: 'Custom Web Application Development, Chennai | NuerixDigital',
        metaDescription:
          'Custom web application development in Chennai. Tailor-made dashboards, portals, and business software built by NuerixDigital using modern frameworks.',
        icon: FaCogs,
        tagline: 'Tailor-made web apps built around your exact workflow.',
        heroDesc:
          'A custom-built web application designed around your specific business processes, not a one-size-fits-all template.',
        about:
          'Some businesses need more than a website — they need software, like booking systems, CRMs, or client portals built around how they actually work. We build custom web applications using modern frameworks like React, with dashboards, user roles, databases, and integrations tailored to how your business actually works, from internal tools to customer-facing platforms.',
        features: [
          'Custom-built with modern frameworks (React & more)',
          'User roles, authentication & dashboards',
          'Database design & API integrations',
          'Scalable architecture for future features',
          'Admin panel for managing data',
          'Cloud hosting & deployment setup',
        ],
        whyChooseUs: [
          'Solutions built around your actual workflow',
          'Modern, maintainable, scalable codebase',
          'Clear scoping before development begins',
          'Ongoing development & support available',
        ],
        faqs: [
          { q: 'What kind of applications can you build?', a: 'From internal dashboards and booking systems to custom CRMs and client portals, we scope and build based on your requirements.' },
          { q: 'How long does a custom application take?', a: 'Timelines vary by complexity, typically ranging from a few weeks to a few months. We provide a clear estimate after scoping.' },
          { q: 'Can you integrate with tools we already use?', a: 'Yes, we regularly integrate with third-party APIs, payment systems, and existing business tools.' },
          { q: 'Do you offer ongoing maintenance?', a: 'Yes, we offer maintenance and feature-development plans after your application launches.' },
        ],
        related: ['web-development/business-website', 'web-development/website-maintenance', 'digital-marketing/seo'],
      },
      {
        slug: 'website-redesign',
        title: 'Website Redesign',
        h1: 'Website Redesign Services',
        seoTitle: 'Website Redesign Services in Chennai | NuerixDigital',
        metaDescription:
          'Website redesign services that modernize your site\'s design, speed, and usability while protecting your existing SEO rankings and URLs.',
        icon: FaSyncAlt,
        tagline: 'Modernize an outdated site without losing your SEO.',
        heroDesc:
          'A modern redesign of your existing website that improves speed, design, and usability, while protecting your search rankings.',
        about:
          'An outdated website can quietly cost you customers, whether it\'s a design that no longer matches your brand, a layout that struggles on mobile, or pages that have simply grown slow and clunky over time. A redesign makes sense once your site starts feeling like it\'s working against you instead of for you. Our website redesign services give existing websites a modern look, faster performance, and better mobile usability, while carefully preserving your existing SEO rankings, URLs, and content value throughout the transition. We start with an audit of the current site to understand what\'s working, what isn\'t, and what needs to carry over, then rebuild the design and structure around that so nothing important gets lost in the process.',
        features: [
          'Modern, refreshed design & UX',
          'Improved page speed & performance',
          'SEO-safe migration (rankings preserved)',
          'Mobile responsiveness overhaul',
          'Updated content structure & navigation',
          'Before/after performance comparison',
        ],
        whyChooseUs: [
          'SEO-conscious process to protect your rankings',
          'Careful audit before any changes are made',
          'Modern design without losing brand recognition',
          'Minimal downtime during the transition',
        ],
        faqs: [
          { q: 'Will I lose my search rankings during redesign?', a: 'No, we follow an SEO-safe redesign process, preserving URLs, redirects, and content structure to protect your rankings.' },
          { q: 'Can you redesign a site not built by you originally?', a: 'Yes, we regularly redesign websites built on other platforms or by other developers.' },
          { q: 'How long does a redesign take?', a: 'Most redesigns take 1–3 weeks depending on the size and complexity of the existing site.' },
          { q: 'Will the new site be mobile-friendly?', a: 'Yes, improving mobile responsiveness is a core part of every redesign we deliver.' },
        ],
        related: ['web-development/website-maintenance', 'digital-marketing/seo', 'web-development/business-website'],
      },
      {
        slug: 'website-maintenance',
        title: 'Website Maintenance',
        h1: 'Website Maintenance Services',
        seoTitle: 'Website Maintenance Services in Chennai | NuerixDigital',
        metaDescription:
          'Website maintenance services covering updates, security monitoring, backups, and support so your website stays fast, secure, and reliable.',
        icon: FaTools,
        tagline: 'Ongoing updates and monitoring so your site stays reliable.',
        heroDesc:
          'Reliable, ongoing website maintenance so your site stays fast, secure, and up to date without you having to worry about it.',
        about:
          'A website isn\'t a one-time project — it needs regular care to stay secure and perform well. That matters most for businesses that don\'t have an in-house developer to keep an eye on things, or that update pricing, offers, and content often enough that small changes keep piling up. Our website maintenance services cover updates, monitoring, backups, and small content changes, so your website keeps running smoothly while you focus on your business. Rather than waiting for something to break, we monitor uptime and performance in the background and handle security patches as they come up, so issues get caught early instead of turning into downtime.',
        features: [
          'Regular content & feature updates',
          'Security monitoring & patching',
          'Automated backups',
          'Uptime & performance monitoring',
          'Bug fixes & small change requests',
          'Monthly health & performance reports',
        ],
        whyChooseUs: [
          'Proactive monitoring, not just reactive fixes',
          'Fast turnaround on update requests',
          'Flexible monthly & annual plans',
          'One point of contact for all site issues',
        ],
        faqs: [
          { q: 'What\'s included in a maintenance plan?', a: 'Plans typically include updates, security monitoring, backups, and a set number of monthly content changes.' },
          { q: 'How quickly do you respond to issues?', a: 'Maintenance plan clients get priority response times, typically within 24 hours for most requests.' },
          { q: 'Can I request design changes under maintenance?', a: 'Small content and design tweaks are included; larger redesign work is scoped separately.' },
          { q: 'Do you maintain sites you didn\'t originally build?', a: 'Yes, we can take over maintenance for existing websites after a quick technical review.' },
        ],
        related: ['web-development/business-website', 'web-development/website-redesign', 'digital-marketing/seo'],
      },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: FaMobileAlt,
    blurb: 'Native Android apps designed for performance and a smooth user experience.',
    items: [
      {
        slug: 'android-app-development',
        title: 'Android App Development',
        h1: 'Android App Development',
        seoTitle: 'Android App Development Company in Chennai | NuerixDigital',
        metaDescription:
          'Android app development company in Chennai. Custom Android apps designed, developed, tested, and published to the Play Store by NuerixDigital.',
        icon: FaAndroid,
        tagline: 'Reliable Android apps built to perform and scale.',
        heroDesc:
          'A custom Android application built around your business needs, from concept and design through to a Play Store-ready release.',
        about:
          'A mobile app lets you reach customers directly on their phones, build repeat engagement, and offer experiences a website alone can\'t match. As an Android app development company, we design and develop Android applications that are fast, intuitive, and built to scale. From initial concept and UI/UX design to development, testing, and Play Store submission, our Android app developers handle the full app development lifecycle so you get a polished product your users will enjoy using.',
        features: [
          'Custom UI/UX design for Android',
          'Native performance & smooth navigation',
          'Backend & API integration',
          'Push notifications & user engagement tools',
          'App testing across multiple devices',
          'Play Store submission support',
        ],
        whyChooseUs: [
          'Full-cycle development, from design to launch',
          'Performance-focused, tested across devices',
          'Clear communication throughout the project',
          'Post-launch support & feature updates',
        ],
        faqs: [
          { q: 'Do you also design the app UI/UX?', a: 'Yes, we design the complete user interface and experience before development begins, so you can review it early.' },
          { q: 'Will you publish the app to the Play Store?', a: 'Yes, we assist with the entire Play Store submission and publishing process.' },
          { q: 'Can the app connect to my existing website or system?', a: 'Yes, we build API integrations to connect your app with existing systems, databases, or your website.' },
          { q: 'Do you provide support after the app is live?', a: 'Yes, we offer ongoing support and update plans to keep your app running smoothly after launch.' },
        ],
        related: ['web-development/business-website', 'web-development/website-maintenance', 'digital-marketing/seo'],
      },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: FaBullhorn,
    blurb: 'Data-driven strategies to help you get found, get clicks, and get customers.',
    items: [
      {
        slug: 'seo',
        title: 'SEO Services',
        h1: 'SEO Company in Chennai',
        seoTitle: 'SEO Company in Chennai | SEO Services | NuerixDigital',
        metaDescription:
          'SEO company in Chennai offering keyword research, on-page and technical SEO, and local SEO services to help your website rank higher.',
        icon: FaSearchDollar,
        tagline: 'Rank higher and get found by the right customers.',
        heroDesc:
          'Search engine optimization that helps your website rank higher, attract organic traffic, and convert visitors into customers.',
        about:
          'If your website isn\'t showing up when potential customers search for your products or services, you\'re relying entirely on other channels to bring in business. SEO is a long-term investment in getting found by people already searching for what you offer. As an SEO company in Chennai, we handle on-page optimization, technical SEO, keyword research, and content structure to steadily improve your website rankings and drive consistent, organic traffic to your site.',
        features: [
          'In-depth keyword research & strategy',
          'On-page SEO (titles, meta, structure)',
          'Technical SEO audits & fixes',
          'Local SEO & Google Business optimization',
          'Content optimization recommendations',
          'Monthly ranking & traffic reports',
        ],
        whyChooseUs: [
          'Transparent, white-hat SEO practices only',
          'Regular reporting so you see real progress',
          'Strategy tailored to your industry & competitors',
          'Focus on rankings that drive actual leads',
        ],
        faqs: [
          { q: 'How long does SEO take to show results?', a: 'SEO is a gradual process; most businesses start seeing meaningful improvement within 3–6 months, depending on competition.' },
          { q: 'Do you guarantee a #1 ranking?', a: 'No ethical SEO provider can guarantee exact rankings, but we focus on sustainable strategies that consistently improve visibility.' },
          { q: 'Is local SEO included?', a: 'Yes, Google Business Profile optimization and local SEO are part of our standard SEO service.' },
          { q: 'Will I receive regular reports?', a: 'Yes, you\'ll receive monthly reports covering rankings, traffic, and key SEO metrics.' },
        ],
        related: ['web-development/business-website', 'web-development/e-commerce-website', 'digital-marketing/google-ads-ppc', 'digital-marketing/meta-ads'],
      },
      {
        slug: 'google-ads-ppc',
        title: 'Google Ads (PPC)',
        h1: 'Google Ads & PPC Management',
        seoTitle: 'Google Ads & PPC Management in Chennai | NuerixDigital',
        metaDescription:
          'Google Ads agency in Chennai offering PPC management, search, display, and shopping campaigns, and conversion tracking for qualified leads.',
        icon: FaGoogle,
        tagline: 'Targeted ad campaigns that put you in front of ready buyers.',
        heroDesc:
          'Google Ads campaigns built and managed to get you qualified clicks and leads, with your budget spent where it counts.',
        about:
          'Pay-per-click advertising can deliver fast, measurable results when it\'s set up right, which makes it a good fit for businesses that need leads now rather than waiting months for organic SEO to build up. As a Google Ads agency in Chennai, we plan, launch, and manage Google Ads campaigns — search, display, and shopping — with careful keyword targeting, ad copy, and ongoing optimization to keep your cost-per-lead as low as possible. We also pay attention to where that traffic lands, since a campaign only converts as well as the page behind it, and adjust targeting and budgets on an ongoing basis as we see what\'s actually driving results.',
        features: [
          'Campaign strategy & keyword targeting',
          'Search, display & shopping ad setup',
          'Compelling ad copy & creative',
          'Conversion tracking & landing page alignment',
          'Ongoing bid & budget optimization',
          'Transparent performance reporting',
        ],
        whyChooseUs: [
          'Focused on ROI, not just impressions',
          'Continuous campaign monitoring & optimization',
          'Full transparency on ad spend & performance',
          'Aligned landing pages for higher conversions',
        ],
        faqs: [
          { q: 'What budget do I need to get started?', a: 'Budgets vary by industry and goals; we help you determine a starting budget that makes sense for your business.' },
          { q: 'How soon can campaigns go live?', a: 'Campaigns can typically be planned and launched within a few working days once targeting and creative are finalized.' },
          { q: 'Do you manage the ad budget for me?', a: 'We manage campaign setup, targeting, and optimization; ad spend is billed directly by Google to your account for full transparency.' },
          { q: 'Will I get performance reports?', a: 'Yes, you\'ll receive regular reports covering clicks, conversions, cost-per-lead, and recommendations.' },
        ],
        related: ['web-development/landing-page', 'digital-marketing/seo', 'digital-marketing/meta-ads'],
      },
      {
        slug: 'meta-ads',
        title: 'Meta Ads',
        h1: 'Meta Ads Management',
        seoTitle: 'Meta Ads Management in Chennai | NuerixDigital',
        metaDescription:
          'Meta Ads agency in Chennai managing Facebook and Instagram advertising campaigns, from audience targeting to creative and performance reporting.',
        icon: FaFacebookF,
        tagline: 'Facebook & Instagram ad campaigns that reach the right audience.',
        heroDesc:
          'Facebook and Instagram advertising campaigns designed to build awareness, generate leads, and drive sales.',
        about:
          'Meta\'s platforms offer powerful targeting to reach exactly the audience you want, based on location, interests, demographics, and behavior, which makes them useful whether you\'re trying to build awareness or drive direct sales. As a Meta Ads agency, we build and manage Facebook and Instagram ad campaigns, from audience research and creative design to ongoing optimization, so your ad spend consistently drives real business results. We set up proper Pixel and conversion tracking from the start so every campaign is measurable, and test creatives and audiences against each other rather than guessing at what will perform.',
        features: [
          'Audience research & precise targeting',
          'Facebook & Instagram ad creative',
          'Campaign setup across objectives (leads, sales, reach)',
          'Pixel & conversion tracking setup',
          'A/B testing of creatives & audiences',
          'Regular performance reporting',
        ],
        whyChooseUs: [
          'Targeting built around your ideal customer',
          'Creative designed to stop the scroll',
          'Continuous testing to improve performance',
          'Clear reporting tied to business outcomes',
        ],
        faqs: [
          { q: 'Do you design the ad creatives too?', a: 'Yes, we design ad creatives and copy tailored to your brand and campaign objective.' },
          { q: 'Can you target a specific local audience?', a: 'Yes, we can target by location, interests, demographics, and behavior to reach your ideal local or national audience.' },
          { q: 'Which objectives can you run campaigns for?', a: 'We run campaigns for awareness, traffic, lead generation, engagement, and sales, based on your goals.' },
          { q: 'How is performance tracked?', a: 'We set up the Meta Pixel and conversion tracking so every result is measurable and reported clearly.' },
        ],
        related: ['digital-marketing/google-ads-ppc', 'digital-marketing/seo', 'web-development/landing-page'],
      },
      {
        slug: 'email-marketing',
        title: 'Email Marketing',
        h1: 'Email Marketing Services',
        seoTitle: 'Email Marketing Services in Chennai | NuerixDigital',
        metaDescription:
          'Email marketing services covering campaign design, list segmentation, and automated nurture sequences to keep customers engaged and drive repeat business.',
        icon: FaEnvelopeOpenText,
        tagline: 'Stay top of mind with campaigns that nurture and convert.',
        heroDesc:
          'Email marketing campaigns and automation that nurture leads, retain customers, and drive repeat business.',
        about:
          'Email remains one of the highest-ROI marketing channels when done right, and it\'s especially valuable for businesses that already have an existing customer or lead list they aren\'t doing much with yet. We design email campaigns and automated sequences — welcome series, promotions, newsletters — that keep your audience engaged and guide them toward becoming loyal customers. That starts with how your list is segmented, since a promotion or newsletter lands differently depending on who\'s receiving it, and continues with testing subject lines and content so each campaign performs a little better than the last.',
        features: [
          'Custom-designed email templates',
          'List building & segmentation strategy',
          'Automated welcome & nurture sequences',
          'Promotional & newsletter campaigns',
          'A/B testing for subject lines & content',
          'Open rate & click-through reporting',
        ],
        whyChooseUs: [
          'Templates designed to match your brand',
          'Automation that saves you ongoing effort',
          'Data-driven testing to improve engagement',
          'Clear reporting on every campaign sent',
        ],
        faqs: [
          { q: 'Do I need an existing email list to start?', a: 'No, we can help you build a list-growth strategy alongside your campaigns if you\'re starting from scratch.' },
          { q: 'Can you set up automated email sequences?', a: 'Yes, we build automated sequences like welcome series, abandoned cart, and re-engagement flows.' },
          { q: 'Which email platforms do you work with?', a: 'We work with popular platforms and can recommend the best fit based on your budget and requirements.' },
          { q: 'How do I know if campaigns are working?', a: 'You\'ll receive regular reports on open rates, click-through rates, and campaign performance trends.' },
        ],
        related: ['digital-marketing/seo', 'digital-marketing/analytics-reporting', 'digital-marketing/google-ads-ppc'],
      },
      {
        slug: 'analytics-reporting',
        title: 'Analytics & Reporting',
        h1: 'Analytics & Reporting Services',
        seoTitle: 'Analytics & Reporting Services in Chennai | NuerixDigital',
        metaDescription:
          'Analytics and reporting services covering Google Analytics setup, conversion tracking, and clear monthly reports on your website and marketing performance.',
        icon: FaChartLine,
        tagline: 'Clear insights into what\'s working and what to fix next.',
        heroDesc:
          'Analytics setup and reporting that turns your website and marketing data into clear, actionable insights.',
        about:
          'Marketing decisions are only as good as the data behind them, and that gets harder to keep track of once a business is running a website alongside ads, social, or email at the same time. We set up analytics tracking across your website and ad platforms, then translate the numbers into clear, easy-to-understand reports so you always know what\'s working and where to focus next. Rather than handing over raw numbers, we focus on tying tracking back to the goals that actually matter for your business — enquiries, sign-ups, or sales — and building dashboards and reports around those.',
        features: [
          'Google Analytics & tag manager setup',
          'Conversion & goal tracking configuration',
          'Custom dashboards for key metrics',
          'Cross-channel performance reporting',
          'Actionable insights & recommendations',
          'Scheduled monthly reporting',
        ],
        whyChooseUs: [
          'Data presented in plain, actionable language',
          'Setup covering website, ads & campaigns',
          'Recommendations, not just raw numbers',
          'Consistent, scheduled reporting cadence',
        ],
        faqs: [
          { q: 'What tools do you use for analytics?', a: 'We primarily use Google Analytics and Google Tag Manager, along with platform-native reporting tools for ads.' },
          { q: 'Will I get a dashboard I can check anytime?', a: 'Yes, we can set up a custom dashboard so you can check key metrics whenever you need to.' },
          { q: 'Can you audit our existing analytics setup?', a: 'Yes, we regularly audit existing tracking setups to fix gaps and ensure data accuracy.' },
          { q: 'How often will I receive reports?', a: 'Standard reporting is monthly, with the option for more frequent updates depending on your plan.' },
        ],
        related: ['digital-marketing/seo', 'digital-marketing/google-ads-ppc', 'digital-marketing/meta-ads'],
      },
    ],
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    icon: FaHashtag,
    blurb: 'Grow your brand and engage your audience across social platforms.',
    items: [
      {
        slug: 'instagram-marketing',
        title: 'Instagram Marketing',
        h1: 'Instagram Marketing Services',
        seoTitle: 'Instagram Marketing Services in Chennai | NuerixDigital',
        metaDescription:
          'Instagram marketing services covering content strategy, post and reel design, and community management to grow your following and engagement.',
        icon: FaInstagram,
        tagline: 'Grow a scroll-stopping presence on Instagram.',
        heroDesc:
          'Instagram content, strategy, and management designed to grow your following and turn engagement into real business.',
        about:
          'Instagram is where brands build personality and connect directly with their audience, which makes it a natural fit for businesses that have a visual product, service, or story to tell and want to build trust before someone ever reaches out. We handle content planning, design, posting, and community engagement, building a consistent Instagram presence that grows your following and supports your wider marketing goals. Each month starts with a content calendar you review and approve, so you always know what\'s going out before it\'s posted, and we manage the day-to-day comments and messages so your page stays active between posts.',
        features: [
          'Content strategy & monthly content calendar',
          'Custom post & reel design',
          'Caption writing & hashtag strategy',
          'Community management & engagement',
          'Instagram ads support (optional)',
          'Monthly growth & engagement reporting',
        ],
        whyChooseUs: [
          'Content designed to match your brand identity',
          'Consistent posting so your page never goes quiet',
          'Strategy focused on real engagement, not just likes',
          'Reporting that shows genuine growth over time',
        ],
        faqs: [
          { q: 'Do you create the content or just post it?', a: 'We handle full content creation, including design, captions, and hashtag strategy, then manage posting and engagement.' },
          { q: 'How many posts are included per month?', a: 'Posting frequency depends on your plan; we\'ll recommend a cadence based on your goals and budget.' },
          { q: 'Can you run Instagram ads too?', a: 'Yes, Instagram ads can be added alongside organic content management for faster growth.' },
          { q: 'Will I approve content before it\'s posted?', a: 'Yes, we share a content calendar for your review and approval before anything goes live.' },
          { q: 'How much should I budget for Instagram marketing?', a: 'Investment depends on factors like your goals, content requirements, posting frequency, and whether you\'re adding paid ads on top of organic management. We\'ll recommend a scope that fits your budget after understanding your needs.' },
        ],
        related: ['social-media-marketing/facebook-marketing', 'digital-marketing/meta-ads', 'digital-marketing/seo'],
      },
      {
        slug: 'facebook-marketing',
        title: 'Facebook Marketing',
        h1: 'Facebook Marketing Services',
        seoTitle: 'Facebook Marketing Services in Chennai | NuerixDigital',
        metaDescription:
          'Facebook marketing services covering page management, content planning, and community engagement to build trust and consistent business results.',
        icon: FaFacebookF,
        tagline: 'Build community and drive results on Facebook.',
        heroDesc:
          'Facebook page management and content strategy that builds community, trust, and consistent business results.',
        about:
          'Facebook remains a powerful platform for building trust and reaching a wide, engaged audience, particularly for businesses whose customers still rely on it for recommendations, local groups, and direct messages. We manage your Facebook page with a consistent content strategy, community engagement, and optional advertising support, keeping your brand active and connected with your audience. That includes taking over an existing page or setting one up from scratch, planning and scheduling content around what performs on the platform, and responding to comments and messages so enquiries don\'t go unanswered.',
        features: [
          'Facebook page setup & optimization',
          'Content planning & scheduled posting',
          'Community engagement & message responses',
          'Event & offer promotion support',
          'Facebook ads support (optional)',
          'Monthly performance reporting',
        ],
        whyChooseUs: [
          'Consistent presence that keeps your audience engaged',
          'Content tailored to what performs on Facebook',
          'Responsive community management',
          'Clear reporting tied to real engagement metrics',
        ],
        faqs: [
          { q: 'Can you manage an existing Facebook page?', a: 'Yes, we can take over management of your existing page or help set up a new one from scratch.' },
          { q: 'Do you respond to comments and messages?', a: 'Yes, community engagement including comments and messages is part of our management service.' },
          { q: 'Can this be combined with Instagram marketing?', a: 'Yes, many clients combine Facebook and Instagram management for a consistent cross-platform strategy.' },
          { q: 'Is advertising included?', a: 'Organic content management is the core service; Facebook ads can be added as an optional add-on.' },
          { q: 'How much should I budget for Facebook marketing?', a: 'Investment depends on factors like your campaign goals, audience size, content requirements, posting frequency, and any advertising spend if you add Facebook ads. We\'ll recommend a scope that fits your budget after understanding your needs.' },
        ],
        related: ['social-media-marketing/instagram-marketing', 'digital-marketing/meta-ads', 'digital-marketing/seo'],
      },
    ],
  },
]

// Flat lookup helpers -------------------------------------------------

export function getCategory(categorySlug) {
  return serviceCategories.find((c) => c.slug === categorySlug)
}

export function getService(categorySlug, serviceSlug) {
  const category = getCategory(categorySlug)
  if (!category) return null
  const service = category.items.find((s) => s.slug === serviceSlug)
  if (!service) return null
  return { ...service, category }
}

// Used for sitemap generation / "all services" listings
export const allServiceRoutes = serviceCategories.flatMap((category) =>
  category.items.map((item) => ({
    path: `/services/${category.slug}/${item.slug}`,
    title: item.title,
    category: category.title,
  }))
)
