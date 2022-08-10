<template>
    <div class="container-fluid grey-text">
        <footer class="d-flex flex-wrap justify-content-between align-items-center px-4 py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <span>Made by Kaniel - &copy; 2021</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3">
                    <a class="grey-text" href="https://www.linkedin.com/in/kaniel-koh/" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-linkedin"></i>
                    </a>
                </li>
                <li class="ms-3">
                    <a class="grey-text" href="https://t.me/kankohhh" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-telegram"></i>
                    </a>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    // setup() {},
    name: "TheFooter",
});
</script>

<style scoped>
.grey-text {
    color: rgba(222, 222, 222, 0.7);
}

i {
    font-size: 25px;
}
</style>
