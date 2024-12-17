"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRLoans = dynamic(
  () => import("@/components/Pages/LoansComponent/Loans"),
  { ssr: false }
);

const LoansWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRLoans/>
    </>
  );
};

export default LoansWithoutSSR;
