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
                    DATE: {this.props.livestream.date} --  
                    {this.props.livestream.name} -- 
                    NOTES:{this.props.livestream.notes}
                    <button onClick={this.handleEditOnClick} >Edit</button>
                    <button onClick={this.handleDeleteOnClick} >X</button><br/>
                </li>
            </div>
        )
    }


}

export default Livestream;