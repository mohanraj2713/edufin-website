'use client'
import Image from "next/image";
import FeatureSection from "../../../FeatureSection/FeatureSection";
import StepsToApply from "../../../StepsToApply/StepsToApply";
import {
  CalendarIcon,
  DebitCardIcon,
  PiggyBackIcon,
  ShoppingCartIcon,
  WorkStationDoodle,
} from "../../../../config/assets";
import { getStringInUserLanguage } from "../../../../content/lang";
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
                    data-lang-key="FEE_FINANCE"
                  >
                    {getStringInUserLanguage("FEE_FINANCE")}
                  </h1>
                  <h2
                    className="fs-sm-16 text-success my-3"
                    data-lang-key="FEE_FINANCE_4"
                  >
                    {getStringInUserLanguage("FEE_FINANCE_4")}
                  </h2>
                </div>

                <Image
                  src={WorkStationDoodle}
                  alt="work-station-doodle"
                  className={KnowMoreStyles["doodle-mobile"]}
                />
              </div>

              <p
                className="fs-24 fs-sm-16 fw-light my-3"
                data-lang-key="FEE_FINANCE_5"
              >
                {getStringInUserLanguage("FEE_FINANCE_5")}
              </p>
            </div>
            <div className="col-md-4">
              <Image
                src={WorkStationDoodle}
                alt="work-station-doodle"
                className={KnowMoreStyles["doodle-desktop"]}
              />
            </div>
          </div>
        </div>

        <FeatureSection
          sectionBgColor="#E3E3FF"
          sectionShadow="0px 4px 4px 0px #C5C3FB4F"
          title={getStringInUserLanguage("FF_7")}
          titleColor="#150EC5"
          features={[
            {
              icon: CalendarIcon,
              title: getStringInUserLanguage("FF_8"),
              details: getStringInUserLanguage("FF_9"),
              titleColor: "#150EC5",
              borderColor: "#150EC5",
            },
            {
              icon: PiggyBackIcon,
              title: getStringInUserLanguage("FF_10"),
              details: getStringInUserLanguage("FF_11"),
              titleColor: "#150EC5",
              borderColor: "#150EC5",
            },
            {
              icon: DebitCardIcon,
              title: getStringInUserLanguage("FF_12"),
              details: getStringInUserLanguage("FF_13"),
              titleColor: "#150EC5",
              borderColor: "#150EC5",
            },
            {
              icon: ShoppingCartIcon,
              title: getStringInUserLanguage("FF_14"),
              details: getStringInUserLanguage("FF_15"),
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
                title: getStringInUserLanguage("LOGIN"),
                description: getStringInUserLanguage("FILL_REQUIRED_DETAILS"),
              },
              {
                number: 2,
                title: getStringInUserLanguage("SUBMIT"),
                description: getStringInUserLanguage("QUICK_APPLICATION_FORM"),
              },
              {
                number: 3,
                title: getStringInUserLanguage("KYC"),
                description: getStringInUserLanguage("CONFIRM_IDENTITY"),
              },
              {
                number: 4,
                title: getStringInUserLanguage("ADVANCE_EMI"),
                description: getStringInUserLanguage("PAY_ADVANCE_EMI"),
              },
              {
                number: 5,
                title: getStringInUserLanguage("DISBURSEMENT"),
                description: getStringInUserLanguage(
                  "PAYMENT_SENT_TO_INSTITUTE"
                ),
              },
            ]}
          />
        </div>

        <div className="d-flex gap-4 my-5 justify-content-center">
          <button
            className="btn btn-primary btn-sm d-md-none d-block px-4"
            onClick={() => {
              window.open("https://www.eduf.in/el-signin");
            }}
            data-lang-key="APPLY_NOW"
          >
            {getStringInUserLanguage("APPLY_NOW")}
          </button>

          <button
            className="btn btn-primary btn-lg d-none d-md-block"
            onClick={() => {
              window.open("https://www.eduf.in/el-signin");
            }}
            data-lang-key="APPLY_NOW"
          >
            {getStringInUserLanguage("APPLY_NOW")}
          </button>
        </div>
      </div>
    </>
  );
};

export default KnowMore;
