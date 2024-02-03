import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import { useAsync } from 'react-use';
import { withRouter } from 'next/router';
import React, { useState, useMemo } from 'react';

import media from '../src/styled/media';
import Icon from '../src/components/UI/Icon';
import Logo from '../src/components/UI/Logo';
import Spinner from '../src/components/UI/Spinner';
import BackButton from '../src/components/Repl/BackButton';
import ReplHeader from '../src/components/Repl/ReplHeader';
import ReplFooter from '../src/components/Repl/ReplFooter';
import GitHubIcon from '../src/components/Layout/GitHubIcon';
import { compress, decompress } from '../src/lib/compress';

const Repl = dynamic(import('../src/components/Repl'), { loading: Spinner });

const examples = {
  g: require('raw-loader!../examples/g.txt'),
  svg: require('raw-loader!../examples/svg.txt'),
  line: require('raw-loader!../examples/line.txt'),
  path: require('raw-loader!../examples/path.txt'),
  rect: require('raw-loader!../examples/rect.txt'),
  text: require('raw-loader!../examples/text.txt'),
  emoji: require('raw-loader!../examples/emoji.txt'),
  knobs: require('raw-loader!../examples/knobs.txt'),
  circle: require('raw-loader!../examples/circle.txt'),
  styles: require('raw-loader!../examples/styles.txt'),
  resume: require('raw-loader!../examples/resume.txt'),
  images: require('raw-loader!../examples/images.txt'),
  svgtext: require('raw-loader!../examples/svgtext.txt'),
  ellipse: require('raw-loader!../examples/ellipse.txt'),
  polygon: require('raw-loader!../examples/polygon.txt'),
  clippath: require('raw-loader!../examples/clippath.txt'),
  polyline: require('raw-loader!../examples/polyline.txt'),
  fractals: require('raw-loader!../examples/fractals.txt'),
  debugging: require('raw-loader!../examples/debugging.txt'),
  'page-wrap': require('raw-loader!../examples/page-wrap.txt'),
  'page-breaks': require('raw-loader!../examples/page-breaks.txt'),
  'quick-start': require('raw-loader!../examples/quick-start.txt'),
  'page-numbers': require('raw-loader!../examples/page-numbers.txt'),
  'mixed-styles': require('raw-loader!../examples/mixed-styles.txt'),
  'inline-styles': require('raw-loader!../examples/inline-styles.txt'),
  lineargradient: require('raw-loader!../examples/lineargradient.txt'),
  radialgradient: require('raw-loader!../examples/radialgradient.txt'),
  'font-register': require('raw-loader!../examples/font-register.txt'),
  'media-queries': require('raw-loader!../examples/media-queries.txt'),
  'fixed-components': require('raw-loader!../examples/fixed-components.txt'),
  'disable-wrapping': require('raw-loader!../examples/disable-wrapping.txt'),
  'orphans-and-widows': require('raw-loader!../examples/orphans-and-widows.txt'),
  'disable-hyphenation': require('raw-loader!../examples/disable-hyphenation.txt'),
  'hyphenation-callback': require('raw-loader!../examples/hyphenation-callback.txt'),
  'breakable-unbreakable': require('raw-loader!../examples/breakable-unbreakable.txt'),
};

const NAV_WIDTH = 64;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: calc(100vw - ${NAV_WIDTH}px);

  ${media.desktop} {
    width: 100vw;
  }
`;

const Main = styled.main`
  display: flex;
  height: 100vh;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: ${NAV_WIDTH}px;
  flex-direction: column;
  background-color: #f8f8f8;

  ${media.desktop} {
    display: none;
  }
`;

const Back = styled(BackButton)`
  border: 0px;
  width: 100%;
  height: 64px;
  color: white;
  display: flex;
  outline: none;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  background: ${({ theme }) => theme.red};
`;

const NavBody = styled.div`
  flex: 1;
`;

const SmallLogo = styled(Logo)`
  padding: 0px;
  margin-top: 64px;
`;

const ReplPage = ({ router }) => {
  const [code, setCode] = useState('');

  const [activeTab, setActiveTab] = useState('pdf');

  const [documentUrl, setDocumentUrl] = useState(null);

  const query = router.query;

  const mount = useAsync(async () => {
    let initialValue = '';

    if (query.code) {
      initialValue = setInitialValueFromCode(query.code);
    } else if (query.example) {
      initialValue = await setInitialValueFromExample(query.example);
    } else {
      initialValue = await setInitialValueFromExample('page-wrap');
    }

    setCode(initialValue || '');
  }, [query.code, query.example]);

  const shareUrl = useMemo(() => {
    return (
      process.browser &&
      `${window.location.protocol}//${
        window.location.host
      }/repl?code=${compress(code)}`
    );
  }, [code]);

  if (mount.loading) return null;

  return (
    <Main>
      <Nav>
        <Back>
          <Icon type="arrow-left" label="Back" size={18} />
        </Back>
        <NavBody>
          <SmallLogo size="32px" />
        </NavBody>
        <GitHubIcon />
      </Nav>
      <Section>
        <ReplHeader activeTab={activeTab} onTabClick={setActiveTab} />
        <Repl
          value={code}
          activeTab={activeTab}
          onChange={setCode}
          onUrlChange={setDocumentUrl}
        />
        <ReplFooter code={code} shareUrl={shareUrl} documentUrl={documentUrl} />
      </Section>
    </Main>
  );
};

const setInitialValueFromCode = (code) => {
  let initialValue = '';

  try {
    initialValue = decompress(code);
  } catch (e) {
    // noob
  }

  return initialValue;
};

const setInitialValueFromExample = async (example) => {
  let initialValue = '';

  if (examples[example]) {
    initialValue = await examples[example];
  }

  return initialValue;
};

export default withRouter(ReplPage);
