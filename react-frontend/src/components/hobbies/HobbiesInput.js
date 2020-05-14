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
            <div className="ui fluid green card" >
                <div className="content">
                    <div className="header">Track Your Hobbies:</div><br/>
                    <form className="ui form" onSubmit={this.handleOnSubmit} >
                        <div className="field">
                            <label>Hobby Name: </label><input type="text" value={this.state.exercise} name="hobby" onChange={this.handleOnChange} /><br/>
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

export default (HobbiesInput);