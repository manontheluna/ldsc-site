<template>
    <section class="trust-section">
        <ul>
            <li v-for="(item, index) in tm('trust.items')" :key="index">
                <h2>
                    {{ rt(item.heading) }}
                </h2>
                <p>
                    {{ rt(item.subheading) }}
                </p>
            </li>
        </ul>
    </section>
</template>

<script setup>

const { rt, tm } = useI18n()

const TRUST_ITEMS = [
    {
        heading: '20+ Years',
        subheading: 'Of Experience'
    },
    {
        heading: 'Professional',
        subheading: 'Sound & Presentation'
    },
    {
        heading: 'Live',
        subheading: 'Entertainment'
    },
    {
        heading: 'Reliable',
        subheading: '& Punctual'
    }
]
</script>

<style lang="sass">
.trust-section
    background: var(--primary-dark)
    padding: 3rem 1.5rem
    h2
        font-size: 1.5rem
        color: var(--primary-contrast-light)
        font-family: var(--section-heading-font)
        text-transform: uppercase
        @media (min-width: 1019px)
            font-size: 1.25rem
    h3
        font-family: var(--copy-font)
    ul
        display: flex
        flex-direction: column
        gap: 3rem
        @media (min-width: 524px)
            flex-direction: row
            flex-wrap: wrap
            gap: 1.5rem
        @media (min-width: 1140px)
            flex-wrap: nowrap
    li
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        gap: 1.5rem
        font-family: var(--copy-font)
        color: var(--primary-light)
        padding: 3rem
        @media (min-width: 524px)
            width: calc(100% / 2 - 1.5rem)
        @media (min-width: 1019px)
            padding: 6rem 3rem
</style>