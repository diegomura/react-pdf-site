import 'codemirror/mode/jsx/jsx';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/display/placeholder';
import 'codemirror/addon/selection/active-line';

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import CodeMirror from 'codemirror';
import PDFViewer from './PDFViewer';
import ErrorMessage from './ErrorMessage';
import transpile from '../lib/transpile';
import { Document, Page, Text } from '@react-pdf/react-pdf';

const debounceTranspile = debounce(transpile, 1000);

const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;

const CodePanel = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`;

const PDFPanel = styled.div`
  flex: 1;
  display: flex;
  overflow: scroll;
  align-items: center;
  justify-content: center;
`;

const CodeError = styled(ErrorMessage)`
  bottom: 0;
  width: 100%;
  z-index: 1000;
  position: absolute;
`;

const DEFAULT_CODE_MIRROR_OPTIONS = {
  autoCloseBrackets: true,
  keyMap: 'sublime',
  lineNumbers: true,
  matchBrackets: true,
  mode: 'text/jsx',
  showCursorWhenSelecting: true,
  styleActiveLine: true,
  tabWidth: 2,
  autoCloseTags: true,
};

class Repl extends React.PureComponent {
  state = {
    element: null,
    error: null,
  };

  componentDidMount() {
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

  componentWillReceiveNewProps(newProps) {
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
      element => this.setState({ element, error: null }),
      error => this.setState({ error: error.message }),
    );
  }

  render() {
    return (
      <Wrapper>
        <CodePanel>
          <textarea
            autoFocus
            autoComplete="off"
            defaultValue={this.props.value}
            ref={node => {
              this.textarea = node;
            }}
            placeholder="Write code here..."
          />
          <CodeError onClose={this.onErrorClose}>{this.state.error}</CodeError>
        </CodePanel>
        <PDFPanel>
          {/* <Document>
            <Page>
              <Text>Hola</Text>
            </Page>
          </Document> */}
          <PDFViewer
            document={this.state.element}
            onUrlChange={this.props.onUrlChange}
          />
        </PDFPanel>
      </Wrapper>
    );
  }
}

Repl.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onUrlChange: PropTypes.func.isRequired,
};

export default Repl;
