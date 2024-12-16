import Image from "next/image";
import {
  AntonyPublicSchoolLogo,
  DelhiPublicSchoolLogo,
  HeguruLogo,
  HolyQueenLogo,
  JemsSchoolLogo,
  MVMLogo,
  NewBrilliantSchoolLogo,
  PndAdarshVidyalayaLogo,
  RvsGroupLogo,
  ShantiSchoolsLogo,
  TruthAlwaysTriumphsLogo,
  VaniVidyalayaLogo,
  VaniVidyalayaSchoolLogo,
} from "../../../../config/assets";
import { getStringInUserLanguage } from "../../../../content/lang";
import EducationPartnersStyles from "./EducationPartners.module.css";

const EducationPartners = () => {
  return (
    <>
      <div className={EducationPartnersStyles["component-wrapper"]}>
        <div className="container py-0">
          <h2 className="fw-bold text-primary">
            {getStringInUserLanguage("OUR_EDUCATION_PARTNERS_HEADING")}
          </h2>
          <div className="container position-relative overflow-hidden">
            <div className="container mt-5 d-flex gap-5 scrolling-container">
              <Image
                src={RvsGroupLogo}
                alt="rvs-group-logo"
                className="partner-logo"
              />
              <Image
                src={AntonyPublicSchoolLogo}
                alt="antony-public-school-logo"
                className="partner-logo"
              />
              <Image
                src={DelhiPublicSchoolLogo}
                alt="delhi-public-school-logo"
                className="partner-logo"
              />
              {/* <Image
                src={I2GlobalLogo}
                alt="i2-global-logo"
                className="partner-logo"
              /> */}
              <Image
                src={NewBrilliantSchoolLogo}
                alt="new-brilliant-school-logo"
                className="partner-logo"
              />
              <Image
                src={ShantiSchoolsLogo}
                alt="shanti-schools-logo"
                className="partner-logo"
              />
              <Image
                src={TruthAlwaysTriumphsLogo}
                alt="truth-always-triumphs-logo"
                className="partner-logo"
              />
              <Image
                src={VaniVidyalayaLogo}
                alt="vani-vidyalaya-logo"
                className="partner-logo"
              />
              <Image
                src={HeguruLogo}
                alt="heguru-logo"
                className="partner-logo"
              />
              <Image
                src={HolyQueenLogo}
                alt="holy-queen-logo"
                className="partner-logo"
              />
              <Image
                src={JemsSchoolLogo}
                alt="jems-school-logo"
                className="partner-logo"
              />
              <Image src={MVMLogo} alt="mvm-logo" className="partner-logo" />
              <Image
                src={PndAdarshVidyalayaLogo}
                alt="pnd-adarsh-vidyalaya-logo"
                className="partner-logo"
              />
              <Image
                src={VaniVidyalayaSchoolLogo}
                alt="vani-vidyalaya-school-logo"
                className="partner-logo"
              />

              {/* Duplicate images for seamless scrolling */}
              <Image
                src={RvsGroupLogo}
                alt="rvs-group-logo"
                className="partner-logo"
              />
              <Image
                src={AntonyPublicSchoolLogo}
                alt="antony-public-school-logo"
                className="partner-logo"
              />
              <Image
                src={DelhiPublicSchoolLogo}
                alt="delhi-public-school-logo"
                className="partner-logo"
              />
              {/* <Image
                src={I2GlobalLogo}
                alt="i2-global-logo"
                className="partner-logo"
              /> */}
              <Image
                src={NewBrilliantSchoolLogo}
                alt="new-brilliant-school-logo"
                className="partner-logo"
              />
              <Image
                src={ShantiSchoolsLogo}
                alt="shanti-schools-logo"
                className="partner-logo"
              />
              <Image
                src={TruthAlwaysTriumphsLogo}
                alt="truth-always-triumphs-logo"
                className="partner-logo"
              />
              <Image
                src={VaniVidyalayaLogo}
                alt="vani-vidyalaya-logo"
                className="partner-logo"
              />
              <Image
                src={HeguruLogo}
                alt="heguru-logo"
                className="partner-logo"
              />
              <Image
                src={HolyQueenLogo}
                alt="holy-queen-logo"
                className="partner-logo"
              />
              <Image
                src={JemsSchoolLogo}
                alt="jems-school-logo"
                className="partner-logo"
              />
              <Image src={MVMLogo} alt="mvm-logo" className="partner-logo" />
              <Image
                src={PndAdarshVidyalayaLogo}
                alt="pnd-adarsh-vidyalaya-logo"
                className="partner-logo"
              />
              <Image
                src={VaniVidyalayaSchoolLogo}
                alt="vani-vidyalaya-school-logo"
                className="partner-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationPartners;
