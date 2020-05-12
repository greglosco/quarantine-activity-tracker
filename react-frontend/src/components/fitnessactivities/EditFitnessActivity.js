import React, { Component } from 'react';

class EditFitnessActivity extends Component {

    state = {
        exercise: (this.props.fitnessActivity.exercise),
        date: (this.props.fitnessActivity.date),
        notes: (this.props.fitnessActivity.notes),
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.updateFitnessActivity(this.props.fitnessActivity.id, this.state)
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
            <div>
                <form onSubmit={this.handleOnSubmit} >
                    <input type="text" value={this.state.exercise} name="exercise" onChange={this.handleOnChange} />
                    <input type="date" value={this.state.date} name="date" onChange={this.handleOnChange} />
                    <input type="textarea" value={this.state.notes} name="notes" onChange={this.handleOnChange} />
                    <input type="submit" value="Update" />
                </form>
            </div>
        )
    }

}

export default EditFitnessActivity;