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

  // Initialize from URL on component mount
  useEffect(() => {
    const path = window.location.pathname;
    
    let page: Page = 'landing';
    let serviceId = '';
    let blogId = '';

    // Parse URL to determine current page and parameters
    if (path === '/services') {
      page = 'services';
    } else if (path === '/about') {
      page = 'about';
    } else if (path === '/contact') {
      page = 'contact';
    } else if (path === '/blogs') {
      page = 'blogs';
    } else if (path === '/planfirma-ai') {
      page = 'planfirma-ai';
    } else if (path === '/planfirma-cloud') {
      page = 'planfirma-cloud';
    } else if (path === '/privacy-policy') {
      page = 'privacy-policy';
    } else if (path === '/terms-of-service') {
      page = 'terms-of-service';
    } else if (path === '/cookie-policy') {
      page = 'cookie-policy';
    } else if (path.startsWith('/service/')) {
      page = 'service-detail';
      serviceId = path.replace('/service/', '');
    } else if (path.startsWith('/blog/')) {
      page = 'blog-detail';
      blogId = path.replace('/blog/', '');
    }

    // Update state based on URL
    setCurrentPage(page);
    setSelectedServiceId(serviceId);
    setSelectedBlogId(blogId);
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      
      let page: Page = 'landing';
      let serviceId = '';
      let blogId = '';

      // Parse URL to determine current page and parameters
      if (path === '/services') {
        page = 'services';
      } else if (path === '/about') {
        page = 'about';
      } else if (path === '/contact') {
        page = 'contact';
      } else if (path === '/blogs') {
        page = 'blogs';
      } else if (path === '/planfirma-ai') {
        page = 'planfirma-ai';
      } else if (path === '/planfirma-cloud') {
        page = 'planfirma-cloud';
      } else if (path === '/privacy-policy') {
        page = 'privacy-policy';
      } else if (path === '/terms-of-service') {
        page = 'terms-of-service';
      } else if (path === '/cookie-policy') {
        page = 'cookie-policy';
      } else if (path.startsWith('/service/')) {
        page = 'service-detail';
        serviceId = path.replace('/service/', '');
      } else if (path.startsWith('/blog/')) {
        page = 'blog-detail';
        blogId = path.replace('/blog/', '');
      }

      // Update state based on URL
      setCurrentPage(page);
      setSelectedServiceId(serviceId);
      setSelectedBlogId(blogId);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL when state changes
  useEffect(() => {
    let url = '/';
    
    switch (currentPage) {
      case 'services':
        url = '/services';
        break;
      case 'about':
        url = '/about';
        break;
      case 'contact':
        url = '/contact';
        break;
      case 'blogs':
        url = '/blogs';
        break;
      case 'planfirma-ai':
        url = '/planfirma-ai';
        break;
      case 'planfirma-cloud':
        url = '/planfirma-cloud';
        break;
      case 'privacy-policy':
        url = '/privacy-policy';
        break;
      case 'terms-of-service':
        url = '/terms-of-service';
        break;
      case 'cookie-policy':
        url = '/cookie-policy';
        break;
      case 'service-detail':
        url = `/service/${selectedServiceId}`;
        break;
      case 'blog-detail':
        url = `/blog/${selectedBlogId}`;
        break;
      default:
        url = '/';
    }

    // Only update URL if it's different from current URL
    if (window.location.pathname + window.location.search !== url) {
      window.history.pushState({}, '', url);
    }
  }, [currentPage, selectedServiceId, selectedBlogId]);

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

  // Use browser back button instead of custom logic
  const goBack = () => {
    window.history.back();
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
        return selectedBlog ? <BlogDetail blog={selectedBlog} onNavigate={navigateToPage} onNavigateToService={navigateToService} onBack={goBack} /> : <Blogs onNavigate={navigateToPage} onNavigateToService={navigateToService} blogsData={blogsData} onBack={goBack} />;
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