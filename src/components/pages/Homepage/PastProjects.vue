<template>
    <div class="px-4">
        <div class="container-xxl">
            <medium-header :headerText="headerText"></medium-header>
            <div class="row">
                <!-- <div class="col-7">
                    <the-carousell :content="content"></the-carousell>
                </div>
                <div class="col-5">
                    <carousel-body :content="content"></carousel-body>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import MediumHeader from "../../ui/MediumHeader.vue";
// import TheCarousell from "../../ui/TheCarousell.vue";
// import CarouselBody from "../../ui/CarouselBody.vue";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
    setup() {
        const state = reactive({
            headerText: "PAST PROJECTS:",
            content: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        });

        return { ...toRefs(state) };
    },
    components: {
        "medium-header": MediumHeader,
        // "the-carousell": TheCarousell,
        // "carousel-body": CarouselBody,
    },
    name: "PastProjects",
});
</script>
