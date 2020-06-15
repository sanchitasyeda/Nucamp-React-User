import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser } from "./actions/userActions"

export class Users extends Component {
  render() {
    let userJsx =
      this.props.reduxUserState && this.props.reduxUserState.length > 0 ? (
        this.props.reduxUserState.map((user) => (
          <div className="card col-12 col-md-6 p-2" key={user.id}>
            <h4>{user.name}</h4>
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No users exist</p>
      );
    // if(this.props.userArray) {

    // } else {   }

    // (this.props.userArray) IF return statement ELSE

    return (
      <div>
        <h2>Users</h2>

        <div className="container">
          <div className="row">{userJsx}</div>
        </div>
      </div>
    );
  }
}

// First parenthesis
//First argument - mapStateToProps - get your redux state/data
// Second argument - mapDispatchToProps - get your functions that can change the redux state
// Second parenthesis - put your component name

const mapStateToProps = (state) => ({
  reduxUserState: state.users.users
})

export default connect(mapStateToProps, { deleteUser })(Users);
