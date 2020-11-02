import Link from '../components/UI/Link';
import List from '../components/UI/List';
import ListItem from '../components/UI/ListItem';
import Paragraph from '../components/UI/Paragraph';
import CodeBlock from '../components/UI/CodeBlock';
import InlineCode from '../components/UI/InlineCode';
import Blockquote from '../components/UI/Blockquote';
import ThematicBreak from '../components/UI/ThematicBreak';
import { H1, H2, H3, H4, H5, H6 } from '../components/UI/Heading';
import Table, { TableRow, TableCell, TableHeading } from '../components/UI/Table';

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
