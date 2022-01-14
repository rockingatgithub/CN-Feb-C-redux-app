export const ALL_TASK = "ALL_TASK";

export function getAllTask(){
    return async function(dispatch){
        let temp = [];
        let response = await  fetch('https://jsonplaceholder.typicode.com/todos')
        temp = await response.json();
        dispatch(addAllTask(temp));
    }
}


export function addAllTask(tasks){

    return {
        type: ALL_TASK,
        tasks, 
    }

}