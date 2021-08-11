import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { Document, Page, pdfjs } from 'react-pdf';
import PdfjsWorker from 'pdfjs-dist/build/pdf.worker.js';

import PageNavigator from './PageNavigator';
import { useAsync } from 'react-use';

pdfjs.GlobalWorkerOptions.workerPort = new PdfjsWorker();

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`;

const DocumentWrapper = styled.div`
  flex: 1;
  padding: 1em;
  display: flex;
  z-index: 500;
  align-items: center;
  justify-content: center;
`;

const Message = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 1000;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  transition: all 1s;
  opacity: ${(props) => (props.active ? 1 : 0)};
  pointer-events: ${(props) => (props.active ? 'all' : 'none')};
`;

const PDFViewer = ({ value, onUrlChange, onRenderError }) => {
  const [numPages, setNumPages] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const render = useAsync(async () => {
    if (!value) return null;

    const blob = await pdf(value).toBlob();
    const url = URL.createObjectURL(blob);

    return url;
  }, [value]);

  useEffect(() => onUrlChange(render.value), [render.value]);

  useEffect(() => onRenderError(render.error), [render.error]);

  const onPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const onNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onDocumentLoad = (d) => {
    setNumPages(d.numPages);
    setCurrentPage((prev) => Math.min(prev, d.numPages));
  };

  return (
    <Wrapper>
      <Message active={render.loading}>Rendering PDF...</Message>

      <Message active={!render.loading && !value}>
        You are not rendering a valid document
      </Message>

      <DocumentWrapper>
        <Document file={render.value} onLoadSuccess={onDocumentLoad}>
          <Page renderMode="svg" pageNumber={currentPage} />
        </Document>
      </DocumentWrapper>

      <PageNavigator
        currentPage={currentPage}
        numPages={numPages}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
      />
    </Wrapper>
  );
};

export default PDFViewer;
