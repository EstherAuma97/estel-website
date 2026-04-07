export default function EstelGlobalEducationWebsite() {
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
    "Attend your visa interview with confidence.",
  ];

  const faqs = [
    {
      q: "Do you guarantee admission or visa approval?",
      a: "No. Estel Global Education provides guidance and preparation support based on experience and best practices. Admission and visa decisions are always made by schools and government authorities.",
    },
    {
      q: "Do you provide legal immigration advice?",
      a: "No. This service does not provide legal advice. It offers educational guidance for students navigating the school application and visa preparation process.",
    },
    {
      q: "Who is this for?",
      a: "This service is designed for Kenyan students who want clear, trustworthy support when applying to study in the United States.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Estel Global Education
              </p>
              <h1 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Helping Kenyan students move to the U.S. for school with clarity and confidence.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Get step by step guidance for university applications, document preparation, and visa interview readiness from someone who understands the journey.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
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
                Trusted guidance based on lived experience. Not legal immigration advice.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <div className="rounded-3xl bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-500">What students need most</p>
                <div className="mt-5 space-y-4">
                  {[
                    "Choosing the right schools",
                    "Understanding the application process",
                    "Preparing strong documents",
                    "Getting ready for the visa interview",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                      <p className="text-sm text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 rounded-[2rem] bg-slate-900 p-8 text-white lg:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Why Estel</p>
            <h2 className="mt-3 text-2xl font-bold">A trustworthy guide in a space full of confusion.</h2>
          </div>
          <div className="rounded-3xl bg-white/10 p-6">
            <h3 className="font-semibold">Clear Process</h3>
            <p className="mt-2 text-sm leading-7 text-slate-200">
              Students get a simple, structured pathway instead of scattered information and costly mistakes.
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
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Choose the level of support you need.</h2>
          <p className="mt-4 text-slate-600">
            Start with simple direction or choose full support for a more hands on experience through the application and visa preparation process.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-slate-200 p-8 shadow-sm">
              <div className="flex items-end justify-between gap-4">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-2xl font-bold">{service.price}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-block rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">How it works</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">A simple path from uncertainty to action.</h2>
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

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">About</p>
              <h3 className="mt-3 text-2xl font-bold">Built from real experience.</h3>
              <p className="mt-5 leading-8 text-slate-600">
                Estel Global Education exists to give Kenyan students a trustworthy place to start. Instead of relying on confusing online advice or unverified agents, students receive clear guidance, honest expectations, and structured support throughout the process.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                The mission is simple: help students move forward with confidence, avoid common mistakes, and understand each step of the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Frequently asked questions</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Common questions from students.</h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{faq.q}</h3>
              <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Contact</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to start your U.S. study journey?
              </h2>
              <p className="mt-4 max-w-xl leading-8 text-slate-300">
                Reach out to book a consultation and get clarity on the next step for your school application and visa preparation.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 text-slate-900 shadow-xl">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Full Name</label>
                  <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Email</label>
                  <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none" placeholder="Your email" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">What do you need help with?</label>
                  <textarea className="min-h-[120px] w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none" placeholder="Tell us where you are in the process" />
                </div>
                <button className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
