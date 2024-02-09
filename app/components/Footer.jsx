import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="my-10 w-full py-10 text-center font-medium leading-7 tracking-wider">
      <div className="highlight mx-auto mb-20 max-w-[240px] text-xs md:max-w-md lg:text-sm">
        <p className="mb-2">
          "I do not think that there is any other quality so essential to
          success of any kind as the quality of{" "}
          <span className="bg-primary-gradient bg-clip-text font-black text-transparent">
            perseverance
          </span>
          . It overcomes almost everything, even nature."
        </p>
        <em className="text-sm font-medium md:text-base">
          - John D. Rockefeller
        </em>
      </div>
      <div className="flex items-center justify-center gap-1">
        <Image
          src="/ayo/ayo_logo.svg"
          alt="site's logo"
          width={16}
          height={16}
          style={{ height: "auto" }}
          priority={true}
          className="self-start"
        />
        <p className="highlight self-end text-lg leading-none tracking-wider">
          Ayo's portfolio {currentYear} ©
        </p>
      </div>
    </div>
  );
};

export default Footer;
