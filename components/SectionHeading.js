// section-heading.js
import React from 'react';

export default function SectionHeading({ children }) {
  return (
    <h2 className="text-3xl font-bold text-center mb-8">
      {children}
    </h2>
  );
}