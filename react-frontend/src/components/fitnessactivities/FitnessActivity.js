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
                    DATE: {this.props.fitnessActivity.date} --  
                    {this.props.fitnessActivity.exercise} -- 
                    NOTES:{this.props.fitnessActivity.notes}
                    <button onClick={this.handleDeleteOnClick} >Edit</button><br/>
                    <button onClick={this.handleEditOnClick} >X</button><br/>
                </li>
            </div>
        )
    }


}

export default FitnessActivity;