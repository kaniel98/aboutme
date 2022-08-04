<template>
    <div class="black-bg px-4">
        <div class="container-xxl">
            <medium-header :headerText="mediumHeader"></medium-header>
            <div class="row">
                <div class="col-2">
                    <div class="list-group rounded-0" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#flex-solver" role="tab" aria-controls="list-home">Flex-Solver</a>
                        <!-- <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
                        <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
                        <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a> -->
                    </div>
                </div>
                <div class="col-10 white-text">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="flex-solver" role="tabpanel" aria-labelledby="list-home-list">
                            <experience-content></experience-content>
                        </div>
                        <!-- <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MediumHeader from "./layouts/MediumHeader.vue";
import ExperienceContent from "./layouts/ExperienceContent.vue";

import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
    setup() {
        const state = reactive({
            mediumHeader: "PAST EXPERIENCES:",
        });
        return { ...toRefs(state) };
    },
    components: {
        "medium-header": MediumHeader,
        "experience-content" : ExperienceContent,
    },
    name: "MyExperiences",
});
</script>

<style scoped>
.list-group-item {
    background-color: rgba(32, 32, 32, 0.7);
    color: rgba(222, 222, 222, 0.5);
    border-left: 3px solid rgb(222, 222, 222, 0.3);
}

.list-group-item:hover {
    background-color: rgba(52, 52, 52, 0.7);
    color: rgba(222, 222, 222, 1);
}

.list-group-item.active {
    background-color: rgba(52, 52, 52, 0.7);
    border-color: rgba(52, 52, 52, 0.7);
    border-left: 3px solid rgba(222, 222, 222, 1);
}
</style>
