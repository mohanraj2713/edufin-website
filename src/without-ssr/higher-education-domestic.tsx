"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRHigherEducationDomestic = dynamic(
  () => import("@/components/Pages/HigherEducationDomesticComponent/HigherEducationDomestic"),
  { ssr: false }
);

const HigherEducationDomesticWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRHigherEducationDomestic/>
    </>
  );
};

export default HigherEducationDomesticWithoutSSR;
