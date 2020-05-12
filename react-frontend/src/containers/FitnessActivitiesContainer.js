import React, { Component } from 'react';
import FitnessActivitiesInput from '../components/fitnessactivities/FitnessActivitiesInput';
import FitnessActivities from '../components/fitnessactivities/FitnessActivities';
import { addFitnessActivity, fetchFitnessActivities, deleteFitnessActivity } from '../actions/fitnessActivities';

import { connect } from 'react-redux';

class FitnessActivitiesContainer extends Component {

    componentDidMount() {
        this.props.fetchFitnessActivities()
    }

    render() {
        return (
            <div>FitnessActivitiesContainer
                <FitnessActivitiesInput addFitnessActivity={this.props.addFitnessActivity} />
                <FitnessActivities fitnessActivities={this.props.fitnessActivities} deleteFitnessActivity={this.props.deleteFitnessActivity} />
            </div>
        )
    }
}

const mapStateToProps = ({fitnessActivities}) => ({fitnessActivities})

export default connect(mapStateToProps, { addFitnessActivity, fetchFitnessActivities, deleteFitnessActivity })(FitnessActivitiesContainer);