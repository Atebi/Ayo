import Image from "next/image";
import HR from "../../HR";
import Button from "../../Button";
import Link from "next/link";

const Solution = () => {
  return (
    <div className="leading-normal">
      <h2 className="text-center text-4xl font-bold lg:text-6xl">Solution</h2>
      <HR />

      {/* approach */}
      <div className="my-28 max-w-xl">
        <h3 className="mb-6 text-2xl font-medium lg:text-4xl">Approach</h3>
        <p>
          In crafting the UI interface for this project, I studied and drew
          inspiration from popular social platforms, particularly dating
          platforms renowned for fostering quick and effective connections among
          individuals. This comprehensive examination informed the design
          choices to create an interface that facilitates seasmless human
          interaction and engagement.
        </p>
      </div>

      <div>
        <i className="highlight mb-4 block text-center text-sm">
          moodboard created in Figma
        </i>
        {/* moodboard Image */}
        <div className="relative mx-auto mb-10 block w-full max-w-4xl bg-slate-300 shadow-lg">
          <Image
            src="/deci_moodboard.webp"
            alt="Decibell moodboard"
            // placeholder="blur"
            priority={true}
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
      <div className="my-28 max-w-xl">
        <h3 className="mb-6 text-2xl font-medium lg:text-4xl">UI Design</h3>
        <p>
          I developed a responsive design tailored to various screen sizes using
          Figma. I incorporated a gradient featuring three vibrant
          colours-yellow, red and purple-flowing diagonally from left to right
          predominantly on buttons. Additionally, I opted for a white background
          on the landing page to evoke a sense of freshness and modernity, and
          for the blog page, a slightly off-white tone was selected to enhance
          readability.
        </p>
      </div>

      <div>
        <i className="highlight mb-4 block text-center text-sm">
          Style guide created in Figma
        </i>
        {/* style guide img for ui design */}
        <div className="relative mx-auto mb-10 block w-full max-w-4xl bg-neutral-200/50 p-5 shadow-2xl md:p-10">
          <Image
            src="/deci_style.webp"
            alt="Decibell style guide image"
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

      {/* hero */}
      <div className="mx-auto mt-40">
        <div className="mx-auto mb-12 max-w-md text-center">
          <p className="mb-2 text-lg font-medium">Hero section</p>
          <p className="text-base">
            A hero section designed to{" "}
            <span className="highlight">evoke a musical ambiance</span>,
            featuring an artist in the background, accompanied by a concise
            statement highlighting the application's purpose and a button
            enabling swift account creation.
          </p>
        </div>
        {/* img */}
        <div className="relative mx-auto mb-10 block w-full max-w-6xl bg-neutral-200/50 p-5 shadow-2xl md:p-10">
          <Image
            src="/deci_hero.webp"
            alt="Decibell hero image"
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

      {/* musicians */}
      <div className="mx-auto mt-40">
        <div className="mx-auto mb-12 max-w-md text-center">
          <p className="mb-2 text-lg font-medium">Musicians!</p>
          <p className="text-base">
            This section showcases the platform's three primary protagonists,{" "}
            <span className="highlight">
              the producer, singer and songwriter
            </span>
            , elucidating the benefit offered by the platform.
          </p>
        </div>
        {/* img */}
        <div className="relative mx-auto mb-10 block w-full max-w-6xl bg-neutral-200/50 p-5 shadow-2xl md:p-10">
          <Image
            src="/deci_musicians.webp"
            alt="Decibell musicians image"
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

      {/* feature */}
      <div className="mx-auto mt-40">
        <div className="mx-auto mb-12 max-w-md text-center">
          <p className="mb-2 text-lg font-medium">Feature</p>
          <p className="highlight text-base">
            A feature section to highlight common "chat app" functionalities.
          </p>
        </div>
        {/* img */}
        <div className="relative mx-auto mb-10 block w-full max-w-4xl bg-neutral-200/50 p-5 shadow-2xl md:p-10">
          <Image
            src="/deci_feature.webp"
            alt="Decibell feature image"
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

      {/* works */}
      <div className="mx-auto mt-40">
        <div className="mx-auto mb-12 max-w-md text-center">
          <p className="mb-2 text-lg font-medium">How it works</p>
          <p className="text-base">
            This section briefly breaks down how a user starts using the
            platform into <span className="highlight">4 easy steps</span>.
          </p>
        </div>
        {/* img */}
        <div className="relative mx-auto mb-10 block w-full max-w-4xl bg-neutral-200/50 p-5 shadow-2xl md:p-10">
          <Image
            src="/deci_works.webp"
            alt="Decibell how it works image"
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

      {/* testimonial */}
      <div className="mx-auto mt-40">
        <div className="mx-auto mb-12 max-w-md text-center">
          <p className="mb-2 text-lg font-medium">
            Testimonial and CTA(call-to-action) button
          </p>
          <p className="text-base">
            A testimonials section designed to present varied{" "}
            <span className="highlight">endorsements of Decibell</span> from
            diverse groups, including testimonials{" "}
            <span className="highlight">from music industry professionals</span>
            , both men and women, as well as artists.
          </p>
        </div>
        {/* img */}
        <div className="relative mx-auto mb-10 block w-full max-w-6xl bg-neutral-200/50 p-5 shadow-2xl md:p-10">
          <Image
            src="/deci_testimonial.webp"
            alt="Decibell testimonial image"
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

      {/* blog */}
      <div className="mx-auto mt-40">
        <div className="mx-auto mb-12 max-w-md text-center">
          <p className="mb-2 text-lg font-medium">Blog home page</p>
        </div>
        {/* img */}
        <div className="relative mx-auto mb-10 block w-full max-w-4xl bg-neutral-200/50 p-5 shadow-2xl md:p-10">
          <Image
            src="/deci_blog.webp"
            alt="Decibell blog home image"
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

      {/* article */}
      <div className="mx-auto mt-40">
        <div className="mx-auto mb-12 max-w-md text-center">
          <p className="mb-2 text-lg font-medium">Blog article page</p>
        </div>
        {/* img */}
        <div className="relative mx-auto mb-10 block w-full max-w-4xl bg-neutral-200/50 p-5 shadow-2xl md:p-10">
          <Image
            src="/deci_article.webp"
            alt="Decibell article image"
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

      {/* go to figma prototype */}
      <Link href="#" className="mx-auto mt-16 block w-fit">
        <Button text="PROTOTYPE" />
      </Link>

      {/**End of ui design category section**/}

      {/* Frontend Development */}
      <div className="my-28 max-w-xl">
        <h3 className="mb-6 text-2xl font-medium lg:text-4xl">
          Frontend Development
        </h3>
        <p>
          Following the completion of the designs, I proceeded to craft a{" "}
          <span className="highlight">responsive front-end website</span>{" "}
          utilizing Next.js and Tailwind CSS. I used Next.js because of its
          server-side rendering (SSR) capabilities, yielding not only{" "}
          <span className="highlight">faster loading times</span> but also
          notably{" "}
          <span className="highlight">
            advantageous for search engine optimization (SEO) purposes
          </span>
          . Employing React and Tailwind CSS, I created and styled a{" "}
          <span className="highlight">
            gradient button component that found widespread integration across
            the entire website
          </span>
          .<br /> The comprehensive front-end development phase encompassed
          three weeks in its entirety.
        </p>
      </div>

      {/* code img */}
      <div className="mb-28">
        <i className="highlight mb-4 block text-center text-sm">
          Code file with Nextjs(13) structure
        </i>
        {/* code img for decibell */}
        <div className="relative mx-auto mb-10 block w-full max-w-6xl bg-neutral-200/50 p-5 shadow-2xl md:p-10">
          <Image
            src="/deci_code.webp"
            alt="Decibell VScode image"
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
        <Link href="#" className="mx-auto mt-16 block w-fit">
          <Button text="VISIT SITE" />
        </Link>
      </div>
    </div>
  );
};

export default Solution;
