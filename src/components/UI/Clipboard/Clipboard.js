import React, { useState } from 'react';
import { Tooltip } from 'react-tippy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Clipboard = ({ tooltip, children, ...props }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Tooltip open={copied} title={tooltip} position="top" arrow>
      <CopyToClipboard onCopy={onCopy} {...props}>
        {children}
      </CopyToClipboard>
    </Tooltip>
  );
};

export default Clipboard;
