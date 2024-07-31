import React from 'react';
import { Helmet } from 'react-helmet';

const SeoManager = ({ page, keywords, title, description }) => {
  const combinedKeywords = keywords.join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={combinedKeywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="your-default-image-url" />
      <meta property="og:url" content={window.location.href} />
      <meta name="author" content="Your Name" />
      <meta name="owner" content="Your Company Name" />
      <meta name="copyright" content="Your Company Name" />
    </Helmet>
  );
};

export default SeoManager;
