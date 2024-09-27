import * as React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqData: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqData }) => {
  return (
    <aside className="flex flex-col w-full max-md:ml-0 max-md:w-full">
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
  );
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  header: string;
  items: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    header: 'General Questions',
    items: [
      {
        question: 'What is your web design process?',
        answer:
          'Our web design process involves understanding client needs, creating wireframes, designing mockups, and iterating based on feedback before development.',
      },
      {
        question: 'Do you provide ongoing support?',
        answer:
          'Absolutely. We offer continuous support and maintenance services to ensure your website remains up-to-date and functions smoothly.',
      },
      {
        question: 'What is your typical turnaround time?',
        answer:
          'Our typical turnaround time varies depending on the project scope, but we generally aim to complete projects within 4-8 weeks.',
      },
      {
        question: 'Do you offer mobile-responsive designs?',
        answer:
          'Yes, all our designs are mobile-responsive to ensure optimal viewing experience across various devices.',
      },
    ],
  },
  {
    header: 'Curate Specific Questions',
    items: [
      {
        question: "What is Curate's care philosophy?",
        answer:
          "Curate's care philosophy centers on personalized, holistic care that prioritizes the individual needs and preferences of each client.",
      },
      {
        question: 'Does Curate Accept Insurance?',
        answer:
          'Yes! We accept a variety of insurance plans. Please contact us for specific information about your coverage.',
      },
      {
        question: 'What services does Curate offer?',
        answer:
          'Curate offers a range of services including personalized care plans, health monitoring, medication management, and lifestyle support.',
      },
      {
        question: 'How does Curate ensure quality of care?',
        answer:
          'We ensure quality of care through rigorous staff training, regular assessments, and continuous feedback from clients and their families.',
      },
    ],
  },
  {
    header: 'Technical Support',
    items: [
      {
        question: 'What kind of technical support do you offer?',
        answer:
          'We offer comprehensive technical support including troubleshooting, updates, and regular maintenance for all our web projects.',
      },
      {
        question: 'How quickly do you respond to support requests?',
        answer:
          'We aim to respond to all support requests within 24 hours, with critical issues addressed on a priority basis.',
      },
      {
        question: 'Do you offer training for content management systems?',
        answer:
          'Yes, we provide thorough training for any content management systems we implement, ensuring you can easily update your website.',
      },
      {
        question: 'Can you help with website hosting?',
        answer:
          'Absolutely! We offer reliable hosting solutions and can assist with setting up and managing your hosting environment.',
      },
    ],
  },
];

const FAQ: React.FC = () => {
  return (
    <div className="flex flex-col justify-center p-20 w-full rounded-3xl max-md:px-5 max-md:max-w-full">
      <div className="mt-5 text-5xl font-medium text-center leading-[72px] text-emerald-950 max-md:max-w-full max-md:text-4xl">
        FAQs
      </div>
      {faqData.map((section, index) => (
        <div
          key={index}
          className="flex flex-col mt-24 max-md:mt-10 max-md:max-w-full"
        >
          <div className="text-5xl leading-[72px] text-emerald-950 max-md:max-w-full max-md:text-4xl">
            {section.header}
          </div>
          <FAQAccordion faqData={section.items} />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
