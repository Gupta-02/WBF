import React from 'react';
import { Users, MessageCircle, Search, Shield, ArrowRight } from 'lucide-react';

const Pillars: React.FC = () => {
  const pillars = [
    {
      id: 'osaw',
      title: 'OSAW',
      fullName: 'Office of Student Advancement & Welfare',
      icon: Users,
      description: 'Dedicated to empowering students by offering resources and support for their academic and professional development. This initiative organizes workshops, mentorship programs, and networking events to help students achieve their full potential.',
      features: [
        'Skill Development Programs',
        'Mentorship Matching with Industry Professionals',
        'Career Guidance and Counseling',
        'Networking Events and Workshops',
        'Personal Development Sessions',
        'WSET - Wisdom Skills Evaluation Test'
      ],
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      borderColor: 'border-blue-200 dark:border-blue-800',
      bgGradient: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20'
    },
    {
      id: 'sspa',
      title: 'SSPA',
      fullName: 'Student Scam Protection & Awareness',
      icon: Shield,
      description: 'The core pillar that started WBF - shielding students from deceptive educational practices and raising awareness about potential scams. Through various informative campaigns and readily available resources, SSPA equips students with the necessary knowledge to identify and steer clear of fraudulent companies.',
      features: [
        'Real-time Scam Alerts and Warnings',
        'Educational Workshops on Fraud Identification',
        'Community Reporting Systems',
        'Verification of Educational Programs',
        'Protection Tools and Resources',
        'Awareness Campaigns Across Campuses'
      ],
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      borderColor: 'border-green-200 dark:border-green-800',
      bgGradient: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20'
    },
    {
      id: 'raw',
      title: 'RAW',
      fullName: 'Research & Analysis Wing',
      icon: Search,
      description: 'Conducts in-depth research and analysis on educational trends, student needs, and industry demands. This data-driven approach informs policy-making and enhances both student experience and institutional effectiveness.',
      features: [
        'Educational Trend Analysis',
        'Policy Research and Recommendations',
        'Youth-Centric Studies and Surveys',
        'Industry Demand Analysis',
        'Data Analytics and Insights',
        'Market Research for Student Opportunities'
      ],
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      borderColor: 'border-purple-200 dark:border-purple-800',
      bgGradient: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20'
    },
    {
      id: 'ofcc',
      title: 'OFCC',
      fullName: 'Office of Cooperation and Coordination',
      icon: MessageCircle,
      description: 'Acts as a link between students and campus initiatives, championing innovations that improve the student experience. By encouraging collaboration among various stakeholders, the OFCC brings about significant change within educational institutions.',
      features: [
        'Internal Communications Management',
        'External Partnership Development',
        'University Collaboration Programs',
        'Event Coordination and Management',
        'Public Relations and Outreach',
        'Stakeholder Engagement Initiatives'
      ],
      color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
      borderColor: 'border-teal-200 dark:border-teal-800',
      bgGradient: 'from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Four Core Pillars
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            WBF operates through four specialized verticals, each designed to address 
            specific aspects of student development, protection, and empowerment.
          </p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={pillar.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl ${pillar.color} flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {pillar.title}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                          {pillar.fullName}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {pillar.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Key Focus Areas:
                      </h3>
                      <ul className="space-y-2">
                        {pillar.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Visual */}
                  <div className="flex-1">
                    <div className={`bg-gradient-to-br ${pillar.bgGradient} rounded-3xl p-8 border-2 ${pillar.borderColor}`}>
                      <div className="aspect-square flex items-center justify-center">
                        <IconComponent className={`w-32 h-32 ${pillar.color.replace('bg-', 'text-').replace('dark:bg-', 'dark:text-')}`} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Integrated Approach
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our four pillars work together seamlessly to provide comprehensive support 
              for student development, ensuring no aspect of growth or protection is overlooked.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={pillar.id} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-200">
                    <div className={`w-12 h-12 rounded-xl ${pillar.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {pillar.fullName}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Pillar Success Stories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real impact achieved through our four-pillar approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">SSPA Impact</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Protected 1000+ Students from Fraud
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Our scam protection initiatives have successfully prevented thousands of students 
                from falling victim to fraudulent ed-tech companies and fake opportunities.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">OSAW Achievement</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                20+ Companies Recruiting Through WBF
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Our career development programs have established partnerships with over 20 companies 
                actively recruiting our community members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Our Pillars?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Join WBF and benefit from our comprehensive four-pillar approach to student development and protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/join"
                className="px-8 py-3 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-colors duration-200 font-semibold"
              >
                Join the Forum
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pillars;