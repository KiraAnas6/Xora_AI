import { Element, Link } from "react-scroll";
import Button from "../components/Btn";
const Hero = () => {

  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container ">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption uppercase small-2 p3">Video Editing</div>
            <h1 className="h1 text-p4 mb-6 max-lg:h2">Amazingly simple</h1>
            <p className="body-1 max-w-440 mb-14 max-md:mb-10">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and suprisingly powerful.
            </p>
            <Link to="features"></Link>
          </div>
          <Link to="features" spy smooth>
            <Button icon="/images/zap.svg">Try it now!</Button>
          </Link>
          <div className="absolute -top-32 
          left-[calc(50%-340px)] w-[1230px]
          hero-img_res pointer-events-none">
            <img src="/images/hero.png" alt="hero" 
            className="size-1230 max-lg:h-auto"/>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
