<template>
    <section class="events-we-play" id="events-we-play">
        <h2>
            {{ t('events.heading') }}
        </h2>
        <carousel :cardData="EVENTS" />
        <p class="events-soft-cta">
            <strong>Planning something a little different?</strong> We play live music for weddings, birthdays, private parties, and all kinds of celebrations. Even if your event isn’t listed above, there’s a good chance we can be part of it. Get in touch and let us know what you’re planning.
        </p>
    </section>
</template>

<script setup>
import { ref } from 'vue'
const { t } = useI18n()
const EVENTS = [
    {
        label: 'Birthdays',
        copy: 'Make your birthday celebration one to remember with live music, great energy, and songs everyone can enjoy. We bring the party to life and keep your guests singing, dancing, and having a great time.'
    },
    {
        label: 'Weddings',
        copy: 'From the ceremony to the reception, we provide live music that sets the perfect mood for your special day. We’ll help create unforgettable moments and keep the dance floor moving all night long.'
    },
    {
        label: 'Quinceañeras',
        copy: 'Make your quinceañera unforgettable with live Norteño entertainment that keeps family and friends dancing all night. We provide the perfect soundtrack for this once-in-a-lifetime celebration.'
    },
    {
        label: 'Anniversaries',
        copy: 'Honor your anniversary with live Norteño music that creates a warm and festive atmosphere. Whether it’s an intimate gathering or a large celebration, we’ll make the occasion memorable.'
    },
    {
        label: 'Baby Showers',
        copy: 'Celebrate your growing family with live Norteño music that adds warmth and joy to your baby shower. We create a fun, family-friendly atmosphere everyone can enjoy.'
    },
    {
        label: 'Graduations',
        copy: 'Celebrate your graduation with live Norteño music that marks this important milestone in style. Our band brings the perfect entertainment for family and friends to enjoy together.'
    },
    {
        label: 'Communions',
        copy: 'Celebrate a First Communion with live Norteño music that brings loved ones together after the ceremony. Our performances create a welcoming and festive atmosphere for guests of all ages.'
    },
    {
        label: 'Baptisms',
        copy: 'Make your baptism celebration even more meaningful with live Norteño music for your family gathering. We provide music that complements this joyful and memorable occasion.'
    },
    {
        label: 'Divorces',
        copy: 'Turn a new chapter into a celebration with live Norteño music that keeps the party fun and upbeat. Gather your friends and enjoy an unforgettable night of great music and dancing.'
    }
]
</script>

<style lang="sass" scoped>
.events-we-play
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
    .events-soft-cta
        font-size: 1.5rem
        font-family: var(--copy-font)
        position: relative
        @media (min-width: 743px)
            font-size: 1.75rem
            text-align: center
            max-width: 821px
            margin: 0 auto
</style>