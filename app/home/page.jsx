import Link from "next/link";
import Image from "next/image";
import HR from "../components/HR";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* Body */}
      <div className="mt-32 max-w-[1536px] px-6 lg:mt-40 lg:px-24 xl:px-36">
        {/* hero section */}
        <section className="flex flex-wrap justify-center gap-14 overflow-hidden lg:items-center lg:justify-between lg:gap-0">
          <h1
            data-aos="fade-up"
            className="max-w-md text-xl font-semibold leading-9 tracking-wider lg:text-4xl lg:leading-normal xl:max-w-xl xl:text-5xl xl:leading-snug"
          >
            I'm Ayo, a creative developer. I bring your ideas to life through{" "}
            <span className="bg-primary-gradient bg-clip-text text-transparent">
              UI/UX design
            </span>{" "}
            and{" "}
            <span className="bg-primary-gradient bg-clip-text text-transparent">
              frontend development
            </span>
            .
          </h1>
          {/* hero img */}
          <div
            data-aos="fade-left"
            className="relative rounded bg-primary-gradient p-[1px]"
          >
            <div className="rounded bg-primary-gradient px-2 py-4">
              <Image
                src="/ayo/atebi_home.webp"
                alt="my image"
                priority={true}
                width={0}
                height={0}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                sizes="100vw , (max-width: 896px) 45vw"
                quality={100}
                className="w-full max-w-[240px] rounded md:max-w-xs"
              />
            </div>

            {/* background frames */}
            <div className="absolute top-0 -z-10 h-full w-full rotate-6 rounded bg-primary-gradient p-[1px]">
              <div className="h-full w-full rounded bg-primary-gradient"></div>
            </div>
            <div className="absolute top-0 -z-10 h-full w-full -rotate-6 rounded bg-primary-gradient p-[1px]">
              <div className="h-full w-full rounded bg-primary-gradient"></div>
            </div>
          </div>
        </section>
        {/****/}

        <HR />

        {/* Projects */}
        <section className="grid place-items-center gap-10 text-center md:gap-14 lg:gap-16">
          {/* Project-1 */}
          <div data-aos="fade-up" className="w-full">
            <Link href="/case-study/finscious">
              {/* finscious thumbnail image */}
              <div className="group relative w-full overflow-hidden bg-slate-300">
                <Image
                  src="/ayo/fin_thumb1.webp"
                  // fill={true}
                  alt="Finscious thumbnail image"
                  priority={true}
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  sizes="100vw , (max-width: 896px) 75vw"
                  quality={100}
                  className="duration-500 ease-in-out group-hover:scale-105"
                />

                {/* background div */}
                <div className="absolute left-0 top-0 h-full w-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10 group-active:opacity-0"></div>
              </div>
            </Link>
            {/* <h3 className="mt-3 text-xl lg:mt-5 lg:text-lg">Finscious</h3>
            <p className="highlight text-base">Mobile App Design</p> */}
          </div>

          {/* Project-2 */}
          <div data-aos="fade-up" className="w-full">
            <Link href="/case-study/appledger">
              {/* appledger thumbnail image */}
              <div className="group relative w-full overflow-hidden bg-slate-300">
                <Image
                  src="/ayo/appl_thumb1.webp"
                  alt="Appledger thumbnail image"
                  priority={true}
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  sizes="100vw , (max-width: 896px) 75vw"
                  quality={100}
                  className="duration-500 ease-in-out group-hover:scale-105"
                />

                {/* background div */}
                <div className="absolute left-0 top-0 h-full w-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10 group-active:opacity-0"></div>
              </div>
            </Link>
            {/* <h3 className="mt-3 text-xl lg:mt-5 lg:text-lg">Appledger</h3>
            <p className="highlight text-base">Design & Frontend Development</p> */}
          </div>

          {/* Project-3 */}
          <div data-aos="fade-up" className="w-full">
            <Link href="/case-study/decibell">
              {/* deci thumbnail image */}
              <div className="group relative w-full overflow-hidden bg-slate-300">
                <Image
                  src="/ayo/deci_thumb1.webp"
                  alt="Decibell thumbnail image"
                  priority={true}
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  sizes="100vw , (max-width: 896px) 75vw"
                  quality={100}
                  className="duration-500 ease-in-out group-hover:scale-105"
                />

                {/* background div */}
                <div className="absolute left-0 top-0 h-full w-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10 group-active:opacity-0"></div>
              </div>
            </Link>
            {/* <h3 className="mt-3 text-xl lg:mt-5 lg:text-lg">Decibell</h3>
            <p className="highlight text-base">Landing Page with Blog</p> */}
          </div>
        </section>
        {/****/}
      </div>
      <HR />
    </>
  );
};

export default HomePage;
