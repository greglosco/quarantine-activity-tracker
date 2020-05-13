import React, { Component } from 'react';
import RecipesInput from '../components/recipes/RecipesInput';
import Recipes from '../components/recipes/Recipes';
import { addRecipe, fetchRecipes, deleteRecipe, editRecipe, updateRecipe } from '../actions/recipes';

import { connect } from 'react-redux';

class RecipesContainer extends Component {

    render() {
        return (
            <div>
                <RecipesInput addRecipe={this.props.addRecipe} /><br/>
                <Recipes fetchRecipes={this.props.fetchRecipes} recipes={this.props.recipes} deleteRecipe={this.props.deleteRecipe} editRecipe={this.props.editRecipe} updateRecipe={this.props.updateRecipe} />
            </div>
        )
    }
}

const mapStateToProps = ({recipes}) => ({recipes})

export default connect(mapStateToProps, { addRecipe, fetchRecipes, deleteRecipe, editRecipe, updateRecipe })(RecipesContainer);