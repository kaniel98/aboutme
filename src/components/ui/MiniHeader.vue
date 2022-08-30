<template>
    <div class="black-bg">
        <div class="mini-header">{{ headerText }}

            <slot name="ExperienceHeader"></slot>
        </div>
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
    name: 'MiniHeader',
});
</script>

<style scoped>
.mini-header {
    color: rgba(222, 222, 222, 0.7);
    font-size: 16px;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
    font-weight: 300;
}
</style>
