'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "../../BackButton/BackButton";
import { Presentation } from "../../../config/assets";
import InteractiveFlatPanelsStyles from "./InteractiveFlatPanels.module.css";
import { CONTACT_US } from "../../../config/routenames";

const InteractiveFlatPanels = () => {
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
      <div className={InteractiveFlatPanelsStyles["component-wrapper"]}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="container mt-5 pt-5">
            <div className="text-center">
              <h2 className="text-primary fs-sm-20 fw-bold mb-4">
                Interactive Flat Panels
              </h2>
            </div>

            <div
              className={`container p-5 rounded-4
                ${InteractiveFlatPanelsStyles["card"]}
            `}
            >
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <Image
                  src={Presentation}
                  alt="presentation-animation"
                  className={InteractiveFlatPanelsStyles["doodle"]}
                />
                <div>
                  <h3 className="text-success fw-bold fs-sm-20">
                    Transform Classrooms with Interactive Flat Panels
                  </h3>

                  <p className="fs-26 fs-sm-20">
                    Smart panels for smarter classrooms—let’s make learning fun!
                  </p>
                </div>
              </div>

              <p className="fs-18 fs-sm-16 fw-light mt-4">
                Edufin Edge brings cutting-edge technology to your classrooms
                with Interactive Flat Panels (IFP). These state-of-the-art,
                touch-screen panels make learning interactive, engaging and
                effective. Perfect for modern educational environments, IFPs
                enable seamless teaching and learning experiences, all while
                being easy to install and maintain. With flexible financing
                options, upgrading your institution’s tech has never been
                easier.
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

export default InteractiveFlatPanels;
