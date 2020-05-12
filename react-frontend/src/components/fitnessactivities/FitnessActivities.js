import React, { Component } from 'react';
import FitnessActivity from './FitnessActivity';

class FitnessActivities extends Component {

    componentDidMount() {
       this.props.fetchFitnessActivities()
    }

    render() {
        const {deleteFitnessActivity} = this.props;

        const fitnessActivities = this.props.fitnessActivities.map(fitnessActivity => <FitnessActivity key={fitnessActivity.id} fitnessActivity={fitnessActivity} deleteFitnessActivity={deleteFitnessActivity} />)

        return (
            <ul>
                {fitnessActivities}
            </ul>
        )
    }
}

export default FitnessActivities;