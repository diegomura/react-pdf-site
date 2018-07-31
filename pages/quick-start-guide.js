import React from 'react';
import withTheme from '../src/styled/withTheme';
import { injectComponents } from '../src/lib/markdown';
import Content from '../docs/quick-start.md';

const EnhancedContent = injectComponents(Content);

const QuickStartGuide = () => (
  <EnhancedContent />
);

export default withTheme(QuickStartGuide);
