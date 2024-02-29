import Link from "next/link";
import Image from "next/image";
import HR from "../components/HR";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />

      {/* container-div */}
      <div className="mt-32 max-w-[1536px] px-6 lg:mt-40 lg:px-24 xl:px-36">
        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 xl:gap-20">
          {/* Image with social links section */}

          <section>
            {/* img */}
            <Image
              src="/ayo/atebi_contact.webp"
              alt="my image"
              priority={true}
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "auto",
              }}
              sizes="100vw , (max-width: 896px) 25vw"
              quality={100}
            />
            {/**/}
            {/* social links */}
            <div
              data-aos="fade-right"
              className="shadow-2xllg:p-5 mx-auto flex w-fit gap-6 bg-white p-3"
            >
              <Link
                href="mailto:ayomideiyela@gmail.com"
                className="hover:opacity-50 active:opacity-100"
              >
                <Image
                  src="/ayo/email.svg"
                  alt="email icon"
                  width={24}
                  height={24}
                />
              </Link>

              <Link
                href="https://www.linkedin.com/in/pixelayo"
                className="hover:opacity-50 active:opacity-100"
                target="_blank"
              >
                <Image
                  src="/ayo/linkedin.svg"
                  alt="linkedin logo"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
            {/**/}
          </section>
          {/****/}

          <hr className="my-16 animate-fade border-t-[1px] border-neutral-300/80 lg:my-24 lg:hidden lg:border-neutral-300/90" />

          {/* Contact Form section */}

          <section className="max-w-xl">
            <h1
              data-aos="fade-up"
              className="mb-6 text-3xl font-bold delay-200 lg:mb-8 lg:text-4xl"
            >
              Get in touch!
            </h1>
            <p
              data-aos="fade-up"
              className="max-w-md text-base delay-500 lg:text-lg"
            >
              Do you have a product idea? need a designer or a frontend
              developer or both? Drop me an email!
            </p>
            <div data-aos="fade-up" className="delay-1000">
              {/* form */}
              <div className="mt-6 w-full">
                <Form />
              </div>
              {/**/}
            </div>
          </section>

          {/****/}
        </div>
      </div>
      <HR />
    </>
  );
};

export default ContactPage;
