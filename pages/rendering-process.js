import React from 'react';
import withTheme from '../src/styled/withTheme';
import { injectComponents } from '../src/lib/markdown';
import Content from '../docs/rendering-process.md';

const EnhancedContent = injectComponents(Content);

const QuickStartGuide = () => (
  <EnhancedContent />
);

export default withTheme(QuickStartGuide);
