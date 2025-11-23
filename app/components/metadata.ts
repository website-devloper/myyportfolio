// SEO Metadata Configuration
export const siteConfig = {
    name: "Fatima Zahra Sabbar - Portfolio",
    title: "Fatima Zahra Sabbar | Full Stack Developer & IT Solutions Expert",
    description: "Professional Full Stack Developer specializing in modern web development, IT services, WordPress development, and automation workflows. Delivering business websites, tools, and automations that drive results.",
    url: "https://yourportfolio.com", // Replace with your actual domain
    ogImage: "https://yourportfolio.com/og-image.jpg", // Replace with your actual OG image
    keywords: [
        "Full Stack Developer",
        "Web Development",
        "IT Services",
        "WordPress Development",
        "Automation Workflows",
        "Modern UI/UX",
        "Business Websites",
        "Freelance Developer",
        "React Developer",
        "Next.js Developer",
        "Problem Solving",
        "Custom Web Solutions"
    ],
    author: "Fatima Zahra Sabbar", // Replace with your actual name
    social: {
        twitter: "@yourusername", // Replace with your Twitter handle
        github: "https://github.com/yourusername", // Replace with your GitHub
        linkedin: "https://linkedin.com/in/yourusername", // Replace with your LinkedIn
    }
};

// JSON-LD Structured Data for enhanced search results
export const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.author,
    "url": siteConfig.url,
    "image": siteConfig.ogImage,
    "sameAs": [
        siteConfig.social.twitter,
        siteConfig.social.github,
        siteConfig.social.linkedin
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
    },
    "description": siteConfig.description,
    "knowsAbout": [
        "Web Development",
        "Full Stack Development",
        "React",
        "Next.js",
        "WordPress",
        "IT Solutions",
        "Automation",
        "UI/UX Design"
    ]
};
