import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import faqData from '../../data/en.json'; // Adjust the path as necessary

const FAQs = () => {
  const faqs = faqData.FAQs.questions.map((faq) => ({
    ...faq,
    id: nanoid(),
    name: `item-${nanoid()}`, // Generate a unique name for accordion functionality
  }));

  return (
    <div className="container px-4 flex flex-col md:flex-row items-end gap-20 md:gap-12 mb-[100px] md:mb-[160px]">
      <Accordion
        type="single"
        collapsible
        defaultValue={faqs[0]?.name}
        className="w-full max-w-[650px]"
      >
        <span className="font-semibold">FAQs</span>
        <h4 className="font-bold py-[30px]">Have Any Questions?</h4>
        <p className="font-medium text-secondary-foreground mb-12">
          Your Essential Guide to Frequently Asked Questions.
        </p>

        <div className="flex flex-col gap-4">
          {faqs.map(({ id, name, question, answer }) => (
            <AccordionItem
              key={id}
              value={name}
              className="border border-border rounded-2xl"
            >
              <AccordionTrigger className="text-lg text-start px-7 py-6 font-medium hover:no-underline">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-start px-7 py-6">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </Accordion>

      <Image
        width={504}
        height={548}
        className="mx-auto md:ml-auto"
        src="/assets/images/management-landing/faqs.svg"
        alt="FAQs illustration"
      />
    </div>
  );
};

export default FAQs;
