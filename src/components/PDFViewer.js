import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Document, Page } from 'react-pdf/build/entry.webpack';
import { PDFRenderer, createElement, pdf } from '@react-pdf/react-pdf';
import PageNavigator from './PageNavigator';

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const DocumentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class PDFViewer extends React.Component {
  state = { document: null, numPages: null, currentPage: 1 };

  componentWillReceiveProps(newProps) {
    // Don't update if document didn't change
    if (this.props.document === newProps.document) return;

    if (!newProps.document) {
      this.setState({ document: null });
      return;
    }

    const container = createElement('ROOT');
    const mountNode = PDFRenderer.createContainer(container);

    PDFRenderer.updateContainer(newProps.document, mountNode, this);

    pdf(container)
      .toBlob()
      .then(blob => {
        const url = URL.createObjectURL(blob);

        if (this.props.onUrlChange) {
          this.props.onUrlChange(url);
        }

        this.setState({ document: url });
      });
  }

  onDocumentLoad = ({ numPages }) => {
    const { currentPage } = this.state;

    this.setState({
      numPages,
      currentPage: Math.min(currentPage, numPages),
    });
  };

  onPreviousPage = () => {
    this.setState(state => ({
      currentPage: state.currentPage - 1,
    }));
  };

  onNextPage = () => {
    this.setState(state => ({
      currentPage: state.currentPage + 1,
    }));
  };

  render() {
    if (!this.state.document) {
      return null;
    }

    return (
      <Wrapper>
        <DocumentWrapper>
          <Document
            file={this.state.document}
            onLoadSuccess={this.onDocumentLoad}
            {...this.props}
          >
            <Page pageNumber={this.state.currentPage} />
          </Document>
        </DocumentWrapper>
        <PageNavigator
          currentPage={this.state.currentPage}
          numPages={this.state.numPages}
          onNextPage={this.onNextPage}
          onPreviousPage={this.onPreviousPage}
        />
      </Wrapper>
    );
  }
}

PDFViewer.propTypes = {
  document: PropTypes.object,
  onUrlChange: PropTypes.func.isRequired,
};

PDFViewer.defaultProps = {
  document: null,
};

export default PDFViewer;
