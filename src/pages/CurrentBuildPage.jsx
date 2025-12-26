import React, { useState } from 'react';
import { 
  Cpu, Code, Lock, Zap, Globe, Shield, 
  Database, Network, Users, BarChart,
  Calendar, Target, Rocket, CheckCircle
} from 'lucide-react';
import HeroSection from '../components/shared/HeroSection';
import SectionHeader from '../components/shared/SectionHeader';
import GradientCard from '../components/shared/GradientCard';
import ContactModal from '../components/shared/ContactModal';

const CurrentBuildPage = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const technicalArchitecture = [
    {
      layer: 'Developer Interface',
      components: ['Python SDK', 'Go SDK', 'CLI', 'REST API'],
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      layer: 'Orchestration Engine',
      components: ['Security Engine', 'Memory Manager', 'Tool Router', 'Audit System'],
      icon: Network,
      color: 'from-purple-500 to-pink-500',
    },
    {
      layer: 'Execution Layer',
      components: ['Multi-Chain Gateway', 'AI Service Gateway', 'External Services'],
      icon: Cpu,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      layer: 'Security & Compliance',
      components: ['Human-in-the-Loop', 'Multi-Agent Consensus', 'Audit Trails', 'Compliance'],
      icon: Shield,
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const roadmap = [
    {
      phase: 'Phase 0: Foundation',
      timeframe: 'Weeks 1-4',
      status: 'Current',
      deliverables: [
        'Auto-Discovery System',
        'Minimal Python SDK',
        'Multi-Chain Foundation',
        '5-Minute Tutorial',
      ],
      progress: 100,
    },
    {
      phase: 'Phase 1: Intelligence & Security',
      timeframe: 'Weeks 5-8',
      status: 'In Progress',
      deliverables: [
        'AI Integration (LiteLLM)',
        'Human-in-the-Loop Approval',
        'Go SDK Completion',
        'Cross-Chain Operations',
      ],
      progress: 60,
    },
    {
      phase: 'Phase 2: Production & Scaling',
      timeframe: 'Weeks 9-12',
      status: 'Planned',
      deliverables: [
        'Advanced Security Features',
        'Performance Optimization',
        'Observability & Monitoring',
        'Enterprise Features',
      ],
      progress: 0,
    },
    {
      phase: 'Phase 3: Ecosystem',
      timeframe: 'Weeks 13-16',
      status: 'Planned',
      deliverables: [
        'Agent Marketplace',
        'Visual Builder',
        'Advanced Multi-Agent',
        'Community Features',
      ],
      progress: 0,
    },
  ];

  const useCases = [
    {
      category: 'DeFi & Trading',
      examples: [
        'Automated yield optimization',
        'Cross-chain arbitrage',
        'Portfolio rebalancing',
        'Risk management',
      ],
      icon: BarChart,
    },
    {
      category: 'Enterprise',
      examples: [
        'Supply chain tracking',
        'Automated compliance',
        'Cross-border payments',
        'Asset tokenization',
      ],
      icon: Users,
    },
    {
      category: 'Infrastructure',
      examples: [
        'Blockchain monitoring',
        'Smart contract automation',
        'Data indexing',
        'Oracle management',
      ],
      icon: Database,
    },
  ];

  const keyMetrics = [
    { label: 'Time to First Agent', value: '<5 minutes', description: 'From zero to running agent' },
    { label: 'SDK Feature Parity', value: '100%', description: 'Python ↔ Go complete equality' },
    { label: 'Chain Support', value: 'EVM + Solana + Cosmos', description: 'Unified multi-chain interface' },
    { label: 'Security Layers', value: '4+', description: 'Human-in-the-loop + consensus' },
    { label: 'Inference Speed', value: '<100ms', description: 'Local model execution' },
    { label: 'Deployment Options', value: 'Any Environment', description: 'Cloud, on-prem, edge' },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="LOLA OS: The Intelligence Layer"
        subtitle="Live Onchain Logical Agents"
        description="Currently in internal testing. Public testnet launching January 2026. The complete operating system for autonomous on-chain AI agents."
        primaryButton={{
          text: 'Request Testing Access',
          onClick: () => setContactModalOpen(true),
        }}
        secondaryButton={{
          text: 'View Technical Documentation',
          onClick: () => window.open('#', '_blank'),
        }}
        badge="🚀 Internal Testing Phase • Launching Jan 2026"
        gradient="from-gray-900 to-gray-800"
      />

      {/* Page Navigation */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex overflow-x-auto py-4 space-x-1">
            {['overview', 'architecture', 'roadmap', 'usecases', 'metrics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? 'bg-gray-900 text-gray-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab === 'overview' && 'Overview'}
                {tab === 'architecture' && 'Architecture'}
                {tab === 'roadmap' && 'Roadmap'}
                {tab === 'usecases' && 'Use Cases'}
                {tab === 'metrics' && 'Metrics'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                title="The Android OS for On-Chain Agents"
                subtitle="Complete Foundation for Autonomous Applications"
                description="LOLA OS makes blockchain interaction as natural as file I/O, AI reasoning as seamless as function calls, and security as built-in as type checking."
                className="mb-16"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Core Promise</h3>
                    <p className="text-gray-600 mb-6">
                      Any developer can build and run their first agent in <strong>5 minutes or less</strong>. 
                      Zero configuration required, intelligent defaults, progressive complexity disclosure.
                    </p>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle size={20} className="text-green-500 mr-2" />
                      <span>Complete functional parity between Python and Go</span>
                    </div>
                  </div>

                  {/* Changed Market Position to Development Status */}
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-50 mb-4">Development Status</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300">Internal Testing</span>
                          <span className="text-green-500 font-semibold">Active</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-3/4"></div>
                        </div>
                      </div>
                      <div className="text-gray-300 text-sm">
                        Strategic development with focused partnerships
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Innovation</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Zap size={18} className="text-gray-500 mr-3 mt-0.5" />
                        <span className="text-gray-600">Multi-chain from day one</span>
                      </li>
                      <li className="flex items-start">
                        <Lock size={18} className="text-gray-500 mr-3 mt-0.5" />
                        <span className="text-gray-600">Security by default, human-in-the-loop</span>
                      </li>
                      <li className="flex items-start">
                        <Code size={18} className="text-gray-500 mr-3 mt-0.5" />
                        <span className="text-gray-600">Contract interaction made natural</span>
                      </li>
                      <li className="flex items-start">
                        <Globe size={18} className="text-gray-500 mr-3 mt-0.5" />
                        <span className="text-gray-600">Lightweight yet powerful architecture</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Current Status</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Internal Testing</span>
                        <span className="text-green-600 font-semibold">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Public Testnet</span>
                        <span className="text-blue-600 font-semibold">Jan 2026</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Enterprise Beta</span>
                        <span className="text-gray-600">Q2 2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Architecture Tab */}
      {activeTab === 'architecture' && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeader
              title="Technical Architecture"
              subtitle="Four-Layer System Design"
              description="Each layer is independently scalable, completely modular, and provides specific capabilities to the overall system."
              className="mb-16"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {technicalArchitecture.map((layer, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${layer.color} mr-4`}>
                      <layer.icon size={24} className="text-gray-50" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{layer.layer}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {layer.components.map((component, idx) => (
                      <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 mr-3"></div>
                        <span className="text-gray-700 font-medium">{component}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture Diagram */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">System Flow</h3>
              <div className="relative">
                {/* Simplified diagram representation */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {['Developer', 'Orchestration', 'Execution', 'Result'].map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center mx-auto mb-4">
                        <span className="text-gray-50 font-bold">{index + 1}</span>
                      </div>
                      <h4 className="font-bold text-gray-900">{step}</h4>
                      {index < 3 && (
                        <div className="hidden md:block absolute top-8 left-1/4 w-1/4 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 transform translate-x-full"></div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Write agent in Python/Go</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Security checks & routing</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Blockchain/AI operations</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Audited results returned</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Roadmap Tab */}
      {activeTab === 'roadmap' && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeader
              title="Development Roadmap"
              subtitle="16-Week Strategic Rollout"
              description="Phased approach delivering immediate value while building toward complete vision."
              className="mb-16"
            />

            <div className="space-y-8 max-w-4xl mx-auto">
              {roadmap.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Connection line */}
                  {index < roadmap.length - 1 && (
                    <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-400"></div>
                  )}
                  
                  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                          <div className="flex items-center mt-2">
                            <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                              {phase.timeframe}
                            </span>
                            <span className={`ml-4 px-3 py-1 text-sm font-semibold rounded-full ${
                              phase.status === 'Current' 
                                ? 'bg-blue-100 text-blue-700'
                                : phase.status === 'In Progress'
                                ? 'bg-amber-100 text-amber-700'
                                : 'bg-gray-100 text-gray-700'
                            }`}>
                              {phase.status}
                            </span>
                          </div>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="mt-4 md:mt-0 md:w-48">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{phase.progress}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                              style={{ width: `${phase.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                            <CheckCircle 
                              size={18} 
                              className={`mr-3 ${
                                phase.progress === 100 
                                  ? 'text-green-500' 
                                  : idx < Math.floor(phase.deliverables.length * phase.progress / 100)
                                  ? 'text-green-500'
                                  : 'text-gray-400'
                              }`} 
                            />
                            <span className="text-gray-700">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gray-900 text-gray-50 rounded-lg">
                <Calendar className="mr-3" />
                <span className="font-medium">Public Launch: January 2026</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Use Cases Tab */}
      {activeTab === 'usecases' && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeader
              title="Enterprise Use Cases"
              subtitle="Real-World Applications"
              description="LOLA OS enables a new generation of autonomous applications across industries."
              className="mb-16"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-xl bg-gray-100 mr-4">
                      <useCase.icon size={24} className="text-gray-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{useCase.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {useCase.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <Target size={16} className="text-gray-500 mr-3" />
                        <span className="text-gray-700">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Case Study Preview */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-gray-50 mb-4">Early Adopter Program</h3>
                <p className="text-gray-300 mb-8">
                  Selected partners are currently testing LOLA OS in production environments. 
                  Results show 10x faster agent development and 99.9% reduction in security incidents.
                </p>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="px-8 py-3.5 bg-gray-50 hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-colors"
                >
                  Request Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Metrics Tab */}
      {activeTab === 'metrics' && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeader
              title="Key Performance Metrics"
              subtitle="Technical Excellence & Business Impact"
              description="Quantifiable metrics that demonstrate LOLA OS's technical superiority and market potential."
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {keyMetrics.map((metric, index) => (
                <GradientCard
                  key={index}
                  title={metric.value}
                  description={metric.description}
                  stats={[{ label: metric.label, value: '' }]}
                  className="text-center"
                />
              ))}
            </div>

            {/* Business Metrics */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Business Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">$8-12B</div>
                  <div className="text-gray-600">Projected 2030 ARR</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">90%</div>
                  <div className="text-gray-600">Development Time Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">10x</div>
                  <div className="text-gray-600">Security Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">∞</div>
                  <div className="text-gray-600">Scalability Limit</div>
                </div>
              </div>
            </div>

            {/* Investment CTA - Removed grant references */}
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-50 rounded-lg mb-6">
                <Rocket className="mr-3" />
                <span className="font-medium">Limited Testing Slots Available</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Invest in the Foundation of Autonomous AI
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                LOLA OS represents the foundational layer for the $50B+ autonomous agent market. 
                Early partners gain preferential access and strategic positioning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="px-8 py-3.5 bg-gray-900 hover:bg-gray-800 text-gray-50 font-semibold rounded-lg transition-colors"
                >
                  Discuss Partnership Terms
                </button>
                <button
                  onClick={() => window.open('#', '_blank')}
                  className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Download Investment Deck
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-6">
              Ready to Build with LOLA OS?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join select partners in shaping the future of autonomous on-chain applications.
            </p>
            <button
              onClick={() => setContactModalOpen(true)}
              className="px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-all hover:scale-105"
            >
              Request Technical Demo
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
};

export default CurrentBuildPage;