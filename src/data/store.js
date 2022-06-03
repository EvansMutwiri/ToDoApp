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
            state.toDoListUncomplete.push({...state.toDoList, ...todo});
        },
        DELETE_TASK(state, id) {
            let tasks = state.toDoList;
            let index = tasks.findIndex((task) => task.id === id);
            
            if(index !== -1) {
                tasks.splice(index, 1);
            }
            state.toDoList = tasks;
        },
        COMPLETE_TASK(state, todo) {
            
            todo.completed = !todo.completed;
            todo.date_complete = new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear();
            
            if (todo.completed) {
                state.toDoListComplete.push(todo);
                state.toDoListUncomplete.splice(state.toDoListUncomplete.indexOf(todo), 1);
            } else {
                state.toDoListUncomplete.push(todo);
                state.toDoListComplete.splice(state.toDoListComplete.indexOf(todo), 1);
            }
        },
        SET_POSTS(state, data) {
            state.toDoList = data;
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
        },
        initPosts({commit}) {
            if(this.state.toDoList.length === 0) {
                axios.get("https://tychak.github.io/").then((response) => {
                // console.log('response', response.data);
                let data = response.data;
                data.forEach((item) => {
                    item.id = parseInt(item.id);
                    item.completed = false;
                });
                commit("SET_POSTS", data);
            });
            }
        }
    },
});
