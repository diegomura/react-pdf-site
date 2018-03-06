import React from 'react';
import { Document } from '@react-pdf/dom';
import { Page } from '@react-pdf/core';
import Fractal from './Fractal';

export default (props) => (
  <Document
    title="Fractals"
    author="John Doe"
    subject="Rendering fractals with react-pdf"
    keywords={['react', 'pdf', 'fractals']}
    {...props}
  >
    <Page size="A4">
      <Fractal steps={18} />
    </Page>
  </Document>
);
