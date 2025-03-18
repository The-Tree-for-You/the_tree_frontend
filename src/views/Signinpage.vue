<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex flex-col items-center space-y-8">
      <!-- Service Logo -->
      <!--<img src="@/assets/brand-logo.png" alt="Brand Logo" class="w-32 h-auto" />-->
      <h1 class="text-4xl font-bold">The Tree</h1>
      
      <div id="OAuth_btn_Google">
        <!-- Google Sign in button -->
        <a href="#" @click.prevent="signin('google')">
          <img :src="currentImage" alt="Google Signin" class="w-50 h-auto" @mouseover="currentImage = hoverImage" @mouseleave="currentImage = originalImage"/>
        </a>
      </div>
      
    </div>
  </div>
</template>

<script>
import originalImage from "@/assets/web_light_rd_SI@3x.png";
import hoverImage from "@/assets/web_neutral_rd_SI@3x.png";

export default {
  name: "Signinpage",
  data() {
    return {
        // Sign in button images
        originalImage,
        hoverImage,
        currentImage: originalImage
    };
  },
  mounted() {
    if (this.$store.getters.getIsSignin) {
      this.$router.back();
    }
  },
  methods: {
    // 로그인 버튼 클릭 시 로그인 vuex의 action을 실행
    signin(provider) {
      this.$store.dispatch("signin", provider);
    }
  }
  
};
</script>

<style>

</style>