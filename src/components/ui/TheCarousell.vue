<template>
    <div class="">
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
    setup() {
        const state = reactive({
            list: [0, 1, 2, 3, 4],
        });
        return { ...toRefs(state) };
    },
});
</script>
