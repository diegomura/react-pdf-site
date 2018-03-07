import React from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';

// components
import Link from '../components/Link';
import List from '../components/List';
import Title from '../components/Title';
import Heading from '../components/Heading';
import ListItem from '../components/ListItem';
import Paragraph from '../components/Paragraph';
import CodeBlock from '../components/CodeBlock';
import InlineCode from '../components/InlineCode';
import Blockquote from '../components/Blockquote';
import ThematicBreak from '../components/ThematicBreak';
import Table, { TableRow, TableCell } from '../components/Table';

// assets
import CornerGraphics from '../static/images/corner-graphics.png';
import DocumentGraphic from '../static/images/document-graphic.png';
import index from '../index.md';

const renderers = {
  list: List,
  link: Link,
  table: Table,
  code: CodeBlock,
  heading: Heading,
  tableRow: TableRow,
  listItem: ListItem,
  tableCell: TableCell,
  paragraph: Paragraph,
  inlineCode: InlineCode,
  blockquote: Blockquote,
  thematicBreak: ThematicBreak,
};

const CornerGraphicsImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

const DocumentGraphicImage = styled.img`
  margin: 50px;
  width: 210px;
`;

const Home = () => (
  <div>
    <Title level={1} />
    <DocumentGraphicImage src={DocumentGraphic} />
    <Markdown source={index} renderers={renderers} />
    <CornerGraphicsImage src={CornerGraphics} />
  </div>
);

export default Home;
