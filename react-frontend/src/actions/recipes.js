export function addRecipe(state) {
    return (dispatch) => {
        fetch(`/recipes`, {
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
        dispatch({ type: 'ADD_RECIPE', data })
        )
    }
}

export function fetchRecipes() {
    return dispatch => {
        fetch(`/recipes`)
        .then(res => res.json())
        .then(res => {
            dispatch({type: "RENDER_RECIPES", res})
        })
    }
}

export function deleteRecipe(id) {
    return (dispatch) => {
        fetch(`http://localhost:3001/recipes/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
        .then(res => res.json())
        .then(res => 
            dispatch({ type: "DELETE_RECIPE", id: res.id })
        )
    } 
}

export function editRecipe(id) {
    return dispatch => {
        dispatch({ type: 'EDIT_RECIPE', id })
    }
}

export function updateRecipe(id, state) {
    return (dispatch) => {
        fetch(`http://localhost:3001/recipes/${id}`, {
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
        dispatch({ type: 'UPDATE_RECIPE', data })
        )
    }
}