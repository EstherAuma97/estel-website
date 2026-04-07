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

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Estel Global Education
              </p>

              <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Helping international students secure U.S. Master’s admission with clear step by step guidance.
              </h1>

              <p className="mt-4 max-w-xl text-lg text-slate-600">
                Especially supporting Kenyan students through applications and visa preparation with practical, honest guidance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/16163495970?text=Hi%20Esther%2C%20I%27m%20interested%20in%20guidance%20for%20Master%E2%80%99s%20admission%20in%20the%20U.S."
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
                WhatsApp +1 (616) 349-5970 | consultingestel@gmail.com
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <p className="text-sm font-semibold text-slate-500">What students usually need most</p>
              <div className="mt-5 space-y-4">
                {[
                  "Choosing the right Master’s programs",
                  "Understanding the application process",
                  "Preparing strong documents",
                  "Getting ready for the visa interview",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="mt-4 text-slate-600">
            Choose the level of support you need for your Master’s application journey.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-slate-200 p-8">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-2xl font-bold">{service.price}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {service.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <a
                href="https://wa.me/16163495970"
                className="mt-6 inline-block rounded-xl bg-slate-900 px-5 py-3 text-white text-sm"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-4 text-slate-600 max-w-2xl">
            Estel Global Education was created to give international students, especially Kenyan students, a clear and honest starting point when applying for U.S. Master’s programs. Built by Esther, who has gone through the process, this platform focuses on clarity, trust, and real guidance.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">Start your journey today</h2>
          <p className="mt-4 text-slate-300">
            Reach out on WhatsApp or email to begin your Master’s application journey.
          </p>
          <a
            href="https://wa.me/16163495970"
            className="mt-6 inline-block rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
