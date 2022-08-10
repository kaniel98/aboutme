<template>
    <div class="black-bg">
        <div class="white-header">{{ headerText }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        headerText: {
            required: true,
            type: String,
        },
    },
    name: "WhiteHeader",
});
</script>

<style scoped>
.white-header {
    font-weight: semi-bold;
    color: rgba(222, 222, 222, 1);
    font-size: 36px;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
}


</style>
