import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    // data
    title: "to do ",
    toDoList: [
      {
        id: 1,
        title: "Learn Vue",
        completed: false,
        deadline: "2020-01-01",
        created_at:
          new Date().getDate() +
          "-" +
          new Date().getMonth() +
          "-" +
          new Date().getFullYear(),
        date_complete: "date complete",
      },
    ],
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
        },
        DELETE_TASK(state, id) {
            let tasks = state.toDoList;
            let index = tasks.findIndex((task) => task.id === id);
            
            tasks.splice(index, 1);
            state.toDoList = tasks;

        }
    },
    actions: {
        addNewTask({commit}, newTask) {
            commit("ADD_NEW", newTask);
        },
        deleteTask({commit}, id) {
            commit("DELETE_TASK", id);
        }
    },
});
