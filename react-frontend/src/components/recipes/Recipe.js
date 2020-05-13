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
                    DATE: {this.props.recipe.date}<br/>  
                    NAME: {this.props.recipe.name}<br/>  
                    NOTES:<br/> 
                    {this.props.recipe.notes}<br/> 
                    <button onClick={this.handleEditOnClick} >Edit</button>
                    <button onClick={this.handleDeleteOnClick} >Delete</button><br/>
                </li>
            </div>
        )
    }


}

export default Recipe;