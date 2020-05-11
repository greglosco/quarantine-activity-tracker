import React, { Component } from 'react';
import FitnessActivitiesInput from '../components/fitnessactivities/FitnessActivitiesInput';
import FitnessActivities from '../components/fitnessactivities/FitnessActivities';
import { connect } from 'react-redux';

class FitnessActivitiesContainer extends Component {

    render() {
        return (
            <div>FitnessActivitiesContainer
                <FitnessActivitiesInput />
                <FitnessActivities fitnessActivities={this.props.fitnessActivities} />
            </div>
        )
    }
}

const mapStateToProps = ({fitnessActivities}) => ({fitnessActivities})

export default connect(mapStateToProps, null)(FitnessActivitiesContainer);