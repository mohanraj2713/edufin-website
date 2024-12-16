import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Institutes,
  Parents,
  WhyChooseEdufinHero,
} from "../../../../config/assets";
import { getStringInUserLanguage } from "../../../../content/lang";
import WhyChooseUsStyles from "./WhyChooseUs.module.css";
import {
  INSTITUTE_PRODUCTS,
  STUDENT_PRODUCTS,
} from "../../../../config/routenames";


const WhyChooseUs = () => {
  const router = useRouter();

  const handleStudentClick = () => {
    router.push(STUDENT_PRODUCTS);
  };

  const handleInstituteClick = () => {
    router.push(INSTITUTE_PRODUCTS);
  };

  return (
    <>
      <div className={WhyChooseUsStyles["component-wrapper"]}>
        <div className="container py-md-0 text-center">
          <div className="d-flex align-items-center justify-content-center">
            <Image
              src={WhyChooseEdufinHero}
              alt="why-choose-edufin-hero"
              className={WhyChooseUsStyles["doodle-image"]}
            />
            <div>
              <h2 className="fs-sm-20 fw-bold text-primary">
                {getStringInUserLanguage("WHY_CHOOSE_US_HEADING")}
              </h2>
              <p className="fs-18 fs-sm-16 my-md-4">
                {getStringInUserLanguage("WHY_CHOOSE_US_SUBHEADING")}
              </p>
            </div>
          </div>
        </div>

        <div className="container pt-md-5">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-md-6">
              <div
                className={`container p-4 rounded-4
                ${WhyChooseUsStyles["card"]}
                ${WhyChooseUsStyles["parents"]}
                `}
                role="button"
                onClick={handleStudentClick}
              >
                <div
                  className={`d-flex gap-3 align-items-center
                  ${WhyChooseUsStyles["content"]}
                  `}
                >
                  <h3 className="fs-sm-18 fw-bold text-white p-3">
                    {getStringInUserLanguage("WHY_CHOOSE_US_PARENTS")}
                  </h3>
                  <Image src={Parents} alt="parents" className="mt-5" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div
                className={`container p-0 rounded-4
                ${WhyChooseUsStyles["card"]}
                ${WhyChooseUsStyles["institutes"]}
                `}
                role="button"
                onClick={handleInstituteClick}
              >
                <div
                  className={`d-flex gap-3
                  ${WhyChooseUsStyles["content"]}
                  `}
                >
                  <h3 className="fs-sm-18 fw-bold text-white p-5">
                    {getStringInUserLanguage("WHY_CHOOSE_US_INSTITUTES")}
                  </h3>
                  <Image
                    src={Institutes}
                    alt="institutes"
                    className="mt-5 pt-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
