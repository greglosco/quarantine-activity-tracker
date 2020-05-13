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
            <div className="input" >Track Your Fitness Activities:<br/>
                <form onSubmit={this.handleOnSubmit} >
                    <input type="text" value={this.state.exercise} name="exercise" onChange={this.handleOnChange} />
                    <input type="date" value={this.state.date} name="date" onChange={this.handleOnChange} />
                    <input type="textarea" value={this.state.notes} name="notes" onChange={this.handleOnChange} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default (FitnessActivitiesInput);