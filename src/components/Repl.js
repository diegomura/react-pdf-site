import React from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import debounce from 'lodash.debounce';

import media from '../styled/media';
import ErrorMessage from './ErrorMessage';
import transpile from '../lib/transpile';

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

class Repl extends React.PureComponent {
  state = {
    element: null,
    error: null,
  };

  componentDidMount() {
    require('codemirror/mode/jsx/jsx');
    require('codemirror/keymap/sublime');
    require('codemirror/addon/edit/closetag');
    require('codemirror/addon/comment/comment');
    require('codemirror/addon/edit/matchbrackets');
    require('codemirror/addon/edit/closebrackets');
    require('codemirror/addon/display/placeholder');
    require('codemirror/addon/selection/active-line');
    require('codemirror/addon/selection/mark-selection');
    CodeMirror = require('codemirror');

    this.codeMirror = CodeMirror.fromTextArea(
      this.textarea,
      DEFAULT_CODE_MIRROR_OPTIONS,
    );
    this.codeMirror.on('change', this.onChange.bind(this));
    this.codeMirror.setValue(this.props.value);
  }

  componentWillUnmount() {
    if (this.codeMirror) {
      this.codeMirror.toTextArea();
    }
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (this.props.value !== newProps.value) {
      this.codeMirror.setValue(newProps.value);
    }
  }

  onChange({ doc }) {
    const code = doc.getValue();

    if (this.props.onChange) {
      this.props.onChange(code);
    }

    if (code.length === 0) {
      this.setState({
        error: null,
        element: null,
      });
    }

    this.transpile(code);
  }

  onErrorClose = () => {
    this.setState({ error: null });
  };

  transpile(code) {
    debounceTranspile(
      code,
      (element) => this.setState({ element, error: null }),
      (error) => this.setState({ error: error.message }),
    );
  }

  render() {
    const { element, error } = this.state;
    const { activeTab, value, onUrlChange } = this.props;

    return (
      <Wrapper>
        <CodePanel active={activeTab === 'code'}>
          <textarea
            autoFocus
            autoComplete="off"
            defaultValue={value}
            ref={(node) => {
              this.textarea = node;
            }}
            placeholder="Write code here..."
          />
          <CodeError onClose={this.onErrorClose}>{error}</CodeError>
        </CodePanel>
        <PDFPanel active={activeTab === 'pdf'}>
          <PDFViewerWithNoSSR
            document={element}
            onUrlChange={onUrlChange}
            onRenderError={(error) => this.setState({ error })}
          />
        </PDFPanel>
      </Wrapper>
    );
  }
}

export default Repl;
