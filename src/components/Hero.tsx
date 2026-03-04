import { Phone, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
                Premium Dental Care
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Smile
              <span className="block text-cyan-600">Our Priority</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Experience world-class dental care at MO Dental Clinic. We provide comprehensive dental solutions with state-of-the-art technology and compassionate care.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:7008520133"
                className="inline-flex items-center gap-2 bg-cyan-600 text-white px-8 py-4 rounded-full hover:bg-cyan-700 transition-all hover:scale-105 font-semibold text-lg shadow-lg shadow-cyan-600/30"
              >
                <Phone className="w-5 h-5" />
                Book Appointment
              </a>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all border-2 border-cyan-600 font-semibold text-lg"
              >
                Our Services
              </button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-start gap-3">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Open Daily</p>
                  <p className="text-sm text-gray-600">9 AM - 8 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <a href="tel:7008520133" className="text-sm text-cyan-600 hover:underline">
                    70085 20133
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-sm text-gray-600">Bhubaneswar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dental Care"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-100 p-4 rounded-full">
                    <svg className="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-cyan-600">10+</p>
                    <p className="text-gray-600 font-medium">Services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-8 right-8 w-full h-full bg-gradient-to-br from-cyan-200 to-blue-200 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
