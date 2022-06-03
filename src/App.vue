<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="container mx-auto px-10">
  <h1 class="text-3xl font-bold m-0 underline pt-10 px-auto text-center">{{ $store.state.title }}</h1>
  <div class="app flex h-screen overflow-hidden">
    
    <div class="header w-2/5 p-4 flex flex-col space-y-10 justify-center">
      
      <nav class="font-mono font-bold flex flex-col space-y-6 px-8 py-36 justify-center border mx-auto text-right w-1/2 h-1/2 bg-slate-300">
        <RouterLink class="hover:text-slate-50 focus:text-slate-50 focus:underline focus:underline-offset-8" to="/">Home</RouterLink>
        <RouterLink class="hover:text-slate-50 focus:text-slate-50 focus:underline focus:underline-offset-8" to="/complete">Complete</RouterLink>
        <RouterLink class="hover:text-slate-50 focus:text-slate-50 focus:underline focus:underline-offset-8" to="/incomplete">Incomplete</RouterLink>
      </nav>
    </div>
    <div class="content w-full">
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
</style>
