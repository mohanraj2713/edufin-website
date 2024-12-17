"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRHigherEducationDomesticKnowMore = dynamic(
  () => import("@/components/Pages/HigherEducationDomesticComponent/know-more/HigherEducationDomesticKnowMore"),
  { ssr: false }
);

const HigherEducationDomesticKnowMoreWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRHigherEducationDomesticKnowMore/>
    </>
  );
};

export default HigherEducationDomesticKnowMoreWithoutSSR;
