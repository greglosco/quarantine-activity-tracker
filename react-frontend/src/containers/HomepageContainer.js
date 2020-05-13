import React, { Component } from 'react'
import FitnessActivities from '../components/fitnessactivities/FitnessActivities';
import { fetchFitnessActivities, deleteFitnessActivity } from '../actions/fitnessActivities';

import Recipes from '../components/recipes/Recipes';
import { fetchRecipes, deleteRecipe } from '../actions/recipes';

import Hobbies from '../components/hobbies/Hobbies';
import { fetchHobbies, deleteHobby } from '../actions/hobbies';

import Livestreams from '../components/livestreams/Livestreams';
import { fetchLivestreams, deleteLivestream } from '../actions/livestreams';

import { connect } from 'react-redux';



class HomepageContainer extends Component {

    render() {
        return (
            <div>
                Your Fitness Activities:<FitnessActivities fitnessActivities={this.props.fitnessActivities} fetchFitnessActivities={this.props.fetchFitnessActivities} deleteFitnessActivity={this.props.deleteFitnessActivity} />
                Your Recipes:<Recipes recipes={this.props.recipes} fetchRecipes={this.props.fetchRecipes} deleteRecipe={this.props.deleteRecipe} />
                Your Hobbies:<Hobbies hobbies={this.props.hobbies} fetchHobbies={this.props.fetchHobbies} deleteHobby={this.props.deleteHobby} />
                Your Livestreams:<Livestreams livestreams={this.props.livestreams} fetchLivestreams={this.props.fetchLivestreams} deleteLivestream={this.props.deleteLivestream} />
            </div>
        )
    }
}

const mapStateToProps = ({fitnessActivities, recipes, hobbies, livestreams}) => ({fitnessActivities, recipes, hobbies, livestreams})

export default connect(mapStateToProps, { fetchFitnessActivities, deleteFitnessActivity, fetchRecipes, deleteRecipe, fetchHobbies, deleteHobby, fetchLivestreams, deleteLivestream })(HomepageContainer);