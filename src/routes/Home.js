import React from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';
import Title from '../components/Title';
import Heading from '../components/Heading';
import CodeBlock from '../components/CodeBlock';
import CornerGraphics from '../static/images/corner-graphics.png';
import DocumentGraphic from '../static/images/document-graphic.png';
import index from '../index.md';

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
    <Markdown source={index} renderers={{ Heading, CodeBlock }} />
  </div>;

export default Home;
