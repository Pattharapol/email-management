import React, { Component } from "react";
import AddUserAccount from "./components/AddUserAccount";
import UserAccounts from "./components/UserAccount";

class App extends Component {
  state = {
    userAccounts: [
      {
        name: "Pattharapol Lakboon",
        email: "std.61322420115@ubru.ac.th",
      },
      {
        name: "Arturo Vidal",
        email: "ArturoVIdalJuventus@ubru.ac.th",
      },
    ],
  };

  addUserAccount = (user) => {
    this.setState({
      userAccounts: [...this.state.userAccounts, user],
    });
  };

  deleteUserAccount = (name) => {
    let userAccounts = this.state.userAccounts.filter((user) => {
      return user.name !== name;
    });
    this.setState({
      userAccounts,
    });
  };

  render() {
    return (
      <div className="container center">
        <h1 className="blue-text">UserAccount Management</h1>
        <AddUserAccount addUserAccount={this.addUserAccount} />
        <UserAccounts
          UserAccounts={this.state.userAccounts}
          deleteUserAccount={this.deleteUserAccount}
        />
      </div>
    );
  }
}

export default App;
