import React, { Component } from 'react';
import FitnessActivitiesInput from '../components/fitnessactivities/FitnessActivitiesInput';
import FitnessActivities from '../components/fitnessactivities/FitnessActivities';
import { addFitnessActivity, fetchFitnessActivities, deleteFitnessActivity, editFitnessActivity, updateFitnessActivity } from '../actions/fitnessActivities';

import { connect } from 'react-redux';

class FitnessActivitiesContainer extends Component {

    render() {
        return (
            <div className="ui padded centered cards">
                <div className="ui card"><FitnessActivitiesInput addFitnessActivity={this.props.addFitnessActivity} /><br/></div>
                <div className="ui card"><FitnessActivities fetchFitnessActivities={this.props.fetchFitnessActivities} fitnessActivities={this.props.fitnessActivities} deleteFitnessActivity={this.props.deleteFitnessActivity} editFitnessActivity={this.props.editFitnessActivity} updateFitnessActivity={this.props.updateFitnessActivity} /></div>
            </div>
        )
    }
}

const mapStateToProps = ({fitnessActivities}) => ({fitnessActivities})

export default connect(mapStateToProps, { addFitnessActivity, fetchFitnessActivities, deleteFitnessActivity, editFitnessActivity, updateFitnessActivity })(FitnessActivitiesContainer);