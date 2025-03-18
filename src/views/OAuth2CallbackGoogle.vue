<template>
  <div class="flex items-center justify-center h-screen">
    <div v-if="loading" class="flex flex-col items-center">
        <div class="w-16 h-16 border-4 border-black-500 border-t-transparent rounded-full animate-spin mb-2"></div>
        <p class="mt-4">로그인 처리중...</p>
    </div>
    <p v-else-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'OAuth2CallbackGoogle',
  data() {
    return {
      loading: true,
      errorMessage: '',
    };
  },
  mounted() {
    if (this.$store.getters.getIsSignin === false) {
        const code = this.$route.query.code;
        if (code) {
            // Google OAuth 콜백 처리
            this.$store.dispatch("signinCallback", {code, provider: "google"});
        } else {
            this.errorMessage = '로그인 실패';
            this.$router.replace('/signin');
        }
    } else {
        this.$router.back();
    }
    
  },
};
</script>

<style>

</style>