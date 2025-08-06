<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <img :src="TheTreeLogo" alt="The Tree Logo" class="w-32 h-auto mb-6" />
        <p class="text-lg text-gray-700 mb-6">
            알 수 없는 오류가 발생했습니다.
        </p>
        <p class="text-lg text-gray-700 mb-6">
            관리자에게 문의해주세요.
        </p>
        <a href="/" class="px-6 py-3 text-black font-semibold hover:font-bold transition duration-300">
            메인 페이지로 이동 >>
        </a>
    </div>
</template>

<script>
import TheTreeLogo from '@/assets/The_tree_Icon.png';

export default {
    name: '401Unauthorized',
    data() {
        return {
            TheTreeLogo
        };
    },
};
</script>

<style scoped>
</style>