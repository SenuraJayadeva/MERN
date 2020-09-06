import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Discount = (props) => (
  <tr>
    <td>{props.discount.publishingTitle}</td>
    <td>{props.discount.marketPrice}</td>
    <td>{props.discount.percentage}</td>
    <td>{props.discount.validDate}</td>
    <td>{props.discount.ammount}</td>
    <td>
      <Link to={"/edit/" + props.discount._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteDiscount(props.discount._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class DiscountsList extends Component {
  constructor(props) {
    super(props);

    this.deleteDiscount = this.deleteDiscount.bind(this);

    this.state = { discounts: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/discounts/")
      .then((response) => {
        this.setState({ discounts: response.data });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteDiscount(id) {
    axios.delete("http://localhost:4000/discounts/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      discounts: this.state.discounts.filter((el) => el._id !== id),
    });
  }

  discountList() {
    return this.state.discounts.map((currentdiscount) => {
      return (
        <Discount
          discount={currentdiscount}
          deleteDiscount={this.deleteDiscount}
          key={currentdiscount._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Discounts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Publishing Title</th>
              <th>Market Price</th>
              <th>Percentage</th>
              <th>Date</th>
              <th>Ammount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.discountList()}</tbody>
        </table>
      </div>
    );
  }
}
