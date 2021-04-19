import React, { useRef, useEffect } from 'react';

let CodeMirror;

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

const CodeEditor = ({ value, onLoad, onChange }) => {
  const textarea = useRef(null);

  const codeMirror = useRef(null);

  const changeHandler = useRef(onChange);

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

    instance.on('change', ({ doc }) => {
      const code = doc.getValue();
      changeHandler.current?.(code);
    });

    onLoad?.()

    return () => instance?.toTextArea();
  }, []);

  useEffect(() => {
    changeHandler.current = onChange;
  }, [onChange]);

  return (
    <textarea
      autoFocus
      ref={textarea}
      autoComplete="off"
      defaultValue={value}
      placeholder="Write code here..."
    />
  );
};

export default CodeEditor;
