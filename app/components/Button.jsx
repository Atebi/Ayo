import { GoArrowUpRight } from "react-icons/go";

const Button = ({ mode = "secondary", text }) => {
  return mode === "primary" ? (
    <div className="relative">
      <div className="w-fit border-2 border-neutral-950 px-3 py-2 text-base text-opacity-0">
        {text}
      </div>
      <button
        className="absolute left-1 top-1 z-30 cursor-default border-2 border-neutral-950 bg-neutral-950 px-3 py-2 text-base text-neutral-50 active:left-0 active:top-0"
        type="submit"
        // onClick={handleSubmit}
      >
        {text}
      </button>
    </div>
  ) : (
    <button className="inline-flex cursor-default items-center gap-1 border border-neutral-950/50 px-3 py-2 text-base hover:opacity-50 active:opacity-100">
      {text}
      <GoArrowUpRight className="fill-neutral-950" />
    </button>
  );
};

export default Button;
