import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  CollegeFees,
  FeesHero,
  HigherEducationFees,
  SchoolFees,
  UpskillFees,
} from "../../../../config/assets";
import { getStringInUserLanguage } from "../../../../content/lang";
import FeesStyles from "./Fees.module.css";
import { FeesCarouselItem } from "../../../../types";
import { Carousel } from "bootstrap";
import {
  STUDENT_FEE_FINANCE,
  STUDENT_PRODUCTS,
} from "../../../../config/routenames";

const Fees = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isClient, setIsClient] = useState(false); // State to check if we are on the client side
  const router = useRouter();

  const carouselItems: Array<FeesCarouselItem> = [
    {
      id: 1,
      image: SchoolFees,
      title: getStringInUserLanguage("FEES_CAROUSEL_TITLE_1"),
      subtitle: null,
      redirect: STUDENT_FEE_FINANCE,
    },
    {
      id: 2,
      image: CollegeFees,
      title: getStringInUserLanguage("FEES_CAROUSEL_TITLE_2"),
      subtitle: null,
      redirect: STUDENT_FEE_FINANCE,
    },
    {
      id: 3,
      image: HigherEducationFees,
      title: getStringInUserLanguage("FEES_CAROUSEL_TITLE_3"),
      subtitle: getStringInUserLanguage("FEES_CAROUSEL_SUBTITLE_3"),
      redirect: STUDENT_PRODUCTS,
    },
    {
      id: 4,
      image: UpskillFees,
      title: getStringInUserLanguage("FEES_CAROUSEL_TITLE_4"),
      subtitle: null,
      redirect: STUDENT_FEE_FINANCE,
    },
  ];

  useEffect(() => {
    // Check if the window is defined, which confirms it's running on the client side
    if (typeof window !== "undefined") {
      setIsClient(true);
    }

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [carouselItems.length]);

  useEffect(() => {
    if (isClient) {
      // Now that we're on the client side, initialize the carousel
      new Carousel("#fees-carousel");
    }
  }, [isClient]);

  if (!isClient) {
    return null; // Return nothing during SSR
  }

  return (
    <div className={FeesStyles["component-wrapper"]}>
      <div className="container-fluid p-0">
        <div className="container text-center">
          <div className="d-flex gap-1 gap-md-4 align-items-center justify-content-center">
            <div className="mb-4">
              <Image
                src={FeesHero}
                alt="fees-hero"
                className={FeesStyles["doodle-image"]}
              />
            </div>

            <div>
              <h2 className="fs-sm-20 fw-bold text-primary">
                {getStringInUserLanguage("FEES_HEADING")}
              </h2>
              <p className="fs-18 fs-sm-16 my-md-4">
                {getStringInUserLanguage("FEES_SUBHEADING")}
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5 d-md-block d-none">
          <div className={FeesStyles["animated-carousel-container"]}>
            <div className={FeesStyles["animated-carousel"]}>
              {carouselItems.map((_v, _i) => (
                <div
                  key={_i}
                  className={`${FeesStyles["animated-carousel-item"]} ${
                    _i === currentIndex ? FeesStyles["active"] : ""
                  }`}
                  role="button"
                  onClick={() => router.push(_v.redirect)}
                >
                  <div className="d-flex">
                    <div className={FeesStyles["carousel-item-doodle"]}>
                      <Image src={_v.image} alt={`fees-${_v.id}`} />
                    </div>
                    <div className={FeesStyles["animated-carousel-text"]}>
                      <h4 className="fw-bold">{_i === currentIndex && _v.title}</h4>
                      {_i === currentIndex && _v.subtitle && (
                        <p className="fs-16">{_v.subtitle}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="carousel slide d-md-none d-block"
          data-bs-ride="carousel"
          id="fees-carousel"
        >
          <div className="carousel-inner">
            <div className="mt-4">
              {carouselItems.map((_v, _i) => (
                <div
                  key={_i}
                  className={`carousel-item ${_i === 0 ? "active" : ""}`}
                  role="button"
                  onClick={() => router.push(_v.redirect)}
                >
                  <div className="d-flex gap-3">
                    <div className={FeesStyles["carousel-item-doodle"]}>
                      <Image
                        src={_v.image}
                        alt={`fees-${_v.id}`}
                        className="w-100 h-100"
                      />
                    </div>
                    <div>
                      <h4 className="fw-bold">{_v.title}</h4>
                      <p className="fs-16">{_v.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;
