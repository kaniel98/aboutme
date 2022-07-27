<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top grey-bg px-4">
        <div class="container-xxl">
            <a href="#intro" class="navbar-brand">
                <i class="bi bi-truck-front me-2"></i>
                <!-- The <span> HTML element is a generic inline container for phrasing content, :key="contact.username"which does not inherently represent anything. -->
                <span class="fw-bold white-text">Kaniel Koh</span>
            </a>
            <!-- Toggle button for mobile navigation -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle-navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>

        <!-- Nav bar links -->
        <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
            <ul class="navbar-nav text-nowrap">
                <li class="nav-item">
                    <a href="#about_me" class="nav-link">About me</a>
                </li>
                <li class="nav-item">
                    <a href="#experiences" class="nav-link">Past experiences</a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "NavigationBar",
});
</script>
