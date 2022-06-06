<script setup>
import { RouterLink, RouterView } from 'vue-router'
import WorkVue from './components/icons/Work.vue';
import HeroImageVue from './components/HeroImage.vue';

</script>

<template>
<div class="container">
  <div class="app flex overflow-scroll">
    
    <div class="header w-2/5 p-4 flex flex-col space-y-10 justify-center bg-slate-300">

  <div>
    <div class="flex justify-center items-start">
        <WorkVue /><h1 class="text-2xl font-bold ">{{ $store.state.title }} App</h1>
    </div>
  </div>
      
      <nav class="font-mono font-bold flex flex-col space-y-6 px-8 py-36 justify-center border mx-auto text-right w-1/2 h-1/2">
        <RouterLink class="hover:text-slate-50 focus:text-slate-50 focus:underline focus:underline-offset-8" to="/">Home</RouterLink>
        <RouterLink class="hover:text-slate-50 focus:text-slate-50 focus:underline focus:underline-offset-8" to="/complete">Complete</RouterLink>
        <RouterLink class="hover:text-slate-50 focus:text-slate-50 focus:underline focus:underline-offset-8" to="/incomplete">Incomplete</RouterLink>
      </nav>
    </div>
    <div class="content w-full" >
      <RouterView />
    </div>
  </div>
</div>
</template>

<style>
@import '@/assets/tailwind.css';

body {
  max-width: 1280px;
  margin: 0 auto;
  background: rgb(209, 213, 217);
  font-weight: normal;
}
.header {
  background:url(./assets/hero-illustration.png) no-repeat right bottom;
  background-size: 25%;
  /* background-color: #fafafa; */
}
</style>
