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
            <div>
                <li>
                    DATE: {this.props.fitnessActivity.date}<br/>  
                    EXERCISE: {this.props.fitnessActivity.exercise}<br/> 
                    NOTES:{this.props.fitnessActivity.notes}<br/>
                    <button onClick={this.handleEditOnClick} >Edit</button>
                    <button onClick={this.handleDeleteOnClick} >Delete</button><br/>
                </li>
            </div>
        )
    }


}

export default FitnessActivity;