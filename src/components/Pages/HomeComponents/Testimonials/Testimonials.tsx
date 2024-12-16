import { useEffect } from "react";
import Image from "next/image";
import {
  AchariyaSchoolLogo,
  MmsSchoolLogo,
  NavkisSchoolLogo,
  TestimonialsAuthor1,
  TestimonialsAuthor2,
  TestimonialsAuthor3,
  TestimonialsHero,
} from "../../../../config/assets";
import { getStringInUserLanguage } from "../../../../content/lang";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import TestimonialsStyles from "./Testimonials.module.css";
import { Carousel } from "bootstrap";

const Testimonials = () => {
  useEffect(() => {
    new Carousel("#testimonial-carousel");
  }, []);

  return (
    <>
      <div className={TestimonialsStyles["component-wrapper"]}>
        <div className="container">
          <div className="container mb-5">
            <div className="d-flex align-items-md-end align-items-start justify-content-center">
              <Image
                src={TestimonialsHero}
                alt="testimonials-hero"
                className={TestimonialsStyles["doodle-image"]}
              />
              <div className="text-md-start text-center">
                <h2 className="fs-sm-20 fw-bold text-primary">
                  {getStringInUserLanguage("TESTIMONIALS_HEADING")}
                </h2>
                <p className="fs-18 fs-sm-16">
                  {getStringInUserLanguage("TESTIMONIALS_SUBHEADING")}
                </p>
              </div>
            </div>
          </div>

          <div className="row d-md-flex d-none">
            <div className="col-md-4 col-12">
              <TestimonialCard
                authorName={getStringInUserLanguage("TESTIMONIALS_1_AUTHOR")}
                authorDesignation={getStringInUserLanguage(
                  "TESTIMONIALS_1_AUTHOR_DESIGNATION"
                )}
                content={getStringInUserLanguage("TESTIMONIALS_1_CONTENT")}
                authorAvatar={TestimonialsAuthor1}
                schoolLogo={MmsSchoolLogo}
              />
            </div>
            <div className="col-md-4 col-12">
              <TestimonialCard
                authorName={getStringInUserLanguage("TESTIMONIALS_2_AUTHOR")}
                authorDesignation={getStringInUserLanguage(
                  "TESTIMONIALS_2_AUTHOR_DESIGNATION"
                )}
                content={getStringInUserLanguage("TESTIMONIALS_2_CONTENT")}
                authorAvatar={TestimonialsAuthor2}
                schoolLogo={AchariyaSchoolLogo}
              />
            </div>
            <div className="col-md-4 col-12">
              <TestimonialCard
                authorName={getStringInUserLanguage("TESTIMONIALS_3_AUTHOR")}
                authorDesignation={getStringInUserLanguage(
                  "TESTIMONIALS_3_AUTHOR_DESIGNATION"
                )}
                content={getStringInUserLanguage("TESTIMONIALS_3_CONTENT")}
                authorAvatar={TestimonialsAuthor3}
                schoolLogo={NavkisSchoolLogo}
              />
            </div>
          </div>

          <div
            className="carousel slide d-md-none d-block"
            data-bs-ride="carousel"
            id="testimonial-carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <TestimonialCard
                  authorName={getStringInUserLanguage("TESTIMONIALS_1_AUTHOR")}
                  authorDesignation={getStringInUserLanguage(
                    "TESTIMONIALS_1_AUTHOR_DESIGNATION"
                  )}
                  content={getStringInUserLanguage("TESTIMONIALS_1_CONTENT")}
                  authorAvatar={TestimonialsAuthor1}
                  schoolLogo={MmsSchoolLogo}
                />
              </div>
              <div className="carousel-item">
                <TestimonialCard
                  authorName={getStringInUserLanguage("TESTIMONIALS_2_AUTHOR")}
                  authorDesignation={getStringInUserLanguage(
                    "TESTIMONIALS_2_AUTHOR_DESIGNATION"
                  )}
                  content={getStringInUserLanguage("TESTIMONIALS_2_CONTENT")}
                  authorAvatar={TestimonialsAuthor2}
                  schoolLogo={AchariyaSchoolLogo}
                />
              </div>
              <div className="carousel-item">
                <TestimonialCard
                  authorName={getStringInUserLanguage("TESTIMONIALS_3_AUTHOR")}
                  authorDesignation={getStringInUserLanguage(
                    "TESTIMONIALS_3_AUTHOR_DESIGNATION"
                  )}
                  content={getStringInUserLanguage("TESTIMONIALS_3_CONTENT")}
                  authorAvatar={TestimonialsAuthor3}
                  schoolLogo={NavkisSchoolLogo}
                />
              </div>
            </div>

            <ol
              className={`carousel-indicators position-relative pt-3
              ${TestimonialsStyles["carousel-indicators"]}
              `}
            >
              <li
                data-bs-target="#testimonial-carousel"
                data-bs-slide-to="0"
                className="active"
              ></li>
              <li
                data-bs-target="#testimonial-carousel"
                data-bs-slide-to="1"
              ></li>
              <li
                data-bs-target="#testimonial-carousel"
                data-bs-slide-to="2"
              ></li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
