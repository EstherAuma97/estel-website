import { useState } from "react";

export default function EstelGlobalEducationWebsite() {
  const [activeNeed, setActiveNeed] = useState<number | null>(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const needs = [
    {
      title: "Choosing the right schools",
      note:
        "Get help identifying programs that fit your goals, budget, and long term direction so your application strategy starts from the right foundation.",
    },
    {
      title: "Understanding the application process",
      note:
        "Learn what each stage involves, what schools typically ask for, and how to stay organized from inquiry to submission.",
    },
    {
      title: "Preparing strong documents",
      note:
        "Receive guidance on personal statements, supporting materials, and how to present your profile clearly and professionally.",
    },
    {
      title: "Getting ready for the visa interview",
      note:
        "Build confidence with practical preparation, common question guidance, and a clearer understanding of what to expect.",
    },
  ];

  const services = [
    {
      title: "Starter Guidance",
      price: "$149",
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
      items: [
        "Everything in Application Support",
        "One on one planning sessions",
        "Mock visa interview sessions",
        "Ongoing support until final decision",
      ],
    },
  ];

  const steps = [
    "Book a consultation and share your goals.",
    "Get a clear school and application plan.",
    "Prepare your documents with guided support.",
    "Approach your visa interview with more confidence.",
  ];

  const trustPoints = [
    "Guidance shaped by real international student experience",
    "A simple and structured process instead of scattered advice",
    "Practical support for applications, documents, and interviews",
    "Private direct contact through WhatsApp and email buttons",
  ];

  const faqs = [
    {
      q: "Do you guarantee admission or visa approval?",
      a: "No. Estel Global Education provides guidance and preparation support based on experience and best practices. Admission and visa decisions are always made by schools and government authorities.",
    },
    {
      q: "Do you provide legal immigration advice?",
      a: "No. This service provides educational guidance and support based on experience. It does not offer legal immigration advice or representation.",
    },
    {
      q: "Who is this for?",
      a: "This service is designed for international students who want clear and trustworthy support when applying to study in the United States, especially at the Master’s level.",
    },
    {
      q: "What can you help me with?",
      a: "Support can include school selection, application planning, statement of purpose guidance, document preparation, and visa interview readiness.",
    },
    {
      q: "Can I contact you before choosing a package?",
      a: "Yes. You can reach out first through the consultation or email buttons, ask questions, and decide what level of support fits your needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-600"
          >
            Estel Global Education
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/16163495970?text=Hi%20Esther%2C%20I%27m%20interested%20in%20guidance%20for%20studying%20in%20the%20U.S."
            className="hidden rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white md:inline-block"
          >
            Consult
          </a>
        </div>
      </header>

      <section id="home" className="border-b bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Estel Global Education
              </p>

              <h1 className="max-w-2xl font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Helping international students move toward U.S. study opportunities with clarity and confidence.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Get step by step guidance for university applications, document preparation, and visa interview readiness from someone who understands the journey.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/16163495970?text=Hi%20Esther%2C%20I%27m%20interested%20in%20guidance%20for%20studying%20in%20the%20U.S."
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
                >
                  Book a Consultation
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  View Services
                </a>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                Trusted guidance based on lived experience. Contact details stay private until you choose to reach out.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <p className="text-sm font-semibold text-slate-500">What students usually need most</p>
              <div className="mt-5 space-y-3">
                {needs.map((item, index) => {
                  const isActive = activeNeed === index;
                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveNeed(isActive ? null : index)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-left transition hover:border-slate-300 hover:bg-white"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-slate-900" />
                        <div className="w-full">
                          <div className="flex items-center justify-between gap-4">
                            <p className="text-base font-medium text-slate-800">{item.title}</p>
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                              {isActive ? "Hide" : "Open"}
                            </span>
                          </div>
                          {isActive && (
                            <p className="mt-3 pr-6 text-sm leading-7 text-slate-600">
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
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 rounded-[2rem] bg-slate-900 p-8 text-white lg:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Why Estel</p>
            <h2 className="mt-3 font-serif text-2xl font-bold">A trustworthy guide in a space full of confusion.</h2>
          </div>
          <div className="rounded-3xl bg-white/10 p-6">
            <h3 className="font-semibold">Clear Process</h3>
            <p className="mt-2 text-sm leading-7 text-slate-200">
              Students get a simple and structured pathway instead of scattered information and costly mistakes.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-6">
            <h3 className="font-semibold">Personal Experience</h3>
            <p className="mt-2 text-sm leading-7 text-slate-200">
              Built by someone who understands the questions, pressure, and uncertainty international students face.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Services</p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Choose the level of support you need.
          </h2>
          <p className="mt-4 text-slate-600">
            Start with simple direction or choose full support for a more hands on experience through the application and visa preparation process.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-[2rem] border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                service.featured ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white"
              }`}
            >
              {service.featured && (
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  Most Popular
                </p>
              )}
              <div className="flex items-end justify-between gap-4">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-2xl font-bold">{service.price}</p>
              </div>
              <ul className={`mt-6 space-y-3 text-sm ${service.featured ? "text-slate-200" : "text-slate-600"}`}>
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className={`mt-1 h-2 w-2 rounded-full ${service.featured ? "bg-white" : "bg-slate-900"}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/16163495970?text=Hi%20Esther%2C%20I%27m%20interested%20in%20your%20services%20for%20studying%20in%20the%20U.S."
                className={`mt-8 inline-block rounded-2xl px-5 py-3 text-sm font-semibold ${
                  service.featured ? "bg-white text-slate-900" : "bg-slate-900 text-white"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">How it works</p>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight">A simple path from uncertainty to action.</h2>
              <div className="mt-8 space-y-4">
                {steps.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="pt-2 text-slate-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="about" className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">About Us</p>
              <h3 className="mt-3 font-serif text-2xl font-bold">A brand with a real story behind it.</h3>
              <p className="mt-5 leading-8 text-slate-600">
                Estel Global Education exists to give international students a trustworthy place to start. It was founded by Esther, an international student from Kenya who has personally gone through the U.S. education journey and understands how confusing the process can feel at the beginning.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                That personal experience is now translated into a more structured service. Along the way, Esther has also helped others secure school admissions by offering practical support with choosing programs, organizing applications, improving documents, and preparing with more confidence.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                The goal is not to look like a faceless agency. It is to offer students a credible and thoughtful service that feels both professional and real.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Why students trust Estel</p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight">Support that feels direct, practical, and honest.</h2>
            <div className="mt-8 space-y-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4 shadow-sm">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                  <p className="text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Important note</p>
            <h3 className="mt-3 font-serif text-2xl font-bold">Clear support with the right boundaries.</h3>
            <p className="mt-5 leading-8 text-slate-600">
              Estel Global Education provides guidance based on experience and preparation support for students. It does not offer legal immigration advice or representation. Admission and visa decisions are made by schools and government authorities.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Frequently asked questions</p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight">Common questions from students.</h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <button
                key={faq.q}
                type="button"
                onClick={() => setActiveFaq(isOpen ? null : index)}
                className="w-full rounded-3xl border border-slate-200 p-6 text-left shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">{faq.q}</h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {isOpen ? "Hide" : "Open"}
                  </span>
                </div>
                {isOpen && <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>}
              </button>
            );
          })}
        </div>
      </section>

      <section id="contact" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-serif text-3xl font-bold">Start your journey today</h2>
          <p className="mt-4 text-slate-300">
            Reach out privately through WhatsApp or email to begin your application journey.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/16163495970?text=Hi%20Esther%2C%20I%27m%20interested%20in%20guidance%20for%20studying%20in%20the%20U.S."
              className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-slate-900"
            >
              Open WhatsApp
            </a>
            <a
              href="mailto:consultingestel@gmail.com?subject=Estel%20Global%20Education%20Inquiry"
              className="inline-block rounded-xl border border-white px-6 py-3 font-semibold text-white"
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Estel Global Education. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
