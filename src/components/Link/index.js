/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import NextLink from 'next/link';

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}
