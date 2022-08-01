<template>
    <div class="black-bg px-4">
        <div class="container-xxl">
            <medium-header :headerText="mediumHeader"></medium-header>
        </div>
    </div>
</template>

<script>
import MediumHeader from "./layouts/MediumHeader.vue";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
    setup() {
        const state = reactive({
            mediumHeader: "PAST EXPERIENCES:",
        });
        return { ...toRefs(state) };
    },
    components: {
        "medium-header": MediumHeader,
    },
    name: "MyExperiences",
});
</script>
