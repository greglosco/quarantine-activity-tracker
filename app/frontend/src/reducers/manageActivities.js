import { combineReducers } from 'redux';
import cuid from 'cuid';

const rootReducer = combineReducers({
    fitnessActivities: fitnessActivitiesReducer,
    recipes: recipesReducer,
    hobbies: hobbiesReducer,
    livestreams: livestreamsReducer
});

export default rootReducer;

function fitnessActivitiesReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_FITNESS_ACTIVITY':
            const fitnessActivity = {exercise: action.state.exercise, date: action.state.date, notes: action.state.notes, id: cuid()}
            return [...state, fitnessActivity]
        default:
            return state;
    }
}

function recipesReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_RECIPE':
            return {...state, recipes: [...state.recipes, action.name]}
        default:
            return state;
    }
}

function hobbiesReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_HOBBY':
            return {...state, hobbies: [...state.hobbies, action.exercise]}
        default:
            return state;
    }
}

function livestreamsReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_LIVESTREAM':
            return {...state, livestreams: [...state.livestreams, action.exercise]}
        default:
            return state;
    }
}