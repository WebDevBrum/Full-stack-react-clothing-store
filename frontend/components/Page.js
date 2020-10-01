import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const StyledPage = styled.div`
  background: white;
  color: black;
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background: red;
`;

// So we want the header to go all the way across  but the Inner to  be constrained to a max width.

class Page extends Component {
  render() {
    return (
      <StyledPage>
        <Meta />
        <Header />
        <Inner>{this.props.children}</Inner>
      </StyledPage>
    );
  }
}

export default Page;
