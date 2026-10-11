<template>
    <section class="gallery" id="gallery">
        <h2>
            {{ t('gallery.heading') }}
        </h2>
        <image-carousel :images="imgs" />
        <!-- {{ imgs }} -->
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

const imgs = computed(() => {
    return tm('gallery.images').map(img => ({
        url: rt(img.url),
        alt: rt(img.alt)
    }))
})

const eventImages = [
    {
        url: '/images/live-music-los-de-south-central-bassist-compton-temo.jpg',
        alt: 'Bass player of Los De South Central performing live at a birthday event in Compton.'
    },
    {
        url: '/images/live-norteño-music-event-compton.jpg',
        alt: 'Guest enjoying Los De South Central live music at a birthday event in Compton.'
    },
    {
        url: '/images/live-norteño-music-los-de-south-central-accordion-jose.jpg',
        alt: 'Accordion player of Los De South Central performing live at an event in Los Angeles.'
    },
    {
        url: '/images/los-de-south-central-live-compton-inglewood-singer-maroma.jpg',
        alt: 'Lead singer for Los De South Central singing live at an event in Compton.'
    },
    {
        url: '/images/los-de-south-central-live-norteno-music-drummer-compton-valente.jpg',
        alt: 'Los De South Central drummer and singer performing live at an event in Los Angeles.'
    },
    {
        url: '/images/los-de-south-central-live-norteno-music-drummer-valente.jpg',
        alt: 'Los De South Central drummer Valente playing and singing at a live event in Compton.'
    },
    {
        url: '/images/los-de-south-central-live-on-stage-bassist-accordion-compton-los-angeles.jpg',
        alt: 'Guests posing together and enjoying the live music atmosphere at a private event in Compton.'
    },
    {
        url: '/images/los-de-south-central-maroma-singer-live-compton.jpg',
        alt: 'Los De South Central singer at a live event in Compton, California.'
    },
    {
        url: '/images/norteno-band-live-entertainment-los-angeles.jpg',
        alt: 'Guest enjoying and dancing to live music by Los De South Central at a birthday party in Compton.'
    },
    {
        url: '/images/hire-local-norteño-group-compton.jpg',
        alt: 'Guests posing together and enjoying the live music atmosphere at a private event in Compton.'
    },
    {
        url: '/images/los-de-south-central-maroma-singer-live-south-central.jpg',
        alt: 'Guests posing together and enjoying the live music atmosphere at a private event in Compton.'
    },
    {
        url: '/images/los-de-south-central-norteño-band-live-music-dancing-los-angeles.jpg',
        alt: 'Guests dancing to live Norteño music performed by Los De South Central at a private event in Los Angeles.'
    },
    {
        url: '/images/los-de-south-central-temo-bass-live-los-angeles.jpg',
        alt: 'Temo playing the bass for Los De South Central in Compton at a birthday party.'
    },
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