import { Element } from "react-scroll";
import { faq } from "../constants/data";
import FaqCard from "../components/Faqcard";
const Faq = function () {
  const half = Math.floor(faq.length / 2);
  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container py-20">
          <div>
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4 z-2 relative">
              Curiosity didn't kill the cat, it gave it answers.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              You've got questions, we've got answers.
            </p>
          </div>
          <div className="faq-line_after w-0.5 h-full absolute left-[50%] top-0 z-1 bg-s2" />
        </div>
        <div className="faw-glow_before relative z-2 border-2 border-s2 bg-s1 max-lg:block">
          <div className="container flex gap-10 max-lg:block">
            <div
              className="rounded-half absolute -top-10 left-[calc(50%-40px)]
            z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1"
            >
              <img src="/images/faq-logo.svg" />
            </div>
            <div className="relative flex-1 pt-24">
              {faq.slice(0, half).map((item, index) => (
                <FaqCard key={item.id} index={index} item={item} />
              ))}
            </div>
            <div className="relative flex-1 lg:pt-24">
              {faq.slice(half).map((item, index) => (
                <FaqCard key={item.id} index={half + index} item={item} />
              ))}
            </div>
            <div className="faq-line_after absolute w-0.5 h-full top-0 left-[50%] bg-s2 max-lg:hidden"/>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Faq;
