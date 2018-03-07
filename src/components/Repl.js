import React from 'react';
import styled from 'styled-components';
import CodeMirror from "codemirror";
import Paragraph from './Paragraph';
import PDFViewer from './PDFViewer';
import Button from '../components/Button';
import transpile from '../utils/transpile';

// codemirror setup
import 'codemirror/mode/jsx/jsx';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/closetag.js';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/display/placeholder.js';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;

const CodePanel = styled.div`
  flex: 1;
  overflow: hidden;
`;

const PDFPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DEFAULT_CODE_MIRROR_OPTIONS = {
  autoCloseBrackets: true,
  keyMap: "sublime",
  lineNumbers: true,
  matchBrackets: true,
  mode: "text/jsx",
  showCursorWhenSelecting: true,
  styleActiveLine: true,
  tabWidth: 2,
  autoCloseTags: true
};

class Repl extends React.PureComponent {
  state = {
    element: null
  };

  componentDidMount() {
    this._codeMirror = CodeMirror.fromTextArea(
      this.textarea,
      DEFAULT_CODE_MIRROR_OPTIONS,
    );
    this._codeMirror.on("change", this.onChange.bind(this));
  }

  componentWillUnmount() {
    if (this._codeMirror) {
      this._codeMirror.toTextArea();
    }
  }

  onChange({ doc }) {
    const code = doc.getValue();

    try {
      transpile(code, element => {
        this.setState({ element })
      });
    } catch (e) {
      // noob
    }
  }

  render() {
    return (
      <Wrapper>
        <CodePanel>
          <textarea
            autoComplete="off"
            autoFocus={true}
            defaultValue={this.props.value}
            ref={node => this.textarea = node}
            placeholder="Write code here..."
          />
        </CodePanel>
        <PDFPanel>
          <PDFViewer
            document={this.state.element}
            onUrlChange={this.props.onUrlChange}
          />
        </PDFPanel>
      </Wrapper>
    );
  }
}

export default Repl;
