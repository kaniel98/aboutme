<template>
    <div class="px-4 black-bg" style="padding-top: 130px">
        <div class="container-xxl">
            <div class="row">
                <div class="col-md-7 text-center text-md-start">
                    <mini-header :headerText="headerText"></mini-header>
                    <div class="mini-header-body white-text">{{ headerBody }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue';
import MiniHeader from './layouts/MiniHeader.vue';

export default defineComponent({
    setup() {
        const state = reactive({
            headerText: 'ABOUT ME',
            headerBody:
                'Hi there! I am an aspiring software engineer highly interested in backend technologies such as Node.js and Nest.js. I recently started exploring the usage of Bun, a new all-in-one Javascript runtime, to see how it fits in the software development lifecycle. ',
            email: 'kaniel.koh.2020@scis.smu.edu.sg',
        });

        return { ...toRefs(state) };
    },
    components: {
        'mini-header': MiniHeader,
    },
    name: 'AboutMe',
});
</script>

<style scoped>
.mini-header-body {
    font-size: 24px;
    letter-spacing: -0.5px;
}
</style>
