import React from 'react';
import { 
  FileText, Building, Target, Users, 
  CheckCircle, AlertCircle, Calendar, 
  Shield, Zap, Globe, Award, Lock
} from 'lucide-react';
import HeroSection from '../components/shared/HeroSection';
import SectionHeader from '../components/shared/SectionHeader';
import GradientCard from '../components/shared/GradientCard';
import ContactModal from '../components/shared/ContactModal';
import { useState } from 'react';

const GrantsPage = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const grantPurposes = [
    {
      icon: Building,
      title: 'Company Registration & Legal Fees',
      description: 'Formal registration of Bounce Genesis Corps as a legal entity, including all government fees, notary costs, and legal documentation.',
      amount: '$15,000',
      priority: 'High Priority',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileText,
      title: 'Intellectual Property Protection',
      description: 'Trademark registration for all seven division names, logo protection, and patent filings for core technologies.',
      amount: '$25,000',
      priority: 'High Priority',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Legal compliance setup across multiple jurisdictions, regulatory filings, and compliance framework implementation.',
      amount: '$20,000',
      priority: 'Medium Priority',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Target,
      title: 'Operational Infrastructure',
      description: 'Initial operational setup including accounting systems, legal retainer fees, and administrative infrastructure.',
      amount: '$10,000',
      priority: 'Medium Priority',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const grantBenefits = [
    {
      icon: CheckCircle,
      title: 'First-Mover Recognition',
      description: 'Be recognized as the foundational supporter enabling the formal legal establishment of the entire ecosystem.',
      impact: 'High Impact',
    },
    {
      icon: Globe,
      title: 'Strategic Positioning',
      description: 'Preferred partner status across all seven divisions with early access to technology and partnership opportunities.',
      impact: 'Long-term Value',
    },
    {
      icon: Users,
      title: 'Governance Participation',
      description: 'Advisory role in ecosystem development and opportunity to participate in strategic decision-making forums.',
      impact: 'Influence',
    },
    {
      icon: Award,
      title: 'Brand Association',
      description: 'Official recognition as a founding grant partner in all press releases, documentation, and ecosystem materials.',
      impact: 'Visibility',
    },
  ];

  const timeline = [
    {
      phase: 'Immediate (Month 1)',
      actions: [
        'Company registration filing',
        'Legal entity establishment',
        'Bank account setup',
      ],
      status: 'Ready to Execute',
    },
    {
      phase: 'Short-term (Months 2-3)',
      actions: [
        'Trademark registrations',
        'IP portfolio protection',
        'Compliance framework',
      ],
      status: 'Planning Phase',
    },
    {
      phase: 'Medium-term (Months 4-6)',
      actions: [
        'Legal documentation completion',
        'Regulatory compliance',
        'Operational infrastructure',
      ],
      status: 'Development Phase',
    },
    {
      phase: 'Ongoing',
      actions: [
        'Legal maintenance',
        'IP portfolio expansion',
        'Regulatory updates',
      ],
      status: 'Continuous',
    },
  ];

  const useOfFunds = [
    { category: 'Legal & Registration', percentage: 40, amount: '$28,000' },
    { category: 'IP Protection', percentage: 30, amount: '$21,000' },
    { category: 'Compliance & Regulatory', percentage: 20, amount: '$14,000' },
    { category: 'Operational Setup', percentage: 10, amount: '$7,000' },
  ];

  const totalAmount = '$70,000';

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Enabling Formal Legal Establishment"
        subtitle="Seeking Grants for Bounce Genesis Corps Registration"
        description="We need foundational support to formally register Bounce Genesis Corps as a legal entity and protect our intellectual property. This is a critical step to establish the proper legal framework for all seven divisions."
        primaryButton={{
          text: 'Discuss Grant Partnership',
          onClick: () => setContactModalOpen(true),
        }}
        secondaryButton={{
          text: 'View Legal Structure',
          onClick: () => window.open('#', '_blank'),
        }}
        badge="⚖️ Legal Registration Required • Time-Sensitive"
        gradient="from-gray-900 to-gray-800"
      />

      {/* Urgency Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-b border-amber-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <AlertCircle className="text-amber-600 mr-4" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Time-Sensitive Need</h3>
                <p className="text-gray-700">Company name registration must be completed within the next 90 days to secure our brand and intellectual property.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center">
                <Calendar className="text-blue-600 mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Deadline</div>
                  <div className="text-lg font-bold text-gray-900">90 Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Purposes */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Grant Purposes"
            subtitle="How Funds Will Be Used"
            description="Every dollar contributes to establishing the legal foundation that will support all seven divisions of Bounce Genesis Corps."
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {grantPurposes.map((purpose, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${purpose.color} mr-4`}>
                      <purpose.icon size={24} className="text-gray-50" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{purpose.title}</h3>
                      <span className="inline-block mt-2 px-3 py-1 text-sm font-semibold bg-gray-100 text-gray-700 rounded-full">
                        {purpose.priority}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{purpose.amount}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{purpose.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Impact: Critical Infrastructure</span>
                    <span>Timeline: Immediate</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Use of Funds Visualization */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Total Grant Requirement: {totalAmount}</h3>
            
            <div className="mb-12">
              <div className="h-8 bg-gray-200 rounded-full overflow-hidden flex">
                {useOfFunds.map((item, index) => (
                  <div 
                    key={index}
                    className="h-full"
                    style={{ 
                      width: `${item.percentage}%`,
                      backgroundColor: index === 0 ? '#3b82f6' : 
                                     index === 1 ? '#8b5cf6' : 
                                     index === 2 ? '#10b981' : '#f59e0b'
                    }}
                    title={`${item.category}: ${item.percentage}%`}
                  />
                ))}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {useOfFunds.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-bold text-gray-900 mb-1">{item.category}</div>
                    <div className="text-gray-600 mb-1">{item.amount}</div>
                    <div className="text-sm text-gray-500">{item.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Why This Matters</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Lock className="text-gray-500 mr-3 mt-0.5" size={18} />
                  <div>
                    <div className="font-medium text-gray-900">Legal Protection</div>
                    <p className="text-sm text-gray-600">Without proper registration, our intellectual property and brand are vulnerable.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="text-gray-500 mr-3 mt-0.5" size={18} />
                  <div>
                    <div className="font-medium text-gray-900">Operational Enablement</div>
                    <p className="text-sm text-gray-600">Legal entity enables contracts, partnerships, and proper governance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Benefits for Grant Partners"
            subtitle="Strategic Value & Recognition"
            description="Supporting our legal establishment provides unique strategic advantages and long-term positioning within our ecosystem."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {grantBenefits.map((benefit, index) => (
              <GradientCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                stats={[{ label: 'Impact', value: benefit.impact }]}
                className="bg-white border border-gray-200"
              />
            ))}
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Implementation Timeline</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-400 hidden md:block"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 z-10 border-4 border-white"></div>
                    
                    <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className="md:w-1/2 md:pr-8 md:pl-8">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                          <h4 className="text-lg font-bold text-gray-900 mb-3">{item.phase}</h4>
                          <span className={`inline-block mb-4 px-3 py-1 text-sm font-semibold rounded-full ${
                            item.status === 'Ready to Execute' ? 'bg-green-100 text-green-800' :
                            item.status === 'Planning Phase' ? 'bg-blue-100 text-blue-800' :
                            item.status === 'Development Phase' ? 'bg-amber-100 text-amber-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {item.status}
                          </span>
                          
                          <ul className="space-y-2">
                            {item.actions.map((action, idx) => (
                              <li key={idx} className="flex items-center text-gray-600">
                                <CheckCircle size={16} className="text-green-500 mr-2" />
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Structure Context */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="The Legal Foundation"
              subtitle="Why This Registration Is Critical"
              description="Proper legal registration enables all seven divisions to operate efficiently while protecting our intellectual property and strategic vision."
              align="center"
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Current Situation</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <AlertCircle className="text-amber-500 mr-3 mt-0.5" size={18} />
                    <span className="text-gray-700">Operating without formal legal entity protection</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="text-amber-500 mr-3 mt-0.5" size={18} />
                    <span className="text-gray-700">Intellectual property at risk without trademark protection</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="text-amber-500 mr-3 mt-0.5" size={18} />
                    <span className="text-gray-700">Limited ability to enter formal partnerships and contracts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-50 mb-4">With Registration</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-0.5" size={18} />
                    <span className="text-gray-300">Full legal protection for brand and intellectual property</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-0.5" size={18} />
                    <span className="text-gray-300">Ability to establish formal partnerships and contracts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-0.5" size={18} />
                    <span className="text-gray-300">Proper governance structure for all seven divisions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-50 rounded-lg mb-6">
                <Award className="mr-3" />
                <span className="font-medium">Founding Grant Partner Opportunity</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Be Part of Our Foundation Story
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Your grant support will be permanently recorded as foundational to the establishment of Bounce Genesis Corps. 
                This is a unique opportunity to enable the legal framework for seven groundbreaking divisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="px-8 py-3.5 bg-gray-900 hover:bg-gray-800 text-gray-50 font-semibold rounded-lg transition-colors"
                >
                  Become a Founding Grant Partner
                </button>
                <button
                  onClick={() => window.open('#', '_blank')}
                  className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Download Detailed Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-6">
              Enable Our Legal Foundation
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Your grant support makes the formal establishment of Bounce Genesis Corps possible.
              Join us in building the legal framework for the future of digital existence.
            </p>
            <button
              onClick={() => setContactModalOpen(true)}
              className="px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-all hover:scale-105"
            >
              Discuss Grant Partnership
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
};

export default GrantsPage;