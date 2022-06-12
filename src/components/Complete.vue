<template>
    <div class="w-full text-center overflow-scroll">
        <div class="home text-4xl py-6 font-bold">
            Tasks: <span class="text-gray-400">completed</span>
        </div>
        <!-- <div class="overflow-x-auto border-x border-t">
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
         </div> -->
         
         <ul v-if="tasks.length" class="cards overflow-scroll">
            <li v-for="task in tasks" :key="task.id">
                <div>
                     <h3>{{ task.title }}</h3>
                     <p>{{ task.description }}</p>
                     <p>Deadline: {{ task.deadline }}</p>
                     <p>Added: {{ task.date_added }}</p>
                     <p>Date completed: {{ task.date_complete }}</p>
                </div>
            </li>
         </ul>

         <h3 v-else >No completed tasks</h3>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
    computed: {
    // tasks() {
    //     return this.$store.state.toDoListComplete;
    // }
   //  ...mapState({
   //      tasks: 'toDoListComplete'
   //  })
   ...mapGetters({
        tasks: 'getToDoComplete'
    })
},
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light');
.cards{
   list-style: none;
   font-family: 'Shadows Into Light', cursive;
   li{
      float: left;
      margin: 1em;
      
      div {
         width: 200px;
         height: 200px;
         background: #ccc;
         padding: 10px;
         box-shadow: 2px 2px 2px #ccc;
         transition-duration: 0.5s;
         z-index: 1;

         &:hover, &:focus {
            box-shadow: 4px 4px 4px #ccc;
            z-index: 1000;
            position: inherit;
         }

         &:nth-child(odd) {
            background: #cffdd5;
            transform: rotate(4deg);

            &:hover, &:focus {
               background: #cffdd5;
               transform: scale(1.1);
            }
         }
      }

      &:nth-child(even) {
         div {
            background: #fdf5cf;
            transform: rotate(-4deg);

            &:hover, &:focus {
               background: #cffdd5;
               transform: scale(1.1);
            }
         }
      }
   }
}
</style>