import Head from "next/head";

/**
 * @param {{ pageTitle: string, description?: string }} props
 */
const SEO = ({ pageTitle, description }) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
  </>
);

export default SEO;
