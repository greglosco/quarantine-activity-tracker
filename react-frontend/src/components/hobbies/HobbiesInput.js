import React, { Component } from 'react';

class HobbiesInput extends Component {

    state = {
        name: "",
        date: "",
        notes: "",
        editing: false
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addHobby(this.state)
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
            <div className="input" >Track Your Hobbies:<br/>
                <form onSubmit={this.handleOnSubmit} >
                    <label>Hobby Name: </label><br/>
                    <input type="text" value={this.state.name} name="name" onChange={this.handleOnChange} /><br/>
                    <label>Date: </label><br/>
                    <input type="date" value={this.state.date} name="date" onChange={this.handleOnChange} /><br/>
                    <label>Notes: </label><br/>
                    <textarea rows="5" value={this.state.notes} name="notes" onChange={this.handleOnChange} /><br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default (HobbiesInput);