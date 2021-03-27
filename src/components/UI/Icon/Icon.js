/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faCopy,
  faCogs,
  faSave,
  faFile,
  faBars,
  faShareAlt,
  faDownload,
  faParagraph,
  faArrowLeft,
  faTextHeight,
  faPaintBrush,
  faBorderStyle,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const BUNDLED_ICON_TYPES = {
  eye: faEye,
  cogs: faCogs,
  copy: faCopy,
  menu: faBars,
  save: faSave,
  file: faFile,
  github: faGithub,
  download: faDownload,
  paragraph: faParagraph,
  'share-alt': faShareAlt,
  'arrow-left': faArrowLeft,
  'paint-brush': faPaintBrush,
  'border-style': faBorderStyle,
  'chevron-left': faChevronLeft,
  'chevron-right': faChevronRight,
};

const IconWrapper = ({ onClick, children }) => {
  if (!onClick) return children;

  return (
    <a onClick={onClick} style={{ cursor: 'pointer' }}>
      {children}
    </a>
  );
};

const Icon = ({ type, opacity, size = 14, style = {}, onClick, ...props }) => {
  console.log(type);
  if (!BUNDLED_ICON_TYPES[type]) {
    console.warn(
      `${type} icon type not included in bundle. Please add it in @foro/react-common/components/Icon.js`,
    );
    return null;
  }

  return (
    <IconWrapper onClick={onClick}>
      <FontAwesomeIcon
        icon={BUNDLED_ICON_TYPES[type]}
        style={{ opacity, width: size, height: size, ...style }}
        {...props}
      />
    </IconWrapper>
  );
};

export default Icon;
