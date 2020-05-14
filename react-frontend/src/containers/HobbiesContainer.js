import React, { Component } from 'react';
import HobbiesInput from '../components/hobbies/HobbiesInput';
import Hobbies from '../components/hobbies/Hobbies';
import { addHobby, fetchHobbies, deleteHobby, editHobby, updateHobby } from '../actions/hobbies';

import { connect } from 'react-redux';

class HobbiesContainer extends Component {

    render() {
        return (
            <div className="ui padded one column grid">
                <div className="row"><div className="five wide centered column"><HobbiesInput addHobby={this.props.addHobby} /><br/></div></div>
                <div className="three wide centered column"><Hobbies fetchHobbies={this.props.fetchHobbies} hobbies={this.props.hobbies} deleteHobby={this.props.deleteHobby} editHobby={this.props.editHobby} updateHobby={this.props.updateHobby} /></div>
            </div>
        )
    }
}

const mapStateToProps = ({hobbies}) => ({hobbies})

export default connect(mapStateToProps, { addHobby, fetchHobbies, deleteHobby, editHobby, updateHobby })(HobbiesContainer);