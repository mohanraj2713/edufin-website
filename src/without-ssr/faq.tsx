"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRFaq = dynamic(
  () => import("@/components/Pages/FAQComponents/Faq"),
  { ssr: false }
);

const FaqWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRFaq/>
    </>
  );
};

export default FaqWithoutSSR;
