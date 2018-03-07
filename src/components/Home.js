import React from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';
import { browserHistory } from 'react-router';

// components
import Link from './Link';
import List from './List';
import Title from './Title';
import Button from './Button';
import Heading from './Heading';
import ListItem from './ListItem';
import Paragraph from './Paragraph';
import CodeBlock from './CodeBlock';
import InlineCode from './InlineCode';
import Blockquote from './Blockquote';
import ThematicBreak from './ThematicBreak';
import Table, { TableRow, TableCell } from './Table';

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

const DocumentGraphicImage = styled.img.attrs({
  src: DocumentGraphic,
})`
  margin: 50px;
  width: 210px;
`;

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Hero = () => (
  <HeroWrapper>
    <DocumentGraphicImage />
    <Button onClick={() => browserHistory.push('/repl')}>Try it out!</Button>
  </HeroWrapper>
);

const Home = () => (
  <div>
    <Title />
    <Hero />
    <Markdown source={index} renderers={renderers} />
    <CornerGraphicsImage src={CornerGraphics} />
  </div>
);

export default Home;
