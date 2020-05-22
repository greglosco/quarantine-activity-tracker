import React, { Component } from 'react';
import Recipe from './Recipe';
import EditRecipe from './EditRecipe'

class Recipes extends Component {

    componentDidMount() {
       this.props.fetchRecipes()
    }

    state = {
        recipes: []
    }

    handleOnClick = () => {
        const sortedRecipes = [...this.props.recipes].sort((a, b) => {
            if (b.name > a.name) {
                return -1
            } else if (a.name < b.name) {
                return 1
            } else {
                return 0
            }
        })
        this.setState({
            recipes: [...sortedRecipes]
        })
    }


    render() {

        const recipes = this.state.recipes.length === 0 ? this.props.recipes : this.state.recipes
        const renderedRecipes = recipes.map(recipe => (recipe.editing ? <EditRecipe key={recipe.id} recipe={recipe} updateRecipe={this.props.updateRecipe} /> : <Recipe key={recipe.id} recipe={recipe} deleteRecipe={this.props.deleteRecipe} editRecipe={this.props.editRecipe} />))
        
        return (
            <div>
                <ul className="ui fluid purple card">
                    <div className="content">
                        <div className="header">Your Recipes:<br/></div>
                        <button class="ui button" onClick={this.handleOnClick} >Sort Alphabetically by Name</button>
                        {renderedRecipes}
                    </div>
                </ul>
            </div>
        )
    }
}

export default Recipes;