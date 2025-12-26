import React from 'react';
import { Brain, Heart, Shield, Zap, Code, Lock, Eye, Users } from 'lucide-react';
import GradientCard from '../shared/GradientCard';

const AuraPreview = () => {
  const capabilities = [
    {
      icon: Brain,
      title: 'SENSE SDK',
      description: 'JavaScript/TypeScript SDK with zero-knowledge proofs for privacy-preserving emotion detection.',
      gradient: 'from-indigo-500/20 to-purple-500/20',
      tech: ['JavaScript/TypeScript', 'Noir ZK Circuits', 'WebAssembly'],
    },
    {
      icon: Heart,
      title: 'AURA LLM Tool',
      description: 'Python-based premium emotional intelligence engine that transforms any LLM with emotional awareness.',
      gradient: 'from-rose-500/20 to-pink-500/20',
      tech: ['Python', 'LiteLLM', 'Emotion Rules Engine'],
    },
    {
      icon: Shield,
      title: 'Privacy Architecture',
      description: 'Zero-knowledge proofs for verifiable emotion detection without data exposure. Local inference by default.',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      tech: ['Zero-Knowledge Proofs', 'Local Processing', 'Encrypted Analytics'],
    },
    {
      icon: Zap,
      title: 'Multi-Modal Sensing',
      description: 'Real-time emotion detection from voice, text, and visual cues with adaptive response generation.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      tech: ['Voice Analysis', 'Text Sentiment', 'Visual Emotion'],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-gray-50 text-sm font-semibold rounded-full mb-4">
            Starting Development Q2 2026
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AURA: The Emotional Intelligence Layer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building the human side of AI with cryptographic privacy. Making every AI interaction feel genuinely human.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Technology Stack */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Stack</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Core SDK</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">JavaScript</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">TypeScript</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Noir ZK</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">WebAssembly</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Premium Tool</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">Python</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">LiteLLM</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">Emotion Engine</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Privacy Features</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full">Zero-Knowledge</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full">Local Inference</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full">Encrypted Proofs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Preview */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-50 mb-4">Architecture Preview</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Code size={16} className="mr-3" />
                  <span className="text-sm">SENSE SDK: Open-source JavaScript/TypeScript with ZK proofs</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Lock size={16} className="mr-3" />
                  <span className="text-sm">AURA LLM Tool: Premium Python emotional intelligence engine</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Eye size={16} className="mr-3" />
                  <span className="text-sm">AURA Cloud: Enterprise orchestration with verification</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Capabilities */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Capabilities</h3>
            <div className="space-y-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-lg ${capability.gradient} mr-4`}>
                      <capability.icon size={20} className="text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg">{capability.title}</h4>
                      <p className="text-gray-600 mt-1">{capability.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {capability.tech.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Development Starting Q2 2026</h3>
            <p className="text-gray-600 mb-6">
              AURA Systems represents the next frontier in human-AI interaction. We're currently seeking 
              research grants and strategic partnerships to advance emotional intelligence in AI.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-gray-50 font-semibold rounded-lg transition-all hover:scale-105">
              Express Interest for Q2 2026
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuraPreview;