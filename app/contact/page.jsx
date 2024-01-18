import Link from "next/link";
import Image from "next/image";
import Form from "../components/Form";
import HR from "../components/HR";

export const metadata = {
  title: "Contact Ayo",
  description: "Different mediums to reach Ayo",
};

const ContactPage = () => {
  return (
    <div className="flex max-w-[1536px] flex-col items-center justify-between px-6 pt-32 md:flex-row md:items-start md:gap-6 lg:gap-12 lg:px-16 xl:pt-36 2xl:mx-auto">
      <div className="w-full max-w-xs md:fixed md:min-h-screen xl:max-w-xl 2xl:max-w-2xl">
        {/* Hero */}
        <section className="relative grid place-items-center">
          <div className="h-64 w-full bg-slate-200"></div>

          <div className="mt-4 flex gap-4 border border-neutral-950/25 px-4 py-4">
            <Link href="#" className="hover:opacity-70 active:opacity-100">
              <Image src="email.svg" alt="email icon" width={32} height={32} />
            </Link>

            <Link href="#" className="hover:opacity-70 active:opacity-100">
              <Image
                src="linkedin.svg"
                alt="linkedin logo"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </section>
      </div>

      {/*  */}
      <div className="hidden h-full min-w-[320px] md:block xl:min-w-[576px] 2xl:min-w-[672px]"></div>

      {/* */}
      <div className="w-full">
        <hr className="my-16 border-t-[1px] border-neutral-300 md:hidden" />

        {/* Get in touch */}

        <section className="w-full">
          <h1 className="mb-8 text-3xl font-bold lg:text-4xl">Get in touch!</h1>
          <p className="max-w-md text-base lg:text-lg">
            Do you have a product idea? need a designer or a frontend developer
            or both? Drop me an email!
          </p>
          <div>
            {/* Form */}
            <div className="mt-6 w-full">
              <Form />
            </div>

            {/* Other Channels */}
            {/* <div>
              <h3>Other Channels</h3>
            </div> */}
          </div>
        </section>

        <HR />
      </div>
    </div>
  );
};

export default ContactPage;
