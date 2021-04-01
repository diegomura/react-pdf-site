import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import debounce from 'lodash.debounce';
import React, { useCallback, useState } from 'react';

import Spinner from '../UI/Spinner';
import media from '../../styled/media';
import CodeEditor from './CodeEditor';
import ErrorMessage from './ErrorMessage';
import transpile from '../../lib/transpile';

const PDFViewerWithNoSSR = dynamic(import('./PDFViewer'), { ssr: false });

const debounceTranspile = debounce(transpile, 250);

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  max-height: calc(100vh - 54px);

  ${media.desktop} {
    display: initial;
    max-height: calc(100vh - 45px);
  }
`;

const CodePanel = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;

  ${media.desktop} {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: ${(props) => (props.active ? 500 : 250)};
  }
`;

const PDFPanel = styled.div`
  flex: 1;
  overflow: auto;
  background-color: #fff;

  ${media.desktop} {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: ${(props) => (props.active ? 500 : 250)};
  }
`;

const CodeError = styled(ErrorMessage)`
  bottom: 0;
  width: 100%;
  z-index: 1000;
  position: absolute;
`;

const Repl = ({ activeTab, value, onChange, onUrlChange }) => {
  const [error, setError] = useState(null);

  const [element, setElement] = useState(null);

  const [loading, setLoading] = useState(true);

  const onErrorClose = () => {
    setError(null);
  };

  const handleEditorLoaded = () => {
    setLoading(false);
  };

  const handleChange = useCallback(
    (code) => {
      if (code.length === 0) {
        setError(null);
        setElement(null);
      }

      debounceTranspile(code, setElement, setError);
    },
    [onChange],
  );

  return (
    <>
      {loading && <Spinner />}

      <Wrapper>
        <CodePanel active={activeTab === 'code'}>
          <CodeEditor
            value={value}
            onChange={handleChange}
            onLoad={handleEditorLoaded}
          />
          <CodeError onClose={onErrorClose}>{error}</CodeError>
        </CodePanel>

        <PDFPanel active={activeTab === 'pdf'}>
          <PDFViewerWithNoSSR
            value={element}
            onUrlChange={onUrlChange}
            onRenderError={setError}
          />
        </PDFPanel>
      </Wrapper>
    </>
  );
};

export default Repl;
