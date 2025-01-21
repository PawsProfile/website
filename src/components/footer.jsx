import React from 'react'
import { Heart } from 'lucide-react';

function footer() {
  return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold flex items-center mb-4">
                <Heart className="mr-2" /> VetCare
              </div>
              <p className="text-gray-400">Professional veterinary care for your beloved pets.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Checkups</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Vaccinations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Surgery</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Pet Street</li>
                <li>New York, NY 10001</li>
                <li>+1 (555) 123-4567</li>
                <li>contact@vetcare.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VetCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default footer
