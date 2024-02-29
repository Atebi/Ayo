import Image from "next/image";
import Link from "next/link";
import HR from "../../HR";
import Button from "../../Button";

const Solution = () => {
  return (
    <div className="leading-normal tracking-wider">
      <h2
        data-aos="fade-up"
        className="text-center text-4xl font-bold lg:text-6xl"
      >
        Solution
      </h2>
      <HR />

      {/* persona */}
      <div
        data-aos="fade-up"
        className="mb-12 mt-28 max-w-xl lg:mb-16 xl:mb-20"
      >
        <h3 className="mb-6 text-2xl font-medium lg:text-4xl">Persona</h3>
        <p>
          In order to gain a more comprehensive understanding of the project's
          Objectives, I conducted one-on-one interviews with several
          individuals. As a result, I was able to identify four primary persona
          pain points.
        </p>
      </div>

      {/* persona pain points */}
      <div
        data-aos="fade-up"
        className="highlight mb-10 flex flex-col items-start justify-between gap-6 lg:flex-row"
      >
        <h4 className="w-full text-xl font-medium lg:sticky lg:left-0 lg:top-24 lg:text-2xl">
          Persona pain points
        </h4>

        {/* points */}
        <div
          data-aos="fade-up"
          className="grid max-w-3xl grid-cols-1 gap-8 delay-300 md:grid-cols-2"
        >
          {/* pain point 1 */}
          <div>
            <p className="mb-1 font-medium">A book just isn't safe</p>
            <p>
              Many individuals reported that a book lacks encryption and does
              not require a password to open it. As a result, they fear that if
              someone gains access to their book, they will have access to all
              of their credentials.
            </p>
          </div>

          {/* pain point 2 */}
          <div>
            <p className="mb-1 font-medium">Everything gets scattered!</p>
            <p>
              Storing login credentials and app details in a book leads to a
              disorganized and inefficient system. It's difficult to locate
              specific details and maintain confidentiality.
            </p>
          </div>

          {/* pain point 3 */}
          <div>
            <p className="mb-1 font-medium">It's hard to retrieve data</p>
            <p>
              Individuals often encounter challenges when attempting to retrieve
              their login credentials from a book. The process can be arduous
              and time-consuming, requiring users to sift through numerous pages
              before locating the information they need. This can lead to
              frustration and a loss of productivity, as users may become
              distracted or discouraged by the effort required to access their
              accounts.
            </p>
          </div>

          {/* pain point 4 */}
          <div>
            <p className="mb-1 font-medium">I can't remember the app name</p>
            <p>
              Forgetting the name of an app you've used before can be
              frustrating. In such cases, you may have to rely on your memory of
              the app's features and search for similar applications that offer
              the same functionality
            </p>
          </div>
        </div>
      </div>

      {/* user flow */}
      <div data-aos="fade-up" className="mb-16 mt-28 max-w-xl lg:mb-28">
        <h3 className="mb-6 text-2xl font-medium lg:text-4xl">User Flow</h3>
        <p>
          With the project objective in mind, I created an initial sketch of the
          user journey throughout the application. However, upon careful
          consideration of the persona pain points, I was able to identify
          certain redundant steps. By eliminating these steps, I was able to
          come up with a more optimized flow sketch that led to a significantly
          enhanced app user experience.
        </p>
      </div>

      <div>
        <i className="highlight mb-4 block text-center text-sm">
          User flow created in Figma
        </i>
        {/* user flow img */}
        <div
          data-aos="fade-up"
          className="relative mx-auto mb-10 block w-full bg-neutral-200/50 p-5 opacity-60 shadow-2xl"
        >
          <Image
            src="/ayo/appl_flow.webp"
            alt="Appledger user flow image"
            // placeholder="blur"
            // priority={true}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            sizes="100vw , (max-width: 1024px) 896px"
            quality={100}
          />
        </div>
      </div>
      {/****/}

      {/* ui design */}
      <div data-aos="fade-up" className="mb-16 mt-28 max-w-xl lg:mb-28">
        <h3 className="mb-6 text-2xl font-medium lg:text-4xl">UI Design</h3>
        <p>
          After determining the user journey, I proceeded to design the final
          screens for mobile in Figma. I followed Google's material design and
          tailwind guidelines to ensure that the screens were not only visually
          appealing but also user-friendly. The app's features were thoughtfully
          implemented, taking into account the persona's pain points, to provide
          a seamless and intuitive experience for the end-users.
        </p>
      </div>

      {/* images for ui design */}
      <div>
        <i className="highlight mb-4 block text-center text-sm">
          Style guide created in Figma
        </i>
        {/* style guide img for ui design */}
        <div
          data-aos="fade-up"
          className="relative mx-auto mb-10 block w-full bg-neutral-200/50 py-10"
        >
          <Image
            src="/ayo/appl_style.webp"
            alt="Appledger style guide image"
            // placeholder="blur"
            // priority={true}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            sizes="100vw , (max-width: 1024px) 896px"
            quality={100}
          />
        </div>
      </div>
      {/* */}

      {/* features with images */}

      {/* feature-1 */}
      <div
        data-aos="fade-up"
        className="mt-28 flex flex-wrap items-center justify-center gap-8 md:flex-row-reverse lg:mt-40"
      >
        <div className="max-w-md text-center lg:max-w-sm lg:text-left">
          <p className="mb-2 text-lg font-medium">One-time master password</p>
          <p>
            To ensure the security of your data, the application prompts you to
            enter your master password on the login screen every time you exit
            and reopen the app.{" "}
            <span className="highlight">
              This feature helps to prevent unauthorized access
            </span>{" "}
            and ensures that your sensitive information remains protected.
          </p>
        </div>

        {/*  login screen img*/}
        <Image
          src="/ayo/appl_login.webp"
          // fill={true}
          alt="Appledger login screen image"
          // priority={true}
          // style={{ objectFit: "cover", borderRadius: "24px" }}
          // sizes="(max-width: 768px) 320px"
          width={0}
          height={0}
          style={{
            width: "100%",
            maxWidth: "384px",
            height: "auto",
            // borderRadius: "24px",
            // boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
          quality={100}
        />
      </div>

      {/* feature-2 */}
      <div
        data-aos="fade-up"
        className="mt-28 flex flex-wrap items-center justify-center gap-8 lg:mt-40"
      >
        <div className="max-w-md text-center lg:max-w-sm lg:text-left">
          <p className="mb-2 text-lg font-medium">Home screen</p>
          <p>
            Easily view, edit, and delete your entries on this page. The total
            number of entries is displayed at the top, and you can search by
            name, tag, or description.
          </p>
        </div>

        {/*  home screen img*/}
        <Image
          src="/ayo/appl_home.webp"
          // fill={true}
          alt="Appledger home screen image"
          // priority={true}
          // style={{ objectFit: "cover", borderRadius: "24px" }}
          // sizes="(max-width: 768px) 320px"
          width={0}
          height={0}
          style={{
            width: "100%",
            maxWidth: "384px",
            height: "auto",
            // borderRadius: "24px",
            // boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
          quality={100}
        />
      </div>

      {/* feature-3 */}
      <div
        data-aos="fade-up"
        className="mt-28 flex flex-wrap items-center justify-center gap-8 md:flex-row-reverse lg:mt-40"
      >
        <div className="max-w-md text-center lg:max-w-sm lg:text-left">
          <p className="mb-2 text-lg font-medium"> Create new entry screen</p>
          <p>
            Easily add new entries with the default template or remove and add
            fields as you like.
          </p>
        </div>

        {/*  new-entry screen img*/}
        <Image
          src="/ayo/appl_view.webp"
          // fill={true}
          alt="Appledger new-entry screen image"
          // priority={true}
          // style={{ objectFit: "cover", borderRadius: "24px" }}
          // sizes="(max-width: 768px) 320px"
          width={0}
          height={0}
          style={{
            width: "100%",
            maxWidth: "384px",
            height: "auto",
            // borderRadius: "24px",
            // boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
          quality={100}
        />
      </div>

      {/* feature-4 */}
      <div
        data-aos="fade-up"
        className="mt-28 flex flex-wrap items-center justify-center gap-8 lg:mt-40"
      >
        <div className="max-w-md text-center lg:max-w-sm lg:text-left">
          <p className="mb-2 text-lg font-medium"> View entry screen</p>
          <p>
            You can view, edit, and delete application data on this screen.
            Additionally, you may click on any field to copy its data to the
            clipboard.
          </p>
        </div>

        {/*  view screen img*/}
        <Image
          src="/ayo/appl_view.webp"
          // fill={true}
          alt="Appledger view-entry screen image"
          // priority={true}
          // style={{ objectFit: "cover", borderRadius: "24px" }}
          // sizes="(max-width: 768px) 320px"
          width={0}
          height={0}
          style={{
            width: "100%",
            maxWidth: "384px",
            height: "auto",
            // borderRadius: "24px",
            // boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
          quality={100}
        />
      </div>

      {/* feature-5 */}
      <div
        data-aos="fade-up"
        className="mt-28 flex flex-wrap items-center justify-center gap-8 md:flex-row-reverse lg:mt-40"
      >
        <div className="max-w-md text-center lg:max-w-sm">
          <p className="mb-2 text-lg font-medium"> Light and dark themes</p>
          <p>
            Users can choose between light and dark themes based on their
            preferences
          </p>
        </div>

        {/*  twin images for light and dark theme*/}
        <div className="flex w-full flex-wrap justify-center gap-6 lg:gap-0 ">
          {/* light-theme img */}
          <Image
            data-aos="fade-right"
            src="/ayo/appl_home.webp"
            // fill={true}
            alt="Appledger home screen image"
            // priority={true}
            // style={{ objectFit: "cover", borderRadius: "24px" }}
            // sizes="(max-width: 768px) 320px"
            width={0}
            height={0}
            style={{
              width: "100%",
              maxWidth: "384px",
              height: "auto",
              // borderRadius: "24px",
              // boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
            }}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
            quality={100}
          />

          {/* dark-theme img */}
          <Image
            data-aos="fade-left"
            src="/ayo/appl_homeDark.webp"
            // fill={true}
            alt="Appledger home dark screen image"
            // priority={true}
            // style={{ objectFit: "cover", borderRadius: "24px" }}
            // sizes="(max-width: 768px) 320px"
            width={0}
            height={0}
            style={{
              width: "100%",
              maxWidth: "384px",
              height: "auto",
              // borderRadius: "24px",
              // boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
            }}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
            quality={100}
          />
        </div>
      </div>

      {/* go to figma prototype */}

      <Link
        data-aos="fade-up"
        href="https://www.figma.com/proto/E84xZikI87orYzxNaKlw7f/appLedger?type=design&node-id=34-441&t=3sgzyFApyqC663qq-0&scaling=scale-down&starting-point-node-id=384%3A304"
        className="mx-auto mt-16 block w-fit lg:mt-24"
      >
        <Button text="PROTOTYPE" />
      </Link>
      {/**End of ui design category section**/}

      {/* frontend dev */}
      <div data-aos="fade-up" className="mb-16 mt-28 max-w-xl lg:mb-28">
        <h3 className="mb-6 text-2xl font-medium lg:text-4xl">
          Frontend Development
        </h3>
        <p>
          Following the design phase, I developed a responsive front-end
          application using Next.js and Tailwind CSS. I chose Next.js, a React
          framework, as it provided me with the flexibility to create separate
          reusable components for the application. Furthermore, I found Tailwind
          CSS to be an excellent tool for translating designs into front-end
          code with ease. Overall, I am pleased with the outcome of the project
          and the efficiency of the tools used.
        </p>
      </div>

      {/* code image for frontend development */}
      <div className="mb-28">
        <i className="highlight mb-4 block text-center text-sm">
          Code file with Nextjs(13) structure
        </i>
        {/* code img for decibell */}
        <div
          data-aos="fade-up"
          className="relative mx-auto mb-10 block w-full max-w-6xl bg-neutral-200/50 p-5 shadow-2xl md:p-10"
        >
          <Image
            src="/ayo/appl_code.webp"
            alt="Appledger VScode image"
            // placeholder="blur"
            // priority={true}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            sizes="100vw , (max-width: 1024px) 896px"
            quality={100}
          />
        </div>

        {/* go to live site */}
        <div
          data-aos="fade-up"
          className="mx-auto mt-16 flex w-fit flex-wrap gap-6 lg:mt-24"
        >
          <Link href="https://appledger.vercel.app">
            <Button text="VISIT SITE" />
          </Link>
          <Link href="https://github.com/Atebi/appledger.git">
            <Button text="GITHUB" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solution;
