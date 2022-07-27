<template>
    <div class="black-bg">
        <base-button buttonType="random" v-for="language in languages" :key="language.language" :text="language.language"></base-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BaseButton from './BaseButton.vue';
import Language from '../../types/Languages';

export default defineComponent({
    setup() {
        const languages = ref<Language[]>([
            { language: 'Python' },
            { language: 'JavaScript' },
            { language: 'TypeScript' },
            { language: 'GoLang' },
            { language: 'MySQL' },
            { language: 'CSS' },
            { language: 'HTML' },
        ]);

        return {
            languages,
        };
    },

    components: {
        'base-button': BaseButton,
    },
    name: 'LanguageButtons',
});
</script>

<style scoped>
base-button {
    width: 64px
}

</style>
