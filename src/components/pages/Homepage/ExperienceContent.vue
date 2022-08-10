<template>
    <div class = "px-3">
        <mini-header :headerText="miniHeader" style="font-weight: 100; padding-top: 8px">
            <template v-slot:ExperienceHeader>
                <a :href="companyUrl" target="_blank" rel="noopener noreferrer">@ FLEX-SOLVER PTE LTD</a>
            </template>
        </mini-header>
        <p>{{ timePeriod }}</p>
        <ul>
            <li v-for="experience in experienceDetails" :key="experience">
                <span>{{ experience }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import MiniHeader from "../../ui/MiniHeader.vue";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
    setup() {
        const state = reactive({
            miniHeader: "BACKEND SOFTWARE DEVELOPER INTERN",
            companyUrl: "https://www.flex-solver.com.sg/",
            timePeriod: "May 2022 - August 2022",
            experienceDetails: [
                "Focused on backend development with Nest.js & Express.js",
                "Developed backend services used in the National Gallery of Singapore's Content Management Systems (CMS) platforms with Express.js, Nest.js and MySQL",
                "Ad-hoc research for management into new software and APIs ",
                "Refactoring of codes to reduce code base & increase efficiency",
            ],
        });
        return { ...toRefs(state) };
    },
    components: {
        "mini-header": MiniHeader,
    },
    name: "ExperienceContent",
});
</script>

<style scoped>
a {
    text-decoration: none;
    font-weight: 500;
    color: rgba(222, 222, 222, 0.7);
    font-size: 16px;
}

a:hover {
    color: rgba(222, 222, 222, 1);
}

p {
    color: rgba(222, 222, 222, 0.7);
    font-size: 14px;
    font-weight: 100;
}

li {
    line-height: 2.0;
}
</style>
