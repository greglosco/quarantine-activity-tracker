import React, { Component } from 'react';
import FitnessActivity from './FitnessActivity'

class FitnessActivities extends Component {
    
    render() {

        const fitnessActivities = this.props.fitnessActivities.map(fitnessActivity => <FitnessActivity key={fitnessActivity.id} fitnessActivity={fitnessActivity} />)

        return (
            <ul>
                {fitnessActivities}
            </ul>
        )
    }
}

export default FitnessActivities;