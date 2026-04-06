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
  faPaintBrush,
  faChevronDown,
  faBorderStyle,
  faChevronLeft,
  faChevronRight,
  faArrowRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const BUNDLED_ICON_TYPES = {
  eye: faEye,
  cogs: faCogs,
  copy: faCopy,
  menu: faBars,
  save: faSave,
  file: faFile,
  close: faTimes,
  github: faGithub,
  download: faDownload,
  paragraph: faParagraph,
  'share-alt': faShareAlt,
  'arrow-left': faArrowLeft,
  'arrow-right': faArrowRight,
  'paint-brush': faPaintBrush,
  'border-style': faBorderStyle,
  'chevron-left': faChevronLeft,
  'chevron-down': faChevronDown,
  'chevron-right': faChevronRight,
};

const Icon = ({
  type,
  opacity,
  size = 14,
  className,
  style = {},
  onClick,
  ...props
}) => {
  if (!BUNDLED_ICON_TYPES[type]) {
    console.warn(`${type} icon type not included in bundle.`);
    return null;
  }

  if (onClick) {
    return (
      <a onClick={onClick} className={className} style={{ cursor: 'pointer' }}>
        <FontAwesomeIcon
          icon={BUNDLED_ICON_TYPES[type]}
          style={{ opacity, width: size, height: size, ...style }}
          {...props}
        />
      </a>
    );
  }

  return (
    <FontAwesomeIcon
      className={className}
      icon={BUNDLED_ICON_TYPES[type]}
      style={{ opacity, width: size, height: size, ...style }}
      {...props}
    />
  );
};

export default Icon;
