const servicesData = [
  {
    title: "Scope of Work",
    description: "Get a structured roadmap for project success.",
    linkText: "Claim Now",
    link: "sow",
    formFields: [
      { name: "Project Name", label: "Project Name", type: "text" },
      {
        name: "Project Type",
        label: "Type of Project",
        type: "select",
        options: ["Web Development", "Mobile App Development", "UI/UX Design", "Marketing", "Other"]
      },
      { name: "Estimated Budget", label: "Estimated Budget (in INR)", type: "number" },
    ],
  },
  {
    title: "SEO Report",
    description: "Improve rankings and increase organic website traffic.",
    linkText: "Analyze Now",
    link: "seo-report",
    formFields: [
      { name: "Website Url", label: "Website URL", type: "text" },
      { name: "Primary Target Keywords", label: "Primary Keywords Targeted", type: "textarea" },
      { name: "Competitor Websites", label: "Competitor Websites", type: "textarea" },
    ],
  },
  {
    title: " Social Media Audit",
    description: "Optimize engagement, reach, and brand performance online.",
    linkText: "Get Strategy",
    link: "social-media-strategy",
    formFields: [
      { name: "Social Media Profiles Links", label: "Social Media Profiles (Links to Accounts)", type: "textarea" },
      {
        name: "Preferred Platform",
        label: "Main Challenges Faced",
        type: "select",
        options: ["Low Engagement", "Visibility", "Branding", "others"]
      },
      { name: "Competitor Social Media Links", label: "Competitor Social Media Handles", type: "textarea" },
    ],
  },
  {
    title: " Business Proposal",
    description: "Create compelling proposals to attract clients and investors.",
    linkText: "Get Proposal",
    link: "business-proposal",
    formFields: [
      {
        name: "Nature of Business Proposal",
        label: "Nature of Business Proposal",
        type: "select",
        options: ["Partnership", "Investment", "Sales", "others"]
      },
      { name: "Proposal Objective", label: "Proposal Objective", type: "textarea" },
      {
        name: "Target Audience ",
        label: "Target Audience ",
        type: "select",
        options: ["Investors", "Clients", "Partners", "others"]
      },
      { name: "Key Highlights of Business", label: "Key Highlights of Your Business", type: "textarea" },
    ],
  },
  {
    title: " Competition Analysis ",
    description: "Analyze competitors and refine your business strategy.",
    linkText: "Get It Free",
    link: "competition-analysis",
    formFields: [
      { name: "Competitor Businesses/Websites", label: "List of Competitor Businesses/Websites", type: "textarea" },
      { name: "Business’s USP", label: "Your Business’s Unique Selling Proposition (USP)", type: "textarea" },
      {
        name: "Specific Competitor Insights Required",
        label: "Specific Competitor Insights Needed",
        type: "select",
        options: ["Pricing", " Social Media Strategy", "Other"]
      },
    ],
  },

  {
    title: " MVP Development Plan ",
    description: "Define core features for a successful product launch.",
    linkText: "Claim Now",
    link: "company-profile-proposal",
    formFields: [
      { name: "Project Name & Concept", label: "Project Name & Concept", type: "textarea" },
      { name: "Core Problem the MVP Solves", label: "Core Problem the MVP Solves", type: "textarea" },
      { name: "Essential Features for MVP", label: "Essential Features for MVP", type: "textarea" },
      { name: "Target Users & Market", label: "Target Users & Market", type: "textarea" },
      { name: "Preferred Development Timeline", label: "Preferred Development Timeline", type: "textarea" },
    ],
  },

  {
    title: " UI/UX Website Review",
    description: "Enhance design, usability, and user experience effectively.",
    linkText: "Review Now",
    link: "uiux-review",
    formFields: [
      { name: "Website Url", label: "Website URL", type: "text" },
      { name: "Target Audience & Key User Actions", label: "Target Audience & Key User Actions", type: "textarea" },
      {
        name: "Primary Concerns",
        label: "Primary Concerns",
        type: "select",
        options: ["Navigation", "Design", "User Flow", "Mobile Responsiveness", "others"]
      },
    ],
  },

  {
    title: " Business Consultancy Audit",
    description: "Improve business strategies for better growth opportunities.",
    linkText: "Audit Now",
    link: "website-audit",
    formFields: [
      { name: "Business Model Overview", label: "Business Model Overview", type: "textarea" },
      { name: "Current Challenges & Pain Points", label: "Current Challenges & Pain Points", type: "textarea" },
      {
        name: "Key Areas Needing Improvement",
        label: "Key Areas Needing Improvement",
        type: "select",
        options: ["Sales", "Marketing", "Operations", "others"]
      },
      { name: "Short-term & Long-term Business Goals", label: "Short-term & Long-term Business Goals", type: "textarea" },
    ],
  },


  {
    title: " Digital Marketing Strategy Proposal",
    description: "Boost traffic, conversions, and brand visibility online.",
    linkText: "Audit Now",
    link: "website-audit",
    formFields: [
      {
        name: "Primary Goals",
        label: "Primary Goals",
        type: "select",
        options: ["Brand Awareness", "Lead Generation", "Sales", "others"]
      },
      {
        name: "Preferred Marketing Channels",
        label: "Preferred Marketing Channels",
        type: "select",
        options: ["SEO", "PPC", "Social Media", "Email", "others"]
      },
      { name: "Time period", label: "Time period", type: "text" },
    ],
  },

  {
    title: " Website Development Proposal",
    description: "Plan and structure your website for success.",
    linkText: "Get Proposal",
    link: "website-development-proposal",
    formFields: [
      {
        name: "Website Type",
        label: "Website Type",
        type: "select",
        options: ["E-commerce", "Portfolio", "SaaS", "others"]
      },
      { name: "Core Features Required", label: "Core Features Required", type: "textarea" },
      {
        name: "Preferred Design Style",
        label: "Preferred Design Style",
        type: "select",
        options: ["Minimalist", "Modern", "Bold", "others"]
      },
      { name: "Budget ", label: "Budget (in INR)", type: "number" },
      { name: "Reference Websites", label: "Reference Websites", type: "textarea" },
    ],
  },
  {
    title: "  App Development Consultation",
    description: "Get expert guidance for successful app development.",
    linkText: "Get Proposal",
    link: "business-proposal",
    formFields: [
      { name: "App Idea/Concept Overview", label: "App Idea/Concept Overview", type: "textarea" },
      { name: "Target Audience", label: "Target Audience", type: "textarea" },
      { name: "Key Features Required", label: "Key Features Needed in App", type: "textarea" },
      {
        name: "Preferred Platform",
        label: "Your Preferred Platform",
        type: "select",
        options: ["iOS", "Android", "Hybrid"]
      },
    ],

  },
  {
    title: " Content Marketing Strategy Plan",
    description: "Develop engaging content that attracts and converts.",
    linkText: "Get Strategy",
    link: "content-marketing-strategy",
    formFields: [
      { name: "Target Audience & Industry", label: "Target Audience & Industry", type: "textarea" },
      {
        name: "Preferred Content Types",
        label: "Preferred Content Types",
        type: "select",
        options: ["Blogs", "Videos", "Infographics", "others"]
      },
      {
        name: "Content Goals ",
        label: "Content Goals ",
        type: "select",
        options: ["Engagement", "Brand Awareness", "SEO", "others"]
      },
      { name: "Reference Content Strategies", label: "Reference Content Strategies", type: "textarea" },
    ],
  },

];

export default servicesData;
