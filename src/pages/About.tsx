import React from 'react';
import { Users, Target, BookOpen, Shield, TrendingUp, Award, Globe, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Users,
      title: 'Student-Centered',
      description: 'Every initiative is designed with students at the core, ensuring relevance and impact.',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      icon: Target,
      title: 'Action-Oriented',
      description: 'We believe in turning ideas into reality through structured execution and implementation.',
      color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400'
    },
    {
      icon: BookOpen,
      title: 'Research-Driven',
      description: 'Our initiatives are backed by thorough research and analysis for maximum effectiveness.',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    },
    {
      icon: Shield,
      title: 'Protection First',
      description: 'We maintain the highest standards of student safety and fraud prevention.',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    }
  ];

  const timeline = [
    {
      year: 'Origin',
      title: 'WhatsApp Beginnings',
      description: 'Started as a WhatsApp group by 10 passionate former interns concerned about fraudulent ed-tech companies.'
    },
    {
      year: 'Growth',
      title: 'Rapid Expansion',
      description: 'Grew from 10 members to 300+ active students across India and internationally, spanning 20+ states.'
    },
    {
      year: '2024',
      title: 'Major Milestones',
      description: 'Launched WSET, conducted Yuva Manthan, established university partnerships, and connected with 20+ recruiting companies.'
    },
    {
      year: '2025',
      title: 'Structured Operations',
      description: 'Launching formal cohorts and expanding our impact with structured programs and enhanced services.'
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: '300+ Active Members',
      description: 'Grown from 10 to 300+ students across India and internationally',
      stat: '300+'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Presence across 20+ states in India with international connections',
      stat: '20+'
    },
    {
      icon: Award,
      title: 'Partner Companies',
      description: 'Over 20 companies actively recruiting through WBF',
      stat: '20+'
    },
    {
      icon: Shield,
      title: 'Students Protected',
      description: 'Successfully protected thousands from fraudulent practices',
      stat: '1000+'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              About Wisdom Bharati Forum
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From a small WhatsApp group of concerned students to India's most trusted 
              student community with 300+ members fighting fraud and fostering growth.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Origin Story
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The Wisdom Bharati Forum (WBF) originated as a WhatsApp group formed by 10 passionate 
                  students who were former interns. This initiative was created to address concerns about 
                  fraudulent ed-tech companies and to foster a more informed student community.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our initial mission was to raise awareness about fraudulent practices within the ed-tech 
                  sector, aiming to equip students with the knowledge necessary to make informed decisions 
                  regarding their educational investments.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Since our beginning, WBF has grown significantly, expanding from an initial group of 10 
                  members to over 300 active student members both within India and internationally. This 
                  growth demonstrates the increasing need for informed student advocacy and support.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Growth Metrics
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {achievement.title}
                          </h4>
                          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {achievement.stat}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What WBF Does */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              What WBF Does
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our comprehensive approach to student empowerment and protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Scam Protection & Awareness
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our core mission - protecting students from deceptive educational practices through 
                informative campaigns and readily available resources.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Real-time scam alerts and warnings</li>
                <li>• Educational workshops on fraud identification</li>
                <li>• Community reporting and verification systems</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Career Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Connecting students with genuine opportunities through our network of 20+ recruiting companies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• WSET - Wisdom Skills Evaluation Test</li>
                <li>• Direct company recruitment partnerships</li>
                <li>• Skill assessment and improvement programs</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Research & Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Conducting in-depth research on educational trends, student needs, and industry demands.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Educational trend analysis</li>
                <li>• Policy research and recommendations</li>
                <li>• Data-driven decision making support</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Global Network
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Building connections with universities both within India and internationally, expanding reach and influence.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• University partnerships and collaborations</li>
                <li>• International student exchange programs</li>
                <li>• Cross-cultural learning opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that have guided us from 10 members to 300+
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mx-auto`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From a WhatsApp group to India's most trusted student community
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{item.year}</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Why Partner with WBF?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Dynamic Network
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Access to 300+ engaged student members spanning 20+ states with unique insights and perspectives.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Mission-Driven
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Prioritizing student advancement and institutional innovation over profit, ensuring meaningful impact.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Innovation Culture
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Encouraging creative solutions for real-world problems through grassroots approach to change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              To create an ecosystem where young minds thrive with purpose and direction, 
              building India's most comprehensive and action-oriented student community 
              that transforms ideas into impactful realities while protecting students from fraud.
            </p>
            <div className="mt-8">
              <p className="text-lg text-blue-200">
                <strong>Invitation to Collaborate:</strong> We extend an invitation to angel investors, 
                CSR heads, and educational institutions to collaborate in empowering the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;