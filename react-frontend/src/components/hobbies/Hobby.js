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
            <div className="ui list">
                <li className="item">
                <div className="ui horizontal label">DATE:</div>  
                    {this.props.hobby.date}<br/>  
                    <div className="ui horizontal label">NAME:</div>  
                    {this.props.hobby.name}<br/> 
                    <div className="ui horizontal label">NOTES:</div>  
                    {this.props.hobby.notes}<br/>
                    <button onClick={this.handleEditOnClick} >Edit</button>
                    <button onClick={this.handleDeleteOnClick} >Delete</button><br/>
                </li>
            </div>
        )
    }


}

export default Hobby;