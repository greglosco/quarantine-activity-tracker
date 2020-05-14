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
            <div className="ui divided middle aligned list">

                <div className="item">
                    <div className="content">
                        <div className="ui horizontal label">DATE:</div>  
                        {this.props.hobby.date}<br/>
                    </div>  
                </div>


                <div className="item">
                    <div className="ui horizontal label">NAME:</div>  
                    {this.props.hobby.name}<br/> 
                </div>

                <div className="item">
                    <div className="ui horizontal label">NOTES:</div>  
                    {this.props.hobby.notes}<br/><br/>
                </div>


                <div className="ui small compact buttons">
                    <button class="ui positive button" onClick={this.handleEditOnClick} >Edit</button>
                    <div class="or"></div>
                    <button class="ui negative button" onClick={this.handleDeleteOnClick} >Delete</button><br/>
                </div>

            </div>
        )
    }


}

export default Hobby;