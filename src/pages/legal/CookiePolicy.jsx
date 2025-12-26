import React from 'react';
import HeroSection from '../../components/shared/HeroSection';

const CookiePolicy = () => {
  return (
    <>
      <HeroSection
        title="Cookie Policy"
        subtitle="How we use cookies and tracking technologies"
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
                  <p className="text-gray-600">
                    Cookies are small text files that are placed on your device by websites you visit. They 
                    are widely used to make websites work more efficiently and provide information to the 
                    website owners.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
                  <p className="text-gray-600 mb-4">
                    We use cookies for the following purposes:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>To enable certain functions of our website</li>
                    <li>To provide analytics about how visitors use our site</li>
                    <li>To store your preferences and improve user experience</li>
                    <li>To understand user behavior and optimize our content</li>
                    <li>To provide relevant information about our services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Essential Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    These cookies are necessary for the website to function and cannot be switched off. They 
                    are usually only set in response to actions made by you.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Analytics Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    These cookies allow us to count visits and traffic sources so we can measure and improve 
                    the performance of our site. They help us know which pages are most and least popular.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Functional Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    These cookies enable the website to provide enhanced functionality and personalization. 
                    They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3.4 Marketing Cookies</h3>
                  <p className="text-gray-600">
                    These cookies may be set through our site by our advertising partners. They may be used 
                    to build a profile of your interests and show you relevant content on other sites.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
                  <p className="text-gray-600 mb-4">
                    In addition to our own cookies, we may also use various third-party cookies to report 
                    usage statistics of our website and deliver advertisements. These include:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Google Analytics for website analytics</li>
                    <li>Social media platforms for sharing functionality</li>
                    <li>Advertising networks for relevant content</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
                  <p className="text-gray-600 mb-4">
                    You have the right to decide whether to accept or reject cookies. You can exercise your 
                    cookie preferences by:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Using the cookie consent tool on our website</li>
                    <li>Adjusting your browser settings to refuse cookies</li>
                    <li>Using privacy-focused browser extensions</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Please note that if you choose to refuse cookies, you may not be able to use the full 
                    functionality of our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Browser-Specific Instructions</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Google Chrome</h3>
                  <p className="text-gray-600 mb-3">
                    Go to Settings → Privacy and security → Cookies and other site data
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Mozilla Firefox</h3>
                  <p className="text-gray-600 mb-3">
                    Go to Options → Privacy & Security → Cookies and Site Data
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Safari</h3>
                  <p className="text-gray-600 mb-3">
                    Go to Preferences → Privacy → Cookies and website data
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Microsoft Edge</h3>
                  <p className="text-gray-600">
                    Go to Settings → Cookies and site permissions → Cookies and site data
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Do Not Track Signals</h2>
                  <p className="text-gray-600">
                    Our website does not currently respond to Do Not Track signals. However, you can control 
                    tracking through your browser settings as described above.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Policy</h2>
                  <p className="text-gray-600">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or 
                    for other operational, legal, or regulatory reasons. We encourage you to periodically 
                    review this page for the latest information on our cookie practices.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
                  <p className="text-gray-600">
                    If you have any questions about our use of cookies, please contact us at:
                    <br /><br />
                    <strong>Bounce Genesis Corps</strong><br />
                    Privacy Team<br />
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

export default CookiePolicy;