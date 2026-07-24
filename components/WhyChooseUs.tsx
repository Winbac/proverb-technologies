import Image from "next/image";
import { CircleCheck } from "lucide-react";

const benefits = [
  {
    title: "Business-focused solutions",
    description:
      "Every solution is planned around your business goals, customers and long-term growth.",
  },
  {
    title: "Modern technology",
    description:
      "We use reliable modern technologies to build fast, secure and scalable products.",
  },
  {
    title: "Reliable support",
    description:
      "Our team provides clear communication and dependable support throughout the project.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10 lg:p-16">
          <h2 className="text-center text-3xl font-bold text-heading sm:text-4xl">
            Why To <span className="text-sky-400">Work</span> With Us
          </h2>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <CircleCheck
                    className="mt-1 shrink-0 text-blue-400"
                    size={22}
                  />

                  <div>
                    <h3 className="text-lg font-bold text-heading sm:text-xl">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-muted-text sm:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute right-4 top-4 h-48 w-48 rounded-[50px] bg-blue-100 sm:h-64 sm:w-64" />

              <div className="relative aspect-square">
                <Image
                  src="/why-choose-us.png"
                  alt="Professional using a tablet"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}