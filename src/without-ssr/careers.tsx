"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRCareers = dynamic(
  () => import("@/components/Pages/CareersComponent/Careers"),
  { ssr: false }
);

const CareersWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRCareers/>
    </>
  );
};

export default CareersWithoutSSR;
