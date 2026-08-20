<template>
    <section class="events-we-play">
        <h2>
            Events We Play
        </h2>
        <div class="window">
            <ul
                class="event-cards"
                ref="uiCards"
                :style="{ '--current-index': currentIndex }"
            >
                <li v-for="(card, index) in cards" :key="index">
                    <h3>
                        {{ card.label }}
                    </h3>
                    <p>
                        {{ card.copy }}
                    </p>
                </li>
            </ul>
            <div class="right" @click="moveCards">
                <span>
                    Move carousel
                </span>
            </div>
        </div>
        <p class="events-soft-cta">
            <strong>Planning something a little different?</strong> We play live music for weddings, birthdays, private parties, and all kinds of celebrations. Even if your event isn’t listed above, there’s a good chance we can be part of it. Get in touch and let us know what you’re planning.
        </p>
    </section>
</template>

<script setup>
import { ref } from 'vue'
// single card for styling - TODO: add array of cards
const cards = [
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

const currentIndex = ref(0)
const uiCards = ref()
function moveCards() {
    currentIndex.value++
    if (currentIndex.value >= cards.length) {
        currentIndex.value = 0
    }
}
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
    .event-cards
        list-style: none
        display: flex
        gap: 1.5rem
        position: absolute
        top: 0
        left: 0
        transform: translateX(calc(var(--current-index) * -1 * (18.375rem + 1.5rem)))
        transition: transform 0.4s ease
        h3
            font-size: 1.5rem
            font-family: var(--section-heading-font)
            text-transform: uppercase
            color: var(--primary-contrast-light)
        p
            color: var(--primary-light)
            font-family: var(--copy-font)
        li
            background: var(--primary-dark)
            padding: 1.5rem
            height: 25rem
            width: 18.375rem
            flex-shrink: 0
            background: var(--primary-dark)
            padding: 1.5rem
            height: 25rem
            width: 18.375rem
            flex-shrink: 0
            display: flex
            flex-direction: column
            gap: 1.5rem
            @media (min-width: 743px)
                width: 20rem
        @media (min-width: 743px)
            transform: translateX(calc(var(--current-index) * -1 * (20rem + 1.5rem)))
            li
                width: 20rem
    .events-soft-cta
        font-size: 1.5rem
        font-family: var(--copy-font)
        position: relative
        @media (min-width: 743px)
            font-size: 1.75rem
            text-align: center
            max-width: 821px
            margin: 0 auto
    .window
        width: 100%
        overflow: hidden
        max-width: 100%
        height: 400px
        position: relative
        .right
            position: absolute
            top: 0
            right: 0
            z-index: 2
            height: 100%
            width: 3rem
            background: linear-gradient(to left, #000, rgba(0, 0, 0, 0))
            cursor: pointer
            span
                display: none
</style>