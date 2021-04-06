import React from 'react';
import Router from 'next/router';

const onBackClick = () => {
  const lastPage = document.referrer || '';
  const currentHost = window.location.host;

  if (lastPage.includes(currentHost)) {
    Router.back();
  } else {
    Router.push('/');
  }
};

const BackButton = ({ className, children }) => (
  <button className={className} onClick={onBackClick}>
    {children}
  </button>
);

export default BackButton;
