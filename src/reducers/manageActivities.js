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