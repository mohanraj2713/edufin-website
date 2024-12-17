"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRInsurance = dynamic(
  () => import("@/components/Pages/InsuranceComponent/Insurance"),
  { ssr: false }
);

const InsuranceWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRInsurance/>
    </>
  );
};

export default InsuranceWithoutSSR;
