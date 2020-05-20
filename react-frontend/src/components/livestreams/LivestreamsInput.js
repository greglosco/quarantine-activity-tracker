import React, { Component } from 'react';

class LivestreamsInput extends Component {

    state = {
        name: "",
        date: "",
        notes: "",
        editing: false
    }

    handleOnSubmit = event => {
        event.preventDefault();
        console.log('A');
        this.props.addLivestream(this.state)
        console.log('B');
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
                    <div className="header">Track Your Livestreams:</div><br/>
                    <form className="ui form" onSubmit={this.handleOnSubmit} >
                        <div className="field">
                            <label>Livestream Name: </label><input type="text" value={this.state.name} name="name" onChange={this.handleOnChange} /><br/>
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

export default (LivestreamsInput);