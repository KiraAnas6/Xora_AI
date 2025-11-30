import { features, details } from "../constants/data";
import { Element } from "react-scroll";
import Button from "../components/Btn";
const Features = () => {
  return (
    <div>
      <Element name="features">
        <div className="container">
          <div
            className="relative flex flex-wrap border-2 rounded-7xl border-s3
           overflow-hidden feature-after md:g7  max-md:border-none"
          >
            <div className="flex flex-nowrap max-md:flex-col max-md:gap-3">
              {features.map(({ id, icon, caption, title, text, button }) => {
                return (
                  <div
                    key={id}
                    className=" max-md:g7 px-10 pb-10 max-lg:px-5 max-lg:pb-5 max-lg:rounded-3xl overflow-hidden"
                  >
                    <div className="-mt-[0px] -ml-[40px] w-0.5 h-14 bg-s3 relative top-0 left-[95px]" />
                    <div className="relative">
                      <img
                        src={icon}
                        alt={title}
                        className="size-28 object-contain"
                      />
                      <span className="caption">{caption}</span>
                      <h2 className="h2 mb-10">{title}</h2>
                      <p className="body-3 mb-10">{text}</p>
                      <Button icon={button.icon}>{button.title}</Button>
                    </div>
                  </div>
                );
              })}
            </div>
            <ul className="relative uppercase w-full flex items-center max-md:hidden p-10 border-2 border-s3 rounded-7xl bg-s3/20">
              {details.map(({ id, icon, title }) => {
                return (
                  <li key={id} className="flex-1">
                    <div
                      className="size-20 shadow-500 rounded-full 
                  flex items-center justify-center mx-auto border-s3"
                    >
                      <img
                        src={icon}
                        className="size-17/20 object-contain"
                        alt={title}
                      />
                    </div>
                    <h3 className="base-small text-center">{title}</h3>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Features;
