<template>
    <div style="margin-top: 130px" class="container-fluid px-4">
        <div class="header-text white-text">
            {{ header }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
    setup() {
        const state = reactive({
            header: "Hi, I am Kaniel\nI build stuff for the web",
        });
        return { ...toRefs(state) };
    },
    name: "IntroductionHeader",
});
</script>

<style scoped>
.header-text {
    font-size: 64px;
    letter-spacing: -0.5px;
    line-height: 1;
    white-space: pre-line;
}

div {
    background-color: rgba(32, 32, 32, 1);
}
</style>
