<template>
    <section class="events-we-play">
        <h2>
            Events We Play
        </h2>
        <ul class="event-cards">
            <li v-for="(card, index) in cards" :key="index">
                <h3>
                    {{ card.label }}
                </h3>
                <p>
                    {{ card.copy }}
                </p>
            </li>
        </ul>
        <p class="events-soft-cta">
            <strong>Planning something a little different?</strong> We play live music for weddings, birthdays, private parties, and all kinds of celebrations. Even if your event isn’t listed above, there’s a good chance we can be part of it. Get in touch and let us know what you’re planning.
        </p>
    </section>
</template>

<script setup>
    // single card for styling - TODO: add array of cards
    const cards = [
        {
            label: 'Birthdays',
            copy: 'Make your birthday celebration one to remember with live music, great energy, and songs everyone can enjoy. We bring the party to life and keep your guests singing, dancing, and having a great time.'
        },
        {
            label: 'Weddings',
            copy: 'From the ceremony to the reception, we provide live music that sets the perfect mood for your special day. We’ll help create unforgettable moments and keep the dance floor moving all night long.'
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
    h2
        font-size: 1.5rem
        font-family: var(--display-font)
        color: var(--primary-dark)
    ul
        list-style: none
        border: 1px dashed red
        display: flex
        overflow: hidden
        gap: 1.5rem
        li
            background: var(--primary-dark)
            padding: 1.5rem
            height: 25rem
            width: 18.375rem
            flex-shrink: 0
            display: flex
            flex-direction: column
            gap: 1.5rem
        h3
            font-size: 1.5rem
            font-family: var(--section-heading-font)
            text-transform: uppercase
            color: var(--primary-contrast-light)
        p
            color: var(--primary-light)
            font-family: var(--copy-font)
    .events-soft-cta
        font-size: 1.5rem
        font-family: var(--copy-font)
</style>