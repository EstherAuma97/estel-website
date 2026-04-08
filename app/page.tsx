"use client";

import { useState, useEffect, useRef } from "react";

export default function EstelWebsite() {
  const [activeNeed, setActiveNeed] = useState<number | null>(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "why-usa", "services", "how-it-works", "about", "faq", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Why USA", href: "#why-usa" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const needs = [
    {
      title: "Choosing the right schools",
      note: "We help you identify programs that fit your goals, budget, and long term direction so your application strategy starts from the right foundation.",
      icon: "🎓",
    },
    {
      title: "Understanding the application process",
      note: "We break down each stage so you know what schools typically ask for and how to stay organized from inquiry to submission.",
      icon: "📋",
    },
    {
      title: "Preparing strong documents",
      note: "We guide you in shaping personal statements and supporting materials so your application feels clear, focused, and professional.",
      icon: "✍️",
    },
    {
      title: "Getting ready for the visa interview",
      note: "We help you prepare with practical guidance, common question preparation, and a clearer understanding of what to expect.",
      icon: "🛂",
    },
  ];

  const services = [
    {
      title: "Starter Guidance",
      price: "$149",
      tagline: "Perfect to get started",
      items: [
        "School selection support",
        "Application checklist and timeline",
        "Statement of purpose guidance",
        "Visa interview preparation",
      ],
    },
    {
      title: "Application Support",
      price: "$349",
      tagline: "Most students choose this",
      featured: true,
      items: [
        "Everything in Starter Guidance",
        "School shortlist based on budget and goals",
        "Application review before submission",
        "Email support throughout the process",
      ],
    },
    {
      title: "Full Support",
      price: "$799",
      tagline: "Complete end-to-end guidance",
      items: [
        "Everything in Application Support",
        "One on one planning sessions",
        "Mock visa interview sessions",
        "Ongoing support until final decision",
      ],
    },
  ];

  const steps = [
    { title: "Book a Consultation", desc: "Share your goals, background, and timeline in a private session." },
    { title: "Receive Your Plan", desc: "Get a clear school and application strategy tailored to you." },
    { title: "Prepare Your Documents", desc: "Build strong applications with guided, structured support." },
    { title: "Enter the Interview Ready", desc: "Approach your visa interview with preparation and confidence." },
  ];

  const stats = [
    { value: "3", label: "Service Tiers" },
    { value: "24h", label: "Response Time" },
    { value: "100%", label: "Honest Guidance" },
  ];

  const testimonials = [
    {
      quote: "Estel helped me understand the whole application process from scratch. I felt so much more confident going into my visa interview.",
      name: "Sylvia O.",
      origin: "Kenya to Indiana University",
    },
    {
      quote: "The school selection guidance alone saved me so much time and confusion. I knew exactly where to apply and why.",
      name: "Taylor M.",
      origin: "Kenya to Missouri State",
    },
    {
      quote: "I was overwhelmed before reaching out. The structured process made everything feel manageable and clear.",
      name: "Florence S.",
      origin: "Kenya to Arizona State",
    },
  ];

  const faqs = [
    {
      q: "Do you guarantee admission or visa approval?",
      a: "No. We provide guidance and preparation support based on experience and best practices. Final decisions are always made by schools and government authorities.",
    },
    {
      q: "Do you provide legal immigration advice?",
      a: "No. We provide educational guidance based on experience. We do not offer legal immigration advice or representation.",
    },
    {
      q: "Who is this for?",
      a: "Our service is designed for international students who want clear and trustworthy support when applying to study in the United States, especially at the Master's level.",
    },
    {
      q: "What can you help us with?",
      a: "We help with school selection, application planning, statement of purpose guidance, document preparation, and visa interview readiness.",
    },
    {
      q: "Can we contact you before choosing a package?",
      a: "Yes. You can reach out first through email, ask questions, and decide what level of support fits your needs.",
    },
  ];

  const whyUsaPoints = [
    {
      title: "Wide range of programs",
      text: "The United States offers a broad selection of Master's programs across fields, allowing students to choose options that align closely with their academic and career goals.",
      icon: "🏛️",
    },
    {
      title: "Research and professional opportunities",
      text: "Many programs provide strong research exposure, practical learning, and industry connections that can shape long term career growth.",
      icon: "🔬",
    },
    {
      title: "Flexible pathways",
      text: "Students often have more room to tailor their studies, build specialized skills, and explore career directions through electives, internships, and campus resources.",
      icon: "🗺️",
    },
    {
      title: "Strong outcomes for high demand fields",
      text: "For students in STEM and other high demand professional programs, the U.S. can offer valuable opportunities for extended work experience after graduation.",
      icon: "📈",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; font-family: 'DM Sans', system-ui, sans-serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        .animate-fade-up { animation: fadeUp 0.7s ease both; }
        .animate-fade-up-2 { animation: fadeUp 0.7s 0.2s ease both; }
        .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.09); }
        .btn-primary {
          background: #0f172a;
          color: white;
          border-radius: 14px;
          padding: 12px 24px;
          font-weight: 600;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
          text-decoration: none;
        }
        .btn-primary:hover { background: #1e293b; transform: translateY(-1px); box-shadow: 0 8px 20px rgba(15,23,42,0.25); }
        .btn-secondary {
          background: transparent;
          color: #0f172a;
          border-radius: 14px;
          padding: 12px 24px;
          font-weight: 600;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          border: 1.5px solid #cbd5e1;
          cursor: pointer;
          text-decoration: none;
        }
        .btn-secondary:hover { background: #f8fafc; border-color: #94a3b8; }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          color: #475569;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .dot-green { width: 7px; height: 7px; background: #22c55e; border-radius: 50%; animation: pulse-green 2s infinite; }
        @keyframes pulse-green {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        .testimonial-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 28px;
          position: relative;
        }
        .testimonial-card::before {
          content: '"';
          font-family: 'Playfair Display', serif;
          font-size: 72px;
          color: #e2e8f0;
          position: absolute;
          top: 8px;
          left: 24px;
          line-height: 1;
        }
        .step-number {
          width: 40px;
          height: 40px;
          background: #0f172a;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          flex-shrink: 0;
        }
        .mobile-menu {
          position: fixed;
          inset: 0;
          background: white;
          z-index: 100;
          padding: 80px 24px 32px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          animation: fadeIn 0.2s ease;
        }
        .accordion-btn {
          width: 100%;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 18px 20px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .accordion-btn:hover { background: #f1f5f9; border-color: #cbd5e1; }
        .accordion-btn-open { background: white; border-color: #94a3b8; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
        .chevron { transition: transform 0.25s ease; font-size: 12px; color: #94a3b8; }
        .chevron-open { transform: rotate(180deg); }
        .feature-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f1f5f9;
          border-radius: 100px;
          padding: 5px 12px;
          font-size: 12px;
          font-weight: 500;
          color: #475569;
        }
        .check-icon { color: #22c55e; font-weight: 700; }
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 12px;
        }
        .section-label::before {
          content: '';
          width: 20px;
          height: 2px;
          background: #94a3b8;
          border-radius: 2px;
        }
        .about-quote {
          border-left: 3px solid #0f172a;
          padding-left: 20px;
          margin: 20px 0;
          font-style: italic;
          color: #475569;
          font-size: 15px;
          line-height: 1.7;
        }
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{ position: "absolute", top: 20, right: 24, fontSize: 24, background: "none", border: "none", cursor: "pointer", color: "#0f172a" }}
          >
            ✕
          </button>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: 20, fontWeight: 500, color: "#0f172a", padding: "12px 0", textDecoration: "none", borderBottom: "1px solid #f1f5f9" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:consultingestel@gmail.com?subject=Estel%20Global%20Education%20Inquiry"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ marginTop: 16, justifyContent: "center" }}
          >
            Book a Consultation
          </a>
        </div>
      )}

      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: scrolled ? "rgba(255,255,255,0.97)" : "white",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#home" style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#0f172a", lineHeight: 1.1 }}>
              Estel Global
            </span>
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#94a3b8" }}>
              Education
            </span>
          </a>

          <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontSize: 13,
                  fontWeight: activeSection === item.href.replace("#", "") ? 600 : 400,
                  color: activeSection === item.href.replace("#", "") ? "#0f172a" : "#64748b",
                  textDecoration: "none",
                  padding: "6px 10px",
                  borderRadius: 8,
                  transition: "all 0.15s ease",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="mailto:consultingestel@gmail.com?subject=Estel%20Global%20Education%20Inquiry"
              className="btn-primary hide-mobile"
            >
              Book a Consultation
            </a>
            <button
              className="show-mobile"
              onClick={() => setMobileMenuOpen(true)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22, color: "#0f172a", padding: 4 }}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 60%)", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 80px" }}>
          <div style={{ display: "grid", gap: 48, alignItems: "start" }}>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 48, alignItems: "center" }}
                 className="hero-grid">
              <style>{`@media(max-width:768px){.hero-grid{grid-template-columns:1fr!important}}`}</style>
              <div className="animate-fade-up">
                <div className="hero-badge">
                  <span className="dot-green" />
                  Now accepting new students
                </div>

                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.15, color: "#0f172a", margin: "0 0 20px" }}>
                  Your path to studying in the{" "}
                  <span style={{ position: "relative", display: "inline-block" }}>
                    U.S. starts here.
                    <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #0f172a, #64748b)", borderRadius: 2 }} />
                  </span>
                </h1>

                <p style={{ fontSize: 17, lineHeight: 1.75, color: "#475569", margin: "0 0 32px", maxWidth: 480 }}>
                  Step-by-step guidance for international students, from choosing the right university to walking into your visa interview with confidence.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
                  <a
                    href="mailto:consultingestel@gmail.com?subject=Estel%20Global%20Education%20Inquiry"
                    className="btn-primary"
                  >
                    Book a Free Consultation
                  </a>
                  <a href="#services" className="btn-secondary">
                    See Pricing
                  </a>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["School selection", "Document prep", "Visa readiness", "1-on-1 support"].map((tag) => (
                    <span key={tag} className="feature-pill">
                      <span className="check-icon">✓</span> {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="animate-fade-up-2" style={{ background: "white", borderRadius: 28, border: "1px solid #e2e8f0", padding: 28, boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
                <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 16 }}>
                  What students need most
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {needs.map((item, index) => {
                    const isActive = activeNeed === index;
                    return (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => setActiveNeed(isActive ? null : index)}
                        className={`accordion-btn ${isActive ? "accordion-btn-open" : ""}`}
                      >
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                          <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                              <p style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", margin: 0 }}>{item.title}</p>
                              <span className={`chevron ${isActive ? "chevron-open" : ""}`}>▼</span>
                            </div>
                            {isActive && (
                              <p style={{ fontSize: 13, lineHeight: 1.65, color: "#64748b", marginTop: 10, marginBottom: 0 }}>
                                {item.note}
                              </p>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div ref={statsRef} style={{ background: "#0f172a", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24 }}>
          {stats.map((stat, i) => (
            <div key={stat.label} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s`, textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: "white", lineHeight: 1 }}>
                {statsVisible ? stat.value : "-"}
              </div>
              <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 6, fontWeight: 500, letterSpacing: "0.05em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why USA */}
      <section id="why-usa" style={{ background: "#0f172a", color: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ maxWidth: 640, marginBottom: 48 }}>
            <span className="section-label" style={{ color: "#64748b" }}>Why the United States</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, lineHeight: 1.2, color: "white", margin: "0 0 16px" }}>
              A strong option for students who think long term.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#94a3b8" }}>
              The U.S. offers some of the most flexible, opportunity-driven graduate education in the world. Getting there requires careful planning and we help you do that well.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {whyUsaPoints.map((point) => (
              <div
                key={point.title}
                className="card-hover"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: 28, transition: "all 0.25s ease" }}
              >
                <span style={{ fontSize: 28, display: "block", marginBottom: 14 }}>{point.icon}</span>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "white", marginBottom: 10 }}>{point.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#94a3b8", margin: 0 }}>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Estel */}
      <section style={{ padding: "80px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "stretch" }}>
            <div style={{ background: "#0f172a", borderRadius: 28, padding: 36, color: "white" }}>
              <span className="section-label" style={{ color: "#475569" }}>Why Estel</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, lineHeight: 1.25, color: "white", margin: "0 0 16px" }}>
                Clarity in a confusing process.
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "#94a3b8", margin: 0 }}>
                Most students spend months sifting through conflicting advice online. We cut through that with a clear, experience-based process.
              </p>
            </div>
            <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 28, padding: 28 }} className="card-hover">
              <div style={{ width: 44, height: 44, background: "#f1f5f9", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>🧭</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "#0f172a", marginBottom: 10 }}>Structured Process</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#64748b", margin: 0 }}>
                A simple, clear pathway instead of scattered information. Each step builds toward a stronger application and a confident interview.
              </p>
            </div>
            <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 28, padding: 28 }} className="card-hover">
              <div style={{ width: 44, height: 44, background: "#f1f5f9", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>🌍</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "#0f172a", marginBottom: 10 }}>Lived Experience</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#64748b", margin: 0 }}>
                Our approach is shaped by firsthand understanding of the questions, pressure, and uncertainty international students face.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ maxWidth: 600, marginBottom: 48 }}>
            <span className="section-label">Services</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, lineHeight: 1.2, color: "#0f172a", margin: "0 0 14px" }}>
              Choose the level of support you need.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#64748b", margin: 0 }}>
              Start simple or go all-in. Each tier builds on the last.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, alignItems: "stretch" }}>
            {services.map((service) => (
              <div
                key={service.title}
                className="card-hover"
                style={{
                  borderRadius: 28,
                  border: service.featured ? "2px solid #0f172a" : "1px solid #e2e8f0",
                  background: service.featured ? "#0f172a" : "white",
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {service.featured && (
                  <div style={{ position: "absolute", top: 20, right: 20, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 100, padding: "4px 12px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "white" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ marginBottom: 24 }}>
                  <p style={{ fontSize: 13, fontWeight: 500, color: "#94a3b8", margin: "0 0 6px" }}>{service.tagline}</p>
                  <h3 style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Playfair Display', serif", color: service.featured ? "white" : "#0f172a", margin: "0 0 4px" }}>{service.title}</h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                    <span style={{ fontSize: 38, fontWeight: 700, fontFamily: "'Playfair Display', serif", color: service.featured ? "white" : "#0f172a" }}>{service.price}</span>
                    <span style={{ fontSize: 13, color: service.featured ? "#64748b" : "#94a3b8" }}>one time</span>
                  </div>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  {service.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: service.featured ? "#4ade80" : "#22c55e", fontWeight: 700, fontSize: 14, flexShrink: 0, marginTop: 1 }}>✓</span>
                      <span style={{ fontSize: 14, color: service.featured ? "#cbd5e1" : "#475569", lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:consultingestel@gmail.com?subject=Estel%20Global%20Education%20Inquiry"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "13px 20px",
                    borderRadius: 14,
                    fontWeight: 600,
                    fontSize: 14,
                    textDecoration: "none",
                    background: service.featured ? "white" : "#0f172a",
                    color: service.featured ? "#0f172a" : "white",
                    transition: "all 0.2s ease",
                  }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", fontSize: 13, color: "#94a3b8", marginTop: 24 }}>
            Not sure which package fits?{" "}
            <a href="mailto:consultingestel@gmail.com?subject=Estel%20Global%20Education%20Inquiry" style={{ color: "#0f172a", fontWeight: 600 }}>
              Email us first. No commitment needed.
            </a>
          </p>
        </div>
      </section>

      {/* How It Works + About */}
      <section id="how-it-works" style={{ padding: "80px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "start" }}>
            <div>
              <span className="section-label">How it works</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 2.5vw, 36px)", fontWeight: 700, lineHeight: 1.2, color: "#0f172a", margin: "0 0 32px" }}>
                From uncertainty to a clear plan.
              </h2>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {steps.map((step, index) => (
                  <div key={step.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div className="step-number">{index + 1}</div>
                      {index < steps.length - 1 && (
                        <div style={{ width: 2, height: 40, background: "#e2e8f0", margin: "4px auto" }} />
                      )}
                    </div>
                    <div style={{ paddingBottom: index < steps.length - 1 ? 32 : 0, paddingTop: 8 }}>
                      <p style={{ fontSize: 15, fontWeight: 600, color: "#0f172a", margin: "0 0 4px" }}>{step.title}</p>
                      <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="about" style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 28, padding: 36 }}>
              <span className="section-label">Our Story</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#0f172a", margin: "0 0 16px" }}>
                Built from real experience.
              </h3>

              <div className="about-quote">
                "I saw how many capable students struggle, not because they lacked potential, but because they lacked structure, clarity, and the right support."
              </div>

              <p style={{ fontSize: 14, lineHeight: 1.8, color: "#64748b", marginBottom: 14 }}>
                Estel Global Education was founded by Esther, an international student from Kenya who personally navigated the U.S. education journey. She built this company to give other students what she wished she had.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: "#64748b", marginBottom: 24 }}>
                Today, we turn that lived experience into a thoughtful service, helping students move forward with stronger planning, better applications, and more confidence at every step.
              </p>

              <a
                href="mailto:consultingestel@gmail.com?subject=Estel%20Global%20Education%20Inquiry"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Send Us an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Student Stories</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, color: "#0f172a", margin: "0 0 12px" }}>
              What students say about working with us.
            </h2>
            <p style={{ fontSize: 15, color: "#64748b", maxWidth: 480, margin: "0 auto" }}>
              Real feedback from students who started right where you are now.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card card-hover">
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#475569", marginTop: 32, marginBottom: 20 }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, background: "#f1f5f9", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#0f172a" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#0f172a", margin: 0 }}>{t.name}</p>
                    <p style={{ fontSize: 12, color: "#94a3b8", margin: 0 }}>{t.origin}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust + Disclaimer */}
      <section style={{ padding: "60px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 24, padding: 32 }}>
              <span className="section-label">Why students trust us</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#0f172a", margin: "0 0 20px" }}>
                Direct, practical, honest support.
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Guidance shaped by real international student experience",
                  "A structured process instead of scattered advice",
                  "Support for applications, documents, and interviews",
                  "Private, direct contact via email",
                ].map((point) => (
                  <div key={point} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#22c55e", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                    <p style={{ fontSize: 14, color: "#475569", margin: 0, lineHeight: 1.6 }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 24, padding: 32 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#92400e", display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                ⚠️ Important Note
              </span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#0f172a", margin: "0 0 14px" }}>
                Guidance with clear boundaries.
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: "#64748b", margin: 0 }}>
                We provide educational guidance based on experience and preparation support for students. We do not offer legal immigration advice or representation. Admission and visa decisions are made solely by schools and government authorities. We never guarantee outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span className="section-label">FAQ</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>
            Common questions from students.
          </h2>
          <p style={{ fontSize: 15, color: "#64748b", marginBottom: 40 }}>
            Don't see your question?{" "}
            <a href="mailto:consultingestel@gmail.com?subject=Estel%20Global%20Education%20Inquiry" style={{ color: "#0f172a", fontWeight: 600 }}>
              Email us directly.
            </a>
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <button
                  key={faq.q}
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className={`accordion-btn ${isOpen ? "accordion-btn-open" : ""}`}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 600, color: "#0f172a", margin: 0, textAlign: "left" }}>{faq.q}</h3>
                    <span className={`chevron ${isOpen ? "chevron-open" : ""}`} style={{ flexShrink: 0, marginTop: 2 }}>▼</span>
                  </div>
                  {isOpen && (
                    <p style={{ fontSize: 14, lineHeight: 1.75, color: "#64748b", margin: "12px 0 0", textAlign: "left" }}>{faq.a}</p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" style={{ background: "#0f172a", padding: "80px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "6px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 24 }}>
            Start Your Journey
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, color: "white", margin: "0 0 16px", lineHeight: 1.2 }}>
            Ready to move forward?
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "#94a3b8", margin: "0 0 36px" }}>
            Reach out by email. Ask questions before committing. No pressure, no commitment required.
          </p>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
            <a
              href="mailto:consultingestel@gmail.com?subject=Estel%20Global%20Education%20Inquiry"
              style={{ background: "white", color: "#0f172a", borderRadius: 14, padding: "14px 28px", fontWeight: 600, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              ✉️ Send an Email
            </a>
          </div>

          <p style={{ fontSize: 13, color: "#475569" }}>
            consultingestel@gmail.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#080f1c", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "white", margin: "0 0 2px" }}>Estel Global Education</p>
            <p style={{ fontSize: 12, color: "#475569", margin: 0 }}>© 2026 All rights reserved.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} style={{ fontSize: 13, color: "#475569", textDecoration: "none" }}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
