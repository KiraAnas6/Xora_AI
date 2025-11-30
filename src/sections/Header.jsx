import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handle = function () {
      setScroll(window.scrollY > 32);
    };
    window.addEventListener("scroll", handle);
    return () => {
      removeEventListener("scroll", handle);
    };
  }, []);
  const NavLink = ({ title }) => {
    return (
      <Link
        to={title}
        offset={-100}
        spy
        smooth
        activeClass="nav-active"
        className="base-bold cursor-pointer uppercase text-p4 transition-colors-500 hover:text-p1 max-lg:h5"
        onClick={() => setShow(false)}
      >
        {title}
      </Link>
    );
  };
  return (
    <header
      className={`fixed top-0 left-0 w-full py-10 z-50 transition-all duration-100 ${
        scroll && "bg-black-100 py-4 backdrop-blur-[8px]"
      }`}
    >
      <div className="container flex items-center h-14 max-lg:px-5">
        <a href="" className="lg:hidden z-2">
          <img src="/images/xora.svg" width={115} height={55} />
        </a>
        {/* The Links */}
        <div
          className={`w-full relative  max-lg:fixed left-0 top-0 max-lg:bg-s2 max-lg:w-full max-lg:opacity-0 cursor-pointer ${
            show ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          }`}
        >
          <div
            className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:fixed max-lg:top-0 max-lg:left-0
         max-lg:min-h-screen sidebar-before max-lg:p-6 max-lg:overflow-hidden max-md:px-4"
          >
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title={"features"} />
                  <div className="dot" />
                  <NavLink title={"pricing"} />
                </li>
                <li className="nav-logo max-lg:hidden">
                  <Link to="hero" spy smooth offset={-250}>
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="icon"
                    />
                  </Link>
                </li>
                <li className="nav-li">
                  <NavLink title={"faq"} />
                  <div className="dot" />
                  <NavLink title={"download"} />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden block absolute rotate-90 top-1/2 left-0 w-[960px] h-[380px] transform-x-[-290px] transform-y-1/2">
              <img
                src="/images/bg-outlines.svg"
                alt="outlines"
                width={960}
                height={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outlines"
                width={960}
                height={380}
                className="abosolute mixed-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
        {/* The Btn */}
        <button
          onClick={() => setShow((show) => !show)}
          className="max-lg:ml-auto z-2 lg:hidden border-2 border-s4/25 size-10 flex items-center justify-center rounded-full w-[40px] aspect-square"
        >
          <img
            src={`/images/${show ? "close" : "magic"}.svg`}
            alt="link icon"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
