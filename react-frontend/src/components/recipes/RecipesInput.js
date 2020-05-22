import React, { Component } from 'react';

class RecipesInput extends Component {

    state = {
        name: "",
        date: "",
        notes: "",
        editing: false
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addRecipe(this.state)
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
            <div className="ui fluid green card" >
                <div className="content">
                    <div className="header">Track Your Recipes:</div><br/>
                    <form className="ui form" onSubmit={this.handleOnSubmit} name="form" netlify data-netlify="true" netlify-honeypot="bot-field" action="/recipes">
                    {/* <input type="hidden" name="form-name" value="form" /> */}
                        <div className="field">
                            <label>Recipe Name: </label><input type="text" value={this.state.name} name="name" onChange={this.handleOnChange} /><br/>
                        </div>
                        <div className="field">
                            <label>Date: </label><input type="date" value={this.state.date} name="date" onChange={this.handleOnChange} /><br/>
                        </div>
                        <div className="field">
                            <label>Notes: </label><textarea rows="1" value={this.state.notes} name="notes" onChange={this.handleOnChange} /><br/><br/>
                        </div>
                        <input type="submit" class="ui button"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default (RecipesInput);