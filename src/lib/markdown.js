import { withProps } from 'recompose';

import Link from '../components/Link';
import List from '../components/List';
import ListItem from '../components/ListItem';
import Paragraph from '../components/Paragraph';
import CodeBlock from '../components/CodeBlock';
import InlineCode from '../components/InlineCode';
import Blockquote from '../components/Blockquote';
import ThematicBreak from '../components/ThematicBreak';
import { H1, H2, H3, H4, H5, H6 } from '../components/Heading';
import Table, { TableRow, TableCell, TableHeading } from '../components/Table';

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  a: Link,
  ul: List,
  table: Table,
  p: Paragraph,
  tr: TableRow,
  li: ListItem,
  td: TableCell,
  pre: CodeBlock,
  th: TableHeading,
  hr: ThematicBreak,
  inlineCode: InlineCode,
  blockquote: Blockquote,
};

export default components;
