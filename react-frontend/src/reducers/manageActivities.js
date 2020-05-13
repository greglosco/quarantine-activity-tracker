import { combineReducers } from 'redux';

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
            const recipe = {name: action.data.name, date: action.data.date, notes: action.data.notes, id: action.data.id}
            return [...state, recipe]
        case 'RENDER_RECIPES':
            return [...action.res]
        case 'DELETE_RECIPE':
            const recipes = state.filter(obj => obj.id !== action.id)
            return [...recipes]
        case 'EDIT_RECIPE':
            return state.map(recipe => recipe.id === action.id ? {...recipe, editing: !recipe.editing}: recipe )
        case 'UPDATE_RECIPE':
            return state.map(recipe => {
                if (recipe.id === action.data.id) {
                    return {
                        ...recipe,
                        name: action.data.name,
                        date: action.data.date,
                        notes: action.data.notes,
                        id: action.data.id,
                        editing: !recipe.editing
                    }
                } else return recipe;
            })
        default:
            return state;
    }
}

function hobbiesReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_HOBBY':
            const hobby = {name: action.data.name, date: action.data.date, notes: action.data.notes, id: action.data.id}
            return [...state, hobby]
        case 'RENDER_HOBBIES':
            return [...action.res]
        case 'DELETE_HOBBY':
            const hobbies = state.filter(obj => obj.id !== action.id)
            return [...hobbies]
        case 'EDIT_HOBBY':
            return state.map(hobby => hobby.id === action.id ? {...hobby, editing: !hobby.editing}: hobby )
        case 'UPDATE_HOBBY':
            return state.map(hobby => {
                if (hobby.id === action.data.id) {
                    return {
                        ...hobby,
                        name: action.data.name,
                        date: action.data.date,
                        notes: action.data.notes,
                        id: action.data.id,
                        editing: !hobby.editing
                    }
                } else return hobby;
            })
        default:
            return state;
    }
}

function livestreamsReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_LIVESTREAM':
            const livestream = {name: action.data.name, date: action.data.date, notes: action.data.notes, id: action.data.id}
            return [...state, livestream]
        case 'RENDER_LIVESTREAMS':
            return [...action.res]
        case 'DELETE_LIVESTREAM':
            const livestreams = state.filter(obj => obj.id !== action.id)
            return [...livestreams]
        case 'EDIT_LIVESTREAM':
            return state.map(livestream => livestream.id === action.id ? {...livestream, editing: !livestream.editing}: livestream )
        case 'UPDATE_LIVESTREAM':
            return state.map(livestream => {
                if (livestream.id === action.data.id) {
                    return {
                        ...livestream,
                        name: action.data.name,
                        date: action.data.date,
                        notes: action.data.notes,
                        id: action.data.id,
                        editing: !livestream.editing
                    }
                } else return livestream;
            })
        default:
            return state;
    }
}