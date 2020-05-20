import React, { Component } from 'react';
import Livestream from './Livestream';
import EditLivestream from './EditLivestream'

class Livestreams extends Component {

    componentDidMount() {
       this.props.fetchLivestreams()
    }

    state = {
        livestreams: []
    }

    handleOnClick = () => {
        const sortedLivestreamNames = [...this.props.livestreams].sort((a, b) => {
            if (b.name > a.name) {
                return -1
            } else if (a.name < b.name) {
                return 1
            } else {
                return 0
            }
        })
        this.setState({
            livestreams: [...sortedLivestreamNames]
        })
    }

    render() {
        const livestreams = this.state.livestreams.length === 0 ? this.props.livestreams : this.state.livestreams
        const renderedLivestreams = livestreams.map(livestream => (livestream.editing ? <EditLivestream key={livestream.id} livestream={livestream} updateLivestream={this.props.updateLivestream} /> : <Livestream key={livestream.id} livestream={livestream} deleteLivestream={this.props.deleteLivestream} editLivestream={this.props.editLivestream} />))

        return (
            <div>
                <ul className="ui fluid orange card">
                   <div className="content">
                        <div className="header">Your Livestreams:<br/></div>
                        <button class="ui button" onClick={this.handleOnClick} >Sort Alphabetically by Name</button>
                        {renderedLivestreams}
                   </div>
                </ul>
            </div>
        )
    }
}

export default Livestreams;