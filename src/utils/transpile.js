import React from 'react';
import { transform } from 'buble';
import {
  Document,
  Page,
  Text,
  Link,
  View,
  Image,
  StyleSheet,
} from '@react-pdf/core';

const primitives = { Document, Page, Text, Link, View, Image, StyleSheet };

const transpile = (code, callback) => {
  const result = transform(code);
  const res = new Function(
    'React',
    'ReactPDF',
    ...Object.keys(primitives),
    result.code,
  );
  res(React, { render: doc => callback(doc) }, ...Object.values(primitives));
};

export default transpile;
