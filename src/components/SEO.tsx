import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CENTER_INFO } from '../data/knowledgeBase';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = `${CENTER_INFO.name} | 3D/4D & Diagnostic Ultrasound in Laurel, MD`,
  description = 'Glims Imaging Center provides premier 3D/4D HD ultrasound, OB/GYN prenatal scans, vascular Doppler, abdominal diagnostic ultrasound, and 24/7 mobile bedside imaging in Laurel, MD.',
  canonical,
  keywords = '3D ultrasound, 4D ultrasound, diagnostic imaging Laurel MD, mobile ultrasound Maryland, OB GYN scan, gender reveal ultrasound, vascular Doppler',
  ogType = 'website',
  ogImage = '/images/3D_4D ultrasound.jpg',
}) => {
  const siteUrl = 'https://glimsimagingcenter1.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={fullCanonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={CENTER_INFO.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
    </Helmet>
  );
};
