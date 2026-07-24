import Link from "next/link";
import {
  Search,
  ClipboardPenLine,
  Megaphone,
  CodeXml,
} from "lucide-react";

const services = [
  {
    title: "SEO/SEM",
    description:
      "Improve your search visibility and connect with customers actively searching for your services.",
    icon: Search,
  },
  {
    title: "Content Marketing",
    description:
      "Build trust and attract customers through valuable, strategic and engaging content.",
    icon: ClipboardPenLine,
  },
  {
    title: "Meta Ads",
    description:
      "Reach the right audience with professionally managed Facebook and Instagram campaigns.",
    icon: Megaphone,
  },
  {
    title: "Custom Design",
    description:
      "Get responsive websites and interfaces designed around your business requirements.",
    icon: CodeXml,
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <h2 className="text-center text-3xl font-bold text-heading sm:text-4xl">
          We Provide The Best{" "}
          <span className="text-sky-400">Services</span>
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-20 w-24 items-center justify-center rounded-br-[50px] bg-blue-400 text-white">
                  <Icon size={32} strokeWidth={2} />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-heading">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-text">
                    {service.description}
                  </p>

                  <Link
                    href="/service"
                    className="mt-4 inline-block text-sm font-semibold text-primary hover:text-primary-hover"
                  >
                    Read More...
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}