import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SeoManager = ({ page, keywords, title, description }) => {
  const commonData = {
    title: title || "Beautiful Wedding Photography",
    description: description || "Welcome to our wedding photography website. Explore our portfolio and services.",
    keywords: keywords.join(", "),
    image: "/static/Images/IMG_20240706_143509.jpg",
    url: "https://clickphoto2.netlify.app/",
    type: "WebSite",
    businessName: "Wedding Photography",
    streetAddress: "Karwar Mallapur",
    addressRegion: "Karnataka",
    postalCode: "110001",
    addressCountry: "IN",
    telephone: "+91-9901954610",
    sameAs: [
      "https://www.instagram.com/savan_naik_259?igsh=M3Jydmpjdmd0NHh2",
      "https://www.linkedin.com/in/savan-naik-6b729628a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    ],
    author: "Savan Naik",
    owner: "Savan Naik",
    copyright: "© 2024 Savan Naik. All rights reserved."
  };

  const generateJsonLd = () => {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: commonData.businessName,
      image: commonData.image,
      url: commonData.url,
      telephone: commonData.telephone,
      address: {
        "@type": "PostalAddress",
        streetAddress: commonData.streetAddress,
        addressLocality: commonData.addressRegion,
        postalCode: commonData.postalCode,
        addressCountry: commonData.addressCountry
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        opens: "00:00",
        closes: "23:59"
      },
      sameAs: commonData.sameAs,
      author: commonData.author,
      owner: commonData.owner,
      copyright: commonData.copyright
    };
  };

  return (
    <Helmet>
      <title>{commonData.title}</title>
      <meta name="description" content={commonData.description} />
      <meta name="keywords" content={commonData.keywords} />
      <meta name="author" content={commonData.author} />
      <meta name="owner" content={commonData.owner} />
      <meta name="copyright" content={commonData.copyright} />
      <meta property="og:title" content={commonData.title} />
      <meta property="og:description" content={commonData.description} />
      <meta property="og:image" content={commonData.image} />
      <meta property="og:url" content={commonData.url} />
      <script type="application/ld+json">
        {JSON.stringify(generateJsonLd())}
      </script>
    </Helmet>
  );
};

SeoManager.propTypes = {
  page: PropTypes.string.isRequired,
  keywords: PropTypes.array.isRequired,
  title: PropTypes.string,
  description: PropTypes.string
};

export default SeoManager;
