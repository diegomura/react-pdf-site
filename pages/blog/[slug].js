import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { parse, format } from 'date-fns';

import media from '../../src/styled/media';
import Icon from '../../src/components/UI/Icon';
import Link from '../../src/components/UI/Link';
import { H1 } from '../../src/components/UI/Heading';
import * as Announcing20 from '../../blog/announcing-react-pdf-v2.md';

const BLOG_POSTS = {
  'announcing-react-pdf-v2': Announcing20,
};

const Main = styled.main`
  display: flex;
  min-height: 100%;

  h1,
  h2,
  h3,
  h4 {
    font-weight: 400 !important;
  }

  h2 {
    margin-top: 70px;
  }

  ul,
  li {
    column-count: 1;
  }
`;

const Section = styled.article`
  flex: 1;
  width: 100%;
  margin: 0 auto;
  padding: 110px;
  max-width: 1100px;
  overflow-y: ${(props) => props.menuOpened && 'hidden'};

  ${media.tablet} {
    padding: 4em;
  }

  ${media.phone} {
    padding: 1.5em;
    padding-bottom: 3em;
  }
`;

const Back = styled(Link)`
  display: block;
  font-size: 16px;
  margin-bottom: 80px;
  color: ${(props) => props.theme.gray1};

  span {
    margin-left: 5px;
  }
`;

const CornerGraphicsImage = styled.img`
  top: 0;
  right: 0;
  width: 15%;
  position: absolute;
  pointer-events: none;

  ${media.phone} {
    display: none;
  }
`;

const Metadata = styled.div`
  margin-bottom: 60px;
  color: ${(props) => props.theme.gray1};
`;

const Separator = styled.span`
  margin: 0 10px;
`;

const Profile = styled.a`
  text-decoration: none;
  transition: 0.3s linear all;
  color: ${(props) => props.theme.gray1};

  &:hover {
    color: ${(props) => props.theme.red};
  }
`;

const parseDate = (value) => {
  const d = parse(value, 'MM/dd/yyyy', new Date());
  return format(d, 'MMMM do, yyyy');
};

const Blog = ({ slug }) => {
  const Post = BLOG_POSTS[slug];
  const metadata = Post.metadata;

  return (
    <Main>
      <Head>
        <meta
          property="og:image"
          content={metadata.image?.url || '/images/og-banner.png'}
        />
        <meta
          property="og:image:width"
          content={metadata.image?.width || '950'}
        />
        <meta
          property="og:image:height"
          content={metadata.image?.height || '650'}
        />
      </Head>

      <Section>
        <Back href="/">
          <Icon type="arrow-left" />
          <span>Go to Site</span>
        </Back>
        <H1>{metadata?.title}</H1>

        <Metadata>
          <span>By </span>

          <Profile
            href={`https://github.com/${metadata.author}`}
            target="__blank"
          >
            @{metadata.author}
          </Profile>

          <Separator>|</Separator>

          <span>{parseDate(metadata.date)}</span>
        </Metadata>

        <Post.default />

        <CornerGraphicsImage src="/images/corner-graphics.png" />
      </Section>
    </Main>
  );
};

export async function getServerSideProps(context) {
  const slug = context.query.slug;
  const postExists = !!BLOG_POSTS[slug];

  if (!postExists) {
    context.res.statusCode = 302;
    context.res.setHeader('Location', `/404`);
    return { props: {} };
  }

  return { props: { slug } };
}

export default Blog;
