import Image from "next/image";
import { KnowMore, OurTeam, TOILogo } from "../../../../config/assets";
import { getStringInUserLanguage } from "../../../../content/lang";
import OurNewsStyles from "./OurNews.module.css";

const OurNews = () => {
  const handleKnowMoreClick = () => {
    window.open(
      "https://timesofindia.indiatimes.com/business/india-business/this-fintech-company-helps-you-pay-your-childrens-school-fees/articleshow/103331910.cms",
      "_blank"
    );
  };

  return (
    <>
      <section id="news">
        <div className={OurNewsStyles["component-wrapper"]}>
          <div className="container text-white">
            <div className="row">
              <div className="col-md-6 col-12">
                <Image
                  src={OurTeam}
                  alt="our-team"
                  className="img-fluid mt-5 pt-3"
                />
              </div>
              <div className="col-md-6 col-12">
                <h2 className="fs-sm-20 my-md-0 my-4 d-md-block d-none">
                  {getStringInUserLanguage("OUR_NEWS_HEADING")}
                  <Image
                    src={TOILogo}
                    alt="toi-logo"
                    className="img-fluid mx-2"
                  />
                  <span className="fs-18 fs-sm-16">
                    -&nbsp;{getStringInUserLanguage("OUR_NEWS_PUBLISHED_DATE")}
                  </span>
                </h2>

                <div className="d-flex flex-column justify-content-center d-md-none d-block text-center">
                  <h2 className="fs-sm-20 my-md-0 mb-2">
                    {getStringInUserLanguage("OUR_NEWS_HEADING")}
                  </h2>
                  <div className="d-flex justify-content-center align-items-center gap-1">
                    <Image
                      src={TOILogo}
                      alt="toi-logo"
                      className={OurNewsStyles["toi-logo"]}
                    />
                    <span className="fs-18 fs-sm-16">
                      -&nbsp;
                      {getStringInUserLanguage("OUR_NEWS_PUBLISHED_DATE")}
                    </span>
                  </div>
                  <div className="d-md-none d-block my-2">
                    <span className="fs-18 fs-sm-16">
                      {getStringInUserLanguage("OUR_NEWS_AUTHOR")}
                    </span>
                  </div>
                </div>

                <p className="fs-sm-16">
                  {getStringInUserLanguage("OUR_NEWS_CONTENT_PARA_1")}
                </p>
                <p className="fs-sm-16 d-md-block d-none">
                  {getStringInUserLanguage("OUR_NEWS_CONTENT_PARA_2")}
                </p>

                <div className="d-flex justify-content-md-between justify-content-center align-items-center my-4">
                  <div className="d-md-block d-none">
                    <span className="fs-18 fs-sm-16">
                      {getStringInUserLanguage("OUR_NEWS_AUTHOR")}
                    </span>
                  </div>
                  <div role="button" onClick={handleKnowMoreClick}>
                    <span className="fs-18 fs-sm-16 me-2 text-decoration-underline">
                      {getStringInUserLanguage("OUR_NEWS_CTA")}
                    </span>
                    <Image
                      src={KnowMore}
                      alt="know-more"
                      className={OurNewsStyles["know-more-icon"]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurNews;
