import React from 'react';
import { transform } from 'buble';
import {
  Page,
  Text,
  Link,
  Font,
  View,
  Image,
  StyleSheet,
} from '@react-pdf/react-pdf';

const Document = 'DOCUMENT';

const primitives = { Document, Page, Text, Link, Font, View, Image, StyleSheet };

const transpile = (code, callback, onError) => {
  const result = transform(code, {
    objectAssign: 'Object.assign',
    transforms: {
      dangerousForOf: true,
      dangerousTaggedTemplateString: true,
    },
  });
  const res = new Function(
    'React',
    'ReactPDF',
    ...Object.keys(primitives),
    result.code,
  );

  try {
    res(React, { render: doc => callback(doc) }, ...Object.values(primitives));
  } catch (e) {
    if (onError) {
      onError(e);
    }
  }
};

export default transpile;
