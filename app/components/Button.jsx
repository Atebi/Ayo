import { GoArrowUpRight } from "react-icons/go";

const Button = ({ mode = "secondary", text }) => {
  return mode === "primary" ? (
    <div className="relative inline-block w-fit pr-2 tracking-normal">
      <div className="borderGradient border-2 px-3 py-2 text-base text-opacity-0">
        {text}
      </div>
      <button
        className="borderGradient absolute left-1 top-1 z-30 border-2 bg-primary-gradient px-3 py-2 text-base text-white hover:shadow-2xl active:left-0 active:top-0"
        type="submit"
      >
        {text}
      </button>
    </div>
  ) : mode === "secondary" ? (
    <button className="borderGradient inline-flex items-center gap-1 border px-3 py-2 text-base hover:opacity-50 active:opacity-100">
      <span className="bg-primary-gradient bg-clip-text text-transparent">
        {text}
      </span>
      <GoArrowUpRight className="fill-indigo-500" />
    </button>
  ) : (
    <button className="borderGradient inline-flex items-center gap-1 border px-3 py-2 text-base tracking-wider hover:opacity-50 active:opacity-100">
      <span className="bg-primary-gradient bg-clip-text text-transparent">
        {text}
      </span>
      {/* <GoArrowUpRight className="fill-indigo-500" /> */}
    </button>
  );
};

export default Button;
{
  /* <button className="inline-flex items-center gap-1 border border-black/50 px-3 py-2 text-base hover:opacity-50 active:opacity-100">
      {text}
      <GoArrowUpRight className="fill-black" />
    </button> */
}
