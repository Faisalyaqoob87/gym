declare module 'react-anchor-link-smooth-scroll' {
  import * as React from 'react';

  interface AnchorLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    offset?: number | ((anchor: string) => number);
    href: string;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
  }

  const AnchorLink: React.FC<AnchorLinkProps>;

  export default AnchorLink;
}
