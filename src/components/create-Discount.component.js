import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class CreateDiscounts extends Component {
  //implement constructor

  constructor(props) {
    super(props);

    //implement binding

    this.onChangePublishingTitle = this.onChangePublishingTitle.bind(this);
    this.onChangeMarketPrice = this.onChangeMarketPrice.bind(this);
    this.onChangePercentage = this.onChangePercentage.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeAmmount = this.onChangeAmmount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      publishingTitle: "",
      marketPrice: "",
      percentage: "",
      date: new Date(),
      ammount: "",
    };
  }

  onChangePublishingTitle(e) {
    this.setState({
      publishingTitle: e.target.value,
    });
  }

  onChangeMarketPrice(e) {
    this.setState({
      marketPrice: e.target.value,
    });
  }

  onChangePercentage(e) {
    this.setState({
      percentage: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onChangeAmmount(e) {
    this.setState({
      ammount: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const Discounts = {
      publishingTitle: this.state.publishingTitle,
      marketPrice: this.state.marketPrice,
      percentage: this.state.percentage,
      ammount: this.state.ammount,
      validDate: this.state.date,
    };

    console.log(Discounts);

    axios
      .post("http://localhost:4000/discounts/create-discount", Discounts)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Discounts</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Publishing Title: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.publishingTitle}
              onChange={this.onChangePublishingTitle}
            />
          </div>
          <div className="form-group">
            <label>Market Price: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.marketPrice}
              onChange={this.onChangeMarketPrice}
            />
          </div>
          <div className="form-group">
            <label>Percentage: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.percentage}
              onChange={this.onChangePercentage}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
            <div className="form-group">
              <label>Ammount: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.ammount}
                onChange={this.onChangeAmmount}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value=" Create Discount"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
