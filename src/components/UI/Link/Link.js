import styled from '@emotion/styled';

const Wrapper = styled.a`
  font-size: inherit;
  line-height: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.red};
`;

const getHostName = (url) => {
  if (/^https?:\/\//.test(url)) {
    const parser = document.createElement('a');
    parser.href = url;
    return parser.hostname;
  } else {
    return window.location.hostname;
  }
};

const isExternal = (url) => {
  if (!process.browser) return false;

  const host = window.location.hostname;
  const linkHost = getHostName(url);
  return host !== linkHost;
};

const Link = ({ href, ...props }) => {
  const target = isExternal(href) ? '__blank' : undefined;
  return <Wrapper href={href} target={target} {...props} />;
};

export default Link;
