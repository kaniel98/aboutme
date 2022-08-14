<template>
    <ul class="nav" id="myTab" role="tablist">
        <li class="nav-item" v-for="company in companies" :key="company" role="presentation">
            <button class="nav-link active rounded-0" id="home-tab" data-bs-toggle="tab" :data-bs-target="company" type="button" role="tab" aria-controls="home" aria-selected="true">
                {{ company }}
            </button>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        companies: {
            type: Array,
            required: true
        },
    }
})
</script>
