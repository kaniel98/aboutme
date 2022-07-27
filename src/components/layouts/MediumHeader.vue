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
    font-weight: bold;
    color: rgba(222, 222, 222, 1);
    font-size: 24px;
    letter-spacing: 1.5px;
}
</style>
