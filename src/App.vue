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

            <section id="projects">
                <past-projects></past-projects>
            </section>

            <section id="contact">
                <contact-information></contact-information>
            </section>

            <section id="footer">
                <the-footer></the-footer>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "./components/layouts/TheNavigationBar.vue";
import IntroductionHeader from "./components/pages/Homepage/Introduction.vue";
import AboutMe from "./components/pages/Homepage/AboutMe.vue";
import TechnicalSkills from "./components/pages/Homepage/TechnicalSkills.vue";
import MyExperiences from "./components/pages/Homepage/Experiences.vue";
import ContactInformation from "./components/pages/Homepage/ContactInformation.vue";
import PastProjects from "./components/pages/Homepage/PastProjects.vue";
import TheFooter from "./components/layouts/TheFooter.vue";

export default defineComponent({
    name: "App",
    components: {
        "navigation-bar": NavigationBar,
        "introduction-header": IntroductionHeader,
        "about-me": AboutMe,
        "technical-skills": TechnicalSkills,
        "my-experiences": MyExperiences,
        "the-footer": TheFooter,
        "contact-information": ContactInformation,
        "past-projects": PastProjects,
    },
});
</script>

<style></style>
