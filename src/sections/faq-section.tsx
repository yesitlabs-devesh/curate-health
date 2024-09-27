import * as React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

interface QAProps {
  question: string;
  answer?: string;
  imgSrc: string;
  alt: string;
}

const QAItem: React.FC<QAProps> = ({ question, answer, imgSrc, alt }) => (
  <div className="flex flex-col justify-center px-5 py-5 mt-4 rounded-2xl bg-neutral-100 max-md:max-w-full">
    <div className="flex flex-col justify-center max-md:max-w-full">
      <div className="flex gap-5 justify-between text-base text-neutral-800 max-md:flex-wrap max-md:max-w-full">
        <div>{question}</div>
        <img
          loading="lazy"
          src={imgSrc}
          className="shrink-0 my-auto aspect-[1.09] w-[13px]"
          alt={alt}
        />
      </div>
      {answer && (
        <div className="mt-4 text-xs font-light leading-4 text-neutral-400 max-md:max-w-full">
          {answer}
        </div>
      )}
    </div>
  </div>
);
const FAQSection: React.FC = () => {
  const faqData = [
    {
      question: 'What is Curate’s care philosophy?',
      imgSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d7ffe8e9afccac5c0adc91a9a3a7bb74e5c57b92f8494b2499d48b05a4ae10fd?apiKey=fac0b9adbf9c43738d3faaf142128124&',
      altText: 'FAQ Icon',
    },
    {
      question: 'Does Curate Accept Insurance?',
      answer: 'Yes!',
      imgSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/27b36577a35cbfe027587b7eca6c5623eb42405b7374503240d8b15824615775?apiKey=fac0b9adbf9c43738d3faaf142128124&',
      altText: 'FAQ Icon',
    },
    {
      question: 'Do you provide ongoing support?',
      imgSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d7ffe8e9afccac5c0adc91a9a3a7bb74e5c57b92f8494b2499d48b05a4ae10fd?apiKey=fac0b9adbf9c43738d3faaf142128124&',
      altText: 'FAQ Icon',
    },
    {
      question: 'What is your web design process?',
      imgSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d7ffe8e9afccac5c0adc91a9a3a7bb74e5c57b92f8494b2499d48b05a4ae10fd?apiKey=fac0b9adbf9c43738d3faaf142128124&',
      altText: 'FAQ Icon',
    },
  ];

  return (
    <main className="flex flex-col justify-center self-center w-full rounded-3xl m-auto max-md:px-5 max-md:max-w-full faq-section-wrap">
      <section className="flex flex-col mx-5 mt-5 max-md:mr-2.5 max-md:max-w-full">
        <h1 className="text-5xl leading-[72px] text-emerald-950 max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
          Frequently Asked Questions
        </h1>
      </section>
      <div className="mx-5 mt-4 mb-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="max-md:flex-col max-md:gap-0">
          <aside className="flex flex-col w-12/12 max-md:ml-0 max-md:w-full">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="flex justify-between items-center p-5 bg-white rounded-t-xl">
                    <span className="text-xl font-medium text-neutral-800">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="p-5 pt-0 bg-white rounded-b-xl text-neutral-600">
                    {faq.answer || 'No additional information provided.'}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </aside>
          {/* <figure className="relative flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://i.postimg.cc/ZKkh8TH0/Group-1171275192.png"
              alt="FAQ Illustration"
              className="w-full max-md:max-w-full"
            />
          </figure> */}
        </div>
      </div>
    </main>
  );
};

export default FAQSection;
