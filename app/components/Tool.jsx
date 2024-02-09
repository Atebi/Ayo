import Image from "next/image";

const Tool = ({ imageUrl, alt, label }) => {
  return (
    <div>
      <div className="grid w-full cursor-text place-items-center border border-black/20 px-4 py-4 lg:border-black/30">
        <Image
          src={`/ayo/${imageUrl}`}
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
