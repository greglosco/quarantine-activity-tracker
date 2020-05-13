import React, { Component } from 'react';
import LivestreamsInput from '../components/livestreams/LivestreamsInput';
import Livestreams from '../components/livestreams/Livestreams';
import { addLivestream, fetchLivestreams, deleteLivestream, editLivestream, updateLivestream } from '../actions/livestreams';

import { connect } from 'react-redux';

class LivestreamsContainer extends Component {

    render() {
        return (
            <div>Track Your Livestreams:
                <LivestreamsInput addLivestream={this.props.addLivestream} />
                <Livestreams fetchLivestreams={this.props.fetchLivestreams} livestreams={this.props.livestreams} deleteLivestream={this.props.deleteLivestream} editLivestream={this.props.editLivestream} updateLivestream={this.props.updateLivestream} />
            </div>
        )
    }
}

const mapStateToProps = ({livestreams}) => ({livestreams})

export default connect(mapStateToProps, { addLivestream, fetchLivestreams, deleteLivestream, editLivestream, updateLivestream })(LivestreamsContainer);