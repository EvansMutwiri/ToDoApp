import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    // data
    title: "to do ",
    toDoList: [],
    toDoListComplete: [],
    toDoListUncomplete: [],
  },
  getters: {
    getTodos: (state) => state.toDoList,
    getToDo: (state) => state.updatedToDo,
  },
    mutations: {
        ADD_NEW(state, todo) {
            state.toDoList.length >= 1 ? todo.id = state.toDoList[state.toDoList.length - 1].id + 1 : todo.id = 1;
            state.toDoList.push({...state.toDoList, ...todo});
            // state.toDoListUncomplete.push({...state.toDoList, ...todo});

            todo.completed ? state.toDoListComplete.push({...state.toDoList, ...todo}) : state.toDoListUncomplete.push({...state.toDoList, ...todo});
        },
        DELETE_TASK(state, id) {
            let tasks = state.toDoList;
            let index = tasks.findIndex((task) => task.id === id);
            
            tasks.splice(index, 1);
            state.toDoList = tasks;
        },
        COMPLETE_TASK(state, todo) {
            
            todo.completed = !todo.completed;
            todo.date_complete = new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear();
            state.toDoListComplete.push(todo);
            todo.completed ? state.toDoListUncomplete.splice(state.toDoListUncomplete.indexOf(todo), 1) : state.toDoListUncomplete.push(todo);

        }
    },
    actions: {
        addNewTask({commit}, newTask) {
            commit("ADD_NEW", newTask);
        },
        deleteTask({commit}, id) {
            commit("DELETE_TASK", id);
        },
        completeTask({commit}, id) {
            commit("COMPLETE_TASK", id);
        }
    },
});
