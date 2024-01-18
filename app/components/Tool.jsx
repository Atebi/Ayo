import Image from "next/image";

const Tool = ({ imageUrl, alt, label }) => {
  return (
    <div>
      <div className="grid w-full place-items-center border border-neutral-950/25 px-4 py-4">
        <Image
          src={imageUrl}
          alt={alt}
          width={48}
          height={48}
          // style={{ width: "100%", height: "auto" }}
          // sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
        />
      </div>
      <h4 className="mt-0.5 text-xs font-bold">{label}</h4>
    </div>
  );
};

export default Tool;
