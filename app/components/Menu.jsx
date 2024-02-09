"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";

const Menu = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const [isFocused, setIsFocused] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // I use this useEffect hook to listen for a click outside the menu modal so that I can remove focus from it.
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !menuRef.current?.contains(event.target) &&
        !btnRef.current?.contains(event.target)
      ) {
        // alert("outside clicked");
        setIsFocused(false);

        // console.log("outside clicked");
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuRef]);

  //
  const handleLink = (e) => {
    e.preventDefault();
    const href = e.target.href;
    router.push(href);
    setIsFocused(false);
  };

  //User clicks menu button
  const handleClick = () => {
    if (isFocused) {
      // to close the menu if user clicks on it while its open.
      btnRef.current.blur(); // remove focus
      setIsFocused(false);
    } else {
      btnRef.current.focus();
      setIsFocused(true);
    }
  };

  // to show the modal
  const menuVisibility = isFocused ? "visible" : "hidden";

  return (
    <>
      <button
        ref={btnRef}
        onClick={handleClick}
        // onBlur={() => setIsFocused(false)}
        id="navBtn"
        data-dropdown-toggle="menu-default"
        type="button"
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg  p-2 focus:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-gray-100/50 md:hidden"
        aria-controls="menu-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <HiMenuAlt3 className="h-5 w-5 fill-slate-900" aria-hidden="true" />
      </button>
      <div
        ref={menuRef}
        id="menu-default"
        className={`absolute right-0 top-16 z-10 ${menuVisibility} w-40 bg-white p-5 shadow-xl md:static md:block md:w-auto md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
      >
        <ul
          className="flex flex-col gap-5 rounded-lg md:h-full md:flex-row md:items-center md:justify-center md:gap-7"
          aria-labelledby="navBtn"
        >
          <li>
            <Link
              onClick={handleLink}
              href="/home"
              className={`${
                currentPath === "/home" ? "bg-primary-gradient" : "bg-black"
              } bg-clip-text text-xl text-transparent hover:bg-primary-gradient hover:opacity-50 active:opacity-100`}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLink}
              href="/about"
              className={`${
                currentPath === "/about" ? "bg-primary-gradient" : "bg-black"
              } bg-clip-text text-xl text-transparent hover:bg-primary-gradient hover:opacity-50 active:opacity-100`}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLink}
              href="/contact"
              className={`${
                currentPath === "/contact" ? "bg-primary-gradient" : "bg-black"
              } bg-clip-text text-xl text-transparent hover:bg-primary-gradient hover:opacity-50 active:opacity-100`}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
