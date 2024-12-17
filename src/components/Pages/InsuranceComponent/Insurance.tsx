'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "../../BackButton/BackButton";
import { ProtectionAnimation } from "../../../config/assets";
import InsuranceStyles from "./Insurance.module.css";
import { CONTACT_US } from "../../../config/routenames";

const Insurance = () => {
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
      <div className={InsuranceStyles["component-wrapper"]}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="container mt-5 pt-5">
            <div className="text-center">
              <h2 className="text-primary fs-sm-20 fw-bold mb-4">Insurance</h2>
            </div>

            <div
              className={`container p-5 rounded-4
                ${InsuranceStyles["card"]}
            `}
            >
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <Image
                  src={ProtectionAnimation}
                  alt="protection-animation"
                  className={InsuranceStyles["doodle"]}
                />
                <div>
                  <h3 className="text-success fw-bold fs-sm-20">
                    Comprehensive Insurance Solutions for Educational
                    Institutions
                  </h3>

                  <p className="fs-26 fs-sm-20">
                    Protect your institution from life’s “uh-oh” moments.
                  </p>
                </div>
              </div>

              <p className="fs-18 fs-sm-16 fw-light mt-4">
                Edufin Edge offers insurance packages specifically designed for
                educational institutions. From covering physical assets like
                bus, buildings and equipment to ensuring the safety of students
                and staff, our insurance solutions provide peace of mind for
                institute administrators. With Edufin, your institution can
                focus on providing education while we handle the risks.
              </p>

              <div className="d-flex gap-4 mt-5 justify-content-center">
                <button
                  className="btn btn-primary btn-sm d-md-none d-block px-4"
                  onClick={() => {
                    router.push(CONTACT_US);
                  }}
                >
                  Continue
                </button>

                <button
                  className="btn btn-primary btn-lg d-none d-md-block"
                  onClick={() => {
                    router.push(CONTACT_US);
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insurance;
