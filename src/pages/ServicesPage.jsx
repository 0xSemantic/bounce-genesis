import React, { useState } from 'react';
import { Cpu, Heart, Shield, FileCheck, Coins, Clock, Globe, Zap, Users, Target, Code, Wrench, Layers, Briefcase } from 'lucide-react';
import HeroSection from '../components/shared/HeroSection';
import SectionHeader from '../components/shared/SectionHeader';
import GradientCard from '../components/shared/GradientCard';
import ContactModal from '../components/shared/ContactModal';

const ServicesPage = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [activeService, setActiveService] = useState('lola');

  const services = {
    lola: {
      icon: Cpu,
      title: 'LOLA OS',
      subtitle: 'Autonomous Agent Infrastructure',
      status: 'Available for Integration',
      statusColor: 'bg-blue-100 text-blue-700',
      description: 'The Android OS for the on-chain agent economy. Build, deploy, and manage autonomous AI agents that interact with any blockchain.',
      features: [
        'Multi-chain agent deployment',
        'Human-in-the-loop security',
        'Python & Go SDK parity',
        'Enterprise-grade compliance',
        '5-minute deployment time',
        'Cross-chain interoperability',
      ],
      useCases: [
        'DeFi yield optimization',
        'Cross-chain asset management',
        'Automated trading systems',
        'Blockchain analytics',
        'Smart contract monitoring',
      ],
      metrics: [
        { label: 'Deployment Time', value: '<5 min' },
        { label: 'Supported Chains', value: 'EVM + Solana + Cosmos' },
        { label: 'Security Layers', value: '4+' },
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    aura: {
      icon: Heart,
      title: 'AURA Systems',
      subtitle: 'Emotional Intelligence Layer',
      status: 'Available Q2 2026',
      statusColor: 'bg-purple-100 text-purple-700',
      description: 'Making every AI interaction feel genuinely human. Real-time emotion detection and adaptive response generation.',
      features: [
        'Real-time emotion detection',
        'Privacy-first architecture',
        'Zero-knowledge proofs',
        'Multi-modal sensing',
        'JavaScript/TypeScript SDK',
        'Python LLM integration',
      ],
      useCases: [
        'Customer service AI',
        'Mental health applications',
        'Educational platforms',
        'Enterprise training',
        'Content personalization',
      ],
      metrics: [
        { label: 'Privacy Guarantee', value: 'Zero-knowledge' },
        { label: 'Supported Modalities', value: 'Voice, Text, Visual' },
        { label: 'SDK Language', value: 'JavaScript/TypeScript' },
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    future: [
      {
        icon: Shield,
        title: 'SHIELD',
        subtitle: 'Universal Protection Layer',
        description: 'Military-grade security for games, websites, and AI agents.',
        status: 'Future Development',
        gradient: 'from-emerald-500 to-teal-500',
      },
      {
        icon: FileCheck,
        title: 'SOVEREIGN',
        subtitle: 'Compliance Truth Engine',
        description: 'Universal compliance verification with perfect regulatory proof.',
        status: 'Future Development',
        gradient: 'from-amber-500 to-orange-500',
      },
      {
        icon: Coins,
        title: 'SARVA',
        subtitle: 'Real-World Asset Liquidity',
        description: '<$0.01 asset tokenization with complete legal backing.',
        status: 'Future Development',
        gradient: 'from-violet-500 to-purple-500',
      },
      {
        icon: Clock,
        title: 'MOMENTA',
        subtitle: 'Temporal State Protocol',
        description: 'Provable forgetting and time-based state management.',
        status: 'Future Development',
        gradient: 'from-rose-500 to-pink-500',
      },
      {
        icon: Globe,
        title: 'BOUNCE',
        subtitle: 'Planetary Settlement Layer',
        description: 'Smartphone-native Layer 1 with 100M+ nodes.',
        status: 'Future Development',
        gradient: 'from-gray-600 to-gray-800',
      },
    ],
  };

  const activeServiceData = services[activeService];

  const consultingServices = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your specific needs.',
      price: 'Project-based',
    },
    {
      icon: Wrench,
      title: 'System Integration',
      description: 'Seamless integration of our systems into your existing infrastructure.',
      price: 'Hourly/Project',
    },
    {
      icon: Layers,
      title: 'Architecture Consulting',
      description: 'Expert guidance on system architecture and technology strategy.',
      price: 'Retainer/Hourly',
    },
    {
      icon: Briefcase,
      title: 'Enterprise Implementation',
      description: 'Full-scale deployment and management of enterprise solutions.',
      price: 'Enterprise Quote',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Technology Solutions & Services"
        subtitle="Enterprise-Grade Development & Integration"
        description="We provide expert consulting, custom development, and seamless integration services for cutting-edge blockchain and AI solutions."
        gradient="from-gray-900 to-gray-800"
      />

      {/* Service Selector */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setActiveService('lola')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeService === 'lola'
                  ? 'bg-gray-900 text-gray-50'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center">
                <Cpu size={20} className="mr-2" />
                LOLA OS Integration
              </div>
            </button>
            <button
              onClick={() => setActiveService('aura')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeService === 'aura'
                  ? 'bg-gray-900 text-gray-50'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center">
                <Heart size={20} className="mr-2" />
                AURA Systems Development
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Active Service Detail */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Overview */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${activeServiceData.gradient} mr-4`}>
                    <activeServiceData.icon size={24} className="text-gray-50" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{activeServiceData.title}</h2>
                    <p className="text-gray-600">{activeServiceData.subtitle}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${activeServiceData.statusColor}`}>
                  {activeServiceData.status}
                </span>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Overview</h3>
                <p className="text-gray-600 mb-6">{activeServiceData.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {activeServiceData.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeServiceData.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-4 bg-white border border-gray-200 rounded-xl">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center mr-4">
                        <Zap size={16} className="text-gray-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Enterprise Use Cases</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeServiceData.useCases.map((useCase, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="text-gray-700">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Service Options */}
            <div>
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 mb-6">
                  <h3 className="text-xl font-bold text-gray-50 mb-4">Service Status</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <div className="text-sm text-gray-300 mb-2">Current Phase</div>
                      <div className="text-gray-50 font-medium">
                        {activeService === 'lola' ? 'Available for Integration' : 'Available Q2 2026'}
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <div className="text-sm text-gray-300 mb-2">Service Model</div>
                      <div className="text-gray-50 font-medium">Consulting & Development</div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <div className="text-sm text-gray-300 mb-2">Entity Structure</div>
                      <div className="text-gray-50 font-medium">Independent Division LLC</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Development Services</h3>
                  <p className="text-gray-600 mb-6">
                    We offer custom development, integration, and consulting services for enterprise implementations.
                  </p>
                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="w-full py-3.5 bg-gray-900 hover:bg-gray-800 text-gray-50 font-semibold rounded-lg transition-colors mb-4"
                  >
                    {activeService === 'lola' ? 'Request LOLA Integration' : 'Plan AURA Implementation'}
                  </button>
                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="w-full py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Schedule Technical Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Professional Consulting Services"
            subtitle="Expert Guidance & Implementation"
            description="Our team provides comprehensive consulting and development services to help you implement cutting-edge solutions."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {consultingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 transition-colors">
                <div className="p-3 rounded-lg bg-gray-100 w-fit mb-4">
                  <service.icon size={24} className="text-gray-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="text-sm font-medium text-gray-700">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Future Technology Stack"
            subtitle="The Complete Vertical Integration"
            description="Our strategic vision includes additional layers that complete the digital existence ecosystem."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.future.map((service, index) => (
              <GradientCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                gradient={`bg-gradient-to-br ${service.gradient}`}
                tag={service.status}
                className="bg-white"
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Ecosystem</h3>
              <p className="text-gray-600 mb-6">
                Each division represents a specialized technology domain, allowing us to provide comprehensive solutions
                while maintaining deep expertise in each area.
              </p>
              <div className="flex items-center justify-center space-x-4 text-gray-500">
                <Users size={20} />
                <span className="text-sm">Expert technology teams</span>
                <Target size={20} />
                <span className="text-sm">Vertical specialization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
};

export default ServicesPage;