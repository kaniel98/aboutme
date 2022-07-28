<template>
    <div class="black-bg px-4">
        <div class="container-xxl">
            <medium-header :headerText="mediumHeader"></medium-header>
            <mini-header :headerText="languages"></mini-header>
            <language-buttons></language-buttons>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import LanguageButtons from './layouts/LanguageButtons.vue';
import MediumHeader from './layouts/MediumHeader.vue';
import MiniHeader from './layouts/MiniHeader.vue';

export default defineComponent({
    setup() {
        const state = reactive({
            mediumHeader: 'TECHNICAL SKILLS',
            languages: 'LANGUAGES',
            frameworks: 'FRAMEWORKS',
        });
        return { ...toRefs(state) };
    },
    name: 'TechnicalSkills',
    components: {
        'language-buttons': LanguageButtons,
        'medium-header': MediumHeader,
        'mini-header': MiniHeader,
    },
});
</script>
