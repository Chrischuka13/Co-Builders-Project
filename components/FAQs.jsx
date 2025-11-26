import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from "lucide-react";


const Faqs = [
  {
    question: "Why Choose CoBuilders?",
    answer: "Cobuilder stands out for its trusted professionals, eco-friendly products, and flexible scheduling. We're committed to deliveing top-quality cleaning with your satisfaction as our priority",
  },
  {
    question: "What do we clean?",
    answer: "We clean home, offices, apartments, and commercial spaces. From living rooms to restrooms, kitchens to conference rooms-our team handles it all with care and precision",
  },
  {
    question: "Are CoBuilders cleaners trained and insured?",
    answer: "Yes, all our cleaners at Cleanzers are professionally trained, background-checked, and fully insured for your peace of mind.",
  },
  {
    question: "How long has Cleanzers been in business?",
    answer: "Cleanzers has been proudly serving customers since 2009, delivering reliable and top-quality cleaning services every step of the way and since then it had become the number one cleaning company till now",
  },
];
const FAQs = () => {
  const [openIndex, setOpenIndex] = useState("");

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? "" : index);
  };

  return (
    <section id='faq'>
        <div className="bg-[#F1F4FF] py-10 h-[675px] md:h-[575px]">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
                Frequently Asked Questions
            </h2>

            <div className=" container mx-auto space-y-4">
                {Faqs.map((faq, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg p-4">
                    <button onClick={() => toggle(index)}
                        className="w-full flex justify-between items-center text-left hover:cursor-pointer">
                        <span className="text-lg  text-gray-900 font-bold">{faq.question}</span>
                        <span className="text-gray-600">{openIndex === index ? <ChevronUp /> : <ChevronDown />}</span>
                    </button>
                    
                    {openIndex === index && (
                    <div className="mt-3 text-gray-600 pt-3">{faq.answer}</div>
                    )}
                </div>
                ))}
            </div>
        </div>
    </section>
    
  );
};

export default FAQs;