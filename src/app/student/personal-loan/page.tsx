
'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Wallet } from "../../../config/assets";
import PersonalLoanStyles from "./PersonalLoan.module.css";
import { STUDENT_PERSONAL_LOAN_KNOW_MORE } from "../../../config/routenames";
import BackButton from "../../../components/BackButton/BackButton";

const PersonalLoan = () => {
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
      <div className={PersonalLoanStyles["component-wrapper"]}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="container mt-5 pt-5">
            <div className="text-center">
              <h2 className="text-primary fs-sm-20 fw-bold mb-4">
                Personal Loan
              </h2>
            </div>

            <div
              className={`container p-5 rounded-4
                ${PersonalLoanStyles["card"]}
            `}
            >
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <Image
                  src={Wallet}
                  alt="personal-loan-doodle"
                  className={PersonalLoanStyles["doodle"]}
                />
                <div>
                  <h3 className="text-success fw-bold fs-sm-20">
                    Tailored for Your Needs
                  </h3>

                  <p className="fs-26 fs-sm-20">
                    Get cash fast—because life moves quickly!
                  </p>
                </div>
              </div>

              <p className="fs-18 fs-sm-16 fw-light mt-4">
                EduFin Edge offers swift, hassle-free personal loans through
                partnerships with top banks and NBFCs, including HDFC, ICICI,
                IDFC, Fibe and IndusInd. Whether it’s for a wedding, holiday,
                home renovation or an unexpected medical expense, we’ve got you
                covered. Enjoy flexible repayment options, competitive rates and
                a fast approval process, ensuring you can access funds right
                when you need them and focus on the moments that matter most.
              </p>

              <div className="d-flex gap-4 mt-5 justify-content-center">
                <button
                  className="btn btn-outline-primary btn-sm d-md-none d-block px-4"
                  onClick={() => {
                    router.push(STUDENT_PERSONAL_LOAN_KNOW_MORE);
                  }}
                >
                  Know More
                </button>
                <button
                  className="btn btn-primary btn-sm d-md-none d-block px-4"
                  onClick={() => {
                    window.open("https://www.eduf.in/pl-signin");
                  }}
                >
                  Continue
                </button>

                <button
                  className="btn btn-outline-primary btn-lg d-none d-md-block"
                  onClick={() => {
                    router.push(STUDENT_PERSONAL_LOAN_KNOW_MORE);
                  }}
                >
                  Know More
                </button>
                <button
                  className="btn btn-primary btn-lg d-none d-md-block"
                  onClick={() => {
                    window.open("https://www.eduf.in/pl-signin");
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

export default PersonalLoan;
