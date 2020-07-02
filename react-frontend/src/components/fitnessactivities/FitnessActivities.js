import React, { Component } from 'react';
import FitnessActivity from './FitnessActivity';
import EditFitnessActivity from './EditFitnessActivity'

class FitnessActivities extends Component {

    componentDidMount() {
       this.props.fetchFitnessActivities()
    }

    state = {
        fitnessActivities: []
    }

    handleOnClick = () => {
        const sortedFAs = [...this.props.fitnessActivities].sort((a, b) => {
            if (b.exercise > a.exercise) {
                return -1
            } else if (a.exercise < b.exercise) {
                return 1
            } else {
                return 0
            }
        })
        this.setState({
            fitnessActivities: [...sortedFAs]
        })
    }

    render() {

        const { fitnessActivities, editFitnessActivity, updateFitnessActivity, deleteFitnessActivity} = this.props;
        const fitacts = this.state.fitnessActivities.length === 0 ? fitnessActivities : this.state.fitnessActivities
        const renderedFitActs = fitacts.map(fitnessActivity => (fitnessActivity.editing ? <EditFitnessActivity key={fitnessActivity.id} fitnessActivity={fitnessActivity} updateFitnessActivity={updateFitnessActivity} /> : <FitnessActivity key={fitnessActivity.id} fitnessActivity={fitnessActivity} deleteFitnessActivity={deleteFitnessActivity} editFitnessActivity={editFitnessActivity} />))

        return (
            <div >
                <ul class="ui fluid green card">
                    <div className="content">
                        <div className="header">Your Fitness Activities:<br/></div>
                        <button class="ui button" onClick={this.handleOnClick} >Sort Alphabetically by Name</button>
                        {renderedFitActs}
                    </div>
                </ul>
            </div>
        )
    }
}

export default FitnessActivities;