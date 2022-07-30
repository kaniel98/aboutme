<template>
    <div class="black-bg px-4">
        <div class="container-xxl">
            <div class="row justify-content-center align-items-center">
                <div class="col text-center text-md-start">
                    <medium-header :headerText="mediumHeader"></medium-header>
                    <!-- For languages -->
                    <mini-header :headerText="languages"></mini-header>
                    <language-buttons></language-buttons>
                    <mini-header :headerText="frameworks" style="margin-top:5px"></mini-header>
                    <framework-buttons></framework-buttons>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import LanguageButtons from "./layouts/LanguageButtons.vue";
import FrameworkButtons from "./layouts/FrameworkButtons.vue";
import MediumHeader from "./layouts/MediumHeader.vue";
import MiniHeader from "./layouts/MiniHeader.vue";

export default defineComponent({
    setup() {
        const state = reactive({
            mediumHeader: "TECHNICAL SKILLS:",
            languages: "LANGUAGES:",
            frameworks: "FRAMEWORKS:",
        });
        return { ...toRefs(state) };
    },
    name: "TechnicalSkills",
    components: {
        "language-buttons": LanguageButtons,
        "framework-buttons": FrameworkButtons,
        "medium-header": MediumHeader,
        "mini-header": MiniHeader,
    },
});
</script>
