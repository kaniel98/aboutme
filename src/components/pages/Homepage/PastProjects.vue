<template>
    <div class="px-4">
        <div class="container-xxl">
            <medium-header :headerText="headerText"></medium-header>
            <div class="row">
                <div class="col">
                    <the-carousell></the-carousell>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import MediumHeader from "../../ui/MediumHeader.vue";
import TheCarousell from "../../ui/TheCarousell.vue";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
    setup() {
        const state = reactive({
            headerText: "PAST PROJECTS:",
        });

        return { ...toRefs(state) };
    },
    components: {
        "medium-header": MediumHeader,
        "the-carousell": TheCarousell,
    },
    name: "PastProjects",
});
</script>
