"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSRContactUs = dynamic(
  () => import("@/components/Pages/ContactUsComponent/ContactUs"),
  { ssr: false }
);

const ContactUsWithoutSSR = () => {
  return (
    <>
      <DynamicComponentWithNoSSRContactUs/>
    </>
  );
};

export default ContactUsWithoutSSR;
