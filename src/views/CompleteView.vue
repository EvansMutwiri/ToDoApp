<template>
  <div class="complete">
    <Done />
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
import Done from '../components/Complete.vue'
export default {
  props: ['todoDone'],
    setup() {
    },
    components: { Done }
}
</script>
