"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRMedibuddy = dynamic(
  () => import("@/components/Pages/MedibuddyComponent/Medibuddy"),
  { ssr: false }
);

const MedibuddyWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRMedibuddy/>
    </>
  );
};

export default MedibuddyWithoutSSR;
