import { ALL_TASK } from "../actions";

let initialState = {
    list : [  { id: 2, title: "dummy Task"  }],
    nextId : '',
}


export default function tasks ( state = initialState, actions){

    switch (actions.type) {
        case ALL_TASK:
            return {
                ...state,
                list: actions.tasks
            }
    
        default:
            return{
                ...state,
            }
    }

}