<template>
    <section class="why-us" id="why-us">
        <h2>
            {{ t('why.heading') }}
        </h2>
        <ul>
            <li v-for="(reason, index) in tm('why.cards')" :key="index">
                <h3>
                    {{ rt(reason.heading) }}
                </h3>
                <p>
                    {{ rt(reason.copy) }}
                </p>
            </li>
        </ul>
    </section>
</template>

<script setup>
const { t, tm, rt } = useI18n()
const REASONS = [
    {
        heading: '20+ Years of Experience',
        copy: 'For more than two decades, we have provided live norteño music for weddings, quinceañeras, birthdays, private parties, corporate events, and family celebrations throughout Southern California. Our years of experience allow us to adapt to every venue, audience, and event, delivering a polished performance that helps make your celebration memorable from beginning to end.'
    },
    {
        heading: 'Professional & Reliable',
        copy: 'Planning an event comes with enough stress. You shouldn’t have to worry about your entertainment. From your first inquiry through the final performance, we pride ourselves on clear communication, punctual arrival, professional presentation, and dependable service. We work closely with every client to ensure your event runs smoothly and your guests enjoy an unforgettable experience.'
    },
    {
        heading: 'Authentic Live Norteño Music',
        copy: 'Our goal is simple: create an atmosphere that brings people together. Whether your guests want to dance, sing along, or simply enjoy authentic live music, we tailor every performance to the energy of your celebration. Combining traditional norteño favorites with modern hits, we perform music that connects with audiences of all ages.'
    },
    {
        heading: 'Perfect for Every Celebration',
        copy: 'Every event is unique, and every performance should be too. Whether you’re hosting an intimate backyard gathering, a large wedding reception, a quinceañera, a birthday party, or a corporate celebration, we adapt our performance to fit your venue, schedule, and guests. No matter the occasion, we’re committed to providing entertainment that keeps the celebration going.'
    },
]
</script>

<style lang="sass">
.why-us
    min-height: 10em
    background: url('/images/los-de-south-central-accordion-norteno-live-music.jpg') top
    background-color: var(--primary-dark)
    background-size: contain
    background-repeat: no-repeat
    padding: 1.5rem
    padding-top: 8rem
    display: flex
    flex-direction: column
    gap: 1.5rem
    @media (min-width: 734px)
        padding-bottom: 3rem
        padding-top: 16rem
        gap: 3rem
    h2
        text-transform: uppercase
        font-family: var(--display-font)
        color: var(--primary-light)
        @media (min-width: 743px)
            text-align: center
            font-size: 3rem
    ul
        list-style: none
        display: flex
        flex-direction: column
        gap: 1.5rem
        max-width: 696px
        margin: 0 auto
        @media (min-width: 743px)
            flex-direction: row
            flex-wrap: wrap
        h3
            font-size: 1rem
            font-family: var(--section-heading-font)
            text-transform: uppercase
            color: var(--primary-dark)
        li
            padding: 1.5rem
            background: var(--primary-contrast)
            height: 21rem
            display: flex
            flex-direction: column
            gap: 1.5rem
            justify-content: center
            @media (min-width: 743px)
                width: calc(100% / 2 - .75rem)
        p
            font-family: var(--copy-font)
</style>