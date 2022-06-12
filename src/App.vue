<script setup>
import { RouterLink, RouterView } from 'vue-router'
import WorkVue from './components/icons/Work.vue';
import HeroImageVue from './components/HeroImage.vue';

</script>

<template>
<div class="w-screen app-bg bg-slate-50 overflow-scroll">
  <div class="app flex sm:flex-row flex-col overflow-scroll">
    
    <div class="header w-full sm:w-2/5 p-4 flex flex-col space-y-10 justify-center bg-slate-300 shadow-lg hover:shadow-2xl">

  <div>
    <div class="flex justify-center items-start flex-col sm:flex-row">
        <WorkVue /><h1 class="text-2xl font-bold ">{{ $store.state.title }} App</h1>
    </div>
  </div>
      
      <nav class="font-mono font-bold flex flex-col space-y-6 px-8 py-36 justify-center items-stretch border shadow mx-auto w-1/2 h-1/2 hover:shadow-md">
        <RouterLink class="hover:text-slate-50 focus:text-slate-50 focus:underline focus:underline-offset-8 flex justify-between items-center" to="/"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>Home</RouterLink>
        <RouterLink class="hover:text-slate-50 focus:text-slate-50 focus:underline focus:underline-offset-8 flex justify-between items-center" to="/complete"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>Complete</RouterLink>
        <RouterLink class="hover:text-slate-50 focus:text-slate-50 focus:underline focus:underline-offset-8 flex justify-between items-center" to="/incomplete"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> On-going</RouterLink>
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
  background:url(./assets/cards_filled.png) no-repeat right bottom;
  background-size: 50%;
  /* background-color: #fafafa; */
}

.app-bg {
  background:url(./assets/hero-illustration.png) no-repeat right top;
  background-size: 20%;
}
</style>
