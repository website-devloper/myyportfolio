"use client";
import React from 'react';

const reasons = [
    {
        icon: "bi-lightbulb",
        title: "Innovative Thinking",
        description: "I approach every project with fresh perspectives and creative problem-solving, turning your vision into reality with cutting-edge solutions that stand out.",
        color: "linear-gradient(135deg, #6366f1, #8b5cf6)", // Indigo to Violet
        shadow: "rgba(99, 102, 241, 0.2)",
        iconColor: "#818cf8",
        bgAccent: "rgba(99, 102, 241, 0.1)"
    },
    {
        icon: "bi-clock-history",
        title: "Reliable & On-Time",
        description: "Your time is valuable. I pride myself on delivering exceptional quality within agreed deadlines, keeping you informed every step of the way.",
        color: "linear-gradient(135deg, #f43f5e, #ec4899)", // Rose to Pink
        shadow: "rgba(244, 63, 94, 0.2)",
        iconColor: "#fb7185",
        bgAccent: "rgba(244, 63, 94, 0.1)"
    },
    {
        icon: "bi-gem",
        title: "Excellence-Driven",
        description: "I'm committed to delivering nothing less than exceptional. Using the latest technologies and best practices, I build robust, scalable, and maintainable solutions.",
        color: "linear-gradient(135deg, #06b6d4, #3b82f6)", // Cyan to Blue
        shadow: "rgba(6, 182, 212, 0.2)",
        iconColor: "#22d3ee",
        bgAccent: "rgba(6, 182, 212, 0.1)"
    },
    {
        icon: "bi-headset",
        title: "Ongoing Partnership",
        description: "My relationship with clients doesn't end at launch. I provide continuous support and maintenance to ensure your project thrives long-term.",
        color: "linear-gradient(135deg, #10b981, #14b8a6)", // Emerald to Teal
        shadow: "rgba(16, 185, 129, 0.2)",
        iconColor: "#34d399",
        bgAccent: "rgba(16, 185, 129, 0.1)"
    }
];

const WhyChooseMe = () => {
    return (
        <section id="why-choose-me" className="why-section">
            {/* Decorative Background */}
            <div className="why-bg-decoration">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            <div className="container position-relative z-1">
                <div className="text-center mb-5" data-aos="fade-up">
                    <span className="section-subtitle">
                        My Value Proposition
                    </span>
                    <h2 className="section-title mb-4">
                        Why Work <span className="text-gradient">With Me?</span>
                    </h2>
                    <p className="text-white-100 mx-auto section-desc">
                        I don't just deliver code—I deliver results. When you work with me, you get a dedicated partner who's genuinely invested in your success and committed to bringing your digital vision to life.
                    </p>
                </div>

                <div className="row g-4">
                    {reasons.map((reason, index) => (
                        <div className="col-md-6 col-lg-3" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div
                                className="why-card h-100"
                                style={{
                                    '--card-gradient': reason.color,
                                    '--card-shadow': reason.shadow,
                                    '--icon-color': reason.iconColor,
                                    '--bg-accent': reason.bgAccent
                                } as React.CSSProperties}
                            >
                                {/* Glow Effect behind card */}
                                <div className="card-glow"></div>

                                <div className="why-card-inner">
                                    {/* Top Right Gradient Blob */}
                                    <div className="card-blob"></div>

                                    {/* Icon */}
                                    <div className="why-icon-wrapper">
                                        <i className={`bi ${reason.icon}`}></i>
                                    </div>

                                    <h3 className="why-card-title">
                                        {reason.title}
                                    </h3>

                                    <p className="why-card-desc">
                                        {reason.description}
                                    </p>

                                    {/* Bottom Border Gradient */}
                                    <div className="card-border-bottom"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseMe;