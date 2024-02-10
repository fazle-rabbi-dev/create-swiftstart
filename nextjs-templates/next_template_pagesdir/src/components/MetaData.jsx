import React from "react";

function MetaData() {
  return (
    <>
      {/*Metadata for Open Graph and Twitter*/}
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />
      <meta property="og:image:width" content="1500" />
      <meta property="og:image:height" content="1500" />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://example.com" />
      <meta property="og:site_name" content="" />
      <meta property="og:locale" content="en_US" />

      <meta property="twitter:title" content="" />
      <meta property="twitter:description" content="" />
      <meta property="twitter:image:src" content="" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@fazle-rabbi-dev" />
      <meta property="twitter:domain" content="example.com" />

      {/*Additional Metadata*/}
      <meta name="keywords" content="" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="hostname" content="example.com" />
      <meta name="author" content="Fazle Rabbi" />
      <meta name="description" content="Fazle Rabbi | Mern-stack developer" />
      <meta name="theme-color" content="#222" />

      {/*Link and Canonical Tags*/}
      <link rel="canonical" href="https://example.com" />
      <link rel="author" href="/humans.txt" />
      <link rel="icon" href="/favicon.ico" sizes="128x128" />
      <link rel="icon" href="/favicon.ico" sizes="256x256" />
      <link rel="apple-touch-icon" href="/apple-touch-icon" />
      <link rel="manifest" href="/manifest.json" />

      {/*Basic Settings*/}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Next.js App</title>
    </>
  );
}

export default MetaData;
