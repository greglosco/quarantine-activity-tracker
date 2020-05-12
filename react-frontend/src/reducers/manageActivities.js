import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    fitnessActivities: fitnessActivitiesReducer,
    // recipes: recipesReducer,
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
            return [...state, ...action.res]
        case 'DELETE_FITNESS_ACTIVITY':
            const fitnessActivities = state.filter(obj => obj.id !== action.id)
            return [...fitnessActivities]
        default:
            return state;
    }
}

// function recipesReducer(state = [], action) {
//     switch (action.type) {
//         case 'ADD_RECIPE':
//             return {...state, recipes: [...state.recipes, action.name]}
//         default:
//             return state;
//     }
// }

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