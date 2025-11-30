import { useState } from "react";
import { Element } from "react-scroll";
import { plans } from "../constants/data";
import CountUp from "react-countup";
import Button from "../components/Btn";
const Pricing = () => {
  const [monthPrice, setMonthPrice] = useState(true);
  return (
    <section>
      <Element name="pricing">
        <div className="container overflow-hidden">
          <div
            className="max-w-960 pricing-head_before relative mx-auto border-l border-r 
          border-2 border-s2 bg-s1/50 pb-40 pt-28 max-lg:border-none"
          >
            <h3 className="h3 max-lg:h4 max-md:h5 mx-auto mb-10 text-center text-p4">
              Flexible pricing for teams of all sizes
            </h3>
            <div
              className="relative z-4 mx-auto flex w-[375px] p-2 rounded-3xl border-[3px] 
            border-s4/25 bg-s1/50 backdrop-blur-[8px]"
            >
              <button
                className={`pricing-head_btn ${monthPrice && "text-p4"}`}
                onClick={() => setMonthPrice(true)}
              >
                Monthly
              </button>
              <button
                className={`pricing-head_btn ${!monthPrice && "text-p4"}`}
                onClick={() => setMonthPrice(false)}
              >
                Yearly
              </button>
              <div
                className={`g4 rounded-14 before:h-100 pricing-head_btn_before  
              absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] 
              overflow-hidden shadow-400 transition-tranform duration-200 
              ${!monthPrice && "translate-x-full"}`}
              />
            </div>
            <div className="pricing-bg ">
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
                className="abosolute mixed-blend-soft-light opacity-5 inset-0"
              />
            </div>
          </div>
          {/* pricing plans */}
          <div className="scroll-hide relative z-2 -mt-12 flex items-center max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="pricing-plan_first 
                pricing-plan_last pricing-plan_odd 
                pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
              >
                {index === 1 && (
                  <div className="g4 absolute h-330 left-0 right-0 top-0 rounded-tl-3xl rounded-tr-3xl"></div>
                )}
                <div
                  className={`absolute left-0 right-0 z-2 flex items-center justify-center ${
                    index === 1 ? "-top-6" : "-top-6 xl:xl-top-11"
                  }`}
                >
                  <img
                    src={plan.logo}
                    className={`object-contain drop-shadow-2xl ${
                      index === 1 ? "size-[120px]" : "size-[88px]"
                    }`}
                    alt={plan.title}
                  />
                </div>
                <div
                  className={`relative flex flex-col items-center ${
                    index === 1 ? "pt-24" : "pt-12"
                  }`}
                >
                  <div
                    className={`small-2 rounded-20 relative z-2 mb-6 border-2 px-4 py-1.5 uppercase
                        ${
                          index === 1
                            ? "border-p3 text-p3"
                            : "border-p1 text-p1"
                        }`}
                  >
                    {plan.title}
                  </div>
                  <div className="relative z-2 flex items-center justify-center">
                    <div
                      className={`h-num flex items-start ${
                        index === 1 ? "text-p3" : "text-p1"
                      }`}
                    >
                      ${" "}
                      <CountUp
                        start={plan.priceMonthly}
                        end={monthPrice ? plan.priceMonthly : plan.priceYearly}
                        useEasing={false}
                        preserveValue
                        duration={0.3}
                      />
                    </div>
                    <div className="small-1 relative top-3 ml-1 uppercase">
                      / mo
                    </div>
                  </div>
                </div>
                <div
                  className={`body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4
                    ${index === 1 ? "border-b" : ""}`}
                >
                  {plan.caption}
                </div>
                <ul className="mx-auto space-y-4 xl:px-7">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative flex items-center gap-5"
                    >
                      <img
                        src={"/images/check.png"}
                        alt="check"
                        className="size-10 object-contain"
                      />
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex w-full justify-center">
                  <Button icon={plan.icon}>Get Started</Button>
                </div>
                {index === 1 && (
                  <p
                    className="small-compact mt-9 
                  text-center text-p3 "
                  >
                    - Limited time -
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
