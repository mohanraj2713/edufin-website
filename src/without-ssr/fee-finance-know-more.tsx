"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRFeeFinanceKnowMore = dynamic(
  () => import("@/components/Pages/FeeFinanceComponent/know-more/FeeFinanceKnowMore"),
  { ssr: false }
);

const FeeFinanceKnowMoreWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRFeeFinanceKnowMore/>
    </>
  );
};

export default FeeFinanceKnowMoreWithoutSSR;
