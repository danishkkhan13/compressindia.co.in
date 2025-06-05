'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import $ from 'jquery';

import ScrollToTop from 'react-scroll-to-top';
import { FaAngleUp } from 'react-icons/fa';

function MyApp({ Component, pageProps }) {


  return (
    <>
      <Head>
        <title>My App</title>
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
