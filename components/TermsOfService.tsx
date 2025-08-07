import type { Page } from '../App';
import BackButton from './BackButton';
import Footer from './Footer';

interface TermsOfServiceProps {
  onNavigate: (page: Page) => void;
  onNavigateToService?: (serviceId: string) => void;
  onBack: () => void;
}

export default function TermsOfService({ onNavigate, onNavigateToService, onBack }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-white">
      <BackButton onNavigate={onNavigate} onBack={onBack} currentPage="terms-of-service" />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the Planfirma website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use License</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Planfirma's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                The materials on Planfirma's website are provided on an 'as is' basis. Planfirma makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Limitations</h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall Planfirma or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Planfirma's website, even if Planfirma or a Planfirma authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Accuracy of Materials</h2>
              <p className="text-gray-600 leading-relaxed">
                The materials appearing on Planfirma's website could include technical, typographical, or photographic errors. Planfirma does not warrant that any of the materials on its website are accurate, complete, or current. Planfirma may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Links</h2>
              <p className="text-gray-600 leading-relaxed">
                Planfirma has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Planfirma of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Modifications</h2>
              <p className="text-gray-600 leading-relaxed">
                Planfirma may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Service Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Service Delivery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Planfirma will provide services as outlined in individual service agreements. We commit to delivering high-quality solutions within agreed timelines, subject to client cooperation and timely feedback.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Payment Terms</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Payment terms will be specified in individual project agreements. Invoices are typically due within 30 days of issue. Late payments may incur additional charges.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Intellectual Property</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Upon full payment, clients own the deliverables created specifically for their project. Planfirma retains rights to reusable components and methodologies developed during the project.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Confidentiality</h2>
              <p className="text-gray-600 leading-relaxed">
                Planfirma maintains strict confidentiality regarding client information and project details. We will not disclose confidential information to third parties without written consent, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                Either party may terminate services with written notice. Upon termination, clients are responsible for payment of work completed up to the termination date. Planfirma will deliver all completed work and materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms of Service, please contact us at:
              </p>
                              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> info@planfirma.com<br />
                    <strong>Phone:</strong> +91 84510 53268
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