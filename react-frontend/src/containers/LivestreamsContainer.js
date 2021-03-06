import React, { Component } from 'react';
import LivestreamsInput from '../components/livestreams/LivestreamsInput';
import Livestreams from '../components/livestreams/Livestreams';
import { addLivestream, fetchLivestreams, deleteLivestream, editLivestream, updateLivestream } from '../actions/livestreams';

import { connect } from 'react-redux';

class LivestreamsContainer extends Component {

    render() {

        const { addLivestream, fetchLivestreams, livestreams, deleteLivestream, editLivestream, updateLivestream } = this.props;

        return (
            <div className="ui padded one column grid">
                <div className="row"><div className="five wide centered column"><LivestreamsInput addLivestream={addLivestream} /><br/></div></div>
                <div className="three wide centered column"><Livestreams fetchLivestreams={fetchLivestreams} livestreams={livestreams} deleteLivestream={deleteLivestream} editLivestream={editLivestream} updateLivestream={updateLivestream} /></div>
            </div>
        )
    }
}

const mapStateToProps = ({livestreams}) => ({livestreams})

export default connect(mapStateToProps, { addLivestream, fetchLivestreams, deleteLivestream, editLivestream, updateLivestream })(LivestreamsContainer);