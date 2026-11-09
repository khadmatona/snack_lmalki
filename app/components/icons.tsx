type P = { className?: string };

export const WhatsApp = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.2-4.24 9.43-9.44 9.43zm8.04-17.47A11.3 11.3 0 0 0 12.04.7C5.77.7.67 5.8.67 12.07c0 2 .52 3.96 1.52 5.68L.57 23.7l6.08-1.6a11.33 11.33 0 0 0 5.39 1.37h.01c6.26 0 11.36-5.1 11.36-11.37 0-3.04-1.18-5.89-3.33-8.04z" />
  </svg>
);

export const Chevron = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const Phone = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" />
  </svg>
);

export const Instagram = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const Pin = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
);

export const Book = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z" />
  </svg>
);

export const Scooter = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="5.5" cy="17.5" r="2.5" />
    <circle cx="18.5" cy="17.5" r="2.5" />
    <path d="M8 17.5h7l3-7h-3M15 4h2l1.5 6.5M3 13h6l2 4.5" />
  </svg>
);

export const Star = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
  </svg>
);

export const Google = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.5 12.2c0-.8-.1-1.4-.2-2.1H12v4h5.9a5 5 0 0 1-2.2 3.3v2.7h3.5c2.1-1.9 3.3-4.7 3.3-7.9z" />
    <path fill="#34A853" d="M12 23c3 0 5.4-1 7.2-2.7l-3.5-2.7c-1 .7-2.2 1.1-3.7 1.1a6.5 6.5 0 0 1-6.1-4.5H2.3v2.8A11 11 0 0 0 12 23z" />
    <path fill="#FBBC05" d="M5.9 14.2a6.6 6.6 0 0 1 0-4.3V7.1H2.3a11 11 0 0 0 0 9.9z" />
    <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.1-3.1A11 11 0 0 0 2.3 7.1l3.6 2.8C6.8 7.3 9.2 5.4 12 5.4z" />
  </svg>
);

export const Burger = ({ className }: P) => (
  <svg className={className} viewBox="0 0 80 80" aria-hidden="true">
    <path d="M12 36c0-14 12.5-24 28-24s28 10 28 24z" fill="#ff9a2e" />
    <g fill="#fff4e2">
      <ellipse cx="30" cy="22" rx="2.2" ry="1.3" />
      <ellipse cx="42" cy="18" rx="2.2" ry="1.3" />
      <ellipse cx="52" cy="25" rx="2.2" ry="1.3" />
      <ellipse cx="38" cy="28" rx="2.2" ry="1.3" />
      <ellipse cx="24" cy="30" rx="2.2" ry="1.3" />
    </g>
    <path d="M10 40h60l-5 5-5-4-5 4-5-4-5 4-5-4-5 4-5-4-5 4-5-4-5 4z" fill="#4cb85a" />
    <rect x="11" y="45" width="58" height="5" rx="2.5" fill="#e3342b" />
    <rect x="9" y="51" width="62" height="9" rx="4.5" fill="#4a2a1d" />
    <path d="M12 62h56c0 4.5-3.5 7-8 7H20c-4.5 0-8-2.5-8-7z" fill="#ff9a2e" />
  </svg>
);
