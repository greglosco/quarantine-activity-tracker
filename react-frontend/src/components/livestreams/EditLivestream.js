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
            <div>
                <form onSubmit={this.handleOnSubmit} >
                    <input type="text" value={this.state.name} name="name" onChange={this.handleOnChange} />
                    <input type="date" value={this.state.date} name="date" onChange={this.handleOnChange} />
                    <input type="textarea" value={this.state.notes} name="notes" onChange={this.handleOnChange} />
                    <input type="submit" value="Update" />
                </form>
            </div>
        )
    }

}

export default EditLivestream;