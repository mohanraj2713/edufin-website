import Image from "next/image";
import {
  Algorithm,
  EdufinEdgeHero,
  EdufinEdgeLogo,
  Goals,
  Medical,
  Presentation,
  Wallet,
} from "../../../../config/assets";
import {
  INSTITUTE_ERP_SOLUTIONS,
  INSTITUTE_INTERACTIVE_FLAT_PANELS,
  INSTITUTE_LOANS,
  STUDENT_MEDIBUDDY,
  STUDENT_PERSONAL_LOAN,
} from "../../../../config/routenames";
import { getStringInUserLanguage } from "../../../../content/lang";
import EdgeCard from "../EdgeCard/EdgeCard";
import EdgeStyles from "./Edge.module.css";

const Edge = () => {
  return (
    <>
      <div className={EdgeStyles["component-wrapper"]}>
        <div className="container-fluid py-0">
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="d-flex justify-content-center">
                <Image
                  src={EdufinEdgeLogo}
                  alt="edufin-edge-logo"
                  className="d-none d-md-block"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="d-flex align-items-center">
                <Image
                  src={EdufinEdgeHero}
                  alt="edufin-edge-hero"
                  className={EdgeStyles["doodle-image"]}
                />
                <div className="container text-md-start text-center">
                  <h2 className="fs-sm-18 fw-bold text-primary">
                    {getStringInUserLanguage("EDGE_HEADING")}
                  </h2>
                  <p className="fs-18 fs-sm-16">
                    {getStringInUserLanguage("EDGE_SUBHEADING")}
                  </p>
                </div>
              </div>

              <div className="d-flex justify-content-center d-md-none d-block">
                <Image
                  src={EdufinEdgeLogo}
                  alt="edufin-edge-logo"
                  className={EdgeStyles["edge-logo"]}
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-center align-items-center">
            <div
              className={`col-md-2 col-6
                ${EdgeStyles["card-column"]}
              `}
            >
              <EdgeCard
                title={getStringInUserLanguage("EDGE_FEATURE_HEADING_1")}
                contentPara1={getStringInUserLanguage(
                  "EDGE_FEATURE_CONTENT_1_PARA_1"
                )}
                contentPara2={getStringInUserLanguage(
                  "EDGE_FEATURE_CONTENT_1_PARA_2"
                )}
                ctaLink={STUDENT_PERSONAL_LOAN}
                heroImage={Wallet}
              />
            </div>
            <div
              className={`col-md-2 col-6
                ${EdgeStyles["card-column"]}
              `}
            >
              <EdgeCard
                title={getStringInUserLanguage("EDGE_FEATURE_HEADING_2")}
                contentPara1={getStringInUserLanguage(
                  "EDGE_FEATURE_CONTENT_2_PARA_1"
                )}
                contentPara2={getStringInUserLanguage(
                  "EDGE_FEATURE_CONTENT_2_PARA_2"
                )}
                ctaLink={INSTITUTE_INTERACTIVE_FLAT_PANELS}
                heroImage={Presentation}
              />
            </div>
            <div
              className={`col-md-2 col-6
                ${EdgeStyles["card-column"]}
              `}
            >
              <EdgeCard
                title={getStringInUserLanguage("EDGE_FEATURE_HEADING_3")}
                contentPara1={getStringInUserLanguage(
                  "EDGE_FEATURE_CONTENT_3_PARA_1"
                )}
                contentPara2={getStringInUserLanguage(
                  "EDGE_FEATURE_CONTENT_3_PARA_2"
                )}
                ctaLink={INSTITUTE_ERP_SOLUTIONS}
                heroImage={Algorithm}
              />
            </div>
            <div
              className={`col-md-2 col-6
                ${EdgeStyles["card-column"]}
              `}
            >
              <EdgeCard
                title={getStringInUserLanguage("EDGE_FEATURE_HEADING_4")}
                contentPara1={getStringInUserLanguage(
                  "EDGE_FEATURE_CONTENT_4_PARA_1"
                )}
                contentPara2={getStringInUserLanguage(
                  "EDGE_FEATURE_CONTENT_4_PARA_2"
                )}
                ctaLink={INSTITUTE_LOANS}
                heroImage={Goals}
              />
            </div>
            <div
              className={`col-md-2 col-6
                ${EdgeStyles["card-column"]}
              `}
            >
              <EdgeCard
                title={getStringInUserLanguage("EDGE_FEATURE_HEADING_5")}
                contentPara1={getStringInUserLanguage(
                  "EDGE_FEATURE_CONTENT_5_PARA_1"
                )}
                contentPara2={getStringInUserLanguage(
                  "EDGE_FEATURE_CONTENT_5_PARA_2"
                )}
                ctaLink={STUDENT_MEDIBUDDY}
                heroImage={Medical}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edge;
