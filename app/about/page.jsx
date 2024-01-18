import Image from "next/image";
import HR from "../components/HR";
import Tool from "../components/Tool";

export const metadata = {
  title: "About Ayo",
  description: "Ayo's goals, tools and more...",
}

const AboutPage = () => {
  return (
    <div className="flex max-w-[1536px] flex-col items-center px-6 pt-32 md:flex-row md:items-start md:gap-6 lg:gap-12 lg:px-16 xl:pt-36 2xl:mx-auto">
      <div className="max-w-xs md:fixed md:min-h-screen md:max-w-[260px] lg:max-w-xs">
        {/* Hero */}
        <section className="grid place-items-center gap-2">
          <div className="h-56 w-full bg-slate-200"></div>

          <p className="mt-0.5 text-center text-xs lg:text-sm">
            I'm currently located in lagos, Nigeria and can work remotely.
          </p>
        </section>
      </div>

      {/*  */}
      <div className="hidden h-full min-w-[320px] md:block md:min-w-[260px] lg:min-w-[320px]"></div>

      {/* */}
      <div className="w-full">
        <hr className="my-16 border-t-[1px] border-neutral-300 md:hidden" />

        {/* About me */}

        <section className="w-full text-base text-neutral-950 lg:text-lg">
          <h1 className="mb-8 text-3xl font-bold lg:text-4xl">About Me</h1>
          <p className="mb-3">
            As a UI/UX designer and front-end developer, I am confident in my
            ability to craft effective solutions for complex systems. My unique
            edge in problem-solving and organization, which comes from my
            bachelor's degree in accounting, has helped me excel in my field.
          </p>

          <p className="mb-3">
            I chose UI/UX and front-end development as my career path because I
            am passionate about ideating and synthesizing research from multiple
            sources to create elegant designs.
          </p>

          <p className="mb-3">
            My main career goal is to continue advancing my skills and gaining
            experience to become a fully-fledged product designer and senior
            front-end developer.
          </p>

          <p className="mb-3">
            I am committed to working collaboratively with you in delivering
            solutions to your specific needs. With my attention to detail and
            dedication to quality, you can trust me to create digital solutions
            that are not only aesthetically pleasing but also user-friendly and
            intuitive.
          </p>
        </section>

        <HR />

        {/* My Area of Focus */}

        <section>
          <h2 className="mb-4 text-xl font-semibold lg:text-2xl">
            My Area of Focus
          </h2>

          <div className="grid grid-cols-1 items-center gap-6 md:items-start lg:grid-cols-2 lg:justify-between xl:grid-cols-3">
            {/* focus-1 */}
            <div className="w-full">
              {/* Ideation & Research image */}
              <div className="relative w-full bg-slate-300">
                <Image
                  src="/ideate.webp"
                  alt="Ideation & Research image"
                  priority={true}
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  sizes="100vw , (max-width: 896px) 70vw, (max-width: 1200px) 33vw"
                  quality={100}
                />
              </div>
              <h3 className="my-2 text-lg font-medium lg:text-xl">
                Ideation & Research
              </h3>
              <p className="text-sm lg:text-base">
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
                  src="/prototype.webp"
                  alt="prototype image"
                  priority={true}
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  sizes="100vw , (max-width: 896px) 70vw, (max-width: 1200px) 33vw"
                  quality={100}
                />
              </div>
              <h3 className="my-2 text-lg font-medium lg:text-xl">
                Design & Prototype
              </h3>
              <p className="text-sm lg:text-base">
                I utilize Figma to craft my designs and incorporate
                functionality to simulate user interaction with the product.
              </p>
            </div>

            {/* focus-3 */}
            <div className="w-full">
              {/* frontend image */}
              <div className="relative w-full bg-slate-300">
                <Image
                  src="/frontend.webp"
                  alt="frontend image"
                  priority={true}
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  sizes="100vw , (max-width: 896px) 70vw, (max-width: 1200px) 33vw"
                  quality={100}
                />
              </div>
              <h3 className="my-2 text-lg font-medium lg:text-xl">
                Frontend Development
              </h3>
              <p className="text-sm lg:text-base">
                I find great satisfaction in transforming designs into
                functional products by constructing a rudimentary version and
                deploying it on the web. This approach allows for thorough
                testing of all functionalities, ensuring a seamless user
                experience.
              </p>
            </div>
          </div>
        </section>

        <HR />

        {/* Tools */}

        <section>
          <h2 className="mb-4 text-xl font-semibold lg:text-2xl">My Tools</h2>
          <p className="mb-6 text-sm xl:text-base">
            I rely on these tools for everything, from conducting thorough
            research and analysis to designing and frontend development.
          </p>

          <div className="grid grid-cols-2 justify-between gap-6 lg:grid-cols-4">
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

        <HR />
      </div>
    </div>
  );
};

export default AboutPage;
