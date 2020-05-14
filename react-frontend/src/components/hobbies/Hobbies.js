import React, { Component } from 'react';
import Hobby from './Hobby';
import EditHobby from './EditHobby'

class Hobbies extends Component {

    componentDidMount() {
       this.props.fetchHobbies()
    }

    render() {

        const hobbies = this.props.hobbies.map(hobby => (hobby.editing ? <EditHobby key={hobby.id} hobby={hobby} updateHobby={this.props.updateHobby} /> : <Hobby key={hobby.id} hobby={hobby} deleteHobby={this.props.deleteHobby} editHobby={this.props.editHobby} />))

        return (
            <div>
                <ul class="ui red fluid card">
                    <div className="content">
                        <div className="header">Your Hobbies:<br/></div>
                        {hobbies}
                    </div>
                </ul>
            </div>
        )
    }
}

export default Hobbies;