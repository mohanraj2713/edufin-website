"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRHigherEducationAbroadKnowMore = dynamic(
  () => import("@/components/Pages/HigherEducationAbroadComponent/know-more/HigherEducationAbroadKnowMore"),
  { ssr: false }
);

const HigherEducationAbroadKnowMoreWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRHigherEducationAbroadKnowMore/>
    </>
  );
};

export default HigherEducationAbroadKnowMoreWithoutSSR;
