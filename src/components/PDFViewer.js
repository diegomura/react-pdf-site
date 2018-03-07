import React from 'react';
import { Document, Page } from 'react-pdf/build/entry.webpack';
import { PDFRenderer, createElement, pdf } from '@react-pdf/core';

export default class extends React.Component {
  state = { document: null };

  componentWillReceiveProps(newProps) {
    const container = createElement('ROOT');
    const mountNode = PDFRenderer.createContainer(container);

    PDFRenderer.updateContainer(newProps.document, mountNode, this);

    pdf(container)
      .toBlob()
      .then(blob => {
        this.setState({ document: URL.createObjectURL(blob) });
      });
  }

  componentWillUnmount() {
    PDFRenderer.updateContainer(null, this.mountNode, this);
  }

  render() {
    if (!this.state.document) {
      return null;
    }

    return (
      <Document file={this.state.document} {...this.props}>
        <Page pageNumber={1} />
      </Document>
    );
  }
};
