import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Shield, Zap, ArrowRight, Star, TrendingUp, Building, Award, Sparkles, Globe, Heart } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Members', value: '300+', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { icon: Building, label: 'Partner Companies', value: '20+', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
    { icon: Shield, label: 'Students Protected', value: '1000+', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/30' },
    { icon: Award, label: 'States Covered', value: '20+', color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-100 dark:bg-orange-900/30' }
  ];

  const features = [
    {
      icon: Users,
      title: 'Global Community',
      description: 'Connect with 300+ passionate students across India and internationally in our vibrant ecosystem',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30',
      border: 'border-blue-200 dark:border-blue-800',
      iconBg: 'bg-blue-500'
    },
    {
      icon: Target,
      title: 'Career Opportunities',
      description: 'Access exclusive opportunities with 20+ recruiting companies and personalized career guidance',
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/30',
      border: 'border-emerald-200 dark:border-emerald-800',
      iconBg: 'bg-emerald-500'
    },
    {
      icon: Shield,
      title: 'Scam Protection',
      description: 'Stay safe with our proven awareness systems and real-time fraud protection alerts',
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30',
      border: 'border-purple-200 dark:border-purple-800',
      iconBg: 'bg-purple-500'
    },
    {
      icon: Zap,
      title: 'Skill Development',
      description: 'WSET evaluations, comprehensive skill enhancement, and cutting-edge learning resources',
      color: 'text-orange-600 dark:text-orange-400',
      bg: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/30',
      border: 'border-orange-200 dark:border-orange-800',
      iconBg: 'bg-orange-500'
    }
  ];

  const achievements = [
    {
      title: 'Yuva Manthan Pehchan Edition',
      description: 'Successfully conducted interactive discussions and workshops for student empowerment across multiple cities',
      icon: Star,
      color: 'from-pink-500 to-rose-500',
      textColor: 'text-pink-600 dark:text-pink-400'
    },
    {
      title: 'Wisdom Skills Evaluation Test (WSET)',
      description: 'Launched comprehensive skill assessment platform connecting students with premium opportunities',
      icon: Target,
      color: 'from-indigo-500 to-purple-500',
      textColor: 'text-indigo-600 dark:text-indigo-400'
    },
    {
      title: 'University Partnerships',
      description: 'Built strategic connections with universities across India and internationally for student exchange',
      icon: Building,
      color: 'from-teal-500 to-cyan-500',
      textColor: 'text-teal-600 dark:text-teal-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span>Enhansive & Colorful Student Community</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Welcome to
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-pulse">
                  Wisdom Bharati Forum
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                From 10 passionate students to <span className="font-bold text-blue-600 dark:text-blue-400">300+ members</span> across 
                <span className="font-bold text-emerald-600 dark:text-emerald-400"> 20+ states</span> - 
                India's most <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">trusted & colorful</span> student community
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-800/20">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Born from a WhatsApp group of former interns concerned about fraudulent ed-tech companies, 
                  WBF has evolved into a <span className="font-semibold text-purple-600 dark:text-purple-400">comprehensive platform</span> empowering students through 
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400"> awareness</span>, 
                  <span className="font-semibold text-blue-600 dark:text-blue-400"> skill development</span>, and 
                  <span className="font-semibold text-orange-600 dark:text-orange-400"> genuine opportunities</span>.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/join"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold">Join 300+ Members</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/wbfx"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="font-semibold flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Explore WBFx</span>
                </span>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl p-8 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
              <p className="text-center text-gray-800 dark:text-gray-200 mb-3">
                <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Serving 300+ active students across India & internationally
                </span>
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                  20+ recruiting companies
                </span>
                <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">
                  University partnerships
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full font-medium">
                  Proven scam protection
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center space-y-4 group">
                  <div className="flex justify-center">
                    <div className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-blue-100 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Enhansive Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WBF?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Proven track record of protecting and empowering students with our colorful, comprehensive approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group">
                  <div className={`${feature.bg} rounded-3xl p-8 shadow-lg border-2 ${feature.border} hover:shadow-2xl hover:border-opacity-50 transition-all duration-300 h-full transform group-hover:-translate-y-2`}>
                    <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
              <span>Colorful Achievements</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Milestones</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Celebrating achievements that showcase our commitment to student empowerment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 h-full transform group-hover:-translate-y-2">
                    <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-emerald-600/90"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm">
              <Heart className="w-4 h-4" />
              <span>Join the Movement</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Ready to Join the
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Colorful Movement?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Be part of India's most <span className="font-bold text-yellow-300">trusted & enhansive</span> student community with 
              <span className="font-bold text-pink-300"> 300+ members</span> and growing
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/join"
                className="group px-10 py-4 bg-white text-purple-600 rounded-2xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Join the Forum</span>
                </span>
              </Link>
              <Link
                to="/about"
                className="group px-10 py-4 border-3 border-white text-white rounded-2xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="flex items-center space-x-3">
                  <Globe className="w-6 h-6" />
                  <span>Learn More</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;