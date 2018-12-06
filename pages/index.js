import React, { Fragment } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Logo from '../src/components/Logo'
import Title from '../src/components/Title'
import EditButton from '../src/components/EditButton'
import Button from '../src/components/Button'
import media from '../src/styled/media'
import { injectComponents } from '../src/lib/markdown'
import Content from '../docs/quick-start.md'

const EnhancedContent = injectComponents(Content)

const DocumentGraphicImage = styled.img.attrs({
  src: '/static/images/document-graphic.png'
})`
  margin: 50px;
  width: 210px;
  ${media.phone`
    width: 130px;
    margin: 50px 30px;
  `};
`

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Hero = () => (
  <HeroWrapper>
    <DocumentGraphicImage />
    <Link href="/repl">
      <Button primary>Try it out!</Button>
    </Link>
  </HeroWrapper>
)

const LogoBanner = styled(Logo)`
  padding: 0 0 3em 0;
  display: none;
  ${media.phone`display: flex;`};
`

const Home = () => (
  <Fragment>
    <EditButton to="https://github.com/react-pdf/site/blob/master/docs/quick-start.md" />
    <LogoBanner size="37px" rotate withText />
    <Title />
    <Hero />
    <EnhancedContent />
  </Fragment>
)

export default Home
