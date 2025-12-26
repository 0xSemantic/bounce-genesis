import React from 'react';
import HeroSection from '../../components/shared/HeroSection';

const TermsOfService = () => {
  return (
    <>
      <HeroSection
        title="Terms of Service"
        subtitle="Legal terms governing your use of our services"
        gradient="from-gray-900 to-gray-800"
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-gray-600">
                  <strong>Last Updated:</strong> December 25, 2025
                  <br />
                  <strong>Effective Date:</strong> December 25, 2025
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600">
                    By accessing or using the Bounce Genesis Corps website and services, you agree to be bound 
                    by these Terms of Service. If you do not agree to these terms, please do not access or use 
                    our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
                  <p className="text-gray-600">
                    Bounce Genesis Corps provides information about our technology divisions, including LOLA OS 
                    and AURA Systems. We offer grant application processes and partnership opportunities for 
                    qualified organizations and individuals.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
                  <p className="text-gray-600">
                    To use our services, you must be at least 18 years old and have the legal capacity to enter 
                    into binding contracts. By using our services, you represent and warrant that you meet these 
                    eligibility requirements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Grant Applications</h2>
                  <p className="text-gray-600 mb-4">
                    When you submit a grant application:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>You must provide accurate and complete information</li>
                    <li>Submission does not guarantee funding or partnership</li>
                    <li>We reserve the right to reject any application at our sole discretion</li>
                    <li>All application materials become our confidential property</li>
                    <li>We may conduct due diligence before making any decisions</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                  <p className="text-gray-600 mb-4">
                    All content, features, and functionality available through our services are the exclusive 
                    property of Bounce Genesis Corps and its licensors, protected by intellectual property laws.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Our logos, trademarks, and service marks are proprietary</li>
                    <li>Technology descriptions, whitepapers, and documentation are protected</li>
                    <li>You may not use, copy, modify, or distribute our intellectual property without permission</li>
                    <li>Any feedback or suggestions you provide may be used by us without obligation</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Conduct</h2>
                  <p className="text-gray-600 mb-4">
                    You agree not to:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Use our services for any unlawful purpose</li>
                    <li>Submit false or misleading information</li>
                    <li>Interfere with or disrupt our services or servers</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use our services to harass, abuse, or harm others</li>
                    <li>Reverse engineer or decompile any portion of our services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
                  <p className="text-gray-600">
                    OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                    EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO 
                    IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                  <p className="text-gray-600">
                    TO THE FULLEST EXTENT PERMITTED BY LAW, BOUNCE GENESIS CORPS SHALL NOT BE LIABLE FOR ANY 
                    INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED 
                    TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR 
                    USE OF OUR SERVICES.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
                  <p className="text-gray-600">
                    You agree to indemnify, defend, and hold harmless Bounce Genesis Corps and its officers, 
                    directors, employees, and agents from and against any claims, liabilities, damages, losses, 
                    and expenses arising out of or in any way connected with your access to or use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
                  <p className="text-gray-600">
                    These Terms of Service shall be governed by and construed in accordance with the laws of the 
                    State of Delaware, without regard to its conflict of law provisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Dispute Resolution</h2>
                  <p className="text-gray-600">
                    Any dispute arising from or relating to these Terms of Service shall be resolved through 
                    binding arbitration in Delaware, in accordance with the rules of the American Arbitration 
                    Association. Judgment upon the award rendered by the arbitrator may be entered in any court 
                    having jurisdiction.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                  <p className="text-gray-600">
                    We reserve the right to modify or replace these Terms of Service at any time. If a revision 
                    is material, we will provide at least 30 days' notice prior to any new terms taking effect. 
                    What constitutes a material change will be determined at our sole discretion.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                  <p className="text-gray-600">
                    If you have any questions about these Terms of Service, please contact us at:
                    <br /><br />
                    <strong>Bounce Genesis Corps</strong><br />
                    Legal Department<br />
                    Email: <a href="mailto:legal@bouncegenesis.com" className="text-gray-900 hover:underline">legal@bouncegenesis.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;