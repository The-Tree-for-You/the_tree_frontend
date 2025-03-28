<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <img :src="TheTreeLogo" alt="The Tree Logo" class="w-32 h-auto mb-6" />
        <p class="text-lg text-gray-700 mb-6">
            로그인 후 다시 시도해 주세요.
        </p>
        <a href="/login" class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            로그인 페이지로 이동 >>
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

<style>
</style>