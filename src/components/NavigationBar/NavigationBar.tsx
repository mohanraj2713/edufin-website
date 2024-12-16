import Link from "next/link";
import Image from "next/image";
import { CallNowIconLight, EdufinLogo } from "../../config/assets";
import NavigationBarStyles from "./NavigationBar.module.css";
import {
  ABOUT,
  BASE,
  CONTACT_US,
  INSTITUTE_ERP_SOLUTIONS,
  INSTITUTE_INSURANCE,
  INSTITUTE_INTERACTIVE_FLAT_PANELS,
  INSTITUTE_LOANS,
  STUDENT_FEE_FINANCE,
  STUDENT_HIGHER_EDUCATION_ABROAD,
  STUDENT_HIGHER_EDUCATION_DOMESTIC,
  STUDENT_MEDIBUDDY,
  STUDENT_PERSONAL_LOAN,
} from "../../config/routenames";
import { getStringInUserLanguage } from "../../content/lang";
import { useEffect } from "react";
import { Dropdown } from "bootstrap";

const NavigationBar = () => {
  useEffect(() => {
    // Initialize dropdowns manually
    const dropdowns = document.querySelectorAll(".dropdown-toggle");
    dropdowns.forEach((dropdown) => {
      new Dropdown(dropdown);
    });

    const subMenuLinks = document.querySelectorAll(
      ".dropdown-menu .dropdown-item"
    );
    subMenuLinks.forEach((link) => {
      link.addEventListener("click", (e) => e.stopPropagation());
    });

    return () => {
      subMenuLinks.forEach((link) => {
        link.removeEventListener("click", (e) => e.stopPropagation());
      });
    };
  }, []);

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-white border-bottom shadow-sm" style={{zIndex:10000}}>
      <div className="container-fluid">
        <div className="mx-5 d-md-block d-none">
          <Link className="navbar-brand" href={BASE}>
            <Image
              src={EdufinLogo}
              alt="edufin-logo"
              className={NavigationBarStyles["edufin-logo"]}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
            aria-controls="navbar-content"
            aria-expanded="false"
            aria-label="toggle-navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="container-fluid p-0 d-md-none d-flex justify-content-between align-items-end">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
            aria-controls="navbar-content"
            aria-expanded="false"
            aria-label="toggle-navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand p-0 m-0" href={BASE}>
            <Image
              src={EdufinLogo}
              alt="edufin-logo"
              className={NavigationBarStyles["edufin-logo"]}
            />
          </Link>
          <div>
            <button
              className="btn btn-success fs-sm-16"
              onClick={() => {
                const phoneNumber = getStringInUserLanguage(
                  "FOOTER_LIST_ITEM_MOBILE"
                );
                window.location.href = `tel:${phoneNumber}`;
              }}
            >
              <Image
                src={CallNowIconLight}
                alt="call-now-icon-light"
                className="img-fluid me-2"
                data-lang-key="CALL_NOW"
              />
              {getStringInUserLanguage("CALL_NOW")}
            </button>
          </div>
        </div>
        <div className="py-2 mx-4">
          <div className="collapse navbar-collapse" id="navbar-content">
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item mx-3">
                <Link
                  className="nav-link fw-bold text-dark"
                  href="/"
                  data-lang-key="HOME"
                >
                  {getStringInUserLanguage("HOME")}
                </Link>
              </li>
              <li className="nav-item dropdown mx-3">
                <Link
                  className="nav-link text-dark fw-bold dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-lang-key="PRODUCTS"
                >
                  {getStringInUserLanguage("PRODUCTS")}
                </Link>
                <ul className="dropdown-menu dropdown-menu-light">
                  <li>
                    <Link
                      className={`dropdown-item
                      ${NavigationBarStyles["dropdown-item"]}
                      `}
                      href={STUDENT_FEE_FINANCE}
                      data-lang-key="FEE_FINANCE"
                    >
                      {getStringInUserLanguage("FEE_FINANCE")}
                    </Link>
                  </li>

                  <li className="dropend">
                    <Link
                      className={`dropdown-item ${NavigationBarStyles["dropdown-item"]} dropdown-toggle`}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-lang-key="HIGHER_EDUCATION_LOANS"
                    >
                      {getStringInUserLanguage("HIGHER_EDUCATION_LOANS")}
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-light">
                      <li>
                        <Link
                          className={`dropdown-item ${NavigationBarStyles["dropdown-item"]}`}
                          href={STUDENT_HIGHER_EDUCATION_DOMESTIC}
                          data-lang-key="HIGHER_EDUCATION_DOMESTIC"
                        >
                          {getStringInUserLanguage("HIGHER_EDUCATION_DOMESTIC")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${NavigationBarStyles["dropdown-item"]}`}
                          href={STUDENT_HIGHER_EDUCATION_ABROAD}
                          data-lang-key="HIGHER_EDUCATION_ABROAD"
                        >
                          {getStringInUserLanguage("HIGHER_EDUCATION_ABROAD")}
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      className={`dropdown-item
                      ${NavigationBarStyles["dropdown-item"]}
                      `}
                      href={STUDENT_PERSONAL_LOAN}
                      data-lang-key="PERSONAL_LOAN"
                    >
                      {getStringInUserLanguage("PERSONAL_LOAN")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item
                      ${NavigationBarStyles["dropdown-item"]}
                      `}
                      href={STUDENT_MEDIBUDDY}
                      data-lang-key="MEDIBUDDY"
                    >
                      {getStringInUserLanguage("MEDIBUDDY")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item
                      ${NavigationBarStyles["dropdown-item"]}
                      `}
                      href={INSTITUTE_LOANS}
                      data-lang-key="EDGE_FEATURE_HEADING_4"
                    >
                      {getStringInUserLanguage("EDGE_FEATURE_HEADING_4")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item
                      ${NavigationBarStyles["dropdown-item"]}
                      `}
                      href={INSTITUTE_INSURANCE}
                      data-lang-key="INSURANCE"
                    >
                      {getStringInUserLanguage("INSURANCE")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item
                        ${NavigationBarStyles["dropdown-item"]}
                        `}
                      href={INSTITUTE_INTERACTIVE_FLAT_PANELS}
                      data-lang-key="INTERACTIVE_FLAT_PANELS"
                    >
                      {getStringInUserLanguage("INTERACTIVE_FLAT_PANELS")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item
                      ${NavigationBarStyles["dropdown-item"]}
                      `}
                      href={INSTITUTE_ERP_SOLUTIONS}
                      data-lang-key="EDGE_FEATURE_HEADING_3"
                    >
                      {getStringInUserLanguage("EDGE_FEATURE_HEADING_3")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link fw-bold text-dark"
                  href={ABOUT}
                  data-lang-key="ABOUT_US"
                >
                  {getStringInUserLanguage("ABOUT_US")}
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link fw-bold text-dark"
                  href={CONTACT_US}
                  data-lang-key="CONTACT_US"
                >
                  {getStringInUserLanguage("CONTACT_US")}
                </Link>
              </li>
            </ul>
            <div className="d-md-block d-none">
              <button
                className="btn btn-success fs-16"
                onClick={() => {
                  const phoneNumber = getStringInUserLanguage(
                    "FOOTER_LIST_ITEM_MOBILE"
                  );
                  window.location.href = `tel:${phoneNumber}`;
                }}
                data-lang-key="CALL_NOW"
              >
                <Image
                  src={CallNowIconLight}
                  alt="call-now-icon-light"
                  className="img-fluid me-2"
                />
                {getStringInUserLanguage("CALL_NOW")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
