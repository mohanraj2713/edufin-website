import Image from "next/image";
import {
  AckoLogo,
  AvanseLogo,
  AxisFinanceLogo,
  CareHealthInsuranceLogo,
  FibeLogo,
  FullertonIndiaLogo,
  HDFCLogo,
  ICICIBankLogo,
  IDFCLogo,
  IncredLogo,
  IndusindBankLogo,
  LoanTapLogo,
} from "../../../../config/assets";
import { getStringInUserLanguage } from "../../../../content/lang";
import FinancePartnersStyles from "./FinancePartners.module.css";

const FinancePartners = () => {
  return (
    <>
      <div className={FinancePartnersStyles["component-wrapper"]}>
        <div className="container py-0">
          <h2 className="fw-bold text-primary">
            {getStringInUserLanguage("OUR_INSURANCE_PARTNERS_HEADING")}
          </h2>
          <div className="container position-relative overflow-hidden">
            <div className="container my-5 d-flex gap-5 scrolling-container">
              <Image
                src={AckoLogo}
                alt="acko-logo"
                className="partner-logo-wide"
              />
              <Image
                src={CareHealthInsuranceLogo}
                alt="care-health-insurance-logo"
                className="partner-logo-wide"
              />
              <Image
                src={FibeLogo}
                alt="fibe-logo"
                className="partner-logo-wide"
              />
              <Image
                src={HDFCLogo}
                alt="hdfc-logo"
                className="partner-logo-wide"
              />
              <Image
                src={IDFCLogo}
                alt="idfc-logo"
                className="partner-logo-wide"
              />
              <Image
                src={AvanseLogo}
                alt="avance-logo"
                className="partner-logo-wide"
              />
              <Image
                src={AxisFinanceLogo}
                alt="axis-finance-logo"
                className="partner-logo-wide"
              />
              <Image
                src={FullertonIndiaLogo}
                alt="fullerton-india-logo"
                className="partner-logo-wide"
              />
              <Image
                src={ICICIBankLogo}
                alt="icici-bank-logo"
                className="partner-logo-wide"
              />
              <Image
                src={IncredLogo}
                alt="incred-logo"
                className="partner-logo-wide"
              />
              <Image
                src={LoanTapLogo}
                alt="loantap-logo"
                className="partner-logo-wide"
              />

              <Image
                src={IndusindBankLogo}
                alt="indusind-logo"
                className="partner-logo-wide"
              />

              {/* Duplicate images for seamless scrolling */}
              <Image
                src={AckoLogo}
                alt="acko-logo"
                className="partner-logo-wide"
              />
              <Image
                src={CareHealthInsuranceLogo}
                alt="care-health-insurance-logo"
                className="partner-logo-wide"
              />
              <Image
                src={FibeLogo}
                alt="fibe-logo"
                className="partner-logo-wide"
              />
              <Image
                src={HDFCLogo}
                alt="hdfc-logo"
                className="partner-logo-wide"
              />
              <Image
                src={IDFCLogo}
                alt="idfc-logo"
                className="partner-logo-wide"
              />
              <Image
                src={AvanseLogo}
                alt="avance-logo"
                className="partner-logo-wide"
              />
              <Image
                src={AxisFinanceLogo}
                alt="axis-finance-logo"
                className="partner-logo-wide"
              />
              <Image
                src={FullertonIndiaLogo}
                alt="fullerton-india-logo"
                className="partner-logo-wide"
              />
              <Image
                src={ICICIBankLogo}
                alt="icici-bank-logo"
                className="partner-logo-wide"
              />
              <Image
                src={IncredLogo}
                alt="incred-logo"
                className="partner-logo-wide"
              />
              <Image
                src={LoanTapLogo}
                alt="loantap-logo"
                className="partner-logo-wide"
              />
              <Image
                src={IndusindBankLogo}
                alt="indusind-logo"
                className="partner-logo-wide"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancePartners;
