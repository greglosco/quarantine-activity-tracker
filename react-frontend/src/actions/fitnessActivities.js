export function addFitnessActivity(state) {
    return (dispatch) => {
        fetch(`/fitness_activities`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
                "exercise": state.exercise,
                "date": state.date,
                "notes": state.notes
        })
    })
    .then(res => res.json())
    .then(data => 
        dispatch({ type: 'ADD_FITNESS_ACTIVITY', data })
        )
    }
}

export function fetchFitnessActivities() {
    return dispatch => {
        dispatch({type: "LOADING_FITNESS_ACTIVITIES"})
        fetch(`/fitness_activities`)
        .then(res => res.json())
        .then(res => {
            dispatch({type: "RENDER_FITNESS_ACTIVITIES", res})
        })
    }
}