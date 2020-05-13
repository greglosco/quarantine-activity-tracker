export function addLivestream(state) {
    return (dispatch) => {
        fetch(`/livestreams`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
                "name": state.name,
                "date": state.date,
                "notes": state.notes
        })
    })
    .then(res => res.json())
    .then(data => 
        dispatch({ type: 'ADD_LIVESTREAM', data })
        )
    }
}

export function fetchHobbies() {
    return dispatch => {
        fetch(`/livestreams`)
        .then(res => res.json())
        .then(res => {
            dispatch({type: "RENDER_LIVESTREAMS", res})
        })
    }
}

export function deleteLivestream(id) {
    return (dispatch) => {
        fetch(`http://localhost:3001/livestreams/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
        .then(res => res.json())
        .then(res => 
            dispatch({ type: "DELETE_LIVESTREAM", id: res.id })
        )
    } 
}

export function editLivestream(id) {
    return dispatch => {
        dispatch({ type: 'EDIT_LIVESTREAM', id })
    }
}

export function updateLivestream(id, state) {
    return (dispatch) => {
        fetch(`http://localhost:3001/livestreams/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
                "name": state.name,
                "date": state.date,
                "notes": state.notes
        })
    })
    .then(res => res.json())
    .then(data => 
        dispatch({ type: 'UPDATE_LIVESTREAM', data })
        )
    }
}