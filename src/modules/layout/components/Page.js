import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';

const Page = ({children}) => (
  <>
    <Header />
    <Content>{children}</Content>
  </>
);

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
