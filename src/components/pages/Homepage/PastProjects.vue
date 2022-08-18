<template>
    <div class="px-4">
        <div class="container-xxl">
            <medium-header :headerText="headerText"></medium-header>
            <div class="row">
                <!-- Used to put tabs for the projects -->
                <div class="col-12">
                    <ul class="nav" id="projectTabs" role="tablist">
                        <project-tab v-for="project in projects" :key="project.no" :tabId="project.id" :tabNo="project.no"></project-tab>
                    </ul>
                </div>
            </div>
            <div>

                    <carousel-body :content="content"></carousel-body>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import MediumHeader from "../../ui/MediumHeader.vue";
import ProjectTab from "../../ui/NavTabs.vue";
import CarouselBody from "./ProjectTabContent.vue";
import Project from "../../../types/Projects";
import { defineComponent, reactive, toRefs, ref } from "vue";

export default defineComponent({
    setup() {
        const state = reactive({
            headerText: "PAST PROJECTS:",
            content: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        });

        const projects = ref<Project[]>([
            {
                no: 1,
                id: "HawkerMeetsYou",
                projectName: "HawkerMeetsYou",
                projectDescription: "A software engineering module project where we build an online food delivery platform. It primarily focuses on backend development using Docker and using a Microservice Architecture.",
                projectType: "Software Engineering",
                projectTechnology: {
                    frontend: ["HTML", "CSS", "BOOTSTRAP5", "VUE.JS"],
                    backend: ["PYTHON", "GOLANG", "FLASK", "MYSQL", "DOCKER"]
                },
            },
        ]);

        return { ...toRefs(state), projects };
    },
    components: {
        "medium-header": MediumHeader,
        "carousel-body": CarouselBody,
        "project-tab": ProjectTab,
    },
    name: "PastProjects",
});
</script>

<style scoped>
#projectTabs {
    margin-bottom: 20px;
}
</style>