import React, { useEffect } from 'react';
import { animationCreate } from "../../utils/utils";
import ScrollToTop from "react-scroll-to-top";
import { FaAngleUp } from 'react-icons/fa';
import Head from "next/head";

function MyApp({ Component, pageProps }) {


  return (
    <>
      <Head>
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GC4YBL2XXF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GC4YBL2XXF');
            `,
          }}
        />
      </Head>




      {/* Page Content */}
      <div className="pt-[100px]">

        <Component {...pageProps} />
      </div>

      <ScrollToTop smooth component={<FaAngleUp />} />
    </>
  );
}

export default MyApp;
