<template>
    <div :id="projectName.toLowerCase()" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
            <button
                v-for="photo in photos"
                :key="photo.photoId"
                type="button"
                :data-bs-target="dataTarget"
                :data-bs-slide-to="currentSlide(photo.photoId)"
                :class="activeTab(photo.photoId)"
                aria-current="true"
                :aria-label="photo.photoName"
            ></button>
        </div>

        <!-- Actual items -->
        <div class="carousel-inner">
            <div v-for="photo in photos" :key="photo.photoId" :class="'carousel-item ' + activeTab(photo.photoId)">
                <img :src="require('@/assets/projectAssets/' + photo.photoUrl)" class="d-block w-100" />
                <div class="carousel-caption d-none d-md-block">
                    <h5>{{ photo.photoTitle }}</h5>
                    <p>{{ photo.photoDescription }}</p>
                </div>
            </div>
        </div>

        <!-- Left & Right controls -->
        <button class="carousel-control-prev" type="button" :data-bs-target="dataTarget" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" :data-bs-target="dataTarget" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        projectName: {
            type: String,
            required: true,
        },
        photos: {
            type: Object,
            required: true,
        },
    },

    setup(props) {
        // Return the data-bs-target
        const dataTarget = `#${props.projectName.toLowerCase()}`;

        const activeTab = (photoId: number) => {
            if (photoId === 1) {
                return "active";
            }
            return "";
        };

        const currentSlide = (photoId: number) => {
            return photoId - 1;
        };

        function filePath(path: string) {
            return `@/assets/projectAssets/${path}`;
        }

        return { dataTarget, activeTab, filePath, currentSlide };
    },
});
</script>

<style scoped></style>
