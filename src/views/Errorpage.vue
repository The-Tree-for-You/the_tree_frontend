<template>
    <ErrorPage :error-type="errorType" />
</template>

<script>
import ErrorPage from '@/components/error/ErrorPage.vue';

export default {
    name: 'Errorpage',
    components: {
        ErrorPage
    },
    data() {
        return {
            errorType: this.$route.params.errorType || 'default'
        }
    },
    mounted() {
        this.errorStatus();
    },
    methods: {
        errorStatus() {
            console.log(this.errorType);
        }
    }
}
</script>

<style scoped>
a {
    font-weight: bold;
    color: black;
    text-decoration: none;
}
</style>