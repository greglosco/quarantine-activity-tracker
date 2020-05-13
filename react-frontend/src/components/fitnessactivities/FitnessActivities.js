import React, { Component } from 'react';
import FitnessActivity from './FitnessActivity';
import EditFitnessActivity from './EditFitnessActivity'

class FitnessActivities extends Component {

    componentDidMount() {
       this.props.fetchFitnessActivities()
    }

    render() {

        const fitnessActivities = this.props.fitnessActivities.map(fitnessActivity => (fitnessActivity.editing ? <EditFitnessActivity key={fitnessActivity.id} fitnessActivity={fitnessActivity} updateFitnessActivity={this.props.updateFitnessActivity} /> : <FitnessActivity key={fitnessActivity.id} fitnessActivity={fitnessActivity} deleteFitnessActivity={this.props.deleteFitnessActivity} editFitnessActivity={this.props.editFitnessActivity} />))

        return (
            <div className="container">
            Your Fitness Activities:
                <ul>
                    {fitnessActivities}
                </ul>
            </div>
        )
    }
}

export default FitnessActivities;