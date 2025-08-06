import { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ServiceDetail from './components/ServiceDetail';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail';
import PlanfirmaAi from './components/PlanfirmaAi';
import PlanfirmaCloud from './components/PlanfirmaCloud';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import { Analytics } from '@vercel/analytics/react';
import { servicesData } from './data/servicesData';
import { blogsData } from './data/blogsData';

export type Page = 'landing' | 'services' | 'about' | 'contact' | 'service-detail' | 'blogs' | 'blog-detail' | 'planfirma-ai' | 'planfirma-cloud' | 'privacy-policy' | 'terms-of-service' | 'cookie-policy';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedBlogId, setSelectedBlogId] = useState<string>('');

  // Scroll to top when navigating to any page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedServiceId, selectedBlogId]);

  const navigateToPage = (page: Page, id?: string) => {
    setCurrentPage(page);
    if (page === 'service-detail' && id) {
      setSelectedServiceId(id);
    } else if (page === 'blog-detail' && id) {
      setSelectedBlogId(id);
    } else {
      setSelectedServiceId('');
      setSelectedBlogId('');
    }
  };

  // Hierarchical navigation - follows proper navigation flow
  const goBack = () => {
    switch (currentPage) {
      case 'service-detail':
        // Service detail → Services listing
        setCurrentPage('services');
        setSelectedServiceId('');
        break;
      case 'blog-detail':
        // Blog detail → Blogs listing
        setCurrentPage('blogs');
        setSelectedBlogId('');
        break;
      case 'services':
      case 'blogs':
      case 'about':
      case 'contact':
      case 'planfirma-ai':
      case 'planfirma-cloud':
      case 'privacy-policy':
      case 'terms-of-service':
      case 'cookie-policy':
        // All other pages → Landing
        setCurrentPage('landing');
        setSelectedServiceId('');
        setSelectedBlogId('');
        break;
      case 'landing':
        // Already on landing, do nothing
        break;
      default:
        // Fallback to landing
        setCurrentPage('landing');
        setSelectedServiceId('');
        setSelectedBlogId('');
    }
  };

  const navigateToService = (serviceId: string) => {
    setCurrentPage('service-detail');
    setSelectedServiceId(serviceId);
  };

  const selectedService = servicesData.find(service => service.id === selectedServiceId);
  const selectedBlog = blogsData.find(blog => blog.id === selectedBlogId);

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing onNavigate={navigateToPage} onNavigateToService={navigateToService} blogsData={blogsData} servicesData={servicesData} />;
      case 'services':
        return <Services onNavigate={navigateToPage} onNavigateToService={navigateToService} servicesData={servicesData} onBack={goBack} />;
      case 'about':
        return <AboutUs onNavigate={navigateToPage} onNavigateToService={navigateToService} onBack={goBack} />;
      case 'contact':
        return <ContactUs onNavigate={navigateToPage} onNavigateToService={navigateToService} onBack={goBack} />;
      case 'blogs':
        return <Blogs onNavigate={navigateToPage} onNavigateToService={navigateToService} blogsData={blogsData} onBack={goBack} />;
      case 'planfirma-ai':
        return <PlanfirmaAi onNavigate={navigateToPage} onNavigateToService={navigateToService} onBack={goBack} />;
      case 'planfirma-cloud':
        return <PlanfirmaCloud onNavigate={navigateToPage} onBack={goBack} />;
      case 'service-detail':
        return selectedService ? <ServiceDetail service={selectedService} onNavigate={navigateToPage} onNavigateToService={navigateToService} servicesData={servicesData} onBack={goBack} /> : <Landing onNavigate={navigateToPage} onNavigateToService={navigateToService} blogsData={blogsData} servicesData={servicesData} />;
      case 'blog-detail':
        return selectedBlog ? <BlogDetail blog={selectedBlog} onNavigate={navigateToPage} onNavigateToService={navigateToService} /> : <Blogs onNavigate={navigateToPage} onNavigateToService={navigateToService} blogsData={blogsData} onBack={goBack} />;
      case 'privacy-policy':
        return <PrivacyPolicy onNavigate={navigateToPage} onNavigateToService={navigateToService} onBack={goBack} />;
      case 'terms-of-service':
        return <TermsOfService onNavigate={navigateToPage} onNavigateToService={navigateToService} onBack={goBack} />;
      case 'cookie-policy':
        return <CookiePolicy onNavigate={navigateToPage} onNavigateToService={navigateToService} onBack={goBack} />;

      default:
        return <Landing onNavigate={navigateToPage} onNavigateToService={navigateToService} blogsData={blogsData} servicesData={servicesData} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderPage()}
      <Analytics />
    </div>
  );
}

export default App;