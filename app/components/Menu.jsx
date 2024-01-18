"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";

const Menu = () => {
  const [isFocused, setIsFocused] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  const router = useRouter();

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
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg  p-2 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200/50 md:hidden"
        aria-controls="menu-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <HiMenuAlt3 className="h-5 w-5 fill-slate-900" aria-hidden="true" />
      </button>
      <div
        ref={menuRef}
        id="menu-default"
        className={`absolute right-0 top-16 z-10 ${menuVisibility} w-40 bg-white p-4 shadow-xl md:static md:block md:w-auto md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
      >
        <ul
          className="flex flex-col gap-3 rounded-lg font-medium md:h-full md:flex-row md:items-center md:justify-center md:gap-6 md:text-sm lg:text-base"
          aria-labelledby="navBtn"
        >
          <li>
            <a
              className="text-xl text-neutral-500 hover:opacity-70 active:opacity-100"
              onClick={handleLink}
              href="/home"
            >
              home
            </a>
          </li>
          <li>
            <a
              className="text-xl text-neutral-500 hover:opacity-70 active:opacity-100"
              href="/about"
            >
              about
            </a>
          </li>
          <li>
            <a
              className="text-xl text-neutral-500 hover:opacity-70 active:opacity-100"
              href="/contact"
            >
              contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
