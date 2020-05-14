import React, { Component } from 'react';

class FitnessActivitiesInput extends Component {

    state = {
        exercise: "",
        date: "",
        notes: "",
        editing: false
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addFitnessActivity(this.state)
        this.setState({
            exercise: "",
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
                    <div className="header">Track Your Fitness Activities:</div><br/>
                    <form className="ui form" onSubmit={this.handleOnSubmit} >
                        <div className="field">
                            <label>Exercise: </label><input type="text" value={this.state.exercise} name="exercise" onChange={this.handleOnChange} /><br/>
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

export default (FitnessActivitiesInput);