'use client'

// import Image from "next/image";
// import styles from "./page.module.css";
import AppPromotion from "@/components/Pages/HomeComponents/AppPromotion/AppPromotion";
import Edge from "@/components/Pages/HomeComponents/Edge/Edge";
import EducationPartners from "@/components/Pages/HomeComponents/EducationPartners/EducationPartners";
import Fees from "@/components/Pages/HomeComponents/Fees/Fees";
import FinancePartners from "@/components/Pages/HomeComponents/FinancePartners/FinancePartners";
import Hero from "@/components/Pages/HomeComponents/Hero/Hero";
import OurNews from "@/components/Pages/HomeComponents/OurNews/OurNews";
import Partners from "@/components/Pages/HomeComponents/Partners/Partners";
import Testimonials from "@/components/Pages/HomeComponents/Testimonials/Testimonials";
import WhatOurCustomersSay from "@/components/Pages/HomeComponents/WhatOurCustomersSay/WhatOurCustomersSay";
import WhyChooseUs from "@/components/Pages/HomeComponents/WhyChooseUs/WhyChooseUs";

export default function Home() {

  return (
    <div>
      <Hero />
      <Fees />
      <WhyChooseUs />
      <Edge />
      <WhatOurCustomersSay />
      <Testimonials />
      <EducationPartners />
      <FinancePartners />
      <Partners />
      <OurNews />
      <AppPromotion />
    </div>
  );
}
