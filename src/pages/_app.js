import React from "react";
import { animationCreate } from "../../utils/utils";
import ScrollToTop from "react-scroll-to-top";
import { FaAngleUp } from "react-icons/fa";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* You can keep meta tags or custom head tags here */}
        <title>Compress India</title>
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GC4YBL2XXF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GC4YBL2XXF');
        `}
      </Script>

      {/* Page Content */}
      <div className="pt-[100px]">
        <Component {...pageProps} />
      </div>

      <ScrollToTop smooth component={<FaAngleUp />} />
    </>
  );
}

export default MyApp;
