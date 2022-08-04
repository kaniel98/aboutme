<template>
    <!-- Use if there is email provided -->
    <a :href="email" v-if="email">
        <button :class="buttonClass">
            <span>
                <slot name="icon"></slot>
                {{ text }}
            </span>
        </button>
    </a>

    <!-- Use if no link is provided -->
    <button :class="buttonClass" v-else tabindex="-1">
        <span>
            <slot name="icon"></slot>
            {{ text }}
        </span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "BaseButton",
    props: {
        text: {
            required: true,
            type: String,
        },
        hyperlink: {
            required: false,
            type: String,
        },
        buttonType: {
            required: true,
            type: String,
        },
    },
    computed: {
        email() {
            if (this.hyperlink) {
                if (this.hyperlink.length > 0) {
                    return `mailto:${this.hyperlink}`;
                }
            }
            return false;
        },

        buttonClass() {
            if (this.buttonType === "emailButton") {
                return "btn button-grey text-white rounded-1 email-button ";
            }
            return "btn button-grey col-4 text-white rounded-1 language-button mx-4";
        },
    },
});
</script>

<style scoped>
.button-grey {
    background-color: rgba(157, 157, 157, 1);
}

.email-button {
    font-size: 18px;
    font-weight: semi-bold;
    width: 400px;
    height: 64px;
}

.language-button {
    font-size: 18px;
    font-weight: semi-bold;
    width: 180px;
    height: 64px;
    margin-bottom: 24px;
}
</style>
