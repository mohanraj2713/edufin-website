"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRLayout = dynamic(
  () => import("@/components/Layout/Layout"),
  { ssr: false }
);

const LayoutWithoutSSR = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DynamicComponentWithNoSSRLayout>
        {children}
      </DynamicComponentWithNoSSRLayout>
    </>
  );
};

export default LayoutWithoutSSR;
