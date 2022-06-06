<template>
  <div class="complete flex items-center h-screen px-10">
    <Complete />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .complete {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script>
import Complete from '../components/Complete.vue'
export default {
  props: ['todoDone'],
    setup() {
    },
    components: { Complete }
}
</script>
