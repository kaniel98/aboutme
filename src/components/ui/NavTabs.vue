<template>
    <li class="nav-item" role="presentation">
        <button
            :class="'nav-link me-1 rounded-0 ' + activeTab(tabNo)"
            id="home-tab"
            data-bs-toggle="tab"
            :data-bs-target="'#' + tabId"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
        >
            {{ tabName }}
        </button>
    </li>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
    props: {
        tabId: {
            type: String,
            required: true,
        },
        tabNo: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const tabName = computed(() => {
            return split(props.tabId);
        });

        const activeTab = (tabNo: number) => {
            if (tabNo === 1) {
                return "active";
            }
            return "";
        };

        return {
            tabName,
            activeTab,
        };
    },
    name: "NavTab",
});

function split(str: string) {
    return str
        .split(" ")
        .map((w) => w[0].toUpperCase() + w.substr(1))
        .join(" ");
}
</script>

<style scoped>
.nav-link {
    background-color: rgba(32, 32, 32, 0.7);
    color: rgba(222, 222, 222, 0.5);
    border: none;
    /* border-left: 3px solid rgb(222, 222, 222, 0.3); */
    width: 150px;
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
