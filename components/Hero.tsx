import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:min-h-[760px] lg:pb-20 lg:pt-44">
      {/* Dotted background starts below navbar */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[100px] sm:top-[108px]">
        <Image
          src="/dotted.png"
          alt=""
          fill
          priority
          aria-hidden="true"
          sizes="100vw"
          className="object-cover object-top opacity-60"
        />
      </div>

      {/* Tailwind blurred blue circle */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute rounded-full bg-[#b4d4e9]
         opacity-50 blur-[80px]

          -left-[220px] top-[100px]
          h-[480px] w-[480px]

          sm:-left-[260px] sm:top-[90px]
          sm:h-[620px] sm:w-[620px]

          md:-left-[320px] md:top-[80px]
          md:h-[750px] md:w-[750px]

          lg:-left-[300px] lg:-top-[80px]
          lg:h-[900px] lg:w-[900px]

          xl:-left-[260px] xl:-top-[140px]
          xl:h-[1050px] xl:w-[1050px]
        "
      />

      {/*
        This outer spacing is the same as Header:
        px-4 sm:px-6 lg:px-10
      */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/*
          Header nav uses px-5 sm:px-7.
          Using the same padding here aligns the image with the
          right edge of the Book Instant Call button.
        */}
        <div className="grid items-center gap-12 px-5 sm:px-7 md:grid-cols-2 md:gap-10 lg:gap-14">
          {/* Left content */}
          <div className="mx-auto max-w-2xl text-center md:mx-0 md:text-left">
            <h1 className="text-3xl font-semibold leading-tight text-heading sm:text-4xl lg:text-5xl xl:text-[56px]">
              Building digital solutions that{" "}
              <span className="text-primary">grow your business</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-muted-text sm:text-base md:mx-0 lg:text-lg">
              We build modern websites, mobile applications, custom software
              and digital marketing solutions for growing businesses.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Link
                href="/contact"
                className="rounded-xl bg-primary px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Free Consultation
              </Link>

              <Link
                href="/service"
                className="rounded-xl bg-slate-600 px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-slate-700"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right hero image */}
          <div className="relative ml-auto w-full max-w-[600px]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/happywomen.png"
                alt="Business professional using a tablet"
                fill
                priority
                sizes="
                  (max-width: 640px) 90vw,
                  (max-width: 768px) 85vw,
                  (max-width: 1400px) 45vw,
                  600px
                "
                className="object-cover"
              />
            </div>

            {/* Floating information card */}
            <div
              className="
                absolute bottom-3 left-3
                w-[155px] rounded-xl bg-white p-3 shadow-xl

                sm:bottom-6 sm:left-5
                sm:w-[180px] sm:p-4

                md:-left-7 md:bottom-5

                lg:-left-12 lg:bottom-8
                lg:w-[190px] lg:p-5
              "
            >
              <p className="text-[10px] font-semibold text-heading sm:text-xs">
                Today&apos;s Conversion
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="font-bold text-heading sm:text-lg">
                  10,150
                </span>

                <span className="rounded-full bg-lime-200 px-2 py-1 text-[9px] font-semibold text-heading">
                  +4.2%
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-3/5 rounded-full bg-primary" />
              </div>

              <p className="mt-2 text-[10px] text-muted-text sm:text-xs">
                1,035 visitors today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}