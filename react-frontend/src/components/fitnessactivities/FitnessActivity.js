import React, { Component } from 'react';

class FitnessActivity extends Component {

    render() {
        return (
            <div>
                <li>
                    {this.props.fitnessActivity.exercise}<br/>
                    {this.props.fitnessActivity.date}<br/>
                    {this.props.fitnessActivity.notes}<br/>
                </li>
            </div>
        )
    }


}

export default FitnessActivity;