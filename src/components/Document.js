import React from 'react';
import { Document as ViewerDocument, Page as ViewerPage } from 'react-pdf/build/entry.webpack';
import { PDFRenderer, Page, Document, createElement, pdf } from '@react-pdf/core';
import Fractal from './Fractal';

export default class extends React.Component {
  container = createElement('ROOT');

  constructor(props) {
    super(props);

    this.state = {
      document: null,
    };
  }

  componentDidMount() {
    this.mountNode = PDFRenderer.createContainer(this.container);

    PDFRenderer.updateContainer(
      <Document {...this.props}>
        <Page size="A4">
          <Fractal steps={18} />
        </Page>
      </Document>,
      this.mountNode,
      this,
    );

    pdf(this.container)
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
      <ViewerDocument file={this.state.document} {...this.props}>
        <ViewerPage pageNumber={1} />
      </ViewerDocument>
    );
  }
};
