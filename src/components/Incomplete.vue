<template>
    <div class="undone w-full text-center">
        <h1>This is the un-done items page</h1>
        <!-- {{ $store.state.toDoListIncomplete }} -->
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
        //     return this.$store.state.toDoListUncomplete
        // }
        ...mapState({
            tasks: 'toDoListUncomplete'
        })
    }

}
</script>

<style>

</style>