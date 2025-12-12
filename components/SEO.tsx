import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  url: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, url }) => {
  useEffect(() => {
    document.title = title;

    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute('content', description);

    // Optional: Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', window.location.origin + url);

  }, [title, description, url]);

  return null; // This component doesn't render any visible UI
};

export default SEO;
