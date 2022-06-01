import { createStore } from "vuex";
import axios from "axios";



export default createStore({
    state: {   // data
        title: 'to do ',
        toDoList: [
            {
                id: 1,
                title: 'Learn Vue',
                completed: false,
                deadline: '2020-01-01',
                created_at: new Date().getDate() + '-' + new Date().getMonth() + '-' + new Date().getFullYear(),
                date_complete: 'date complete',
            }
        ],
        toDoListComplete: [

        ],
        toDoListUncomplete: [

        ]
    },
    getters: {
        getTodos: state => state.toDoList,
        getToDo: state => state.updatedToDo,
    }
    }
);