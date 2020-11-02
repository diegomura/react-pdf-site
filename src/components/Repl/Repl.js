import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import debounce from 'lodash.debounce';
import useEvent from 'react-use/lib/useEvent';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import React, { useEffect, useRef, useState, useCallback } from 'react';

import media from '../../styled/media';
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

const DEFAULT_CODE_MIRROR_OPTIONS = {
  autoCloseBrackets: true,
  styleSelectedText: true,
  scrollbarStyle: 'simple',
  keyMap: 'sublime',
  lineNumbers: true,
  matchBrackets: true,
  mode: 'text/jsx',
  showCursorWhenSelecting: true,
  styleActiveLine: true,
  tabWidth: 2,
  autoCloseTags: true,
};

let CodeMirror;

const Repl = ({ activeTab, value, onChange, onUrlChange }) => {
  const textarea = useRef(null);

  const codeMirror = useRef(null);

  const [error, setError] = useState(null);

  const [element, setElement] = useState(null);

  useEffect(() => {
    require('codemirror/mode/jsx/jsx');
    require('codemirror/keymap/sublime');
    require('codemirror/addon/edit/closetag');
    require('codemirror/addon/comment/comment');
    require('codemirror/addon/edit/matchbrackets');
    require('codemirror/addon/edit/closebrackets');
    require('codemirror/addon/display/placeholder');
    require('codemirror/addon/selection/active-line');
    require('codemirror/addon/scroll/simplescrollbars');
    require('codemirror/addon/selection/mark-selection');
    CodeMirror = require('codemirror');

    const instance = CodeMirror.fromTextArea(
      textarea.current,
      DEFAULT_CODE_MIRROR_OPTIONS,
    );

    instance.setValue(value);

    codeMirror.current = instance;

    return () => instance?.toTextArea();
  }, []);

  const onErrorClose = () => {
    setError(null);
  };

  const handleChange = useCallback(
    ({ doc }) => {
      const code = doc.getValue();

      onChange?.(code);

      if (code.length === 0) {
        setError(null);
        setElement(null);
      }

      debounceTranspile(code, setElement, setError);
    },
    [onChange],
  );

  useEvent('change', handleChange, codeMirror.current);

  useEffect(() => {
    codeMirror.current?.setValue(value);
  }, [value]);

  useUpdateEffect(() => {
    setError(null);
  }, [element]);

  return (
    <Wrapper>
      <CodePanel active={activeTab === 'code'}>
        <textarea
          autoFocus
          ref={textarea}
          autoComplete="off"
          defaultValue={value}
          placeholder="Write code here..."
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
  );
};

export default Repl;
