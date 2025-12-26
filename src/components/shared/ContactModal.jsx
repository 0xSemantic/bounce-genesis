import React, { useState } from 'react';
import { X, MessageCircle, Linkedin, Mail, Phone, Github, Twitter, Building, Users, ExternalLink, Code, Wrench, Layers } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = '+2349051284707';

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format the form data into a readable message for WhatsApp
    const whatsappMessage = `
*New Project Inquiry*

*Name:* ${formData.name}
*Organization:* ${formData.organization}
*Email:* ${formData.email}
*Project Type:* ${formData.projectType}
*Message:*
${formData.message}

*Submitted via:* Bounce Genesis Corps Website
*Timestamp:* ${new Date().toLocaleString()}
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL with the message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      setFormData({ name: '', email: '', organization: '', projectType: '', message: '' });
    }, 500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // WhatsApp contact method (kept separate for direct WhatsApp button)
  const directWhatsappMessage = encodeURIComponent(
    `Hi Levi,\n\nI'm interested in your development and consulting services. Could we discuss my project requirements?\n\nBest regards,`
  );
  const directWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${directWhatsappMessage}`;

  if (!isOpen) return null;

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Direct consultation with our team',
      action: () => window.open(directWhatsappUrl, '_blank'),
      color: 'bg-green-500/10 text-green-500',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Detailed project discussions',
      action: () => window.location.href = 'mailto:levi@bouncegenesis.com',
      color: 'bg-gray-500/10 text-gray-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Scheduled technical consultations',
      details: '+234 905 128 4707',
      action: () => {
        navigator.clipboard.writeText(whatsappNumber);
        alert('Phone number copied to clipboard!');
      },
      color: 'bg-purple-500/10 text-purple-500',
    },
  ];

  const founderSocials = [
    {
      icon: Github,
      label: 'GitHub',
      handle: '0xSemantic',
      link: 'https://github.com/0xSemantic',
      color: 'bg-gray-800 text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      handle: 'Levi Chidi',
      link: 'https://linkedin.com/in/0xSemantic',
      color: 'bg-blue-600 text-white',
    },
  ];

  const projectTypes = [
    'Custom Software Development',
    'Enterprise Integration',
    'Blockchain Solutions',
    'AI & Machine Learning',
    'Technical Consulting',
    'System Architecture',
    'LOLA OS Implementation',
    'AURA Systems Development',
    'Other Professional Services',
  ];

  return (
    <div className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gray-50 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-50 px-8 py-6 border-b border-gray-200 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Start a Project</h2>
              <p className="text-gray-600 mt-1">Discuss your development and consulting needs with our team</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Direct Contact</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <button
                    key={index}
                    onClick={method.action}
                    className="w-full p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all text-left group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${method.color}`}>
                        <method.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-900">{method.title}</h4>
                          <span className="text-xs text-gray-500 group-hover:text-gray-700">
                            Click to connect
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{method.description}</p>
                        {method.details && (
                          <p className="text-sm text-gray-500 mt-2 font-mono">{method.details}</p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Technical Director Info */}
              <div className="mt-8 p-6 bg-gray-900 rounded-xl">
                <h4 className="text-gray-50 font-semibold mb-2">Technical Director</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Direct access to @0xSemantic for technical consultations
                </p>
                <div className="space-y-3">
                  {founderSocials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors group"
                    >
                      <div className="flex items-center">
                        <div className={`p-2 rounded-lg ${social.color} mr-3`}>
                          <social.icon size={16} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-300">{social.label}</div>
                          <div className="text-xs text-gray-400">{social.handle}</div>
                        </div>
                      </div>
                      <ExternalLink size={14} className="text-gray-400 group-hover:text-gray-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Services */}
              <div className="mt-6 bg-white rounded-xl border border-gray-200 p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Common Services</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Code size={14} className="mr-2 text-gray-400" />
                    <span>Custom Software Development</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Wrench size={14} className="mr-2 text-gray-400" />
                    <span>System Integration</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Layers size={14} className="mr-2 text-gray-400" />
                    <span>Technical Consulting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Inquiry Form */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Details</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                      placeholder="Company or Business"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition resize-none"
                    placeholder="Please describe your project requirements, timeline, and any specific technical needs..."
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 bg-green-600 hover:bg-green-700 text-gray-50 font-medium rounded-lg transition-colors flex-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                        Preparing...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="mr-2" size={18} />
                        Send via WhatsApp
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-xs text-blue-800 text-center">
                    <strong>Note:</strong> After submitting, WhatsApp will open with your project details pre-filled. 
                    You can review and edit the message before sending it to our team.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;