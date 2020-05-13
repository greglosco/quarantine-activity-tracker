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
                    DATE: {this.props.hobby.date} --  
                    {this.props.hobby.name} -- 
                    NOTES:{this.props.hobby.notes}
                    <button onClick={this.handleEditOnClick} >Edit</button>
                    <button onClick={this.handleDeleteOnClick} >X</button><br/>
                </li>
            </div>
        )
    }


}

export default Hobby;