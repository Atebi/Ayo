"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const showModal = submitted ? "visible" : "hidden";

  const handleSubmit = async (form, e) => {
    // return false;
    // e.preventDefault();
    // e.preventDefault();
    // if (name || email || message === "") {
    //   console.log("Fill in the field");
    //   // e.preventDefault;
    //   return;
    // }
    // console.log("clicked on submit");
    // e.preventDefault();
    console.log("Sending...");

    let data = {
      name,
      email,
      message,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      console.log("Response succeeded!");
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait 5 second
      setSubmitted(false);
      // router.refresh();
    }
  };

  return (
    <>
      <div
        className={`${showModal} fixed left-1/2 top-0 z-50 min-w-[240px] -translate-x-1/2 bg-neutral-800/90 px-6 py-3 text-center text-sm text-white lg:min-w-[320px] lg:text-base`}
      >
        <p>Email sent successfully!</p>
      </div>

      <form action={handleSubmit}>
        <div className="mb-5">
          <label
            className="mb-1 block text-base text-neutral-500"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full appearance-none rounded border border-neutral-400/60 bg-transparent px-3 py-4 leading-tight text-neutral-700/90 placeholder:text-neutral-400/90 focus:border-neutral-500 focus:outline-none"
            value={name}
            placeholder="Your name"
            autoComplete="on"
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <label
            className="mb-1 block text-base text-neutral-500"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full appearance-none rounded border border-neutral-400/60 bg-transparent px-3 py-4 leading-tight text-neutral-700/90 placeholder:text-neutral-400/90 focus:border-neutral-500 focus:outline-none"
            value={email}
            placeholder="Your email"
            autoComplete="on"
            id="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="mb-1 block text-base text-neutral-500"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full appearance-none rounded border border-neutral-400/60 bg-transparent px-3 py-3 leading-tight text-neutral-700/90 placeholder:text-neutral-400/90 focus:border-neutral-500 focus:outline-none"
            value={message}
            placeholder="Write your message here..."
            id="message"
            type="text"
            // cols={4}
            rows={4}
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="relative">
          <div className="w-fit border-2 border-neutral-950 px-3 py-2 text-base text-opacity-0">
            Send email
          </div>
          <button
            className="absolute left-1 top-1 z-30 cursor-default border-2 border-neutral-950 bg-neutral-950 px-3 py-2 text-base text-neutral-50 active:left-0 active:top-0"
            type="submit"
            // onClick={handleSubmit}
          >
            Send email
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
