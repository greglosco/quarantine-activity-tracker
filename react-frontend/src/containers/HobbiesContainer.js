import React, { Component } from 'react';
import HobbiesInput from '../components/hobbies/HobbiesInput';
import Hobbies from '../components/hobbies/Hobbies';
import { addHobby, fetchHobbies, deleteHobby, editHobby, updateHobby } from '../actions/hobbies';

import { connect } from 'react-redux';

class HobbiesContainer extends Component {

    render() {

        const { addHobby, fetchHobbies, hobbies, deleteHobby, editHobby, updateHobby } = this.props;

        return (
            <div className="ui padded one column grid">
                <div className="row"><div className="five wide centered column"><HobbiesInput addHobby={addHobby} /><br/></div></div>
                <div className="three wide centered column"><Hobbies fetchHobbies={fetchHobbies} hobbies={hobbies} deleteHobby={deleteHobby} editHobby={editHobby} updateHobby={updateHobby} /></div>
            </div>
        )
    }
}

const mapStateToProps = ({hobbies}) => ({hobbies})

export default connect(mapStateToProps, { addHobby, fetchHobbies, deleteHobby, editHobby, updateHobby })(HobbiesContainer);