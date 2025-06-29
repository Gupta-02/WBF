import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Heart, Sparkles, Leaf, TreePine } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        
        {/* Nature Elements */}
        <div className="absolute top-10 left-10 opacity-10">
          <Leaf className="w-16 h-16 text-emerald-400 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-20 opacity-10">
          <TreePine className="w-20 h-20 text-emerald-400 animate-pulse" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-black dark:bg-white rounded-xl flex items-center justify-center shadow-lg">
                <img 
                  src="/image.png" 
                  alt="WBF Logo" 
                  className="w-14 h-14 object-contain filter dark:invert"
                />
              </div>
              <div>
                <span className="font-bold text-xl text-white">WBF</span>
                <div className="flex items-center space-x-1">
                  <Sparkles className="w-3 h-3 text-yellow-400" />
                  <span className="text-xs text-blue-300 font-medium">Enhansive & Colorful</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering India's student communities through structured advancement, 
              welfare, and execution opportunities with our colorful, comprehensive approach.
            </p>
            <div className="flex items-center space-x-2 text-emerald-300">
              <Heart className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-medium">Made with love for students</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white flex items-center space-x-2">
              <span>Quick Links</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Vertical Pillars', 'Initiatives', 'WBFx', 'Join Forum'].map((item, index) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === 0 ? 'bg-blue-400' :
                      index === 1 ? 'bg-purple-400' :
                      index === 2 ? 'bg-emerald-400' :
                      index === 3 ? 'bg-orange-400' : 'bg-pink-400'
                    } group-hover:scale-125`}></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Pillars */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white flex items-center space-x-2">
              <span>Our Pillars</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'OSAW', color: 'bg-blue-400', desc: 'Student Advancement' },
                { name: 'OCC', color: 'bg-emerald-400', desc: 'Cooperation' },
                { name: 'RAW', color: 'bg-purple-400', desc: 'Research & Analysis' },
                { name: 'SSPA', color: 'bg-orange-400', desc: 'Scam Protection' }
              ].map((pillar) => (
                <li key={pillar.name} className="group">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 ${pillar.color} rounded-full group-hover:scale-125 transition-transform duration-300`}></div>
                    <div>
                      <span className="text-white font-semibold">{pillar.name}</span>
                      <p className="text-xs text-gray-400">{pillar.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white flex items-center space-x-2">
              <span>Contact</span>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <a 
                    href="mailto:forumwisdombharati@gmail.com"
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-sm break-all"
                  >
                    forumwisdombharati@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300 text-sm">India & International</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-700/50 pt-12 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Active Members', value: '300+', color: 'from-blue-400 to-purple-400' },
              { label: 'States Covered', value: '20+', color: 'from-emerald-400 to-teal-400' },
              { label: 'Partner Companies', value: '20+', color: 'from-orange-400 to-red-400' },
              { label: 'Students Protected', value: '1000+', color: 'from-pink-400 to-purple-400' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 mb-2">
                © 2025 Wisdom Bharati Forum. All rights reserved.
              </p>
              <p className="text-sm text-gray-400 flex items-center justify-center md:justify-start space-x-2">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>for students by students</span>
                <Leaf className="w-4 h-4 text-emerald-400 ml-2" />
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {[
                { icon: Linkedin, color: 'hover:text-blue-400', bg: 'hover:bg-blue-500/20' },
                { icon: Twitter, color: 'hover:text-sky-400', bg: 'hover:bg-sky-500/20' },
                { icon: Github, color: 'hover:text-gray-300', bg: 'hover:bg-gray-500/20' }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href="#" 
                    className={`p-3 rounded-xl bg-gray-800/50 ${social.color} ${social.bg} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;