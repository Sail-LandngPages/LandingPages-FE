const IconProps = ({ img, icon, text, className = '' }) => {
  return (
    <div
      className={`group text-[#CFFAFE] rounded-3xl border flex justify-evenly items-center gap-2 transition-all duration-300 hover:ring-2 hover:ring-offset-2  ${className}`}
    >
      {img && <img src={img} alt="icon" className=" h-4 w-4 transform transition-transform duration-500 group-hover:rotate-y-180" />}
      {icon && <span className="text-lg transform transition-transform duration-500 group-hover:rotate-y-180">{icon}</span>}
      
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default IconProps;
