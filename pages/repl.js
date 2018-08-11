import React from 'react';
import dynamic from 'next/dynamic';
import Router, { withRouter } from 'next/router';
import styled from 'styled-components';
import { compose, withState, withHandlers, withProps, lifecycle } from 'recompose';
import Icon from '../src/components/Icon';
import Logo from '../src/components/Logo';
import Loading from '../src/components/Loading';
import BackButton from '../src/components/BackButton';
import ReplHeader from '../src/components/ReplHeader';
import ReplFooter from '../src/components/ReplFooter';
import GitHubIcon from '../src/components/GitHubIcon';
import { compress, decompress } from '../src/lib/compress';
import media from '../src/styled/media';

const Repl = dynamic(import('../src/components/Repl'), {
  ssr: false,
  loading: Loading
});

const examples = {
  text: require('raw-loader!../examples/text.txt'),
  emoji: require('raw-loader!../examples/emoji.txt'),
  ruler: require('raw-loader!../examples/ruler.txt'),
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
  'media-queries': require('raw-loader!../examples/media-queries.txt'),
  'disable-wrapping': require('raw-loader!../examples/disable-wrapping.txt'),
  'styled-components': require('raw-loader!../examples/styled-components.txt'),
  'breakable-unbreakable': require('raw-loader!../examples/breakable-unbreakable.txt'),
};

const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  height: 100vh;
`;

const Nav = styled.nav`
  min-width: 64px;
  max-width: 64px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f8f8f8;

  ${media.desktop`
    display: none;
  `}
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

const ReplPage = ({
  code,
  initialCode,
  shareUrl,
  activeTab,
  documentUrl,
  onChange,
  onUrlChange,
  setActiveTab,
}) => (
  <Main>
    <Nav>
      <Back>
        <Icon type="arrow-left" size={18} />
      </Back>
      <NavBody>
        <SmallLogo size="32px" />
      </NavBody>
      <GitHubIcon />
    </Nav>
    <Section>
      <ReplHeader
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />
      <Repl
        value={initialCode}
        activeTab={activeTab}
        onChange={onChange}
        onUrlChange={onUrlChange}
      />
      <ReplFooter
        code={code}
        shareUrl={shareUrl}
        documentUrl={documentUrl}
      />
    </Section>
  </Main>
);

const onChange = props => code => {
  props.setCode(code);
};

const onUrlChange = props => url => {
  props.setDocumentUrl(url);
};

const setShareUrl = ({ code }) => ({
  shareUrl: process.browser &&
    `${window.location.protocol}//${window.location.host}/repl?code=${compress(code)}`,
});

const setInitialValueFromCode = code => {
  let initialValue = '';

  try {
    initialValue = decompress(code);
  } catch (e) {
    // noob
  }

  return initialValue;
};

const setInitialValueFromExample = async example => {
  let initialValue = '';

  if (examples[example]) {
    initialValue = await examples[example];
  }

  return initialValue;
};

async function componentDidMount() {
  let initialValue = '';
  const { code, example } = this.props.router.query;

  if (code) {
    initialValue = setInitialValueFromCode(code);
  } else if (example) {
    initialValue = await setInitialValueFromExample(example);
  } else {
    initialValue = await setInitialValueFromExample('page-wrap');
  }

  this.props.setInitialCode(initialValue);
}


ReplPage.defaultProps = {
  code: null,
  documentUrl: null,
};

export default compose(
  withRouter,
  withState('code', 'setCode', ''),
  withState('initialCode', 'setInitialCode', ''),
  withState('activeTab', 'setActiveTab', 'pdf'),
  withState('documentUrl', 'setDocumentUrl', null),
  lifecycle({ componentDidMount }),
  withProps(setShareUrl),
  withHandlers({ onChange, onUrlChange })
)(ReplPage);
