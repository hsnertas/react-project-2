import React, { Component } from "react";

const UserContext = React.createContext();


const reducer= (state,action)=>{


    switch(action.type){
        case"DELETE_USER":
        return{
            ...state,
            users:state.users.filter(user=> action.payload !==user.id)
        }
        default:
            return state;
    }
}
// provider, consumer
export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Hasan Ertas",
        salary: "$120 000",
        department: "React",
      },
      {
        id: 2,
        name: "Hasan Ertas",
        salary: "$120 000",
        department: "React",
      },
      {
        id: 3,
        name: "Hasan Ertas",
        salary: "$120 000",
        department: "React",
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;
