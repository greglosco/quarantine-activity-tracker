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

//destructure props, assign to this.props
//linting rules

class HomepageContainer extends Component {

    render() {

        const { fitnessActivities, fetchFitnessActivities, deleteFitnessActivity, editFitnessActivity, updateFitnessActivity,
            recipes, fetchRecipes, deleteRecipe, editRecipe, updateRecipe,
            hobbies, fetchHobbies, deleteHobby, editHobby, updateHobby,
            livestreams, fetchLivestreams, deleteLivestream, editLivestream, updateLivestream
        } = this.props;

        return (
            <div className="ui padded four column grid">
                <div className="row" >
                        <div class="column"><FitnessActivities fitnessActivities={fitnessActivities} fetchFitnessActivities={fetchFitnessActivities} deleteFitnessActivity={deleteFitnessActivity} editFitnessActivity={editFitnessActivity} updateFitnessActivity={updateFitnessActivity} /></div>
                        <div class="column"><Recipes recipes={recipes} fetchRecipes={fetchRecipes} deleteRecipe={deleteRecipe} editRecipe={editRecipe} updateRecipe={updateRecipe} /></div>
                        <div class="column"><Hobbies hobbies={hobbies} fetchHobbies={fetchHobbies} deleteHobby={deleteHobby} editHobby={editHobby} updateHobby={updateHobby} /></div>
                        <div class="column"><Livestreams livestreams={livestreams} fetchLivestreams={fetchLivestreams} deleteLivestream={deleteLivestream} editLivestream={editLivestream} updateLivestream={updateLivestream} /></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({fitnessActivities, recipes, hobbies, livestreams}) => ({fitnessActivities, recipes, hobbies, livestreams})

export default connect(mapStateToProps, { fetchFitnessActivities, deleteFitnessActivity, editFitnessActivity, updateFitnessActivity, fetchRecipes, deleteRecipe, editRecipe, updateRecipe, fetchHobbies, deleteHobby, editHobby, updateHobby, fetchLivestreams, deleteLivestream, editLivestream, updateLivestream })(HomepageContainer);