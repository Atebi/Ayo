import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import HR from "@/app/components/HR";
import Solution from "@/app/components/pageSections/decibell/Solution";
import Button from "@/app/components/Button";

const DecibellPage = () => {
  return (
    <>
      <Navbar mode="case-study" />

      {/* Body */}
      <div className="max-w-[1536px] px-6 lg:px-16">
        {/* thumbnail and overview section */}
        <section className="mt-20">
          {/* decibell thumbnail image */}
          <div data-aos="fade-in" className="relative w-full rounded-2xl">
            <Image
              src="/ayo/deci_hero.webp"
              // fill={true}
              alt="Decibell thumbnail image"
              priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "16px" }}
              sizes="100vw"
              quality={100}
            />
          </div>

          {/* overview/summary */}
          <div
            data-aos="fade-up"
            className="mt-16 grid w-full grid-cols-1 gap-14 border-y-[1px] border-neutral-300 py-16 text-sm uppercase tracking-widest md:grid-cols-2 md:justify-between 2xl:text-base"
          >
            {/* col-1 */}
            <div className="flex flex-col gap-14">
              <div>
                <h4 className="highlight mb-2">Title</h4>
                <p className="font-medium">Decibell</p>
              </div>

              <div>
                <h4 className="highlight mb-2">Subtitle</h4>
                <p className="font-medium">
                  Instant collaboration between musicians.
                </p>
              </div>

              <div>
                <h4 className="highlight mb-2">Client</h4>
                <p className="font-medium">Conceptual project</p>
              </div>

              <div>
                <h4 className="highlight mb-3">Timeline</h4>
                <ul className="ml-5 flex list-inside list-disc flex-col gap-1 -indent-5">
                  <li>Overall 6 weeks</li>
                  <li>Research & analysis 1 week</li>
                  <li>Ui/Ux Design 2 weeks</li>
                  <li>Frontend Development 3 weeks</li>
                </ul>
              </div>
            </div>

            {/* Col-2 */}
            <div className="flex flex-col gap-14">
              <div>
                <h4 className="highlight mb-2">Role</h4>
                <p className="mb-3 text-xl font-medium leading-8 md:text-2xl md:leading-9 lg:text-3xl lg:leading-10">
                  I was the sole{" "}
                  <span className="highlight">
                    ui/ux designer and frontend developer
                  </span>{" "}
                  through out the product cycle.
                </p>

                <ul className="ml-5 flex list-inside list-disc flex-col gap-1 -indent-5">
                  {/* <li>UX analysis</li> */}
                  <li>UI/UX Design</li>
                  <li>Logo Design</li>
                  <li>Frontend Development</li>
                </ul>
              </div>

              <div>
                <h4 className="highlight mb-2">Links</h4>
                <ul className="flex flex-col gap-4 lg:flex-row">
                  <li>
                    <Link href="https://www.figma.com/proto/7ZeLieWJ9wg9txKCZY5NqI/Decibell?type=design&node-id=32-1120&t=1oku1wgVt64PB96v-0&scaling=min-zoom&starting-point-node-id=755%3A4065">
                      <Button text="DESIGN" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/Atebi/decibell.git">
                      <Button text="GITHUB" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://decibell.vercel.app">
                      <Button text="VISIT SITE" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Body section */}
        <section>
          {/* Decibell explanation */}
          <div data-aos="fade-up" className="mx-auto mt-28 max-w-4xl md:text-center">
            <h2 className="mb-10 text-4xl font-bold lg:text-6xl">Decibell</h2>
            <p className="text-base leading-7 tracking-wider lg:text-lg lg:leading-8">
              Decibell represents a vibrant and dynamic social platform,
              tailored explicitly to{" "}
              <span className="highlight">
                serve the interconnected needs of musicians
              </span>{" "}
              within the industry. This innovative space serves as{" "}
              <span className="highlight">
                a hub where a mix of producers, vocalists and songwriters
                converge
              </span>{" "}
              to not only forge connections but also indulge in the art of
              collaborative creation. Beyond mere networking, Decibell fosters
              an environment ripe with opportunities, encouraging{" "}
              <span className="highlight">creative minds to unite</span>,
              exchange ideas, and{" "}
              <span className="highlight">
                craft musical masterpieces together
              </span>
              .
            </p>
          </div>

          <HR />

          {/* Problem statement */}
          <div data-aos="fade-up" className="mx-auto mt-28 max-w-4xl md:text-center">
            <h2 className="mb-10 text-4xl font-bold lg:text-6xl">
              The Problem
            </h2>
            <p className="text-base leading-7 tracking-wider lg:text-lg lg:leading-8">
              The emergence of a collaborative space for musicians has been a{" "}
              <span className="highlight">long-awaited necessity</span> within
              the industry.
              <br />
              This gap isn't solely limited to producers; it extends to{" "}
              <span className="highlight">
                songwriters actively seeking talented vocalists
              </span>
              , regardless of their stage in their career, to collaborate on
              musical endeavors. This{" "}
              <span className="highlight">
                void in collaborate opportunities
              </span>{" "}
              has been keenly felt and underscores the importance of
              establishing such a platform.
            </p>
          </div>

          <HR />

          {/* Project Goals/Objective */}
          <div data-aos="fade-up" className="mx-auto mt-28 max-w-4xl md:text-center">
            <h2 className="mb-10 text-4xl font-bold lg:text-6xl">
              Project Goal
            </h2>
            <p className="text-base leading-7 tracking-wider lg:text-lg lg:leading-8">
              The primary objective of this project was to{" "}
              <span className="highlight">
                develop a compelling landing page
              </span>{" "}
              for Decibell, aimed at{" "}
              <span className="highlight">
                fostering widespread awareness regarding its concept
              </span>
              .<br />
              Furthermore, the intention is to{" "}
              <span className="highlight">
                attract potential investors or individuals willing to undertake
                full stewardship of the project
              </span>
              , thereby propelling its realization to fruition.
            </p>
          </div>

          <HR />

          {/* Solution */}
          <Solution />

          <HR />

          {/* Learnings */}
          <div data-aos="fade-up" className="mx-auto mt-28 max-w-4xl md:text-center">
            <h2 className="mb-10 text-4xl font-bold leading-none lg:text-6xl">
              Learnings
            </h2>
            <p className="text-base leading-7 tracking-wider lg:text-lg lg:leading-8">
              The culmination of this project proved instructive, affording me a
              myriad of valuable insights.{" "}
              <span className="highlight">
                I acquired proficiency in implementing two distinct fonts within
                a project using Nextjs and Tailwind CSS
              </span>
              .<br />
              <br />
              Additionally, I successfully{" "}
              <span className="highlight">
                curated custom color styles utilizing Tailwind CSS
              </span>{" "}
              expanding my repertoire of design capabilities. Furthermore, my
              adeptbess in{" "}
              <span className="highlight">
                utilizing grid and flex to ensure responsive layout design
              </span>{" "}
              witnessed considerable enhancement.
              <br />
              <br />
              Collectively, this project significantly bolstered my expertise
              primarily in the domain of{" "}
              <span className="highlight">
                responsive frontend development
              </span>{" "}
              and CSS custom styling.
            </p>
          </div>

          <HR />

          {/* Thanks */}
          <div data-aos="fade-up" className="mt-28 max-w-md lg:max-w-2xl">
            <h2 className="mb-6 text-4xl font-bold lg:text-6xl">
              Thanks for reading my case study
            </h2>
            <p className="highlight mb-3 max-w-sm text-base lg:max-w-md lg:text-lg">
              Want to talk more about this project? or work with me on another?
              or just want to say hi?
            </p>
            <Link href="/contact">
              <Button mode="primary" text="Contact me" />
            </Link>
          </div>

          <HR />

          {/* Next Project */}
          <div data-aos="fade-up" className="mx-auto mt-28 w-fit text-center tracking-widest">
            <h6 className="mb-3 text-xs md:text-sm">NEXT PROJECT</h6>
            <h6 className="mb-3 text-base font-semibold md:text-lg">
              FINSCIOUS
            </h6>
            <Link href="/case-study/finscious">
              <Button text="Read case study" />
            </Link>
          </div>
        </section>
      </div>
      <HR />
    </>
  );
};

export default DecibellPage;
