import React, { Component } from 'react'
import FitnessActivities from '../components/fitnessactivities/FitnessActivities';
import { fetchFitnessActivities, deleteFitnessActivity } from '../actions/fitnessActivities';

import Recipes from '../components/recipes/Recipes';
import { fetchRecipes, deleteRecipe } from '../actions/recipes';

import Hobbies from '../components/hobbies/Hobbies';
import { fetchHobbies, deleteHobby } from '../actions/hobbies';

import { connect } from 'react-redux';



class HomepageContainer extends Component {

    render() {
        return (
            <div>
                Your Fitness Activities:<FitnessActivities fitnessActivities={this.props.fitnessActivities} fetchFitnessActivities={this.props.fetchFitnessActivities} deleteFitnessActivity={this.props.deleteFitnessActivity} />
                Your Recipes:<Recipes recipes={this.props.recipes} fetchRecipes={this.props.fetchRecipes} deleteRecipe={this.props.deleteRecipe} />
                Your Hobbies:<Hobbies hobbies={this.props.hobbies} fetchHobbies={this.props.fetchHobbies} deleteHobby={this.props.deleteHobby} />
            </div>
        )
    }
}

const mapStateToProps = ({fitnessActivities, recipes, hobbies}) => ({fitnessActivities, recipes, hobbies})

export default connect(mapStateToProps, { fetchFitnessActivities, deleteFitnessActivity, fetchRecipes, deleteRecipe, fetchHobbies, deleteHobby })(HomepageContainer);