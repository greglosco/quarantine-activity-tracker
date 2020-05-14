import React, { Component } from 'react';
import Recipe from './Recipe';
import EditRecipe from './EditRecipe'

class Recipes extends Component {

    componentDidMount() {
       this.props.fetchRecipes()
    }

    render() {

        const recipes = this.props.recipes.map(recipe => (recipe.editing ? <EditRecipe key={recipe.id} recipe={recipe} updateRecipe={this.props.updateRecipe} /> : <Recipe key={recipe.id} recipe={recipe} deleteRecipe={this.props.deleteRecipe} editRecipe={this.props.editRecipe} />))

        return (
            <div>
                <ul className="ui fluid purple card">
                    <div className="content">
                        <div className="header">Your Recipes:<br/></div>
                        <div>
                        {recipes}
                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Recipes;