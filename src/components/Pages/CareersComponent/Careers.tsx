'use client'
import Image from "next/image";
import {
  CareerAnimation,
  CareersHeroDoodle,
  IdAnimation,
  ManagementAnimation,
  MentoringAnimation,
  TeamworkAnimation,
  TelecommunicatingAnimation,
  VirtualAssistantAnimation,
} from "@/config/assets";
import { getStringInUserLanguage } from "@/content/lang";
import CareersStyles from "./Careers.module.css";

const Careers = () => {
  return (
    <>
      <div className={`${CareersStyles["component-wrapper"]}`}>
        <div className={`section ${CareersStyles["hero-section"]}`}>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7 col-11">
              <div className="d-md-block d-flex justify-content-between align-items-center">
                <div>
                  <h1
                    className={`${CareersStyles["heading"]} my-3 text-primary`}
                    data-lang-key="FEE_FINANCE"
                  >
                    Careers
                  </h1>
                  <h2
                    className="fs-sm-16 text-success my-3"
                    data-lang-key="FEE_FINANCE_4"
                  >
                    Being your journey with Edufin
                  </h2>
                </div>

                <Image
                  src={CareersHeroDoodle}
                  alt="careers-hero-doodle"
                  className={CareersStyles["doodle-mobile"]}
                />
              </div>

              <p
                className="fs-24 fs-sm-16 fw-light my-3"
                data-lang-key="FEE_FINANCE_5"
              >
                Driven by honesty, integrity, creative, innovative and
                enterprising spirit that has guided our company since its
                inception.
                <br />
                We are searching for exceptional people to join us. We offer
                staff an excellent, collegial, and supportive working
                environment and competitive pay and benefits packages.
              </p>
            </div>
            <div className="col-md-4">
              <Image
                src={CareersHeroDoodle}
                alt="careers-hero-doodle"
                className={CareersStyles["doodle-desktop"]}
              />
            </div>
          </div>
        </div>

        <div
          className={`section ${CareersStyles["roles-section"]} px-md-5 px-4 mx-md-0 mx-3`}
        >
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div
                className={`container bg-white rounded-4 
                p-3 d-flex justify-content-md-center gap-md-0 gap-5
                justify-content-md-center 
                align-items-center shadow-lg
                mt-0
                ${CareersStyles["role-container"]}
                `}
              >
                <Image
                  src={VirtualAssistantAnimation}
                  alt="virtual-assistant-animation"
                  className="img-fluid"
                />
                <p className="fs-32 fs-sm-16 text-success mb-0">
                  Customer Support Executive
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className={`container bg-white rounded-4
                p-3 d-flex justify-content-md-center gap-md-0 gap-5
                align-items-center shadow-lg
                ${CareersStyles["role-container"]}
                `}
              >
                <Image
                  src={ManagementAnimation}
                  alt="management-animation"
                  className="img-fluid"
                />
                <div className="text-start">
                  <p className="fs-32 fs-sm-16 text-success mb-0">
                    Operation Executive
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className={`container bg-white rounded-4 
                  p-3 d-flex justify-content-md-center gap-md-0 gap-5
                  align-items-center shadow-lg
                  ${CareersStyles["role-container"]}
                  `}
              >
                <Image
                  src={TeamworkAnimation}
                  alt="teamwork-animation"
                  className="img-fluid"
                />
                <p className="fs-32 fs-sm-16 text-success mb-0">
                  Relationship Manager
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-md-4">
            <div className="col-md-4">
              <div
                className={`container bg-white rounded-4 
                p-3 d-flex justify-content-md-center gap-md-0 gap-5
                align-items-center shadow-lg
                ${CareersStyles["role-container"]}
                `}
              >
                <Image
                  src={IdAnimation}
                  alt="id-animation"
                  className="img-fluid"
                />
                <p className="fs-32 fs-sm-16 text-success mb-0">
                  Internships Sales & Marketing.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className={`container bg-white rounded-4
                  p-3 d-flex justify-content-md-center gap-md-0 gap-5
                  align-items-center shadow-lg
                  ${CareersStyles["role-container"]}
                  `}
              >
                <Image
                  src={MentoringAnimation}
                  alt="mentoring-assistant-animation"
                  className="img-fluid"
                />
                <p className="fs-32 fs-sm-16 text-success mb-0">
                  Digital Marketing Specialist
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className={`container bg-white rounded-4
                p-3 d-flex justify-content-md-center gap-md-0 gap-5
                align-items-center shadow-lg
                ${CareersStyles["role-container"]}
                `}
              >
                <Image
                  src={TelecommunicatingAnimation}
                  alt="telecommunicating-animation"
                  className="img-fluid"
                />
                <p className="fs-32 fs-sm-16 text-success mb-0">
                  Regional Sales Head
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div
                className={`container bg-white rounded-4
                p-3 d-flex justify-content-md-center gap-md-0 gap-5
                align-items-center shadow-lg
                ${CareersStyles["role-container"]}
                `}
              >
                <Image
                  src={CareerAnimation}
                  alt="career-animation"
                  className="img-fluid"
                />
                <p className="fs-32 fs-sm-16 text-success mb-0">
                  Business Development Manager
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section container text-center">
          <p className="fs-32 fs-sm-16">
            <strong>Requirement:&nbsp;</strong>For Customer support and
            Operation Executive, must have 2 to 3 years of experience in Core
            Banking Industries.
          </p>

          <p className="fs-32 fs-sm-16">
            <strong>Send Your Resume to&nbsp;:&nbsp;hr@edufin.in</strong>
          </p>
        </div>

        <div className="section pt-0 d-flex gap-4 justify-content-center">
          <button
            className="btn btn-primary btn-sm d-md-none d-block px-4"
            onClick={() => {
              window.open("https://edufin.jobsoid.com/", "_blank");
            }}
            data-lang-key="APPLY_NOW"
          >
            {getStringInUserLanguage("APPLY_NOW")}
          </button>

          <button
            className="btn btn-primary btn-lg d-none d-md-block"
            onClick={() => {
              window.open("https://edufin.jobsoid.com/", "_blank");
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

export default Careers;
