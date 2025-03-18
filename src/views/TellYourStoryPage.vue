<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <div v-if="showInput" class="mt-4 items-center justify-center flex flex-col" :class="{'fade-in': showInput, 'fade-out': !showInput}">
            <p>당신의 이야기를 들려주세요.</p>
            <p>궁금한 점을 알려드릴 수는 없지만</p>
            <p>당신의 이야기에 공감은 할 수 있어요.</p>
            <p>하루에 하나의 이야기만 들어줄 수 있습니다.</p>
            <input v-model="userInput" type="text" class="p-2 border border-gray-300 rounded-md" placeholder="Type your message here" />
            <button class="mt-2 p-2 bg-blue-500 text-white rounded-md" @click="sendMessage">Send</button>
        </div>
        <h1 v-if="responseParts.length > 0" v-for="(part, index) in responseParts" :key="index" :class="{'fade-in': currentIndexRes === index, 'fade-out': currentIndexRes !== index}">
            {{ part }}
        </h1>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "TellYourStoryPage",
    data() {
        return {
            // 사용자 입력을 받을 변수
            showInput: false,
            userInput: "",

            // 응답 메시지를 담을 배열
            responseParts: [],
            currentIndexRes: 0
        }
    },
    methods: {
        // 사용자가 입력한 메시지에 대한 응답을 받는 함수
        async sendMessage() {
            // Send the user input to the server and get the response

            try {
                const url = import.meta.env.VITE_AUTO_RESPONSE_RESPONSE_URL;
                const response = await axios.post(url, { message: this.userInput });

                if (response.status === 200) {
                    this.responseParts = response.data.message.split(".");
                    this.currentIndexRes = 0;
                    this.showInput = false;
                    this.userInput = "";
                    this.startResAnimation();
                }
            } catch (error) {
                console.error(error);
            }
        },
        startResAnimation() {
            // Start the animation by changing the message every 2 seconds
            const interval = setInterval(() => {
                if (this.currentIndexRes < this.responseParts.length - 1) {
                    this.currentIndexRes++;
                } else {
                    clearInterval(interval);
                }
            }, 3000);
        }
    }
}

</script>

<style>
</style>