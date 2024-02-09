import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

// border-b-[1px] border-neutral-300/80

const Navbar = ({ mode = "default" }) => {
  const paddingX = mode === "default" ? "lg:px-24 xl:px-36" : "lg:px-16";
  return (
    <nav
      className={`${paddingX} fixed left-0 top-0 z-50 flex w-full max-w-[1536px] items-center justify-between bg-white/90 px-6 py-4 backdrop-blur-md 2xl:left-1/2 2xl:-translate-x-1/2`}
    >
      <Link href="/home" className="hover:opacity-50 active:opacity-100">
        <div className="flex items-center justify-center gap-1">
          <Image
            src="/ayo/ayo_logo.svg"
            alt="site's logo"
            width={32}
            height={32}
            // style={{ width: "100%", height: "auto" }}
            priority={true}
          />

          {/* <p className="bg-primary-gradient bg-clip-text text-2xl text-transparent lg:text-3xl">
            Ayo.
          </p> */}
        </div>
      </Link>

      <Menu />
    </nav>
  );
};

export default Navbar;
