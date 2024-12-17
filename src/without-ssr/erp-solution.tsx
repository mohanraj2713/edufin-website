"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRERPSolution = dynamic(
  () => import("@/components/Pages/ERPSolutionComponent/ERPSolution"),
  { ssr: false }
);

const ERPSolutionWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRERPSolution/>
    </>
  );
};

export default ERPSolutionWithoutSSR;
