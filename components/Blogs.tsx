import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavigationBar from './BackButton';
import { ScrollAnimatedCard, ScrollAnimatedSection, ScrollAnimatedGrid } from './ScrollAnimatedCard';

import { toast } from '../utils/toast';
import type { Page } from '../App';

interface BlogData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorExperience: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

interface BlogsProps {
  onNavigate: (page: Page, blogId?: string) => void;
  onNavigateToService?: (serviceId: string) => void;
  blogsData: BlogData[];
  onBack: () => void;
}

function BlogCard({ blog, onNavigate, featured = false }: { blog: BlogData; onNavigate: (page: Page, id?: string) => void; featured?: boolean }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div 
      className={`bg-white rounded-2xl border border-gray-200 blog-card-hover cursor-pointer overflow-hidden group ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      onClick={() => onNavigate('blog-detail', blog.id)}
    >
      {/* Image Section */}
      <div className={`relative bg-center bg-cover bg-no-repeat rounded-t-2xl overflow-hidden ${
        featured ? 'h-64 md:h-72 lg:h-80' : 'h-48 md:h-56 lg:h-64'
      }`}
           style={{ backgroundImage: `url('${blog.image}')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-refined" />
        <div className="absolute top-4 left-4">
          <span className="bg-[#2D993D] text-white px-3 py-1 rounded-full text-sm font-medium">
            {blog.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-refined opacity-0 group-hover:opacity-100">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <p className="text-white text-sm">Click to read more →</p>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className={`${featured ? 'p-8 md:p-10' : 'p-6 md:p-8'}`}>
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <span>{blog.author}</span>
          <span>•</span>
          <span>{formatDate(blog.date)}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>
        
        <div className="flex flex-col gap-3 md:gap-4 mb-6">
          <h3 className={`blog-card-title font-['Roboto:Bold',_sans-serif] font-bold text-[#1c1c1c] transition-refined leading-tight ${
            featured ? 'text-[24px] md:text-[28px] lg:text-[32px]' : 'text-[20px] md:text-[24px] lg:text-[28px]'
          }`}>
            {blog.title}
          </h3>
          <p className={`font-['Roboto:Regular',_sans-serif] font-normal text-[rgba(0,0,0,0.6)] tracking-[0.25px] leading-relaxed ${
            featured ? 'text-[15px] md:text-[17px]' : 'text-[14px] md:text-[16px]'
          }`}>
            {blog.excerpt}
          </p>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {blog.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
              {tag}
            </span>
          ))}
        </div>
        
        <button className="bg-[#2D993D] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium text-[14px] md:text-[15px] btn-hover-primary w-full sm:w-auto">
          Read Article
        </button>
      </div>
    </div>
  );
}



export default function Blogs({ onNavigate, onNavigateToService, blogsData, onBack }: BlogsProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All Posts');
  
  // Sort blogs by date (most recent first)
  const sortedBlogs = [...blogsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === 'All Posts' 
    ? sortedBlogs 
    : sortedBlogs.filter(blog => blog.category === selectedCategory);
  
  const featuredBlogs = filteredBlogs.slice(0, 2);
  const regularBlogs = filteredBlogs.slice(2);

  const categories = [...new Set(blogsData.map(blog => blog.category))];

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-[#ffffff] flex flex-col items-start justify-start relative w-full">
      <Header onNavigate={onNavigate} currentPage="blogs" />
      
      {/* Navigation Bar with Back Button and Breadcrumbs */}
      <NavigationBar 
        onNavigate={onNavigate} 
        onBack={onBack}
        currentPage="blogs" 
      />
      
      {/* Main Content */}
      <div className="relative w-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-2 sm:px-4 md:px-6 lg:px-12 py-6 sm:py-8 md:py-12 lg:py-16 relative w-full">
          
          {/* Hero Section */}
          <ScrollAnimatedSection animation="fade-up" className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-between mb-8 md:mb-12 lg:mb-16 w-full max-w-7xl mx-auto">
            <ScrollAnimatedCard animation="fade-right" className="flex-1 text-center lg:text-left" hover={false}>
              <div className="bg-green-100 px-3 py-1.5 rounded-full text-[#2D993D] text-xs sm:text-sm font-semibold inline-block mb-3 sm:mb-4">
                Our Blog
              </div>
              <h1 className="font-['Roboto:Bold',_sans-serif] font-bold text-[#1c1c1c] text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[52px] tracking-[-0.5px] leading-tight mb-3 sm:mb-4">
                Insights & Expertise
              </h1>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[rgba(0,0,0,0.8)] tracking-[0.5px] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Stay updated with the latest trends, insights, and best practices in technology, business transformation, and digital innovation.
              </p>
            </ScrollAnimatedCard>
            <ScrollAnimatedCard animation="fade-left" delay={200} className="flex-shrink-0 w-full lg:w-auto" hover={false}>
              <div className="bg-gradient-to-br from-green-50 to-green-100 h-56 sm:h-64 md:h-72 lg:h-80 lg:w-80 rounded-2xl flex items-center justify-center shadow-2xl mx-auto">
                <div className="text-center p-4 sm:p-6 md:p-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#2D993D] rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">Knowledge Hub</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">Expert insights and industry best practices</p>
                </div>
              </div>
            </ScrollAnimatedCard>
          </ScrollAnimatedSection>

          {/* Categories Filter */}
          <ScrollAnimatedCard animation="fade-up" delay={300} className="flex flex-wrap gap-3 mb-12 md:mb-16 justify-center w-full" hover={false}>
            <button 
              onClick={() => handleCategoryFilter('All Posts')}
              className={`px-6 py-3 rounded-lg font-medium text-sm filter-btn-hover transition-colors ${
                selectedCategory === 'All Posts'
                  ? 'bg-[#2D993D] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Posts
            </button>
            {categories.map((category, index) => (
              <button 
                key={index}
                onClick={() => handleCategoryFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium text-sm filter-btn-hover transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#2D993D] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </ScrollAnimatedCard>

          {/* Featured Blogs Section */}
          <ScrollAnimatedSection animation="fade-up" delay={400} className="w-full max-w-8xl mx-auto mb-12 md:mb-16">
            <ScrollAnimatedCard animation="fade-up" delay={450} className="text-center mb-10" hover={false}>
              <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-gray-900">Featured Articles</h2>
            </ScrollAnimatedCard>
            <ScrollAnimatedGrid
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12"
              animation="card-slide-in"
              staggerDelay={150}
            >
              {featuredBlogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} onNavigate={onNavigate} featured={true} />
              ))}
            </ScrollAnimatedGrid>
          </ScrollAnimatedSection>

          {/* Regular Blogs Grid */}
          <ScrollAnimatedSection animation="fade-up" delay={600} className="w-full max-w-8xl mx-auto">
            <ScrollAnimatedCard animation="fade-up" delay={650} className="text-center mb-10" hover={false}>
              <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-gray-900">Latest Articles</h2>
            </ScrollAnimatedCard>
            <ScrollAnimatedGrid
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
              animation="card-fade-up"
              staggerDelay={120}
            >
              {regularBlogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} onNavigate={onNavigate} />
              ))}
            </ScrollAnimatedGrid>
          </ScrollAnimatedSection>

          {/* CTA Section */}
          <ScrollAnimatedCard 
            animation="scale-in" 
            delay={800}
            className="bg-gradient-to-r from-[#2D993D] to-[#3fab4a] rounded-2xl p-8 md:p-10 lg:p-12 text-center w-full max-w-7xl mx-auto mt-12 md:mt-16 lg:mt-20"
            hover={false}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-white mb-6 md:mb-8">Stay Updated with Our Insights</h2>
            <p className="text-base md:text-lg text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest insights, trends, and updates directly in your inbox.
            </p>
            <NewsletterForm />
          </ScrollAnimatedCard>
        </div>
      </div>
      
      <Footer onNavigate={onNavigate} onNavigateToService={onNavigateToService} theme="light" />
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20 focus:outline-none text-gray-900 input-hover"
        required
      />
      <button 
        type="submit"
        disabled={isSubmitting}
        className="bg-white text-[#2D993D] px-6 py-3 rounded-lg font-semibold whitespace-nowrap btn-hover-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  );
}