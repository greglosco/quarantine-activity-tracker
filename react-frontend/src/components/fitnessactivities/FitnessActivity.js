import React, { Component } from 'react';

class FitnessActivity extends Component {

    handleOnClick = () => {
        this.props.deleteFitnessActivity(this.props.fitnessActivity.id)
    }

    render() {
        return (
            <div>
                <li>
                    DATE: {this.props.fitnessActivity.date} --  
                    {this.props.fitnessActivity.exercise} -- 
                    NOTES:{this.props.fitnessActivity.notes}
                    <button onClick={this.handleOnClick} >X</button><br/>
                </li>
            </div>
        )
    }


}

export default FitnessActivity;