import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you achieve the smile of your dreams. Contact us to schedule your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-cyan-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Our Location</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Plot no- 2405, Infront of Apollo Pharmacy,<br />
                    Golakha, Mancheswar,<br />
                    Bhubaneswar, Odisha 751010
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-cyan-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Phone Number</h3>
                  <a
                    href="tel:7008520133"
                    className="text-cyan-600 hover:text-cyan-700 font-semibold text-lg"
                  >
                    70085 20133
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-cyan-600 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Working Hours</h3>
                  <p className="text-gray-700">
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Email Us</h3>
                  <a
                    href="mailto:info@modentalclinic.com"
                    className="text-cyan-600 hover:text-cyan-700 font-semibold"
                  >
                    info@modentalclinic.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-cyan-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Book Your Appointment</h3>
              <p className="mb-6 opacity-90">
                Ready to take the first step towards a healthier smile? Call us now or visit our clinic.
              </p>
              <a
                href="tel:7008520133"
                className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-semibold text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>

          <div className="h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.345!2d85.8143!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7e9e7e00001%3A0x1!2sGolakha%2C%20Mancheswar%2C%20Bhubaneswar%2C%20Odisha%20751010!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MO Dental Clinic Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
