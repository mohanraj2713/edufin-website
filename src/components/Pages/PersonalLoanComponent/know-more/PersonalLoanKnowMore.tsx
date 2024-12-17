
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import StepsToApply from "@/components/StepsToApply/StepsToApply";
import {
  CalendarGreenIcon,
  PersonalLoanHeroDoodle,
  RocketGreenIcon,
  TrustGreenIcon,
  VoucherGreenIcon,
} from "@/config/assets";
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
                  <h1 className={`${KnowMoreStyles["heading"]} my-3`}>
                    Personal Loan
                  </h1>
                  <h2 className="fs-sm-16 text-success my-3">
                    Fast, Convenient Personal Loans Tailored for You
                  </h2>
                </div>

                <img
                  src={PersonalLoanHeroDoodle}
                  alt="personal-loan-hero-doodle"
                  className={KnowMoreStyles["doodle-mobile"]}
                />
              </div>

              <p className="fs-24 fs-sm-16 fw-light my-3">
                When life calls for quick access to funds, Edufin is here to
                provide seamless solutions. Our personal loan offerings are
                designed for quick disbursal, flexible terms, and minimal
                paperwork, helping you achieve financial freedom without the
                wait. In partnership with leading Banks and NBFCs like Fibe,
                InCred, HDFC, ICICI, and IndusInd, we bring you customized loan
                solutions to meet a variety of needs—be it an emergency,
                lifestyle upgrade, or planned expense.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src={PersonalLoanHeroDoodle}
                alt="personal-loan-hero-doodle"
                className={KnowMoreStyles["doodle-desktop"]}
              />
            </div>
          </div>
        </div>

        <FeatureSection
          sectionBgColor="#F3FFFC"
          sectionShadow="0px 4px 4px 0px #C5C3FB4F"
          title="Why Choose EduFin for Personal Loan?"
          titleColor="#33A484"
          features={[
            {
              icon: RocketGreenIcon,
              title: "Quick Approvals and Fast Disbursals",
              details:
                "Need cash urgently? Our quick approval process ensures you get funds without delays. Our streamlined application process, powered by our network of leading financial institutions, minimizes paperwork, delivering a smooth and swift experience.",
              titleColor: "#33A484",
              borderColor: "#33A484",
            },
            {
              icon: CalendarGreenIcon,
              title: "Flexible Terms & Loan Amounts ",
              details:
                "Our personal loans offer flexible repayment terms that cater to your specific needs. Choose repayment tenures that work for you, with loan amounts tailored to suit your unique financial requirements.",
              titleColor: "#33A484",
              borderColor: "#33A484",
            },
            {
              icon: TrustGreenIcon,
              title: "Trusted Partnerships",
              details:
                "Edufin collaborates with top financial entities such as Fibe, InCred, HDFC, ICICI, and IndusInd to bring you trustworthy loan options that provide security, speed, and transparent terms. With Edufin, you gain the benefit of a secure, transparent, and reliable lending process. ",
              titleColor: "#33A484",
              borderColor: "#33A484",
            },
            {
              icon: VoucherGreenIcon,
              title: "Vouchers worth upto 10K",
              details:
                "Reducing wait times for applications and requests. This efficiency enhances productivity.",
              titleColor: "#33A484",
              borderColor: "#33A484",
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
                title: "Upload Documents",
                description: "Upload  required documents",
              },
              {
                number: 3,
                title: "Submit",
                description: "Quick application form",
              },
              {
                number: 4,
                title: "Complete KYC",
                description: "Confirm identity",
              },
              {
                number: 5,
                title: "Disbursement",
                description: "Amount transferred",
              },
            ]}
          />
        </div>

        <div className="d-flex gap-4 my-5 justify-content-center">
          <button
            className="btn btn-primary btn-sm d-md-none d-block px-4"
            onClick={() => {
              window.open("https://www.eduf.in/pl-signin");
            }}
          >
            Apply Now
          </button>

          <button
            className="btn btn-primary btn-lg d-none d-md-block"
            onClick={() => {
              window.open("https://www.eduf.in/pl-signin");
            }}
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default KnowMore;
