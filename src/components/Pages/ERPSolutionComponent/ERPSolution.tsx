'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "../../BackButton/BackButton";
import { Algorithm } from "../../../config/assets";
import ErpSolutionsStyles from "./ErpSolutions.module.css";
import { CONTACT_US } from "../../../config/routenames";

const ErpSolutions = () => {
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
      <div className={ErpSolutionsStyles["component-wrapper"]}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="container mt-5 pt-5">
            <div className="text-center">
              <h2 className="text-primary fs-sm-20 fw-bold mb-4">
                ERP Solutions
              </h2>
            </div>

            <div
              className={`container p-5 rounded-4
                ${ErpSolutionsStyles["card"]}
            `}
            >
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <Image
                  src={Algorithm}
                  alt="algorithm-doodle"
                  className={ErpSolutionsStyles["doodle"]}
                />
                <div>
                  <h3 className="text-success fw-bold fs-sm-20">
                    Elevate efficiency with digital-driven
                  </h3>

                  <p className="fs-26 fs-sm-20">
                    Your institute’s operations, now on autopilot. Let’s get
                    efficient!
                  </p>
                </div>
              </div>

              <p className="fs-18 fs-sm-16 fw-light mt-4">
                Edufin Edge’s ERP (Enterprise Resource Planning) solutions are
                designed to equip the management of educational institutions in
                handling the complete process from attendance, asset management
                and communication to managing financial and academic records.
                With everything in one place, you can focus on delivering
                exceptional education while leaving the administrative tasks to
                us.
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

export default ErpSolutions;
