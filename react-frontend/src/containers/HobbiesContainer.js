import React, { Component } from 'react';
import HobbiesInput from '../components/hobbies/HobbiesInput';
import Hobbies from '../components/hobbies/Hobbies';
import { addHobby, fetchHobbies, deleteHobby, editHobby, updateHobby } from '../actions/hobbies';

import { connect } from 'react-redux';

class HobbiesContainer extends Component {

    render() {
        return (
            <div>Track Your Hobbies:
                <HobbiesInput addHobby={this.props.addHobby} />
                <Hobbies fetchHobbies={this.props.fetchHobbies} hobbies={this.props.hobbies} deleteHobby={this.props.deleteHobby} editHobby={this.props.editHobby} updateHobby={this.props.updateHobby} />
            </div>
        )
    }
}

const mapStateToProps = ({hobbies}) => ({hobbies})

export default connect(mapStateToProps, { addHobby, fetchHobbies, deleteHobby, editHobby, updateHobby })(HobbiesContainer);