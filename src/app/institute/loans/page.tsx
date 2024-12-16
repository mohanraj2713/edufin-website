'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "../../../components/BackButton/BackButton";
import { Goals } from "../../../config/assets";
import LoansStyles from "./Loans.module.css";
import { CONTACT_US } from "../../../config/routenames";

const Loans = () => {
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
      <div className={LoansStyles["component-wrapper"]}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="container mt-5 pt-5">
            <div className="text-center">
              <h2 className="text-primary fs-sm-20 fw-bold mb-4">Loans</h2>
            </div>

            <div
              className={`container p-5 rounded-4
                ${LoansStyles["card"]}
            `}
            >
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <Image
                  src={Goals}
                  alt="goals-animation"
                  className={LoansStyles["doodle"]}
                />
                <div>
                  <h3 className="text-success fw-bold fs-sm-20">
                    Tailored Loan Solutions for Your Institution’s Growth
                  </h3>

                  <p className="fs-26 fs-sm-20">
                    Growth on your mind? We’ve got the funding you need to make
                    it happen!
                  </p>
                </div>
              </div>

              <p className="fs-18 fs-sm-16 fw-light mt-4">
                In addition to fee financing, Edufin Edge offers institutions a
                variety of loan products to support their growth and
                development. Whether it’s upgrading infrastructure, expanding
                campuses or introducing new technology, our customized loans
                support institutions achieve their goals. With flexible terms
                and quick approvals, we make sure your vision becomes a reality.
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

export default Loans;
