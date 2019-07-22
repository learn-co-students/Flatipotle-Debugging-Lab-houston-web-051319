import React, { Component } from "react";
import ProteinForm from "./ProteinForm";
import FillingForm from "./FillingForm";
import ToppingForm from "./ToppingForm";
import SideForm from "./SideForm";
import Order from "./Order";

const DEFAULT_STATE = {
  protein: [],
  fillings: [],
  toppings: [],
  sides: []
};

class Form extends Component {
  state = {
    ...DEFAULT_STATE
  };

  handleSubmit = e => {
    e.preventDefault();
    document.getElementById("order-form").reset();
    // this.props.addOrder(
    //   e.target.protein.value,
    //   e.target.fillings.value,
    //   e.target.toppings.value
    // );
    // console.log(e.target.protein.value);

    this.setState({
      ...DEFAULT_STATE
    });
  };

  handleChange = event => {
    let itemType = event.target.name;
    let item = event.target.value;

    !this.state[`${itemType}`].includes(item)
      ? this.setState({
          [itemType]: this.state[`${itemType}`].concat(item)
        })
      : this.setState({
          [itemType]: this.state[`${itemType}`].filter(ingr => ingr !== item)
        });
  };

  render() {
    return (
      <div className="ui raised container segment">
        <h1 className="ui block header">Order Form</h1>
        <form className="ui form" id="order-form" onSubmit={this.handleSubmit}>
          <ProteinForm
            protein={this.state.protein}
            handleChange={this.handleChange}
          />

          <FillingForm
            fillings={this.state.fillings}
            handleChange={this.handleChange}
          />

          <ToppingForm
            toppings={this.state.toppings}
            handleChange={this.handleChange}
          />

          <SideForm sides={this.state.sides} handleChange={this.handleChange} />

          <Order
            protein={this.state.protein}
            fillings={this.state.fillings}
            toppings={this.state.toppings}
            sides={this.state.sides}
          />

          <br />

          <button
            className="ui blue big button"
            type="submit"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
