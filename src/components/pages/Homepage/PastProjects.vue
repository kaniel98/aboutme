<template>
    <div class="px-4">
        <div class="container-xxl">
            <medium-header :headerText="headerText"></medium-header>
            <div class="row">
                <!-- Tabs -->
                <div class="col-12">
                    <ul class="nav" id="projectTabs" role="tablist">
                        <project-tab v-for="project in projects" :key="project.no" :tabId="project.id" :tabNo="project.no"></project-tab>
                    </ul>
                </div>
                <!-- Content -->
                <div class="col-12 white-text" id="projectContent">
                    <div class="tab-content" id="nav-tabContent">
                        <div v-for="project in projects" :key="project.id" :class="'tab-pane fade ' + activeTab(project.no)" :id="project.id" role="tabpanel">
                            <project-content :project="project"></project-content>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import MediumHeader from "../../ui/MediumHeader.vue";
import ProjectTab from "../../ui/NavTabs.vue";
import ProjectTabContent from "./ProjectTabContent.vue";
import Project from "../../../types/Projects";
import projectContent from "../Homepage/projects.json";
import { defineComponent, reactive, toRefs, ref, onMounted } from "vue";

export default defineComponent({
    setup() {
        const state = reactive({
            headerText: "PAST PROJECTS:",
            content: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        });

        const activeTab = ((tabNo: number) => {
            if (tabNo === 1) {
                return "show active";
            }
            return "";
        });

        const projects = ref<Project[]>(projectContent);

        return { ...toRefs(state), projects, activeTab };
    },
    components: {
        "medium-header": MediumHeader,
        "project-content": ProjectTabContent,
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
