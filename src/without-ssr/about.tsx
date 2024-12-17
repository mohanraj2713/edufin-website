"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRAbout = dynamic(
  () => import("@/components/Pages/AboutComponent/About"),
  { ssr: false }
);

const AboutWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRAbout/>
    </>
  );
};

export default AboutWithoutSSR;
