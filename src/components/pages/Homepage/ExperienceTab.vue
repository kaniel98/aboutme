<template>
    <li class="nav-item" role="presentation">
        <button
            :class="'nav-link me-1 rounded-0 ' + activeTab(companyNo)"
            id="home-tab"
            data-bs-toggle="tab"
            :data-bs-target="'#' + companyId"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
        >
            {{ companyName }}
        </button>
    </li>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
    props: {
        companyId: {
            type: String,
            required: true,
        },
        companyNo: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const companyName = computed(() => {
            return split(props.companyId);
        });

        const activeTab = (tabNo: number) => {
            if (tabNo === 1) {
                return "active";
            }
            return "";
        };

        return {
            companyName,
            activeTab,
        };
    },
    name: "ExperienceTab",
});

function split(str: string) {
    return str
        .split(" ")
        .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
        .join(" ");
}
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
