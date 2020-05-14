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
            <div className="ui form">
                <form onSubmit={this.handleOnSubmit} >
                    <div className="field"><label>Exercise Name: </label><input type="text" value={this.state.exercise} name="exercise" onChange={this.handleOnChange} /><br/></div>
                    <div className="field"><label>Date: </label><input type="date" value={this.state.date} name="date" onChange={this.handleOnChange} /><br/></div>
                    <div className="field"><label>Notes: </label><textarea rows="1" value={this.state.notes} name="notes" onChange={this.handleOnChange} /><br/><br/></div>
                    <input type="submit" value="Update" class="ui button" />
                </form>
            </div>
        )
    }

}

export default EditFitnessActivity;