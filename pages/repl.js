import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import { useAsync } from 'react-use';
import { withRouter } from 'next/router';

import media from '../src/styled/media';
import Icon from '../src/components/Icon';
import Logo from '../src/components/Logo';
import Loading from '../src/components/Loading';
import BackButton from '../src/components/BackButton';
import ReplHeader from '../src/components/ReplHeader';
import ReplFooter from '../src/components/ReplFooter';
import GitHubIcon from '../src/components/GitHubIcon';
import { decompress } from '../src/lib/compress';

const Repl = dynamic(import('../src/components/Repl'), { loading: Loading });

const examples = {
  text: require('raw-loader!../examples/text.txt'),
  emoji: require('raw-loader!../examples/emoji.txt'),
  knobs: require('raw-loader!../examples/knobs.txt'),
  styles: require('raw-loader!../examples/styles.txt'),
  resume: require('raw-loader!../examples/resume.txt'),
  images: require('raw-loader!../examples/images.txt'),
  fractals: require('raw-loader!../examples/fractals.txt'),
  'page-wrap': require('raw-loader!../examples/page-wrap.txt'),
  'page-breaks': require('raw-loader!../examples/page-breaks.txt'),
  'quick-start': require('raw-loader!../examples/quick-start.txt'),
  'page-numbers': require('raw-loader!../examples/page-numbers.txt'),
  'mixed-styles': require('raw-loader!../examples/mixed-styles.txt'),
  'inline-styles': require('raw-loader!../examples/inline-styles.txt'),
  'font-register': require('raw-loader!../examples/font-register.txt'),
  'media-queries': require('raw-loader!../examples/media-queries.txt'),
  'disable-wrapping': require('raw-loader!../examples/disable-wrapping.txt'),
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

const ReplPage = ({ router, shareUrl }) => {
  const [code, setCode] = useState('');

  const [initialCode, setInitialCode] = useState('');

  const [activeTab, setActiveTab] = useState('pdf');

  const [documentUrl, setDocumentUrl] = useState(null);

  useAsync(async () => {
    let initialValue = '';
    const { code, example } = router.query;

    if (code) {
      initialValue = setInitialValueFromCode(code);
    } else if (example) {
      initialValue = await setInitialValueFromExample(example);
    } else {
      initialValue = await setInitialValueFromExample('page-wrap');
    }

    setInitialCode(initialValue);
  }, []);

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
          value={initialCode}
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
