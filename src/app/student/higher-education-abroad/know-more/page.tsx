'use client'
import Image from "next/image";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import StepsToApply from "@/components/StepsToApply/StepsToApply";
import {
  CalendarIcon,
  CalendarMarkedIcon,
  GraduatedCapIcon,
  HigherEducationAbroadHeroDoodle,
  RocketIcon,
} from "@/config/assets";
import { getStringInUserLanguage } from "@/content/lang";
import KnowMoreStyles from "./KnowMore.module.css";

const KnowMore = () => {
  return (
    <>
      <div className={`${KnowMoreStyles["component-wrapper"]}`}>
        <div className={`section ${KnowMoreStyles["hero-section"]}`}>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7 col-11">
              <div className="d-md-block d-flex justify-content-between align-items-center">
                <div>
                  <h1
                    className={`${KnowMoreStyles["heading"]} my-3`}
                    data-lang-key="HEA_4"
                  >
                    {getStringInUserLanguage("HEA_4")}
                  </h1>
                  <h2
                    className="fs-sm-16 text-success my-3"
                    data-lang-key="HEA_5"
                  >
                    {getStringInUserLanguage("HEA_5")}
                  </h2>
                </div>

                <Image
                  src={HigherEducationAbroadHeroDoodle}
                  alt="higher-education-abroad-hero-doodle"
                  className={KnowMoreStyles["doodle-mobile"]}
                />
              </div>

              <p className="fs-24 fs-sm-16 fw-light my-3" data-lang-key="HEA_6">
                {getStringInUserLanguage("HEA_6")}
              </p>
            </div>
            <div className="col-md-4">
              <Image
                src={HigherEducationAbroadHeroDoodle}
                alt="higher-education-abroad-hero-doodle"
                className={KnowMoreStyles["doodle-desktop"]}
              />
            </div>
          </div>
        </div>

        <FeatureSection
          sectionBgColor="#E3E3FF"
          sectionShadow="0px 4px 4px 0px #C5C3FB4F"
          title="Why Choose EduFin for Higher Education in Abroad?"
          titleColor="#150EC5"
          features={[
            {
              icon: GraduatedCapIcon,
              title: "Extensive Course Coverage Loans up to ₹2 Crores",
              details:
                "Get upto Rs. 50 Lakhs Education Loan without collateral. High-value loans covering tuition fees, hostel charges, and more, with funding up to ₹2 crores with collateral.",
              titleColor: "#150EC5",
              borderColor: "#150EC5",
            },
            {
              icon: CalendarIcon,
              title: "Moratorium for Masters",
              details:
                "Defer repayments until after studies for postgraduate programs, with flexible options.",
              titleColor: "#150EC5",
              borderColor: "#150EC5",
            },
            {
              icon: CalendarMarkedIcon,
              title: "Flexible EMI Plans",
              details:
                "Choose repayment tenures of up to 15 years, easing the financial burden after graduation.",
              titleColor: "#150EC5",
              borderColor: "#150EC5",
            },
            {
              icon: RocketIcon,
              title: "Simple and Fast Application Process",
              details:
                "Quick online application with fast approval, letting you focus on your studies instead of paperwork.",
              titleColor: "#150EC5",
              borderColor: "#150EC5",
            },
          ]}
        />

        <div className="d-md-block d-none">
          <StepsToApply
            steps={[
              {
                number: 1,
                title: "Login",
                description: "Fill required details",
              },
              {
                number: 2,
                title: "Submit",
                description: "Quick application form",
              },
              { number: 3, title: "KYC", description: "Confirm Identity" },
              {
                number: 4,
                title: "Advance EMI",
                description: "Pay advance EMI",
              },
              {
                number: 5,
                title: "Disbursement",
                description: "Payment sent to Institute",
              },
            ]}
          />
        </div>

        <div className="d-flex gap-4 my-5 justify-content-center">
          <button
            className="btn btn-primary btn-sm d-md-none d-block px-4"
            onClick={() => {}}
            data-lang-key="CHAT_WITH_AGENT"
          >
            {getStringInUserLanguage("CHAT_WITH_AGENT")}
          </button>

          <button
            className="btn btn-primary btn-lg d-none d-md-block"
            onClick={() => {}}
            data-lang-key="CHAT_WITH_AGENT"
          >
            {getStringInUserLanguage("CHAT_WITH_AGENT")}
          </button>
        </div>
      </div>
    </>
  );
};

export default KnowMore;
