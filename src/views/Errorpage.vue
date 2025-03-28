<template>
    <!-- 발생하는 Error에 따라 다른 Error Component 렌더링 -->
    <div>
        <Error400 v-if="errorType === '400'"/>
        <Error401 v-else-if="errorType === '401'"/>
        <Error403 v-else-if="errorType === '403'"/>
        <Error404 v-else-if="errorType === '404'"/>
        <Error408 v-else-if="errorType === '408'"/>
        <Error500 v-else-if="errorType === '500'"/>
        <Error503 v-else-if="errorType === '503'"/>
        <Error504 v-else-if="errorType === '504'"/>
        <ErrorDefault v-else/>
    </div>

</template>

<script>
import Error400 from '@/components/error/400BadRequest.vue';
import Error401 from '@/components/error/401Unauthorized.vue';
import Error403 from '@/components/error/403Forbidden.vue';
import Error404 from '@/components/error/404NotFound.vue';
import Error408 from '@/components/error/408RequestTimeout.vue';
import Error500 from '@/components/error/500InternalServerError.vue';
import Error503 from '@/components/error/503ServiceTemporarilyUnavailable.vue';
import Error504 from '@/components/error/504GatewayTimeout.vue';
import ErrorDefault from '@/components/error/DefaultError.vue';

export default {
    name: 'Errorpage',
    data() {
        return {
            errorType: this.$route.params.errorType
        }
    },
    components: {
        Error400,
        Error401,
        Error403,
        Error404,
        Error408,
        Error500,
        Error503,
        Error504,
        ErrorDefault
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