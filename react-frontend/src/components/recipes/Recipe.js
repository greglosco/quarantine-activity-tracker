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
            <div className="ui divided list">
                <li className="item">
                <div className="ui horizontal label">DATE:</div>  
                    {this.props.recipe.date}<br/>  
                    <div className="ui horizontal label">NAME:</div>  
                    {this.props.recipe.name}<br/>  
                    <div className="ui horizontal label">NOTES:</div>  
                    {this.props.recipe.notes}<br/> 
                    <button onClick={this.handleEditOnClick} >Edit</button>
                    <button onClick={this.handleDeleteOnClick} >Delete</button><br/>
                </li>
            </div>
        )
    }


}

export default Recipe;