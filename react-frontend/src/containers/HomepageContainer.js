import React, { Component } from 'react'
import FitnessActivities from '../components/fitnessactivities/FitnessActivities';
import { fetchFitnessActivities, deleteFitnessActivity, editFitnessActivity, updateFitnessActivity } from '../actions/fitnessActivities';

import Recipes from '../components/recipes/Recipes';
import { fetchRecipes, deleteRecipe, editRecipe, updateRecipe } from '../actions/recipes';

import Hobbies from '../components/hobbies/Hobbies';
import { fetchHobbies, deleteHobby, editHobby, updateHobby } from '../actions/hobbies';

import Livestreams from '../components/livestreams/Livestreams';
import { fetchLivestreams, deleteLivestream, editLivestream, updateLivestream } from '../actions/livestreams';

import { connect } from 'react-redux';



class HomepageContainer extends Component {

    render() {
        return (
            <div>
                Your Fitness Activities:<FitnessActivities fitnessActivities={this.props.fitnessActivities} fetchFitnessActivities={this.props.fetchFitnessActivities} deleteFitnessActivity={this.props.deleteFitnessActivity} editFitnessActivity={this.props.editFitnessActivity} updateFitnessActivity={this.props.updateFitnessActivity} />
                Your Recipes:<Recipes recipes={this.props.recipes} fetchRecipes={this.props.fetchRecipes} deleteRecipe={this.props.deleteRecipe} editRecipe={this.props.editRecipe} updateRecipe={this.props.updateRecipe} />
                Your Hobbies:<Hobbies hobbies={this.props.hobbies} fetchHobbies={this.props.fetchHobbies} deleteHobby={this.props.deleteHobby} editHobby={this.props.editHobby} updateHobby={this.props.updateHobby} />
                Your Livestreams:<Livestreams livestreams={this.props.livestreams} fetchLivestreams={this.props.fetchLivestreams} deleteLivestream={this.props.deleteLivestream} editLivestream={this.props.editLivestream} updateLivestream={this.props.updateLivestream} />
            </div>
        )
    }
}

const mapStateToProps = ({fitnessActivities, recipes, hobbies, livestreams}) => ({fitnessActivities, recipes, hobbies, livestreams})

export default connect(mapStateToProps, { fetchFitnessActivities, deleteFitnessActivity, editFitnessActivity, updateFitnessActivity, fetchRecipes, deleteRecipe, editRecipe, updateRecipe, fetchHobbies, deleteHobby, editHobby, updateHobby, fetchLivestreams, deleteLivestream, editLivestream, updateLivestream })(HomepageContainer);