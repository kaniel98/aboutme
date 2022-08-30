<template>
    <div class="row">
        <!-- Carousel -->
        <div class="col-12 col-lg-7">
            <the-carousel :photos="project.photos" :projectName="project.projectName"></the-carousel>
        </div>
        <!-- Carousel content -->
        <div class="col-12 col-lg-5">
            <mini-header :headerText="project.projectName"></mini-header>
            <div class="body-content white-text">{{ project.projectDescription }}</div>
            <div class="technology-header">TECHNOLOGIES USED:</div>
            <div class="technology-content"><b>BACKEND</b>: {{ backend }}</div>
            <div class="technology-content"><b>FRONTEND</b>: {{ frontend }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import TheCarousel from "../../ui/TheCarousel.vue";
import Project from "../../../types/Projects";
import MiniHeader from "../../ui/MiniHeader.vue";

export default defineComponent({
    props: {
        project: {
            type: Object as () => Project,
            required: true,
        },
    },
    setup(props) {
        const backend = computed<string>(() => {
            return props.project.projectTechnology.backend.join(", ");
        });
        const frontend = computed<string>(() => {
            return props.project.projectTechnology.frontend.join(", ");
        });

        return { backend, frontend };
    },

    name: "ProjectTabContent",
    components: {
        "the-carousel": TheCarousel,
        "mini-header": MiniHeader,
    },
});
</script>

<style scoped>
mini-header {
    font-weight: 200;
}

.body-content {
    font-size: 24px;
    letter-spacing: -0.5px;
    margin-bottom: 12px;
}

.technology-header {
    color: rgba(222, 222, 222, 0.7);
    font-size: 16px;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
    font-weight: 300;
    text-decoration: underline;
}

.technology-content {
    color: rgba(222, 222, 222, 0.7);
    font-size: 16px;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
    font-weight: 200;
}
</style>
