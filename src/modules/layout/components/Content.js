import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Content = ({children}) => (
  <Container>
    <Row>
      <Col>{children}</Col>
    </Row>
  </Container>
);

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
