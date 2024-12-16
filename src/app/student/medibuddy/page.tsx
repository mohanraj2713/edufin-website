'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "../../../components/BackButton/BackButton";
import { Medical } from "../../../config/assets";
import MedibuddyStyles from "./Medibuddy.module.css";

const Medibuddy = () => {
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
      <div className={MedibuddyStyles["component-wrapper"]}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="container mt-5 pt-5">
            <div className="text-center">
              <h2 className="text-primary fs-sm-20 fw-bold mb-4">Medi Buddy</h2>
            </div>

            <div
              className={`container p-5 rounded-4
                ${MedibuddyStyles["card"]}
            `}
            >
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <Image
                  src={Medical}
                  alt="medibuddy-doodle"
                  className={MedibuddyStyles["doodle"]}
                />
                <div>
                  <h3 className="text-success fw-bold fs-sm-20">
                    Prioritize Your Health with EduFin and Medi Buddy
                  </h3>

                  <p className="fs-26 fs-sm-20">
                    Loan? Check. Health? Check. We’ve got you covered from every
                    angle!
                  </p>
                </div>
              </div>

              <p className="fs-18 fs-sm-16 fw-light mt-4">
                Through our collaboration with Medi Buddy, EduFin Edge provides
                health benefits that complement our financial solutions. From
                virtual doctor consultations to health check-up & Medicines,
                Medi Buddy helps you stay on top of your health while managing
                your finances. With EduFin, you’re not just financially
                covered—you’re covered for health, too!
              </p>

              <div className="d-flex gap-4 mt-5 justify-content-center">
                <button
                  className="btn btn-primary btn-sm d-md-none d-block px-4"
                  onClick={() => {
                    window.open("https://www.eduf.in/signin?medibuddy=2");
                  }}
                >
                  Continue
                </button>

                <button
                  className="btn btn-primary btn-lg d-none d-md-block"
                  onClick={() => {
                    window.open("https://www.eduf.in/signin?medibuddy=2");
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

export default Medibuddy;
