"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRInteractiveFlatPanels = dynamic(
  () => import("@/components/Pages/InteractiveFlatPanelsComponent/InteractiveFlatPanels"),
  { ssr: false }
);

const InteractiveFlatPanelsWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRInteractiveFlatPanels/>
    </>
  );
};

export default InteractiveFlatPanelsWithoutSSR;
