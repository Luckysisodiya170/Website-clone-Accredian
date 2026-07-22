"use client";
import { useState } from "react";

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  // All 3 Testimonials Data
  const allTestimonials = [
    {
      logo: "/adp.svg",
      alt: "ADP Logo",
      text: '"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."',
    },
    {
      logo: "/bayer.svg",
      alt: "Bayer Logo",
      text: '"Accredian\'s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."',
    },
    {
      logo: "/rel.png",
      alt: "Reliance Logo",
      text: '"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."',
    },
  ];

  const sliderPages = [
    [allTestimonials[0], allTestimonials[1]], // Slide 1 (Page 0)
    [allTestimonials[1], allTestimonials[2]], // Slide 2 (Page 1)
  ];

  return (
    <section className="max-w-[850px] mx-auto px-4 sm:px-6 py-8 mb-8">
      
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1 tracking-tight">
          Testimonials from <span className="text-blue-600">Our Partners</span>
        </h2>
        <p className="text-[12px] sm:text-[13px] text-slate-600 font-medium">
          What <span className="text-blue-600">Our Clients</span> Are Saying
        </p>
      </div>

      <div className="relative w-full overflow-hidden pb-4">
        
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {sliderPages.map((page, pageIndex) => (
            <div key={pageIndex} className="w-full shrink-0 px-1">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                {page.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col justify-start shadow-sm hover:shadow-md transition-shadow min-h-[180px]"
                  >
                    {/* Logo Image */}
                    <div className="h-8 mb-4 flex items-center justify-start">
                      <img 
                        src={item.logo} 
                        alt={item.alt} 
                        className="h-full w-auto object-contain max-w-[90px]"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<span class="font-bold text-[13px] text-slate-800">${item.alt}</span>`;
                        }}
                      />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-[12px] sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Pagination / Slider Dots */}
      <div className="flex justify-center items-center gap-2 mt-2">
        <button 
          onClick={() => setActiveSlide(0)}
          className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
            activeSlide === 0 ? "bg-blue-600 scale-110" : "bg-slate-300 hover:bg-slate-400"
          }`}
          aria-label="View first slide"
        />
        <button 
          onClick={() => setActiveSlide(1)}
          className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
            activeSlide === 1 ? "bg-blue-600 scale-110" : "bg-slate-300 hover:bg-slate-400"
          }`}
          aria-label="View second slide"
        />
      </div>

    </section>
  );
}