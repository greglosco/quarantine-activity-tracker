import React, { Component } from 'react';

class EditLivestream extends Component {

    state = {
        name: (this.props.livestream.name),
        date: (this.props.livestream.date),
        notes: (this.props.livestream.notes),
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.updateLivestream(this.props.livestream.id, this.state)
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
            <div className="ui form">
                <form onSubmit={this.handleOnSubmit} >
                    <div className="field"><label>Livestream Name: </label><input type="text" value={this.state.name} name="name" onChange={this.handleOnChange} /><br/></div>
                    <div className="field"><label>Date: </label><input type="date" value={this.state.date} name="date" onChange={this.handleOnChange} /><br/></div>
                    <div className="field"><label>Notes: </label><textarea rows="1" value={this.state.notes} name="notes" onChange={this.handleOnChange} /><br/><br/></div>
                    <input type="submit" value="Update" class="ui button" />
                </form>
            </div>
        )
    }

}

export default EditLivestream;