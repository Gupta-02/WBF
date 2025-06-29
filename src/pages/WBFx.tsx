import React from 'react';
import { Zap, Lightbulb, Cog, TrendingUp, Users, Target, ArrowRight } from 'lucide-react';

const WBFx: React.FC = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'AI & Emerging Tech',
      description: 'Cutting-edge solutions in artificial intelligence, machine learning, and emerging technologies.',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      icon: Target,
      title: 'Sustainability & Climate',
      description: 'Environmental solutions and sustainable development projects for a better future.',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    },
    {
      icon: Users,
      title: 'Consulting for NGOs/Startups',
      description: 'Strategic consulting and operational support for non-profits and emerging startups.',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    },
    {
      icon: Cog,
      title: 'Project Implementation',
      description: 'End-to-end project delivery services turning concepts into measurable results.',
      color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '15+', color: 'text-blue-600 dark:text-blue-400' },
    { label: 'Client Satisfaction', value: '98%', color: 'text-green-600 dark:text-green-400' },
    { label: 'Revenue Generated', value: '₹2L+', color: 'text-purple-600 dark:text-purple-400' },
    { label: 'Team Members', value: '12+', color: 'text-teal-600 dark:text-teal-400' }
  ];

  const features = [
    'Execution-first approach to problem solving',
    'Youth-driven innovation and fresh perspectives',
    'Cost-effective solutions for emerging organizations',
    'Rapid prototyping and iterative development',
    'Knowledge products and educational resources',
    'Sustainable business model with social impact'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>Execution-First by Design</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Meet
              <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                WBFx
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              WBF's in-house execution arm, created to turn ideas into action. 
              Operating as a youth execution engine across AI, sustainability, consulting, and project delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Our Service Areas
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              WBFx operates across four key domains, delivering innovative solutions 
              with a youth-first approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 h-full">
                    <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About WBFx Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                What Makes WBFx Different?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                WBFx is currently unincorporated but operates as a dynamic execution engine 
                within the WBF ecosystem. We're expected to become a private limited company in FY 2025–26.
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Revenue Model
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="font-medium text-blue-900 dark:text-blue-300">
                    Micro-Consulting
                  </span>
                  <span className="text-blue-700 dark:text-blue-400">40%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
                  <span className="font-medium text-teal-900 dark:text-teal-300">
                    Project Delivery
                  </span>
                  <span className="text-teal-700 dark:text-teal-400">35%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                  <span className="font-medium text-purple-900 dark:text-purple-300">
                    Knowledge Products
                  </span>
                  <span className="text-purple-700 dark:text-purple-400">25%</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
                <p className="text-white text-sm">
                  <strong>Impact First:</strong> A portion of all revenue contributes back to WBF's 
                  student welfare initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Future Roadmap
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4">
                  <span className="font-bold">2025</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Incorporation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  WBFx becomes a private limited company with structured operations and expanded team.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-xl flex items-center justify-center mb-4">
                  <span className="font-bold">2026</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Scale Up
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Expand service offerings and establish partnerships with major organizations.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-4">
                  <span className="font-bold">2027</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  National Impact
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Become India's leading youth-driven execution platform with nationwide presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Execute Your Ideas?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Partner with WBFx to turn your concepts into impactful realities. 
              Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-colors duration-200 font-semibold"
              >
                Get Started
              </a>
              <a
                href="/join"
                className="px-8 py-3 border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WBFx;