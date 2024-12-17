"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRPersonalLoanKnowMore = dynamic(
  () => import("@/components/Pages/PersonalLoanComponent/know-more/PersonalLoanKnowMore"),
  { ssr: false }
);

const PersonalLoanKnowMoreWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRPersonalLoanKnowMore/>
    </>
  );
};

export default PersonalLoanKnowMoreWithoutSSR;
