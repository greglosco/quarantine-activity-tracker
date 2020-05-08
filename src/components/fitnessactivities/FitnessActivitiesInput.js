import React, { Component } from 'react';

class FitnessActivitiesInput extends Component {

    state = {
        exercise: "",
        date: "",
        notes: ""
    }

    handleOnSubmit = event => {
        event.preventDefault();
        
        this.setState({
            exercise: "",
            date: "",
            notes: ""
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
                    <input type="text" value={this.state.exercise} name="exercise" onChange={this.handleOnChange} />
                    <input type="date" value={this.state.date} name="date" onChange={this.handleOnChange} />
                    <input type="textarea" value={this.state.notes} name="notes" onChange={this.handleOnChange} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default FitnessActivitiesInput;