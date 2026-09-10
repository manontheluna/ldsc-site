<template>
    <section class="see-us-live" id="videos">
        <h2>
            {{ t('videos.heading') }}
        </h2>
        <div class="active-video">
            <video ref="videoPlayer" :key="activeVideo.id" controls>
                <source :src="activeVideo.url" type="video/mp4">
            </video>
            <video
                v-if="loadingVideo"
                :src="loadingVideo.url"
                @canplay="switchVideo"
            />
        </div>
        <ul class="video-select">
            <li
                v-for="(video, index) in videos"
                :key="index"
                :class="{ active: activeVideo.id === video.id}"
                @click="selectVideo(video)"
            >
                <video>
                    <source :src="video.url" type="">
                </video>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const { t } = useI18n()

const videos = [
    {
        url: '/videos/el-centenario.mp4',
        label: 'El Centenario',
        id: 'el-centenario' 
    },
    {
        url: '/videos/la-mucura.mp4',
        label: 'La Mucura',
        id: 'la-mucura'
    },
    {
        url: '/videos/la-yaquesita.mp4',
        label: 'La Yaquesita',
        id: 'la-yaquesita'
    },
    {
        url: '/videos/que-me-lleve-el-diablo.mp4',
        label: 'Que Me Lleve El Diablo',
        id: 'que-me-lleve-el-diablo'
    }
]

const activeVideo = ref(videos[0])
const loadingVideo = ref(null)

function selectVideo(video) {
    if (video.id === activeVideo.value.id) return
    loadingVideo.value = video
}

function switchVideo() {
    activeVideo.value = loadingVideo.value
    loadingVideo.value = null
}
</script>

<style lang="sass">
.see-us-live
    background: var(--primary-contrast)
    padding: 1.5rem
    display: flex
    flex-direction: column
    gap: 1.5rem
    @media (min-width: 743px)
        gap: 3rem
    h2
        font-family: var(--display-font)
        color: var(--primary-dark)
        @media (min-width: 743px)
            font-size: 3rem
            text-align: center
    .active-video
        width: 100%
        position: relative
        max-width: 720px
        video
            width: 100%
        @media (min-width: 743px)
            margin: 0 auto
    .video-select
        display: flex
        align-items: center
        justify-content: center
        list-style: none
        gap: 1.5rem
        max-width: 720px
        @media (min-width: 743px)
            margin: 0 auto
        li
            width: 4rem
            height: 3rem
            background: var(--primary-dark)
            overflow: hidden
            position: relative
            &:after
                content: ''
                position: absolute
                top: 0
                left: 0
                width: 100%
                height: 100%
                background: rgba(0, 0, 0, .75)
            &.active
                border: 2px solid var(--primary-contrast-light)
                &:after
                    background: rgba(0, 0, 0, 0)
            video
                width: 100%
                height: 100%
                transform: scale(1.3)
</style>