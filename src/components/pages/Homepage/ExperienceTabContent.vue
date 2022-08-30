<template>
    <div>
        <mini-header :headerText="company.title">
            <template v-slot:ExperienceHeader>
                <a :href="company.companyUrl" target="_blank" rel="noopener noreferrer">@ {{ company.name }}</a>
            </template>
        </mini-header>
        <p>{{ company.timePeriod }}</p>
        <ul>
            <li v-for="experience in company.experienceDetails" :key="experience">
                <span>{{ experience }}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import MiniHeader from "../../ui/MiniHeader.vue";
import Company from "../../../types/Companies";
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        company: {
            type: Object as () => Company,
            required: true,
        },
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
    line-height: 2;
}
</style>
