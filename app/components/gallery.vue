<template>
    <section class="gallery" id="gallery">
        <h2>
            {{ t('gallery.heading') }}
        </h2>
        <image-carousel :images="images" />
    </section>
</template>

<script setup>
import { computed, ref } from 'vue'
const { t, tm, rt } = useI18n()

const cardItems = computed(() => {
    return tm('testimonials.cards').map(item => ({
        author: rt(item.author),
        copy: rt(item.copy),
        date: rt(item.date),
        rating: rt(item.rating)
    }))
})

const images = [
    '/images/01.jpg',
    '/images/02.jpg',
    '/images/03.jpg',
    '/images/04.jpg',
    '/images/05.jpg',
    '/images/06.jpg',
    '/images/07.jpg',
    '/images/08.jpg',
    '/images/09.jpg',
]
</script>

<style lang="sass">
.gallery
    background: var(--primary-contrast)
    padding: 3rem 1.5rem
    display: flex
    flex-direction: column
    gap: 1.5rem
    @media (min-width: 743px)
        gap: 3rem
    h2
        font-size: 1.5rem
        font-family: var(--display-font)
        color: var(--primary-dark)
        @media (min-width: 743px)
            font-size: 3rem
            text-align: center
</style>