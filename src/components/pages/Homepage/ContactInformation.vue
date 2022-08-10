<template>
    <div class="container-xxl">
        <div class="row text-center">
            <div class="col-12">
                <white-header :headerText="headerText"></white-header>
            </div>
            <div class="col-8 mx-auto">
                <p class="text-body">{{ textBody }}</p>
            </div>
            <!-- URLs -->
            <address>
                <ul class="list-unstyled">
                    <li class="mx-3">
                        <a class="grey-text" :href="email" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-envelope-fill"></i>
                        </a>
                    </li>
                    <li class="mx-3">
                        <a class="grey-text" :href="linkedin" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </li>
                    <li class="mx-3">
                        <a class="grey-text" :href="telegram" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-telegram"></i>
                        </a>
                    </li>
                </ul>
            </address>
        </div>
    </div>
</template>

<script lang="ts">
import WhiteHeader from "../../ui/WhiteHeader.vue";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
    setup() {
        const state = reactive({
            headerText: "Contact Me",
            textBody: "I am currently looking for my next learning/internship opportunity in December 2022! Feel free to reach out through the links below.",
            linkedin: "https://www.linkedin.com/in/kaniel-koh/",
            telegram: "https://t.me/kankohhh",
            email: "mailto:kaniel.koh.2020@scis.smu.edu.sg",
        });

        return { ...toRefs(state) };
    },
    components: {
        "white-header": WhiteHeader,
    },
    name: "ContactInformation",
});
</script>

<style scoped>
p.text-body {
    font-size: 24px;
    color: rgba(222, 222, 222, 0.7) !important;
}

li {
    display: inline;
}

i {
    font-size: 25px;
    color: rgba(222, 222, 222, 0.5);
}
</style>
