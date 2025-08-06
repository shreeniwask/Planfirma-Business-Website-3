
// Breadcrumb navigation component
import type { Page } from '../App';

interface BackButtonProps {
  onNavigate: (page: Page) => void;
  onBack?: () => void;
  currentPage: Page;
  blogTitle?: string;
  serviceName?: string;
}

const pageNames = {
  'landing': 'Home',
  'services': 'Services',
  'about': 'About Us',
  'contact': 'Contact Us',
  'service-detail': 'Service Details',
  'blogs': 'Blogs',
  'blog-detail': 'Blog Post',
  'planfirma-ai': 'Planfirma.ai',
  'planfirma-cloud': 'Planfirma.cloud',
  'privacy-policy': 'Privacy Policy',
  'terms-of-service': 'Terms of Service',
  'cookie-policy': 'Cookie Policy'
};

function NavigationBar({ onNavigate, onBack, currentPage, blogTitle, serviceName }: BackButtonProps) {
  // Hierarchical navigation - follows proper navigation flow
  const getBackDestination = (): { page: Page; label: string } => {
    switch (currentPage) {
      case 'service-detail':
        return { page: 'services', label: 'Back' };
      case 'blog-detail':
        return { page: 'blogs', label: 'Back' };
      case 'services':
      case 'blogs':
      case 'about':
      case 'contact':
      case 'planfirma-ai':
      case 'planfirma-cloud':
      case 'privacy-policy':
      case 'terms-of-service':
      case 'cookie-policy':
        return { page: 'landing', label: 'Back' };
      default:
        return { page: 'landing', label: 'Back' };
    }
  };

  const getBreadcrumbItems = () => {
    const items = [
      { label: 'Home', page: 'landing' as Page, isClickable: true }
    ];

    if (currentPage === 'service-detail') {
      items.push(
        { label: 'Services', page: 'services' as Page, isClickable: true },
        { label: serviceName || 'Service Details', page: currentPage, isClickable: false }
      );
    } else if (currentPage === 'blog-detail') {
      items.push(
        { label: 'Blogs', page: 'blogs' as Page, isClickable: true },
        { label: blogTitle || 'Blog Post', page: currentPage, isClickable: false }
      );
    } else if (currentPage !== 'landing') {
      items.push({ label: pageNames[currentPage], page: currentPage, isClickable: false });
    }

    return items;
  };

  const { page, label } = getBackDestination();
  const breadcrumbItems = getBreadcrumbItems();

  // Determine if we should use dark theme (for AI and Cloud pages)
  const isDarkTheme = currentPage === 'planfirma-ai' || currentPage === 'planfirma-cloud';

  // Dynamic classes based on theme
  const containerClasses = isDarkTheme 
    ? "w-full bg-black/80 backdrop-blur-md border-b border-white/10" 
    : "w-full bg-white border-b border-gray-100";

  const backButtonClasses = isDarkTheme
    ? "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white/80 hover:text-[#30b6d0] hover:bg-white/10 rounded-lg transition-all duration-200 group"
    : "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#1f7a8c] hover:bg-gray-50 rounded-lg transition-all duration-200 group";

  const breadcrumbClasses = isDarkTheme
    ? "flex-1 ml-6 text-white/60"
    : "flex-1 ml-6";

  const breadcrumbLinkClasses = isDarkTheme
    ? "cursor-pointer text-white/70 hover:text-green-400 hover:underline transition-colors"
    : "cursor-pointer text-gray-600 hover:text-green-600 hover:underline transition-colors";

  const breadcrumbCurrentClasses = isDarkTheme
    ? "text-[#30b6d0] font-medium"
    : "text-[#1f7a8c] font-medium";

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      onNavigate(page);
    }
  };

  return (
    <div className={containerClasses}>
      <div className="max-w-8xl mx-auto px-3 sm:px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between py-3 sm:py-4">
          
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className={backButtonClasses}
          >
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {label}
          </button>
          
          {/* Breadcrumb Navigation */}
          <nav className={breadcrumbClasses}>
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbItems.map((item, index) => (
                <li key={item.page} className="flex items-center">
                  {item.isClickable ? (
                    <button 
                      onClick={() => onNavigate(item.page)}
                      className={breadcrumbLinkClasses}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <span className={breadcrumbCurrentClasses}>
                      {item.label}
                    </span>
                  )}
                  {index < breadcrumbItems.length - 1 && (
                    <svg 
                      className="w-4 h-4 mx-2 text-gray-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;

// Export as BackButton for backward compatibility
export { NavigationBar as BackButton };