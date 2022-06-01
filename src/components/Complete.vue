<template>
    <div>
        <h1>This is the done items page</h1>
        <!-- {{ $store.state.toDoListComplete }} -->
        <ul>
            <li v-for="task in tasks" :key="task.id">
                {{ task.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
    // tasks() {
    //     return this.$store.state.toDoListComplete;
    // }
    ...mapState({
        tasks: 'toDoListComplete'
    })
},
}
</script>

<style>

</style>