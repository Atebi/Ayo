import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import HR from "../components/HR";
import Button from "../components/Button";
import Tool from "../components/Tool";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      {/* Body */}
      <div className="mt-32 max-w-[1536px] px-6 lg:mt-40 lg:px-24 xl:px-36">
        {/* Image and About section */}

        <section>
          {/* img */}
          <Image
            src="/ayo/atebi_about.webp"
            alt="my image"
            priority={true}
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "auto",
            }}
            sizes="100vw , (max-width: 896px) 60vw"
            quality={100}
            className="mx-auto w-full max-w-4xl duration-500 ease-in-out"
          />
          {/**/}

          <h1 className="mt-6 text-center text-3xl font-semibold leading-normal lg:mb-4 lg:text-6xl">
            Ayo Iyela
          </h1>
          <p className="text-center">
            /
            <span className="highlight font-medium italic">
              ah-yuh e-yeah-lah
            </span>
            /
          </p>

          {/* about me */}
          <div className="mx-auto mt-10 max-w-2xl text-base font-medium leading-7 tracking-wider lg:mt-14">
            {/* <h1 className="mb-10 text-3xl font-semibold leading-normal lg:text-xl">
              About Me
            </h1> */}
            <p className="mb-4">
              As a UI/UX designer and front-end developer, my unique edge in
              problem-solving and organization, which comes from my bachelor's
              degree in accounting, makes me confident in my ability to craft
              effective solutions for complex tasks.
            </p>
            <p className="mb-4">
              I chose UI/UX and front-end development as my career path because
              I am passionate about ideating and synthesizing research from
              multiple sources to create elegant designs.
            </p>

            <p className="mb-4">
              My main career goal is to continue advancing my skills and gaining
              experience to become a fully-fledged{" "}
              <span className="bg-primary-gradient bg-clip-text font-semibold text-transparent">
                product designer
              </span>{" "}
              and{" "}
              <span className="bg-primary-gradient bg-clip-text font-semibold text-transparent">
                senior front-end developer
              </span>
              .
            </p>

            <p className="mb-6">
              I am committed to working collaboratively with you in delivering
              solutions to your specific needs. With my attention to detail and
              dedication to quality, you can trust me to create digital
              solutions that are not only aesthetically pleasing but also
              user-friendly and intuitive.
            </p>

            <Link href="/contact">
              <Button text="Let's connect!" mode="primary" />
            </Link>
          </div>
          {/**/}
          {/* <Button text="Contact me" mode="primary" /> */}
        </section>

        {/****/}

        <HR />

        {/* Area of Focus */}

        <section>
          <h2 className="mb-6 text-2xl font-medium">My Area of Focus</h2>

          {/* focus with images */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:items-start md:justify-between lg:grid-cols-3 lg:gap-6">
            {/* focus-1 */}
            <div className="w-full">
              {/* Ideation & Research image */}
              <div className="relative w-full bg-slate-300">
                <Image
                  src="/ayo/ideate.webp"
                  alt="Ideation & Research image"
                  priority={true}
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  sizes="100vw , (max-width: 896px) 50vw, (max-width: 1200px) 33vw"
                  quality={100}
                />
              </div>
              <h3 className="my-2 text-lg lg:text-xl">Ideation & Research</h3>
              <p className="text-sm leading-7 tracking-wider  lg:text-base">
                To ensure that my ideas are well-informed and have a higher
                chance of success, I make it a point to validate them through
                thorough research and analysis on various aspects such as the
                users, the market, and the product itself.
              </p>
            </div>

            {/* focus-2 */}
            <div className="w-full">
              {/* prototype image */}
              <div className="relative w-full bg-slate-300">
                <Image
                  src="/ayo/prototype.webp"
                  alt="prototype image"
                  priority={true}
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  sizes="100vw , (max-width: 896px) 50vw, (max-width: 1200px) 33vw"
                  quality={100}
                />
              </div>
              <h3 className="my-2 text-lg lg:text-xl">Design & Prototype</h3>
              <p className="text-sm leading-7 tracking-wider  lg:text-base">
                I utilize Figma to craft my designs and incorporate
                functionality to simulate user interaction with the product.
              </p>
            </div>

            {/* focus-3 */}
            <div className="w-full">
              {/* frontend image */}
              <div className="relative w-full bg-slate-300">
                <Image
                  src="/ayo/frontend.webp"
                  alt="frontend image"
                  priority={true}
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  sizes="100vw , (max-width: 896px) 50vw, (max-width: 1200px) 33vw"
                  quality={100}
                />
              </div>
              <h3 className="my-2 text-lg lg:text-xl">Frontend Development</h3>
              <p className="text-sm leading-7 tracking-wider lg:text-base">
                I find great satisfaction in transforming designs into
                functional products by constructing a rudimentary version and
                deploying it on the web. This approach allows for thorough
                testing of all functionalities, ensuring a seamless user
                experience.
              </p>
            </div>
          </div>
          {/**/}
        </section>
        {/****/}

        <HR />

        {/* Tools */}

        <section>
          <h2 className="mb-4 text-2xl font-medium">Major Tools</h2>
          <p className="mb-10 max-w-lg text-sm xl:text-base">
            I rely on these tools for everything, from research and analysis, to
            design and frontend development.
          </p>

          <div className="mx-auto grid max-w-3xl grid-cols-2 justify-between gap-6 md:grid-cols-4">
            <Tool imageUrl="google.svg" alt="Google logo" label="Google" />
            <Tool imageUrl="figma.svg" alt="Figma logo" label="Figma" />
            <Tool imageUrl="html5.svg" alt="HTML logo" label="HTML5" />
            <Tool imageUrl="css.svg" alt="CSS logo" label="CSS" />
            <Tool
              imageUrl="tailwind.svg"
              alt="TailwindCSS logo"
              label="TailwindCSS"
            />
            <Tool imageUrl="react.svg" alt="React logo" label="React" />
            <Tool imageUrl="nextjs.svg" alt="Nextjs logo" label="Next" />
            <Tool imageUrl="github.svg" alt="Github logo" label="Github" />
          </div>
        </section>

        {/****/}
      </div>
      <HR />
    </>
  );
};

export default AboutPage;
