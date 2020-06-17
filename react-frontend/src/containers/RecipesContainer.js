import React, { Component } from 'react';
import RecipesInput from '../components/recipes/RecipesInput';
import Recipes from '../components/recipes/Recipes';
import { addRecipe, fetchRecipes, deleteRecipe, editRecipe, updateRecipe } from '../actions/recipes';

import { connect } from 'react-redux';

class RecipesContainer extends Component {

    render() {

        const { addRecipe, fetchRecipes, recipes, deleteRecipe, editRecipe, updateRecipe } = this.props;

        return (
            <div className="ui padded one column grid">
                <div className="row"><div className="five wide centered column"><RecipesInput addRecipe={addRecipe} /><br/></div></div>
                <div className="three wide centered column"><Recipes fetchRecipes={fetchRecipes} recipes={recipes} deleteRecipe={deleteRecipe} editRecipe={editRecipe} updateRecipe={updateRecipe} /></div>
            </div>
        )
    }
}

const mapStateToProps = ({recipes}) => ({recipes})

export default connect(mapStateToProps, { addRecipe, fetchRecipes, deleteRecipe, editRecipe, updateRecipe })(RecipesContainer);