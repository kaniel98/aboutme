<template>
    <div class="black-bg px-4">
        <div class="container-xxl">
            <medium-header :headerText="mediumHeader"></medium-header>
            <div class="row">
                <div class="col-md-3 col-12">
                    <ul class="nav" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button
                                class="nav-link me-3 active rounded-0"
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#flex-solver"
                                type="button"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                            >
                                Flex-solver
                            </button>
                        </li>
                    </ul>
                </div>

                <!-- Content -->
                <div class="col-md-9 col-12 white-text">
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
import ExperienceContent from "./ExperienceContent.vue";

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
        ]);

        //Checking if a specific tab is active
        const activeTab = (tabNo: number) => {
            console.log(tabNo);
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
    },
    name: "MyExperiences",
});
</script>

<style scoped>
.nav-link {
    background-color: rgba(32, 32, 32, 0.7);
    color: rgba(222, 222, 222, 0.5);
    border: none;
    /* border-left: 3px solid rgb(222, 222, 222, 0.3); */
    width: 125px;
}

.nav-link:hover {
    background-color: rgba(52, 52, 52, 0.7);
    color: rgba(222, 222, 222, 1);
}

.nav-link.active {
    background-color: rgba(52, 52, 52, 0.7);
    border-color: rgba(52, 52, 52, 0.7);
    color: rgba(222, 222, 222, 1);
    border-bottom: 3px solid rgba(222, 222, 222, 1);
}
</style>
