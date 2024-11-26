import React from 'react';
import { transform } from 'buble';
import {
  Page,
  Text,
  Link,
  Font,
  View,
  Canvas,
  Note,
  Image,
  G,
  Svg,
  Path,
  Rect,
  Line,
  Stop,
  Defs,
  Tspan,
  Circle,
  Ellipse,
  Polygon,
  Polyline,
  ClipPath,
  LinearGradient,
  RadialGradient,
  StyleSheet,
  TextInput,
  FormField,
  Checkbox,
  FormList,
  Picker
} from '@react-pdf/renderer';

const Document = 'DOCUMENT';

const primitives = {
  Document,
  Page,
  Text,
  Link,
  Font,
  View,
  Note,
  Image,
  Canvas,
  G,
  Svg,
  Path,
  Rect,
  Line,
  Stop,
  Defs,
  Tspan,
  Circle,
  Ellipse,
  Polygon,
  Polyline,
  ClipPath,
  LinearGradient,
  RadialGradient,
  TextInput,
  FormField,
  Checkbox,
  FormList,
  Picker,
  StyleSheet,
};

const transpile = (code, callback, onError) => {
  try {
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

    res(
      React,
      { render: (doc) => callback(doc) },
      ...Object.values(primitives),
    );
  } catch (e) {
    if (onError) {
      onError(e);
    }
  }
};

export default transpile;
