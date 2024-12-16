/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import { EducationDoodle } from "../../../config/assets";
import HigherEducationDomesticStyles from "./HigherEducationDomestic.module.css";
import { STUDENT_HIGHER_EDUCATION_DOMESTIC_KNOW_MORE } from "../../../config/routenames";
import BackButton from "../../../components/BackButton/BackButton";

const HigherEducationDomestic = () => {
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
      <div className={HigherEducationDomesticStyles["component-wrapper"]}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="container mt-5 pt-5">
            <div className="text-center">
              <h2 className="text-primary fs-sm-20 fw-bold mb-4">
                Higher Education Domestic
              </h2>
            </div>

            <div
              className={`container p-5 rounded-4
                ${HigherEducationDomesticStyles["card"]}
            `}
            >
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <Image
                  src={EducationDoodle}
                  alt="education-doodle"
                  className={HigherEducationDomesticStyles["doodle"]}
                />
                <div>
                  <h3 className="text-success fw-bold fs-sm-20">
                    Pursue Your Dreams with Financial Ease
                  </h3>

                  <p className="fs-26 fs-sm-20">
                    Fund your fees without the drama—loans that work for you!
                  </p>
                </div>
              </div>

              <p className="fs-18 fs-sm-16 fw-light mt-4">
                EduFin’s domestic higher education loans make it easy for
                students to pursue their academic ambitions within India. With
                flexible repayment terms, competitive interest rates and quick
                approvals, our loans are designed to cover all aspects of your
                educational journey. From tuition to accommodation and more, we
                ensure that you can concentrate on building your future without
                financial concerns holding you back.
              </p>

              <div className="d-flex gap-4 mt-5 justify-content-center">
                <button
                  className="btn btn-outline-primary btn-sm d-md-none d-block px-4"
                  onClick={() => {
                    router.push(STUDENT_HIGHER_EDUCATION_DOMESTIC_KNOW_MORE);
                  }}
                >
                  Know More
                </button>
                <button
                  className="btn btn-primary btn-sm d-md-none d-block px-4"
                  onClick={() => {}}
                >
                  Chat with Agent
                </button>

                <button
                  className="btn btn-outline-primary btn-lg d-none d-md-block"
                  onClick={() => {
                    router.push(STUDENT_HIGHER_EDUCATION_DOMESTIC_KNOW_MORE);
                  }}
                >
                  Know More
                </button>
                <button className="btn btn-primary btn-lg d-none d-md-block">
                  Chat with Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HigherEducationDomestic;
