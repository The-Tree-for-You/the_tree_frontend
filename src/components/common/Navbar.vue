<template>
  <nav class="fixed top-0 left-0 w-full bg-transparent p-4 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-xl font-bold">
        <router-link to="/" class="text-black hover:text-white">The Tree</router-link>
      </div>
      <ul class="flex space-x-4">
        <li>
          <router-link to="/signin" class="text-black hover:text-white">SIGN IN</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import router from '@/router';

export default {
  name: 'navbar-component'
}
</script>

<style>

</style>