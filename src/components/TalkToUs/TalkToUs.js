import styled from '@emotion/styled';
import { useLocalStorage, useTimeout } from 'react-use';

import Icon from '../UI/Icon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 20px;
  padding: 20px 40px 20px 20px;
  transition: right 0.3s;
  gap: 10px;
  background-color: ${({ theme }) => theme.lightRed};
  box-shadow: 5px 5px ${({ theme }) => theme.red};
`;

const Close = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Text = styled.p`
  margin: 0;
  font-weight: bold;
`;

const Link = styled.a`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.red};
  text-align: right;
  text-decoration: none;
`;

function TalkToUs() {
  const [isReady] = useTimeout(1000);

  const [closed, setClosed] = useLocalStorage('talk-to-us-closed', false);

  return (
    <Wrapper style={{ right: !isReady() || closed ? '-400px' : '20px' }}>
      <Close type="close" onClick={() => setClosed(true)} />

      <Text>Generating PDFs in bulk?</Text>

      <Link href="https://axxy020tu5c.typeform.com/to/eU21hXDy" target="_blank">
        Talk to us
        <Icon type="arrow-right" />
      </Link>
    </Wrapper>
  );
}

export default TalkToUs;
