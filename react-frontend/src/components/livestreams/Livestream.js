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
            <div className="ui divided middle aligned list">

                <div className="item">
                    <div className="content">
                        <div className="ui horizontal label">DATE:</div>  
                        {this.props.livestream.date}<br/>
                    </div>  
                </div>


                <div className="item">
                    <div className="ui horizontal label">NAME:</div>  
                    {this.props.livestream.name}<br/> 
                </div>

                <div className="item">
                    <div className="ui horizontal label">NOTES:</div>  
                    {this.props.livestream.notes}<br/><br/>
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

export default Livestream;