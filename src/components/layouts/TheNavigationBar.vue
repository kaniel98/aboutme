<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top grey-bg px-4">
        <div class="container-xxl">
            <a href="#intro" class="navbar-brand">
                <span class="fw-bold white-text">{{ name }}</span>
            </a>
            <!-- Toggle button for mobile navigation -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle-navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>

        <!-- Nav bar links -->
        <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
            <ul class="navbar-nav text-nowrap">
                <li class="nav-item">
                    <a href="#about" class="nav-link">About me</a>
                </li>
                <li class="nav-item">
                    <a href="#experiences" class="nav-link">Past experiences</a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
    setup() {
        const state = reactive({
            name: "Kaniel Koh",
        });

        return { ...toRefs(state) };
    },

    name: "NavigationBar",
});
</script>

<style scoped>
.grey-bg {
    background-color: rgba(50, 50, 50, 0.7);
    backdrop-filter: blur(10px);
}
</style>
