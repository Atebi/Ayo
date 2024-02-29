import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import HR from "../../components/HR";
import Button from "../../components/Button";
import Solution from "../../components/pageSections/appledger/Solution";

const AppledgerPage = () => {
  return (
    <>
      <Navbar mode="case-study" />

      {/* Body */}
      <div className="max-w-[1536px] px-6 lg:px-16">
        {/* thumbnail and overview section */}
        <section className="mt-20">
          {/* appledger thumbnail image */}
          <div data-aos="fade-in" className="relative w-full rounded-2xl">
            <Image
              src="/ayo/appl_thumb2.webp"
              // fill={true}
              alt="Appledger thumbnail image"
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
          <div data-aos="fade-up" className="mt-16 grid w-full grid-cols-1 gap-14 border-y-[1px] border-neutral-300 py-16 text-sm uppercase tracking-widest md:grid-cols-2 md:justify-between 2xl:text-base">
            {/* col-1 */}
            <div className="flex flex-col gap-14">
              <div>
                <h4 className="mb-2 highlight">Title</h4>
                <p className="font-medium">Appledger</p>
              </div>

              <div>
                <h4 className="mb-2 highlight">Subtitle</h4>
                <p className="font-medium">App accounts manager.</p>
              </div>

              <div>
                <h4 className="mb-2 highlight">Client</h4>
                <p className="font-medium">Conceptual project</p>
              </div>

              <div>
                <h4 className="mb-3 highlight">Timeline</h4>
                <ul className="ml-5 flex list-inside list-disc flex-col gap-1 -indent-5">
                  <li>Overall 10 weeks</li>
                  <li>Research & analysis 2 weeks</li>
                  <li>Design & Prototype Testing 4 weeks</li>
                  <li>Frontend Development 4 weeks</li>
                </ul>
              </div>
            </div>

            {/* Col-2 */}
            <div className="flex flex-col gap-14">
              <div>
                <h4 className="mb-2 highlight">Role</h4>
                <p className="mb-3 text-xl leading-8 md:leading-9 lg:leading-10 font-medium md:text-2xl lg:text-3xl">
                  I was the sole{" "}
                  <span className="highlight">
                    ui/ux designer and frontend developer
                  </span>{" "}
                  through out the product cycle.
                </p>

                <ul className="ml-5 flex list-inside list-disc flex-col gap-1 -indent-5">
                  <li>UX analysis (flows and persona)</li>
                  <li>App Design</li>
                  <li>Frontend Development</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 highlight">Links</h4>
                <ul className="flex flex-col gap-4 lg:flex-row">
                  <li>
                    <Link href="https://www.figma.com/proto/E84xZikI87orYzxNaKlw7f/appLedger?type=design&node-id=34-441&t=3sgzyFApyqC663qq-0&scaling=scale-down&starting-point-node-id=384%3A304">
                      <Button text="PROTOTYPE" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/Atebi/appledger.git">
                      <Button text="GITHUB" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://appledger.vercel.app">
                      <Button text="VISIT SITE" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Body section */}
        <section className="leading-8">
          {/* Appledger explanation */}
          <div data-aos="fade-up" className="mx-auto mt-28 max-w-3xl md:text-center">
            <h2 className="mb-10 text-4xl font-bold lg:text-6xl">Appledger</h2>
            <p className="text-base leading-7 tracking-wider lg:text-lg lg:leading-8">
              An app directory for managing accounts. This innovative
              application not only helps to{" "}
              <span className="highlight">
                organize your multiple app accounts
              </span>{" "}
              but also makes it{" "}
              <span className="highlight">
                conveniently easy to retrieve account details when you need them
              </span>
              . No more worrying about forgetting your passwords or usernames.
              With Appledger, you can enjoy a more{" "}
              <span className="highlight">visual and user-friendly</span>{" "}
              approach to password management, similar to Google's password
              manager. Say goodbye to the old-fashioned way of storing your
              login details and hello to the convenience of Appledger!
            </p>
          </div>

          <HR />

          {/* Problem statement */}
          <div data-aos="fade-up" className="mx-auto mt-28 max-w-3xl md:text-center">
            <h2 className="mb-10 text-4xl font-bold lg:text-6xl">
              The Problem
            </h2>
            <p className="text-base leading-7 tracking-wider lg:text-lg lg:leading-8">
              How many apps are you registered to? 50? 100? maybe more?. How do
              you manage them?. Keeping track of account credentials for
              multiple apps can be a{" "}
              <span className="highlight">daunting task</span>. With the
              increasing number of apps we use daily, it’s not uncommon to have
              dozens or even{" "}
              <span className="highlight">hundreds of accounts to manage</span>.
              Storing this information in a book or on a piece of paper can be{" "}
              <span className="highlight">risky and inconvenient</span>.
              Retrieving the required information can be{" "}
              <span className="highlight">time consuming and frustrating</span>,
              especially if you have to search through multiple pages or
              documents. Therefore, it’s important to have a secure and
              efficient system in place to manage and retrieve account
              credentials easily.
            </p>
          </div>

          <HR />

          {/* Project Goals/Objective */}
          <div data-aos="fade-up" className="mx-auto mt-28 max-w-3xl md:text-center">
            <h2 className="mb-10 text-4xl font-bold lg:text-6xl">Objective</h2>
            <p className="text-base leading-7 tracking-wider lg:text-lg lg:leading-8">
              The goal of Appledger is{" "}
              <span className="highlight">
                to provide a user-friendly platform for securely storing app
                account credentials
              </span>
              . With an intuitive interface and advanced search capabilities,
              Appledger aims to{" "}
              <span className="highlight">
                enable users to easily manage and retrieve their information
                whenever necessary
              </span>
              . Whether it’s for personal or professional use, Appledger offers
              a{" "}
              <span className="highlight">reliable and efficient solution</span>
              for keeping track of important account details.
            </p>
          </div>

          <HR />

          {/* Design Process */}
          <Solution />

          <HR />

          {/* Learnings */}
          <div data-aos="fade-up" className="mx-auto mt-28 max-w-3xl md:text-center">
            <h2 className="mb-10 text-4xl font-bold lg:text-6xl">Learnings</h2>
            <p className="mb-10 text-base leading-7 tracking-wider lg:text-lg lg:leading-8">
              One of the most significant takeaways from this project was
              learning how to{" "}
              <span className="highlight">
                effectively use opacity to create a visually stunning and modern
                design
              </span>
              . This newfound understanding has allowed me to create more
              aesthetically pleasing designs in my future projects, as I now
              have a better grasp of how to manipulate visual elements to
              achieve the desired effect.
              <br />
              <br />
              Moreover, I have honed my skills both as a designer and developer,
              particularly with Next.js, which has enabled me to easily grasp
              complex processes.{" "}
              <span className="highlight">
                I have gained a comprehensive understanding of React-Next.js
                features such as dynamic routing, useRef, useState, useEffect,
                and more
              </span>
              . This has allowed me to create more efficient and effective code,
              which has resulted in faster load times and a better user
              experience.
              <br />
              <br />
              Overall, this project has been an invaluable learning experience
              that has helped me grow both personally and professionally. I have
              gained a deeper understanding of the intricacies of web
              development, and I am now better equipped to tackle more complex
              projects in the future.
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
              DECIBELL
            </h6>
            <Link href="/case-study/decibell">
              <Button text="Read case study" />
            </Link>
          </div>
        </section>
      </div>
      <HR />
    </>
  );
};

export default AppledgerPage;
