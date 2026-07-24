import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-[#1e0753] px-4 py-20 text-center text-white sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Ready to get started?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-purple-100 sm:text-base">
          Partner with Proverb Technologies to build scalable software, modern
          websites, mobile applications and digital solutions that drive
          business growth.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-blue-900 transition-transform hover:scale-105"
        >
          Get a Free Consultation
        </Link>
      </div>
    </section>
  );
}