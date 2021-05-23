import React, { Component } from "react";

class AddUserAccount extends Component {
  state = {
    name: "",
    email: "",
  };
  // รองรับการเปลี่ยนแปลงของแต่ละ id
  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  //  Submit Form
  handleSubmit = (e) => {
      // ถ้าไม่มี e.preventDefault(); ข้อมูลจะโชว์แล้วหายไปเลย
    e.preventDefault();
    if (this.state.name !== "" || this.state.email !== "") {
      this.props.addUserAccount(this.state);
      this.setState({
        name: "",
        email: "",
      });
    } else {
      alert("Please Enter Information...");
    }
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">UserAccount Name : </label>
          <input
            type="text"
            id="name"
            placeholder="input name here"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <label htmlFor="email">UserAccount Email : </label>
          <input
            type="text"
            id="email"
            placeholder="input email here"
            onChange={this.handleInputChange}
            value={this.state.email}
          />
          
          <button className="btn">Add New UserAccount</button>
        </form>
      </div>
    );
  }
}

export default AddUserAccount;
