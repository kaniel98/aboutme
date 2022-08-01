<template>
    <div class="black-bg px-4">
        <div class="container-xxl">
            <div class="row">
                <div class="col-12 text-md-start text-center">
                    <medium-header :headerText="mediumHeader"></medium-header>
                </div>
                <div class="col-md-2 text-md-start text-center">
                    <!-- For languages -->
                    <mini-header :headerText="languages"></mini-header>
                </div>
                <div class="col d-flex justify-content-md-start justify-content-center flex-wrap">
                    <language-buttons></language-buttons>
                </div>
            </div>
            <div class="row" style="padding-top: 15px">
                <div class="col-md-2 text-md-start text-center">
                    <mini-header :headerText="frameworks"></mini-header>
                </div>
                <div class="col d-flex justify-content-md-start justify-content-center flex-wrap">
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
