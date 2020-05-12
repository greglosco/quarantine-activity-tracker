import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    fitnessActivities: fitnessActivitiesReducer,
    recipes: recipesReducer,
    // hobbies: hobbiesReducer,
    // livestreams: livestreamsReducer
});

export default rootReducer;

function fitnessActivitiesReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_FITNESS_ACTIVITY':
            const fitnessActivity = {exercise: action.data.exercise, date: action.data.date, notes: action.data.notes, id: action.data.id}
            return [...state, fitnessActivity]
        case 'RENDER_FITNESS_ACTIVITIES':
            return [...action.res]
        case 'DELETE_FITNESS_ACTIVITY':
            const fitnessActivities = state.filter(obj => obj.id !== action.id)
            return [...fitnessActivities]
        case 'EDIT_FITNESS_ACTIVITY':
            return state.map(fitnessActivity => fitnessActivity.id === action.id ? {...fitnessActivity, editing: !fitnessActivity.editing}: fitnessActivity )
        case 'UPDATE_FITNESS_ACTIVITY':
            return state.map(fitnessActivity => {
                if (fitnessActivity.id === action.data.id) {
                    return {
                        ...fitnessActivity,
                        exercise: action.data.exercise,
                        date: action.data.date,
                        notes: action.data.notes,
                        id: action.data.id,
                        editing: !fitnessActivity.editing
                    }
                } else return fitnessActivity;
            })
        default:
            return state;
    }
}

function recipesReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_RECIPE':
            const fitnessActivity = {exercise: action.data.exercise, date: action.data.date, notes: action.data.notes, id: action.data.id}
            return [...state, fitnessActivity]
        case 'RENDER_FITNESS_ACTIVITIES':
            return [...action.res]
        case 'DELETE_RECIPE':
            const recipes = state.filter(obj => obj.id !== action.id)
            return [...recipes]
        case 'EDIT_RECIPE':
            return state.map(fitnessActivity => fitnessActivity.id === action.id ? {...fitnessActivity, editing: !fitnessActivity.editing}: fitnessActivity )
        case 'UPDATE_RECIPE':
            return state.map(fitnessActivity => {
                if (fitnessActivity.id === action.data.id) {
                    return {
                        ...fitnessActivity,
                        exercise: action.data.exercise,
                        date: action.data.date,
                        notes: action.data.notes,
                        id: action.data.id,
                        editing: !fitnessActivity.editing
                    }
                } else return fitnessActivity;
            })
        default:
            return state;
    }
}

// function hobbiesReducer(state = [], action) {
//     switch (action.type) {
//         case 'ADD_HOBBY':
//             return {...state, hobbies: [...state.hobbies, action.exercise]}
//         default:
//             return state;
//     }
// }

// function livestreamsReducer(state = [], action) {
//     switch (action.type) {
//         case 'ADD_LIVESTREAM':
//             return {...state, livestreams: [...state.livestreams, action.exercise]}
//         default:
//             return state;
//     }
// }