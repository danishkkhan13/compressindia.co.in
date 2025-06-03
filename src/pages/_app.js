'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import $ from 'jquery';
import HeaderOne from '../common/header/HeaderOne';
import StickyHeader from '../common/header/StickyHeader';
import ScrollToTop from 'react-scroll-to-top';
import { FaAngleUp } from 'react-icons/fa';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const scrollTop = $(window).scrollTop();
        if (scrollTop > 100) {
          $('#mainHeader').slideUp(200);
          $('#stickyHeader').fadeIn(200);
        } else {
          $('#mainHeader').slideDown(200);
          $('#stickyHeader').fadeOut(200);
        }
      };

      $(window).on('scroll', handleScroll);

      return () => {
        $(window).off('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <Head>
        <title>My App</title>
      </Head>

      {/* Main header */}
      <div id="mainHeader">
        <HeaderOne />
      </div>

      {/* Sticky header (hidden initially) */}
      <StickyHeader />

      {/* Content area */}
      <div className="pt-[80px]">
        <Component {...pageProps} />
      </div>

      <ScrollToTop smooth component={<FaAngleUp />} />
    </>
  );
}

export default MyApp;
