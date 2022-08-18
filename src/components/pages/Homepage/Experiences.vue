<template>
    <div class="black-bg px-4">
        <div class="container-xxl">
            <medium-header :headerText="mediumHeader"></medium-header>
            <div class="row">
                <div class="col-12">
                    <ul class="nav" id="experienceTabs" role="tablist">
                        <experience-tab v-for="company in companies" :key="company.no" :tabId="company.id" :tabNo="company.no"></experience-tab>
                    </ul>
                </div>

                <!-- Content -->
                <div class="col-12 white-text vh-25" id="experienceContent">
                    <div v-for="company in companies" :key="company.id" class="tab-content" id="nav-tabContent">
                        <div :class="'tab-pane fade show ' + activeTab(company.no)" :id="company.id" role="tabpanel" aria-labelledby="list-home-list">
                            <experience-content :company="company"></experience-content>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";

import MediumHeader from "../../ui/MediumHeader.vue";
import Company from "../../../types/Companies";
import ExperienceTab from "../../ui/NavTabs.vue";
import ExperienceContent from "./ExperienceTabContent.vue";

export default defineComponent({
    setup() {
        const state = reactive({
            mediumHeader: "PAST EXPERIENCES:",
        });
        const companies = ref<Company[]>([
            {
                no: 1,
                id: "flex-solver",
                title: "BACKEND SOFTWARE DEVELOPER INTERN",
                name: "FLEX-SOLVER PTE LTD",
                companyUrl: "https://www.flex-solver.com.sg/",
                timePeriod: "May 2022 - August 2022",
                experienceDetails: [
                    "Focused on backend development with Nest.js & Express.js",
                    "Developed backend services used in the National Gallery of Singapore's Content Management Systems (CMS) platforms with Express.js, Nest.js and MySQL",
                    "Ad-hoc research for management into new software and APIs ",
                    "Refactoring of codes to reduce code base & increase efficiency",
                ],
            },
            {
                no: 2,
                id: "flex-2",
                title: "BACKEND SOFTWARE DEVELOPER INTERN",
                name: "FLEX-SOLVER PTE LTD",
                companyUrl: "https://www.flex-solver.com.sg/",
                timePeriod: "May 2022 - August 2022",
                experienceDetails: ["testcontent"],
            },
            {
                no: 3,
                id: "flex-3",
                title: "BACKEND SOFTWARE DEVELOPER INTERN",
                name: "FLEX-SOLVER PTE LTD",
                companyUrl: "https://www.flex-solver.com.sg/",
                timePeriod: "May 2022 - August 2022",
                experienceDetails: ["testcontecddcdcdnt"],
            },
        ]);

        //Checking if a specific tab is active
        const activeTab = (tabNo: number) => {
            if (tabNo === 1) {
                return "active";
            }
            return "";
        };

        return { ...toRefs(state), companies, activeTab };
    },
    components: {
        "medium-header": MediumHeader,
        "experience-content": ExperienceContent,
        "experience-tab": ExperienceTab,
    },
    name: "MyExperiences",
});
</script>

<style scoped>
#experienceTabs {
    margin-bottom: 20px;
}

/* #experienceContent{
    height: 300px
} */
</style>
