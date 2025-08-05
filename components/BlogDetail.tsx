import Header from './Header';
import Footer from './Footer';
import type { Page } from '../App';

interface BlogData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

interface BlogDetailProps {
  blog: BlogData;
  onNavigate: (page: Page) => void;
  onNavigateToService?: (serviceId: string) => void;
}

export default function BlogDetail({ blog, onNavigate, onNavigateToService }: BlogDetailProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Convert content to paragraphs for better rendering
  const renderContent = (content: string) => {
    const sections = content.split('\n\n');
    
    return sections.map((section, index) => {
      if (section.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-8">
            {section.replace('## ', '')}
          </h2>
        );
      } else if (section.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 mt-6">
            {section.replace('### ', '')}
          </h3>
        );
      } else if (section.startsWith('**') && section.endsWith('**')) {
        return (
          <h4 key={index} className="text-lg font-semibold text-gray-900 mb-3 mt-4">
            {section.replace(/\*\*/g, '')}
          </h4>
        );
      } else if (section.includes('*Solution*:')) {
        const parts = section.split('*Solution*:');
        return (
          <div key={index} className="bg-blue-50 border-l-4 border-[#1f7a8c] p-4 mb-4 rounded-r-lg">
            <p className="text-gray-800 mb-2">{parts[0].replace(/\*\*/g, '')}</p>
            <p className="text-gray-700"><strong>Solution:</strong> {parts[1]}</p>
          </div>
        );
      } else if (section.startsWith('- ') || section.includes('\n- ')) {
        const items = section.split('\n').filter(item => item.startsWith('- '));
        return (
          <ul key={index} className="list-disc list-inside mb-6 space-y-2 text-gray-700 ml-4">
            {items.map((item, itemIndex) => (
              <li key={itemIndex}>{item.replace('- ', '')}</li>
            ))}
          </ul>
        );
      } else if (section.trim() !== '') {
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
            {section}
          </p>
        );
      }
      return null;
    }).filter(Boolean);
  };

  return (
    <div className="bg-[#ffffff] min-h-screen">
      <Header onNavigate={onNavigate} currentPage="blog-detail" />
      
      {/* Breadcrumb */}
      <div className="px-4 md:px-8 lg:px-16 py-4 bg-gray-50">
        <div className="flex items-center gap-2 text-sm text-gray-600 max-w-4xl mx-auto">
          <button onClick={() => onNavigate('landing')} className="hover:text-[#1f7a8c]">Home</button>
          <span>•</span>
          <button onClick={() => onNavigate('blogs')} className="hover:text-[#1f7a8c]">Blogs</button>
          <span>•</span>
          <span className="text-[#1f7a8c] font-medium truncate">{blog.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Category Badge */}
          <div className="mb-6">
            <span className="bg-[#1f7a8c] text-white px-4 py-2 rounded-full text-sm font-medium">
              {blog.category}
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1f7a8c] to-[#30b6d0] rounded-full flex items-center justify-center text-white font-semibold">
                {blog.author.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="font-medium">{blog.author}</span>
            </div>
            <span>•</span>
            <span>{formatDate(blog.date)}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
          
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 lg:h-96 bg-center bg-cover bg-no-repeat rounded-2xl overflow-hidden mb-8 md:mb-12"
               style={{ backgroundImage: `url('${blog.image}')` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          {/* Excerpt */}
          <div className="bg-gray-50 border-l-4 border-[#1f7a8c] p-6 mb-8 md:mb-12 rounded-r-lg">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
              {blog.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-8 lg:px-16 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {renderContent(blog.content)}
          </article>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {blog.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 hover:bg-[#1f7a8c] hover:text-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1f7a8c] to-[#30b6d0] rounded-full flex items-center justify-center text-white font-bold text-xl">
                {blog.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{blog.author}</h4>
                <p className="text-gray-600 leading-relaxed">
                  An expert in technology and business transformation with years of experience helping organizations leverage digital solutions for growth and innovation.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#1f7a8c] to-[#30b6d0] rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you implement the strategies and technologies discussed in this article.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-[#1f7a8c] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </button>
              <button 
                onClick={() => onNavigate('services')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1f7a8c] transition-colors"
              >
                View Our Services
              </button>
            </div>
          </div>
          
          {/* Back to Blogs */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => onNavigate('blogs')}
              className="inline-flex items-center gap-2 text-[#1f7a8c] font-medium hover:underline"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Blogs
            </button>
          </div>
        </div>
      </div>
      
      <Footer onNavigate={onNavigate} onNavigateToService={onNavigateToService} theme="dark" />
    </div>
  );
}