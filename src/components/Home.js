import React from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';
import { browserHistory } from 'react-router';

// components
import Link from './Link';
import List from './List';
import Title from './Title';
import Button from './Button';
import ListItem from './ListItem';
import Paragraph from './Paragraph';
import CodeBlock from './CodeBlock';
import InlineCode from './InlineCode';
import Blockquote from './Blockquote';
import ThematicBreak from './ThematicBreak';
import { H1, H2, H3, H4, H5, H6 } from './Heading';
import Table, { TableRow, TableCell, TableHeading } from './Table';

// assets
import CornerGraphics from '../static/images/corner-graphics.png';
import DocumentGraphic from '../static/images/document-graphic.png';
import Content from '../../docs/index.md';

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
  code: CodeBlock,
  th: TableHeading,
  hr: ThematicBreak,
  inlineCode: InlineCode,
  blockquote: Blockquote,
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
    <Content components={components} />
    <CornerGraphicsImage src={CornerGraphics} />
  </div>
);

export default Home;
