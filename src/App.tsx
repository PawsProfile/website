import React from 'react';
import {
  Heart,
  Stethoscope,
  Calendar,
  Scissors,
  GraduationCap,
  Star,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Hero Section */}
      <header className="relative bg-gradient-to-r from-purple-100 to-pink-100 overflow-hidden">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold text-gray-800">PawsProfile</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
            </div>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
              Sign In
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6 pt-20 pb-24">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                All-in-One Pet Care Platform for Your Furry Family
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Keep your pets healthy, happy, and well-cared for with our comprehensive pet care management platform.
              </p>
              <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors flex items-center space-x-2">
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80"
                alt="Happy dog with owner"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Everything Your Pet Needs in One Place
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: <Stethoscope className="w-10 h-10 text-pink-500" />,
                title: "Veterinary Services",
                description: "24/7 access to veterinary consultations and health records"
              },
              {
                icon: <Calendar className="w-10 h-10 text-pink-500" />,
                title: "Health Tracking",
                description: "Monitor vaccinations, medications, and health metrics"
              },
              {
                icon: <Scissors className="w-10 h-10 text-pink-500" />,
                title: "Grooming",
                description: "Book professional grooming services and track grooming history"
              },
              {
                icon: <GraduationCap className="w-10 h-10 text-pink-500" />,
                title: "Training",
                description: "Access certified trainers and behavioral resources"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50" id="testimonials">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Loved by Pet Parents
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Johnson",
                pet: "Max",
                image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
                text: "PawsProfile has made managing Max's healthcare so much easier. The reminders for vaccinations are a lifesaver!"
              },
              {
                name: "David Chen",
                pet: "Luna",
                image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
                text: "The virtual vet consultations have saved us so many unnecessary trips to the clinic. Absolutely worth it!"
              },
              {
                name: "Emily Rodriguez",
                pet: "Bella",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
                text: "From grooming appointments to training sessions, everything is just a few clicks away. Simply amazing!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500">Pet Parent of {testimonial.pet}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Start Your Pet Care Journey Today
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors text-lg font-semibold">
                  Get Started Free
                </button>
              </div>
              <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-pink-500" />
                <span className="text-xl font-bold">PawsProfile</span>
              </div>
              <p className="text-gray-400">
                Making pet care simple, organized, and accessible for everyone.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Health Tracking</li>
                <li>Vet Consultations</li>
                <li>Grooming Services</li>
                <li>Training Programs</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PawsProfile. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;