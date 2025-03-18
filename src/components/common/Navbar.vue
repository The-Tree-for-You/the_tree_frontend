<template>
  <nav class="fixed top-0 left-0 w-full bg-transparent p-4 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-xl font-bold">
        <router-link to="/" class="text-black hover:text-white">The Tree</router-link>
      </div>
      <ul class="flex space-x-4">
        <li v-if="!isSignin">
          <router-link v-if="!isSignin" to="/signin" class="text-black hover:text-white">SIGN IN</router-link>
        </li>
        <template v-if="isSignin">
          <li v-if="isSignin">
            <router-link v-if="isSignin" to="/mypage" class="text-black hover:text-white">MY PAGE</router-link>
          </li>
          <li v-if="isSignin">
            <a v-if="isSignin" class="text-black hover:text-white" @click="logoutSubmit">LOG OUT</a>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import router from '@/router';

export default {
  name: 'navbar-component',
  data() {
    return {
    }
  },
  mounted() {
    this.isSignin;
  },
  computed: {
    isSignin() {
      return this.$store.getters.getIsSignin;
    }
  },
  methods: {
    logoutSubmit() {
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style>

</style>