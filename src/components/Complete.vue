<template>
    <div class="w-full text-center">
        <div class="home text-4xl py-6 font-bold">
            Tasks: <span class="text-gray-400">completed</span>
        </div>
        <div class="overflow-x-auto border-x border-t">
            <table class="table-auto w-full">
               <thead class="border-b">
                  <tr class="bg-gray-100">
                     <th class="text-center p-4 border font-bold">
                        ID
                     </th>
                     <th class="text-center p-4 border font-bold">
                        Title
                     </th>
                     <th class="text-center p-4 border font-bold">
                        Description
                     </th>
                     <th class="text-center p-4 border font-bold">
                        Deadline
                     </th>
                     <th class="text-center p-4 border font-bold">
                        Date added
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr class="border-b hover:bg-gray-50" v-for="task in tasks" :key="task.id">
                     <td class="p-4 border">
                        {{ task.id }}
                     </td>
                     <td class="p-4 border">
                        {{ task.title }}
                     </td>
                     <td class="p-4 border">
                        {{ task.description }}
                     </td>
                     <td class="p-4 border text-red-400">
                        {{ task.deadline }}
                     </td>
                        <td class="p-4 border">
                            {{ task.date_added }}
                        </td>
                  </tr>
               </tbody>
            </table>
         </div>
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