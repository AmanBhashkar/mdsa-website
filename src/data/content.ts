export const NAV = {
  brand: { short: 'MDSA', long: 'UrVillage' },
  links: [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'News', href: '#news' },
    { label: 'Contact Us', href: '#contact' },
  ],
  cta: { label: 'Get Started', href: '#contact' },
}

export const HERO = {
  headline: 'Empowering Agriculture, Optimizing Supply Chains.',
  body: 'We bridge the gap between farmers, processors, and markets — delivering reliable commodity trading, procurement, and logistics solutions across the agricultural value chain.',
  primaryCta: { label: 'Get Started', href: '#contact' },
  secondaryCta: { label: 'Learn More', href: '#about' },
}

export const STATS = {
  heading: 'Rooted in Growth, Driven by Results',
  body: 'Our track record speaks for itself. From grassroots farmer empowerment to enterprise-level supply chain optimization, we deliver measurable impact across every market we serve.',
  items: [] as { value: string; label: string }[],
}

export const SERVICES = {
  heading: 'Core Services',
  items: [
    {
      id: 'trading',
      title: 'Agri Commodity Trading & Distribution',
      body: 'We facilitate efficient trading and distribution of agricultural commodities, ensuring fair prices for farmers and consistent supply for buyers across key markets.',
      icon: 'globe',
    },
    {
      id: 'logistics',
      title: 'Commodity Procurement & Logistics',
      body: 'End-to-end procurement and logistics solutions that streamline your supply chain, reduce costs, and ensure timely delivery of agricultural products.',
      icon: 'truck',
    },
    {
      id: 'advisory',
      title: 'Market Intelligence & Advisory',
      body: 'Data-driven insights and strategic advisory services to help agri-businesses navigate market volatility and make informed procurement decisions.',
      icon: 'chart',
    },
  ],
}

export const WHY_CHOOSE_US = {
  heading: 'Why Choose Us',
  items: [
    { title: 'Industry Expertise', body: 'Two decades of experience in agricultural commodities and supply chain management across emerging markets.', icon: 'briefcase' },
    { title: 'End-to-End Solutions', body: 'From farm gate to market, we manage the complete value chain so you can focus on growing your business.', icon: 'link' },
    { title: 'Trusted Network', body: 'A reliable network of farmers, processors, logistics providers, and buyers built over years of partnerships.', icon: 'users' },
    { title: 'Data-Driven Insights', body: 'Real-time market intelligence and analytics to keep you ahead of price movements and market trends.', icon: 'bar-chart' },
    { title: 'Quality & Compliance', body: 'Rigorous quality standards and regulatory compliance across all commodity handling and distribution processes.', icon: 'shield' },
    { title: 'Sustainable Practices', body: 'Committed to environmentally responsible agricultural practices that support long-term food system resilience.', icon: 'leaf' },
  ],
}

export const CTA_SECTION = {
  heading: 'Ready to transform the agricultural landscape?',
  body: 'Partner with MDSA AgroSage to unlock new markets, streamline your supply chain, and grow sustainably.',
  button: { label: 'Get Started Today', href: '#contact' },
}

export const FOOTER = {
  brand: { short: 'MDSA', long: 'AgroSage' },
  tagline: 'Empowering Agriculture, Optimizing Supply Chains.',
  columns: [
    {
      heading: 'Quick Links',
      links: [
        { label: 'Home', href: '#' },
        { label: 'About Us', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'News', href: '#news' },
      ],
    },
    {
      heading: 'Services',
      links: [
        { label: 'Commodity Trading', href: '#services' },
        { label: 'Procurement & Logistics', href: '#services' },
        { label: 'Market Advisory', href: '#services' },
      ],
    },
    {
      heading: 'Contact',
      links: [
        { label: 'info@mdsaurvillage.com', href: 'mailto:info@mdsaurvillage.com' },
        { label: '+91-9876543210', href: 'tel:+91-9876543210' },
        { label: 'LinkedIn', href: '#' },
      ],
    },
  ],
  copyright: '© 2026 MDSA AgroSage. All rights reserved.',
}
