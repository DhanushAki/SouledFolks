export const siteConfig = {
  title: 'SouledFolks - Compassionate Support',
  description: 'A sanctuary for healing, growth, and connection through compassionate mental health support',
  author: 'SouledFolks',
  email: 'hello@souledfolks.com',
  phone: '+1 (555) 123-4567',
  
  // Social links
  social: {
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
  },

  // Navigation
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy' },
  ],

  // Hero section
  hero: {
    title: 'Your Healing Journey Matters',
    subtitle: 'A compassionate space where you are truly heard and supported',
    cta: 'Begin Your Journey',
    ctaLink: '/contact',
  },

  // Services
  services: [
    {
      id: 'therapy',
      title: 'Compassionate Listening',
      description: 'One-on-one sessions where your story is heard with deep care and understanding',
      icon: '🫂',
    },
    {
      id: 'group',
      title: 'Community & Connection',
      description: 'Safe spaces to connect with others walking similar paths',
      icon: '🌟',
    },
    {
      id: 'crisis',
      title: 'Crisis Support',
      description: '24/7 immediate care when you need it most',
      icon: '💙',
    },
    {
      id: 'coaching',
      title: 'Growth & Wellness',
      description: 'Gentle guidance towards emotional wellbeing and self-discovery',
      icon: '🌱',
    },
  ],

  // Pricing - REMOVED to keep focus on compassion over business
  pricing: [],

  // FAQ
  faq: [
    {
      question: 'How do I take the first step?',
      answer: 'We believe the first step is the hardest, but also the most important. Reach out to us - no pressure, just genuine support. We\'ll meet you exactly where you are.',
    },
    {
      question: 'Is what I share truly private?',
      answer: 'Yes. Your trust is sacred to us. We honor the deepest confidentiality and comply with all privacy regulations. Your story is yours alone.',
    },
    {
      question: 'Can I access support from anywhere?',
      answer: 'Yes. We offer both in-person and secure online sessions so you can find support in the way that feels most comfortable for you.',
    },
    {
      question: 'What if I\'m in crisis right now?',
      answer: 'We\'re here immediately. Contact us or reach our 24/7 crisis line. You don\'t have to go through this alone.',
    },
    {
      question: 'How long does healing take?',
      answer: 'Every journey is unique. We focus on your pace, not timelines. Progress matters more than speed.',
    },
    {
      question: 'What if I\'m unsure if this is right for me?',
      answer: 'That\'s completely okay. Many people feel uncertain. Let\'s talk - we can help you figure out what support looks like for you.',
    },
  ],

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} SouledFolks. Caring hearts in action.`,
    description: 'A compassionate space for healing and growth',
  },
};
