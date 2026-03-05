import { Award, Users, Clock, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const highlights = [
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Highly qualified and experienced dental professionals'
    },
    {
      icon: Users,
      title: 'Patient-Focused',
      description: 'Personalized care approach for every patient'
    },
    {
      icon: Clock,
      title: 'Modern Facility',
      description: 'State-of-the-art equipment and technology'
    },
    {
      icon: CheckCircle,
      title: 'Quality Care',
      description: 'Comprehensive dental solutions under one roof'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Temple City Dental Clinic</h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Welcome to Temple City Dental Clinic, your trusted partner in achieving optimal oral health. Located in the heart of Mancheswar, Bhubaneswar, we have been providing exceptional dental care services to our community with a commitment to excellence and patient satisfaction.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our clinic combines modern technology with compassionate care, ensuring that every patient receives the highest standard of treatment. We believe that excellent dental care should be accessible, comfortable, and personalized to meet each individual's unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To provide comprehensive, high-quality dental care in a comfortable and welcoming environment. We are dedicated to improving our patients' oral health and overall well-being through advanced treatments and personalized attention.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We strive to make dental care affordable and accessible to everyone in our community while maintaining the highest standards of professionalism and ethics.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To be the leading dental clinic in Bhubaneswar, recognized for our commitment to excellence, innovation, and patient satisfaction. We envision a community where everyone has access to quality dental care and maintains a confident, healthy smile.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through continuous learning and adoption of latest dental technologies, we aim to set new standards in oral healthcare delivery.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg hover:shadow-lg transition-shadow">
                <IconComponent className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Why Choose Temple City Dental Clinic?</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-white bg-opacity-20 rounded-full mr-4 mt-1 flex-shrink-0"></span>
              <span>Experienced and skilled dental professionals with years of expertise</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-white bg-opacity-20 rounded-full mr-4 mt-1 flex-shrink-0"></span>
              <span>Advanced diagnostic tools and treatment technologies</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-white bg-opacity-20 rounded-full mr-4 mt-1 flex-shrink-0"></span>
              <span>Comfortable and hygienic clinical environment</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-white bg-opacity-20 rounded-full mr-4 mt-1 flex-shrink-0"></span>
              <span>Comprehensive range of dental services</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-white bg-opacity-20 rounded-full mr-4 mt-1 flex-shrink-0"></span>
              <span>Patient-centric approach with personalized treatment plans</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-white bg-opacity-20 rounded-full mr-4 mt-1 flex-shrink-0"></span>
              <span>Affordable pricing with transparent cost estimates</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
