import React, { Component } from 'react';

class Livestream extends Component {

    handleDeleteOnClick = () => {
        this.props.deleteLivestream(this.props.livestream.id)
    }

    handleEditOnClick = () => {
        this.props.editLivestream(this.props.livestream.id)
    }

    render() {
        return (
            <div>
                <li>
                    DATE: {this.props.livestream.date}<br/>  
                    NAME: {this.props.livestream.name}<br/> 
                    NOTES: {this.props.livestream.notes}<br/>
                    <button onClick={this.handleEditOnClick} >Edit</button>
                    <button onClick={this.handleDeleteOnClick} >Delete</button><br/>
                </li>
            </div>
        )
    }


}

export default Livestream;