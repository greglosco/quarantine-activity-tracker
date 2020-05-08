import { combineReducers } from 'redux';
import cuid from 'cuid';

const rootReducer = combineReducers({
    fitnessActivities: fitnessActivitiesReducer,
    recipes: recipesReducer,
    hobbies: hobbiesReducer,
    livestreams: livestreamsReducer
});

export default rootReducer;

function fitnessActivitiesReducer(state = {
    fitnessActivities: [],
}, action) {
    switch (action.type) {
        case 'ADD_FITNESS_ACTIVITY':
            return {...state, fitnessActivities: [...state.fitnessActivities, action.exercise]}
    }
}

function recipesReducer(state = {
    recipes: [],
}, action) {
    switch (action.type) {
        case 'ADD_RECIPE':
            return {...state, recipes: [...state.recipes, action.name]}
    }
}

function hobbiesReducer(state = {
    hobbies: [],
}, action) {
    switch (action.type) {
        case 'ADD_HOBBY':
            return {...state, hobbies: [...state.hobbies, action.exercise]}
    }
}

function livestreamsReducer(state = {
    livestreams: [],
}, action) {
    switch (action.type) {
        case 'ADD_LIVESTREAM':
            return {...state, livestreams: [...state.livestreams, action.exercise]}
    }
}