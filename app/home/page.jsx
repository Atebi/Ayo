import Link from "next/link";
import Image from "next/image";
import HR from "../components/HR";

export const metadata = {
  title: "Ayo's portfolio",
  description: "A list of ayo's projects",
};

const HomePage = () => {
  return (
    <div className="flex max-w-[1536px] flex-col items-center px-6 pt-28 md:flex-row md:items-start md:gap-6 lg:gap-12 lg:px-16 2xl:mx-auto">
      <div className="max-w-xs text-center md:fixed md:min-h-screen md:max-w-[260px] md:text-left lg:max-w-xs">
        {/* Hero */}
        <section className="relative mb-7 grid place-items-center md:place-items-start">
          <div className="h-48 w-full bg-slate-200"></div>
          {/* <div className="absolute -bottom-2 h-14 w-32 bg-white text-center shadow-sm md:left-1/2 md:-translate-x-1/2">
            contact
          </div> */}
        </section>

        <h1 className="mb-5 text-4xl font-bold">Ayo Iyela</h1>
        <p className="highlight mb-2 text-2xl">Creative Developer</p>

        <p className="highlight text-base">
          I create functional and visually appealing digital products through
          UI/UX design and frontend development.
        </p>
      </div>

      {/*  */}
      <div className="hidden h-full min-w-[320px] md:block md:min-w-[260px] lg:min-w-[320px]"></div>

      {/* */}
      <div className="w-full text-center">
        {/* <HR /> */}
        <hr className="my-16 border-t-[1px] border-neutral-300 md:hidden" />

        {/* My Works */}
        <section className="grid w-full gap-14 xl:gap-16">
          {/* Project-1 */}
          <Link href="/case-study/finscious">
            <div className="w-full">
              {/* finscious thumbnail image */}
              <div className="group relative w-full overflow-hidden bg-slate-300">
                <Image
                  src="/finscious_thumbnail.webp"
                  // fill={true}
                  alt="Finscious thumbnail image"
                  priority={true}
                  // style={{ objectFit: "cover", borderRadius: "24px" }}
                  // sizes="(max-width: 768px) 320px"
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                    // borderRadius: "16px",
                  }}
                  // sizes="100vw"
                  sizes="100vw , (max-width: 896px) 75vw"
                  quality={100}
                  className="duration-500 ease-in-out group-hover:scale-110"
                />

                {/* background div */}
                <div className="absolute left-0 top-0 h-full w-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-20 group-active:opacity-0"></div>
              </div>
              <h3 className="mt-3 text-xl lg:mt-5 lg:text-lg">Finscious</h3>
              <p className="highlight text-base">Mobile App Design</p>
            </div>
          </Link>

          {/* Project-2 */}
          <Link
            href="/case-study/appledger"
            className="hover:opacity-90 active:opacity-100"
          >
            <div className="w-full">
              <div className="w-full">
                {/* appledger thumbnail image */}
                <div className="group relative w-full overflow-hidden bg-slate-300">
                  <Image
                    src="/appl_thumbnail.webp"
                    // fill={true}
                    alt="Appledger thumbnail image"
                    priority={true}
                    // style={{ objectFit: "cover", borderRadius: "24px" }}
                    // sizes="(max-width: 768px) 320px"
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                      height: "auto",
                      // borderRadius: "16px",
                    }}
                    // sizes="100vw"
                    sizes="100vw , (max-width: 896px) 75vw"
                    quality={100}
                    className="duration-500 ease-in-out group-hover:scale-110"
                  />

                  {/* background div */}
                  <div className="absolute left-0 top-0 h-full w-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-20 group-active:opacity-0"></div>
                </div>
              </div>
              <h3 className="mt-3 text-xl lg:mt-5 lg:text-lg">Appledger</h3>
              <p className="highlight text-base">
                Design & Frontend Development
              </p>
            </div>
          </Link>

          {/* Project-3 */}
          <Link
            href="/case-study/decibell"
            className="hover:opacity-90 active:opacity-100"
          >
            <div className="w-full">
              <div className="w-full">
                {/* deci thumbnail image */}
                <div className="group relative w-full overflow-hidden bg-slate-300">
                  <Image
                    src="/deci_thumbnail.webp"
                    // fill={true}
                    alt="Decibell thumbnail image"
                    priority={true}
                    // style={{ objectFit: "cover", borderRadius: "24px" }}
                    // sizes="(max-width: 768px) 320px"
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                      height: "auto",
                      // borderRadius: "16px",
                    }}
                    // sizes="100vw"
                    sizes="100vw , (max-width: 896px) 75vw"
                    quality={100}
                    className="duration-500 ease-in-out group-hover:scale-110"
                  />

                  {/* background div */}
                  <div className="absolute left-0 top-0 h-full w-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-20 group-active:opacity-0"></div>
                </div>
              </div>
              <h3 className="mt-3 text-xl lg:mt-5 lg:text-lg">Decibell</h3>
              <p className="highlight text-base">Landing Page with Blog</p>
            </div>
          </Link>
        </section>

        <HR />
      </div>
    </div>
  );
};

export default HomePage;
