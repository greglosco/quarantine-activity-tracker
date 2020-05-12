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
        fetch(`/fitness_activities`)
        .then(res => res.json())
        .then(res => {
            dispatch({type: "RENDER_FITNESS_ACTIVITIES", res})
        })
    }
}

export function deleteFitnessActivity(id) {
    return (dispatch) => {
        fetch(`http://localhost:3001/fitness_activities/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
        .then(res => res.json())
        .then(res => 
            dispatch({ type: "DELETE_FITNESS_ACTIVITY", id: res.id })
        )
    } 
}

// export function editFitnessActivity(id) {
//     return (dispatch) => {
//         fetch(`http://localhost:3001/fitness_activities/${id}`, {
//         method: 'PATCH',
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//                 "exercise": state.exercise,
//                 "date": state.date,
//                 "notes": state.notes
//         })
//     })
//     .then(res => res.json())
//     .then(data => 
//         dispatch({ type: 'ADD_FITNESS_ACTIVITY', data })
//         )
//     }
// }