import Menu from "./Menu";
import Image from "next/image";

// border-b-[1px] border-neutral-300/80

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full max-w-[1536px] items-center justify-between bg-white/90 px-6 py-4 backdrop-blur-md lg:px-16 2xl:left-1/2 2xl:-translate-x-1/2">
      <a href="/home">
        <div className="flex items-center justify-center gap-1">
          <Image
            src="/ayo/logo.svg"
            alt="site's logo"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            priority={true}
          />

          <p className="text-2xl font-light lg:text-3xl">Ayo.</p>
        </div>
      </a>

      <Menu />
    </nav>
  );
};

export default Navbar;
