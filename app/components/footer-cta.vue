<template>
    <section class="footer-cta">
        <h2>
            Ready to make your event unforgettable?
        </h2>
        <p>
            Bring live Norteño music, energy, and experience to your next event.
        </p>
        <button class="book-now">
            Book Now
        </button>
    </section>
</template>

<script setup></script>

<style lang="sass">
.footer-cta
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    padding: 1.5rem
    text-align: center
    background: var(--primary-contrast)
    gap: 1.5rem
    @media (min-width: 743px)
        gap: 3rem
        padding: 3rem 1.5rem
    button
        width: 11.25rem
        height: 3rem
        font-family: var(--section-heading-font)
        text-transform: uppercase
        border: none
        border-radius: .25rem
        &.book-now
            background: var(--primary-contrast-light)
            color: var(--secondary-dark)
    h2
        font-family: var(--display-font)
        color: var(--primary-dark)
        max-width: 880px
        @media (min-width: 743px)
            font-size: 2rem
        @media (min-width: 1019px)
            font-size: 2rem
    p
        font-family: var(--copy-font)
        color: var(--primary-dark)
        max-width: 526px
        @media (min-width: 743px)
            font-size: 1.5rem
        @media (min-width: 1019px)
            font-size: 2rem
</style>