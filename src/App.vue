<template>
    <div class="App">
        <div class="black-bg">
            <navigation-bar></navigation-bar>
            <section id="about_me">
                <introduction-header></introduction-header>
                <about-me></about-me>
            </section>

            <section id="skills">
                <technical-skills></technical-skills>
            </section>

            <section id="experiences">
                <my-experiences></my-experiences>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "./components/layouts/TheNavigationBar.vue";
import IntroductionHeader from "./components/Introduction.vue";
import AboutMe from "./components/AboutMe.vue";
import TechnicalSkills from "./components/TechnicalSkills.vue";
import MyExperiences from "./components/Experiences.vue";

export default defineComponent({
    name: "App",
    components: {
        "navigation-bar": NavigationBar,
        "introduction-header": IntroductionHeader,
        "about-me": AboutMe,
        "technical-skills": TechnicalSkills,
        "my-experiences": MyExperiences,
    },
});
</script>

<style></style>
