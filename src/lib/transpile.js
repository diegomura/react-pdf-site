import React from 'react'
import { transform } from 'buble'
import { Page, Text, Link, Font, View, Note, Image, StyleSheet } from '@react-pdf/renderer'
import styled from '@react-pdf/styled-components'

const Document = 'DOCUMENT'

const primitives = { Document, Page, Text, Link, Font, View, Note, Image, Canvas, StyleSheet, styled }

const transpile = (code, callback, onError) => {
  try {
    const result = transform(code, {
      objectAssign: 'Object.assign',
      transforms: {
        dangerousForOf: true,
        dangerousTaggedTemplateString: true
      }
    })

    const res = new Function('React', 'ReactPDF', ...Object.keys(primitives), result.code)

    res(React, { render: doc => callback(doc) }, ...Object.values(primitives))
  } catch (e) {
    if (onError) {
      onError(e)
    }
  }
}

export default transpile
