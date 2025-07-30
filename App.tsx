import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Landing from './components/Landing';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ServiceDetail from './components/ServiceDetail';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail';
import PlanfirmaAi from './components/PlanfirmaAi';
import PlanfirmaCloud from './components/PlanfirmaCloud';


import { servicesData } from './data/servicesData';
import { blogsData } from './data/blogsData';

export type Page = 'landing' | 'services' | 'about' | 'contact' | 'service-detail' | 'blogs' | 'blog-detail' | 'planfirma-ai' | 'planfirma-cloud';

interface NavigationHistoryItem {
  page: Page;
  serviceId?: string;
  blogId?: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedBlogId, setSelectedBlogId] = useState<string>('');
  const [navigationHistory, setNavigationHistory] = useState<NavigationHistoryItem[]>([]);

  // Scroll to top when navigating to any page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedServiceId, selectedBlogId]);

  const navigateToPage = (page: Page, id?: string) => {
    // Add current page to history if it's not the landing page
    if (currentPage !== 'landing') {
      const currentHistoryItem: NavigationHistoryItem = {
        page: currentPage,
        serviceId: selectedServiceId || undefined,
        blogId: selectedBlogId || undefined
      };
      setNavigationHistory(prev => [...prev, currentHistoryItem]);
    }

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

  const goBack = () => {
    if (navigationHistory.length > 0) {
      const previousPage = navigationHistory[navigationHistory.length - 1];
      setNavigationHistory(prev => prev.slice(0, -1));
      setCurrentPage(previousPage.page);
      setSelectedServiceId(previousPage.serviceId || '');
      setSelectedBlogId(previousPage.blogId || '');
    } else {
      // If no history, go to landing page
      setCurrentPage('landing');
      setSelectedServiceId('');
      setSelectedBlogId('');
    }
  };

  const navigateToService = (serviceId: string) => {
    const currentHistoryItem: NavigationHistoryItem = {
      page: currentPage,
      serviceId: selectedServiceId || undefined,
      blogId: selectedBlogId || undefined
    };
    setNavigationHistory(prev => [...prev, currentHistoryItem]);
    setCurrentPage('service-detail');
    setSelectedServiceId(serviceId);
  };

  const selectedService = servicesData.find(service => service.id === selectedServiceId);
  const selectedBlog = blogsData.find(blog => blog.id === selectedBlogId);

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing onNavigate={navigateToPage} blogsData={blogsData} servicesData={servicesData} />;
      case 'services':
        return <Services onNavigate={navigateToPage} servicesData={servicesData} onBack={goBack} />;
      case 'about':
        return <AboutUs onNavigate={navigateToPage} onBack={goBack} />;
      case 'contact':
        return <ContactUs onNavigate={navigateToPage} onBack={goBack} />;
      case 'blogs':
        return <Blogs onNavigate={navigateToPage} blogsData={blogsData} onBack={goBack} />;
      case 'planfirma-ai':
        return <PlanfirmaAi onNavigate={navigateToPage} onBack={goBack} />;
      case 'planfirma-cloud':
        return <PlanfirmaCloud onNavigate={navigateToPage} onBack={goBack} />;
      case 'service-detail':
        return selectedService ? <ServiceDetail service={selectedService} onNavigate={navigateToPage} onBack={goBack} servicesData={servicesData} onNavigateToService={navigateToService} /> : <Landing onNavigate={navigateToPage} blogsData={blogsData} servicesData={servicesData} />;
      case 'blog-detail':
        return selectedBlog ? <BlogDetail blog={selectedBlog} onNavigate={navigateToPage} onBack={goBack} /> : <Blogs onNavigate={navigateToPage} blogsData={blogsData} onBack={goBack} />;

      default:
        return <Landing onNavigate={navigateToPage} blogsData={blogsData} servicesData={servicesData} />;
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