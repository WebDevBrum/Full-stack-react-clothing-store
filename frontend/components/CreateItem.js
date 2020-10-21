import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import FormatMoney from '../lib/formatMoney';

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0,
  };

  handleChange = (e) => {
    const {name, type, value} = e.target;
    this.setState({title: value});
  }

  render() {
    return (
      <Form>
        <fieldset>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="title"
              required
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
      </Form>
    );
  }
}

export default CreateItem;
