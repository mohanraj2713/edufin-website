"use client";

import dynamic from "next/dynamic";
import React from "react";

// Define a map for all components to render
const componentsRoutes: Record<string, string> = {
  Hero: "Hero/Hero",
  Fees: "Fees/Fees",
  WhyChooseUs: "WhyChooseUs/WhyChooseUs",
  Edge: "Edge/Edge",
  WhatOurCustomersSay: "WhatOurCustomersSay/WhatOurCustomersSay",
  Testimonials: "Testimonials/Testimonials",
  EducationPartners: "EducationPartners/EducationPartners",
  FinancePartners: "FinancePartners/FinancePartners",
  Partners: "Partners/Partners",
  OurNews: "OurNews/OurNews",
  AppPromotion: "AppPromotion/AppPromotion",
};

// Dynamically import and render all components
const HomeWithoutSSR = () => {
  return (
    <>
      {Object.entries(componentsRoutes).map(([name, path], index) => {
        // Dynamically import each component
        const Component = dynamic(
          () => import(`@/components/Pages/HomeComponents/${path}`),
          {
            ssr: false, // Disable SSR for each component
            loading: () => <div>Loading {name}...</div>, // Optional: Show loading state
          }
        );

        return (
          <React.Fragment key={index}>
            <Component />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default HomeWithoutSSR;
