<template>
    <div class = "App">
        <navigation-bar></navigation-bar>
        <introduction-header></introduction-header>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "./components/layouts/TheNavigationBar.vue";
import IntroductionHeader from "./components/layouts/Introduction.vue";

export default defineComponent({
    name: "App",
    components: {
        "navigation-bar": NavigationBar,
        "introduction-header": IntroductionHeader,
    },
});
</script>

<style></style>
