import type { Page } from '../App';
import BackButton from './BackButton';
import Footer from './Footer';

interface CookiePolicyProps {
  onNavigate: (page: Page) => void;
  onNavigateToService?: (serviceId: string) => void;
  onBack: () => void;
}

export default function CookiePolicy({ onNavigate, onNavigateToService, onBack }: CookiePolicyProps) {
  return (
    <div className="min-h-screen bg-white">
      <BackButton onNavigate={onNavigate} onBack={onBack} currentPage="cookie-policy" />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners about how visitors use their sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Planfirma uses cookies for several purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Essential cookies that enable basic website functionality</li>
                <li>Analytics cookies that help us understand how visitors use our website</li>
                <li>Marketing cookies that help us deliver relevant content and advertisements</li>
                <li>Preference cookies that remember your settings and preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Essential Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and user experience.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies are used to track visitors across websites to display relevant and engaging advertisements. They may also be used to limit the number of times you see an advertisement.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Preference Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may use third-party services that place cookies on your device. These services include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Google Ads for advertising</li>
                <li>Social media platforms for sharing and engagement</li>
                <li>Vercel for website hosting and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookie Duration</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Session Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies are temporary and are deleted when you close your browser. They are used to maintain your session while you browse our website.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Persistent Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies remain on your device for a set period or until you delete them. They are used to remember your preferences and settings for future visits.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Managing Your Cookie Preferences</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Browser settings: Most browsers allow you to refuse cookies or delete them</li>
                <li>Cookie consent: We will ask for your consent before placing non-essential cookies</li>
                <li>Third-party opt-outs: You can opt out of third-party cookies through their respective websites</li>
                <li>Contact us: You can contact us to discuss your cookie preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Browser-Specific Instructions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Chrome</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Settings → Privacy and security → Cookies and other site data → Manage data
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Firefox</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Options → Privacy & Security → Cookies and Site Data → Manage Data
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Safari</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Preferences → Privacy → Manage Website Data
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Edge</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Settings → Cookies and site permissions → Cookies and site data → Manage and delete cookies and site data
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Impact of Disabling Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                If you choose to disable cookies, some features of our website may not function properly. This may affect your ability to access certain areas of the site or receive personalized content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> info@planfirma.com<br />
                  <strong>Phone:</strong> +91 84510 53268<br />
                  <strong>Address:</strong> Planfirma Technologies Private Limited<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Rainbow Chambers, Swami Vivekananda Rd<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Kandivali, Kandivali Police Line<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Jai Bhim Sanjay Nagar, Kandivali West<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Mumbai, Maharashtra 400067<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;India
                </p>
              </div>
            </section>

            <div className="mt-12 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Last Updated:</strong> January 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} onNavigateToService={onNavigateToService} theme="light" />
    </div>
  );
} 