export function addHobby(state) {
    return (dispatch) => {
        fetch(`https://quarantine-activity-tracker.herokuapp.com/hobbies`, {
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
        dispatch({ type: 'ADD_HOBBY', data })
        )
    }
}

export function fetchHobbies() {
    return dispatch => {
        fetch(`https://quarantine-activity-tracker.herokuapp.com/hobbies`)
        .then(res => res.json())
        .then(res => {
            dispatch({type: "RENDER_HOBBIES", res})
        })
    }
}

export function deleteHobby(id) {
    return (dispatch) => {
        fetch(`https://quarantine-activity-tracker.herokuapp.com/hobbies/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
        .then(res => res.json())
        .then(res => 
            dispatch({ type: "DELETE_HOBBY", id: res.id })
        )
    } 
}

export function editHobby(id) {
    return dispatch => {
        dispatch({ type: 'EDIT_HOBBY', id })
    }
}

export function updateHobby(id, state) {
    return (dispatch) => {
        fetch(`https://quarantine-activity-tracker.herokuapp.com/hobbies/${id}`, {
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
        dispatch({ type: 'UPDATE_HOBBY', data })
        )
    }
}