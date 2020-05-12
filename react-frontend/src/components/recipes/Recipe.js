import React, { Component } from 'react';

class Recipe extends Component {

    handleDeleteOnClick = () => {
        this.props.deleteRecipe(this.props.recipe.id)
    }

    handleEditOnClick = () => {
        this.props.editRecipe(this.props.recipe.id)
    }

    render() {
        return (
            <div>
                <li>
                    DATE: {this.props.recipe.date} --  
                    {this.props.recipe.exercise} -- 
                    NOTES:{this.props.recipe.notes}
                    <button onClick={this.handleEditOnClick} >Edit</button>
                    <button onClick={this.handleDeleteOnClick} >X</button><br/>
                </li>
            </div>
        )
    }


}

export default Recipe;