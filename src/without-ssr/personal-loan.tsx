"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRPersonalLoan = dynamic(
  () => import("@/components/Pages/PersonalLoanComponent/PersonalLoan"),
  { ssr: false }
);

const PersonalLoanWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRPersonalLoan/>
    </>
  );
};

export default PersonalLoanWithoutSSR;
