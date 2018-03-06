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
import Blockquote from '../components/Blockquote';
import Table, { TableRow, TableCell } from '../components/Table';

// assets
import CornerGraphics from '../static/images/corner-graphics.png';
import DocumentGraphic from '../static/images/document-graphic.png';
import index from '../index.md';

const renderers = {
  heading: Heading,
  code: CodeBlock,
  list: List,
  link: Link,
  table: Table,
  tableRow: TableRow,
  tableCell: TableCell,
  listItem: ListItem,
  blockquote: Blockquote,
  paragraph: Paragraph,
};

const CornerGraphicsImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

const DocumentGraphicImage = styled.img`
  margin: 50px;
  width: 210px
`;

const Home = () =>
  <div>
    <CornerGraphicsImage src={CornerGraphics} />
    <Title />
    <DocumentGraphicImage src={DocumentGraphic} />
    <Markdown source={index} renderers={renderers} />
  </div>;

export default Home;
