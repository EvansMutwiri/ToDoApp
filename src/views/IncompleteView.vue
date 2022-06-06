<template>
  <div class="incomplete flex items-center h-screen px-10">
    <Incomplete />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .incomplete {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
import Incomplete from '../components/Incomplete.vue';
export default {
  props: ['todoUndone'],
    setup() {
    },
    components: { Incomplete }
}
</script>