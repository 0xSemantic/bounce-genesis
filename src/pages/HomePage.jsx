import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Sparkles, Zap, Globe, Shield, Cpu, Heart, Users, Target, Building } from 'lucide-react';
import HeroSection from '../components/shared/HeroSection';
import SectionHeader from '../components/shared/SectionHeader';
import GradientCard from '../components/shared/GradientCard';
import LolaShowcase from '../components/sections/LolaShowcase';
import AuraPreview from '../components/sections/AuraPreview';
import ContactModal from '../components/shared/ContactModal';

const HomePage = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const visionPillars = [
    {
      icon: Cpu,
      title: 'Intelligence Layer',
      description: 'Autonomous agents that think, analyze, and execute across any blockchain.',
      gradient: 'from-blue-500 to-cyan-500',
      link: '/current-build',
    },
    {
      icon: Heart,
      title: 'Emotion Layer',
      description: 'Emotional intelligence that makes every AI interaction feel genuinely human.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Protection Layer',
      description: 'Unbreakable security for agents, users, and the entire ecosystem.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Globe,
      title: 'Planetary Scale',
      description: 'Settlement layer running on 100M+ smartphones worldwide.',
      gradient: 'from-gray-600 to-gray-800',
    },
  ];

  const ecosystemStats = [
    { value: '7', label: 'Vertical Divisions', description: 'Complete stack ownership' },
    { value: '10', label: 'Year Vision', description: 'Strategic rollout plan' },
    { value: '10M+', label: 'Target Nodes', description: 'Smartphone-native deployment' },
    { value: '1', label: 'Unified Organism', description: 'Seven divisions, one system' },
  ];

  const developmentStrategy = [
    {
      icon: Building,
      title: 'Strategic Development',
      description: 'Building foundational infrastructure through focused research and development.',
      color: 'text-blue-500',
    },
    {
      icon: Users,
      title: 'Ecosystem Partnerships',
      description: 'Collaborations with forward-thinking organizations and technology leaders.',
      color: 'text-purple-500',
    },
    {
      icon: Target,
      title: 'Market Positioning',
      description: 'First-mover advantage in the autonomous agent infrastructure space.',
      color: 'text-emerald-500',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="The Operating System for Digital Existence"
        subtitle="Seven vertical divisions. One unified organism. One future."
        description="Bounce Genesis Corps is building the complete stack for the next generation of digital economy through strategic development and partnerships."
        primaryButton={{
          text: 'Explore Current Build',
          onClick: () => window.location.href = '/current-build',
          icon: ArrowRight
        }}
        secondaryButton={{
          text: 'Contact Us',
          onClick: () => setContactModalOpen(true)
        }}
        badge="🚀 Building the Future of Digital Infrastructure"
        gradient="from-gray-900 to-gray-800"
      />

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="We Are Not Building Products"
            subtitle="We Are Building One Organism"
            description="Each division is an organ in a single body—autonomous but interconnected, powerful but coordinated."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {visionPillars.map((pillar, index) => (
              <GradientCard
                key={index}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                gradient={`bg-gradient-to-br ${pillar.gradient}`}
                hoverEffect={true}
                onClick={() => pillar.link && (window.location.href = pillar.link)}
                className="group cursor-pointer"
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {ecosystemStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Development Strategy - Replaced Funding Strategy */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <SectionHeader
              title="Development Strategy"
              subtitle="Strategic Growth & Market Leadership"
              description="We are advancing our long-term vision through strategic development and ecosystem partnerships."
              align="center"
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {developmentStrategy.map((strategy, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <div className={`p-3 rounded-lg bg-gray-100 w-fit mb-4 ${strategy.color.replace('text-', '')}`}>
                    <strategy.icon size={24} className={strategy.color} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{strategy.title}</h3>
                  <p className="text-gray-600">{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Builds */}
      <LolaShowcase />
      <AuraPreview />

      {/* CTA Section - Removed grant-focused wording */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full mb-6">
              <Sparkles size={14} className="text-gray-300 mr-2" />
              <span className="text-sm text-gray-300">Join Us in Building the Future</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-50 mb-6">
              Build the Foundation of Digital Existence
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              We're seeking strategic partners and collaborators to advance our mission of building the complete stack for the next generation of digital economy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setContactModalOpen(true)}
                className="px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-all hover:scale-105 flex items-center justify-center"
              >
                Get in Touch
                <ArrowRight className="ml-2" size={20} />
              </button>
              
              <Link
                to="/about"
                className="px-8 py-4 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-gray-200 font-semibold rounded-lg transition-colors flex items-center justify-center"
              >
                Learn About Our Vision
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Current focus: LOLA OS (Internal Testing) • AURA Systems (Starting Q2 2026) • Strategic development
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
};

export default HomePage;