import React from 'react';
import { Cpu, Lock, Zap, Code, Globe, Shield, Database, Network, Users, BarChart } from 'lucide-react';
import GradientCard from '../shared/GradientCard';

const LolaShowcase = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Autonomous On-Chain AI',
      description: 'Intelligent agents that execute complex operations across multiple blockchains with human-like reasoning.',
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Lock,
      title: 'Enterprise-Grade Security',
      description: 'Human-in-the-loop approval workflows, multi-agent consensus, and cryptographic guarantees for every transaction.',
      gradient: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      icon: Zap,
      title: '5-Minute Deployment',
      description: 'From zero to production-ready agent in under 5 minutes with zero configuration required.',
      gradient: 'from-amber-500/20 to-orange-500/20',
    },
    {
      icon: Code,
      title: 'Dual SDK Support',
      description: 'Complete feature parity between Python and Go SDKs. Write once, deploy anywhere.',
      gradient: 'from-violet-500/20 to-purple-500/20',
    },
    {
      icon: Globe,
      title: 'Multi-Chain Native',
      description: 'Unified interface for EVM, Solana, Cosmos, and cross-chain protocols. No chain-specific code needed.',
      gradient: 'from-rose-500/20 to-pink-500/20',
    },
    {
      icon: Shield,
      title: 'Built-in Compliance',
      description: 'Automated audit trails, regulatory reporting, and compliance frameworks built into every agent.',
      gradient: 'from-gray-500/20 to-slate-500/20',
    },
  ];

  const timeline = [
    { date: 'Dec 2025', title: 'Internal Testing', status: 'Current', description: 'Core team validation and stress testing' },
    { date: 'Jan 2026', title: 'Public Testnet', status: 'Upcoming', description: 'Limited public access with select partners' },
    { date: 'Q2 2026', title: 'Enterprise Pilot', status: 'Planned', description: 'First enterprise deployments' },
    { date: 'Q4 2026', title: 'Full Launch', status: 'Planned', description: 'General availability with full feature set' },
  ];

  const technicalMetrics = [
    { label: 'Agent Deployment Time', value: '<5 minutes' },
    { label: 'SDK Feature Parity', value: '100% Complete' },
    { label: 'Supported Chains', value: 'EVM + Solana + Cosmos' },
    { label: 'Security Layers', value: '4+ Integrated' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gray-900 text-gray-50 text-sm font-semibold rounded-full mb-4">
            🚀 Currently in Development
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            LOLA OS: The Intelligence Layer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Android OS for the on-chain agent economy. Build autonomous AI agents that interact with any blockchain in minutes, not months.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <GradientCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              hoverEffect={true}
              className="h-full"
            />
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Development Roadmap</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300" />
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8 md:mt-16'}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 md:left-auto ${
                    index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
                  } w-4 h-4 rounded-full border-4 border-white bg-gradient-to-r from-gray-400 to-gray-600 z-10`} />
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-500">{item.date}</span>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        item.status === 'Current' 
                          ? 'bg-blue-100 text-blue-700'
                          : item.status === 'Upcoming'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Metrics */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-50 mb-8 text-center">Technical Excellence</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technicalMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-50 mb-2">{metric.value}</div>
                <div className="text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LolaShowcase;