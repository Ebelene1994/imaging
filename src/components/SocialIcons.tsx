import React from 'react';
import { CENTER_INFO } from '../data/knowledgeBase';

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
  variant?: 'default' | 'footer' | 'dark' | 'colorful';
}

export const SocialIcons: React.FC<SocialIconsProps> = ({
  className = 'flex items-center gap-3',
  iconClassName = 'w-5 h-5',
  variant = 'default',
}) => {
  const getLinkClasses = (platform: string) => {
    if (variant === 'footer') {
      return 'p-2.5 rounded-full bg-slate-800/80 hover:bg-[#0B4EA2] text-slate-300 hover:text-white transition-all hover:scale-110 shadow-sm border border-slate-700/60';
    }
    if (variant === 'colorful') {
      switch (platform) {
        case 'facebook':
          return 'p-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all hover:scale-110 shadow-md';
        case 'youtube':
          return 'p-2.5 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all hover:scale-110 shadow-md';
        case 'instagram':
          return 'p-2.5 rounded-full bg-linear-to-tr from-amber-500 via-rose-500 to-purple-600 text-white hover:opacity-90 transition-all hover:scale-110 shadow-md';
        case 'tiktok':
          return 'p-2.5 rounded-full bg-black text-white hover:bg-slate-900 transition-all hover:scale-110 shadow-md border border-slate-800';
        case 'x':
          return 'p-2.5 rounded-full bg-slate-900 text-white hover:bg-black transition-all hover:scale-110 shadow-md';
        default:
          return 'p-2.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all';
      }
    }
    // Default style
    return 'p-2 rounded-xl bg-slate-100 hover:bg-[#0B4EA2] text-slate-600 hover:text-white transition-all hover:scale-105 shadow-sm border border-slate-200';
  };

  const socialLinks = [
    {
      id: 'facebook',
      name: 'Facebook',
      url: CENTER_INFO.social.facebook,
      icon: (
        <svg className={iconClassName} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      id: 'youtube',
      name: 'YouTube',
      url: CENTER_INFO.social.youtube,
      icon: (
        <svg className={iconClassName} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: CENTER_INFO.social.instagram,
      icon: (
        <svg className={iconClassName} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      url: CENTER_INFO.social.tiktok,
      icon: (
        <svg className={iconClassName} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V5.86a6.33 6.33 0 0 0-1-.08A6.26 6.26 0 1 0 15.8 12V8.2a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.98.37z" />
        </svg>
      ),
    },
    {
      id: 'x',
      name: 'X (Twitter)',
      url: CENTER_INFO.social.x,
      icon: (
        <svg className={iconClassName} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <div className={className}>
      {socialLinks.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit Glims Imaging Center on ${item.name}`}
          title={`Follow Glims Imaging Center on ${item.name}`}
          className={getLinkClasses(item.id)}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};
