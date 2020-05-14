import React, { Component } from 'react';

class EditHobby extends Component {

    state = {
        name: (this.props.hobby.name),
        date: (this.props.hobby.date),
        notes: (this.props.hobby.notes),
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.updateHobby(this.props.hobby.id, this.state)
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
            <div className="input">
                <form onSubmit={this.handleOnSubmit} >
                    <label>Hobby Name: </label><br/>
                    <input type="text" value={this.state.name} name="name" onChange={this.handleOnChange} /><br/>
                    <label>Date: </label><br/>
                    <input type="date" value={this.state.date} name="date" onChange={this.handleOnChange} /><br/>
                    <label>Notes: </label><br/>
                    <textarea rows="5" value={this.state.notes} name="notes" onChange={this.handleOnChange} /><br/>
                    <input type="submit" value="Update" />
                </form>
            </div>
        )
    }

}

export default EditHobby;