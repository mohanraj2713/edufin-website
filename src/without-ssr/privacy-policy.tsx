"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRPrivacyPolicy = dynamic(
  () => import("@/components/Pages/PrivacyPolicyComponent/PrivacyPolicy"),
  { ssr: false }
);

const PrivacyPolicyWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRPrivacyPolicy/>
    </>
  );
};

export default PrivacyPolicyWithoutSSR;
