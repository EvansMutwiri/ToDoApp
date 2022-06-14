import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  strict: true,
  state: {
    // data
    title: "Tasks",
    toDoList: [],
    toDoListComplete: [],
    toDoListIncomplete: [],
  },
  getters: {
    getTodos: (state) => state.toDoList,
    getToDo: (state) => state.updatedToDo,
    getToDoComplete: (state) => state.toDoList.filter((todo) => todo.completed),
    getToDoIncomplete: (state) =>
      state.toDoList.filter((todo) => !todo.completed),
  },
  mutations: {
    ADD_NEW(state, todo) {
      // generate id based on last item index
      state.toDoList.length >= 1
        ? (todo.id = state.toDoList[state.toDoList.length - 1].id + 1)
        : (todo.id = 1);

      // add new todo to todolist
      state.toDoList.push({ ...state.toDoList, ...todo });
    },
    DELETE_TASK(state, id) {
      let tasks = state.toDoList;
      let index = tasks.findIndex((task) => task.id === id);

      if (index !== -1) {
        tasks.splice(index, 1);
      }
      state.toDoList = tasks;
    },
    COMPLETE_TASK(state, todo) {
      // add new todo to todolistcomplete and toggle complete status
      todo.completed = !todo.completed;
      todo.date_complete =
        new Date().getDate() +
        "-0" +
        new Date().getMonth() +
        "-" +
        new Date().getFullYear();

      if (todo.completed) {
        state.toDoListComplete.push(todo);
        state.toDoListIncomplete.splice(
          state.toDoListIncomplete.indexOf(todo),
          1
        );
      } else {
        state.toDoListIncomplete.push(todo);
        state.toDoListComplete.splice(state.toDoListComplete.indexOf(todo), 1);
      }
    },

    // initialize todolist with data from server
    SET_POSTS(state, data) {
      state.toDoList = data;
    },

    EDIT_TASK(state, todo) {
      let tasks = state.toDoList;
      let index = tasks.findIndex((task) => task.id === todo.id);
      if (index !== -1) {
        tasks[index] = todo;
      }
      state.toDoList = tasks;
    },
  },
  actions: {
    addNewTask({ commit }, newTask) {
      commit("ADD_NEW", newTask);
    },
    deleteTask({ commit }, id) {
      commit("DELETE_TASK", id);
    },
    completeTask({ commit }, id) {
      commit("COMPLETE_TASK", id);
    },
    initPosts({ commit }) {
      if (this.state.toDoList.length === 0) {
        axios
          .get("https://tychak.github.io/")
          .then((response) => {
            // console.log('response', response.data);
            let data = response.data;
            data.forEach((item) => {
              item.id = parseInt(item.id);
              item.completed = false;
            });
            commit("SET_POSTS", data);
          })
          .catch((error) => {
            console.log("error", error);
          })
          .finally(() => {
            console.log("finally");
          });
      }
    },
    editTask({ commit }, todo) {
      commit("EDIT_TASK", todo);
    },
  },
});
