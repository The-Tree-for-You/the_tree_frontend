<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <div v-if="messageParts.length === 0" class="loader"></div>
        <p v-else v-for="(part, index) in messageParts" :key="index" :class="{'fade-in': currentIndexInit === index, 'text-2xl': true}">
            {{ part }}
        </p>
        <a v-if="isSignin" href="/tell-your-story" class="mt-4 text-blue-500 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            당신만의 이야기를 들려주세요 >>
        </a>
        <a v-else href="/signin" class="mt-4 text-blue-500 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            로그인 후 당신만의 이야기를 들려주세요 >>
        </a> 
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Mainpage",
    data() {
        return {
            // 초기 메시지를 담을 배열
            messageParts: [],
            currentIndexInit: 0,
            isSignin: false,
        };
    },
    mounted() {
        this.getInitialMessage();
        this.checkSigninStatus();
    },
    methods: {
        // Initail message를 가져오는 함수
        async getInitialMessage() {
            // Fetch the initial message from the server and start the animation

            try {
                const url = import.meta.env.VITE_AUTO_RESPONSE_INITIAL_MESSAGE_URL;
                const response = await axios.get(url);

                if (response.status === 200) {
                    this.messageParts = response.data.message.split(".");
                    this.startInitAnimation();
                }
            } catch (error) {
                console.error(error);
            }
        },
        startInitAnimation() {
            // Start the animation by changing the message every 2 seconds
            const interval = setInterval(() => {
                if (this.currentIndexInit < this.messageParts.length - 1) {
                    this.currentIndexInit++;
                } else {
                    clearInterval(interval);
                    this.showInput = true;
                }
            }, 3000);
        },
        checkSigninStatus() {
            // 사용자가 로그인했는지 확인하는 함수
            this.isSignin = this.$store.getters.getIsSignin;
        },
    }
};
</script>

<style>
.fade-in {
    @apply opacity-100 transition-opacity duration-1000;
}

.fade-out {
    @apply opacity-0 transition-opacity duration-1000;
}

.loader {
    @apply border-4 border-t-4 rounded-full;
    border-top-color: #3498db;
    animation: spin 1s linear infinite;
}
</style>