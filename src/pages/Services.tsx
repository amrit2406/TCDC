import { Sparkles, Zap, Gem, Drill, Smile, Heart, Wrench, Wind, Pipette, Scissors } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Sparkles,
      title: 'Tooth Whitening',
      description: 'Professional teeth whitening treatments to enhance your smile brightness and radiance'
    },
    {
      icon: Zap,
      title: 'Filling',
      description: 'High-quality dental fillings to restore decayed or damaged teeth with precision'
    },
    {
      icon: Wind,
      title: 'Scaling & Tooth Cleaning',
      description: 'Professional cleaning to remove plaque and tartar for optimal oral hygiene'
    },
    {
      icon: Gem,
      title: 'Root Canal Treatment',
      description: 'Expert endodontic treatment to save infected or damaged teeth'
    },
    {
      icon: Drill,
      title: 'Crown & Bridges',
      description: 'Custom-made dental crowns and bridges to restore missing or damaged teeth'
    },
    {
      icon: Heart,
      title: 'Extraction & Surgeries',
      description: 'Safe tooth extraction and oral surgical procedures with minimal discomfort'
    },
    {
      icon: Smile,
      title: 'Orthodontic Correction',
      description: 'Professional orthodontic treatments for teeth alignment and beautiful bite'
    },
    {
      icon: Wrench,
      title: 'Implants',
      description: 'Dental implants for permanent tooth replacement solutions'
    },
    {
      icon: Pipette,
      title: 'Dentures',
      description: 'Custom dentures to restore full mouth functionality and appearance'
    },
    {
      icon: Scissors,
      title: 'Gum Surgeries',
      description: 'Advanced gum treatment procedures for periodontal health'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care solutions tailored to meet all your oral health needs. From preventive care to advanced treatments, we have you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-xl hover:border-cyan-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 inline-block p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg group-hover:from-cyan-200 group-hover:to-blue-200 transition-all">
                  <IconComponent className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Preventive Care</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-cyan-600 font-bold mr-3">•</span>
                <span>Regular check-ups and examinations</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 font-bold mr-3">•</span>
                <span>Professional cleaning and scaling</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 font-bold mr-3">•</span>
                <span>Oral health education and guidance</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 font-bold mr-3">•</span>
                <span>Fluoride treatment for cavity prevention</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Treatment</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Root canal therapy</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Implant placement and restoration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Oral and maxillofacial surgeries</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Cosmetic dentistry procedures</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
