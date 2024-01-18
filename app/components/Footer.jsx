const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="my-10 w-full py-10 text-center text-sm font-medium text-neutral-500/70">
      © Ayo's portfolio {currentYear}
    </div>
  );
};

export default Footer;
