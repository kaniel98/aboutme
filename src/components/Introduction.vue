<template>
    <div style="margin-top: 130px" class="black-bg px-4">
        <div class="container-xxl">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-7 text-center text-md-start">
                    <div class="header-text white-text">
                        {{ header }}
                    </div>
                    <div class="header-body">
                        {{ headerText }}
                    </div>

                    <base-button buttonType="emailButton" :text="email" :hyperlink="email">
                        <template v-slot:icon>
                            <i class="bi bi-envelope pe-2"></i>
                        </template>
                    </base-button>
                </div>

                <div class="col-md-5 text-center">
                    <!-- d-none (Default none), d-md-block (Default medium size - Block) -->
                    <img class="img-fluid d-none d-md-block rounded-circle" src="../assets/personal_pic.jpeg" alt="placeholder" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import BaseButton from "./layouts/BaseButton.vue";

export default defineComponent({
    setup() {
        const state = reactive({
            header: "Hi, I am Kaniel\nI build stuff for the web",
            headerText:
                "Always looking to further my skills in backend development. I am currently studying as a Year 3 undergraduate at the Singapore Management University, pursuing a degree in Information Systems",
            email: "kaniel.koh.2020@scis.smu.edu.sg",
            emailIcon: '<i class="bi bi-envelope"></i>',
        });
        return { ...toRefs(state) };
    },
    name: "IntroductionHeader",
    components: {
        "base-button": BaseButton,
    },
});
</script>

<style scoped>
.header-text {
    font-size: 64px;
    letter-spacing: -0.5px;
    line-height: 1;
    white-space: pre-line;
    margin-bottom: 25px;
}

.header-body {
    font-size: 24px;
    color: rgba(149, 149, 149, 1);
    margin-bottom: 25px;
}
</style>
