<template>
    <div class="row">
        <!-- Carousel -->
        <div class="col-12 col-lg-7">
            <the-carousel :content="content"></the-carousel>
        </div>
        <!-- Carousel content -->
        <div class="col-12 col-lg-5">
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" v-for="i in content" :key="i" :id="i" role="tabpanel" aria-labelledby="list-home-list" style="color: white">
                    {{ i }}
                </div>
                <!-- <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, toRefs } from "vue";
import TheCarousel from "../../ui/TheCarousel.vue";
import Project from "../../../types/Projects";

export default defineComponent({
    props: {
        project: {
            type: Object as () => Project,
            required: false,
        },
    },
    setup(props) {
        const state = reactive({
            headerText: "PAST PROJECTS:",
            content: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        });

        return { ...toRefs(state) };
    },

    name: "ProjectTabContent",
    components: {
        "the-carousel": TheCarousel,
    },
});
</script>
