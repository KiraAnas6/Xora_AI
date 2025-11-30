import { Marker } from "./Marker";
const Button = ({ icon, children, href, onClick, markerFill }) => {
  const InnerText = () => {
    return (
      <>
        <span className="relative flex items-center min-h-[60px] 
        px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
          <span className="absolute left-0">
            <Marker markerFill={markerFill} />
          </span>
          {icon && (
            <img
              src={icon}
              alt="circle"
              className="size-10 object-contain mr-10 z-2"
            />
          )}
          <span className="relative font-poppins 
          base-bold z-2 text-p1 uppercase -ml-[20px]">{children}</span>
        </span>
        <span className="glow-before glow-after" />
      </>
    );
  };
  return href ? (
    <a href={href} className={`relative group shadow-500 g5 rounded-2xl p-0`}>
      <InnerText />
    </a>
  ) : (
    <button
      className={`relative group shadow-500 g5 rounded-2xl p-0`}
      onClick={onClick}
    >
      <InnerText />
    </button>
  );
};

export default Button;
