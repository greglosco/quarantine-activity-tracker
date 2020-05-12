import React, { Component } from 'react';

class EditRecipe extends Component {

    state = {
        name: (this.props.recipe.name),
        date: (this.props.recipe.date),
        notes: (this.props.recipe.notes),
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.updateRecipe(this.props.recipe.id, this.state)
        this.setState({
            name: "",
            date: "",
            notes: "",
            editing: false
        })
    }

    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit} >
                    <input type="text" value={this.state.name} name="name" onChange={this.handleOnChange} />
                    <input type="date" value={this.state.date} name="date" onChange={this.handleOnChange} />
                    <input type="textarea" value={this.state.notes} name="notes" onChange={this.handleOnChange} />
                    <input type="submit" value="Update" />
                </form>
            </div>
        )
    }

}

export default EditRecipe;