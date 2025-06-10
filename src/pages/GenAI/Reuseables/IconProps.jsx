const IconProps = ({ img, icon, text, className = '' }) => {
  return (
    <div
      className={`bg-white/20 text-[#CFFAFE] rounded-3xl border flex justify-evenly items-center gap-2 px-4 ${className}`}
    >
      {img && <img src={img} alt="icon" className=" h-4 w-4" />}
      {icon && <span className="text-lg">{icon}</span>}
      
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default IconProps;
