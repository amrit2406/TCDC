import { Award, Users, Heart, Shield } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Expert Care',
    description: 'Highly qualified dental professionals with years of experience',
  },
  {
    icon: Shield,
    title: 'Modern Technology',
    description: 'State-of-the-art equipment for precise and comfortable treatments',
  },
  {
    icon: Heart,
    title: 'Patient-Centered',
    description: 'Your comfort and satisfaction are our top priorities',
  },
  {
    icon: Users,
    title: 'Trusted by Many',
    description: 'Serving the Bhubaneswar community with excellence',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-6">
              Your Trusted Dental Partner
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              At MO Dental Clinic, we are committed to providing exceptional dental care in a warm and welcoming environment. Our team of experienced professionals uses the latest technology and techniques to ensure you receive the best possible treatment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Whether you need a routine check-up or a complex procedure, we take the time to understand your needs and create personalized treatment plans that deliver outstanding results.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-cyan-600 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Dental treatment"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Dental clinic"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/3779711/pexels-photo-3779711.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Dental equipment"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Happy patient"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
