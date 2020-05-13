import React, { Component } from 'react';

class Hobby extends Component {

    handleDeleteOnClick = () => {
        this.props.deleteHobby(this.props.hobby.id)
    }

    handleEditOnClick = () => {
        this.props.editHobby(this.props.hobby.id)
    }

    render() {
        return (
            <div>
                <li>
                    DATE: {this.props.hobby.date}<br/>  
                    NAME: {this.props.hobby.name}<br/> 
                    NOTES: {this.props.hobby.notes}<br/>
                    <button onClick={this.handleEditOnClick} >Edit</button>
                    <button onClick={this.handleDeleteOnClick} >Delete</button><br/>
                </li>
            </div>
        )
    }


}

export default Hobby;