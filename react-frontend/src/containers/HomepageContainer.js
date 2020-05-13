import React, { Component } from 'react'
import FitnessActivities from '../components/fitnessactivities/FitnessActivities';
import { fetchFitnessActivities, deleteFitnessActivity } from '../actions/fitnessActivities';

import Recipes from '../components/recipes/Recipes';
import { fetchRecipes, deleteRecipe } from '../actions/recipes';

import { connect } from 'react-redux';



class HomepageContainer extends Component {

    render() {
        return (
            <div>
                Your Fitness Activities:<FitnessActivities fitnessActivities={this.props.fitnessActivities} fetchFitnessActivities={this.props.fetchFitnessActivities} deleteFitnessActivity={this.props.deleteFitnessActivity} />
                Your Recipes:<Recipes recipes={this.props.recipes} fetchRecipes={this.props.fetchRecipes} deleteRecipe={this.props.deleteRecipe} />
            </div>
        )
    }
}

const mapStateToProps = ({fitnessActivities, recipes}) => ({fitnessActivities, recipes})

export default connect(mapStateToProps, { fetchFitnessActivities, deleteFitnessActivity, fetchRecipes, deleteRecipe })(HomepageContainer);