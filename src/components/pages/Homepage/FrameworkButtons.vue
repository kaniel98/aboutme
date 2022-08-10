<template>
    <base-button buttonType="languageButton" v-for="framework in frameworks" :key="framework.framework" :text="framework.framework"></base-button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseButton from "../../ui/BaseButton.vue";
import Frameworks from "../../../types/Frameworks";

export default defineComponent({
    setup() {
        const frameworks = ref<Frameworks[]>([{ framework: "Nest.js" }, { framework: "Express.js" }, { framework: "Vue.js" }, { framework: "Bootstrap 5" }]);
        return {
            frameworks,
        };
    },

    components: {
        "base-button": BaseButton,
    },
    name: "FrameworkButtons",
});
</script>
