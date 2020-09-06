import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EditDiscount extends Component {
  constructor(props) {
    super(props);

    this.onChangePublishingTitle = this.onChangePublishingTitle.bind(this);
    this.onChangeMarketPrice = this.onChangeMarketPrice.bind(this);
    this.onChangePercentage = this.onChangePercentage.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeAmmount = this.onChangeAmmount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      publishingTitle: '',
      marketPrice: '',
      percentage: '',
      date: new Date(),
      ammount:'',
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
  
    

    const Discount = {
      publishingTitle: this.state.publishingTitle,
      marketPrice: this.state.marketPrice,
      percentage: this.state.percentage,
      date: this.state.date,
      ammount: this.state.ammount,
    };

    console.log(Discount);

    axios
      .post(
        "http://localhost:5000/discounts/update/" + this.props.match.params.id,
        Discount
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit Discount</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>PublishingTitle: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.publishingTitle}
              onChange={this.onChangePublishingTitle}
            >
             
            </select>
          </div>
          <div className="form-group">
            <label>marketPrice: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.marketPrice}
              onChange={this.onChangeMarketPrice}
            />
          </div>
          <div className="form-group">
            <label>percentage: </label>
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
              value="Edit Discount"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
