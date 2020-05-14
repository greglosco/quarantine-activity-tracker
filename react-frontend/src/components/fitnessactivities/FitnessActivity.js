import React, { Component } from 'react';

class FitnessActivity extends Component {

    handleDeleteOnClick = () => {
        this.props.deleteFitnessActivity(this.props.fitnessActivity.id)
    }

    handleEditOnClick = () => {
        this.props.editFitnessActivity(this.props.fitnessActivity.id)
    }

    render() {
        return (
            <div className="ui list" >
                <li className="item">
                    <label>DATE: </label> {this.props.fitnessActivity.date}<br/>  
                    <label>EXERCISE: </label> {this.props.fitnessActivity.exercise}<br/> 
                    <label>NOTES: </label> {this.props.fitnessActivity.notes}<br/>
                    <button onClick={this.handleEditOnClick} >Edit</button>
                    <button onClick={this.handleDeleteOnClick} >Delete</button><br/>
                </li>
            </div>
        )
    }


}

export default FitnessActivity;