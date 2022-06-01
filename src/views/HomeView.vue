<template>
  <div class="home h-screen -mt-10 flex items-center">
    <Home />
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>

<script>
import Home from '../components/Home.vue'
export default {
  props: ['todo'],
    setup() {
    },
    components: { Home }
}
</script>