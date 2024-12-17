"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRTermsAndConditions = dynamic(
  () => import("@/components/Pages/TermsComponents/TermsAndConditions"),
  { ssr: false }
);

const TermsAndConditionsWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRTermsAndConditions/>
    </>
  );
};

export default TermsAndConditionsWithoutSSR;
