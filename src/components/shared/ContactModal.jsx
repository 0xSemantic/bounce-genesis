import React, { useState } from 'react';
import { X, MessageCircle, Linkedin, Mail, Phone, Building, Zap, Users } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = '+2349051284707';

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format the form data into a readable message for WhatsApp
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Organization:* ${formData.organization}
*Email:* ${formData.email}
*Interest:* ${formData.interest}
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
      setFormData({ name: '', email: '', organization: '', interest: '', message: '' });
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
    `Hi Levi,\n\nI'm interested in Bounce Genesis Corps and would like to discuss partnership opportunities.\n\nBest regards,`
  );
  const directWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${directWhatsappMessage}`;

  if (!isOpen) return null;

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Direct communication with leadership',
      action: () => window.open(directWhatsappUrl, '_blank'),
      color: 'bg-green-500/10 text-green-500',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Professional network connection',
      action: () => window.open('https://linkedin.com/in/0xSemantic', '_blank'),
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email for detailed discussions',
      action: () => window.location.href = 'mailto:levi@bouncegenesis.com',
      color: 'bg-gray-500/10 text-gray-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Scheduled calls for serious discussions',
      details: '+234 905 128 4707',
      action: () => {
        navigator.clipboard.writeText(whatsappNumber);
        alert('Phone number copied to clipboard!');
      },
      color: 'bg-purple-500/10 text-purple-500',
    },
  ];

  const interestTypes = [
    'Strategic Partnership',
    'Investment Inquiry',
    'Technical Collaboration',
    'Request Demo',
    'Enterprise Development',
    'Developer Access',
    'General Inquiry',
    'Media/Press',
  ];

  return (
    <div className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gray-50 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-50 px-8 py-6 border-b border-gray-200 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
              <p className="text-gray-600 mt-1">Partner with us to build the future of digital infrastructure</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Direct Contact Channels</h3>
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

              {/* Commander Info */}
              <div className="mt-8 p-6 bg-gray-900 rounded-xl">
                <h4 className="text-gray-50 font-semibold mb-2">Commander Contact</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Direct access to @0xSemantic for strategic discussions
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">GitHub:</span>
                    <a 
                      href="https://github.com/0xSemantic" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-gray-50 text-sm"
                    >
                      0xSemantic
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">Twitter:</span>
                    <a 
                      href="https://twitter.com/0xSemantic" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-gray-50 text-sm"
                    >
                      @0xSemantic
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Instructions */}
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start">
                  <MessageCircle className="text-green-500 mr-3 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm text-green-800 font-medium mb-1">Form Submissions via WhatsApp</p>
                    <p className="text-xs text-green-700">
                      When you submit the form, it will open WhatsApp with your message pre-filled. Just hit send to contact us directly!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Send a Message</h3>
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
                      placeholder="Company, Foundation, etc."
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
                    placeholder="john@organization.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest Type *
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select interest type</option>
                    {interestTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition resize-none"
                    placeholder="Please describe your interest, including any specific details about partnership, investment, or collaboration opportunities..."
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
                    <strong>Note:</strong> After submitting, WhatsApp will open with your message pre-filled. 
                    You can review and edit the message before sending it to us.
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