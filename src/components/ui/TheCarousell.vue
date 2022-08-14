<template>
    <div>
        <vueper-slides 3d fixed-height="300px" arrows-inside bullets-outside>
            <vueper-slide v-for="i in content" :key="i" :href="'#' + i" :title="i.toString()" />
        </vueper-slides>
    </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default defineComponent({
    props: {
        content: {
            type: Array,
            required: true,
        },
    },
    components: {
        VueperSlides,
        VueperSlide,
    },
});
</script>

<style scoped>
.vueperslide {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);

    &__title {
        font-size: 7em;
        opacity: 0.6;
    }
}

p {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 10;
}

html {
    font: 12px Tahoma, Geneva, sans-serif;
}
* {
    margin: 0;
    padding: 0;
    color: #fff;
}
</style>
