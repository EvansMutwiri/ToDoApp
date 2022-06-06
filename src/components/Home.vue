<template>
    <div class="w-full text-center">
        <div class="home text-4xl py-6 font-bold">
            Home: <span class="text-gray-400">all</span> <span class="text-gray-400"> tasks</span>
        </div>

        <form v-if="input" v-on:submit.prevent="addNewTask()" class="space-y-2 border sm:p-10 bg-gray-100 shadow-xl">
            <input type="text" class="w-full p-2 border border-gray-400" placeholder="Task title..."
                v-model.lazy="newTask.title">
            <input type="text" class="w-full p-2 border border-gray-400" placeholder="Task description..."
                v-model.lazy="newTask.description">
            <input type="date" class="w-full p-2 border border-gray-400" placeholder="Task deadline..."
                v-model.lazy="newTask.deadline">

            <button class="w-full p-2 border border-gray-400 bg-slate-50 hover:bg-slate-200 shadow-sm">{{ this.editing ? 'Update' :
                    'Add'
            }}</button>

        </form>
        <button v-else v-on:click="input = true" class="w-full p-2 border border-gray-400 bg-slate-50 hover:bg-slate-200 shadow-sm">
            Add Task
        </button>
        <div class="mt-10">
            <table v-if="tasks.length" v-show="!input" class="table-auto">
                <thead>
                    <tr>
                        <th class="p-4">Done</th>
                        <th class="p-4">ID</th>
                        <th class="p-4">Title</th>
                        <th class="p-4">Created At</th>
                        <th class="p-4">Completed</th>
                        <th class="p-4">Deadline</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in tasks" :key="task.id" v-bind:class="{ completed: task.completed }"
                        class="border hover:text-gray-400">
                        <td class="p-4 cursor-pointer">
                            <input class="cursor-pointer bg-red-100 border-red-300 text-red-500 focus:ring-red-200"
                                type="checkbox" v-model="task.completed" @click="completeTask(task)">
                        </td>
                        <td class="p-4">{{ task.id }}</td>
                        <td class="p-4">{{ task.title }}</td>
                        <td class="p-4">{{ task.date_added }}</td>
                        <td class="p-4">{{ task.completed === true ? new Date().getFullYear() + '-' + (new
                                Date().getMonth() + 1) + '-' + new Date().getDate() : 'ongoing'
                        }}</td>

                        <td class="p-4 text-red-400">{{ task.deadline }}</td>

                        <td class="p-4 flex justify-between space-x-2">
                            <button class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-sm"
                                @click="setTask(task)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </button>
                            <button class="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-sm"
                                @click="deleteTask(task.id)">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-else class="text-center text-gray-500">
                No tasks found...
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { mapState } from 'vuex';
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
            date_added: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
            deadline: '',
            completed: false,
            completed_date: 'ongoing'
        },
        editedTask: null,
        editing: false,
        input: false
    }),
    methods: {
        addNewTask() {
            // console.log(this.newTask);
            // dispatch the action to add the new task

            if (this.editedTask === null) {

                if (this.newTask.title === '' || this.newTask.description === '' || this.newTask.deadline === '') {
                    alert('Please fill in all the fields');
                    return;
                }

                this.$store.dispatch('addNewTask', this.newTask);
                this.input = false;
                this.newTask = {
                    title: '',
                    description: '',
                    due_date: '',
                    date_added: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
                    deadline: '',
                    completed: false,
                    completed_date: 'ongoing',
                }
            } else {
                this.$store.dispatch('editTask', this.editedTask);
                this.editedTask = null;
                this.input = false;
            }
            this.clearFields();
        },
        clearFields() {
            this.newTask = {
                title: '',
                description: '',
                due_date: '',
                date_added: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
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
            // console.log('delete', task.id);
        },
        completeTask(task) {
            this.$store.dispatch('completeTask', task);
            // console.log('complete', task.id);
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

<style scoped>
.completed {
    color: #ffffff;
    /* text-decoration: line-through; */
    background-color: #86EFAC;
}
</style>