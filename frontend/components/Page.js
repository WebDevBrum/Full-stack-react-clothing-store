import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <p>Hey I'm the page Component!</p>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
