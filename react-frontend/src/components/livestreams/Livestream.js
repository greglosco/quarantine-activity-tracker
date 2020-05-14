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
            <div className="ui list">
                <li className="item">
                    <div className="ui horizontal label">DATE:</div>  
                    {this.props.livestream.date}<br/>  
                    <div className="ui horizontal label">NAME:</div>  
                    {this.props.livestream.name}<br/> 
                    <div className="ui horizontal label">NOTES:</div>  
                    {this.props.livestream.notes}<br/>
                    <button onClick={this.handleEditOnClick} >Edit</button>
                    <button onClick={this.handleDeleteOnClick} >Delete</button><br/>
                </li>
            </div>
        )
    }


}

export default Livestream;