'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SoloTravellerDoodle } from "../../../config/assets";
import HigherEducationAbroadStyles from "./HigherEducationAbroad.module.css";
import { STUDENT_HIGHER_EDUCATION_ABROAD_KNOW_MORE } from "../../../config/routenames";
import BackButton from "../../../components/BackButton/BackButton";
import { getStringInUserLanguage } from "../../../content/lang";

const HigherEducationAbroad = () => {
  const router = useRouter();

  return (
    <>
      <div className="container my-5">
        <BackButton
          type="light"
          onClick={() => {
            router.push("/");
          }}
        />
      </div>
      <div className={HigherEducationAbroadStyles["component-wrapper"]}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="container mt-5 pt-5">
            <div className="text-center">
              <h2
                className="text-primary fs-sm-20 fw-bold mb-4"
                data-lang-key="HIGHER_EDUCATION_ABROAD"
              >
                {getStringInUserLanguage("HIGHER_EDUCATION_ABROAD")}
              </h2>
            </div>

            <div
              className={`container p-5 rounded-4
                ${HigherEducationAbroadStyles["card"]}
            `}
            >
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <Image
                  src={SoloTravellerDoodle}
                  alt="solo-traveller-doodle"
                  className={HigherEducationAbroadStyles["doodle"]}
                />
                <div>
                  <h3
                    className="text-success fw-bold fs-sm-20"
                    data-lang-key="HEA_1"
                  >
                    {getStringInUserLanguage("HEA_1")}
                  </h3>

                  <p className="fs-26 fs-sm-20" data-lang-key="HEA_2">
                    {getStringInUserLanguage("HEA_2")}
                  </p>
                </div>
              </div>

              <p className="fs-18 fs-sm-16 fw-light mt-4" data-lang-key="HEA_3">
                {getStringInUserLanguage("HEA_3")}
              </p>

              <div className="d-flex gap-4 mt-5 justify-content-center">
                <button
                  className="btn btn-outline-primary btn-sm d-md-none d-block px-4"
                  onClick={() => {
                    router.push(STUDENT_HIGHER_EDUCATION_ABROAD_KNOW_MORE);
                  }}
                  data-lang-key="KNOW_MORE"
                >
                  {getStringInUserLanguage("KNOW_MORE")}
                </button>
                <button
                  className="btn btn-primary btn-sm d-md-none d-block px-4"
                  onClick={() => {}}
                  data-lang-key="CHAT_WITH_AGENT"
                >
                  {getStringInUserLanguage("CHAT_WITH_AGENT")}
                </button>

                <button
                  className="btn btn-outline-primary btn-lg d-none d-md-block"
                  onClick={() => {
                    router.push(STUDENT_HIGHER_EDUCATION_ABROAD_KNOW_MORE);
                  }}
                  data-lang-key="KNOW_MORE"
                >
                  {getStringInUserLanguage("KNOW_MORE")}
                </button>
                <button
                  className="btn btn-primary btn-lg d-none d-md-block"
                  onClick={() => {}}
                  data-lang-key="CHAT_WITH_AGENT"
                >
                  {getStringInUserLanguage("CHAT_WITH_AGENT")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HigherEducationAbroad;
