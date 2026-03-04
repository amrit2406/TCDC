import { Smile, Sparkles, HeartPulse, Crown, Scissors, Activity, Drill, Sun, Waves, Stethoscope } from 'lucide-react';

const services = [
  {
    icon: Drill,
    title: 'Filling',
    description: 'Restore your teeth with durable, natural-looking fillings that blend seamlessly with your smile.',
  },
  {
    icon: Sparkles,
    title: 'Scaling & Tooth Cleaning',
    description: 'Professional deep cleaning to remove plaque, tartar, and stains for optimal oral health.',
  },
  {
    icon: HeartPulse,
    title: 'Root Canal Treatment',
    description: 'Advanced, painless root canal therapy to save infected teeth and relieve discomfort.',
  },
  {
    icon: Crown,
    title: 'Crown & Bridges',
    description: 'Custom-designed crowns and bridges to restore function and aesthetics of damaged teeth.',
  },
  {
    icon: Scissors,
    title: 'Extraction & Surgeries',
    description: 'Expert surgical procedures performed with precision and care for your comfort.',
  },
  {
    icon: Activity,
    title: 'Orthodontic Correction',
    description: 'Achieve a perfectly aligned smile with modern orthodontic treatments and braces.',
  },
  {
    icon: Stethoscope,
    title: 'Implants',
    description: 'Permanent tooth replacement solutions that look, feel, and function like natural teeth.',
  },
  {
    icon: Sun,
    title: 'Tooth Whitening',
    description: 'Professional whitening treatments for a brighter, more confident smile.',
  },
  {
    icon: Smile,
    title: 'Dentures',
    description: 'Custom-fitted dentures designed for comfort, function, and natural appearance.',
  },
  {
    icon: Waves,
    title: 'Gum Surgeries',
    description: 'Specialized periodontal treatments to maintain healthy gums and prevent disease.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
            Comprehensive Dental Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine check-ups to advanced procedures, we offer a complete range of dental services to meet all your oral health needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-cyan-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="tel:7008520133"
            className="inline-flex items-center gap-2 bg-cyan-600 text-white px-8 py-4 rounded-full hover:bg-cyan-700 transition-all hover:scale-105 font-semibold text-lg shadow-lg shadow-cyan-600/30"
          >
            Schedule Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
