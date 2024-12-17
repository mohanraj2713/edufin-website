import FaqStyles from "./Faq.module.css";

const Faq = () => {
  return (
    <>
      <div className={`${FaqStyles["component-wrapper"]}`}>
        <div className="section">
          <div className="row justify-content-center">
            <div className="col-md-11">
              <div className="d-md-block d-flex justify-content-center justify-content-md-start">
                <div className="text-md-start text-center">
                  <h1
                    className={`${FaqStyles["heading"]} my-3 text-primary`}
                  >
                    FAQ
                  </h1>
                  <h2
                    className="fs-sm-16 text-success my-3"
                  >
                    Frequently asked questions
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-11">
              <div className="accordion" id="faq-accordian">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="question-1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#answer-1"
                      aria-expanded="false"
                      aria-controls="answer-1"
                    >
                      EduFin's Monthly Fee Payment plan?
                    </button>
                  </h2>
                  <div
                    id="answer-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="question-1"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      If you are a parent/guardian of a student studying in the
                      Institute which we have partnered with, then you can opt
                      for the plan. Register and check if your institution is
                      partnered with us.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="question-2">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#answer-2"
                      aria-expanded="false"
                      aria-controls="answer-2"
                    >
                      Is this a loan offered by EduFin?
                    </button>
                  </h2>
                  <div
                    id="answer-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="question-2"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      No. EduFin partners with leading banks and finance
                      companies and offer you the facility.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="question-3">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#answer-3"
                      aria-expanded="false"
                      aria-controls="answer-3"
                    >
                      What if my Institute is not listed?
                    </button>
                  </h2>
                  <div
                    id="answer-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="question-3"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      Leave us the name and location of the institute. We will
                      initiate a tie up with them.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="question-4">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#answer-4"
                      aria-expanded="false"
                      aria-controls="answer-4"
                    >
                      What profile of applicants does EduFin cater to?
                    </button>
                  </h2>
                  <div
                    id="answer-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="question-4"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      You can be a salaried individual or self employed. We
                      cater to both the segments. Welcome to enjoy EduFin's
                      plan.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="question-5">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#answer-5"
                      aria-expanded="false"
                      aria-controls="answer-5"
                    >
                      Can we decide the instalment tenure?
                    </button>
                  </h2>
                  <div
                    id="answer-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="question-5"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      Yes. EduFin offer flexible payment plan from 3 months to
                      10 months. However, maximum tenure would be restricted as
                      agreed with partnered institute. Register on
                      <br />
                      <a href="https://edufin.in/apply">
                        https://edufin.in/apply
                      </a>
                      &nbsp; and know the details.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="question-6">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#answer-6"
                      aria-expanded="false"
                      aria-controls="answer-6"
                    >
                      Does this cover 100% of the Fees?
                    </button>
                  </h2>
                  <div
                    id="answer-6"
                    className="accordion-collapse collapse"
                    aria-labelledby="question-6"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      EduFin's plan will cover up to 100% of the Tution Fee,
                      School Bus/Van Transportation Fee, Book Fee and Uniform
                      Fee and any fee which is payable to the institution can be
                      included.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="question-7">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#answer-7"
                      aria-expanded="false"
                      aria-controls="answer-7"
                    >
                      How much time does it take to process an application?
                    </button>
                  </h2>
                  <div
                    id="answer-7"
                    className="accordion-collapse collapse"
                    aria-labelledby="question-6"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      EduFin will convey its decision within 24 hours of the
                      application.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="question-8">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#answer-8"
                      aria-expanded="false"
                      aria-controls="answer-8"
                    >
                      How and when will EduFin disburse the loan?
                    </button>
                  </h2>
                  <div
                    id="answer-8"
                    className="accordion-collapse collapse"
                    aria-labelledby="question-8"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      Edufin will remit the fees amount to the education
                      institute directly post disbursal from the finance
                      partner.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="question-9">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#answer-9"
                      aria-expanded="false"
                      aria-controls="answer-9"
                    >
                      What are EduFin rewards?
                    </button>
                  </h2>
                  <div
                    id="answer-9"
                    className="accordion-collapse collapse"
                    aria-labelledby="question-9"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      We are in the process of curating reward programs to suit
                      your Child's interest. You will be the first to know.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="question-10">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#answer-10"
                      aria-expanded="false"
                      aria-controls="answer-10"
                    >
                      How do we pay the monthly instalments?
                    </button>
                  </h2>
                  <div
                    id="answer-10"
                    className="accordion-collapse collapse"
                    aria-labelledby="question-10"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      Your monthly instalment is auto-debited from your bank
                      account. No need to remember due dates or step out to
                      deposit cash/cheque.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="question-11">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#answer-11"
                      aria-expanded="false"
                      aria-controls="answer-11"
                    >
                      Do School Fee loans from EduFin require any collateral or
                      security?
                    </button>
                  </h2>
                  <div
                    id="answer-11"
                    className="accordion-collapse collapse"
                    aria-labelledby="question-11"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      No collateral or security is taken for school fee loan
                      facility. It is a 100% collateral free loan.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="question-12">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#answer-12"
                      aria-expanded="false"
                      aria-controls="answer-12"
                    >
                      Are there any hidden charges?
                    </button>
                  </h2>
                  <div
                    id="answer-12"
                    className="accordion-collapse collapse"
                    aria-labelledby="question-12"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      There are absolutely no hidden charges. Most products have
                      zero additional costs. If there are any additional costs
                      for availing this facility - the same will be communicated
                      before sign-up.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="question-13">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#answer-13"
                      aria-expanded="false"
                      aria-controls="answer-13"
                    >
                      Can I foreclose the School Fee Loan?
                    </button>
                  </h2>
                  <div
                    id="answer-13"
                    className="accordion-collapse collapse"
                    aria-labelledby="question-13"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      Yes. You can foreclose EduFin’s School Fee Loan and there
                      won’t be any Charges for it. You drop a mail at
                      <a href="support@edufin.in">support@edufin.in</a>.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="question-14">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#answer-14"
                      aria-expanded="false"
                      aria-controls="answer-14"
                    >
                      Is my data secure?
                    </button>
                  </h2>
                  <div
                    id="answer-14"
                    className="accordion-collapse collapse"
                    aria-labelledby="question-14"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      Yes. Your personal data is our responsibility and we keep
                      them on a secure cloud server.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
