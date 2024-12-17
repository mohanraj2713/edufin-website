"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRHigherEducationAbroad = dynamic(
  () => import("@/components/Pages/HigherEducationAbroadComponent/HigherEducationAbroad"),
  { ssr: false }
);

const HigherEducationAbroadWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRHigherEducationAbroad/>
    </>
  );
};

export default HigherEducationAbroadWithoutSSR;
