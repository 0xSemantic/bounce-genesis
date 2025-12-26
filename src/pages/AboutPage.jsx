import React, { useState } from 'react';
import { Users, Target, Eye, Lock, Zap, Globe, Cpu, Heart, Building, Rocket } from 'lucide-react';
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
      description: '@0xSemantic has final say on all strategic decisions. Clear, unified vision execution.',
      gradient: 'from-gray-800 to-gray-900',
    },
    {
      icon: Lock,
      title: 'No External Co-Founders',
      description: 'All equity stays within the Corps. Complete alignment, no dilution of vision.',
      gradient: 'from-gray-700 to-gray-800',
    },
    {
      icon: Zap,
      title: 'Revenue Feeds the Flywheel',
      description: 'No division keeps 100%. All profits reinvested into the organism-level growth.',
      gradient: 'from-gray-600 to-gray-700',
    },
    {
      icon: Eye,
      title: 'Zero Data Silos',
      description: 'All data shared internally. Complete transparency across all seven divisions.',
      gradient: 'from-gray-500 to-gray-600',
    },
    {
      icon: Target,
      title: 'We Own the Primitives',
      description: 'Never rely on competitors for core layers. Complete vertical integration.',
      gradient: 'from-gray-400 to-gray-500',
    },
    {
      icon: Globe,
      title: 'Infrastructure, Not Competition',
      description: 'We never compete with our users. We build the layers they build upon.',
      gradient: 'from-gray-300 to-gray-400',
    },
  ];

  const leadership = [
    {
      name: '@0xSemantic',
      role: 'Commander & Architect',
      description: 'Visionary behind the complete stack. Formerly built multiple successful ventures in AI, blockchain, and infrastructure.',
      tags: ['Strategy', 'Architecture', 'Execution'],
    },
  ];

  const eras = [
    {
      name: 'Era 1: Foundational Trinity',
      years: '2025-2027',
      description: 'Build the brain, heart, and immune system of the digital organism.',
      divisions: ['LOLA', 'AURA', 'SHIELD'],
      focus: 'Intelligence, Emotion, Protection',
    },
    {
      name: 'Era 2: Trust Infrastructure',
      years: '2028-2030',
      description: 'Capture truth and liquidity layers for regulatory compliance and real-world asset integration.',
      divisions: ['SOVEREIGN', 'SARVA'],
      focus: 'Truth, Liquidity',
    },
    {
      name: 'Era 3: Settlement Organism',
      years: '2030-2035',
      description: 'Close the loop with time and planetary settlement layers.',
      divisions: ['MOMENTA', 'BOUNCE'],
      focus: 'Time, Settlement',
    },
  ];

  const entityStructure = [
    {
      icon: Building,
      title: 'Bounce Genesis Corps',
      description: 'The umbrella C-Corp that holds strategic control and coordinates all divisions.',
      type: 'Delaware C-Corp',
    },
    {
      icon: Cpu,
      title: 'Independent Divisions',
      description: 'Each division operates as its own legal entity with independent development.',
      type: 'LLC / Ltd / Foundation',
    },
    {
      icon: Users,
      title: 'Strategic Oversight',
      description: 'Centralized vision and coordination while maintaining operational independence.',
      type: 'Umbrella Management',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="From Genesis, Everything Bounces"
        subtitle="The Marine Corps of Technology"
        description="We are seven elite divisions under one command structure, each operating as an independent entity while contributing to the unified vision."
        gradient="from-gray-900 to-gray-800"
      />

      {/* Entity Structure */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Entity Architecture"
            subtitle="Independent Divisions, Unified Vision"
            description="Each division operates as its own legal entity with independent development, all coordinated under the Bounce Genesis umbrella."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
                <p className="text-gray-600">{entity.description}</p>
              </div>
            ))}
          </div>

          {/* Development Strategy - Replaced Funding Strategy */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 mb-20">
            <h3 className="text-2xl font-bold text-gray-50 mb-6 text-center">Development Strategy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-50 mb-2">Strategic</div>
                <div className="text-gray-400">Long-term vision focus</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-50 mb-2">Partnerships</div>
                <div className="text-gray-400">Ecosystem collaborations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-50 mb-2">Independent</div>
                <div className="text-gray-400">Division-level development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-50 mb-2">Sustainable</div>
                <div className="text-gray-400">Revenue-driven growth</div>
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
              description="We own every layer of digital existence. No other entity on Earth is attempting this full vertical stack."
              align="center"
              className="mb-16"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Complete Stack</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Intelligence (who acts), Emotion (who feels), Security (who survives), 
                    Truth (who proves), Liquidity (who owns reality), Time (who knows when to stop), 
                    and Settlement (who carries the weight of the world).
                  </p>
                  <div className="flex items-center text-gray-500">
                    <span className="text-sm font-medium">Vertical Integration • Complete Control • Maximum Efficiency</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6">
                  <h4 className="text-gray-50 font-bold text-lg mb-2">One Organism</h4>
                  <p className="text-gray-300 text-sm">
                    Seven divisions, one biological system. Each strengthens the others.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6">
                  <h4 className="text-gray-50 font-bold text-lg mb-2">No Dependencies</h4>
                  <p className="text-gray-300 text-sm">
                    We own the entire stack. No third-party risks or bottlenecks.
                  </p>
                </div>
              </div>
            </div>

            {/* Commandments */}
            <SectionHeader
              title="Internal Commandments"
              subtitle="Non-Negotiables (Locked Forever)"
              align="center"
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {commandments.map((commandment, index) => (
                <GradientCard
                  key={index}
                  icon={commandment.icon}
                  title={commandment.title}
                  description={commandment.description}
                  gradient={`bg-gradient-to-br ${commandment.gradient}`}
                  className="text-gray-50 border-0"
                  border={false}
                />
              ))}
            </div>

            {/* Three Eras */}
            <SectionHeader
              title="The 10-Year Campaign"
              subtitle="Strategic Rollout Across Three Eras"
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

      {/* CTA Section - Removed grant-focused wording */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-6">
              Partner with Us
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              We're seeking strategic partners and collaborators to advance our long-term vision.
            </p>
            <button
              onClick={() => setContactModalOpen(true)}
              className="px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-all hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
};

export default AboutPage;