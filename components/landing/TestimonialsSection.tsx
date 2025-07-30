import { ScrollAnimatedCard, ScrollAnimatedSection, ScrollAnimatedGrid } from '../ScrollAnimatedCard';
import { testimonials } from './constants';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function TestimonialsSection() {
  return (
    <ScrollAnimatedSection animation="fade-up" className="bg-gradient-to-b from-gray-50 to-white relative w-full">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 md:gap-10 lg:gap-12 items-center justify-center px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 relative w-full">
          
          <ScrollAnimatedCard animation="fade-up" className="text-center max-w-4xl mx-auto" hover={false}>
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-gray-900 mb-6 md:mb-8">
              <p className="leading-tight">What Our Clients Say</p>
            </h2>
            <div className="text-[16px] md:text-[18px] text-gray-700 tracking-[0.5px]">
              <p className="leading-relaxed">
                Real feedback from companies who have transformed their business with our solutions
              </p>
            </div>
          </ScrollAnimatedCard>
          
          <ScrollAnimatedGrid
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full max-w-8xl mx-auto"
            animation="card-fade-up"
            staggerDelay={150}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm card-hover-subtle">
                
                {/* Quote */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#2D993D] mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <blockquote className="text-[16px] md:text-[18px] text-gray-900 leading-relaxed font-medium italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#2D993D]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={`${testimonial.author} avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-['Roboto:Bold',_sans-serif] font-bold text-gray-900 text-[16px] md:text-[18px]">
                      {testimonial.author}
                    </div>
                    <div className="text-[14px] md:text-[16px] text-gray-600">
                      {testimonial.position}
                    </div>
                    <div className="text-[14px] md:text-[16px] text-[#2D993D] font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollAnimatedGrid>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}