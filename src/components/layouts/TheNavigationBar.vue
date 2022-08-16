<template>
    <nav :class="'navbar navbar-expand-md navbar-dark fixed-top grey-bg px-4 ' + navBarVisibility">
        <div class="container-xxl">
            <a href="#intro" class="navbar-brand">
                <span class="fw-bold white-text">{{ name }}</span>
            </a>
            <!-- Toggle button for mobile navigation -->
            <!-- Indicates collpased -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle-navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>

        <!-- Nav bar links -->
        <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
            <ul class="navbar-nav text-nowrap">
                <li class="nav-item ">
                    <a href="#about" class="nav-link">About me</a>
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
import { defineComponent, reactive, toRefs, onMounted, computed } from "vue";
export default defineComponent({
    setup() {
        const state = reactive({
            name: "Kaniel Koh",
            lastScrollPosition: 0,
            showNavBar: true,
        });

        // Check for scrolling
        const onScroll = () => {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollPosition < 0) {
                return;
            }
            // Stop executing this function if the difference between
            // current scroll position and last scroll position is less than some offset
            if (Math.abs(currentScrollPosition - state.lastScrollPosition) < 60) {
                return;
            }
            state.showNavBar = currentScrollPosition < state.lastScrollPosition;
            state.lastScrollPosition = currentScrollPosition;
        };

        // If scrolling down, close else open
        const navBarVisibility = computed(() => {
            if (state.showNavBar) {
                return "scrolled-up";
            }
            return "scrolled-down";
        });

        onMounted(() => {
            console.log("mounted");
            window.addEventListener("scroll", onScroll);
        });

        return { ...toRefs(state), navBarVisibility };
    },

    name: "NavigationBar",
});
</script>

<style scoped>
.grey-bg {
    background-color: rgba(50, 50, 50, 0.7);
    backdrop-filter: blur(10px);
}

.scrolled-down {
    transform: translateY(-100%);
    transition: all 0.3s ease-in-out;
}
.scrolled-up {
    transform: translateY(0);
    transition: all 0.3s ease-in-out;
}

.nav-item {
    margin-left: 12px;
}
</style>
