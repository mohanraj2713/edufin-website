'use client'
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Footer from "../Footer/Footer";
import { ABOUT, BASE, CONTACT_US } from "../../config/routenames";
import LayoutStyles from "./Layout.module.css";
import NavigationBar from "../NavigationBar/NavigationBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const pageContainerRef = useRef<HTMLDivElement>(null);

  const showFooterPages = [BASE, ABOUT, CONTACT_US];

  useEffect(() => {
    if (pageContainerRef.current) {
      pageContainerRef.current.scrollIntoView({
        behavior: "auto", // `instant` is not a valid scroll behavior in modern browsers
      });
    }
  }, [pathname]);

  return (
    <div ref={pageContainerRef}>
      <NavigationBar />
      <div className={LayoutStyles["outlet-wrapper"]}>
        {children}
      </div>
      {showFooterPages.includes(pathname) && <Footer />}
    </div>
  );
};

export default Layout;
