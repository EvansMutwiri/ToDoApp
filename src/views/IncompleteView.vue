<template>
  <div class="incomplete">
    <UnDone />
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
import UnDone from '../components/Incomplete.vue';
export default {
  props: ['todoUndone'],
    setup() {
    },
    components: { UnDone }
}
</script>