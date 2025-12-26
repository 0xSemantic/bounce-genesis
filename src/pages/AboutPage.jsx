import React, { useState } from 'react';
import { Users, Target, Eye, Lock, Zap, Globe, Cpu, Heart, Building, Rocket, Github, Twitter, Linkedin, Mail, MessageCircle } from 'lucide-react';
import HeroSection from '../components/shared/HeroSection';
import SectionHeader from '../components/shared/SectionHeader';
import GradientCard from '../components/shared/GradientCard';
import ContactModal from '../components/shared/ContactModal';

const AboutPage = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const commandments = [
    {
      icon: Users,
      title: 'One Commander',
      description: '@0xSemantic provides strategic and architectural direction, ensuring cohesive execution across the integrated technology stack.',
      gradient: 'from-gray-800 to-gray-900',
    },
    {
      icon: Lock,
      title: 'Integrated Equity Model',
      description: 'Strategic control is maintained within the organization to ensure long-term vision alignment and project continuity.',
      gradient: 'from-gray-700 to-gray-800',
    },
    {
      icon: Zap,
      title: 'Revenue Funds Innovation',
      description: 'Resources are strategically reinvested across the ecosystem to drive continuous technological advancement and service offerings.',
      gradient: 'from-gray-600 to-gray-700',
    },
    {
      icon: Eye,
      title: 'Zero Data Silos',
      description: 'Complete data transparency and interoperability across all seven divisions for integrated solution delivery.',
      gradient: 'from-gray-500 to-gray-600',
    },
    {
      icon: Target,
      title: 'We Own the Primitives',
      description: 'Complete vertical integration ensures control over core technology layers and solution reliability.',
      gradient: 'from-gray-400 to-gray-500',
    },
    {
      icon: Globe,
      title: 'Infrastructure, Not Competition',
      description: 'We provide the foundational layers upon which our clients build and innovate.',
      gradient: 'from-gray-300 to-gray-400',
    },
  ];

  const leadership = [
    {
      name: '@0xSemantic (Levi Chinecherem Chidi)',
      role: 'Chief Architect & Executive Director',
      description: 'Architect of the complete technology stack. Provides executive oversight, solution architecture, and ensures operational excellence across all integrated divisions.',
      tags: ['Enterprise Architecture', 'Strategic Technology', 'Solution Design'],
      socials: [
        { icon: Github, link: 'https://github.com/0xSemantic', label: 'GitHub' },
        { icon: Twitter, link: 'https://twitter.com/0xSemantic', label: 'Twitter' },
        { icon: Linkedin, link: 'https://linkedin.com/in/0xSemantic', label: 'LinkedIn' },
      ]
    },
  ];

  const eras = [
    {
      name: 'Era 1: Foundational Trinity',
      years: '2025-2027',
      description: 'Establishing the core intelligent, emotional, and security layers of our integrated service offerings.',
      divisions: ['LOLA', 'AURA', 'SHIELD'],
      focus: 'Intelligence, Emotion, Protection',
    },
    {
      name: 'Era 2: Trust Infrastructure',
      years: '2028-2030',
      description: 'Introducing compliance, verification, and real-world asset integration services.',
      divisions: ['SOVEREIGN', 'SARVA'],
      focus: 'Truth, Liquidity',
    },
    {
      name: 'Era 3: Settlement Organism',
      years: '2030-2035',
      description: 'Delivering complete temporal and planetary-scale settlement solutions.',
      divisions: ['MOMENTA', 'BOUNCE'],
      focus: 'Time, Settlement',
    },
  ];

  const entityStructure = [
    {
      icon: Building,
      title: 'Bounce Genesis Corps',
      description: 'The strategic oversight entity that coordinates technology development and professional service delivery across the integrated ecosystem.',
      type: 'Technology & Solutions Provider',
      details: 'Strategic technology oversight & service integration'
    },
    {
      icon: Cpu,
      title: 'Specialized Service Divisions',
      description: 'Each technology division operates as a specialized unit, focusing on distinct service verticals while contributing to integrated client solutions.',
      type: 'Specialized Service Units',
      details: 'Focused verticals with integrated solution delivery'
    },
    {
      icon: Users,
      title: 'Integrated Service Delivery',
      description: 'Resources and expertise are coordinated across divisions to deliver comprehensive technology solutions and consulting services.',
      type: 'Professional Services',
      details: 'Cross-division expertise for client solutions'
    },
  ];

  const serviceModel = [
    {
      title: 'Specialized Service Divisions',
      description: 'Each division focuses on delivering distinct, high-value technology solutions and consulting.',
      color: 'bg-gray-100 border-gray-200',
    },
    {
      title: 'Integrated Service Delivery',
      description: 'Divisions collaborate under the strategic umbrella to provide comprehensive client solutions.',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      title: 'Continuous Innovation',
      description: 'Resources are allocated to drive ongoing technological advancement and service enhancement.',
      color: 'bg-green-50 border-green-200',
    },
    {
      title: 'Operational Excellence',
      description: 'Divisions maintain focused operations while contributing to the broader technology vision.',
      color: 'bg-purple-50 border-purple-200',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="From Genesis, Everything Bounces"
        subtitle="Integrated Technology Solutions"
        description="We are a federation of elite technology divisions under unified strategic direction, each delivering specialized services while contributing to comprehensive client solutions."
        gradient="from-gray-900 to-gray-800"
      />

      {/* Entity Structure */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Organizational Architecture"
            subtitle="Specialized Divisions, Integrated Solutions"
            description="Each technology division operates with focused expertise, all coordinated under the Bounce Genesis strategic umbrella to deliver comprehensive professional services."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {entityStructure.map((entity, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gray-100 mr-4">
                    <entity.icon size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{entity.title}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {entity.type}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{entity.description}</p>
                <p className="text-sm text-gray-500 italic">{entity.details}</p>
              </div>
            ))}
          </div>

          {/* Service Model */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Services Model</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceModel.map((item, index) => (
                <div key={index} className={`border rounded-2xl p-6 ${item.color}`}>
                  <div className="text-lg font-bold text-gray-900 mb-2">{item.title}</div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>Specialized divisions → Integrated service delivery → Comprehensive client solutions</p>
            </div>
          </div>

          {/* Development Strategy */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 mb-20">
            <h3 className="text-2xl font-bold text-gray-50 mb-6 text-center">Strategic Technology Model</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-50 mb-2">Specialized</div>
                <div className="text-gray-400">Division-level expertise</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-50 mb-2">Integrated</div>
                <div className="text-gray-400">Unified strategic direction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-50 mb-2">Client-Focused</div>
                <div className="text-gray-400">Tailored solution delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-50 mb-2">Innovation</div>
                <div className="text-gray-400">Continuous advancement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Our Genesis Vision"
              subtitle="Why Bounce Genesis Corps Exists"
              description="We deliver every layer of modern digital existence. No other provider offers this complete vertical technology stack as professional services."
              align="center"
              className="mb-16"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Complete Technology Stack</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We provide professional services across the full spectrum: Intelligence (autonomous systems), 
                    Emotion (human-AI interaction), Security (digital protection), Truth (compliance verification), 
                    Liquidity (asset digitization), Time (temporal systems), and Settlement (planetary-scale operations).
                  </p>
                  <div className="flex items-center text-gray-500">
                    <span className="text-sm font-medium">Vertical Integration • Complete Solutions • Professional Delivery</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6">
                  <h4 className="text-gray-50 font-bold text-lg mb-2">Specialized Divisions</h4>
                  <p className="text-gray-300 text-sm">
                    Each division delivers focused expertise as part of our integrated service offerings.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6">
                  <h4 className="text-gray-50 font-bold text-lg mb-2">Strategic Coordination</h4>
                  <p className="text-gray-300 text-sm">
                    Unified strategic direction ensures cohesive delivery of comprehensive technology solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Commandments */}
            <SectionHeader
              title="Core Principles"
              subtitle="Foundational Operating Principles"
              align="center"
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {commandments.map((commandment, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${commandment.gradient} rounded-2xl p-6 text-gray-50 border-0`}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-white/10 rounded-lg mr-3">
                      <commandment.icon size={20} className="text-gray-50" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-50">{commandment.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{commandment.description}</p>
                </div>
              ))}
            </div>

            {/* Three Eras */}
            <SectionHeader
              title="Strategic Technology Roadmap"
              subtitle="Phased Service Offering Development"
              align="center"
              className="mb-12"
            />

            <div className="space-y-8">
              {eras.map((era, index) => (
                <div key={index} className="relative">
                  {/* Era line connector */}
                  {index < eras.length - 1 && (
                    <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-400" />
                  )}
                  
                  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{era.name}</h3>
                          <div className="flex items-center mt-2">
                            <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                              {era.years}
                            </span>
                            <span className="text-sm text-gray-500 ml-4">{era.focus}</span>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0">
                          <div className="flex flex-wrap gap-2">
                            {era.divisions.map((division, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 text-xs font-semibold bg-gray-900 text-gray-50 rounded-full"
                              >
                                {division}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">{era.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Executive Leadership"
            subtitle="Technology Architecture & Strategic Direction"
            description="Providing the vision and technical direction that coordinates specialized divisions to deliver integrated client solutions."
            align="center"
            className="mb-16"
          />

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">LC</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">{leadership[0].name}</h3>
                  <p className="text-gray-600 mt-1">{leadership[0].role}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {leadership[0].tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{leadership[0].description}</p>
              
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Executive Contact</h4>
                <div className="flex flex-wrap gap-3">
                  {leadership[0].socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors group"
                    >
                      <social.icon size={16} className="mr-2" />
                      <span className="text-sm font-medium">{social.label}</span>
                      <span className="ml-2 text-xs text-gray-500 group-hover:text-gray-700">→</span>
                    </a>
                  ))}
                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    <span className="text-sm font-medium">Discuss Solutions</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated: Project Formation Notice */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 rounded-lg mb-6 border border-amber-200">
              <span className="font-medium">📋 Project Formation Notice</span>
            </div>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
              Bounce Genesis is a project in formation. The entity 'Bounce Genesis Corps' is planned to be incorporated in Delaware. 
              All descriptions of structure, services, and operations are forward-looking and based on current planning. 
              This website represents our strategic vision and intended service offerings.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-6">
              Engage with Integrated Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              We provide professional consulting, software development, and enterprise integration services across our ecosystem of specialized technology divisions.
            </p>
            <button
              onClick={() => setContactModalOpen(true)}
              className="px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-all hover:scale-105"
            >
              Discuss Your Technology Needs
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
};

export default AboutPage;