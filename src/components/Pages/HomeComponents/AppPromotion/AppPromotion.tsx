import Image from "next/image";
import { CustomerApp, GooglePlayStore } from "../../../../config/assets";
import { getStringInUserLanguage } from "../../../../content/lang";
import AppPromotionStyles from "./AppPromotion.module.css";

const AppPromotion = () => {
  return (
    <>
      <div className={AppPromotionStyles["component-wrapper"]}>
        <div className="container py-0">
          <div className="row">
            <div className="col-md-6 col-12">
              <h1 className="text-primary fs-sm-20 fw-bold">
                {getStringInUserLanguage("APP_PROMOTION_HEADING")}
              </h1>
              <h2 className="fs-sm-16 text-success fw-bold">
                {getStringInUserLanguage("APP_PROMOTION_SUB_HEADING")}
              </h2>
              <p className="fs-16 text-primary fw-bold">
                {getStringInUserLanguage("APP_PROMOTION_CONTENT")}
              </p>

              <div className="text-center text-md-start">
                <Image
                  src={GooglePlayStore}
                  alt="google-play-store"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <div className="mt-4">
                <Image
                  src={CustomerApp}
                  alt="app-promotion"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppPromotion;
