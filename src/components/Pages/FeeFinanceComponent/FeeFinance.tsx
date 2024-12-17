'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BookDoodle } from "../../../config/assets";
import { getStringInUserLanguage } from "../../../content/lang";
import FeeFinanceStyles from "./FeeFinance.module.css";
import { STUDENT_FEE_FINANCE_KNOW_MORE } from "../../../config/routenames";
import BackButton from "../../BackButton/BackButton";

const FeeFinance = () => {
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
      <div className={FeeFinanceStyles["component-wrapper"]}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="container">
            <div className="text-center">
              <h2
                className="text-primary fs-sm-20 fw-bold mb-4"
                data-lang-key="FEE_FINANCE"
              >
                {getStringInUserLanguage("FEE_FINANCE")}
              </h2>
            </div>

            <div
              className={`container p-5 rounded-4
                ${FeeFinanceStyles["card"]}
            `}
            >
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <Image
                  src={BookDoodle}
                  alt="book-doodle"
                  className={FeeFinanceStyles["doodle"]}
                />
                <div>
                  <h3
                    className="text-success fw-bold fs-sm-20"
                    data-lang-key="FEE_FINANCE_1"
                  >
                    {getStringInUserLanguage("FEE_FINANCE_1")}
                  </h3>

                  <p className="fs-26 fs-sm-20" data-lang-key="FEE_FINANCE_2">
                    {getStringInUserLanguage("FEE_FINANCE_2")}
                  </p>
                </div>
              </div>

              <p
                className="fs-18 fs-sm-16 fw-light mt-4"
                data-lang-key="FEE_FINANCE_3"
              >
                {getStringInUserLanguage("FEE_FINANCE_3")}
              </p>

              <div className="d-flex gap-4 mt-5 justify-content-center">
                <button
                  className="btn btn-outline-primary btn-sm d-md-none d-block px-4"
                  onClick={() => {
                    router.push(STUDENT_FEE_FINANCE_KNOW_MORE);
                  }}
                  data-lang-key="KNOW_MORE"
                >
                  {getStringInUserLanguage("KNOW_MORE")}
                </button>
                <button
                  className="btn btn-primary btn-sm d-md-none d-block px-4"
                  onClick={() => {
                    window.open("https://www.eduf.in/el-signin");
                  }}
                  data-lang-key="CONTINUE"
                >
                  {getStringInUserLanguage("CONTINUE")}
                </button>

                <button
                  className="btn btn-outline-primary btn-lg d-none d-md-block"
                  onClick={() => {
                    router.push(STUDENT_FEE_FINANCE_KNOW_MORE);
                  }}
                  data-lang-key="KNOW_MORE"
                >
                  {getStringInUserLanguage("KNOW_MORE")}
                </button>
                <button
                  className="btn btn-primary btn-lg d-none d-md-block"
                  onClick={() => {
                    window.open("https://www.eduf.in/el-signin");
                  }}
                  data-lang-key="CONTINUE"
                >
                  {getStringInUserLanguage("CONTINUE")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeeFinance;
