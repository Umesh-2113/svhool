"use client";

import { useState, useEffect } from 'react';
import { Star, Heart, Users, BookOpen, Palette, Music, Trophy, ArrowRight, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroImages = [
    "https://isolated-moccasin-048akshog1.edgeone.app/img1.jpeg",
    "https://disciplinary-plum-ujimpjxcej.edgeone.app/img3.jpeg",
    "https://solar-orange-a7afjaerar.edgeone.app/img2.jpeg"
  ];

  const features = [
    { icon: BookOpen, title: "Creative Learning", desc: "Interactive and engaging curriculum" },
    { icon: Users, title: "Small Classes", desc: "Personal attention for every child" },
    { icon: Palette, title: "Arts & Crafts", desc: "Nurturing creativity and imagination" },
    { icon: Music, title: "Music & Dance", desc: "Developing rhythm and expression" },
    { icon: Trophy, title: "Sports", desc: "Building confidence and teamwork" },
    { icon: Heart, title: "Care & Love", desc: "A warm, nurturing environment" }
  ];

  const testimonials = [
    { name: "Sarah Johnson", text: "My daughter loves coming to school every day!", rating: 5 },
    { name: "Michael Chen", text: "Excellent teachers and wonderful facilities.", rating: 5 },
    { name: "Emma Williams", text: "Best decision we made for our child's education.", rating: 5 }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
             <div className="text-center md:text-left">
          <p className="text-2xl  text-gray-900 font-bold ">
            मातेश्वरी बाल विद्या मंदिर प्राथमिक विद्यालय खारची  (08200601102)
          </p>
          <h1 className="text-xl font-bold text-gray-900">
            MATESHWARI BAL VIDHYA MANDIR PRIMARY SCHOOL KHARCHI
          </h1>
        </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">About</a>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Programs</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
  <span className="bg-gradient-to-r from-blue-600  via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
    मातेश्वरी बाल विद्या मंदिर में
  </span>
  <br />
  <span className="text-gray-800 animate-fade-in">आपका स्वागत है</span>
</h1>

<p className="text-xl text-gray-700 font-bold mb-8 leading-relaxed text-center animate-slide-up">
  जहाँ सीखना मजेदार है, रचनात्मकता को बढ़ावा दिया जाता है, और हर बच्चा सूरज से भी अधिक चमकता है!
  <br />
  🌟 हमारे जादुई खोज और विकास की यात्रा में शामिल हों 🌟
</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
               
              </div>
            </div>
            <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={heroImages[currentSlide]}
                  alt="Happy children learning"
                  className="w-full h-96 object-cover transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full animate-bounce flex items-center justify-center">
                <Star className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500 rounded-full animate-pulse flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-purple-600">Sunshine?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a nurturing environment where children develop confidence, creativity, and a lifelong love of learning.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-purple-600">Programs</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pre-K (Ages 3-4)",
                desc: "Foundation building through play-based learning",
                image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643",
                color: "from-pink-500 to-rose-500"
              },
              {
                title: "Kindergarten (Ages 4-5)",
                desc: "Reading readiness and social skill development",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Elementary (Ages 6-10)",
                desc: "Core academics with creative exploration",
                image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
                color: "from-purple-500 to-indigo-500"
              }
            ].map((program, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <p className="text-white/90">{program.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Parents Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+919680316393</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">matesvarikharchi@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">Main Road Kharchi Marwad junction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Schedule a Visit</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Parent's Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Tell us about your child"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  Schedule Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">MATESHWARI BAL VIDHYA MANDIR PRIMARY SCHOOL KHARCHI  </span>
              </div>
              <p className="text-gray-400">Nurturing young minds since 1995</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Admissions</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Programs</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Calendar</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Pre-K</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Kindergarten</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Elementary</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">After School</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 MATESHWARI BAL VIDHYA MANDIR PRIMARY SCHOOL KHARCHI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}