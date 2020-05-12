import React, { Component } from 'react'
import FitnessActivities from '../components/fitnessactivities/FitnessActivities';
import { fetchFitnessActivities, deleteFitnessActivity } from '../actions/fitnessActivities';
import { connect } from 'react-redux';



class HomepageContainer extends Component {

    render() {
        return (
            <div>
                Your Fitness Activities:<FitnessActivities fitnessActivities={this.props.fitnessActivities} fetchFitnessActivities={this.props.fetchFitnessActivities} deleteFitnessActivity={this.props.deleteFitnessActivity} />
            </div>
        )
    }
}

const mapStateToProps = ({fitnessActivities}) => ({fitnessActivities})

export default connect(mapStateToProps, { fetchFitnessActivities, deleteFitnessActivity })(HomepageContainer);