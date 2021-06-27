import React from 'react';
import Header from './header';

import './style.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
