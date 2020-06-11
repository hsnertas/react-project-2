import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserConsumer from "../context";

 class user extends Component {



     state={
         isVisible:false
     }

//    constructor (props){
//      super (props);
//      this.state={
//          isVisible: true
//      }
//    }
onClickEvent(number, e){
 this.setState({
     isVisible:!this.state.isVisible
 })
}
onDeleteUser=(dispatch, e)=>{
const {id}=this.props;
dispatch({type:"DELETE_USER", payload:id});
}

    render() {

        const {name, salary, department}=this.props;
        const {isVisible}= this.state;
        return <UserConsumer>
            {
                value=>{
                    const {dispatch}=value;

                    return (
            <div className= "col-md-8 mb-4">

                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                   <h3 onClick={this.onClickEvent.bind(this, 34)}> {name} </h3>
                   <i onClick={this.onDeleteUser.bind(this, dispatch)} className="fa fa-trash " style={{ cursor:"pointer", fontSize:30}}></i>
                    </div>
                    {
                        isVisible ?  <div className="card-body">
                        <div className="card-text">Department : {department}</div>
                        <div className="card-text">Salary : {salary}</div>
                        </div> : null
                    }
                   

                </div>
            
            </div>
        )
                }
            }
        </UserConsumer>
        
    }
}

user.propTypes={

    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired

}

user.defaultProps={
    name:"No info",
    department:"No info",
    salary:"No info"
    
}

export default user;