import Link from "next/link";
import {
  EdufinFooterLogo,
  EmailIcon,
  FacebookLogoWhite,
  InstagramLogoWhite,
  LinkedlnLogoWhite,
  LocationIcon,
  PhoneIcon,
  Spinwheel,
  ThreadsLogoWhite,
  XLogoWhite,
  YoutubeLogoWhite,
} from "../../config/assets";
import { getStringInUserLanguage } from "../../content/lang";
import FooterStyles from "./FooterStyles.module.css";
import {
  ABOUT,
  CAREERS,
  CONTACT_US,
  FAQ,
  PRIVACY_POLICY,
  TERMS_AND_CONDITIONS,
} from "../../config/routenames";
import Image from "next/image";

const Footer = () => {
  const handleSocialMediaClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className={FooterStyles["component-wrapper"]}>
        <div className="container py-0">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex flex-column align-items-center align-items-md-start">
                <div className="container text-md-start text-center p-0">
                  <Image
                    src={EdufinFooterLogo}
                    alt="edufin-footer-logo"
                    className={FooterStyles["edufin-footer-logo"]}
                  />
                </div>

                <div className="container mt-4"></div>
                <span
                  className={`text-white
                              fw-light
                              fs-sm-16
                              ${FooterStyles["company-caption"]}
                            `}
                >
                  {getStringInUserLanguage("FOOTER_COMPANY_UNIT")}
                  <br />
                  {getStringInUserLanguage("FOOTER_COMPANY_TAGLINE")}
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className={`container position-relative
                  d-none d-md-block
                  ${FooterStyles["spinwheel-container"]}
                `}
              >
                <Image
                  src={Spinwheel}
                  alt="spinwheel"
                  className={FooterStyles["spinwheel"]}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 col-12">
              <div className="container my-md-5 my-3 p-2">
                <div className="row">
                  <div className="col">
                    <span className={FooterStyles["footer-section-heading"]}>
                      {getStringInUserLanguage("FOOTER_LIST_HEADING_COMPANY")}
                    </span>
                    <ul className={FooterStyles["footer-section-list"]}>
                      <li>
                        <a
                          href="https://www.eduf.in/"
                          className="text-white text-decoration-none"
                        >
                          {getStringInUserLanguage("APPLY_NOW")}
                        </a>
                      </li>
                      <li>
                        <Link
                          href={ABOUT}
                          className="text-white text-decoration-none"
                        >
                          {getStringInUserLanguage("FOOTER_LIST_ITEM_ABOUT_US")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={CONTACT_US}
                          className="text-white text-decoration-none"
                        >
                          {getStringInUserLanguage(
                            "FOOTER_LIST_ITEM_CONTACT_US"
                          )}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={CAREERS}
                          className="text-white text-decoration-none"
                        >
                          {getStringInUserLanguage("FOOTER_LIST_ITEM_CAREERS")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <span className={FooterStyles["footer-section-heading"]}>
                      {getStringInUserLanguage("FOOTER_LIST_HEADING_SUPPORT")}
                    </span>
                    <ul className={FooterStyles["footer-section-list"]}>
                      <li>
                        <Link
                          href={"/#news"}
                          className="text-white text-decoration-none"
                        >
                          {getStringInUserLanguage("FOOTER_LIST_ITEM_NEWS")}
                        </Link>
                        {/* <a
                          href="/#news"
                          className="text-white text-decoration-none"
                        >
                          {getStringInUserLanguage("FOOTER_LIST_ITEM_NEWS")}
                        </a> */}
                      </li>
                      <li>
                        <Link
                          href={FAQ}
                          className="text-white text-decoration-none"
                        >
                          {getStringInUserLanguage("FOOTER_LIST_ITEM_FAQ")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={PRIVACY_POLICY}
                          className="text-white text-decoration-none"
                        >
                          {getStringInUserLanguage(
                            "FOOTER_LIST_ITEM_PRIVACY_POLICY"
                          )}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={TERMS_AND_CONDITIONS}
                          className="text-white text-decoration-none"
                        >
                          {getStringInUserLanguage(
                            "FOOTER_LIST_ITEM_TERMS_OF_SERVICE"
                          )}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <span className={FooterStyles["footer-section-heading"]}>
                      {getStringInUserLanguage("FOOTER_LIST_HEADING_REACH_OUT")}
                    </span>
                    <ul className={FooterStyles["footer-section-list"]}>
                      <li>
                        <div className="d-flex align-items-start">
                          <Image
                            src={LocationIcon}
                            alt="location-icon"
                            className={`img-fluid me-2
                              ${FooterStyles["contact-us-icon"]}
                            `}
                          />
                          <p className="fs-18 fs-sm-16 text-white">
                            {getStringInUserLanguage(
                              "FOOTER_LIST_ITEM_ADDRESS"
                            )}
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center">
                          <Image
                            src={EmailIcon}
                            alt="email-icon"
                            className={`img-fluid me-2
                              ${FooterStyles["contact-us-icon"]}
                            `}
                          />
                          <a
                            href={`mailto:${getStringInUserLanguage(
                              "FOOTER_LIST_ITEM_EMAIL"
                            )}`}
                            className="fs-18 fs-sm-16 text-white mb-0 text-decoration-none"
                          >
                            {getStringInUserLanguage("FOOTER_LIST_ITEM_EMAIL")}
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-start">
                          <Image
                            src={PhoneIcon}
                            alt="phone-icon"
                            className={`img-fluid me-2
                              ${FooterStyles["contact-us-icon"]}
                            `}
                          />
                          <a
                            className="fs-18 fs-sm-16 text-white text-decoration-none"
                            href={`tel:${getStringInUserLanguage(
                              "FOOTER_LIST_ITEM_MOBILE"
                            )}`}
                          >
                            {getStringInUserLanguage("FOOTER_LIST_ITEM_MOBILE")}
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12"></div>
          </div>

          <div className="row">
            <div className="col-9">
              <div className="container p-0 d-md-block d-none">
                <span className="fs-18 text-white">
                  {getStringInUserLanguage("FOOTER_CIN")}
                </span>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="container mb-3 text-center">
                <span className={FooterStyles["footer-section-heading"]}>
                  {getStringInUserLanguage("FOOTER_FOLLOW_US")}
                </span>
              </div>

              <div className="d-flex gap-3 justify-content-center">
                <Image
                  src={InstagramLogoWhite}
                  alt="instagram-logo"
                  className={FooterStyles["social-media-icon"]}
                  role="button"
                  onClick={() =>
                    handleSocialMediaClick(
                      "https://www.instagram.com/edufin_fee/"
                    )
                  }
                />
                <Image
                  src={FacebookLogoWhite}
                  alt="facebook-logo"
                  className={FooterStyles["social-media-icon"]}
                  role="button"
                  onClick={() =>
                    handleSocialMediaClick(
                      "https://www.facebook.com/feefinance/"
                    )
                  }
                />
                <Image
                  src={LinkedlnLogoWhite}
                  alt="linkedln-logo"
                  className={FooterStyles["social-media-icon"]}
                  role="button"
                  onClick={() =>
                    handleSocialMediaClick(
                      "https://www.linkedin.com/company/edufinloan/posts/?feedView=all"
                    )
                  }
                />
                <Image
                  src={XLogoWhite}
                  alt="x-logo"
                  className={FooterStyles["social-media-icon"]}
                  role="button"
                  onClick={() =>
                    handleSocialMediaClick("https://x.com/EduFin_feeloan")
                  }
                />
                <Image
                  src={ThreadsLogoWhite}
                  alt="threads-logo"
                  className={FooterStyles["social-media-icon"]}
                  role="button"
                  onClick={() => {
                    handleSocialMediaClick(
                      "https://www.threads.net/@edufin_fee?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                    );
                  }}
                />
                <Image
                  src={YoutubeLogoWhite}
                  alt="youtube-logo"
                  className={FooterStyles["social-media-icon"]}
                  role="button"
                  onClick={() =>
                    handleSocialMediaClick(
                      "https://www.youtube.com/channel/UCFTMUL6efh8vD7Xc04f2Klg"
                    )
                  }
                />
              </div>

              <div className="container p-0 d-md-none d-block mt-2 text-center">
                <span className="fs-16 fw-light text-white">
                  {getStringInUserLanguage("FOOTER_CIN")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`container-fluid text-center p-2
        ${FooterStyles["credits-container"]}
        `}
      >
        <p className="fs-18 fs-sm-16">
          {getStringInUserLanguage("FOOTER_CREDITS")}
        </p>
      </div>
    </>
  );
};

export default Footer;
