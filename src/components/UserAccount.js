import React from "react";

const UserAccounts = ({ UserAccounts , deleteUserAccount}) => {
  // const {id, name, age, faculty} = props;
  const userAccountList = UserAccounts.map((user) => {
    return (
      <div className="card" key={user.name}>
        <div>NAME : {user.name}</div>
        <div>EMAIL : {user.email}</div>
        <button className="btn red darken-1" onClick={()=>deleteUserAccount(user.name)}>Delete User Account</button>
      </div>
    );
  });
  return <div>{userAccountList}</div>;
};

export default UserAccounts;