import Image from "next/image";
import {
  CybernetYXLogo,
  MedibuddyLogo,
  NexGuruLogo,
  ThriweLogo,
} from "../../../../config/assets";
import { getStringInUserLanguage } from "../../../../content/lang";
import PartnersStyles from "./Partners.module.css";

const Partners = () => {
  return (
    <>
      <div className={PartnersStyles["component-wrapper"]}>
        <div className="container py-0">
          <h2 className="fw-bold text-primary">
            {getStringInUserLanguage("OTHER_PARTNERS_HEADING")}
          </h2>
          <div className="container my-5 d-flex gap-md-5 gap-4 justify-content-center">
            <Image
              src={CybernetYXLogo}
              alt="cybernetyx-logo"
              className={`partner-logo-wide
                ${PartnersStyles["other-partners-logo"]}
              `}
            />
            <Image
              src={MedibuddyLogo}
              alt="medibuddy-logo"
              className={`partner-logo-wide
                ${PartnersStyles["other-partners-logo"]}
              `}
            />
            <Image
              src={NexGuruLogo}
              alt="nex-guru-logo"
              className={`partner-logo-wide
                ${PartnersStyles["other-partners-logo"]}
              `}
            />
            <Image
              src={ThriweLogo}
              alt="thriwe-logo"
              className={`partner-logo-wide
                ${PartnersStyles["other-partners-logo"]}
              `}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
