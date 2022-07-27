<template>
    <div class="App">
        <navigation-bar></navigation-bar>
        <section id="introduction">
            <introduction-header></introduction-header>
            <about-me></about-me>
        </section>
        <language-buttons></language-buttons>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationBar from './components/layouts/TheNavigationBar.vue';
import IntroductionHeader from './components/Introduction.vue';
import AboutMe from './components/AboutMe.vue';
import LanguageButtons from './components/layouts/LanguageButtons.vue';

export default defineComponent({
    name: 'App',
    components: {
        'navigation-bar': NavigationBar,
        'introduction-header': IntroductionHeader,
        'about-me': AboutMe,
        'language-buttons': LanguageButtons,
    },
});
</script>

<style></style>
