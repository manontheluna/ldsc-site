<template>
    <div class="trust-section">
        <ul>
            <li v-for="(item, index) in TRUST_ITEMS" :key="index">
                <h2>
                    {{ item.heading }}
                </h2>
                <p>
                    {{ item.subheading }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script setup>
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
        @media (min-width: 1019px)
            flex-wrap: nowrap
    li
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        gap: 1.5rem
        font-family: var(--copy-font)
        color: var(--primary-light)
        padding: 6rem 3rem
        @media (min-width: 524px)
            width: calc(100% / 2 - 1.5rem)
</style>