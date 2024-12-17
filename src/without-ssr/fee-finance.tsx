"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRFeeFinance = dynamic(
  () => import("@/components/Pages/FeeFinanceComponent/FeeFinance"),
  { ssr: false }
);

const FeeFinanceWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRFeeFinance/>
    </>
  );
};

export default FeeFinanceWithoutSSR;
