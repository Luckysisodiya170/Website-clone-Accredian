"use client";
import { useState } from "react";

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("About the Course");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ Data Structure
  const faqData: Record<string, { q: string; a: string }[]> = {
    "About the Course": [
      {
        q: "What types of corporate training programs does Accredian offer?",
        a: "We offer comprehensive corporate training programs including Leadership Development, Data Science, AI & ML, and Product Management, perfectly customized to your organization's specific needs.",
      },
      {
        q: "What domain specializations are available?",
        a: "Our domain specializations include BFSI, Healthcare, E-commerce, Supply Chain, and Manufacturing, ensuring highly relevant and practical industry-specific use cases.",
      },
    ],
    "About the Delivery": [
      {
        q: "Are the training sessions live or recorded?",
        a: "We provide flexible delivery options, including 100% Live Instructor-Led sessions, blended learning formats, and self-paced modules to suit your team's availability.",
      },
      {
        q: "How long is the training duration?",
        a: "The duration varies based on the customized curriculum. Programs can range from 2-day intensive workshops to 3-month comprehensive upskilling journeys.",
      }
    ],
    "Miscellaneous": [
      {
        q: "Will the participants receive a certificate upon completion?",
        a: "Yes, all participants receive a globally recognized certificate from Accredian upon successful completion of their respective training programs.",
      },
    ],
  };

  const categories = Object.keys(faqData);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleTabChange = (category: string) => {
    setActiveTab(category);
    setOpenIndex(null); 
  };

  return (
    <section id="faqs" className="max-w-[1000px] mx-auto px-4 sm:px-6 py-10 mb-8">
      
      {/* Section Title - Reduced Size */}
      <h2 className="text-2xl sm:text-[28px] font-extrabold text-slate-900 mb-8 sm:mb-10 tracking-tight text-center lg:text-left lg:ml-2">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Side: Tabs / Categories - Smaller text and padding */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleTabChange(category)}
              className={`w-full py-3 px-4 text-center text-[13px] sm:text-sm rounded-md transition-all duration-300 font-bold border 
                ${
                  activeTab === category
                    ? "bg-white text-blue-600 border-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1)]" 
                    : "bg-white text-slate-500 border-slate-200 hover:border-blue-200 hover:text-slate-700" 
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="lg:col-span-8 flex flex-col gap-1">
          {faqData[activeTab].map((faq, index) => (
            <div key={index} className="flex flex-col">
              {/* Question Header - Smaller Size */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full py-3 text-left group"
              >
                <h4 className="text-[14px] sm:text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors pr-6">
                  {faq.q}
                </h4>
                <div className="flex-shrink-0 ml-4">
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-blue-600" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer Expansion - Smaller Text */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100 pb-3" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Enquire Now Button - Reduced Size */}
      <div className="flex justify-center mt-10">
        <button className="bg-blue-600 text-white text-[13px] sm:text-sm font-bold py-2.5 px-6 rounded-md shadow-sm hover:bg-blue-700 hover:shadow transition-all duration-300 transform hover:-translate-y-0.5">
          Enquire Now
        </button>
      </div>

    </section>
  );
}