import {
  AboutEdufinHeroDoodle,
  ArvindKC,
  EdufinEdgeLogoLarge,
  GopalakrishnanKG,
  MouliVenkatesan,
  PrashanthJ,
  PrashanthPK,
  RahulDhoka,
  ThiyagarajanR,
} from "@/config/assets";
import Image from "next/image";
import AboutStyles from "./About.module.css";

const AboutPage = () => {
  return (
    <>
      <div className={AboutStyles["component-wrapper"]}>
        <div className={`section ${AboutStyles["hero-section"]}`}>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <Image
                src={AboutEdufinHeroDoodle}
                alt="about-edufin-hero-doodle"
                className="img-fluid"
              />
            </div>
            <div className="col-md-5">
              <h1 className="fs-sm-20 text-primary fw-bold">About EduFin</h1>
              <p className="fs-32 fs-sm-16 text-success">
                Fees Simplified. Bridging Gaps, Fulfilling Dreams
              </p>

              <p className="fs-16">
                With over 80 years of combined experience in the banking,
                finance and technology sectors, EduFin's promoters possess
                unmatched domain expertise. We leverage cutting-edge technology
                and process-driven approaches to create a resilient financing
                ecosystem that benefits both parents and institutes.
              </p>

              <p className="fs-16">
                At EduFin, we understand the importance of tailored solutions in
                the education financing industry. Our flexible plans offer
                convenience to parents and help them manage the ever-increasing
                cost of education. Whether it's breaking down institute fees
                into manageable instalments or covering expenses for specialized
                courses, EduFin makes education more accessible.
              </p>

              <p className="fs-16">
                We’ve also expanded our offerings to include Higher Education
                Loans for domestic and international studies, enabling students
                to pursue their dreams at home or abroad. With flexible
                repayment options and coverage for tuition, accommodation and
                more, EduFin ensures financial barriers won’t stand in the way
                of academic success.
              </p>

              <p className="fs-16">
                Our strong partnerships with top educational institutions and
                lending partners in India ensure low-risk and high-return
                products for banks and financial institutions, allowing them to
                become integral parts of the success triangle that includes
                parents.
              </p>
            </div>
          </div>
        </div>

        <div className={`section ${AboutStyles["edufin-edge-section"]}`}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-md-start text-center">
                <Image
                  src={EdufinEdgeLogoLarge}
                  alt="edufin-edge-logo-large"
                  className={`d-md-none d-inline-block ${AboutStyles["edufin-edge-logo"]}`}
                />

                <h1 className="fs-sm-20 text-primary fw-bold mt-3">
                  About EduFin Edge
                </h1>
                <p className="fs-32 fs-sm-16 text-success">
                  Beyond Education, Beyond Finance
                </p>
              </div>

              <p className="fs-16">
                Edufin Edge goes beyond education finance to bring you a range
                of products that improve both personal and institutional
                experiences. From personal loans to cover life’s unexpected
                expenses, to insurance packages that offer peace of mind, Edufin
                Edge is designed to provide value across multiple areas of life.
                We also offer tech solutions like Interactive Flat Panels and
                ERP systems, ensuring that institutions can access the tools
                they need to thrive. With Edufin Edge, you get more than just
                financial support—you get smarter solutions for a better
                tomorrow.
              </p>
            </div>
            <div className="col-md-3 d-md-block d-none text-end pe-0">
              <Image
                src={EdufinEdgeLogoLarge}
                alt="edufin-edge-logo-large"
                className={`${AboutStyles["edufin-edge-logo"]}`}
              />
            </div>
          </div>
        </div>

        <div className="section">
          <div className="row justify-content-center">
            <div className="col-md-9 px-md-0">
              <div className="container text-center">
                <h2 className="text-primary fw-bold">Our Team</h2>
                <p className="fs-16 text-success">Founding Team</p>
              </div>
              <div className="container-fluid">
                <div className={`${AboutStyles["team-member-card"]}`}>
                  <div className="container p-md-4 py-4">
                    <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center gap-md-4">
                      <div>
                        <Image src={PrashanthPK} alt="PrashanthPK" />
                      </div>
                      <div className="text-md-start text-center">
                        <h3 className="fs-24 text-primary fw-bold my-3">
                          Prashanth P.K.
                        </h3>
                        <p className="fs-16 text-success">Co-founder & CEO</p>
                        <p className="fs-16">
                          Prashanth's 25 years of banking experience, including
                          his previous role as Executive Vice President at
                          Religare Finvest, Cholamandalam Finance, American
                          Express, ABN◆Amro/RBS, aligns with his vision to
                          establish EduFin as a market leader in growth and
                          brand presence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${AboutStyles["team-member-card"]} d-md-none d-block`}
                >
                  <div className="container p-md-4 py-4">
                    <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center gap-md-4">
                      <div>
                        <Image src={ThiyagarajanR} alt="ThiyagarajanR" />
                      </div>
                      <div className="text-md-start text-center">
                        <h3 className="fs-24 text-primary fw-bold my-3">
                          Thiyagarajan R
                        </h3>
                        <p className="fs-16 text-success">Co-founder & CMO</p>
                        <p className="fs-16">
                          Thiyagarajan's vast expertise in finance and
                          insurance, coupled with his significant leadership
                          experience in top financial institutions like India
                          Bulls Housing Finance, Religare Finvest, Hinduja
                          Finance, Apollo Munich, Dhanalakshmi Bank, RBS, and
                          ABN◆Amro Bank, make him the ideal leader to drive
                          EduFin's market presence, performance, and position.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${AboutStyles["team-member-card"]} d-md-block d-none`}
                >
                  <div className="container p-4">
                    <div className="d-flex justify-content-between gap-4">
                      <div className="text-end">
                        <h3 className="fs-24 text-primary fw-bold">
                          Thiyagarajan R
                        </h3>
                        <p className="fs-16 text-success">Co-founder & CMO</p>
                        <p className="fs-16">
                          Thiyagarajan's vast expertise in finance and
                          insurance, coupled with his significant leadership
                          experience in top financial institutions like India
                          Bulls Housing Finance, Religare Finvest, Hinduja
                          Finance, Apollo Munich, Dhanalakshmi Bank, RBS, and
                          ABN◆Amro Bank, make him the ideal leader to drive
                          EduFin's market presence, performance, and position.
                        </p>
                      </div>
                      <div>
                        <Image src={ThiyagarajanR} alt="ThiyagarajanR" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${AboutStyles["team-member-card"]}`}>
                  <div className="container p-md-4 py-4">
                    <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center gap-md-4">
                      <div>
                        <Image src={RahulDhoka} alt="RahulDhoka" />
                      </div>
                      <div className="text-md-start text-center">
                        <h3 className="fs-24 text-primary fw-bold my-3">
                          Rahul Dhoka
                        </h3>
                        <p className="fs-16 text-success">Co-founder & CRO</p>
                        <p className="fs-16">
                          As a Chartered Accountant and risk expert, he improves
                          the risk assessment process for EduFin's financial
                          operations from parents to partner schools, and
                          defines a risk policy to ensure legal and regulatory
                          compliance. Previously, he held Assistant Vice
                          President roles at InCred Financials Services Ltd.,
                          Bajaj Finance, and Religare Finvest.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${AboutStyles["team-member-card"]} d-md-none d-block`}
                >
                  <div className="container p-md-4 py-4">
                    <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center gap-md-4">
                      <div>
                        <Image src={GopalakrishnanKG} alt="GopalakrishnanKG" />
                      </div>
                      <div className="text-md-start text-center">
                        <h3 className="fs-24 text-primary fw-bold my-3">
                          Gopalakrishnan K.G
                        </h3>
                        <p className="fs-16 text-success">Co-founder & CBO</p>
                        <p className="fs-16">
                          As an out-of-the-box thinker, Gopal brings over two
                          decades of banking industry experience to EduFin,
                          managing a critical part of marketing and alliances.
                          His expertise in retail lending, collections, and
                          brand strategy was honed through senior positions at
                          Incred, Religare, Bajaj Finserve, Barclays, and
                          ABN◆Amro Bank.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${AboutStyles["team-member-card"]} d-md-block d-none`}
                >
                  <div className="container p-4">
                    <div className="d-flex justify-content-between gap-4">
                      <div className="text-end">
                        <h3 className="fs-24 text-primary fw-bold">
                          Gopalakrishnan K.G
                        </h3>
                        <p className="fs-16 text-success">Co-founder & CBO</p>
                        <p className="fs-16">
                          As an out-of-the-box thinker, Gopal brings over two
                          decades of banking industry experience to EduFin,
                          managing a critical part of marketing and alliances.
                          His expertise in retail lending, collections, and
                          brand strategy was honed through senior positions at
                          Incred, Religare, Bajaj Finserve, Barclays, and
                          ABN◆Amro Bank.
                        </p>
                      </div>
                      <div>
                        <Image src={GopalakrishnanKG} alt="GopalakrishnanKG" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${AboutStyles["team-member-card"]}`}>
                  <div className="container p-md-4 py-4">
                    <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center gap-md-4">
                      <div>
                        <Image src={PrashanthJ} alt="PrashanthJ" />
                      </div>
                      <div className="text-md-start text-center">
                        <h3 className="fs-24 text-primary fw-bold my-3">
                          Prashanth J
                        </h3>
                        <p className="fs-16 text-success">Co-founder & CTO</p>
                        <p className="fs-16">
                          JP's extensive tech experience, including AI and ML,
                          is a perfect match for EduFin's needs. With over a
                          decade of tech consulting and 6 years of product
                          company experience, he has built complete tech stacks
                          for start-ups and completed Fortune 500 projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center my-3">
                  <h2 className="text-success fw-bold">Our Advisors</h2>
                </div>

                <div
                  className={`${AboutStyles["team-member-card"]} ${AboutStyles["advisor"]} d-md-none d-block`}
                >
                  <div className="container p-md-4 py-4">
                    <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center gap-md-4">
                      <div>
                        <Image src={ArvindKC} alt="ArvindKC" />
                      </div>
                      <div className="text-md-start text-center">
                        <h3 className="fs-24 text-primary fw-bold my-3">
                          Arvind K.C
                        </h3>
                        <p className="fs-16 text-success">
                          Vice President - Google
                        </p>
                        <p className="fs-16">
                          KC, a lifelong learner who is also an avid blogger and
                          fitness enthusiast, brings his extensive technology
                          expertise as the VP of Engineering at Google, CIO of
                          Palantir, and former Director of IT at Facebook to
                          guide EduFin on innovation, adaptation to upcoming
                          tech, data analytics, and information security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${AboutStyles["team-member-card"]} ${AboutStyles["advisor"]} d-md-block d-none`}
                >
                  <div className="container p-4">
                    <div className="d-flex justify-content-between gap-4">
                      <div className="text-end">
                        <h3 className="fs-24 text-primary fw-bold">
                          Arvind K.C
                        </h3>
                        <p className="fs-16 text-success">
                          Vice President - Google
                        </p>
                        <p className="fs-16">
                          KC, a lifelong learner who is also an avid blogger and
                          fitness enthusiast, brings his extensive technology
                          expertise as the VP of Engineering at Google, CIO of
                          Palantir, and former Director of IT at Facebook to
                          guide EduFin on innovation, adaptation to upcoming
                          tech, data analytics, and information security.
                        </p>
                      </div>
                      <div>
                        <Image src={ArvindKC} alt="ArvindKC" />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${AboutStyles["team-member-card"]} ${AboutStyles["advisor"]} mb-0`}
                >
                  <div className="container p-md-4 py-4">
                    <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center gap-md-4">
                      <div>
                        <Image src={MouliVenkatesan} alt="MouliVenkatesan" />
                      </div>
                      <div className="text-md-start text-center">
                        <h3 className="fs-24 text-primary fw-bold my-3">
                          Mouli Venkatesan
                        </h3>
                        <p className="fs-16 text-success">CIO – Optum Health</p>
                        <p className="fs-16">
                          Mouli, a technocrat, music lover and fitness
                          enthusiast, is the Senior Vice President and CIO of
                          Optum Health, supporting United Health care and Optum
                          Health's businesses, consumers, and customers. With
                          his expertise in Project Portfolio management,
                          Business Analysis, and IT strategy, he will guide
                          EduFin to growth.
                        </p>
                      </div>
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

export default AboutPage;
