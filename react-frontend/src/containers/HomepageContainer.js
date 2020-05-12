import React, { Component } from 'react'
import FitnessActivities from '../components/fitnessactivities/FitnessActivities';
import { fetchFitnessActivities } from '../actions/fitnessActivities';
import { connect } from 'react-redux';



class HomepageContainer extends Component {

    componentDidMount() {
        this.props.fetchFitnessActivities()
    }

    render() {
        return (
            <div>HomepageContainer
                <FitnessActivities fitnessActivities={this.props.fitnessActivities} />
            </div>
        )
    }
}

const mapStateToProps = ({fitnessActivities}) => ({fitnessActivities})

export default connect(mapStateToProps, { fetchFitnessActivities })(HomepageContainer);