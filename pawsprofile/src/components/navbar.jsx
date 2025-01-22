import React from 'react'
import { motion } from 'framer-motion';
import { Heart, Shield, Clock, ChevronRight, Phone, Star, Stethoscope, Syringe, Scissors, FlaskRound as Flask, Dog, Bluetooth as Tooth } from 'lucide-react';

export default function navbar() {
  return (
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-blue-600 flex items-center"
            >
              <Heart className="mr-2" /> VetCare
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </nav>
  )
}

