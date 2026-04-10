"use client";

import { useState, useEffect, useRef } from "react";

const CALENDAR_LINK = "https://calendar.app.google/kw2WnqDiHVXEgxQ46";
const CONSULTATION_PAYMENT_LINK = "https://buy.stripe.com/bJecN48jld8Y3HxfGd4Vy04";

export default function EstelWebsite() {
  const [activeNeed, setActiveNeed] = useState<number | null>(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [statsVisible, setStatsVisible] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "why-usa", "services", "how-it-works", "about", "mission", "faq", "contact"];
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

  useEffect(() => {
    document.body.style.overflow = termsOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [termsOpen]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Why USA", href: "#why-usa" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Mission", href: "#mission" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const needs = [
    {
      title: "Choosing the right schools",
      note: "We help you identify programs that fit your goals, budget, and long term direction so your application strategy starts from the right foundation.",
    },
    {
      title: "Understanding the application process",
      note: "We break down each stage so you know what schools typically ask for and how to stay organized from inquiry to submission.",
    },
    {
      title: "Preparing strong documents",
      note: "We guide you in shaping personal statements and supporting materials so your application feels clear, focused, and professional.",
    },
    {
      title: "Getting ready for the visa interview",
      note: "We help you prepare with practical guidance, common question preparation, and a clearer understanding of what to expect.",
    },
  ];

  const services = [
    {
      title: "Starter Guidance",
      price: "$149",
      tagline: "Get your footing",
      paymentLink: "https://buy.stripe.com/8x24gy6bd1qg3Hx2Tr4Vy01",
      items: [
        "School selection based on your goals and budget",
        "Curated shortlist of programs to consider",
        "Application timeline and checklist",
        "One email follow-up after delivery",
      ],
    },
    {
      title: "Application Support",
      price: "$349",
      tagline: "Most students choose this",
      featured: true,
      paymentLink: "https://buy.stripe.com/fZu5kC5796KA91R8dL4Vy02",
      items: [
        "Everything in Starter Guidance",
        "Statement of purpose review and feedback",
        "Application review before submission",
        "Visa interview preparation guide",
        "Email support throughout the process",
      ],
    },
    {
      title: "Full Support",
      price: "$799",
      tagline: "Complete end-to-end guidance",
      paymentLink: "https://buy.stripe.com/28E8wOczB8SI5PF8dL4Vy03",
      items: [
        "Everything in Application Support",
        "Two one-on-one planning sessions",
        "Live mock visa interview with feedback",
        "Document review across all materials",
        "Ongoing support until final decision",
      ],
    },
  ];

  const steps = [
    { title: "Book a Consultation", desc: "Pick a time that works for you directly on the calendar. No back and forth needed." },
    { title: "Receive Your Plan", desc: "Get a clear school and application strategy tailored to you." },
    { title: "Prepare Your Documents", desc: "Build strong applications with guided, structured support." },
    { title: "Enter the Interview Ready", desc: "Approach your visa interview with preparation and confidence." },
  ];

  const stats = [
    { value: "2", label: "Program Levels" },
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
      q: "Do you work with both undergraduate and graduate students?",
      a: "Yes. We support students applying to both undergraduate and graduate programs in the United States. Whether you are applying for your first degree or pursuing a Master's, we tailor our guidance to your level and goals.",
    },
    {
      q: "What does the consultation cover?",
      a: "The consultation is a one-on-one session where we review your background, clarify your goals, and map out a direction for your application. After the session, you will have a clearer picture of which service tier fits your needs.",
    },
    {
      q: "Do you guarantee admission or visa approval?",
      a: "No. We provide guidance and preparation support based on experience and best practices. Final decisions are always made by schools and government authorities.",
    },
    {
      q: "Do you provide legal immigration advice?",
      a: "No. We provide educational guidance based on experience. We do not offer legal immigration advice or representation.",
    },
    {
      q: "What can you help us with?",
      a: "We help with school selection, application planning, statement of purpose guidance, document preparation, and visa interview readiness, for both undergraduate and graduate applicants.",
    },
    {
      q: "Can we reach out before booking?",
      a: "Yes. If you have questions before committing to a consultation, email us at consultingestel@gmail.com and we will be happy to help.",
    },
  ];

  const whyUsaPoints = [
    {
      title: "Wide range of programs",
      text: "The United States offers a broad selection of undergraduate and graduate programs across fields, allowing students to choose options that align closely with their academic and career goals.",
    },
    {
      title: "Research and professional opportunities",
      text: "Many programs provide strong research exposure, practical learning, and industry connections that can shape long term career growth.",
    },
    {
      title: "Flexible pathways",
      text: "Students often have more room to tailor their studies, build specialized skills, and explore career directions through electives, internships, and campus resources.",
    },
    {
      title: "Strong outcomes for high demand fields",
      text: "For students in STEM and other high demand professional programs, the U.S. can offer valuable opportunities for extended work experience after graduation.",
    },
  ];

  const missionValues = [
    {
      label: "Our Mission",
      heading: "Make the process simple and easy.",
      body: "The path to studying in the U.S. should not feel impossible to navigate. Our mission is to simplify every step so students can focus on what matters most: building a strong application and moving forward with confidence.",
    },
    {
      label: "Our Vision",
      heading: "Help students. Create real impact.",
      body: "We envision a world where every capable international student has access to honest, structured guidance. Not just advice, but real support that changes outcomes and opens doors that might otherwise stay closed.",
    },
    {
      label: "Our Commitment",
      heading: "Serve every client to satisfaction.",
      body: "We are committed to showing up fully for every student we work with. That means being honest, being thorough, and staying with you until the process is done. Your success is the measure of ours.",
    },
  ];

  const termsSections = [
    {
      title: "1. Nature of Services",
      body: "Estel Global Education provides educational guidance and preparation support for international students applying to undergraduate and graduate programs in the United States. Our services include school selection advice, application planning, document guidance, and visa interview preparation. We do not provide legal immigration advice, legal representation, or any services regulated by law.",
    },
    {
      title: "2. No Guarantee of Outcomes",
      body: "Estel Global Education does not guarantee admission to any university or approval of any visa application. All admission and visa decisions are made solely by the respective educational institutions and government authorities. Our role is to help students prepare as thoroughly as possible.",
    },
    {
      title: "3. Payments and Refunds",
      body: "All service fees, including the consultation fee, are due at the time of purchase and are non-refundable once the service has commenced. If you have questions about a package before purchasing, please contact us at consultingestel@gmail.com. In the event that a service cannot be delivered due to our error, we will work with you to find a fair resolution.",
    },
    {
      title: "4. Client Responsibilities",
      body: "Clients are responsible for providing accurate and complete information throughout the engagement. Estel Global Education is not liable for delays or unfavorable outcomes resulting from incomplete, inaccurate, or late information provided by the client. Clients are also responsible for meeting all deadlines set by universities and immigration authorities.",
    },
    {
      title: "5. Confidentiality",
      body: "We treat all personal information shared with us as confidential. We do not share your information with third parties without your consent, except where required by law. Your contact details, documents, and personal circumstances will be used solely for the purpose of delivering the service you have purchased.",
    },
    {
      title: "6. Intellectual Property",
      body: "All guidance materials, templates, and documents created by Estel Global Education are the intellectual property of Estel Global Education. They are provided for your personal use only and may not be resold, distributed, or reproduced without written permission.",
    },
    {
      title: "7. Limitation of Liability",
      body: "Estel Global Education's liability is limited to the amount paid for the service in question. We are not liable for any indirect, consequential, or special damages arising from the use of our services, including but not limited to visa denials, application rejections, or missed deadlines.",
    },
    {
      title: "8. Changes to Terms",
      body: "These terms may be updated from time to time. The most current version will always be available on this website. Continued use of our services after any changes constitutes acceptance of the updated terms.",
    },
    {
      title: "9. Contact",
      body: "If you have any questions about these terms, please contact us at consultingestel@gmail.com before purchasing a service.",
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
          white-space: nowrap;
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
          white-space: nowrap;
        }
        .btn-secondary:hover { background: #f8fafc; border-color: #94a3b8; }
        .btn-outline-white {
          background: transparent;
          color: white;
          border: 1.5px solid rgba(255,255,255,0.3);
          border-radius: 14px;
          padding: 14px 28px;
          font-weight: 600;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
        }
        .btn-outline-white:hover { border-color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.06); }
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
        .dot-green {
          width: 7px; height: 7px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse-green 2s infinite;
          flex-shrink: 0;
        }
        @keyframes pulse-green {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        .consultation-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 16px 20px;
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .testimonial-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 32px 28px 28px;
          position: relative;
        }
        .testimonial-card::before {
          content: '"';
          font-family: 'Playfair Display', serif;
          font-size: 72px;
          color: #e2e8f0;
          position: absolute;
          top: 4px; left: 24px;
          line-height: 1;
        }
        .step-number {
          width: 40px; height: 40px;
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
          overflow-y: auto;
        }
        .accordion-btn {
          width: 100%;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px 20px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .accordion-btn:hover { background: #f1f5f9; border-color: #cbd5e1; }
        .accordion-btn-open { background: white; border-color: #94a3b8; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
        .chevron { transition: transform 0.25s ease; font-size: 11px; color: #94a3b8; }
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
        .check-green { color: #22c55e; font-weight: 700; }
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
          width: 20px; height: 2px;
          background: #94a3b8;
          border-radius: 2px;
          flex-shrink: 0;
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
        .mission-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 32px;
        }
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          z-index: 200;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          animation: fadeIn 0.2s ease;
          padding: 0;
        }
        @media (min-width: 640px) {
          .modal-overlay { align-items: center; padding: 24px; }
        }
        .modal-box {
          background: white;
          border-radius: 24px 24px 0 0;
          width: 100%;
          max-width: 680px;
          max-height: 88vh;
          overflow-y: auto;
          padding: 36px 28px 40px;
        }
        @media (min-width: 640px) {
          .modal-box { border-radius: 24px; }
        }
        .terms-section { margin-bottom: 24px; }
        .terms-section h3 { font-size: 14px; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
        .terms-section p { font-size: 14px; line-height: 1.8; color: #475569; margin: 0; }
        .level-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-radius: 100px;
          padding: 5px 12px;
          font-size: 12px;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>

      {/* Terms Modal */}
      {termsOpen && (
        <div className="modal-overlay" onClick={() => setTermsOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#94a3b8", margin: "0 0 6px" }}>Legal</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#0f172a", margin: 0 }}>Terms and Conditions</h2>
              </div>
              <button onClick={() => setTermsOpen(false)} style={{ background: "#f1f5f9", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", fontSize: 16, color: "#64748b", flexShrink: 0 }}>
                ✕
              </button>
            </div>
            <p style={{ fontSize: 13, color: "#94a3b8", marginBottom: 28, paddingBottom: 24, borderBottom: "1px solid #f1f5f9" }}>
              Last updated: January 2026. By using our services you agree to the terms below.
            </p>
            {termsSections.map((section) => (
              <div key={section.title} className="terms-section">
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: 24, marginTop: 8 }}>
              <p style={{ fontSize: 13, color: "#64748b", margin: "0 0 16px" }}>
                Questions about these terms? Email us at{" "}
                <a href="mailto:consultingestel@gmail.com" style={{ color: "#0f172a", fontWeight: 600 }}>consultingestel@gmail.com</a>
              </p>
              <button onClick={() => setTermsOpen(false)} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => setMobileMenuOpen(false)} style={{ position: "absolute", top: 20, right: 24, fontSize: 24, background: "none", border: "none", cursor: "pointer", color: "#0f172a" }}>
            ✕
          </button>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} style={{ fontSize: 18, fontWeight: 500, color: "#0f172a", padding: "13px 0", textDecoration: "none", borderBottom: "1px solid #f1f5f9" }}>
              {item.label}
            </a>
          ))}
          <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="btn-primary" style={{ marginTop: 20, justifyContent: "center" }}>
            Book a Consultation
          </a>
        </div>
      )}

      {/* Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: scrolled ? "rgba(255,255,255,0.97)" : "white", backdropFilter: "blur(12px)", borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent", transition: "all 0.3s ease" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#home" style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#0f172a", lineHeight: 1.1 }}>Estel Global</span>
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#94a3b8" }}>Education</span>
          </a>

          <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} style={{ fontSize: 13, fontWeight: activeSection === item.href.replace("#", "") ? 600 : 400, color: activeSection === item.href.replace("#", "") ? "#0f172a" : "#64748b", textDecoration: "none", padding: "6px 10px", borderRadius: 8, transition: "all 0.15s ease" }}>
                {item.label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary hide-mobile">
              Book a Consultation
            </a>
            <button className="show-mobile" onClick={() => setMobileMenuOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22, color: "#0f172a", padding: 4 }}>
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 60%)", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 88px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 56, alignItems: "center" }} className="hero-grid">
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

              <p style={{ fontSize: 17, lineHeight: 1.8, color: "#475569", margin: "0 0 20px", maxWidth: 460 }}>
                Step-by-step guidance for international students at both the undergraduate and graduate level, from choosing the right university to walking into your visa interview with confidence.
              </p>

              {/* Program level badges */}
              <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
                <span className="level-badge" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", color: "#166534" }}>Undergraduate</span>
                <span className="level-badge" style={{ background: "#eff6ff", border: "1px solid #bfdbfe", color: "#1e40af" }}>Graduate</span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
                <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book a Consultation
                </a>
                <a href="#services" className="btn-secondary">See Pricing</a>
              </div>

              {/* Consultation info note */}
              <div className="consultation-card">
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#0f172a", margin: "0 0 2px" }}>Not sure where to start?</p>
                  <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>
                    Not sure where to start? Email us at{" "}
                    <a href="mailto:consultingestel@gmail.com" style={{ color: "#0f172a", fontWeight: 600 }}>consultingestel@gmail.com</a>
                    {" "}with any questions.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
                {["School selection", "Document prep", "Visa readiness", "1-on-1 support"].map((tag) => (
                  <span key={tag} className="feature-pill">
                    <span className="check-green">✓</span> {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-fade-up-2" style={{ background: "white", borderRadius: 24, border: "1px solid #e2e8f0", padding: 28, boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#94a3b8", margin: "0 0 18px" }}>
                What students need most
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {needs.map((item, index) => {
                  const isActive = activeNeed === index;
                  return (
                    <button key={item.title} type="button" onClick={() => setActiveNeed(isActive ? null : index)} className={`accordion-btn ${isActive ? "accordion-btn-open" : ""}`}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", margin: 0, lineHeight: 1.4 }}>{item.title}</p>
                        <span className={`chevron ${isActive ? "chevron-open" : ""}`} style={{ marginTop: 2, flexShrink: 0 }}>▼</span>
                      </div>
                      {isActive && <p style={{ fontSize: 13, lineHeight: 1.7, color: "#64748b", marginTop: 10, marginBottom: 0 }}>{item.note}</p>}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div ref={statsRef} style={{ background: "#0f172a", padding: "44px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 24 }}>
          {stats.map((stat, i) => (
            <div key={stat.label} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s`, textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 700, color: "white", lineHeight: 1 }}>
                {statsVisible ? stat.value : "-"}
              </div>
              <div style={{ fontSize: 11, color: "#64748b", marginTop: 8, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why USA */}
      <section id="why-usa" style={{ background: "#0f172a", color: "white", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ maxWidth: 600, marginBottom: 52 }}>
            <span className="section-label" style={{ color: "#475569" }}>Why the United States</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, lineHeight: 1.2, color: "white", margin: "0 0 16px" }}>
              A strong option for students who think long term.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#94a3b8", margin: 0 }}>
              The U.S. offers some of the most flexible, opportunity-driven education in the world at both the undergraduate and graduate level. Getting there requires careful planning and we help you do that well.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {whyUsaPoints.map((point) => (
              <div key={point.title} className="card-hover" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 28 }}>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "white", marginBottom: 10, marginTop: 0 }}>{point.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "#94a3b8", margin: 0 }}>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Estel */}
      <section style={{ padding: "88px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, alignItems: "stretch" }}>
            <div style={{ background: "#0f172a", borderRadius: 24, padding: 36, color: "white" }}>
              <span className="section-label" style={{ color: "#475569" }}>Why Estel</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, lineHeight: 1.3, color: "white", margin: "0 0 14px" }}>
                Clarity in a confusing process.
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: "#94a3b8", margin: 0 }}>
                Most students spend months sifting through conflicting advice online. We cut through that with a clear, experience-based process for both undergraduate and graduate applicants.
              </p>
            </div>
            <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 24, padding: 28 }} className="card-hover">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8", margin: "0 0 12px" }}>Structured Process</p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#0f172a", margin: "0 0 10px" }}>A clear path, not scattered advice.</h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "#64748b", margin: 0 }}>
                Each step in our process builds toward a stronger application and a more confident interview. Nothing is left to chance.
              </p>
            </div>
            <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 24, padding: 28 }} className="card-hover">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8", margin: "0 0 12px" }}>Lived Experience</p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#0f172a", margin: "0 0 10px" }}>Guidance from someone who has been there.</h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "#64748b", margin: 0 }}>
                Our approach is shaped by firsthand understanding of the questions, pressure, and uncertainty international students face.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "88px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ maxWidth: 560, marginBottom: 52 }}>
            <span className="section-label">Services</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, lineHeight: 1.2, color: "#0f172a", margin: "0 0 14px" }}>
              Choose the level of support you need.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#64748b", margin: 0 }}>
              Available for both undergraduate and graduate applicants. Start simple or go all-in. Each tier builds on the last.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, alignItems: "stretch" }}>
            {services.map((service) => (
              <div key={service.title} className="card-hover" style={{ borderRadius: 24, border: service.featured ? "2px solid #0f172a" : "1px solid #e2e8f0", background: service.featured ? "#0f172a" : "white", padding: 32, display: "flex", flexDirection: "column" }}>
                {service.featured && (
                  <div style={{ alignSelf: "flex-start", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 100, padding: "4px 12px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.85)", marginBottom: 14 }}>
                    Most Popular
                  </div>
                )}
                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#64748b", margin: "0 0 6px" }}>{service.tagline}</p>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: service.featured ? "white" : "#0f172a", margin: "0 0 8px" }}>{service.title}</h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: service.featured ? "white" : "#0f172a", lineHeight: 1 }}>{service.price}</span>
                    <span style={{ fontSize: 13, color: "#64748b" }}>one time</span>
                  </div>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  {service.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: service.featured ? "#4ade80" : "#22c55e", fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 2 }}>✓</span>
                      <span style={{ fontSize: 14, color: service.featured ? "#cbd5e1" : "#475569", lineHeight: 1.55 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={service.paymentLink} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", padding: "13px 20px", borderRadius: 12, fontWeight: 600, fontSize: 14, textDecoration: "none", background: service.featured ? "white" : "#0f172a", color: service.featured ? "#0f172a" : "white", transition: "opacity 0.2s ease" }}>
                  Start Now
                </a>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", fontSize: 13, color: "#94a3b8", marginTop: 28 }}>
            Not sure which package fits?{" "}
            <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" style={{ color: "#0f172a", fontWeight: 600 }}>
              Book a consultation first.
            </a>
            {" "}Or email us at{" "}
            <a href="mailto:consultingestel@gmail.com" style={{ color: "#0f172a", fontWeight: 600 }}>consultingestel@gmail.com</a>
          </p>
        </div>
      </section>

      {/* How It Works + About */}
      <section id="how-it-works" style={{ padding: "88px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "start" }}>
            <div>
              <span className="section-label">How it works</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 2.5vw, 36px)", fontWeight: 700, lineHeight: 1.2, color: "#0f172a", margin: "0 0 36px" }}>
                From uncertainty to a clear plan.
              </h2>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {steps.map((step, index) => (
                  <div key={step.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div className="step-number">{index + 1}</div>
                      {index < steps.length - 1 && <div style={{ width: 2, height: 44, background: "#e2e8f0", margin: "4px auto" }} />}
                    </div>
                    <div style={{ paddingBottom: index < steps.length - 1 ? 36 : 0, paddingTop: 8 }}>
                      <p style={{ fontSize: 15, fontWeight: 600, color: "#0f172a", margin: "0 0 4px" }}>{step.title}</p>
                      <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 36 }}>
                Book Step 1 Now
              </a>
            </div>

            <div id="about" style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 24, padding: 36 }}>
              <span className="section-label">Our Story</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#0f172a", margin: "0 0 16px" }}>
                Built from real experience.
              </h3>
              <div className="about-quote">
                "I saw how many capable students struggle, not because they lacked potential, but because they lacked structure, clarity, and the right support."
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: "#64748b", marginBottom: 14 }}>
                Estel Global Education was founded by Esther, an international student from Kenya who personally navigated the U.S. education journey. She built this company to give other students what she wished she had.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: "#64748b", marginBottom: 28 }}>
                Today, we support both undergraduate and graduate applicants, turning lived experience into a thoughtful service that helps students move forward with stronger planning, better applications, and more confidence at every step.
              </p>
              <a href="mailto:consultingestel@gmail.com?subject=Estel%20Global%20Education%20Inquiry" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Send Us an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section id="mission" style={{ padding: "88px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ maxWidth: 560, marginBottom: 52 }}>
            <span className="section-label">Purpose</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, lineHeight: 1.2, color: "#0f172a", margin: "0 0 14px" }}>
              Mission, Vision and Commitment.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#64748b", margin: 0 }}>
              Everything we do is grounded in a clear purpose: to help international students move forward with confidence, clarity, and real support.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {missionValues.map((item, i) => (
              <div key={item.label} className="mission-card card-hover" style={{ borderTop: i === 0 ? "3px solid #0f172a" : i === 1 ? "3px solid #334155" : "3px solid #64748b" }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#94a3b8", margin: "0 0 12px" }}>{item.label}</p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#0f172a", margin: "0 0 14px", lineHeight: 1.3 }}>{item.heading}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: "#64748b", margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "88px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Student Stories</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, color: "#0f172a", margin: "0 0 12px" }}>
              What students say about working with us.
            </h2>
            <p style={{ fontSize: 15, color: "#64748b", maxWidth: 440, margin: "0 auto" }}>
              Real feedback from students who started right where you are now.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card card-hover">
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#475569", marginTop: 36, marginBottom: 24 }}>{t.quote}</p>
                <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: 16, display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, background: "#0f172a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "white", flexShrink: 0 }}>
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
      <section style={{ padding: "72px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 24, padding: 32 }}>
              <span className="section-label">Why students trust us</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#0f172a", margin: "0 0 20px" }}>
                Direct, practical, honest support.
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Guidance shaped by real international student experience", "Support for both undergraduate and graduate applicants", "A structured process instead of scattered advice", "Private, direct contact via email"].map((point) => (
                  <div key={point} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#22c55e", fontWeight: 700, flexShrink: 0, marginTop: 2, fontSize: 13 }}>✓</span>
                    <p style={{ fontSize: 14, color: "#475569", margin: 0, lineHeight: 1.65 }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 24, padding: 32 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#92400e", display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
                Important Note
              </span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#0f172a", margin: "0 0 14px" }}>
                Guidance with clear boundaries.
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: "#64748b", margin: 0 }}>
                We provide educational guidance based on experience and preparation support for students. We do not offer legal immigration advice or representation. Admission and visa decisions are made solely by schools and government authorities. We never guarantee outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "88px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <span className="section-label">FAQ</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>
            Common questions from students.
          </h2>
          <p style={{ fontSize: 15, color: "#64748b", marginBottom: 40 }}>
            Don't see your question?{" "}
            <a href="mailto:consultingestel@gmail.com?subject=Estel%20Global%20Education%20Inquiry" style={{ color: "#0f172a", fontWeight: 600 }}>Email us directly.</a>
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <button key={faq.q} type="button" onClick={() => setActiveFaq(isOpen ? null : index)} className={`accordion-btn ${isOpen ? "accordion-btn-open" : ""}`}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 600, color: "#0f172a", margin: 0, textAlign: "left", lineHeight: 1.4 }}>{faq.q}</h3>
                    <span className={`chevron ${isOpen ? "chevron-open" : ""}`} style={{ flexShrink: 0, marginTop: 3 }}>▼</span>
                  </div>
                  {isOpen && <p style={{ fontSize: 14, lineHeight: 1.75, color: "#64748b", margin: "12px 0 0", textAlign: "left" }}>{faq.a}</p>}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: "#0f172a", padding: "88px 24px" }}>
        <div style={{ maxWidth: 660, margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 100, padding: "6px 16px", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b", marginBottom: 28 }}>
            Start Your Journey
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, color: "white", margin: "0 0 16px", lineHeight: 1.2 }}>
            Ready to move forward?
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#64748b", margin: "0 0 12px" }}>
            Book a consultation to get started. We will review your background and map out the best path forward.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#475569", margin: "0 0 40px" }}>
            Have questions first? Email us at{" "}
            <a href="mailto:consultingestel@gmail.com" style={{ color: "#94a3b8", fontWeight: 600 }}>consultingestel@gmail.com</a>
            {" "}and we will get back to you within 24 hours.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginBottom: 36 }}>
            <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 15, padding: "14px 28px" }}>
              Book a Consultation
            </a>
            <a href="mailto:consultingestel@gmail.com?subject=Estel%20Global%20Education%20Inquiry" className="btn-outline-white">
              Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#080f1c", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "36px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16, marginBottom: 20 }}>
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: "white", margin: "0 0 3px" }}>Estel Global Education</p>
              <p style={{ fontSize: 12, color: "#334155", margin: 0 }}>© 2026 All rights reserved.</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
              {navItems.map((item) => (
                <a key={item.label} href={item.href} style={{ fontSize: 13, color: "#334155", textDecoration: "none" }}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 16, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <p style={{ fontSize: 12, color: "#334155", margin: 0 }}>
              This website provides educational guidance only. We do not offer legal immigration advice.
            </p>
            <button onClick={() => setTermsOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, color: "#64748b", textDecoration: "underline", padding: 0 }}>
              Terms and Conditions
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
