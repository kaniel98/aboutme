<template>
    <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" v-for="i in content" :key="i" :id="i" role="tabpanel" aria-labelledby="list-home-list" style="color: white">
            {{ i }}
        </div>
        <!-- <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        content: {
            type: Array,
            required: true,
        },
    },
    name: "CarouselBody",
});
</script>
