export const ADD_RECIPE ='ADD_RECIPE'
export const REMOVE_FORM_CALLENDAR='REMOVE_FORM_CALLENDAR'

export function addRecipe({day,recipe,meal}){ //action creator
    return {
        type:ADD_RECIPE,
        recipe,
        day,
        meal
    }
}

export function removeFromCalendar({day,meal}){
    return {
        type:REMOVE_FORM_CALLENDAR,
        day,
        meal
    }
}