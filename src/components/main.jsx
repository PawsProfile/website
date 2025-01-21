import React from 'react'
import { motion } from 'framer-motion';
import { Heart, Shield, Clock, ChevronRight, Phone, Star, Stethoscope, Syringe, Scissors, FlaskRound as Flask, Dog, Bluetooth as Tooth } from 'lucide-react';

function main() {
    
    const services = [
        {
          icon: <Stethoscope className="w-12 h-12 text-blue-600" />,
          title: "Wellness Examinations",
          description: "Comprehensive health check-ups including physical examination, vaccination review, and preventive care recommendations.",
          image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          icon: <Syringe className="w-12 h-12 text-blue-600" />,
          title: "Vaccinations",
          description: "Core and lifestyle vaccinations to protect your pet against common diseases, customized based on their age, lifestyle, and risk factors.",
          image: "https://plus.unsplash.com/premium_photo-1661954422066-36639b6f13b5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          icon: <Scissors className="w-12 h-12 text-blue-600" />,
          title: "Surgery Services",
          description: "State-of-the-art surgical procedures including spaying/neutering, soft tissue surgery, and orthopedic procedures.",
          image: "https://plus.unsplash.com/premium_photo-1661942274165-00cc8d55a93f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          icon: <Flask className="w-12 h-12 text-blue-600" />,
          title: "Laboratory Services",
          description: "In-house diagnostics including blood work, urinalysis, and parasitology for quick and accurate results.",
          image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          icon: <Dog className="w-12 h-12 text-blue-600" />,
          title: "Pet Grooming",
          description: "Professional grooming services including bathing, trimming, nail care, and specialized treatments for skin conditions.",
          image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          icon: <Tooth className="w-12 h-12 text-blue-600" />,
          title: "Dental Care",
          description: "Complete dental services including cleaning, extractions, and preventive care to maintain your pet's oral health.",
          image: "https://images.unsplash.com/photo-1632236542159-809925d85fc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ];

  return (
    <main>
    {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your Pet's Health Is Our Priority
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional veterinary care with a personal touch. Book an appointment today for your furry friend.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center">
                Book Appointment <ChevronRight className="ml-2" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors flex items-center">
                <Phone className="mr-2" /> Call Us
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1587764379873-97837921fd44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Veterinarian with dog"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive care for your beloved pets</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600">We provide the best care for your beloved pets</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="w-12 h-12 text-blue-600" />,
              title: "Expert Care",
              description: "Our team of experienced veterinarians provides the highest quality care"
            },
            {
              icon: <Clock className="w-12 h-12 text-blue-600" />,
              title: "24/7 Support",
              description: "Round-the-clock emergency veterinary services when you need us"
            },
            {
              icon: <Star className="w-12 h-12 text-blue-600" />,
              title: "Modern Facilities",
              description: "State-of-the-art equipment and comfortable environment for your pets"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="bg-blue-600 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { number: "10,000+", label: "Happy Pets" },
            { number: "15+", label: "Expert Vets" },
            { number: "98%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Pet Parents Say</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Sarah Johnson",
              text: "The care and attention my dog received was exceptional. The staff is incredibly professional and caring.",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            {
              name: "Michael Chen",
              text: "Best veterinary care I've ever experienced. They truly treat your pets like their own family members.",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4 justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-yellow-500 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
  )
}

export default main
