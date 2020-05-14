import React, { Component } from 'react';

class FitnessActivity extends Component {

    handleDeleteOnClick = () => {
        this.props.deleteFitnessActivity(this.props.fitnessActivity.id)
    }

    handleEditOnClick = () => {
        this.props.editFitnessActivity(this.props.fitnessActivity.id)
    }

    render() {
        return (
            <div className="ui divided middle aligned list">

                <div className="item">
                    <div className="content">
                        <div className="ui horizontal label">DATE:</div>  
                        {this.props.fitnessActivity.date}<br/>
                    </div>  
                </div>


                <div className="item">
                    <div className="ui horizontal label">Exercise:</div>  
                    {this.props.fitnessActivity.exercise}<br/> 
                </div>

                <div className="item">
                    <div className="ui horizontal label">NOTES:</div>  
                    {this.props.fitnessActivity.notes}<br/><br/>
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

export default FitnessActivity;