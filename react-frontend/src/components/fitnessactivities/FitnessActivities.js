import React, { Component } from 'react';
import FitnessActivity from './FitnessActivity';

class FitnessActivities extends Component {

    componentDidMount() {
       this.props.fetchFitnessActivities()
    }

    render() {

        const fitnessActivities = this.props.fitnessActivities.map(fitnessActivity => <FitnessActivity key={fitnessActivity.id} fitnessActivity={fitnessActivity} deleteFitnessActivity={this.props.deleteFitnessActivity} editFitnessActivity={this.props.editFitnessActivity} />)

        return (
            <ul>
                {fitnessActivities}
            </ul>
        )
    }
}

export default FitnessActivities;