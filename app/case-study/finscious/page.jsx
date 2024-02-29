import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import HR from "@/app/components/HR";
import Solution from "@/app/components/pageSections/finscious/Solution";
import Button from "@/app/components/Button";

const FinsciousPage = () => {
  return (
    <>
      <Navbar mode="case-study" />

      {/* Body */}
      <div className="max-w-[1536px] px-6 lg:px-16">
        {/* thumbnail and overview section */}
        <section className="mt-20">
          {/* finscious thumbnail image */}
          <div data-aos="fade-in" className="relative w-full rounded-2xl">
            <Image
              src="/ayo/fin_thumb2.webp"
              // fill={true}
              alt="Finscious thumbnail image"
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
                <p className="font-medium">Finscious</p>
              </div>

              <div>
                <h4 className="highlight mb-2">Subtitle</h4>
                <p className="font-medium">Income and expense tracker app.</p>
              </div>

              <div>
                <h4 className="highlight mb-2">Client</h4>
                <p className="font-medium">Conceptual project</p>
              </div>

              <div>
                <h4 className="highlight mb-3">Timeline</h4>
                <ul className="ml-5 flex list-inside list-disc flex-col gap-1 -indent-5">
                  <li>Overall 10 weeks</li>
                  <li>Research & analysis 2 weeks</li>
                  <li>UI/UX Product Design & Prototype Testing 8 weeks</li>
                  {/* <li>Frontend Development 4 weeks</li> */}
                </ul>
              </div>
            </div>

            {/* Col-2 */}
            <div className="flex flex-col gap-14">
              <div>
                <h4 className="highlight mb-2">Role</h4>
                <p className="mb-3 text-xl font-medium leading-8 md:text-2xl md:leading-9 lg:text-3xl lg:leading-10">
                  I was the sole{" "}
                  <span className="highlight">product designer</span> through
                  out the product cycle.
                </p>

                <ul className="ml-5 flex list-inside list-disc flex-col gap-1 -indent-5">
                  <li>UX analysis</li>
                  <li>App Design</li>
                </ul>
              </div>

              <div>
                <h4 className="highlight mb-2">Links</h4>

                <Link href="https://www.figma.com/proto/jtXxpkLUjnEm4vUfb6tGlT/Finscious?type=design&node-id=401-3374&t=gtBCilzw7j8sKouF-0&scaling=scale-down&starting-point-node-id=529%3A3026">
                  <Button text="PROTOTYPE" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Body section */}
        <section className="leading-8">
          {/* Finscious explanation */}
          <div
            data-aos="fade-up"
            className="mx-auto mt-28 max-w-4xl md:text-center"
          >
            <h2 className="mb-10 text-4xl font-bold lg:text-6xl">Finscious</h2>
            <p className="text-base leading-7 tracking-wider lg:text-lg lg:leading-8">
              Finscious is a comprehensive financial management application that
              offers a wide range of features to help you{" "}
              <span className="highlight">
                keep track of your income and expenses
              </span>
              . With its user-friendly interface, you can easily view your
              financial data over multiple periods, allowing you to{" "}
              <span className="highlight">
                gain a deeper understanding of your spending habits
              </span>
              . The app provides detailed reports and charts that{" "}
              <span className="highlight">
                give you a clear picture of your financial situation
              </span>
              , making it easier for you to make informed decisions about your
              money. Unlike traditional bank statements, Finscious is designed
              to be customizable, allowing you to tailor it to your specific
              needs and preferences. Whether for personal or business use,
              Finscious is an integral step towards achieving financial success
              and independence.
            </p>
          </div>

          <HR />

          {/* Problem statement */}
          <div
            data-aos="fade-up"
            className="mx-auto mt-28 max-w-4xl md:text-center"
          >
            <h2 className="mb-10 text-4xl font-bold lg:text-6xl">
              The Problem
            </h2>
            <p className="text-base leading-7 tracking-wider lg:text-lg lg:leading-8">
              It is a widely recognized fact that many{" "}
              <span className="highlight">
                individuals struggle to identify the sources of their expenses
              </span>
              . This lack of clarity can lead to a range of financial
              difficulties, including poor decision-making and the repetition of
              past mistakes. Whether it is the cost of grocery shopping,
              transportation, or even gambling, many people find it challenging
              to <span className="highlight">keep track of their spending</span>{" "}
              and make informed choices about their finances. Without a clear
              view of their financial data, individuals may continue to{" "}
              <span className="highlight">
                struggle with managing their expenses effectively
              </span>
              , leading to ongoing financial stress and uncertainty.
            </p>
          </div>

          <HR />

          {/* Project Goals/Objective */}
          <div
            data-aos="fade-up"
            className="mx-auto mt-28 max-w-4xl md:text-center"
          >
            <h2 className="mb-10 text-4xl font-bold lg:text-6xl">
              Finscious Objective
            </h2>
            <p className="text-base leading-7 tracking-wider lg:text-lg lg:leading-8">
              Fincious aims to enhance users' financial awareness by providing
              them with a comprehensive and{" "}
              <span className="highlight">
                detailed record of their income and expenses
              </span>
              . With Fincious, users can{" "}
              <span className="highlight">
                easily track their spending habits
              </span>{" "}
              and identify areas where they can save money. The platform offers
              a range of features that enable users to analyze their finances in
              detail, including{" "}
              <span className="highlight">
                customizable categories, detailed transaction records, and
                intuitive visualizations
              </span>
              . It is a system individuals and businesses can use to{" "}
              <span className="highlight">
                develop a deeper understanding of their financial situation
              </span>{" "}
              and make informed decisions about their money. With Fincious,{" "}
              <span className="highlight">financial consciousness</span> is not
              just a goal, but a way of life that empowers users to take control
              of their finances.
            </p>
          </div>

          <HR />

          {/* Solution */}
          <Solution />

          <HR />

          {/* Learnings */}
          <div
            data-aos="fade-up"
            className="mx-auto my-28 max-w-4xl md:text-center"
          >
            <h2 className="mb-10 text-4xl font-bold leading-none lg:text-6xl">
              Learnings
            </h2>
            <p className="mb-10 text-base leading-7 tracking-wider lg:text-lg lg:leading-8">
              This project was instrumental in deepening my grasp of{" "}
              <span className="highlight">
                implementing a 4-point grid system
              </span>{" "}
              for precise component spacing. Not only did it enable me to master
              the utilization of font weight and colour for{" "}
              <span className="highlight">
                establishing a clear visual hierarchy
              </span>{" "}
              and distinguishing diverse elements, but it also served as a
              catalyst for{" "}
              <span className="highlight">
                advancing my approach to UX research and analytical reasoning
              </span>
              . As a result, I've significantly enhanced my skill set as a more
              adept and versatile UX researcher and designer.
            </p>

            {/* stand-alone */}
            <div
              data-aos="fade-up"
              className="highlight mx-auto mb-8 leading-7 tracking-wider lg:leading-8"
            >
              <p className="mb-1 text-lg font-medium">Stand-alone platform</p>
              <p className="text-base">
                Finscious serves as a versatile bookkeeping application suitable
                for individual use as well as for businesses, notably small and
                medium-sized enterprises (SMEs) and startups seeking streamlined
                financial management without the requirement for excessively
                intricate or costly accounting software.
              </p>
            </div>

            {/* stand-alone */}
            <div
              data-aos="fade-up"
              className="highlight mx-auto mb-8 leading-7 tracking-wider lg:leading-8"
            >
              <p className="mb-1 text-lg font-medium">Fintech integration</p>
              <p className="text-base">
                One of the best use cases for Finscious lies within the context
                of integration within a bank's ecosystem or various fintech
                platforms designed for seamless banking operations, notably
                encompassing money transfers. Its primary advantage emerges as a
                compelling alternative to traditional bank statements, offering
                users a more visually immersive, intricately detailed, and
                user-centric experience, streamlining the process of managing
                financial transactions
              </p>
            </div>
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
          <div
            data-aos="fade-up"
            className="mx-auto mt-28 w-fit text-center tracking-widest"
          >
            <h6 className="mb-3 text-xs md:text-sm">NEXT PROJECT</h6>
            <h6 className="mb-3 text-base font-semibold md:text-lg">
              APPLEDGER
            </h6>
            <Link href="/case-study/appledger">
              <Button text="Read case study" />
            </Link>
          </div>
        </section>
      </div>

      <HR />
    </>
  );
};

export default FinsciousPage;
