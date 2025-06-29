import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  Users, 
  Shield, 
  BookOpen, 
  Target, 
  Calendar,
  ArrowRight,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';

const Initiatives: React.FC = () => {
  const currentInitiatives = [
    {
      id: 1,
      title: 'Student Mentorship Program',
      description: 'Connecting experienced professionals with students for career guidance and skill development.',
      pillar: 'OSAW',
      status: 'Active',
      participants: '150+',
      icon: Users,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      progress: 75
    },
    {
      id: 2,
      title: 'Scam Alert Network',
      description: 'Real-time alerts and awareness campaigns to protect students from fraudulent activities.',
      pillar: 'SSPA',
      status: 'Active',
      participants: '500+',
      icon: Shield,
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      progress: 90
    },
    {
      id: 3,
      title: 'Youth Policy Research',
      description: 'Comprehensive research on policies affecting Indian students and youth.',
      pillar: 'RAW',
      status: 'In Progress',
      participants: '25+',
      icon: BookOpen,
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      progress: 45
    },
    {
      id: 4,
      title: 'Community Outreach Program',
      description: 'Building partnerships with educational institutions and student organizations.',
      pillar: 'OCC',
      status: 'Active',
      participants: '200+',
      icon: Target,
      color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
      progress: 60
    }
  ];

  const upcomingInitiatives = [
    {
      title: 'AI Skills Bootcamp',
      description: 'Intensive training program on artificial intelligence and machine learning.',
      launchDate: 'March 2025',
      pillar: 'OSAW',
      icon: Lightbulb
    },
    {
      title: 'Student Startup Incubator',
      description: 'Supporting student entrepreneurs with mentorship and resources.',
      launchDate: 'April 2025',
      pillar: 'WBFx',
      icon: Target
    },
    {
      title: 'Digital Literacy Campaign',
      description: 'Educating students about digital safety and online best practices.',
      launchDate: 'May 2025',
      pillar: 'SSPA',
      icon: Shield
    }
  ];

  const stats = [
    { label: 'Active Initiatives', value: '12+', icon: Target },
    { label: 'Students Impacted', value: '1000+', icon: Users },
    { label: 'Success Rate', value: '95%', icon: Star },
    { label: 'Partner Organizations', value: '25+', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Initiatives
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Driving meaningful change through structured programs and community-driven projects 
            that empower students across India.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center space-y-3">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Initiatives */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Current Initiatives
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Active programs making a real impact in the student community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentInitiatives.map((initiative) => {
              const IconComponent = initiative.icon;
              return (
                <div key={initiative.id} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${initiative.color} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {initiative.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          initiative.status === 'Active' 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                            : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                        }`}>
                          {initiative.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {initiative.pillar} Initiative
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {initiative.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Progress</span>
                      <span className="font-medium text-gray-900 dark:text-white">{initiative.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {initiative.participants} participants
                      </span>
                      <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium flex items-center space-x-1">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Initiatives */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Upcoming Initiatives
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Exciting new programs launching soon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingInitiatives.map((initiative, index) => {
              const IconComponent = initiative.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{initiative.launchDate}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {initiative.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {initiative.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">
                      {initiative.pillar}
                    </span>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                      Get Notified
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Lead an Initiative?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Have an idea that can make a difference? Join WBF and turn your vision into reality 
              with our support and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/join"
                className="px-8 py-3 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-colors duration-200 font-semibold"
              >
                Join the Forum
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Propose Initiative
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Initiatives;