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
            <div className="ui divided middle aligned list">

                <div className="item">
                    <div className="content">
                        <div className="ui horizontal label">DATE:</div>  
                        {this.props.recipe.date}<br/>
                    </div>  
                </div>


                <div className="item">
                    <div className="ui horizontal label">NAME:</div>  
                    {this.props.recipe.name}<br/> 
                </div>

                <div className="item">
                    <div className="ui horizontal label">NOTES:</div>  
                    {this.props.recipe.notes}<br/><br/>
                </div>


                <div className="ui small compact buttons">
                    <button class="ui positive button" onClick={this.handleEditOnClick} >Edit</button>
                    <div class="or"></div>
                    <button class="ui negative button" onClick={this.handleDeleteOnClick} >Delete</button><br/>
                </div>

            </div>
        )
    }


}

export default Recipe;