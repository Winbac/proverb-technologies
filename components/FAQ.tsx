import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What does Proverb Technologies do?",
    answer:
      "We build custom websites, web applications, mobile apps, CRM systems, ERP software and digital marketing solutions.",
  },
  {
    question: "Do you develop custom software?",
    answer:
      "Yes. We develop software based on the requirements, workflow and goals of your business.",
  },
  {
    question: "Do you provide mobile app development?",
    answer:
      "Yes. We build responsive and scalable mobile applications for Android and iOS.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can improve the design, performance, responsiveness and user experience of an existing website.",
  },
  {
    question: "Do you provide digital marketing services?",
    answer:
      "Yes. Our services include SEO, content marketing, Meta Ads and search engine marketing.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Visit our contact page and share your project requirements. Our team will contact you to discuss the project.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="rounded-3xl bg-surface-muted p-5 sm:p-10 lg:p-14">
          <h2 className="text-center text-3xl font-bold text-heading sm:text-4xl">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-gradient-to-r from-blue-800 to-sky-500 p-5 text-white sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold sm:text-lg">
                  {faq.question}

                  <ChevronDown className="shrink-0 transition-transform group-open:rotate-180" />
                </summary>

                <p className="mt-4 text-sm leading-7 text-blue-50 sm:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}