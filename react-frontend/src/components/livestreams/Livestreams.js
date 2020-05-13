import React, { Component } from 'react';
import Livestream from './Livestream';
import EditLivestream from './EditLivestream'

class Livestreams extends Component {

    componentDidMount() {
       this.props.fetchLivestreams()
    }

    render() {

        const livestreams = this.props.livestreams.map(livestream => (livestream.editing ? <EditLivestream key={livestream.id} livestream={livestream} updateLivestream={this.props.updateLivestream} /> : <Livestream key={livestream.id} livestream={livestream} deleteLivestream={this.props.deleteLivestream} editLivestream={this.props.editLivestream} />))

        return (
            <div>
                <ul className="container">
                    Your Livestreams:
                    {livestreams}
                </ul>
            </div>
        )
    }
}

export default Livestreams;