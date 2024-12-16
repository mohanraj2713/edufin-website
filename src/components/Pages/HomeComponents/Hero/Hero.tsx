import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  DreamEducationDoodle,
  FeeCollectionAndPaymentDoodle,
  FeePaymentDoodle,
  FlyingGuyDoodle,
  HeadsIcon,
  PersonalAndInstitutionalDoodle,
  RupeeIcon,
  Spinwheel,
  TieUpIcon,
  WelcomeGuyDoodle,
} from "../../../../config/assets";
import HeroStyles from "./Hero.module.css";
import { getStringInUserLanguage } from "../../../../content/lang";
import { useRouter } from "next/navigation";
import {
  INSTITUTE_PARTNER_WITH_US,
  STUDENT_FEE_FINANCE,
  STUDENT_FEE_FINANCE_KNOW_MORE,
  STUDENT_PRODUCTS,
} from "../../../../config/routenames";
import Odometer from "../../../../components/Odometer/Odometer";

const Hero: React.FC = () => {
  const router = useRouter();
  // State to track the current quadrant (1, 2, 3, 4)
  const [currentQuadrant, setCurrentQuadrant] = useState<number>(1);
  const wheelRef = useRef<HTMLImageElement>(null);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  useEffect(() => {
    /**
     * Show the welcome overlay only one time
     * Store the state data in localStorage
     */
    const hasSeenWelcomeOverlay = sessionStorage.getItem("hideWelcome");
    if (!hasSeenWelcomeOverlay) {
      setShowOverlay(true);
      sessionStorage.setItem("hideWelcome", "true");
    }

    // Variable to track the rotation angle (starting at 0 degrees)
    let rotationAngle = 0;

    // Update content and rotate wheel every 5 seconds
    const interval = setInterval(() => {
      // Update content based on quadrant
      setCurrentQuadrant((prevQuadrant) => (prevQuadrant % 4) + 1); // Cycle through quadrants 1-4

      // Update the rotation angle (rotate by 90 degrees every 5 seconds)
      rotationAngle += 90;

      // Apply the rotation to the wheel using the `transform` property
      if (wheelRef.current) {
        wheelRef.current.style.transition = "transform 1s ease"; // Smooth transition for rotation
        wheelRef.current.style.transform = `translate(50%, -50%) rotate(${rotationAngle}deg)`;
      }
    }, 5000); // Update every 5 seconds (one quadrant)

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, []);

  useEffect(() => {
    /**
     * Timer for the welcome guy
     */
    if (showOverlay) {
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showOverlay]);

  return (
    <>
      <div
        className={`${HeroStyles["onload-overlay"]}
        ${showOverlay ? "d-block" : "d-none"}
        `}
      >
        <div className="container text-center">
          <Image
            src={WelcomeGuyDoodle}
            alt="welcome-guy-doodle"
            className={`img-fluid
              ${HeroStyles["welcome-guy-doodle"]}
              `}
          />
        </div>
      </div>
      <div className={HeroStyles["component-wrapper"]}>
        <div className="container">
          <div className="container">
            {!showOverlay && (
              <div className={`${HeroStyles["flying-guy-container"]}`}>
                <Image
                  src={FlyingGuyDoodle}
                  alt="flying-guy"
                  className={HeroStyles["flying-guy"]}
                />
              </div>
            )}

            <Image
              src={Spinwheel}
              alt="spinwheel"
              className={HeroStyles["spinwheel"]}
              ref={wheelRef}
            />
          </div>

          <div
            className={`container pe-md-5
            ${HeroStyles["hero-content"]}
            `}
          >
            <div className="row">
              <div className="col-md-8">
                {currentQuadrant === 3 && (
                  <>
                    <div className="d-flex gap-2 align-items-center">
                      <div
                        className={`
                        ratio ratio-1x1
                        ${HeroStyles["doodle"]}`}
                      >
                        <Image src={FeePaymentDoodle} alt="fee-payment-doodle" />
                      </div>

                      <div
                        className={HeroStyles["hero-content-text-container"]}
                      >
                        <h2 className="fw-bold mt-5">
                          {getStringInUserLanguage(
                            "HERO_CAROUSEL_TITLE_1_PART_1"
                          )}
                          &nbsp;
                          <span
                            className={`fw-bold text-primary
                            ${HeroStyles["hero-content-hightlight"]}
                            `}
                          >
                            {getStringInUserLanguage(
                              "HERO_CAROUSEL_TITLE_1_HIGHLIGHT"
                            )}
                          </span>
                          &nbsp;
                          {getStringInUserLanguage(
                            "HERO_CAROUSEL_TITLE_1_PART_2"
                          )}
                        </h2>

                        <p
                          className={`fs-16
                          ${HeroStyles["description"]}
                          `}
                        >
                          {getStringInUserLanguage(
                            "HERO_CAROUSEL_DESCRIPTION_1"
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex gap-4 mt-md-5 mt-2 justify-content-md-start justify-content-center">
                      <button
                        className="btn btn-primary btn-lg d-none d-md-block"
                        onClick={() => {
                          router.push(STUDENT_FEE_FINANCE);
                        }}
                      >
                        {getStringInUserLanguage(
                          "HERO_CAROUSEL_PRIMARY_CTA_CAPTION_1"
                        )}
                      </button>
                      <button
                        className="btn btn-primary btn-sm d-md-none d-block px-4"
                        onClick={() => {
                          router.push(STUDENT_FEE_FINANCE);
                        }}
                      >
                        {getStringInUserLanguage(
                          "HERO_CAROUSEL_PRIMARY_CTA_CAPTION_1"
                        )}
                      </button>

                      <button
                        className="btn btn-outline-primary btn-lg d-none d-md-block"
                        onClick={() => {
                          router.push(STUDENT_FEE_FINANCE_KNOW_MORE);
                        }}
                      >
                        {getStringInUserLanguage(
                          "HERO_CAROUSEL_SECONDARY_CTA_CAPTION_1"
                        )}
                      </button>
                      <button
                        className="btn btn-outline-primary btn-sm d-md-none d-block px-4"
                        onClick={() => {
                          router.push(STUDENT_FEE_FINANCE_KNOW_MORE);
                        }}
                      >
                        {getStringInUserLanguage(
                          "HERO_CAROUSEL_SECONDARY_CTA_CAPTION_1"
                        )}
                      </button>
                    </div>
                  </>
                )}
                {currentQuadrant === 4 && (
                  <>
                    <div className="d-flex gap-2 align-items-center">
                      <div
                        className={`
                        ratio ratio-1x1
                        ${HeroStyles["doodle"]}`}
                      >
                        <Image
                          src={PersonalAndInstitutionalDoodle}
                          alt="personal-and-institutional-doodle"
                        />
                      </div>

                      <div
                        className={HeroStyles["hero-content-text-container"]}
                      >
                        <h2 className="fw-bold mt-5">
                          {getStringInUserLanguage(
                            "HERO_CAROUSEL_TITLE_2_PART_1"
                          )}
                          &nbsp;
                          <span
                            className={`fw-bold text-primary
                            ${HeroStyles["hero-content-hightlight"]}
                            `}
                          >
                            {getStringInUserLanguage(
                              "HERO_CAROUSEL_TITLE_2_HIGHLIGHT"
                            )}
                          </span>
                          &nbsp;
                          {getStringInUserLanguage(
                            "HERO_CAROUSEL_TITLE_2_PART_2"
                          )}
                        </h2>

                        <p
                          className={`fs-16
                          ${HeroStyles["description"]}
                          `}
                        >
                          {getStringInUserLanguage(
                            "HERO_CAROUSEL_DESCRIPTION_2"
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex gap-4 mt-md-5 mt-2 justify-content-md-start justify-content-center">
                      <button
                        className="btn btn-primary btn-lg d-none d-md-block"
                        onClick={() => {
                          router.push(STUDENT_PRODUCTS);
                        }}
                      >
                        {getStringInUserLanguage(
                          "HERO_CAROUSEL_SECONDARY_CTA_CAPTION_1"
                        )}
                      </button>
                      <button
                        className="btn btn-primary btn-sm d-md-none d-block px-4"
                        onClick={() => {
                          router.push(STUDENT_PRODUCTS);
                        }}
                      >
                        {getStringInUserLanguage(
                          "HERO_CAROUSEL_SECONDARY_CTA_CAPTION_1"
                        )}
                      </button>
                    </div>
                  </>
                )}
                {currentQuadrant === 1 && (
                  <>
                    <div className="d-flex gap-2 align-items-center">
                      <div
                        className={`
                        ratio ratio-1x1
                        ${HeroStyles["doodle"]}`}
                      >
                        <Image
                          src={DreamEducationDoodle}
                          alt="dream-education-doodle"
                        />
                      </div>

                      <div
                        className={HeroStyles["hero-content-text-container"]}
                      >
                        <h2 className="fw-bold mt-5">
                          {getStringInUserLanguage(
                            "HERO_CAROUSEL_TITLE_3_PART_1"
                          )}
                          &nbsp;
                          <span
                            className={`fw-bold text-primary
                            ${HeroStyles["hero-content-hightlight"]}
                            `}
                          >
                            {getStringInUserLanguage(
                              "HERO_CAROUSEL_TITLE_3_HIGHLIGHT"
                            )}
                          </span>
                          &nbsp;
                          {getStringInUserLanguage(
                            "HERO_CAROUSEL_TITLE_3_PART_2"
                          )}
                        </h2>

                        <p
                          className={`fs-16
                          ${HeroStyles["description"]}
                          `}
                        >
                          {getStringInUserLanguage(
                            "HERO_CAROUSEL_DESCRIPTION_3"
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex gap-4 mt-md-5 mt-2 justify-content-md-start justify-content-center">
                      <button
                        className="btn btn-primary btn-lg d-none d-md-block"
                        onClick={() => {
                          router.push(STUDENT_PRODUCTS);
                        }}
                      >
                        {getStringInUserLanguage(
                          "HERO_CAROUSEL_SECONDARY_CTA_CAPTION_1"
                        )}
                      </button>
                      <button
                        className="btn btn-primary btn-sm d-md-none d-block px-4"
                        onClick={() => {
                          router.push(STUDENT_PRODUCTS);
                        }}
                      >
                        {getStringInUserLanguage(
                          "HERO_CAROUSEL_SECONDARY_CTA_CAPTION_1"
                        )}
                      </button>
                    </div>
                  </>
                )}
                {currentQuadrant === 2 && (
                  <>
                    <div className="d-flex gap-2 align-items-center">
                      <div
                        className={`
                        ratio ratio-1x1
                        ${HeroStyles["doodle"]}`}
                      >
                        <Image
                          src={FeeCollectionAndPaymentDoodle}
                          alt="fee-collection-and-payment-doodle"
                        />
                      </div>

                      <div
                        className={HeroStyles["hero-content-text-container"]}
                      >
                        <h2 className="fw-bold mt-5">
                          {getStringInUserLanguage(
                            "HERO_CAROUSEL_TITLE_4_PART_1"
                          )}
                          &nbsp;
                          <span
                            className={`fw-bold text-primary
                            ${HeroStyles["hero-content-hightlight"]}
                            `}
                          >
                            {getStringInUserLanguage(
                              "HERO_CAROUSEL_TITLE_4_HIGHLIGHT"
                            )}
                          </span>
                          &nbsp;
                          {getStringInUserLanguage(
                            "HERO_CAROUSEL_TITLE_4_PART_2"
                          )}
                        </h2>

                        <p
                          className={`fs-16
                          ${HeroStyles["description"]}
                          `}
                        >
                          {getStringInUserLanguage(
                            "HERO_CAROUSEL_DESCRIPTION_4"
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex gap-4 mt-md-5 mt-2 justify-content-md-start justify-content-center">
                      <button
                        className="btn btn-primary btn-lg d-none d-md-block"
                        onClick={() => {
                          router.push(INSTITUTE_PARTNER_WITH_US);
                        }}
                      >
                        {getStringInUserLanguage(
                          "HERO_CAROUSEL_SECONDARY_CTA_CAPTION_1"
                        )}
                      </button>
                      <button
                        className="btn btn-primary btn-sm d-md-none d-block px-4"
                        onClick={() => {
                          router.push(INSTITUTE_PARTNER_WITH_US);
                        }}
                      >
                        {getStringInUserLanguage(
                          "HERO_CAROUSEL_SECONDARY_CTA_CAPTION_1"
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="container-fluid p-0 my-5">
              <div className="row">
                <div className="col-md-9 col-12">
                  <div className="row">
                    <div className="col">
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-start">
                          <div className="me-2">
                            <Image
                              src={HeadsIcon}
                              alt="heads-icon"
                              className={HeroStyles["stats-icon"]}
                            />
                          </div>
                          <div className="text-start">
                            <div className="d-flex flex-column flex-md-row">
                              <Odometer
                                number={Number(
                                  getStringInUserLanguage(
                                    "HERO_CAROUSEL_CUSTOMERS_COUNT"
                                  )
                                )}
                                digits={5}
                              />
                              <span className="fs-24 fs-sm-16 fw-bold ms-md-1">
                                {getStringInUserLanguage(
                                  "HERO_CAROUSEL_AND_COUNTING"
                                )}
                              </span>
                            </div>
                            <p className="fs-sm-16">
                              {getStringInUserLanguage(
                                "HERO_CAROUSEL_HAPPY_CUSTOMERS"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-start">
                          <div className="me-2">
                            <Image
                              src={RupeeIcon}
                              alt="rupee-icon"
                              className={HeroStyles["stats-icon"]}
                            />
                          </div>
                          <div className="text-start">
                            <div className="d-flex flex-column flex-md-row">
                              <Odometer
                                number={Number(
                                  getStringInUserLanguage(
                                    "HERO_CAROUSEL_DISBURSED_AMOUNT_COUNT"
                                  )
                                )}
                                digits={2}
                              />
                              <span className="fs-24 fs-sm-16 fw-bold ms-md-1">
                                Cr&nbsp;
                                {getStringInUserLanguage(
                                  "HERO_CAROUSEL_AND_COUNTING"
                                )}
                              </span>
                            </div>
                            <p className="fs-sm-16">
                              {getStringInUserLanguage(
                                "HERO_CAROUSEL_DISBURSED_AMOUNT"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-start">
                          <div className="me-2">
                            <Image
                              src={TieUpIcon}
                              alt="tie-up-icon"
                              className={HeroStyles["stats-icon"]}
                            />
                          </div>
                          <div className="text-start">
                            <div className="d-flex flex-column flex-md-row">
                              <Odometer
                                number={Number(
                                  getStringInUserLanguage(
                                    "HERO_CAROUSEL_PARTNERS_COUNT"
                                  )
                                )}
                                digits={3}
                              />
                              <span className="fs-24 fs-sm-16 fw-bold ms-md-1">
                                {getStringInUserLanguage(
                                  "HERO_CAROUSEL_AND_GROWING"
                                )}
                              </span>
                            </div>

                            <p className="fs-sm-16">
                              {getStringInUserLanguage(
                                "HERO_CAROUSEL_PARTNER_TIE_UPS"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
