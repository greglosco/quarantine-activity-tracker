import React, { Component } from 'react';
import FitnessActivitiesInput from '../components/fitnessactivities/FitnessActivitiesInput';
import FitnessActivities from '../components/fitnessactivities/FitnessActivities';
import { addFitnessActivity, fetchFitnessActivities, deleteFitnessActivity, editFitnessActivity } from '../actions/fitnessActivities';

import { connect } from 'react-redux';

class FitnessActivitiesContainer extends Component {

    render() {
        return (
            <div>FitnessActivitiesContainer
                <FitnessActivitiesInput addFitnessActivity={this.props.addFitnessActivity} />
                <FitnessActivities fetchFitnessActivities={this.props.fetchFitnessActivities} fitnessActivities={this.props.fitnessActivities} deleteFitnessActivity={this.props.deleteFitnessActivity} editFitnessActivity={this.props.editFitnessActivity} />
            </div>
        )
    }
}

const mapStateToProps = ({fitnessActivities}) => ({fitnessActivities})

export default connect(mapStateToProps, { addFitnessActivity, fetchFitnessActivities, deleteFitnessActivity, editFitnessActivity })(FitnessActivitiesContainer);