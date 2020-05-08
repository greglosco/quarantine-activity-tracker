import React, { Component } from 'react';
import FitnessActivitiesInput from '../components/fitnessactivities/FitnessActivitiesInput';
import FitnessActivities from '../components/fitnessactivities/FitnessActivities';
import { connect } from 'react-redux'

class FitnessActivitiesContainer extends Component {

    render() {
        return (
            <div>FitnessActivitiesContainer
                <FitnessActivitiesInput addFitnessActivity={this.props.addFitnessActivity} />
                <FitnessActivities fitnessactivities={this.props.fitnessactivities} />
            </div>
        )
    }
}

const mapStateToProps = ({fitnessactivities}) => ({fitnessactivities})

const mapDispatchToProps = dispatch => ({
    addFitnessActivity: state => dispatch({type: 'ADD_FITNESS_ACTIVITY', state})
})

export default connect(mapStateToProps, mapDispatchToProps)(FitnessActivitiesContainer);