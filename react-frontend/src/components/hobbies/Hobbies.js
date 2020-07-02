import React, { Component } from 'react';
import Hobby from './Hobby';
import EditHobby from './EditHobby'

class Hobbies extends Component {

    componentDidMount() {
       this.props.fetchHobbies()
    }

    state = {
        hobbies: []
    }

    handleOnClick = () => {
        const sortedHobbies = [...this.props.hobbies].sort((a, b) => {
            if (b.name > a.name) {
                return -1
            } else if (a.name < b.name) {
                return 1
            } else {
                return 0
            }
        })
        this.setState({
            hobbies: [...sortedHobbies]
        })
    }

    render() {
        
        const { hobbies, updateHobby, editHobby, deleteHobby} = this.props;
        const hobbies = this.state.hobbies.length === 0 ? this.props.hobbies : this.state.hobbies
        const renderedHobbies = hobbies.map(hobby => (hobby.editing ? <EditHobby key={hobby.id} hobby={hobby} updateHobby={this.props.updateHobby} /> : <Hobby key={hobby.id} hobby={hobby} deleteHobby={this.props.deleteHobby} editHobby={this.props.editHobby} />))

        return (
            <div>
                <ul class="ui red fluid card">
                    <div className="content">
                        <div className="header">Your Hobbies:<br/></div>
                        <button class="ui button" onClick={this.handleOnClick} >Sort Alphabetically by Name</button>
                        {renderedHobbies}
                    </div>
                </ul>
            </div>
        )
    }
}

export default Hobbies;