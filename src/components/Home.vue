<template>
    <div class="w-full text-center h-screen pt-36">
        <div class="home text-4xl py-6 font-bold">
            Home: <span class="text-gray-400">all</span> <span class="text-gray-400"> tasks</span>
        </div>

        <form v-if="input" v-on:submit.prevent="addNewTask()" class="space-y-2 border sm:p-10 bg-gray-100 shadow-xl">
            <input type="text" class="w-full p-2 border border-gray-400" placeholder="Task title..."
                v-model="newTask.title">
            <input type="text" class="w-full p-2 border border-gray-400" placeholder="Task description..."
                v-model.lazy="newTask.description">
            <div class="text-left sm:flex text-gray-400 border border-gray-400 bg-white px-2 items-center">
                Deadline:
                <input type="date" class="w-full p-2" v-model.lazy="newTask.deadline">
            </div>

            <!-- button to add new task or update task -->

            <button class="w-full p-2 border border-gray-400 bg-slate-50 hover:bg-slate-200 shadow-sm">
                {{ this.editing ?
                        'Update' :
                        'Add'
                }}</button>

        </form>
        <button v-else v-on:click="input = true"
            class="w-full p-2 border border-gray-400 bg-slate-50 hover:bg-slate-200 shadow-sm">
            Add Task
        </button>
        <div class="sm:mt-10">
            <div>
                <div v-if="deleted"
                    class="p-4 mt-4 text-sm text-red-500 bg-red-100 rounded dark:bg-red-200 dark:text-red-800"
                    role="alert">
                    <span class="font-medium">Delete Successful!</span>
                </div>
                <div v-if="updated"
                    class="p-4 mt-4 text-sm text-green-500 bg-green-100 rounded dark:bg-green-200 dark:text-green-800"
                    role="alert">
                    <span class="font-medium">Task updated!</span>
                </div>
            </div>
            <!-- <table v-if="tasks.length" v-show="!input" class="table-auto w-full ">
                <thead>
                    <tr>
                        <th class="sm:p-4">Done</th>
                        <th class="sm:p-4">ID</th>
                        <th class="sm:p-4">Title</th>
                        <th class="sm:p-4">Created At</th>
                        <th class="sm:p-4">Completed</th>
                        <th class="sm:p-4">Deadline</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in tasks" :key="task.id" v-bind:class="{ completed: task.completed }"
                        class="border hover:text-gray-400">
                        <td class="sm:p-4 cursor-pointer">
                            <input class="cursor-pointer bg-red-100 border-red-300 text-red-500 focus:ring-red-200"
                                type="checkbox" v-model="task.completed" @click="completeTask(task)">
                        </td>
                        <td class="sm:p-4">{{ task.id }}</td>
                        <td class="sm:p-4">{{ task.title }}</td>
                        <td class="sm:p-4">{{ task.date_added }}</td>
                        <td class="sm:p-4">{{ task.completed === true ? new Date().getFullYear() + '-0' + (new
                            Date().getMonth() + 1) + '-' + new Date().getDate() : 'ongoing'
                            }}</td>

                        <td class="sm:p-4 text-red-400">{{ task.deadline }}</td>

                        <td class="sm:p-4 flex justify-between space-x-2">
                            <button
                                class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-sm"
                                @click="setTask(task)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </button>
                            <button class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded shadow-sm"
                                @click="deleteTask(task.id)">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table> -->

            <ul v-if="tasks.length" v-show="!input" class="cards flex-col sm:flex-row flex-wrap items-center">
                <li v-for="task in tasks" :key="task.id">
                    <div v-bind:class="{ completed: task.completed }">
                        <span class="flex justify-between">
                            <input class="cursor-pointer" type="checkbox" v-model="task.completed"
                                @click="completeTask(task)">
                            <span class="text-blue-400 font-extrabold text-2xl">{{ task.id }}</span>
                        </span>
                        <h3>{{ task.title }}</h3>
                        <p>{{ task.description }}</p>
                        <p>Deadline: {{ task.deadline }}</p>
                        <p>Added: {{ task.date_added }}</p>
                        <button class="bg-blue-400 hover:bg-blue-500 text-white font-bold p-1 rounded shadow-sm m-1"
                            @click="setTask(task)">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </button>
                        <button class="bg-red-400 hover:bg-red-500 text-white font-bold p-1 rounded shadow-sm"
                            @click="deleteTask(task.id)">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
            </ul>
            <div v-else class="text-center text-gray-500">
                No tasks found...
            </div>
        </div>

    </div>

</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { mapActions, mapState } from 'vuex';
export default {
    computed: {
        // tasks() {
        //     return this.$store.state.toDoList;
        // }
        ...mapState({
            tasks: 'toDoList'
        })
    },
    watch: {
        updatedTask: function (newTask) {
            this.updateTask(newTask);
        }
    },
    data: () => ({
        newTask: {
            title: '',
            description: '',
            due_date: '',
            date_added: new Date().getFullYear() + '-0' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
            deadline: '',
            completed: false,
            completed_date: 'ongoing'
        },
        editedTask: null,
        editing: false,
        input: false,
        deleted: false,
        updated: false
    }),
    methods: {
        ...mapActions([
            'completeTask',
        ]),

        addNewTask() {

            if (this.editedTask === null) {

                if (this.newTask.title === '' || this.newTask.description === '' || this.newTask.deadline === '') {
                    alert('Please fill in all the fields');
                    return;
                } else if (this.newTask.deadline < new Date().getFullYear() + '-0' + (new Date().getMonth() + 1) + '-' + new Date().getDate()) {
                    alert('Please make sure the deadline is in the future!');
                    return;
                }

                this.$store.dispatch('addNewTask', this.newTask);

                // set text input to false and reset the form
                this.input = false;
                this.newTask = {
                    title: '',
                    description: '',
                    due_date: '',
                    date_added: new Date().getFullYear() + '-0' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
                    deadline: '',
                    completed: false,
                    completed_date: 'ongoing',
                }
            } else {
                this.$store.dispatch('editTask', this.editedTask);

                // set text input to false and reset the form
                this.editedTask = null;
                this.input = false;

                // track if the task was updated
                this.updated = true;
                setTimeout(() => {
                    this.updated = false;
                }, 2000);
            }
            this.clearFields();
        },
        clearFields() {
            this.newTask = {
                title: '',
                description: '',
                due_date: '',
                date_added: new Date().getFullYear() + '-0' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
                deadline: '',
                completed: false,
                completed_date: 'ongoing'
            },
                this.editing = false;
        },
        deleteTask(task) {
            let conf = confirm('Are you sure you want to delete this task?');
            if (conf === false) return;

            this.$store.dispatch('deleteTask', task);

            this.deleted = true;

            setTimeout(() => {
                this.deleted = false;
            }, 2000);
            // console.log('delete', task.id);
        },

        getPosts() {
            this.$store.dispatch('initPosts');
        },
        setTask(task) {
            // this.$store.dispatch('setTask', { id, task });
            this.input = true;
            this.editing = true;
            this.newTask = task;
            this.editedTask = task;
        }

    },
    created() {
        this.getPosts();
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light');

.completed {
    color: #ccc;
    text-decoration: line-through;
}

.cards {
    list-style: none;
    font-family: 'Shadows Into Light', cursive;

    li {
        float: left;
        margin: 1em;

        div {
            width: 250px;
            height: 250px;
            background: #ccc;
            padding: 10px;
            box-shadow: 2px 2px 2px #ccc;
            transition-duration: 0.5s;
            z-index: 1;

            &:hover,
            &:focus {
                box-shadow: 4px 4px 4px #ccc;
                z-index: 1000;
                position: inherit;
            }

            &:nth-child(odd) {
                background: #cffdd5;
                transform: rotate(4deg);

                &:hover,
                &:focus {
                    background: #cffdd5;
                    transform: scale(1.1);
                }
            }
        }

        &:nth-child(even) {
            div {
                background: #fdf5cf;
                transform: rotate(-4deg);

                &:hover,
                &:focus {
                    background: #cffdd5;
                    transform: scale(1.1);
                }
            }
        }
    }
}
</style>