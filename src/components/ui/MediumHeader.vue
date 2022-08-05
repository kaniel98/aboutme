<template>
    <div class="black-bg">
        <div class="medium-header">{{ headerText }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        headerText: {
            required: true,
            type: String,
        },
    },
    name: 'MediumHeader',
});
</script>

<style scoped>
.medium-header {
    font-weight: semi-bold;
    color: rgba(222, 222, 222, 0.7);
    font-size: 24px;
    letter-spacing: 1.5px;
    margin-bottom: 25px;
}
</style>
