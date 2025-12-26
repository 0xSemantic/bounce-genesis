import React from 'react';
import HeroSection from '../../components/shared/HeroSection';

const PrivacyPolicy = () => {
  return (
    <>
      <HeroSection
        title="Privacy Policy"
        subtitle="How we protect and handle your information"
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-600">
                    Bounce Genesis Corps ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                    when you visit our website or interact with our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
                  <p className="text-gray-600 mb-4">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Organization details and professional background</li>
                    <li>Grant application information and proposals</li>
                    <li>Communication preferences and correspondence</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Technical Information</h3>
                  <p className="text-gray-600">
                    When you visit our website, we may automatically collect certain information, including:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referring website and search terms</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-600 mb-4">
                    We may use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>To process and evaluate grant applications and partnership inquiries</li>
                    <li>To communicate with you about our services and updates</li>
                    <li>To improve our website and user experience</li>
                    <li>To comply with legal obligations and prevent fraud</li>
                    <li>To analyze usage patterns and optimize our services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
                  <p className="text-gray-600 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    except in the following circumstances:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                    <li>When required by law or to protect our legal rights</li>
                    <li>During business transfers, such as mergers or acquisitions</li>
                    <li>With your explicit consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                  <p className="text-gray-600">
                    We implement appropriate technical and organizational security measures to protect your 
                    personal information against unauthorized access, alteration, disclosure, or destruction. 
                    However, no method of transmission over the Internet or electronic storage is 100% secure, 
                    and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                  <p className="text-gray-600 mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Right to access and receive a copy of your personal information</li>
                    <li>Right to correct inaccurate or incomplete information</li>
                    <li>Right to delete your personal information</li>
                    <li>Right to restrict or object to processing</li>
                    <li>Right to data portability</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-600">
                    We use cookies and similar tracking technologies to collect and use personal information 
                    about you. For more information about the cookies we use and your choices regarding cookies, 
                    please visit our <a href="/cookie-policy" className="text-gray-900 hover:underline">Cookie Policy</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
                  <p className="text-gray-600">
                    Our services are not intended for individuals under the age of 18. We do not knowingly 
                    collect personal information from children under 18. If you are a parent or guardian and 
                    believe your child has provided us with personal information, please contact us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
                  <p className="text-gray-600">
                    Your information may be transferred to — and maintained on — computers located outside of 
                    your state, province, country, or other governmental jurisdiction where the data protection 
                    laws may differ from those in your jurisdiction.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
                  <p className="text-gray-600">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by 
                    posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                  <p className="text-gray-600">
                    If you have any questions about this Privacy Policy, please contact us at:
                    <br /><br />
                    <strong>Bounce Genesis Corps</strong><br />
                    Privacy Officer<br />
                    Email: <a href="mailto:privacy@bouncegenesis.com" className="text-gray-900 hover:underline">privacy@bouncegenesis.com</a>
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

export default PrivacyPolicy;